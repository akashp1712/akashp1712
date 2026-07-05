import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  // Short mono eyebrow shown above the serif title (e.g. "02 / About").
  eyebrow?: string;
};

export default function SectionHeading({
  children,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="ed-eyebrow mb-4">
          <span className="ed-eyebrow-label">{eyebrow}</span>
          <span className="ed-eyebrow-rule" />
        </p>
      )}
      <h2 className="ed-section-title text-3xl sm:text-4xl">{children}</h2>
    </div>
  );
}
