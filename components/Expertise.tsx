"use client";

export default function Expertise() {

  const expertise = [

    {
      icon: "📈",
      title: "Business Expansion",
      description:
        "Scaling real estate operations through structured expansion strategies, execution-focused growth systems, and market-driven business development."
    },

    {
      icon: "🏙️",
      title: "Luxury Real Estate",
      description:
        "Managing premium portfolios, luxury transactions, high-value relationships, and execution excellence across Mumbai’s premium market."
    },

    {
      icon: "⚙️",
      title: "Operational Excellence",
      description:
        "Building scalable systems, operational workflows, execution frameworks, and high-performance business operations."
    },

    {
      icon: "🤝",
      title: "Strategic Acquisitions",
      description:
        "Leading acquisitions, onboarding systems, owner relationships, supply expansion, and strategic market growth initiatives."
    },

    {
      icon: "👥",
      title: "Leadership & Team Building",
      description:
        "Driving accountability, leadership culture, operational discipline, and execution-focused performance management."
    },

    {
      icon: "🚀",
      title: "Growth Strategy",
      description:
        "Combining operational execution, market understanding, profitability optimization, and scalable business growth systems."
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
          width: "500px",
          height: "500px",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(120px)",
          top: "0",
          right: "0",
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
            Expertise
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Core Business
            <br />
            Expertise
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
            Combining leadership, strategic execution,
            operational excellence, acquisitions,
            luxury real estate management,
            and scalable business growth.
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

          {expertise.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "40px",
                backdropFilter: "blur(14px)",
                transition: "0.35s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.02)";

                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.35)";

                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(37,99,235,0.18)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";

                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";

                e.currentTarget.style.boxShadow = "none";

              }}
            >

              {/* ICON */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "22px",
                  background: "rgba(96,165,250,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "34px",
                  marginBottom: "28px",
                  boxShadow:
                    "0 0 25px rgba(37,99,235,0.15)",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  lineHeight: "1.4",
                  marginBottom: "20px",
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