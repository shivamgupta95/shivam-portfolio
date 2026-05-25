"use client";

export default function Footer() {

  return (

    <footer
      style={{
        padding: "40px 24px",
        borderTop:
          "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
      }}
    >

      <p
        style={{
          color: "#8F8F8F",
          marginBottom: "18px",
          fontSize: "15px",
        }}
      >
        © 2026 Shivam Gupta. All rights reserved.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >

        <a
          href="https://www.linkedin.com/in/shivam-gupta-a86963285"
          target="_blank"
          style={linkStyle}
        >
          LinkedIn
        </a>

        <a
          href="mailto:officialshivamgupta25@gmail.com"
          style={linkStyle}
        >
          Email
        </a>

        <a
          href="/shivam-gupta-resume-2026.pdf"
          target="_blank"
          style={linkStyle}
        >
          Resume
        </a>

      </div>

    </footer>

  );
}

const linkStyle = {

  color: "#C8A96B",
  textDecoration: "none",
  fontSize: "15px",

} as React.CSSProperties;