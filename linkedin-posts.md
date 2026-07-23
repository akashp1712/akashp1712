# LinkedIn Posts — Mastra / Agents Content

> **Purpose:** Build a reputation as a serious agentic engineer who understands Mastra
> deeply — inbound-only, let the work pull attention in. Sam Bhagwat is active on
> LinkedIn, so this is a primary channel.
>
> **Voice:** engineer sharing what they built, not influencer announcing. Hook-first,
> concrete, no emoji-soup. Lead with a real idea; the link is the payoff.
>
> **Hard rule:** zero Salesforce / Agentic Content Studio leakage. Every code snippet
> here is from public Mastra docs or generic public example patterns — never internal
> code, architecture, or product detail.
>
> **Links:** point to `akashpanchal.com`; swap in deep links (`/articles/...`,
> `/tutorials/...`) where noted.

---

## Suggested posting sequence (~5–6 weeks, steady drip)

There are now three bodies of work to distribute: the 7-part **series**, the four
standalone **deep-dive articles** (background tasks, processors, observational memory,
HITL), and the **comparison** piece. Don't dump them. Interleave announcements with
code posts so the feed never sees two "read my article" posts in a row.

**Week 1 — reintroduce the series & real-world build**
1. Day 1 — Series roundup (Post 2)
2. Day 3 — Case study: VibeFrames project launch (Post 7) ← shows the harness running a real app
3. Day 5 — Code post: modes (`tools` vs `additionalTools`) [Code Post 1]

**Week 2 — first deep-dive + the comparison peak**
4. Day 8 — Article: Observational Memory (Post 3) ← strongest standalone, lead the articles with it
5. Day 10 — Code post: subagent `forked` [Code Post 2]
6. Day 12 — The comparison piece (Post 1) ← peak; lands hardest once people have seen you know the Harness cold

**Week 3 — context-engineering pair**
7. Day 15 — Article: Processors (Post 4)
8. Day 17 — Code post: `steer` vs `followUp` [Code Post 3]

**Week 4 — the durability/HITL pair**
9. Day 22 — Article: Background Tasks (Post 5)
10. Day 24 — Article: Human-in-the-Loop (Post 6)

**Week 5+ — tail**
11. Part 7 / evals drip, then remaining code posts and per-part drips as filler.

Rationale: the series + code posts establish "knows Mastra deeply." THEN the deep-dive
articles show range, and the comparison reads as "…and has the judgment to place it
against LangChain." Lead the standalone articles with Observational Memory — it's the
most broadly useful and the least framework-insider, so it travels furthest.

---

# ============================================================
# PART A — Announcement / roundup posts
# ============================================================

## Post 1 — The harness comparison piece (highest signal)

> LangChain and Mastra both looked at the same problem — an agent loop isn't an application — and both, independently, named their answer the same thing: a "harness."
>
> But they bet on opposite shapes of work, and that's the interesting part.
>
> Mastra's AgentController is a stateful session host you hold and steer: modes, live steering mid-run, per-tool approvals surfaced to your UI, a conversation that survives a refresh. It's built for a human in the loop.
>
> LangChain's Deep Agents is a compiled graph you .invoke() with a goal and let run: a todo list, a virtual filesystem to think in, subagents with isolated context. It's built for autonomy over a long horizon.
>
> Both grew the same three features — subagents, human-in-the-loop, persisted work — but shaped each one to their center of gravity. Same words, different bets.
>
> The mistake I see teams make: pick the framework by its logo, then bend the product to fit it. The actual question is "how autonomous does my agent run, and how present is my user?" Answer that first and the choice falls out on its own.
>
> Wrote the full breakdown — with code from both — here:
> [akashpanchal.com/articles/two-agent-harnesses]
>
> #AI #Agents #Mastra #LangChain

---

## Post 2 — The 7-part Mastra series (roundup)

