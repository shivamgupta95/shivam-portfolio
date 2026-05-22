export default function Timeline() {

  const timeline = [
    {
      year: "2016",
      role: "Retail Sales Manager",
      company: "SRC, Mumbai",
      description: [
        "Started my professional journey in frontline retail operations where I developed strong foundations in customer engagement, operational execution, sales communication, and team coordination.",

        "• Managed day-to-day retail operations, customer handling, inventory coordination, and staff supervision",

        "• Developed strong understanding of customer psychology, sales conversion, and service excellence",

        "• Built operational discipline and execution capabilities while working in fast-paced customer-facing environments",

        "• Learned the importance of consistency, accountability, teamwork, and business execution under pressure"
      ]
    },

    {
      year: "2022",
      role: "Business Development Manager",
      company: "Trumac Infra Pvt. Ltd.",
      description: [
        "Worked on strategic business development initiatives and contributed toward infrastructure-related business opportunities involving large-scale institutional projects.",

        "• Assisted in business expansion and strategic client coordination initiatives",

        "• Contributed to securing Indian Railways orders worth approximately ₹1,000 Crore",

        "• Supported relationship management, proposal coordination, and project-level business execution",

        "• Strengthened understanding of corporate business development and large-scale deal management"
      ]
    },

    {
      year: "2022",
      role: "House Acquisition Manager",
      company: "Nestaway Technologies Pvt. Ltd.",
      description: [
        "Managed residential property acquisition and onboarding operations across Mumbai while focusing on supply expansion, owner relationships, and operational execution.",

        "• Successfully onboarded 120+ residential properties across key micro-markets",

        "• Consistently ranked among top-performing acquisition managers nationally",

        "• Received Employee of the Month recognition for 6 consecutive months",

        "• Handled owner negotiations, onboarding workflows, documentation coordination, and operational process execution"
      ]
    },

    {
      year: "2023",
      role: "Senior Sales Associate",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description: [
        "Managed high-value property portfolios and premium client relationships while contributing toward operational optimization and large-scale portfolio management.",

        "• Managed large-scale GMV property portfolios across Mumbai Metropolitan Region",

        "• Contributed to reducing onboarding turnaround time by approximately 93% through operational improvements",

        "• Handled premium customer relationships, luxury property discussions, and investor interactions",

        "• Supported operational coordination, acquisition workflows, and business execution initiatives"
      ]
    },

    {
      year: "2024",
      role: "Acquisition Manager – STR Division",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description: [
        "Led Short-Term Rental acquisition and operational growth initiatives focused on occupancy optimization, supply expansion, and profitability improvement.",

        "• Built and scaled STR acquisition operations across multiple micro-markets",

        "• Achieved occupancy levels exceeding 80% through strategic inventory planning",

        "• Improved operational efficiency and rental yield performance across managed units",

        "• Handled acquisition strategy, owner relationships, and operational coordination"
      ]
    },

    {
      year: "2024",
      role: "Zonal Manager",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description: [
        "Led Mumbai West regional business operations while overseeing acquisitions, operational scaling, business execution, and growth-focused initiatives.",

        "• Managed regional growth operations and multi-functional execution teams",

        "• Oversaw acquisition operations, process management, and expansion initiatives",

        "• Focused on operational scalability, revenue optimization, and business efficiency",

        "• Contributed toward strengthening regional business performance and execution quality"
      ]
    },

    {
      year: "Present",
      role: "Business Head / Head of Business",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description: [
        "Currently leading strategic business growth, acquisitions, operational leadership, expansion planning, and luxury transaction management across Mumbai Metropolitan Region.",

        "• Managing portfolios exceeding ₹4,000 Crore GMV",

        "• Leading multi-functional teams across acquisitions, operations, and strategic growth",

        "• Driving expansion-focused business strategies and operational scalability",

        "• Handling premium and high-value real estate transactions across Mumbai",

        "• Building systems, operational structures, and long-term business growth initiatives"
      ]
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
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >

        {/* TOP */}
        <div
          style={{
            marginBottom: "100px",
            textAlign: "center"
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontSize: "14px",
              marginBottom: "24px"
            }}
          >
            Career Timeline
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            The Journey Behind The Growth
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
            A journey built through operational execution, acquisitions,
            business scaling, leadership development, and expansion-focused growth.
          </p>

        </div>

        {/* TIMELINE */}
        <div
          style={{
            position: "relative",
            paddingLeft: "40px",
            borderLeft: "2px solid rgba(255,255,255,0.1)"
          }}
        >

          {timeline.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                marginBottom: "80px"
              }}
            >

              {/* DOT */}
              <div
                style={{
                  position: "absolute",
                  left: "-51px",
                  top: "10px",
                  width: "20px",
                  height: "20px",
                  background: "#2563EB",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px rgba(37,99,235,0.6)"
                }}
              />

              {/* CARD */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "32px",
                  padding: "40px",
                  backdropFilter: "blur(20px)"
                }}
              >

                <p
                  style={{
                    color: "#60A5FA",
                    marginBottom: "16px",
                    fontSize: "15px",
                    letterSpacing: "2px"
                  }}
                >
                  {item.year}
                </p>

                <h3
                  style={{
                    fontSize: "34px",
                    marginBottom: "12px"
                  }}
                >
                  {item.role}
                </h3>

                <h4
                  style={{
                    color: "#d1d5db",
                    marginBottom: "28px",
                    fontSize: "20px"
                  }}
                >
                  {item.company}
                </h4>

                <div
                  style={{
                    color: "#9CA3AF",
                    lineHeight: "2",
                    fontSize: "18px",
                    display: "grid",
                    gap: "18px"
                  }}
                >
                  {item.description.map((text, i) => (
                    <p key={i}>
                      {text}
                    </p>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}