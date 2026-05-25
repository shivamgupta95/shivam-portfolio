"use client";

export default function Hero() {

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

  return (

    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile
          ? "180px 20px 80px"
          : "140px 24px 100px",
        position: "relative",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "1450px",
          display: "grid",
          gridTemplateColumns:
            isMobile ? "1fr" : "repeat(auto-fit,minmax(340px,1fr))",
          gap: isMobile ? "70px" : "100px",
          alignItems: "center",
        }}
      >

        {/* LEFT */}
        <div
          style={{
            textAlign: isMobile ? "center" : "left",
          }}
        >

          <p
            style={{
              color: "#C8A96B",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: isMobile ? "11px" : "13px",
              marginBottom: "24px",
              fontWeight: "700",
            }}
          >
            Luxury Real Estate • Business Leadership
          </p>

          <h1
            style={{
              fontSize: isMobile
                ? "64px"
                : "clamp(76px,10vw,150px)",
              lineHeight: "0.9",
              fontWeight: "800",
              color: "white",
              marginBottom: "28px",
              letterSpacing: "-4px",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#D1D5DB",
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: "1.9",
              maxWidth: "760px",
              marginBottom: "45px",
            }}
          >
            Business Head specializing in luxury real estate,
            acquisitions,
            strategic expansion,
            operational excellence,
            and execution-focused growth across Mumbai Metropolitan Region.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: isMobile
                ? "center"
                : "flex-start",
            }}
          >

            {/* RESUME BUTTON */}
            <a
              href="/shivam-gupta-resume-2026.pdf"
              target="_blank"
              style={{
                background: "#C8A96B",
                color: "#050505",
                padding: isMobile
                  ? "16px 26px"
                  : "18px 36px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              Resume
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.12)",
                color: "white",
                padding: isMobile
                  ? "16px 26px"
                  : "18px 36px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                background:
                  "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
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
            position: "relative",
          }}
        >

          {/* IMAGE */}
          <div
            style={{
              width: "100%",
              maxWidth: isMobile
                ? "320px"
                : "500px",
              position: "relative",
              zIndex: 2,
            }}
          >

            <img
              src="/profile.png"
              alt="Shivam Gupta"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "30px",
                objectFit: "cover",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.55)",
              }}
            />

          </div>

        </div>

      </div>

    </section>

  );
}