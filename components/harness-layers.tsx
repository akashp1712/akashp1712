"use client";

import { useEffect, useRef, useState } from "react";
import ToolBrand, { toolBrands } from "./tool-brand";
const tileTools = ["Claude", "Mastra", "LiveKit", "Python", "TypeScript", "React", "AWS", "Next.js", "FastAPI"];

const layers = [
  { name: "Judgment", tag: "The harness", title: "I connect the pieces.", description: "Understand the problem. Choose the approach. Own the tradeoffs from the first design to the working system.", items: ["System design", "Product thinking", "Human approval"], link: "/#experience", evidence: "Explore my engineering experience" },
  { name: "Skills", tag: "The capabilities", title: "The patterns I bring to a problem.", description: "Agent orchestration, conversation state, memory, voice interactions, and recovery when a tool fails.", items: ["Agent runtimes", "Voice systems", "Decision memory"], link: "https://ai-sdk-patterns.dev", evidence: "Explore AI SDK Patterns" },
  { name: "Tools", tag: "The execution layer", title: "Turn a design into working software.", description: "Languages, frameworks, and infrastructure selected for the job. Connected through explicit interfaces.", items: ["Claude", "Mastra", "LiveKit", "Python", "TypeScript", "React", "AWS"], link: "https://evercall.app", evidence: "See the tools at work in Evercall" },
  { name: "Experience", tag: "The foundation", title: "Context earned by building.", description: "Ten years across Salesforce, Amazon, and McAfee. Agent products, messaging platforms, and production backends.", items: ["Salesforce", "Amazon", "McAfee"], link: "/#experience", evidence: "Read the work history" },
];
const nodes = [[30,40],[90,20],[150,48],[210,25],[270,50],[50,100],[120,90],[190,115],[260,105],[25,160],[95,175],[165,155],[235,180],[290,155]];

export default function HarnessLayers() {
  const [active, setActive] = useState(0);
  const current = layers[active];
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className={`layers-experience ${revealed ? "layers-revealed" : ""}`} aria-labelledby="layers-title">
    <header className="layers-heading"><div><p>Inside my harness</p><h2 id="layers-title">Built in layers.<br />Connected by judgment.</h2></div><p>Select a layer to explore the system.<br />A visual model of how I work.</p></header>
    <div className="layers-stage">
      <div className="layers-diagram" aria-hidden="true">
        <svg viewBox="0 0 520 750" fill="none">
          <defs>
            <linearGradient id="layer-face" x1="40" y1="0" x2="470" y2="220" gradientUnits="userSpaceOnUse"><stop stopColor="var(--plate-start)"/><stop offset="1" stopColor="var(--plate-end)"/></linearGradient>
            <linearGradient id="layer-top" x1="30" y1="0" x2="450" y2="200" gradientUnits="userSpaceOnUse"><stop stopColor="var(--plate-top-start)"/><stop offset=".55" stopColor="var(--plate-top-mid)"/><stop offset="1" stopColor="var(--plate-top-end)"/></linearGradient>
            <filter id="layer-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
          </defs>
          <path d="M260 60V705 M40 170V620 M480 170V620" stroke="var(--layer-accent)" strokeOpacity=".18" strokeDasharray="3 9"/>
          {[3,2,1,0].map(index => {
            const y=40+index*155;
            const selected=active===index;
            return <g key={index} className={`iso-layer ${selected ? "is-selected" : ""}`} style={{opacity:selected?1:.85, animationDelay: `${(3-index)*100}ms`}}>
              {selected && <path d={`M260 ${y-4} 487 ${y+110} 260 ${y+224} 33 ${y+110}Z`} stroke="var(--layer-accent)" strokeWidth="5" opacity=".45" filter="url(#layer-glow)"/>}
              <path d={`M40 ${y+110} 260 ${y+220} 480 ${y+110}V${y+123}L260 ${y+233} 40 ${y+123}Z`} fill="var(--plate-edge)" stroke="var(--plate-outline)"/>
              <path d={`M260 ${y} 480 ${y+110} 260 ${y+220} 40 ${y+110}Z`} fill={index===0?"url(#layer-top)":"url(#layer-face)"} stroke={selected?"var(--layer-accent)":"var(--plate-outline)"} strokeWidth={selected?2:1}/>
              <g transform={`matrix(.7 .35 -.7 .35 217 ${y+18})`}>
                {index===0 && <><rect x="65" y="45" width="180" height="135" rx="12" fill="#252333" stroke="#fbf9ff" strokeWidth="3"/><path d="M95 142 120 80 145 142M105 121H135M165 142V80H190Q215 80 215 101Q215 121 190 121H165" stroke="#eee8ff" strokeWidth="10" strokeLinejoin="round"/><path d="M80 195H230" stroke="#fff" strokeWidth="3"/></>}
                {index===1 && <>{nodes.map(([x,y],i) => <g key={i}>{nodes.slice(i+1,i+4).map(([x2,y2],j) => <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="var(--layer-accent)" strokeWidth="2"/>)}<circle cx={x} cy={y} r="5" fill="var(--layer-accent)"/></g>)}</>}
                {index===2 && <>{tileTools.map((name,i) => {
                  const x=(i%3)*95+12, y=Math.floor(i/3)*66+15;
                  return <g key={name}><rect x={x} y={y} width="76" height="52" rx="6" fill="#f4f0fa" stroke={name==="Claude"?"#df9278":name==="LiveKit"?"#a3f291":"#c6b6e6"} strokeWidth="2"/><image href={`/tool-icons/${toolBrands[name]}.svg`} x={x+25} y={y+5} width="26" height="26"/><text x={x+38} y={y+44} textAnchor="middle" fill="#282332" fontSize="10" fontFamily="sans-serif">{name}</text></g>;
                })}</>}
                {index===3 && <>{["experience.load()", "  Salesforce / agents", "  Amazon / platforms", "  McAfee / systems", "", "context: 10 years", "output: working software"].map((line,i) => <text key={i} x="12" y={25+i*25} fill={i===0||i===5?"var(--layer-accent)":"var(--ink-soft)"} fontSize="14" fontFamily="monospace">{line}</text>)}</>}
              </g>
            </g>;
          })}
        </svg>
      </div>
      {layers.map((layer,index) => <button type="button" key={layer.name} className={`layer-callout layer-callout-${index} ${active===index?"is-active":""}`} aria-pressed={active===index} aria-controls="layer-inspector" onClick={() => setActive(index)}><span className="layer-label">{layer.tag}</span><h3>{layer.name}</h3><p>{layer.title}</p>{index===2 && <span className="layer-brand-preview">{["Claude", "Mastra", "LiveKit"].map(name => <ToolBrand key={name} name={name} />)}</span>}<span className="layer-open">{active===index?"Selected layer":"Explore layer"} <span aria-hidden="true">↗</span></span></button>)}
    </div>
    <div className="layer-inspector" id="layer-inspector" aria-live="polite" aria-atomic="true"><div><span>{current.tag}</span><h3>{current.name}</h3></div><div><p>{current.description}</p><ul>{current.items.map(item => <li key={item}>{active===2 ? <ToolBrand name={item} /> : item}</li>)}</ul><a href={current.link}>{current.evidence} <span aria-hidden="true">↗</span></a></div></div>
  </section>;
}
