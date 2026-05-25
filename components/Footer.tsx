"use client";

export default function Footer() {

  return (

    <footer
      style={{
        position: "relative",
        padding: "100px 20px 50px",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)",
          filter: "blur(120px)",
          bottom: "-250px",
          left: "50%",
          transform: "translateX(-50%)",
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
            display: "flex",
            justifyContent: "space-between",
            gap: "60px",
            flexWrap: "wrap",
            marginBottom: "70px",
          }}
        >

          {/* LEFT */}
          <div
            style={{
              flex: 1,
              minWidth: "280px",
            }}
          >

            <h2
              style={{
                fontSize: "48px",
                marginBottom: "22px",
                color: "white",
                lineHeight: "1.1",
              }}
            >
              Shivam Gupta
            </h2>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px",
                maxWidth: "650px",
              }}
            >
              Business Head specializing in acquisitions,
              luxury real estate, strategic expansion,
              operational excellence,
              and execution-focused business growth
              across Mumbai Metropolitan Region.
            </p>

          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              gap: "80px",
              flexWrap: "wrap",
            }}
          >

            {/* QUICK LINKS */}
            <div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "24px",
                  fontSize: "22px",
                }}
              >
                Quick Links
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >

                <a href="#about" style={linkStyle}>
                  About
                </a>

                <a href="#timeline" style={linkStyle}>
                  Experience
                </a>

                <a href="#leadership" style={linkStyle}>
                  Leadership
                </a>

                <a href="#contact" style={linkStyle}>
                  Contact
                </a>

              </div>

            </div>

            {/* CONNECT */}
            <div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "24px",
                  fontSize: "22px",
                }}
              >
                Connect
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >

                <a
                  href="mailto:guptashivam251095@gmail.com"
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

          </div>

        </div>

        {/* BOTTOM */}
        <div
          style={{
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            paddingTop: "35px",
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
            © 2026 Shivam Gupta. All rights reserved.
          </p>

          <p
            style={{
              color: "#6B7280",
              margin: 0,
            }}
          >
            Built with premium modern aesthetics.
          </p>

        </div>

      </div>

    </footer>
  );
}

const linkStyle = {
  color: "#9CA3AF",
  textDecoration: "none",
  fontSize: "17px",
};