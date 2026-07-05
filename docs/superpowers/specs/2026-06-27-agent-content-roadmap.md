# Agent Content Roadmap — Tutorials & Blog

**Date:** 2026-06-27
**Goal:** A library of evergreen tutorials + blog posts on *building AI agents*, derived from real production lessons but fully generalized. Optimized for SEO, reading fluency, strong diagrams, and delightful quality.

---

## Non-negotiable: zero proprietary leakage

Every piece is written from first principles about the *general problem*, never the internal system.

**Hard rules (apply to every draft):**
- No internal project names, product names, codenames, customer names, or team names.
- No internal API shapes, endpoint paths, DB schemas, or event names copied verbatim.
- No proprietary architecture diagrams. Diagrams are redrawn generically (e.g. "Agent → Tool → Store", not the real service graph).
- Code examples are written fresh against **public** libraries (OpenAI/Anthropic SDKs, FastAPI, Postgres, Redis) — never pasted from the codebase.
- Eval case IDs, baseline numbers, prompt text, and skill bodies are never reproduced.
- Litmus test before publishing each post: *"Could a competitor learn anything specific about how our system works from this?"* If yes → rewrite.

The concepts below are industry-universal (context windows, asyncio, SSE, evals). Teaching them leaks nothing.

---

## Content pillars

Six evergreen pillars. Each has a flagship deep tutorial + satellite blog posts.

| Pillar | Theme | Audience |
|--------|-------|----------|
| 1. Agent Architecture & Lifecycle | The core loop, state, modes, dynamic prompts | Agent builders |
| 2. Memory & Context | Context windows, layered memory, persistence | Agent builders |
| 3. Evaluating & Improving Agents | Offline evals, scoring, prompt optimization, trace mining | ML/agent engineers |
| 4. Streaming & Real-time UX | SSE protocols, streaming tool calls, FE contracts | Full-stack |
| 5. Production Python & Concurrency | asyncio, backpressure, cancellation, FastAPI structure | Backend engineers |
| 6. Observability & Resilience | Structured logging, error classification, degradation | Reliability-minded devs |

---

## The pieces

Legend: 🟢 Blog note (800–1.8k words) · 🔵 Tutorial (2.5–4.5k words) · ⭐ Flagship

### Pillar 1 — Agent Architecture & Lifecycle
- ⭐🔵 **Build a Harness Agent from Scratch** — the agent loop (perceive → decide → act → observe), tool-calling, the turn lifecycle. The series anchor.
- 🔵 **The Agent Lifecycle: init, hydrate, run, persist** — who owns what state across a turn; resettable state between turns.
- 🟢 **Dynamic system prompts: making an agent context-aware without restarts** — injecting runtime context cleanly.
- 🟢 **One agent, many modes: swapping behavior without losing the thread** — different tools/instructions/model per mode, shared history.

### Pillar 2 — Memory & Context
- ⭐🔵 **Managing the context window: a three-layer memory system** — rolling window → observational summaries → compressed reflection; threshold-triggered, non-blocking.
- 🟢 **Stop re-reading huge tool outputs: breadcrumbs over blobs** — keep call signatures, replace bulky results on recall.
- 🔵 **Database-agnostic conversation persistence** — clean storage interfaces (memory → Redis → Postgres) that don't leak DB assumptions.
- 🟢 **Bounding tool output size: unbounded payloads are a footgun** — trimming at every I/O boundary; failure modes (OOM, buffer bloat).

### Pillar 3 — Evaluating & Improving Agents
- ⭐🔵 **Offline evals for agents: the unit test you're missing** — reproducible cases + multi-dimensional scoring + CI gates + run comparison.
- 🔵 **Multi-dimensional scoring for agent outputs** — deterministic rules + LLM judges + (optional) vision; per-dimension gates and compositing.
- 🔵 **Prompt optimization as gradient descent in text space** — failure→propose, success→preserve, gate on held-out validation; avoiding val overfit.
- 🟢 **Mining test cases from production traces** — sample → redact → minimal-repro → human review before merge.
- 🟢 **Continuous quality monitoring in production** — sampling, PII redaction, reuse the CI scorer, alert on regression.

### Pillar 4 — Streaming & Real-time UX
- ⭐🔵 **Designing an SSE protocol for agents** — event groups (lifecycle / progress / delivery), shared envelopes, one handler per group, additive evolution.
- 🟢 **Streaming tool calls: accumulating function-call deltas by index** — the accumulator pattern for fragmented JSON.
- 🟢 **Intent-based UI↔agent contracts** — edit vs regenerate vs vary; single/multi/bulk selection; defensive schemas.
- 🟢 **Evolving a streaming protocol without breaking clients** — additive groups, defensive parsing, ignore-unknown.

### Pillar 5 — Production Python & Concurrency
- ⭐🔵 **asyncio for agent builders: the mental model that finally clicks** — event loop, TaskGroup, structured concurrency, streaming.
- 🔵 **Handling 100 concurrent LLM calls: semaphores & backpressure** — the bounded-concurrency primitive most people get wrong.
- 🔵 **Cancellation done right: the three rules** — never swallow CancelledError, never retry a cancel, clean up resources.
- 🔵 **Structuring a FastAPI agent service: router → service → repository** — layering, DI with `Depends`, testability.
- 🟢 **Graceful shutdown: SIGINT/SIGTERM without losing in-flight work**.
- 🟢 **The latency budget: streaming a 2.5s pipeline down to 800ms** — compounding wins from streaming + pooling + co-location.

