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
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <div
      style={{
        position: "fixed",
        top: position.y - 15,
        left: position.x - 15,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "rgba(59,130,246,0.35)",
        pointerEvents: "none",
        zIndex: 999999,
        backdropFilter: "blur(6px)",
        boxShadow: "0 0 30px rgba(59,130,246,0.5)",
        transition: "transform 0.08s linear",
      }}
    />
  );
}