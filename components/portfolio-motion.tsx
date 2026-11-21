"use client";

import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type ComponentPropsWithoutRef } from "react";

export function PressLink(props: ComponentPropsWithoutRef<"a">) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={props.href}
        className={props.className}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.14 }}
      >
        {props.children}
      </m.a>
    </LazyMotion>
  );
}

export function Underline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  return (
    <span ref={ref} className="ink-underline" data-drawn={visible}>
      {children}
    </span>
  );
}

export function ProjectDetail({ title, children }: { title: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <details className="build-detail">
      <summary>What I built<span className="sr-only"> for {title}</span><span aria-hidden="true" className="build-chevron">⌄</span></summary>
      <LazyMotion features={domAnimation}>
        <m.p initial={false} whileInView={reduced ? undefined : { y: [3, 0], opacity: [0.65, 1] }} transition={{ duration: 0.2 }}>
          {children}
        </m.p>
      </LazyMotion>
    </details>
  );
}