> Most agent tutorials stop at "here's a model in a loop with a tool." Then you try to ship it and everything the demo skipped shows up at once — no session that survives a refresh, no way to gate the destructive tool call, no way to prove the thing is any good.
>
> So I wrote the series I wanted when I started. 7 hands-on parts on Mastra, each with runnable code, built up from a single agent to something you'd actually put in front of users:
>
> 1. Agents — the loop, tools, memory across turns
> 2. Workflows — orchestration with guarantees: branching, loops, human-in-the-loop
> 3. The Harness — the AgentController runtime: sessions, modes, subagents, tool approvals
> 4. Streaming to a Real UI — tokens, tool calls, custom progress events
> 5. RAG — chunk, embed, retrieve, answer from your docs with citations
> 6. Long-Running & Durable Agents — background work, crash survival, cron heartbeats
> 7. Evals & Scorers — turning "it seems better" into "0.86, up from 0.71"
>
> No LLM 101. It starts where the other tutorials end.
>
> All of it here 👇
> [akashpanchal.com/tutorials]
>
> #AI #Agents #Mastra #TypeScript

---

# ============================================================
# PART A2 — Standalone deep-dive article announcements
# ============================================================
#
# One announcement per standalone article. Each opens with the SAME slow, scene-first
# hook as the article itself, then lands the link. Post these interleaved with code
# posts (see sequence above) — never two article posts back-to-back. Lead with Post 3
# (Observational Memory): most broadly useful, least framework-insider, travels furthest.
# ============================================================

## Post 3 — Observational Memory

