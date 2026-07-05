import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
        <Image src={src} alt={alt} width={width} height={height} className="w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
