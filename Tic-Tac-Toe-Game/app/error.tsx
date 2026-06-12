"use client";

// Route-level error boundary for the App Router. Any render/runtime error in the
// game UI is caught here instead of showing a blank screen, with a reset action.
// Docs: https://nextjs.org/docs/app/building-your-application/routing/error-handling

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to the console (and any attached error reporter) for diagnostics.
    console.error("Tic-Tac-Toe crashed:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The game hit an unexpected error. You can try again — your browser keeps no state, so a
        reset starts a fresh board.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md border-2 px-4 py-2 font-medium transition-colors hover:bg-muted"
      >
        Try again
      </button>
    </main>
  );
}