> Think about a conversation you had last week.
>
> You don't remember it word for word. You remember the gist — who said what, roughly, and how it landed. If you need a specific detail, you reach back and reconstruct it. Forgetting the exact words is what lets you hold a week of conversations in your head at all.
>
> Most AI agents can't do that.
>
> An agent remembers by keeping the actual messages around and re-feeding them to the model every turn. Every word, verbatim, re-sent each time. It works beautifully for a short chat — and then the chat gets long, and you're stuck: keep it all and pay to re-read a novel every turn, or drop the old stuff and watch the agent forget the beginning.
>
> Mastra's observational memory takes the third path — the one your own memory uses. Recent messages stay sharp. Older ones get compressed into dense summaries. Older summaries get compressed again. The agent carries the gist, not the transcript.
>
> I wrote up the whole three-tier model and every config knob — including the one setting that's the easiest win on the page — here:
> [akashpanchal.com/tutorials/mastra-agents#step-3-add-memory]
>
> #AI #Agents #Mastra #ContextEngineering

---

## Post 4 — Processors (cutting input context)

> Imagine a coworker who, every time you ask a quick follow-up, first reads back to you every email, every search result, every document they've opened all week — out loud, in full — before answering.
>
> You'd stop asking follow-up questions.
>
> That's roughly what a tool-using agent does by default. Every tool call folds its full arguments and full result into the message history, and every turn after that, all of it gets re-read by the model. Verbatim. Whether it's still useful or not.
>
> And you're paying for that re-reading. Every token of it. Nobody notices in a demo — demos are short. You notice in production, on the invoice.
>
> Mastra's processors are where you push back: middleware that trims the message list before it reaches the model. There's a built-in for tool noise (`ToolCallFilter`), and an escape hatch for writing your own when you need surgical control over one specific chatty tool.
>
> The full walkthrough — including the one API detail that silently transforms nothing if you get it wrong — here:
> [akashpanchal.com/tutorials/mastra-agents]
>
> #AI #Agents #Mastra #ContextEngineering

---

## Post 5 — Background Tasks (work that survives a restart)

> Your agent kicks off a job — scrape forty pages, summarize each, compile a report. Ten minutes of work.
>
> Three minutes in, your server redeploys.
>
> The request dies with it. The work is gone. The user refreshes and sees nothing.
>
> The demo never caught this, because the demo finished in four seconds. Real work doesn't move that fast — and the moment an agent task can outlive the request that started it, you need two things: somewhere durable to keep the work, and a way to pick it back up after the process running it is gone.
>
> That's what Mastra's background tasks are for. I walked through how they're wired — dispatch, detach, persist — and the one gotcha that trips almost everyone: after a restart, the persisted STATE survives but the running CODE doesn't, so `resume()` has nothing to resume into until you re-attach an executor.
>
> The mechanics, in code:
> [akashpanchal.com/tutorials/mastra-durable-agents]
>
> #AI #Agents #Mastra #Durability

---

## Post 6 — Human-in-the-Loop

> Think about asking your manager to sign off on something.
>
> You send the request and go back to work. You don't sit there refreshing. Maybe they answer in ten minutes; maybe it's 6pm, from their phone, nowhere near the laptop where you filed it. Either way, when the answer comes, you don't start over. You pick up exactly where you left off.
>
> Now think about what that demands from the software underneath.
>
> Most agent code can't do it. An agent loop only exists as long as the request that's open — it has no way to say "pause here, remember everything, I'll be back." So the moment a real process needs a human, you need something underneath that can genuinely stop, save its place, and wait. Possibly for hours. Possibly in a completely different request, on a different server.
>
> That's the part "human-in-the-loop" glosses over when people say it like it's a confirmation dialog. Mastra solves the hard part at the workflow level, with two verbs — suspend and resume — plus `bail()` for the graceful "no."
>
> The mechanics, and why HITL is a persistence problem and not a UI problem:
> [akashpanchal.com/tutorials/mastra-workflows]
>
> #AI #Agents #Mastra

---

## Post 7 — Real-world case study: VibeFrames (Mastra Agentic Harness + Remotion)

> An agent that builds videos doesn't need a complex multi-agent state machine.
>
> For VibeFrames, I stripped the architecture down to a single agent, a single structured tool, and a stateful session host.
>
> Here is how the Agentic Harness (built on Mastra.ai) runs the whole thing under the hood:
>
> 1. **The Stateful Session Host**
> Instead of stateless API routes, VibeFrames uses Mastra's `AgentController` to maintain a stateful session per project. It automatically manages conversation history, persistence (backed by LibSQL/SQLite), and tool-execution state.
>
> 2. **The "Single Tool" Loop**
> Rather than a multi-phase agent pipeline (brief -> storyboard -> compose -> validate), the agent has exactly one task: append clips to a timeline. It builds the video composition by calling a single structured tool, `add-clip`, sequentially.
>
> 3. **The Schema IS the Prompt**
> The input schema for the `add-clip` tool is defined using Zod. It specifies the clip type (e.g., `KineticTitle`, `BulletReveal`, `CodeReveal`, `LogoOutro`) and its corresponding props. Because Mastra translates this schema into the model's tool spec, the `.describe()` fields serve as the actual prompt instructions the model uses to decide how to build the composition.
>
> 4. **Live SSE Streaming to Remotion**
> As the agent works, Mastra streams the tool calls and state updates via Server-Sent Events (SSE) to the frontend. The UI intercepts the composition JSON from the SSE stream and feeds it directly into a Remotion `<Player>` for an instant, interactive video preview.
>
> You get session persistence, streaming, and robust JSON generation without writing a single line of graph routing, prompt parsing, or custom memory logic.
>
> The full source code is public and open-source:
> [github.com/akashp1712/vibeframes]
>
> #AI #Agents #Mastra #Remotion #TypeScript

---

# ============================================================
# PART B — Per-part drip posts (idea-first, one every 1–2 days)
# ============================================================

## Part 3 — The Harness (lead with this; connects to Post 1)

> An agent and some tools aren't an application yet.
>
> What turns them into one is the boring connective tissue: a conversation that survives a refresh, a way to switch the agent from "planning" to "doing," a gate that asks before it deletes a file.
>
> Mastra calls that layer the Harness — the AgentController. Part 3 of my series is a hands-on walk through it: modes, subagents, and tool approvals, with code.
> [akashpanchal.com/tutorials/mastra-harness]
> #AI #Agents #Mastra

## Part 7 — Evals

> "An agent that ships without evals is a vibe with a deploy button."
>
> The finale of my Mastra series puts numbers on agent quality: deterministic checks, model-graded scorers, pass/fail gates in CI, live sampling in prod. So "it seems better" becomes "0.86, up from 0.71."
>
> This is the part I think most teams skip and shouldn't.
> [akashpanchal.com/tutorials/mastra-evals]
> #Evals #AI #Agents

## Part 2 — Workflows

> Agents are great at deciding. Workflows are great at guaranteeing.
>
> Part 2 of my Mastra series: typed, multi-step workflows — sequencing, parallelism, branching, loops, and human-in-the-loop suspend & resume. For when "let the model figure it out" isn't good enough.
> [akashpanchal.com/tutorials/mastra-workflows]
> #Agents #Workflows #Mastra

## Part 5 — RAG

> A streaming agent answering from the model's memory is still guessing.
>
> Part 5 of my Mastra series: build the retrieval pipeline — chunk, embed, store, query — and wire it under the agent so it answers from your actual documents, with citations.
> [akashpanchal.com/tutorials/mastra-rag]
> #RAG #AI #Agents

## Part 1 — Agents

> Everyone starts an agent the same way: a model in a loop. Then the questions pile up — how does it call a tool, how does it remember the last turn, how do you keep it typed?
>
> Part 1 of my Mastra series is the foundation: defining a typed agent, giving it tools with createTool, and wiring memory so it actually remembers across turns. No magic — just the primitives.
> [akashpanchal.com/tutorials/mastra-agents]
> #AI #Agents #Mastra

## Part 4 — Streaming

> A blocking generate() call is fine for a script. An interactive agent needs to stream — and not just tokens. Tool calls, tool results, and your own custom progress events all have to reach the UI live.
>
> Part 4 of my Mastra series: wiring agent.stream() into a real UI, and figuring out where the interesting data actually lives in the stream.
> [akashpanchal.com/tutorials/mastra-streaming]
> #AI #Streaming #Agents

## Part 6 — Long-Running & Durable Agents

> Some agent work doesn't fit in one HTTP request. It scrapes 40 pages, waits on a human for two hours, or runs on a schedule at 3am.
>
> Part 6 of my Mastra series: the machinery for work that outlives the request — background tasks, durable agents that survive a crash, and heartbeats that run on a cron.
> [akashpanchal.com/tutorials/mastra-durable-agents]
> #Agents #AI #Mastra

---

# ============================================================
# PART C — Code-perspective posts (the differentiators)
# ============================================================
#
# These are the posts that read as "engineer, not influencer." Each leads with a
# real Mastra API detail + a gotcha or design insight most people miss. Post one
# every few days between the announcement posts. On LinkedIn, paste the code as
# plain text (it doesn't do syntax highlighting) — keep snippets short so they
# survive the "…see more" fold. Consider a carbon.now.sh / ray.so image of the
# snippet as the post image for reach.
#
# All snippets are grounded in the public Mastra docs verified this session.
# `AgentController` is beta — note that if you post API-level detail.
#
# Deep-link each code post to the matching article, not just a tutorial, where one
# exists now:
#   - Code Post 4 (tool approvals) → /tutorials/mastra-harness
#   - Code Post 6 (workflow suspend/resume) → /tutorials/mastra-workflows
#   - Code Post 7 (evals in CI) → keep on /tutorials/mastra-evals
#   - A processors code post could point at /tutorials/mastra-agents
#   - An observational-memory code post could point at /tutorials/mastra-agents
#
# NOTE ON CODE POST 7 (evals): createScorer/runEval are ILLUSTRATIVE shapes — the
# concept (deterministic + model-graded + threshold gate) is solid but those exact
# API names were NOT verified against live docs. Verify before posting, or soften to
# pseudocode. Same soft-verify caution for the background-tasks `_background` override
# and observational-memory buffer fields if you turn those into code posts.
# ============================================================

## Code Post 1 — Modes: three ways to change an agent's tools, and they're not the same

> Mastra modes let one agent behave like a planner, then a builder, on the same thread. But there are THREE knobs for tools per mode, and mixing them up is a real bug:
>
>   modes: [
>     {
>       id: "plan",
>       instructions: "Reason about the task. Do not edit files.",
>       tools: { readFileTool, searchTool },     // REPLACES the agent's tools
>       transitionsTo: "build",
>     },
>     {
>       id: "build",
>       instructions: "Implement the approved plan.",
>       additionalTools: { editFileTool },       // ADDS to the agent's tools
>     },
>   ]
>
> - `tools` REPLACES the backing agent's toolset for that mode. In "plan", the agent literally cannot edit a file — the tool isn't in its box. That's a safety guarantee, not a suggestion.
> - `additionalTools` AUGMENTS the agent's tools. (You can't set both on one mode.)
> - `availableTools` is a per-mode visibility allowlist on top of whatever's configured.
>
> The distinction matters because "the agent shouldn't edit files while planning" is very different from "please don't edit files while planning." One is enforced by the runtime; the other is a prompt and a prayer.
>
> More on Mastra's harness → [akashpanchal.com/tutorials/mastra-harness]
> #AI #Agents #Mastra

