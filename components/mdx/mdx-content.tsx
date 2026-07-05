"use client";

import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "./callout";
import { Diagram } from "./diagram";
import { Figure } from "./figure";
import { PipelineDiagram } from "./pipeline-diagram";
import { LoopDiagram } from "./loop-diagram";
import { LayerDiagram } from "./layer-diagram";
import { SequenceDiagram } from "./sequence-diagram";
import { LatencyBar } from "./latency-bar";
import { FlowDiagram } from "./flow-diagram";

// Velite compiles MDX to a function body string. This turns it into a component.
function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

const components = {
  Callout,
  Diagram,
  Figure,
  PipelineDiagram,
  LoopDiagram,
  LayerDiagram,
  SequenceDiagram,
  LatencyBar,
  FlowDiagram,
  Image,
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
