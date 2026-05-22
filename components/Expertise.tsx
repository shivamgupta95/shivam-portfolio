export default function Expertise() {

  const expertise = [
    {
      title: "Business Expansion",
      description:
        "Scaling real estate operations, driving strategic growth initiatives, and building expansion-focused execution systems across multiple business verticals."
    },

    {
      title: "Strategic Acquisitions",
      description:
        "Leading acquisition operations, property onboarding, owner negotiations, supply expansion, and large-scale inventory growth initiatives."
    },

    {
      title: "Luxury Real Estate",
      description:
        "Managing premium property portfolios, luxury client relationships, investor discussions, and high-value real estate transactions across Mumbai."
    },

    {
      title: "Operations Leadership",
      description:
        "Building scalable operational systems, process optimization frameworks, execution workflows, and business efficiency strategies."
    },

    {
      title: "Revenue Growth",
      description:
        "Driving profitability, occupancy optimization, business performance improvement, and long-term revenue-focused expansion initiatives."
    },

    {
      title: "Team Management",
      description:
        "Leading multi-functional teams across acquisitions, operations, customer management, onboarding, and strategic business execution."
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

        {/* TOP SECTION */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px"
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontSize: "14px",
              marginBottom: "20px"
            }}
          >
            Core Expertise
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            Expertise Built Through
            <br />
            Execution & Leadership
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
            A combination of operational execution, acquisition management,
            business scaling, strategic leadership, and growth-focused expansion
            across Mumbai’s evolving real estate ecosystem.
          </p>

        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px"
          }}
        >

          {expertise.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                transition: "0.4s",
                cursor: "pointer"
              }}
            >

              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "24px",
                  color: "white"
                }}
              >
                {item.title}
              </h3>

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