---

## Code Post 2 — Subagents: the `forked` flag flips the isolation model entirely

> Mastra subagents default to *fresh context* — the child can't see the parent's conversation. That's usually what you want: send an explorer to read 12 files and come back with a summary, without dragging 12 files of noise into the main thread.
>
>   subagents: [
>     {
>       id: "explore",
>       description: "Reads files and gathers context. Read-only.",
>       allowedWorkspaceTools: ["read_file", "grep_search"],
>       defaultModelId: "anthropic/claude-haiku-4-5",  // cheap model for grunt work
>       maxSteps: 30,
>     },
>   ]
>
> The parent doesn't call this by hand — Mastra auto-generates a `subagent` tool the model can invoke with a { task, agentType }.
>
> Here's the part people miss: set `forked: true` and the isolation model inverts. A forked subagent CLONES the parent thread — and then runs with the PARENT's instructions, tools, and model. The subagent definition's own instructions/tools/defaultModelId are ignored entirely.
>
> So "fresh" and "forked" aren't a dial between the same thing — they're two different tools:
> - fresh = a specialist you brief from scratch (isolation is the point)
> - forked = a clone of yourself that keeps working with full context
>
> Reach for the wrong one and you either starve the subagent of context or flood it with it.
>
> #AI #Agents #Mastra

