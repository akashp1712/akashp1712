"use client";

import { useEffect, useState } from "react";
import { BsCheck2, BsClipboard } from "react-icons/bs";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }

  return (
    <div className="copy-email">
      <button type="button" onClick={copy} className="hero-work-link" data-copied={status === "copied"}>
        {status === "copied" ? <BsCheck2 aria-hidden /> : <BsClipboard aria-hidden />}
        <span aria-live="polite">{status === "copied" ? "Email copied" : "Copy email"}</span>
      </button>
      {status === "manual" && <p role="status">Copy this address: <strong>{email}</strong></p>}
    </div>
  );
}
