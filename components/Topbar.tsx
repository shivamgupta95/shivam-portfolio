"use client";

import { useEffect, useState } from "react";

export default function Topbar() {

  const [time, setTime] = useState("");

  useEffect(() => {

    const updateTime = () => {

      const now = new Date();

      const formatted = now.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      );

      setTime(formatted);

    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1200,
        background: "rgba(5,8,22,0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "14px",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          Mumbai • India
        </p>

        <p
          style={{
            color: "#60A5FA",
            fontSize: "14px",
            margin: 0,
            letterSpacing: "1px",
            fontWeight: "600",
          }}
        >
          {time}
        </p>

      </div>

    </div>

  );
}