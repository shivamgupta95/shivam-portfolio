"use client";

export default function CTA() {

  return (

    <section
      style={{
        padding: "140px 20px",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.18), transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >

        <div
          style={{
            background:
              "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "40px",
            padding: "90px 50px",
            textAlign: "center",
            backdropFilter: "blur(18px)",
            boxShadow:
              "0 0 60px rgba(37,99,235,0.12)",
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "22px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Let’s Connect
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,78px)",
              lineHeight: "1.1",
              marginBottom: "28px",
              color: "white",
            }}
          >
            Let’s Build
            <br />
            High-Impact Growth
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: "2",
              fontSize: "20px",
              marginBottom: "50px",
            }}
          >
            Open to strategic leadership opportunities,
            real estate growth initiatives,
            operational scaling,
            acquisitions,
            and execution-focused business expansion.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="mailto:yourmail@gmail.com"
              style={{
                background: "#2563EB",
                padding: "20px 34px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "18px",
                boxShadow:
                  "0 0 35px rgba(37,99,235,0.35)",
              }}
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                padding: "20px 34px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "18px",
                backdropFilter: "blur(12px)",
              }}
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                padding: "20px 34px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "18px",
                backdropFilter: "blur(12px)",
              }}
            >
              Download CV
            </a>

          </div>

        </div>

      </div>

    </section>

  );
}