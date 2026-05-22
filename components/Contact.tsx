export default function Contact() {
  return (
    <section
      style={{
        padding: "140px 24px 180px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background: "rgba(59,130,246,0.12)",
          filter: "blur(140px)",
          borderRadius: "50%"
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          textAlign: "center"
        }}
      >

        {/* TOP */}
        <p
          style={{
            color: "#60A5FA",
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontSize: "14px",
            marginBottom: "24px"
          }}
        >
          Let’s Connect
        </p>

        <h2
          style={{
            fontSize: "clamp(48px,6vw,90px)",
            lineHeight: "1.1",
            marginBottom: "40px"
          }}
        >
          Building Growth Through Strategy, Leadership & Execution
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "22px",
            lineHeight: "1.9",
            maxWidth: "900px",
            margin: "0 auto 60px"
          }}
        >
          I’m always open to connecting with professionals, founders,
          leadership teams, and organizations focused on business growth,
          operational scale, acquisitions, and expansion opportunities.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "100px"
          }}
        >

          <a
            href="mailto:guptashivam251095@gmail.com"
            style={{
              background: "#2563EB",
              color: "white",
              padding: "20px 36px",
              borderRadius: "20px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 0 30px rgba(37,99,235,0.35)"
            }}
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-gupta-a86963285"
            target="_blank"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "20px 36px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "white",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            LinkedIn Profile
          </a>

        </div>

        {/* CONTACT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "28px"
          }}
        >

          {/* CARD */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "40px"
            }}
          >

            <h3
              style={{
                marginBottom: "18px",
                fontSize: "28px"
              }}
            >
              Location
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "18px"
              }}
            >
              Mumbai, Maharashtra
            </p>

          </div>

          {/* CARD */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "40px"
            }}
          >

            <h3
              style={{
                marginBottom: "18px",
                fontSize: "28px"
              }}
            >
              Contact
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "18px",
                lineHeight: "1.8"
              }}
            >
              +91 7738753396
              <br />
              guptashivam251095@gmail.com
            </p>

          </div>

          {/* CARD */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "40px"
            }}
          >

            <h3
              style={{
                marginBottom: "18px",
                fontSize: "28px"
              }}
            >
              Expertise
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                fontSize: "18px",
                lineHeight: "1.8"
              }}
            >
              Business Growth
              <br />
              Real Estate Operations
              <br />
              Strategic Expansion
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}