---

## Code Post 3 — `steer` vs `followUp`: redirecting an agent that's already running

> Most agent APIs are turn-based: you send, it responds, you send again. But real users interrupt. They watch the agent start down the wrong path and want to correct it NOW, not after it finishes.
>
> Mastra's AgentController splits this into two methods, and the difference is timing:
>
>   await controller.sendMessage({ content: "Refactor the auth module." });
>
>   // It's mid-run. You realize you forgot something:
>   await controller.followUp({ content: "Also update the tests." });
>
>   // Or it's heading the wrong way and you want to correct course NOW:
>   await controller.steer({ content: "Stop — TypeScript strict mode first." });
>
> - `followUp` QUEUES a message for after the current run.
> - `steer` INJECTS guidance into the run in progress, without waiting.
>
> This only works because the controller is a stateful host you're holding — not a function you called and are waiting on. It's the whole reason "session host" vs "invoke a graph" is a real architectural fork, not a style preference.
>
> I wrote about that fork here → [akashpanchal.com/articles/two-agent-harnesses]
> #AI #Agents #Mastra

---

## Code Post 4 — Tool approvals: the line between "cool demo" and "I'll point it at prod"

> I won't point a tool-using agent at anything that matters without this one primitive: per-tool human approval.
>
> The pattern: trusted tools run straight through; risky ones (file writes, deploys, anything destructive) pause the run and surface an approval request through the session.
>
>   controller.subscribe((event) => {
>     if (event.type === "tool_approval_required") {
>       // show the user what the agent wants to do, and why
>       promptUser(event);
>     }
>   });
>
> The detail that makes it usable in practice: approved grants are remembered ON THE SESSION. You approve "read this directory" once, not every single turn. Without that, HITL becomes approval fatigue and users just start rubber-stamping — which is worse than no gate at all, because now it *looks* safe.
>
> Same instinct as workflow suspend & resume, but at the granularity of a single tool call inside a live conversation.
>
> #AI #Agents #Mastra #AIsafety

---

## Code Post 5 — `createTool`: the schema IS the prompt

