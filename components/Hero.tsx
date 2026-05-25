"use client";

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #050816 0%, #0B1120 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 24px 100px",
        overflow: "hidden",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)",
          filter: "blur(120px)",
          right: "-150px",
          top: "-100px",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "100px",
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
              letterSpacing: "5px",
              fontSize: "13px",
              marginBottom: "26px",
              fontWeight: "700",
            }}
          >
            Business Head • Real Estate Leadership
          </p>

          <h1
            style={{
              fontSize: "clamp(76px,10vw,145px)",
              lineHeight: "0.9",
              fontWeight: "800",
              color: "white",
              marginBottom: "34px",
              letterSpacing: "-5px",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "22px",
              lineHeight: "2",
              maxWidth: "720px",
              marginBottom: "50px",
            }}
          >
            Business Head specializing in acquisitions,
            strategic expansion,
            luxury real estate growth,
            operational leadership,
            and execution-focused scaling across Mumbai.
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
                background: "white",
                color: "#050816",
                padding: "18px 34px",
                borderRadius: "16px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
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
                color: "white",
                padding: "18px 34px",
                borderRadius: "16px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
                backdropFilter: "blur(14px)",
                background:
                  "rgba(255,255,255,0.03)",
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
            position: "relative",
          }}
        >

          {/* IMAGE */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              position: "relative",
              zIndex: 2,
            }}
          >

            <img
              src="/profile.png"
              alt="Shivam Gupta"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "32px",
                objectFit: "cover",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.45)",
              }}
            />

          </div>

          {/* FLOATING CARD 1 */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-40px",
              background:
                "rgba(255,255,255,0.06)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              padding: "22px 26px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.35)",
              zIndex: 5,
            }}
          >

            <h3
              style={{
                color: "white",
                fontSize: "34px",
                marginBottom: "8px",
              }}
            >
              ₹4000Cr+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                margin: 0,
                fontSize: "15px",
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
              background:
                "rgba(255,255,255,0.06)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              padding: "22px 26px",
              borderRadius: "24px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.35)",
              zIndex: 5,
            }}
          >

            <h3
              style={{
                color: "white",
                fontSize: "34px",
                marginBottom: "8px",
              }}
            >
              120+
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                margin: 0,
                fontSize: "15px",
              }}
            >
              Properties Onboarded
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}