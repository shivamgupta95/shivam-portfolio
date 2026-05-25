"use client";

export default function SocialBar() {

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (

    <div
      style={{
        position: "fixed",
        right: isMobile ? "12px" : "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "12px" : "18px",
      }}
    >

      <a
        href="https://www.linkedin.com/in/shivam-gupta-a86963285"
        target="_blank"
        style={socialStyle(isMobile)}
      >
        LI
      </a>

      <a
        href="mailto:officialshivamgupta25@gmail.com"
        style={socialStyle(isMobile)}
      >
        @
      </a>

      <a
        href="/shivam-gupta-resume-2026.pdf"
        target="_blank"
        style={socialStyle(isMobile)}
      >
        CV
      </a>

      <a
        href="https://wa.me/917738753396"
        target="_blank"
        style={socialStyle(isMobile)}
      >
        WA
      </a>

    </div>

  );
}

function socialStyle(isMobile: boolean) {

  return {

    width: isMobile ? "58px" : "68px",
    height: isMobile ? "58px" : "68px",
    borderRadius: "20px",
    background:
      "rgba(255,255,255,0.08)",
    border:
      "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "white",
    fontSize: isMobile ? "16px" : "17px",
    fontWeight: "800",
    boxShadow:
      "0 20px 40px rgba(0,0,0,0.28)",

  } as React.CSSProperties;

}