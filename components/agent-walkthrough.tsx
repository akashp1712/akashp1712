"use client";

import { useState } from "react";

const steps = [
  { name: "Listen", event: "speech.received", title: "A request becomes context.", description: "A caller describes a burst pipe. Capture the problem and location before taking action.", decision: "Keep conversation state separate from tool results so an assumption never becomes a confirmed booking." },
  { name: "Interrupt", event: "speech.interrupted", title: "The caller changes the details.", description: "The caller interrupts to correct the address. Stop the current response and update the request.", decision: "Cancel stale speech and invalidate any pending action that depends on the old address." },
  { name: "Use a tool", event: "availability.requested", title: "Check before promising.", description: "Ask a scheduling tool for availability using the corrected details.", decision: "Treat external tool output as evidence. A requested slot is not a booked slot." },
  { name: "Confirm", event: "confirmation.required", title: "Make the action explicit.", description: "Read back the address and available slot. Ask the caller to confirm before attempting a booking.", decision: "Place confirmation at the boundary between a proposed action and a durable write." },
  { name: "Resolve", event: "booking.result", title: "Report what actually happened.", description: "Only announce success after receiving a confirmed booking result. Preserve the result for the follow-up message.", decision: "Use a stable request identifier to avoid duplicate bookings when a request is retried." },
];

export default function AgentWalkthrough() {
  const [active, setActive] = useState(0);
  const [failure, setFailure] = useState(false);
  const step = steps[active];
  return (
    <section className="home-col runtime-section" aria-labelledby="runtime-heading">
      <div className="runtime-intro">
        <div><h2 id="runtime-heading">Inside the runtime</h2><p>An agent is only as useful as what happens between the prompt and the result.</p></div>
        <span className="example-label">Illustrative voice-agent flow</span>
      </div>
      <div className="runtime-panel">
        <nav className="trace-steps" aria-label="Explore the execution trace">
          {steps.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}</button>)}
        </nav>
        <div className="trace-detail" aria-live="polite" aria-atomic="true">
          <code>{failure && active === 4 ? "booking.timeout" : step.event}</code>
          <h3>{failure && active === 4 ? "Uncertain is a real state." : step.title}</h3>
          <p>{failure && active === 4 ? "The booking tool timed out. Tell the caller the booking is unconfirmed and arrange a human follow-up." : step.description}</p>
          <div className="trace-decision"><strong>Engineering decision</strong><p>{failure && active === 4 ? "Check the existing request before retrying: a timeout does not prove that the write failed. Never turn an unknown result into a success message." : step.decision}</p></div>
        </div>
        <div className="trace-controls"><button type="button" aria-pressed={failure} onClick={() => { setFailure(!failure); setActive(4); }}>{failure ? "Restore successful response" : "Explore a tool timeout"}</button><span>Design example, not live telemetry.</span></div>
      </div>
      <p className="runtime-note">Explore the underlying problems in <a href="/articles/voice-agents-hard-problems">Voice Agents: The Hard Problems</a>.</p>
    </section>
  );
}
