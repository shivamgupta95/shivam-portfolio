export default function Achievements() {

  const achievements = [

    {
      number: "₹4,000Cr+",
      title: "GMV Managed",
      description:
        "Handled and contributed across large-scale real estate operations, luxury inventory management, acquisitions, and strategic business expansion initiatives across Mumbai."
    },

    {
      number: "₹200Cr+",
      title: "Luxury Transactions",
      description:
        "Managed premium property portfolios and luxury real estate transactions involving high-net-worth individuals, investors, and premium residential assets."
    },

    {
      number: "120+",
      title: "Properties Onboarded",
      description:
        "Successfully executed onboarding operations, acquisition expansion, owner coordination, and supply growth strategies across multiple real estate verticals."
    },

    {
      number: "25+",
      title: "Teams Led",
      description:
        "Led cross-functional teams across operations, acquisitions, onboarding, customer management, strategic execution, and expansion-focused initiatives."
    },

    {
      number: "95%+",
      title: "Occupancy Optimization",
      description:
        "Contributed toward occupancy optimization strategies, operational efficiency improvements, and enhanced business profitability across managed assets."
    },

    {
      number: "9+ Years",
      title: "Industry Experience",
      description:
        "Built strong expertise across operations leadership, strategic acquisitions, luxury sales, business development, and revenue-focused real estate execution."
    }

  ];

  return (

    <section
      style={{
        padding: "140px 24px",
        position: "relative"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >

        {/* HEADING */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "90px"
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "14px",
              marginBottom: "20px"
            }}
          >
            Achievements & Impact
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            Business Impact
            <br />
            Through Execution
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            A proven track record of driving operational excellence,
            acquisitions, strategic expansion, business growth,
            and high-value execution across Mumbai’s evolving real estate ecosystem.
          </p>

        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px"
          }}
        >

          {achievements.map((item, index) => (

            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "45px",
                backdropFilter: "blur(20px)",
                transition: "0.4s"
              }}
            >

              <h3
                style={{
                  fontSize: "52px",
                  marginBottom: "20px",
                  color: "white"
                }}
              >
                {item.number}
              </h3>

              <h4
                style={{
                  fontSize: "28px",
                  marginBottom: "24px",
                  color: "#60A5FA"
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.9",
                  fontSize: "17px"
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