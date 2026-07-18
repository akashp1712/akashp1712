/**
 * StateDiagram — lifecycle states with labeled transitions.
 * Uses a main spine + optional branch column so skip transitions
 * don't draw labels through unrelated nodes.
 */
"use client";

import { useId } from "react";
import { DiagramFrame } from "./diagram-frame";

type State = {
  id: string;
  label: string;
  sub?: string;
  accent?: boolean;
  /** When set, the node sits in a side branch instead of the main spine. */
  branch?: "left" | "right";
};
type Transition = { from: string; to: string; label?: string };

export function StateDiagram({
  states,
  transitions,
  caption,
}: {
  states: State[];
  transitions: Transition[];
  caption?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const markerId = `state-arrow-${uid}`;

  const nodeW = 148;
  const nodeH = 58;
  const padX = 32;
  const padY = 28;
  const rowGap = 92;
  const branchOffset = 188;
  const spineX = padX + 24;

  const spineStates = states.filter((s) => !s.branch);
  const spineIndex = (id: string) => spineStates.findIndex((s) => s.id === id);

  const pos = (id: string) => {
    const state = states.find((s) => s.id === id)!;
    if (state.branch === "right") {
      const runIdx = spineIndex("run");
      const anchor = runIdx >= 0 ? runIdx : 1;
      return {
        x: spineX + branchOffset,
        y: padY + anchor * (nodeH + rowGap),
        row: anchor,
        branch: true as const,
      };
    }
    const idx = spineIndex(id);
    return {
      x: spineX,
      y: padY + idx * (nodeH + rowGap),
      row: idx,
      branch: false as const,
    };
  };

  const maxSpineRow = spineStates.length - 1;
  const width = spineX + nodeW + branchOffset + nodeW + padX;
  const height = padY * 2 + maxSpineRow * (nodeH + rowGap) + nodeH;

  const nodeCenter = (id: string) => {
    const p = pos(id);
    return { cx: p.x + nodeW / 2, cy: p.y + nodeH / 2, ...p };
  };

  const labelPill = (text: string, x: number, y: number) => {
    const w = Math.max(28, text.length * 5.8 + 14);
    return (
      <>
        <rect
          x={x - w / 2}
          y={y - 9}
          width={w}
          height="16"
          rx="4"
          fill="var(--paper-raised)"
          stroke="var(--line)"
          strokeWidth="0.5"
        />
        <text
          x={x}
          y={y + 3}
          textAnchor="middle"
          fontSize="10"
          fill="var(--ink-faint)"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          {text}
        </text>
      </>
    );
  };

  return (
    <DiagramFrame caption={caption}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="mx-auto block"
        style={{ maxWidth: "100%", color: "var(--accent)" }}
        role="img"
      >
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10z" fill="currentColor" />
          </marker>
        </defs>

        {transitions.map((t, i) => {
          const a = nodeCenter(t.from);
          const b = nodeCenter(t.to);
          const fromBranch = a.branch;
          const toBranch = b.branch;
          let d: string;
          let lx: number;
          let ly: number;

          if (fromBranch && !toBranch) {
            d = `M${a.x},${a.cy} C${a.x - 36},${a.cy} ${b.x + nodeW + 24},${b.cy} ${b.x + nodeW},${b.cy}`;
            lx = (a.x + b.x + nodeW) / 2;
            ly = a.cy - 14;
          } else if (!fromBranch && toBranch) {
            d = `M${a.x + nodeW},${a.cy} C${a.x + nodeW + 36},${a.cy} ${b.x - 24},${b.cy} ${b.x},${b.cy}`;
            lx = (a.x + nodeW + b.x) / 2;
            ly = a.cy - 14;
          } else if (b.row > a.row && !fromBranch && !toBranch) {
            d = `M${a.cx},${a.y + nodeH} C${a.cx},${a.y + nodeH + 34} ${b.cx},${b.y - 34} ${b.cx},${b.y}`;
            lx = a.cx + 58;
            ly = (a.y + nodeH + b.y) / 2;
          } else if (b.row < a.row && !fromBranch && !toBranch) {
            const laneX = padX + 4;
            d = `M${a.cx},${a.y} C${laneX},${a.y - 20} ${laneX},${b.y + nodeH + 20} ${b.cx},${b.y + nodeH}`;
            lx = laneX + 8;
            ly = (a.y + b.y + nodeH) / 2;
          } else {
            d = `M${a.cx},${a.y + nodeH} L${b.cx},${b.y}`;
            lx = (a.cx + b.cx) / 2;
            ly = (a.y + nodeH + b.y) / 2;
          }

          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                markerEnd={`url(#${markerId})`}
                opacity="0.75"
              />
              {t.label && labelPill(t.label, lx, ly)}
            </g>
          );
        })}

        {states.map((s) => {
          const p = pos(s.id);
          return (
            <g key={s.id}>
              <rect
                x={p.x}
                y={p.y}
                width={nodeW}
                height={nodeH}
                rx="10"
                fill={
                  s.accent
                    ? "var(--accent-soft)"
                    : "color-mix(in oklab, var(--ink) 4%, transparent)"
                }
                stroke={
                  s.accent
                    ? "color-mix(in oklab, var(--accent) 32%, transparent)"
                    : "var(--line)"
                }
                strokeWidth="1"
              />
              <text
                x={p.x + nodeW / 2}
                y={s.sub ? p.y + nodeH / 2 - 4 : p.y + nodeH / 2 + 4}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight="600"
                fill="var(--ink)"
              >
                {s.label}
              </text>
              {s.sub && (
                <text
                  x={p.x + nodeW / 2}
                  y={p.y + nodeH / 2 + 12}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="var(--ink-faint)"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {s.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}
