# Discovery and agent readiness

## Baseline and scope

The public site’s Is Agentic snapshot on **28 October 2026 at 01:32:56 UTC** scored **79/100**: <https://is-agentic.com/scan/www.akashpanchal.com>. This is a technical readiness score, not a measurement of how often ChatGPT recommends Akash. The live deployment differed from the repository: preserve the newer portfolio design and harness page when releasing these changes.

The snapshot found missing homepage Markdown negotiation, an HTML-only missing-page response, and missing guidance about when to use the portfolio. Existing robots rules already allowed crawlers through the wildcard rule; Markdown, JSON, llms.txt, and structured data were already present. Production redirected the bare hostname to `www`, while canonical/profile/sitemap URLs used the bare hostname.

## Changes

- Await Velite’s initial content generation before Next compiles routes that import it.
- Keep the existing browser font stylesheet, but disable Next 13’s build-time external CSS inlining: its network fetch has no timeout and stalled verification in this environment. Fonts and fallback stacks remain the same.
- Use the production `https://www.akashpanchal.com` origin consistently, including deployments with the older bare production host in `NEXT_PUBLIC_SITE_URL`. Custom origins remain supported for local checks.
- Describe the engineering focus clearly in the homepage heading and metadata. Preserve the actual current employment title, AI Software Engineer at Salesforce, in career data and Person schema.
- Provide one substantive role discussion page, with relevant engineering scopes and inspectable evidence. Availability, location arrangements, and employment terms require direct discussion rather than invented claims.
- Add two project briefs sourced from the existing portfolio, Evercall’s dated build log, and VibeFrames’ public repository. Separate implementation from adoption or measured business results. All new briefs are server-rendered and also available as Markdown.
- Negotiate Markdown when `Accept: text/markdown` is explicitly preferred to HTML on the homepage, role page, and individual project/writing pages. Keep HTML for browsers, wildcards, disabled Markdown (`q=0`), and tied preferences. Markdown responses include `Vary: Accept`. Next 13 overwrites custom HTML Vary headers, so participating HTML pages use `force-dynamic` and `no-store` to prevent shared-cache variant collisions. This trades HTML CDN caching for safe negotiation on the homepage, role page, project briefs, and individual writing pages; explicit Markdown, profile JSON, and other pages retain their caching behavior. Existing HTML-only pages remain available normally.
- Return meaningful Markdown with HTTP 404 for missing pages requested in Markdown, after normal route and public asset resolution. Preserve normal HTML 404 behavior for browsers.
- Link matching Markdown alternates from writing and project metadata; expose the role page and project evidence in JSON, Markdown, llms.txt, the sitemap, and visible navigation. Add explicit OAI-SearchBot access without changing existing training-crawler preferences.

The scanner’s Organization/address suggestion does not fit this personal portfolio. No postal address, fabricated business identity, API, or MCP service is added. The privacy-page suggestion also needs an actual data-handling policy, rather than text invented to meet a character threshold. Neither is claimed as resolved.

## Verify

```sh
npm ci
npm run lint
npm run build
npm start
# Another terminal:
npm run check:discovery
```

`CHECK_BASE_URL` changes the HTTP test target; `CHECK_CANONICAL_URL` changes the expected canonical origin. The checks exercise rendered headings and JSON-LD, canonical/alternate URLs, existing writing pages, profile consistency, robots and sitemap, actual Markdown bodies and content types, Accept quality preferences, missing-page status, and public asset access. Test the build with `NEXT_PUBLIC_SITE_URL=https://akashpanchal.com` to verify normalization of older deployment configuration.

After merging and deploying, run the checks against production and re-audit the live URL. Check the scan’s `scanned_at`: the public report can remain cached for six hours, so re-running the CLI immediately is not evidence of the new deployment’s score. No post-deployment score is asserted in this PR.

## Measure discoverability separately

Record a baseline for a fixed prompt set: “hire an AI engineer”, “AI engineer with production agent runtime experience”, “voice AI engineer LiveKit WebRTC”, and “TypeScript AI product engineer”. Repeat in fresh conversations with consistent locale and search settings. Record mentions, cited sources, date, and prompt wording; do not mix personalized responses into the generic visibility baseline. Improve real project evidence and accurate external profiles over time. Crawl access, structured data, and llms.txt do not guarantee indexing or recommendations.
