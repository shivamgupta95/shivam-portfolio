{/* RIGHT SIDE */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}
>

  {/* OUTER GLOW */}
  <div
    style={{
      position: "absolute",
      width: "650px",
      height: "650px",
      background:
        "radial-gradient(circle, rgba(37,99,235,0.28), transparent 70%)",
      filter: "blur(90px)",
      zIndex: 1,
    }}
  />

  {/* IMAGE CARD */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      borderRadius: "40px",
      overflow: "hidden",
      border:
        "1px solid rgba(255,255,255,0.08)",
      background:
        "rgba(255,255,255,0.04)",
      backdropFilter: "blur(20px)",
      padding: "18px",
      boxShadow:
        "0 0 60px rgba(37,99,235,0.18)",
      transition: "0.4s",
    }}
  >

    <img
      src="/profile.png"
      alt="Shivam Gupta"
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "28px",
        display: "block",
        objectFit: "cover",
      }}
    />

  </div>

</div>