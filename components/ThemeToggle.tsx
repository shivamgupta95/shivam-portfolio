"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  useEffect(() => {

    if (dark) {

      document.body.style.background = "#050816";
      document.body.style.color = "white";

    } else {

      document.body.style.background = "#F3F4F6";
      document.body.style.color = "#111827";

    }

  }, [dark]);

  return (

    <button
      onClick={() => setDark(!dark)}

      style={{
        position: "fixed",

        bottom: "110px",

        right: "24px",

        width: "65px",

        height: "65px",

        borderRadius: "50%",

        border: "none",

        background:
          dark
            ? "#111827"
            : "#FFFFFF",

        color:
          dark
            ? "#FBBF24"
            : "#111827",

        fontSize: "28px",

        cursor: "pointer",

        zIndex: 9999,

        boxShadow:
          "0 0 30px rgba(0,0,0,0.25)",

        transition: "0.35s",

        backdropFilter: "blur(12px)",
      }}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}