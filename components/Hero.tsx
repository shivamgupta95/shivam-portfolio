"use client";

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 24px 100px",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(340px,1fr))",
          gap: "100px",
          alignItems: "center",
        }}
      >

        {/* LEFT */}
        <div>

          <p
            style={{
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "6px",
              fontSize: "12px",
              marginBottom: "28px",
              fontWeight: "700",
            }}
          >
            Business Head • Real Estate Leadership
          </p>

          <h1
            style={{
              fontSize: "clamp(72px,10vw,140px)",
              lineHeight: "0.92",
              fontWeight: "800",
              color: "white",
              marginBottom: "34px",
              letterSpacing: "-4px",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "22px",
              lineHeight: "2",
              maxWidth: "720px",
              marginBottom: "50px",
            }}
          >
            Business Head specializing in acquisitions,
            strategic expansion,
            luxury real estate growth,
            operational leadership,
            and execution-focused scaling across Mumbai.
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
                background: "white",
                color: "#050816",
                padding: "18px 34px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                color: "white",
                padding: "18px 34px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "480px",
            }}
          >

            <img
              src="/profile.png"
              alt="Shivam Gupta"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "28px",
                objectFit: "cover",
                filter: "grayscale(10%)",
              }}
            />

          </div>

        </div>

      </div>

    </section>

  );
}