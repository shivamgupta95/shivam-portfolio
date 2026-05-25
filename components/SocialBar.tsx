"use client";

export default function SocialBar() {

  return (

    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/shivam-gupta-a86963285"
        target="_blank"
        style={socialStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.6h-5V8z"/>
        </svg>
      </a>

      {/* EMAIL */}
      <a
        href="mailto:guptashivam251095@gmail.com"
        style={socialStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.5L0 6.75V18h24V6.75L12 13.5zm12-9H0l12 6.75L24 4.5z"/>
        </svg>
      </a>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        target="_blank"
        style={socialStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5z"/>
        </svg>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/917738753396"
        target="_blank"
        style={socialStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.44 0 .06 5.38.06 12c0 2.12.56 4.2 1.63 6.03L0 24l6.17-1.61A11.93 11.93 0 0 0 12.06 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.55-8.52zM12.07 21.8a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.66.96.98-3.57-.24-.37A9.78 9.78 0 0 1 2.27 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.75 9.75 0 0 1 21.87 12c0 5.4-4.4 9.8-9.8 9.8zm5.37-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </a>

    </div>

  );
}

const socialStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(18px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  boxShadow: "0 0 25px rgba(0,0,0,0.25)",
  transition: "all 0.3s ease",
};