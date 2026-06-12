"use client";

// Global last-resort error listeners. React error boundaries only catch errors
// thrown during render/lifecycle; this captures errors from event handlers,
// timers (the AI's setTimeout move), and async/Promise rejections that would
// otherwise vanish silently. Wire a real reporter (Sentry, etc.) here later.

import { useEffect } from "react";

export default function ErrorListener() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      console.error("window.onerror:", event.message, event.error);
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      console.error("unhandledrejection:", event.reason);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
