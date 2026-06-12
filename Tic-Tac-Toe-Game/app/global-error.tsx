"use client";

// Top-level boundary that also catches errors thrown in the root layout itself.
// It must render its own <html>/<body> because it replaces the root layout.
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-error

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Fatal error (root layout):", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "ui-monospace, monospace",
          background: "#050014",
          color: "#e6e6e6",
        }}
      >
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ color: "#39ff14" }}>Something went wrong</h1>
          <p style={{ color: "#ff2bd6" }}>The app failed to load.</p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: 8,
              border: "2px solid #39ff14",
              background: "transparent",
              color: "#e6e6e6",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}
