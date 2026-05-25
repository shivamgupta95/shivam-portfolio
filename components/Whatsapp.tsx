"use client";

export default function Whatsapp() {

  return (

    <a
      href="https://wa.me/917738753396"
      target="_blank"

      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontSize: "34px",
        color: "white",
        zIndex: 9999,
        boxShadow: "0 0 30px rgba(37,211,102,0.45)",
        transition: "0.35s",
        animation: "floating 4s ease-in-out infinite",
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "scale(1.1) translateY(-5px)";

        e.currentTarget.style.boxShadow =
          "0 0 40px rgba(37,211,102,0.65)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "scale(1) translateY(0px)";

        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(37,211,102,0.45)";
      }}
    >
      💬
    </a>

  );
}