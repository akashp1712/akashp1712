import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Akash Panchal. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        ReactJS & NextJS (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-xs">
        This template is{" "}
        <a className="underline" target="_blank" href="https://github.com/ByteGrad/portfolio-website">
        opensourced
        </a>{" "}
        by ByteGrad{" "}
      </p>
    </footer>
  );
}
