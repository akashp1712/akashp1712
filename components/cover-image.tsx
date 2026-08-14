import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/** Cover art — native img for SVG (next/image rejects them), Image for raster. */
export function CoverImage({
  src,
  alt,
  priority,
  className,
  style,
}: CoverImageProps) {
  if (src.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={1200}
        height={630}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={style}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={630}
      priority={priority}
      className={className}
      style={style}
    />
  );
}
