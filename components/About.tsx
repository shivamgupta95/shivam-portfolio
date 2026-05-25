"use client";

export default function About() {

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(120px)",
          top: "0",
          right: "0",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >

          {/* LEFT */}
          <div>

            <p
              style={{
                color: "#60A5FA",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "18px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              About Me
            </p>

            <h2
              style={{
                fontSize: "clamp(42px,7vw,72px)",
                lineHeight: "1.1",
                marginBottom: "28px",
              }}
            >
              Building Businesses
              <br />
              Through Execution
            </h2>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              I am a business leader specializing in real estate
              operations, acquisitions, luxury transactions,
              strategic expansion, and execution-driven growth.
            </p>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              Over the years, I have built expertise across
              operational leadership, property acquisitions,
              onboarding systems, occupancy optimization,
              and scalable business execution across Mumbai’s
              evolving real estate ecosystem.
            </p>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px",
              }}
            >
              My approach combines strategic thinking,
              operational discipline, leadership accountability,
              and growth-focused execution to build sustainable
              business performance.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "50px",
                backdropFilter: "blur(14px)",
                transition: "0.35s",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.35)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(37,99,235,0.18)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <p
                style={{
                  color: "#60A5FA",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Leadership Philosophy
              </p>

              <h3
                style={{
                  fontSize: "36px",
                  lineHeight: "1.4",
                  marginBottom: "30px",
                }}
              >
                “Execution creates growth.
                <br />
                Leadership sustains it.”
              </h3>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "2",
                  fontSize: "17px",
                }}
              >
                I believe sustainable business growth is built
                through operational discipline, scalable systems,
                strategic execution, strong leadership culture,
                and long-term value creation.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}