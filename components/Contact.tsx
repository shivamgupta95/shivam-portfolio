"use client";

export default function Contact() {

  return (

    <section
      id="contact"
      style={{
        padding: "120px 20px",
        textAlign: "center",
      }}
    >

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >

        <p
          style={{
            color: "#60A5FA",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "20px",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(42px,7vw,72px)",
            lineHeight: "1.1",
            marginBottom: "28px",
            color: "white",
          }}
        >
          Let’s Connect
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "20px",
            lineHeight: "2",
            marginBottom: "45px",
          }}
        >
          Open to leadership opportunities,
          strategic expansion roles,
          acquisitions,
          operational scaling,
          and business growth discussions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

          <a
            href="mailto:guptashivam251095@gmail.com"
            style={{
              background: "#2563EB",
              color: "white",
              padding: "18px 30px",
              borderRadius: "18px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-gupta-a86963285"
            target="_blank"
            style={{
              border:
                "1px solid rgba(255,255,255,0.12)",
              color: "white",
              padding: "18px 30px",
              borderRadius: "18px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>

  );
}