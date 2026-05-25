"use client";

export default function Footer() {

  return (

    <footer
      style={{
        padding: "120px 20px 50px",
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
          background: "rgba(168,85,247,0.08)",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
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

        {/* MAIN CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "36px",
            padding: "60px 40px",
            backdropFilter: "blur(14px)",
          }}
        >

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "50px",
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
                Shivam Gupta
              </p>

              <h2
                style={{
                  fontSize: "clamp(42px,7vw,72px)",
                  lineHeight: "1.1",
                  marginBottom: "24px",
                }}
              >
                Building Businesses
                <br />
                Through Execution
              </h2>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.9",
                  fontSize: "18px",
                  maxWidth: "550px",
                }}
              >
                Business Head specializing in acquisitions,
                operations, strategic expansion, luxury real estate,
                and execution-focused business growth across Mumbai.
              </p>

            </div>

            {/* RIGHT */}
            <div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >

                <a
                  href="mailto:guptashivam251095@gmail.com"
                  style={linkStyle}
                >
                  Email →
                </a>

                <a
                  href="tel:+917738753396"
                  style={linkStyle}
                >
                  Phone →
                </a>

                <a
                  href="https://www.linkedin.com/in/shivam-gupta-a86963285"
                  target="_blank"
                  style={linkStyle}
                >
                  LinkedIn →
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"

                  style={{
                    background: "#2563EB",
                    color: "white",
                    textDecoration: "none",
                    padding: "18px 28px",
                    borderRadius: "16px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "fit-content",
                    marginTop: "12px",
                    boxShadow: "0 0 25px rgba(37,99,235,0.3)",
                  }}
                >
                  Download Resume
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div
            style={{
              marginTop: "60px",
              paddingTop: "30px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >

            <p
              style={{
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              © 2026 Shivam Gupta. All rights reserved.
            </p>

            <p
              style={{
                color: "#6B7280",
                fontSize: "15px",
              }}
            >
              Mumbai • Real Estate • Business Leadership
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
};