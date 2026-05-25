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
      {/* BLUR EFFECT */}
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
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Business Head • Real Estate Strategist
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 90px)",
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
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "40px",
              maxWidth: "600px",
            }}
          >
            Business leader specializing in real estate operations,
            acquisitions, luxury transactions, expansion strategy,
            and execution-driven growth across Mumbai’s evolving
            real estate ecosystem.
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
                padding: "16px 28px",
                borderRadius: "14px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 0 25px rgba(37,99,235,0.4)",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "16px 28px",
                borderRadius: "14px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
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
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
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
                borderRadius: "24px",
                padding: "30px",
                backdropFilter: "blur(12px)",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                  color: "white",
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.6",
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