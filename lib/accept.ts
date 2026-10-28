/** Prefer Markdown only when it is explicitly accepted above HTML.
 * Browser wildcards and equal preferences keep the regular HTML experience.
 */
export function prefersMarkdown(accept: string) {
  const entries = accept.toLowerCase().split(",").map(entry => {
    const [type, ...parameters] = entry.trim().split(";");
    const quality = parameters.find(parameter => parameter.trim().startsWith("q="));
    const q = quality ? Number(quality.trim().slice(2)) : 1;
    return { type: type.trim(), q: Number.isFinite(q) && q >= 0 && q <= 1 ? q : 0 };
  });
  const markdown = entries.find(entry => entry.type === "text/markdown")?.q ?? 0;
  const html = entries.find(entry => entry.type === "text/html")?.q
    ?? entries.find(entry => entry.type === "text/*")?.q
    ?? entries.find(entry => entry.type === "*/*")?.q ?? 0;
  return markdown > 0 && markdown > html;
}
