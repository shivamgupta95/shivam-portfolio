"use client";

export default function Contact() {

  return (

    <section
      style={{
        padding: "140px 24px",
        position: "relative",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          background:
            "rgba(15,15,15,0.82)",
          border:
            "1px solid rgba(200,169,107,0.15)",
          borderRadius: "32px",
          padding: "80px 40px",
          backdropFilter: "blur(20px)",
        }}
      >

        <p
          style={{
            color: "#C8A96B",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "20px",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(42px,7vw,72px)",
            color: "white",
            marginBottom: "28px",
          }}
        >
          Let’s Build Something Exceptional
        </h2>

        <p
          style={{
            color: "#B0B0B0",
            fontSize: "20px",
            lineHeight: "1.9",
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          Open to strategic collaborations,
          luxury real estate partnerships,
          acquisitions,
          operational growth initiatives,
          and leadership opportunities.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

          {/* EMAIL */}
          <a
            href="mailto:officialshivamgupta25@gmail.com"
            style={{
              background: "#C8A96B",
              color: "#050505",
              padding: "18px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Email Me
          </a>

          {/* LINKEDIN */}
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
              background:
                "rgba(255,255,255,0.03)",
            }}
          >
            LinkedIn
          </a>

        </div>

        {/* EMAIL TEXT */}
        <p
          style={{
            marginTop: "40px",
            color: "#8F8F8F",
            fontSize: "16px",
          }}
        >
          officialshivamgupta25@gmail.com
        </p>

      </div>

    </section>

  );
}