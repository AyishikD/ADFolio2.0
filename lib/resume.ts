"use client";

/** Opens the résumé window. `from` is the element to return focus to on close. */
export function openResume(from?: HTMLElement | null) {
  window.dispatchEvent(new CustomEvent("resume:open", { detail: { from: from ?? null } }));
}
