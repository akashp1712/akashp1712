/**
 * FlowDiagram — a small left-to-right node/edge graph for architecture and
 * decision flows (e.g. router → service → store, or a branch on a condition).
 * Lay out nodes in columns; draw arrows between them by id. Theme-aware.
 */
"use client";

import { useId } from "react";
import { DiagramFrame } from "./diagram-frame";

type FNode = { id: string; label: string; sub?: string; col: number; accent?: boolean };
type FEdge = { from: string; to: string; label?: string };

export function FlowDiagram({
  nodes,
  edges,
  caption,
}: {
  nodes: FNode[];
  edges: FEdge[];
  caption?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const markerId = `flow-arrow-${uid}`;

  const cols = Math.max(...nodes.map((n) => n.col)) + 1;
  const colW = 210;
  const nodeW = 132;
  const nodeH = 56;
  const gapY = 28;
  const padX = 20;
  const padY = 32;
  const labelW = (s: string) => Math.max(24, s.length * 5.6 + 12);

  const byCol: FNode[][] = Array.from({ length: cols }, () => []);
  nodes.forEach((n) => byCol[n.col].push(n));
  const maxRows = Math.max(...byCol.map((c) => c.length));
  const height = padY * 2 + maxRows * nodeH + (maxRows - 1) * gapY + 40;
  const width = padX * 2 + (cols - 1) * colW + nodeW;

  function pos(id: string) {
    const n = nodes.find((x) => x.id === id)!;
    const colNodes = byCol[n.col];
    const idx = colNodes.findIndex((x) => x.id === id);
    const colHeight = colNodes.length * nodeH + (colNodes.length - 1) * gapY;
    const startY = (height - colHeight) / 2;
    return {
      x: padX + n.col * colW,
      y: startY + idx * (nodeH + gapY),
      col: n.col,
    };
  }

  function edgePath(e: FEdge) {
    const a = pos(e.from);
    const b = pos(e.to);
    const sx = a.x + nodeW;
    const sy = a.y + nodeH / 2;
    const ex = b.x;
    const ey = b.y + nodeH / 2;
    const colDelta = b.col - a.col;
    const sameRow = Math.abs(sy - ey) < 1;
    const midX = (sx + ex) / 2;

    if (sameRow && colDelta > 1) {
      const lift = 36 + (colDelta - 2) * 10;
      const arcY = Math.min(sy, ey) - lift;
      return {
        d: `M${sx},${sy} C${sx + 50},${arcY} ${ex - 50},${arcY} ${ex - 8},${ey}`,
        lx: midX,
        ly: arcY - 8,
      };
    }

    if (sameRow && colDelta < 0) {
      const drop = 40 + Math.abs(colDelta) * 8;
      const arcY = sy + drop;
      return {
        d: `M${sx},${sy} C${sx + 40},${arcY} ${ex - 40},${arcY} ${ex - 8},${ey}`,
        lx: midX,
        ly: arcY + 14,
      };
    }

    if (sameRow && colDelta === 1) {
      return { d: `M${sx},${sy} C${midX},${sy} ${midX},${ey} ${ex - 8},${ey}`, lx: midX, ly: sy - 12 };
    }

    return {
      d: `M${sx},${sy} C${midX},${sy} ${midX},${ey} ${ex - 8},${ey}`,
      lx: midX,
      ly: (sy + ey) / 2,
    };
  }

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

        {edges.map((e, i) => {
          const { d, lx, ly } = edgePath(e);
          const lw = e.label ? labelW(e.label) : 0;
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
              {e.label && (
                <>
                  <rect
                    x={lx - lw / 2}
                    y={ly - 8}
                    width={lw}
                    height="15"
                    rx="4"
                    fill="var(--paper-raised)"
                  />
                  <text
                    x={lx}
                    y={ly + 3}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--ink-faint)"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {e.label}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {nodes.map((n) => {
          const p = pos(n.id);
          return (
            <g key={n.id}>
              <rect
                x={p.x}
                y={p.y}
                width={nodeW}
                height={nodeH}
                rx="10"
                fill={
                  n.accent
                    ? "var(--accent-soft)"
                    : "color-mix(in oklab, var(--ink) 4%, transparent)"
                }
                stroke={
                  n.accent
                    ? "color-mix(in oklab, var(--accent) 32%, transparent)"
                    : "var(--line)"
                }
                strokeWidth="1"
              />
              <text
                x={p.x + nodeW / 2}
                y={n.sub ? p.y + nodeH / 2 - 4 : p.y + nodeH / 2 + 4}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight="600"
                fill="var(--ink)"
              >
                {n.label}
              </text>
              {n.sub && (
                <text
                  x={p.x + nodeW / 2}
                  y={p.y + nodeH / 2 + 12}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="var(--ink-faint)"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {n.sub}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}
