"use client";

export default function Leadership() {

  const leadership = [

    {
      title: "Execution-Driven Leadership",
      description:
        "I believe consistent execution is the foundation of sustainable business growth. Strong systems, accountability, and operational discipline create scalable results."
    },

    {
      title: "Strategic Business Growth",
      description:
        "Growth is built through strategic expansion, operational efficiency, strong market positioning, and long-term business scalability."
    },

    {
      title: "Operational Excellence",
      description:
        "Operational strength comes from building structured processes, scalable systems, execution frameworks, and performance-focused teams."
    },

    {
      title: "People & Team Building",
      description:
        "Strong businesses are built by empowering teams, creating leadership culture, improving accountability, and aligning execution with long-term goals."
    },

    {
      title: "Luxury Client Management",
      description:
        "Managing premium relationships requires trust, responsiveness, execution quality, and consistent delivery standards."
    },

    {
      title: "Expansion Mindset",
      description:
        "Business expansion requires market understanding, strategic acquisitions, operational readiness, and execution-focused growth planning."
    },

  ];

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          background: "rgba(168,85,247,0.08)",
          filter: "blur(120px)",
          bottom: "0",
          left: "0",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
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
            Leadership & Strategy
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Leadership Built
            <br />
            Through Execution
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
            Combining operational discipline, strategic thinking,
            business execution, leadership accountability,
            and scalable growth-focused systems.
          </p>

        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >

          {leadership.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "38px",
                backdropFilter: "blur(12px)",
                transition: "0.35s",
                cursor: "pointer",
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

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                  lineHeight: "1.4",
                  color: "white",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}