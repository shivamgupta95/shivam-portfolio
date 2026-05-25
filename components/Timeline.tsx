"use client";

export default function Timeline() {

  const timeline = [

    {
      year: "2016",
      role: "Retail Sales Manager",
      company: "SRC, Mumbai",
      description:
        "Started professional journey managing retail operations, customer relationships, inventory coordination, sales execution, and frontline team management."
    },

    {
      year: "2022",
      role: "Business Development Manager",
      company: "Trumac Infra Pvt. Ltd.",
      description:
        "Worked on strategic business development initiatives and infrastructure-related projects involving large-scale institutional opportunities."
    },

    {
      year: "2022",
      role: "House Acquisition Manager",
      company: "Nestaway Technologies Pvt. Ltd.",
      description:
        "Led acquisition operations, property onboarding, owner negotiations, and expansion-focused supply growth initiatives across Mumbai."
    },

    {
      year: "2023",
      role: "Senior Sales Associate",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description:
        "Managed premium property portfolios, operational coordination, and luxury client relationships while supporting business growth initiatives."
    },

    {
      year: "2024",
      role: "Acquisition Manager – STR Division",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description:
        "Handled strategic acquisition operations for short-term rental expansion, occupancy optimization, and profitability-focused execution."
    },

    {
      year: "2024",
      role: "Zonal Manager",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description:
        "Led regional operations, acquisitions, expansion strategy, and multi-functional execution teams across Mumbai West."
    },

    {
      year: "Present",
      role: "Business Head / Head of Business",
      company: "Jugyah Real Estate Services Pvt. Ltd.",
      description:
        "Leading business growth, acquisitions, operations, strategic expansion, luxury transactions, and execution-focused scaling initiatives."
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
          maxWidth: "1200px",
          margin: "0 auto",
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
            Career Journey
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Growth Through
            <br />
            Execution & Leadership
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
            A journey built through operational execution,
            acquisitions, business scaling, leadership,
            and strategic real estate growth across Mumbai.
          </p>

        </div>

        {/* TIMELINE */}
        <div
          style={{
            position: "relative",
            marginLeft: "20px",
            borderLeft: "2px solid rgba(96,165,250,0.3)",
            paddingLeft: "40px",
          }}
        >

          {timeline.map((item, index) => (

            <div
              key={index}
              style={{
                position: "relative",
                marginBottom: "60px",
              }}
            >

              {/* DOT */}
              <div
                style={{
                  position: "absolute",
                  left: "-52px",
                  top: "10px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  boxShadow: "0 0 20px rgba(37,99,235,0.5)",
                }}
              />

              {/* CARD */}
              <div

                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                  padding: "36px",
                  backdropFilter: "blur(12px)",
                  transition: "0.35s",
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.border =
                    "1px solid rgba(96,165,250,0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(37,99,235,0.15)";
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
                    marginBottom: "14px",
                    fontSize: "14px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  {item.year}
                </p>

                <h3
                  style={{
                    fontSize: "30px",
                    marginBottom: "12px",
                    color: "white",
                  }}
                >
                  {item.role}
                </h3>

                <h4
                  style={{
                    color: "#D1D5DB",
                    marginBottom: "18px",
                    fontSize: "18px",
                  }}
                >
                  {item.company}
                </h4>

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

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}