"use client";

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(59,130,246,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.2), transparent 30%), #050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "180px",
        paddingBottom: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* MAIN CONTAINER */}
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "70px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* LEFT SIDE */}
        <div>

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "5px",
              marginBottom: "22px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Business Head • Real Estate Strategist
          </p>

          <h1
            style={{
              fontSize: "clamp(70px,9vw,120px)",
              lineHeight: "0.95",
              marginBottom: "30px",
              fontWeight: "800",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#9CA3AF",
              lineHeight: "2",
              fontSize: "22px",
              maxWidth: "760px",
              marginBottom: "50px",
            }}
          >
            Business leader specializing in acquisitions,
            luxury real estate, strategic expansion,
            operational excellence, and execution-driven
            business growth across Mumbai.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                background: "#2563EB",
                padding: "20px 36px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "18px",
                boxShadow:
                  "0 0 35px rgba(37,99,235,0.35)",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                padding: "20px 36px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "18px",
                backdropFilter: "blur(12px)",
              }}
            >
              LinkedIn Profile
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >

          {/* GLOW */}
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

      </div>

    </section>

  );
}