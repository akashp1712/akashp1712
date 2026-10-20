export const toolBrands: Record<string, string> = {
  LiveKit: "livekit", Mastra: "mastra", Claude: "claude", Python: "python",
  TypeScript: "typescript", React: "react", AWS: "aws", "Next.js": "nextjs",
  FastAPI: "fastapi", Remotion: "remotion",
};
export default function ToolBrand({ name }: { name: string }) {
  const icon = toolBrands[name];
  return <span className="tool-brand">{icon && <span className="tool-brand-icon">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/tool-icons/${icon}.svg`} alt="" width={22} height={22} /></span>}<span>{name}</span></span>;
}
