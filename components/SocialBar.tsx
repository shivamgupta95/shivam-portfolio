"use client";

export default function SocialBar() {

  return (

    <div
      style={{
        position: "fixed",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >

      <a
        href="https://www.linkedin.com/in/shivam-gupta-a86963285"
        target="_blank"
        style={socialStyle}
      >
        LI
      </a>

      <a
        href="mailto:guptashivam251095@gmail.com"
        style={socialStyle}
      >
        @
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        style={socialStyle}
      >
        CV
      </a>

      <a
        href="https://wa.me/917738753396"
        target="_blank"
        style={socialStyle}
      >
        WA
      </a>

    </div>

  );
}

const socialStyle = {
  width: "68px",
  height: "68px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "white",
  fontSize: "17px",
  fontWeight: "800",
  letterSpacing: "1px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
};