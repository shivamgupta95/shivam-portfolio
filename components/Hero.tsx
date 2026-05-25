"use client";

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.2), transparent 30%), #050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "160px",
        paddingBottom: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* LEFT */}
        <div>

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "20px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Business Head • Real Estate Strategist
          </p>

          <h1
            style={{
              fontSize: "clamp(54px,10vw,110px)",
              lineHeight: "0.95",
              marginBottom: "28px",
              fontWeight: "800",
              color: "white",
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
              fontSize: "20px",
              maxWidth: "700px",
              marginBottom: "45px",
            }}
          >
            Business leader specializing in acquisitions,
            luxury real estate, strategic expansion,
            operational excellence, and execution-driven
            business growth across Mumbai.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                background: "#2563EB",
                padding: "18px 30px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
                boxShadow:
                  "0 0 35px rgba(37,99,235,0.35)",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                padding: "18px 30px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
                backdropFilter: "blur(12px)",
              }}
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >

          {/* IMAGE */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              borderRadius: "36px",
              overflow: "hidden",
              border:
                "1px solid rgba(255,255,255,0.08)",
              background:
                "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              padding: "16px",
              boxShadow:
                "0 0 60px rgba(37,99,235,0.18)",
              width: "100%",
              maxWidth: "450px",
            }}
          >

            <img
              src="/profile.png"
              alt="Shivam Gupta"
              style={{
                width: "100%",
                borderRadius: "24px",
                display: "block",
                objectFit: "cover",
              }}
            />

          </div>

          {/* FLOATING CARD 1 */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-40px",
              background: "rgba(255,255,255,0.06)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              padding: "18px 22px",
              borderRadius: "22px",
              zIndex: 5,
            }}
          >

            <h3
              style={{
                color: "white",
                margin: 0,
                fontSize: "26px",
              }}
            >
              ₹4000Cr+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                marginTop: "6px",
                marginBottom: 0,
              }}
            >
              GMV Managed
            </p>

          </div>

          {/* FLOATING CARD 2 */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "-40px",
              background: "rgba(255,255,255,0.06)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              padding: "18px 22px",
              borderRadius: "22px",
              zIndex: 5,
            }}
          >

            <h3
              style={{
                color: "white",
                margin: 0,
                fontSize: "26px",
              }}
            >
              120+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                marginTop: "6px",
                marginBottom: 0,
              }}
            >
              Properties
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}