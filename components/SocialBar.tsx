"use client";

export default function SocialBar() {

  return (

    <div
      style={{
        position: "fixed",
        right: "22px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >

      {/* LINKEDIN */}
      <a
        href="https://linkedin.com"
        target="_blank"
        style={socialStyle}
      >
        💼
      </a>

      {/* EMAIL */}
      <a
        href="mailto:yourmail@gmail.com"
        style={socialStyle}
      >
        ✉️
      </a>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        target="_blank"
        style={socialStyle}
      >
        📄
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        style={socialStyle}
      >
        💬
      </a>

    </div>

  );
}

const socialStyle = {
  width: "62px",
  height: "62px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(18px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "28px",
  boxShadow: "0 0 30px rgba(0,0,0,0.25)",
  transition: "0.35s",
};