> The most common agent-tool mistake I see isn't a bug in the handler. It's a vague description and a loose schema — and then people wonder why the model calls the tool wrong.
>
>   export const getTickets = createTool({
>     id: "get-tickets",
>     description: "Fetch support tickets for a user, filtered by status.",
>     inputSchema: z.object({
>       userId: z.string().describe("The user's ID"),
>       status: z.enum(["open", "closed", "pending"])
>         .describe("Only return tickets in this status"),
>     }),
>     execute: async ({ context }) => {
>       return await db.tickets.find(context);
>     },
>   });
>
> That Zod schema isn't just runtime validation — it's serialized into the tool spec the model reads to decide *how* to call the tool. Every `.describe()` is a line of prompt. A `z.enum` is you telling the model "these are the only legal values" far more reliably than a sentence in the system prompt ever will.
>
> Treat the schema as part of the prompt, not as an afterthought, and tool-calling accuracy jumps.
>
> Part 1 of my Mastra series goes deep on this → [akashpanchal.com/tutorials/mastra-agents]
> #AI #Agents #Mastra #TypeScript

---

## Code Post 6 — Workflows: suspend & resume is how you put a human in a long process

> "Human-in-the-loop" gets thrown around like it's a checkbox. In a real multi-step process it means: the workflow has to STOP, persist everything, wait — possibly for hours — and then pick up exactly where it left off. In a different request. Maybe on a different server.
>
> Mastra workflows model this with suspend & resume:
>
>   const approvalStep = createStep({
>     id: "await-approval",
>     execute: async ({ suspend, resumeData }) => {
>       if (!resumeData) {
>         // pause the whole workflow, persist state, return control
>         return await suspend({ reason: "Needs manager sign-off" });
>       }
>       return { approved: resumeData.approved };
>     },
>   });
>
> First pass: `suspend()` freezes the workflow and hands control back to you — you notify a human and go do other things. When they respond, you resume the run with their input, and `resumeData` is populated. Same run, no lost state.
>
> This is the difference between an agent that can only act inside one request and a process that can span a coffee break. Most "agent frameworks" don't give you this; it's why I reach for workflows the moment guarantees matter more than autonomy.
>
> Part 2 → [akashpanchal.com/tutorials/mastra-workflows]
> #Agents #Workflows #Mastra

---

## Code Post 7 — Evals in CI: make "the agent got worse" a failing build, not a customer email

> Here's the eval maturity ladder I've watched teams climb:
> 1. "It seems better." (vibes)
> 2. A few hand-checked examples in a notebook. (better)
> 3. A scored suite that runs in CI and can FAIL the build. (this is the one)
>
> The shape of a scorer:
>
>   const relevance = createScorer({
>     id: "answer-relevance",
>     description: "Does the answer address the question?",
>     // deterministic check OR model-graded — you pick per metric
>   });
>
>   // in CI:
>   const score = await runEval(agent, testSet, [relevance]);
>   if (score.mean < 0.80) process.exit(1);  // regression = red build
>
> The unlock isn't the scorer — it's the `exit(1)`. Once a quality regression turns a build red, "we made the agent worse" stops being something a user discovers in production and starts being something a PR can't merge past.
>
> Deterministic checks for the things you can assert; model-graded scorers for the fuzzy ones; a threshold gate for both. "It seems better" becomes "0.86, up from 0.71."
>
> Part 7 of my series → [akashpanchal.com/tutorials/mastra-evals]
> #Evals #AI #Agents

---

## Code Post 8 — One `displayState` snapshot vs a dozen callbacks

> A subtle thing that makes building agent UIs sane: don't make your UI stitch together a dozen event callbacks to figure out "what should I show right now."
>
> Mastra's AgentController exposes a single `displayState` snapshot the UI renders from, and you re-render on change:
>
>   render(controller.session.displayState.get());
>
>   controller.subscribe((event) => {
>     if (event.type === "display_state_changed") {
>       render(controller.session.displayState.get());
>     }
>   });
>
> That snapshot carries the running stuff too — token usage, queued follow-up count — so the UI reads them from one place instead of maintaining its own shadow copy of the agent's state and drifting out of sync.
>
> It's the same principle as a single source of truth in any frontend: the bugs live in the gap between two copies of the same state. An agent runtime has a LOT of state. Give the UI one door to read it through.
>
> #AI #Agents #Mastra #Frontend

---

## Post 8 — Breadcrumbs Over Blobs (new essay)

