export default function Footer() {

  return (

    <footer
      style={{
        position: "relative",
        padding: "120px 24px 60px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden"
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(59,130,246,0.12)",
          filter: "blur(140px)",
          borderRadius: "999px"
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.12)",
          filter: "blur(140px)",
          borderRadius: "999px"
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}
      >

        {/* TOP AREA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "60px",
            marginBottom: "80px"
          }}
        >

          {/* LEFT */}
          <div>

            <p
              style={{
                color: "#60A5FA",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontSize: "13px",
                marginBottom: "20px"
              }}
            >
              Shivam Gupta
            </p>

            <h2
              style={{
                fontSize: "clamp(38px,5vw,64px)",
                lineHeight: "1.1",
                marginBottom: "28px"
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
                maxWidth: "520px"
              }}
            >
              Business Head with expertise across acquisitions,
              luxury real estate, strategic expansion,
              operational leadership, and business growth execution
              across Mumbai’s real estate ecosystem.
            </p>

          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              justifyContent: "center"
            }}
          >

            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              LinkedIn Profile →
            </a>

            <a
              href="mailto:guptashivam251095@gmail.com"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              guptashivam251095@gmail.com
            </a>

            <a
              href="tel:+917738753396"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              +91 7738753396
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#2563EB",
                padding: "18px 28px",
                borderRadius: "18px",
                textDecoration: "none",
                color: "white",
                width: "fit-content",
                fontWeight: 600
              }}
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >

          <p
            style={{
              color: "#6B7280",
              fontSize: "15px"
            }}
          >
            © 2026 Shivam Gupta. All rights reserved.
          </p>

          <p
            style={{
              color: "#6B7280",
              fontSize: "15px"
            }}
          >
            Mumbai • Real Estate • Business Leadership
          </p>

        </div>

      </div>

    </footer>
  );
}