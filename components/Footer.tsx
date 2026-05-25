"use client";

export default function Footer() {

  return (

    <footer
      style={{
        padding: "80px 20px 40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >

        <div>

          <h2
            style={{
              color: "white",
              marginBottom: "12px",
              fontSize: "30px",
            }}
          >
            Shivam Gupta
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              lineHeight: "1.8",
              maxWidth: "600px",
            }}
          >
            Business Head focused on acquisitions,
            luxury real estate growth,
            operational excellence,
            and strategic expansion.
          </p>

        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >

          <a
            href="mailto:officialshivamgupta25@gmail.com"
            style={linkStyle}
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-gupta-a86963285"
            target="_blank"
            style={linkStyle}
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            style={linkStyle}
          >
            Resume
          </a>

        </div>

      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto 0",
          paddingTop: "30px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >

        <p
          style={{
            color: "#6B7280",
            margin: 0,
          }}
        >
          © 2026 Shivam Gupta
        </p>

        <p
          style={{
            color: "#6B7280",
            margin: 0,
          }}
        >
          Premium Executive Portfolio
        </p>

      </div>

    </footer>

  );
}

const linkStyle = {
  color: "#D1D5DB",
  textDecoration: "none",
  fontWeight: "600",
};