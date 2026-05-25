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
        padding: "120px 20px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(59,130,246,0.15)",
          filter: "blur(120px)",
          top: "-150px",
          left: "-150px",
          borderRadius: "50%",
          animation: "floating 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.15)",
          filter: "blur(120px)",
          bottom: "-150px",
          right: "-150px",
          borderRadius: "50%",
          animation: "floating 10s ease-in-out infinite",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
              marginBottom: "18px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Business Head • Real Estate Strategist
          </p>

          <h1
            style={{
              fontSize: "clamp(52px,8vw,96px)",
              lineHeight: "1",
              marginBottom: "24px",
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
              fontSize: "18px",
              maxWidth: "650px",
              marginBottom: "40px",
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
                padding: "18px 30px",
                borderRadius: "16px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 0 30px rgba(37,99,235,0.35)",
                animation: "glowPulse 3s infinite",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"

              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "18px 30px",
                borderRadius: "16px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                backdropFilter: "blur(12px)",
              }}
            >
              LinkedIn Profile
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "24px",
          }}
        >

          {[
            {
              number: "₹4000Cr+",
              label: "GMV Managed",
            },

            {
              number: "120+",
              label: "Properties Onboarded",
            },

            {
              number: "25+",
              label: "Teams Led",
            },

            {
              number: "95%+",
              label: "Occupancy Optimization",
            },

          ].map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "34px",
                backdropFilter: "blur(14px)",
                transition: "0.35s",
                animation: "floating 6s ease-in-out infinite",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.02)";

                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.35)";

                e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(37,99,235,0.15)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";

                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";

                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "14px",
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.7",
                }}
              >
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}