> Your agent calls a search tool. It gets back 48KB of JSON. The demo looks great.
>
> Three turns later the follow-up answer is worse — and nothing crashed.
>
> The tool result is still sitting in thread history, getting re-sent every turn. ~12,000 tokens of context eaten before the user even speaks again. The agent isn't broken. You stored a blob where you should have stored a breadcrumb.
>
> A breadcrumb is three things:
> — the call signature (reproducible)
> — a one-line summary (enough for most follow-ups)
> — a pointer to the full payload (fetch on demand, not replay from history)
>
> Trim at the tool boundary. Keep the thread small. Add a recall tool for when the model needs the full text.
>
> Wrote the pattern with a minimal TypeScript example here:
> https://akashpanchal.com/articles/breadcrumbs-over-blobs
>
> #AI #Agents #LLM #ContextEngineering

---

## Post 9 — Build a Harness Agent From Scratch (flagship tutorial)

> Picture the demo. Model, tools, while loop. It calls a tool, it answers. You show it to your team.
>
> Then someone refreshes the browser mid-task and everything is gone.
>
> They want to nudge it sideways while it's running — can't. It's about to delete a file — nothing stops it.
>
> None of that showed up in the demo. All of it shows up in production.
>
> An agent loop is not an application. The gap is the harness around the loop: sessions that survive a refresh, approval before destructive tools, a displayState snapshot your UI can render, persistence you can swap from memory to Postgres without rewriting the agent.
>
> I wrote a from-scratch tutorial that builds both layers by hand — the loop first (OpenAI SDK), then the session host — so you can see exactly what frameworks like Mastra's AgentController are wrapping.
>
> https://akashpanchal.com/tutorials/build-a-harness-agent-from-scratch
>
> Pairs well with the breadcrumbs essay if you're storing big tool outputs:
> https://akashpanchal.com/articles/breadcrumbs-over-blobs
>
> #AI #Agents #TypeScript #SystemDesign

---

## Post 10 — Code post: breadcrumb shape (interleave between 8 and 9)

> Most agent codebases do this after a tool call:
>
> messages.push({ role: "tool", content: JSON.stringify(hugeResult) })
>
> That works until the result is bigger than a paragraph. Then every subsequent turn re-reads the whole thing — or your compaction step mangles the one detail the user asks about next.
>
> What I store instead:
>
> tool_result: searchDocs({ query: "refund policy" })
> found: 3 pages · stored: doc-store/7f3a9c
> summary: Returns within 30 days; sale items prorated...
> (use fetchDoc(id) for full text)
>
> ~45 tokens in history instead of ~12,000. Full payload lives in a side store; the model reaches for it only when it needs to.
>
> Full write-up + runnable pattern:
> https://akashpanchal.com/articles/breadcrumbs-over-blobs
>
> #AI #Agents #LLM

---

## Suggested drip for the two new pieces (Week 0)

Post these **interleaved** — never two "read my article" posts back-to-back:

| Day | Post | Why |
|-----|------|-----|
| 1 | Post 10 (code: breadcrumb shape) | Hook without feeling like a launch |
| 3 | Post 8 (breadcrumbs essay) | Shorter piece, broad appeal |
| 6 | Post 9 (harness tutorial) | Flagship — lands after they've seen you on memory |
| 8 | Code post from Part A (e.g. steer vs followUp) | Keeps feed from going announcement-heavy |

---

# ============================================================
# NOTES
# ============================================================
#
# - `AgentController` is beta — if a post makes an API-level claim, it's fair to add
#   a line like "(AgentController is in beta — API may shift)" for honesty points.
# - LinkedIn has no code highlighting. For code posts, either (a) paste as plain text
#   with minimal indentation so it survives the fold, or (b) attach a ray.so /
#   carbon.now.sh image of the snippet and keep the body prose-only. (b) usually
#   performs better and looks sharper.
# - Engage on Sam Bhagwat's posts with genuine technical substance for a couple of
#   weeks BEFORE the comparison piece drops. Inbound works better when your name is
#   already familiar.
# - Never tag @mastra on a generic post. Tag only when there's a real reason
#   (a source insight, the demo repo). Fairness and substance are the reach.
