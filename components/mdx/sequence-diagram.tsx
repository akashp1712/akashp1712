/**
 * SequenceDiagram — actor lifelines with ordered messages between them.
 */
"use client";

import { useId } from "react";
import { DiagramFrame } from "./diagram-frame";

type Actor = { id: string; label: string };
type Step = { from: string; to: string; label: string; dashed?: boolean };

export function SequenceDiagram({
  actors,
  steps,
  caption,
}: {
  actors: Actor[];
  steps: Step[];
  caption?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const markerId = `seq-arrow-${uid}`;

  const colW = 168;
  const padX = 48;
  const headH = 44;
  const rowH = 58;
  const topPad = 24;
  const width = padX * 2 + colW * (actors.length - 1) + 96;
  const height = topPad + headH + rowH * steps.length + 36;

  const colX = (id: string) => {
    const i = actors.findIndex((a) => a.id === id);
    return padX + 48 + colW * i;
  };

  const labelW = (s: string) => Math.max(28, s.length * 5.6 + 14);

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

        {actors.map((a) => {
          const x = colX(a.id);
          return (
            <g key={a.id}>
              <line
                x1={x}
                y1={topPad + headH}
                x2={x}
                y2={height - 24}
                stroke="var(--line)"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <rect
                x={x - 58}
                y={topPad}
                width="116"
                height={headH - 8}
                rx="8"
                fill="var(--accent-soft)"
                stroke="color-mix(in oklab, var(--accent) 30%, transparent)"
                strokeWidth="1"
              />
              <text
                x={x}
                y={topPad + headH / 2}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight="600"
                fill="var(--ink)"
              >
                {a.label}
              </text>
            </g>
          );
        })}

        {steps.map((s, i) => {
          const y = topPad + headH + rowH * i + rowH / 2;
          const x1 = colX(s.from);
          const x2 = colX(s.to);
          const ltr = x2 >= x1;
          const midX = (x1 + x2) / 2;
          const lw = labelW(s.label);
          const labelY = y - 10;
          const span = Math.abs(x2 - x1);
          const lift = span > colW * 0.8 ? 18 + i * 2 : 0;
          const lineY = y + lift;

          return (
            <g key={i}>
              <rect
                x={midX - lw / 2}
                y={labelY - 8}
                width={lw}
                height="15"
                rx="4"
                fill="var(--paper-raised)"
                stroke="var(--line)"
                strokeWidth="0.5"
              />
              <text
                x={midX}
                y={labelY + 3}
                textAnchor="middle"
                fontSize="10.5"
                fill="var(--ink-soft)"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                {s.label}
              </text>
              <line
                x1={x1 + (ltr ? 4 : -4)}
                y1={lineY}
                x2={x2 + (ltr ? -8 : 8)}
                y2={lineY}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray={s.dashed ? "5 4" : undefined}
                markerEnd={`url(#${markerId})`}
                opacity={s.dashed ? 0.6 : 0.85}
              />
            </g>
          );
        })}
      </svg>
    </DiagramFrame>
  );
}
