export default function Footer() {

  return (

    <footer
      style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "120px"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT */}
        <div>

          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px"
            }}
          >
            Shivam Gupta
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              lineHeight: "1.8",
              maxWidth: "500px"
            }}
          >
            Business Head specializing in real estate operations,
            acquisitions, expansion, strategic growth, and luxury
            real estate execution across Mumbai.
          </p>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >

          <a
            href="https://www.linkedin.com/in/shivam-gupta-a86963285"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            LinkedIn Profile
          </a>

          <a
            href="mailto:guptashivam251095@gmail.com"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            guptashivam251095@gmail.com
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              color: "#60A5FA",
              textDecoration: "none"
            }}
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "20px",
          textAlign: "center",
          color: "#6B7280"
        }}
      >
        © 2026 Shivam Gupta. All rights reserved.
      </div>

    </footer>

  );
}