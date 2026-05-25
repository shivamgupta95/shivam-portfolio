"use client";

const experiences = [

  {
    role: "Business Head",
    company: "Jugyah Real Estate Services Pvt. Ltd.",
    duration: "2024 – Present",
    points: [
      "Leading acquisitions, strategic expansion, and operational growth initiatives across Mumbai Metropolitan Region.",
      "Managed ₹4000Cr+ GMV across premium residential and luxury real estate portfolios.",
      "Led cross-functional teams handling operations, occupancy optimization, and business scaling.",
      "Handled execution-focused growth strategy, acquisitions, and revenue optimization.",
      "Drove operational efficiency and streamlined execution processes across multiple verticals."
    ]
  },

  {
    role: "Business Development & Operations",
    company: "Real Estate Growth & Expansion",
    duration: "2022 – 2024",
    points: [
      "Worked on high-value property acquisitions and premium residential growth initiatives.",
      "Managed client relationships, strategic partnerships, and operational coordination.",
      "Improved occupancy optimization, onboarding efficiency, and execution-driven operations.",
      "Supported expansion initiatives across luxury and managed residential assets.",
      "Collaborated with teams on scaling operational processes and improving business performance."
    ]
  },

  {
    role: "Sales & Client Relations",
    company: "Real Estate & Business Operations",
    duration: "2020 – 2022",
    points: [
      "Handled client relationship management and business development activities.",
      "Worked closely with clients on property consultations and strategic decision-making.",
      "Supported operational coordination and customer experience improvement initiatives.",
      "Contributed to business growth through execution-focused sales and client servicing.",
      "Built strong communication and relationship management capabilities."
    ]
  }

];

export default function Timeline() {

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        <p
          style={{
            color: "#60A5FA",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "18px",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          Experience
        </p>

        <h2
          style={{
            fontSize: "clamp(42px,7vw,72px)",
            marginBottom: "70px",
            color: "white",
          }}
        >
          Professional Journey
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >

          {experiences.map((item, index) => (

            <div
              key={index}
              style={{
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "30px",
                padding: "40px",
                backdropFilter: "blur(16px)",
                boxShadow:
                  "0 0 40px rgba(37,99,235,0.08)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                  marginBottom: "24px",
                }}
              >

                <div>

                  <h3
                    style={{
                      color: "white",
                      fontSize: "32px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.role}
                  </h3>

                  <p
                    style={{
                      color: "#60A5FA",
                      margin: 0,
                      fontSize: "18px",
                    }}
                  >
                    {item.company}
                  </p>

                </div>

                <div>

                  <p
                    style={{
                      color: "#9CA3AF",
                      fontSize: "16px",
                    }}
                  >
                    {item.duration}
                  </p>

                </div>

              </div>

              <ul
                style={{
                  color: "#D1D5DB",
                  lineHeight: "2",
                  paddingLeft: "20px",
                  fontSize: "18px",
                }}
              >

                {item.points.map((point, i) => (

                  <li key={i}>
                    {point}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}