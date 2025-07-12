// src/components/GridBackground.jsx
import React from "react";
import { cn } from "../lib/utils";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 opacity-95">
      {/* Grid pattern over black */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-black",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade (transparent center, black edges) */}
      <div
        className="absolute inset-0 bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
      />
    </div>
  );
}
