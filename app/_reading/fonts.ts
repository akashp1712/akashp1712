// Mock variables to prevent Vercel build-time connection timeout/download errors from Google Fonts API.
// The actual fonts are loaded at runtime via standard @import in app/globals.css.

export const fraunces = {
  variable: "font-display-loaded",
};

export const jetbrainsMono = {
  variable: "font-mono-loaded",
};

export const hankenGrotesk = {
  variable: "font-sans-loaded",
};
