"use client";

export default function Contact() {

  const contacts = [

    {
      title: "Email",
      value: "guptashivam251095@gmail.com",
      link: "mailto:guptashivam251095@gmail.com",
    },

    {
      title: "LinkedIn",
      value: "linkedin.com/in/shivam-gupta-a86963285",
      link: "https://www.linkedin.com/in/shivam-gupta-a86963285",
    },

    {
      title: "Phone",
      value: "+91 7738753396",
      link: "tel:+917738753396",
    },

  ];

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(120px)",
          top: "0",
          right: "0",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* TOP */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "18px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Contact
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Let’s Build
            <br />
            Something Bigger
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              maxWidth: "850px",
              margin: "0 auto",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Open to leadership opportunities, strategic business discussions,
            real estate collaborations, and growth-focused partnerships.
          </p>

        </div>

        {/* CONTACT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
            marginBottom: "50px",
          }}
        >

          {contacts.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "36px",
                textDecoration: "none",
                backdropFilter: "blur(12px)",
                transition: "0.35s",
                display: "block",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.35)";
                e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(37,99,235,0.15)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <p
                style={{
                  color: "#60A5FA",
                  marginBottom: "18px",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </p>

              <h3
                style={{
                  color: "white",
                  fontSize: "24px",
                  lineHeight: "1.5",
                  wordBreak: "break-word",
                }}
              >
                {item.value}
              </h3>

            </a>

          ))}

        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
          }}
        >

          <a
            href="/resume.pdf"
            target="_blank"

            style={{
              background: "#2563EB",
              color: "white",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: "16px",
              fontWeight: "600",
              display: "inline-block",
              boxShadow: "0 0 25px rgba(37,99,235,0.35)",
            }}
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}