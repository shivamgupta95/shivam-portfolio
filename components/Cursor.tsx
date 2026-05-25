"use client";

import { useEffect, useState } from "react";

export default function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, []);

  return (

    <>
      {/* MAIN CURSOR */}
      <div
        style={{
          position: "fixed",

          top: position.y - 10,

          left: position.x - 10,

          width: "20px",

          height: "20px",

          borderRadius: "50%",

          background: "#60A5FA",

          pointerEvents: "none",

          zIndex: 9999,

          boxShadow:
            "0 0 25px rgba(96,165,250,0.8)",

          transition:
            "top 0.05s linear, left 0.05s linear",
        }}
      />

      {/* OUTER GLOW */}
      <div
        style={{
          position: "fixed",

          top: position.y - 30,

          left: position.x - 30,

          width: "60px",

          height: "60px",

          borderRadius: "50%",

          background:
            "rgba(96,165,250,0.12)",

          pointerEvents: "none",

          zIndex: 9998,

          filter: "blur(12px)",

          transition:
            "top 0.12s linear, left 0.12s linear",
        }}
      />
    </>
  );
}