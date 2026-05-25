"use client";

export default function Navbar() {

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "92%",
        maxWidth: "1400px",
        zIndex: 999,
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 30px",
          borderRadius: "22px",
          background: "rgba(10,15,30,0.65)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 40px rgba(0,0,0,0.35)",
        }}
      >

        {/* LEFT SIDE */}
        <h2
          style={{
            color: "white",
            fontSize: "34px",
            fontWeight: "800",
            margin: 0,
          }}
        >
          Shivam Gupta
        </h2>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            gap: "34px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >

          <a href="#about" style={linkStyle}>
            About
          </a>

          <a href="#experience" style={linkStyle}>
            Experience
          </a>

          <a href="#leadership" style={linkStyle}>
            Leadership
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              background: "#2563EB",
              color: "white",
              padding: "14px 26px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Resume
          </a>

        </div>

      </div>

    </div>

  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "17px",
};