"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      setPosition({
        x: e.clientX / 50,
        y: e.clientY / 50,
      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (

    <section
      style={{
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.2), transparent 30%), #050816",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        paddingTop: "220px",

        paddingBottom: "100px",

        paddingLeft: "20px",

        paddingRight: "20px",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* GLOW 1 */}
      <div
        style={{
          position: "absolute",

          width: "500px",

          height: "500px",

          background: "rgba(59,130,246,0.15)",

          filter: "blur(120px)",

          top: `${-150 + position.y}px`,

          left: `${-150 + position.x}px`,

          borderRadius: "50%",

          transition: "0.2s",
        }}
      />

      {/* GLOW 2 */}
      <div
        style={{
          position: "absolute",

          width: "500px",

          height: "500px",

          background: "rgba(168,85,247,0.15)",

          filter: "blur(120px)",

          bottom: `${-150 - position.y}px`,

          right: `${-150 - position.x}px`,

          borderRadius: "50%",

          transition: "0.2s",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",

          width: "100%",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",

          gap: "70px",

          alignItems: "center",

          position: "relative",

          zIndex: 2,
        }}
      >

        {/* LEFT SIDE */}
        <div>

          <p
            style={{
              color: "#60A5FA",

              textTransform: "uppercase",

              letterSpacing: "5px",

              marginBottom: "22px",

              fontSize: "14px",

              fontWeight: "700",
            }}
          >
            Business Head • Real Estate Strategist
          </p>

          <h1
            style={{
              fontSize: "clamp(70px,9vw,120px)",

              lineHeight: "0.95",

              marginBottom: "30px",

              fontWeight: "800",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#9CA3AF",

              lineHeight: "2",

              fontSize: "22px",

              maxWidth: "760px",

              marginBottom: "50px",
            }}
          >
            Business leader specializing in acquisitions,
            luxury real estate, strategic expansion,
            operational excellence, and execution-driven
            business growth across Mumbai.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",

              gap: "20px",

              flexWrap: "wrap",
            }}
          >

            <a
              href="/resume.pdf"

              target="_blank"

              style={{
                background: "#2563EB",

                padding: "20px 36px",

                borderRadius: "18px",

                color: "white",

                textDecoration: "none",

                fontWeight: "700",

                fontSize: "18px",

                boxShadow:
                  "0 0 35px rgba(37,99,235,0.35)",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com"

              target="_blank"

              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",

                padding: "20px 36px",

                borderRadius: "18px",

                color: "white",

                textDecoration: "none",

                fontWeight: "700",

                fontSize: "18px",

                backdropFilter: "blur(12px)",
              }}
            >
              LinkedIn Profile
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns: "1fr 1fr",

            gap: "28px",
          }}
        >

          {/* CARD 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              minHeight: "230px",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "28px",
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                background: "rgba(37,99,235,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                fontSize: "34px",
              }}
            >
              📈
            </div>

            <h3
              style={{
                fontSize: "58px",
                marginBottom: "16px",
                marginTop: "55px",
                fontWeight: "700",
              }}
            >
              ₹4000Cr+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "22px",
              }}
            >
              GMV Managed
            </p>

          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              minHeight: "230px",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "28px",
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                background: "rgba(37,99,235,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                fontSize: "34px",
              }}
            >
              🏠
            </div>

            <h3
              style={{
                fontSize: "58px",
                marginBottom: "16px",
                marginTop: "55px",
                fontWeight: "700",
              }}
            >
              120+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "22px",
              }}
            >
              Properties Onboarded
            </p>

          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              minHeight: "230px",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "28px",
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                background: "rgba(37,99,235,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                fontSize: "34px",
              }}
            >
              👥
            </div>

            <h3
              style={{
                fontSize: "58px",
                marginBottom: "16px",
                marginTop: "55px",
                fontWeight: "700",
              }}
            >
              25+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "22px",
              }}
            >
              Teams Led
            </p>

          </div>

          {/* CARD 4 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              minHeight: "230px",
              position: "relative",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "28px",
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                background: "rgba(37,99,235,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                fontSize: "34px",
              }}
            >
              📊
            </div>

            <h3
              style={{
                fontSize: "58px",
                marginBottom: "16px",
                marginTop: "55px",
                fontWeight: "700",
              }}
            >
              95%+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "22px",
              }}
            >
              Occupancy Optimization
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}