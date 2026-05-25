"use client";

export default function Achievements() {

  const achievements = [

    {
      number: "₹4000Cr+",
      title: "GMV Managed",
      description:
        "Handled large-scale real estate operations, strategic expansion, luxury inventory management, and business growth initiatives across Mumbai."
    },

    {
      number: "120+",
      title: "Properties Onboarded",
      description:
        "Successfully executed acquisition operations, onboarding systems, owner coordination, and supply expansion strategies."
    },

    {
      number: "25+",
      title: "Teams Led",
      description:
        "Led cross-functional teams across acquisitions, operations, customer management, and strategic business execution."
    },

    {
      number: "95%+",
      title: "Occupancy Optimization",
      description:
        "Improved occupancy rates, operational efficiency, and profitability through execution-focused management strategies."
    },

    {
      number: "₹200Cr+",
      title: "Luxury Transactions",
      description:
        "Managed premium real estate portfolios and high-value luxury property transactions across Mumbai."
    },

    {
      number: "9+ Years",
      title: "Industry Experience",
      description:
        "Built expertise across operations leadership, business growth, acquisitions, and execution-driven expansion."
    },

  ];

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >

        {/* TOP */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Achievements
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Business Impact
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
            A proven track record of scaling operations,
            driving acquisitions, optimizing business systems,
            and executing growth-focused strategies across
            Mumbai’s real estate ecosystem.
          </p>

        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >

          {achievements.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "36px",
                backdropFilter: "blur(12px)",
                transition: "0.35s",
                cursor: "pointer",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.4)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(37,99,235,0.18)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <h2
                style={{
                  fontSize: "48px",
                  marginBottom: "18px",
                  color: "white",
                }}
              >
                {item.number}
              </h2>

              <h3
                style={{
                  color: "#60A5FA",
                  marginBottom: "18px",
                  fontSize: "24px",
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