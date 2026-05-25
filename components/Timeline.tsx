"use client";

export default function Timeline() {

  const timeline = [

    {
      period: "Nov 2024 – Present",

      role: "Business Head / Head of Business",

      company: "Jugyah Real Estate Services Pvt. Ltd.",

      description:
        "Currently leading end-to-end real estate business operations across Mumbai Metropolitan Region including acquisitions, sales, strategic expansion, operational growth, and revenue management. Managing a 25+ member sales and operations team while driving recruitment, mentoring, training, performance management, and business scaling initiatives. Successfully handled ultra-luxury real estate transactions exceeding ₹200 Crore for HNI clients across Bandra and South Mumbai while managing a ₹4,000 Crore GMV portfolio with strong customer satisfaction and owner retention metrics. Led business expansion into Navi Mumbai and Thane while implementing data-driven sales strategies to improve conversion across the sales funnel."
    },

    {
      period: "Apr 2024 – Nov 2024",

      role: "Zonal Manager",

      company: "Jugyah Real Estate Services Pvt. Ltd.",

      description:
        "Led Mumbai West regional operations while managing a 10-member sales team responsible for acquisitions, negotiations, closures, and client relationship management. Generated ₹1.44 Crore revenue while implementing operational frameworks, weekly sales training systems, and performance-focused execution strategies that significantly improved business conversion efficiency and operational scalability."
    },

    {
      period: "Jan 2024 – Apr 2024",

      role: "Acquisition Manager – STR Division",

      company: "Jugyah Real Estate Services Pvt. Ltd.",

      description:
        "Headed the Short-Term Rental (STR) business vertical across Mumbai Metropolitan Region and successfully onboarded 50+ premium properties. Managed end-to-end STR operations including sourcing, interiors, pricing strategies, listing optimization, and hospitality platform management across Airbnb, Booking.com, and Agoda. Maintained 80%+ occupancy while achieving 2x rental yield compared to long-term rental models and successfully made the business vertical cash-flow positive with 50% profitability."
    },

    {
      period: "Jun 2023 – Jan 2024",

      role: "Senior Sales Associate",

      company: "Jugyah Real Estate Services Pvt. Ltd.",

      description:
        "Managed large-scale property onboarding operations with complete due diligence and documentation compliance across 200+ properties. Reduced onboarding turnaround time by 93%, contributing significantly to rapid company growth and operational scalability. Managed ₹800 Crore GMV while optimizing pricing strategies across rental and sales portfolios. Collaborated closely with technology teams to improve CRM systems and implement fake listing detection processes."
    },

    {
      period: "Nov 2022 – Jun 2023",

      role: "House Acquisition Manager",

      company: "Nestaway Technologies Pvt. Ltd.",

      description:
        "Led residential property acquisition operations while onboarding 120 homes and improving booking turnaround efficiency through execution-focused operational coordination. Worked directly with leadership teams on due diligence initiatives and strategic operational improvements. Recognized as Employee of the Month for 6 consecutive months for exceptional acquisition performance and operational consistency."
    },

    {
      period: "Mar 2022 – Nov 2022",

      role: "Business Development Manager",

      company: "Trumac Infra Pvt. Ltd.",

      description:
        "Managed complete business development and sales operations while contributing to 30% revenue growth. Secured Indian Railways as a major institutional client with an order value of approximately ₹1,000 Crore. Developed strategic sales plans, multi-channel marketing campaigns, performance tracking systems, and operational sales frameworks to improve business growth and client acquisition."
    },

    {
      period: "Jun 2016 – Mar 2022",

      role: "Retail Sales Manager",

      company: "SRC, Mumbai",

      description:
        "Started professional journey managing retail sales operations, customer service, inventory handling, staff training, and execution-focused operational management. Implemented process improvements and sales strategies that reduced operational turnaround time by 80% while improving service delivery standards and operational efficiency."
    },

  ];

  return (

    <section
      style={{
        padding: "140px 20px",
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
            marginBottom: "100px",
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
            Executive Career Journey
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,76px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Leadership Growth
            <br />
            Through Execution
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            A progression built through operational excellence,
            strategic acquisitions, business expansion,
            leadership accountability, revenue growth,
            and execution-focused real estate management
            across Mumbai Metropolitan Region.
          </p>

        </div>

        {/* TIMELINE */}
        <div
          style={{
            position: "relative",
            marginLeft: "20px",
            borderLeft:
              "2px solid rgba(96,165,250,0.25)",
            paddingLeft: "40px",
          }}
        >

          {timeline.map((item, index) => (

            <div
              key={index}
              style={{
                position: "relative",
                marginBottom: "70px",
              }}
            >

              {/* DOT */}
              <div
                style={{
                  position: "absolute",
                  left: "-52px",
                  top: "10px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#2563EB",
                  boxShadow:
                    "0 0 25px rgba(37,99,235,0.5)",
                }}
              />

              {/* CARD */}
              <div
                style={{
                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  borderRadius: "32px",

                  padding: "42px",

                  backdropFilter: "blur(14px)",

                  transition: "0.35s",
                }}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-10px)";

                  e.currentTarget.style.border =
                    "1px solid rgba(96,165,250,0.35)";

                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(37,99,235,0.18)";

                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0px)";

                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.08)";

                  e.currentTarget.style.boxShadow =
                    "none";

                }}
              >

                <p
                  style={{
                    color: "#60A5FA",
                    marginBottom: "16px",
                    fontSize: "14px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: "700",
                  }}
                >
                  {item.period}
                </p>

                <h3
                  style={{
                    fontSize: "34px",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  {item.role}
                </h3>

                <h4
                  style={{
                    color: "#D1D5DB",
                    marginBottom: "24px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {item.company}
                </h4>

                <p
                  style={{
                    color: "#9CA3AF",
                    lineHeight: "2",
                    fontSize: "17px",
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