"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        flexDirection: "column",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(59,130,246,0.12)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <h1
        style={{
          fontSize: "clamp(52px,8vw,110px)",
          fontWeight: "800",
          letterSpacing: "2px",
          zIndex: 2,
          animation: "floating 3s ease-in-out infinite",
        }}
      >
        Shivam Gupta
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          marginTop: "20px",
          fontSize: "18px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          zIndex: 2,
        }}
      >
        Building Through Execution
      </p>

    </div>

  );
}