### Pillar 6 — Observability & Resilience
- 🔵 **Structured logging for async agents with ContextVar** — request-scoped context without threading IDs everywhere; JSON for log search.
- 🟢 **Error classification: retryable vs terminal** — actionable signals for agent and client.
- 🟢 **Graceful degradation when a dependency is down** — fall back to cache instead of failing the run.
- 🟢 **Probe-first: 15 minutes of curl before you parse a quirky API** — BOMs, trailing commas, 200-with-error-body.

**Totals:** ~12 tutorials, ~14 blog posts, 5 flagships.

---

## Publishing sequence (so the blog never looks empty mid-build)

Each "wave" pairs one flagship tutorial with 2 quick blog notes so there's always fresh short-form between the big drops.

1. **Wave 1 — Foundations:** ⭐ Build a Harness Agent from Scratch · 🟢 Dynamic system prompts · 🟢 Error classification
2. **Wave 2 — Memory:** ⭐ Three-layer context window · 🟢 Breadcrumbs over blobs · 🟢 Bounding tool output size
3. **Wave 3 — Concurrency:** ⭐ asyncio mental model · 🟢 Latency budget · 🟢 Graceful shutdown
4. **Wave 4 — Evals:** ⭐ Offline evals · 🟢 Mining cases from traces · 🟢 Probe-first APIs
5. **Wave 5 — Streaming:** ⭐ SSE protocol design · 🟢 Streaming tool-call deltas · 🟢 Intent-based contracts

Remaining tutorials (persistence, scoring, prompt optimization, FastAPI layering, cancellation, concurrent LLM calls, ContextVar logging, modes, lifecycle, degradation, protocol evolution) fill in across waves 2–6.

---

## Diagram & illustration system

Lean into code-native SVG diagrams (theme-aware, crisp, versionable) — extends the existing `PipelineDiagram`. Build a small primitive library in `components/mdx/`:

| Primitive | Use | Status |
|-----------|-----|--------|
| `PipelineDiagram` | linear stages (STT→LLM→TTS) | ✅ exists |
| `LoopDiagram` | the agent loop (cyclic, 4 nodes) | build |
| `LayerDiagram` | stacked layers (3-layer memory, router/service/repo) | build |
| `SequenceDiagram` | actor message flow (FE ↔ agent ↔ tools, SSE events) | build |
| `StateDiagram` | lifecycle states + transitions | build |
| `LatencyBar` | stacked latency budget bars w/ before→after | build |
| `Figure` / `Callout` | captioned image + callouts | ✅ exists |

**Standards:** every diagram uses the reading-theme CSS vars (single terracotta accent), works light+dark, scrolls inside its frame on mobile (no page overflow — already verified), and carries a `<figcaption>`. For the occasional hero/illustration where SVG-primitives don't fit, generate a tasteful editorial illustration (consistent warm-paper palette) rather than stock art.

Rule of thumb: **one diagram per major concept**, placed right after the concept is introduced, not at the end.

---

## SEO plan

- **Per-post:** unique `<title>` + meta description (already wired via Velite frontmatter + `generateMetadata`), canonical URL, OG + Twitter cards, JSON-LD (`Article` for tutorials, `BlogPosting` for blog). ✅ infra exists.
- **Keywords:** target long-tail dev queries — "how to manage LLM context window", "asyncio concurrent api calls", "server-sent events streaming agent", "offline eval LLM", "fastapi streaming endpoint". Title + H1 + first paragraph carry the phrase naturally.
- **Internal linking:** every post links to its pillar siblings and the flagship (topic-cluster model → strong topical authority). The `[[wikilink]]`-style cross-refs render as real links.
- **Structure:** descriptive H2/H3 with anchor slugs (✅ rehype-slug), TOC on tutorials, scannable — short paragraphs, code, diagrams.
- **Feeds & crawl:** sitemap, robots, RSS, `llms.txt` already in place. Add `lastmod` from `updatedAt`.
- **Performance:** static SSG (already), fast LCP — good Core Web Vitals feed ranking.
- **Reading time + published/updated dates** visible (✅) — trust signals.

---

## Reading fluency & quality bar

- Editorial voice: explain slowly, one idea per paragraph, concrete before abstract.
- Every tutorial opens with **the problem and a payoff promise**, ends with **"where to go next"**.
- Code blocks are runnable and minimal; highlight the line that matters.
- Callouts for gotchas/footguns (single-accent, already built).
- Prose column capped for line-length comfort; wide frame for diagrams/code (recent width work).
- A "you'll build / you'll learn" box near the top of each tutorial.

---

## Future / parked topics (need the human's input before drafting)

- **Building an Agent with Mastra + Mastra Harness.** Akash wants to write this *eventually* and has his own ideas to bring to it — so do **not** fully draft it without his input. This is the natural framework-level follow-up to the from-scratch flagship: once a reader understands the loop / state / lifecycle by hand, show how Mastra and the Mastra Harness express those same primitives. Keep it generalized (no proprietary specifics). Slot: Wave 4–5, after the core "what is a harness" pieces have landed so it reads as "here's a framework that does what you just built."

---

## Open decisions (for the human)

1. **Voice** — first-person practitioner ("here's how I think about…") vs neutral instructional. *Recommend: first-person, it's a personal blog.*
2. **Code language** — Python-first (matches the source material) vs TS-first vs both. *Recommend: Python-first for agent/backend, TS for the streaming/FE pieces.*
3. **Cadence** — how many posts per wave to actually draft now vs scaffold-only.
4. **First flagship to fully write** — recommend "Build a Harness Agent from Scratch" (you named it earlier as the one you wanted).
