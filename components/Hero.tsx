"use client";

export default function Hero() {

  return (

    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 24px 100px",
        position: "relative",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "1450px",
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
              color: "#C8A96B",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontSize: "13px",
              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Luxury Real Estate • Business Leadership
          </p>

          <h1
            style={{
              fontSize: "clamp(76px,10vw,150px)",
              lineHeight: "0.9",
              fontWeight: "800",
              color: "white",
              marginBottom: "36px",
              letterSpacing: "-5px",
            }}
          >
            Shivam
            <br />
            Gupta
          </h1>

          <p
            style={{
              color: "#D1D5DB",
              fontSize: "22px",
              lineHeight: "2",
              maxWidth: "760px",
              marginBottom: "55px",
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
              gap: "22px",
              flexWrap: "wrap",
            }}
          >

            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                background: "#C8A96B",
                color: "#050505",
                padding: "18px 36px",
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
                padding: "18px 36px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
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
              maxWidth: "500px",
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

          {/* FLOATING CARD 1 */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-40px",
              background:
                "rgba(15,15,15,0.85)",
              border:
                "1px solid rgba(200,169,107,0.2)",
              padding: "24px 28px",
              borderRadius: "22px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.4)",
              zIndex: 5,
              backdropFilter: "blur(18px)",
            }}
          >

            <h3
              style={{
                color: "#C8A96B",
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              ₹4000Cr+
            </h3>

            <p
              style={{
                color: "#9F9F9F",
                margin: 0,
                fontSize: "15px",
              }}
            >
              GMV Managed
            </p>

          </div>

          {/* FLOATING CARD 2 */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "-40px",
              background:
                "rgba(15,15,15,0.85)",
              border:
                "1px solid rgba(200,169,107,0.2)",
              padding: "24px 28px",
              borderRadius: "22px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.4)",
              zIndex: 5,
              backdropFilter: "blur(18px)",
            }}
          >

            <h3
              style={{
                color: "#C8A96B",
                fontSize: "36px",
                marginBottom: "10px",
              }}
            >
              120+
            </h3>

            <p
              style={{
                color: "#9F9F9F",
                margin: 0,
                fontSize: "15px",
              }}
            >
              Properties Onboarded
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}