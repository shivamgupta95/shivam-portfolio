"use client";

const experiences = [

  {
    role: "Business Head / Head of Business",
    company: "Jugyah Real Estate Services Pvt. Ltd.",
    duration: "Nov 2024 – Present",
    points: [
      "Leading end-to-end real estate operations across Mumbai Metropolitan Region including acquisitions, sales, strategic expansion, and revenue growth.",
      "Managing a ₹4000+ Crore GMV portfolio across premium residential and luxury real estate assets.",
      "Leading and mentoring a 25+ member sales and operations team across multiple business verticals.",
      "Negotiated ultra-luxury transactions exceeding ₹200 Crore for HNI clients across Bandra and South Mumbai.",
      "Expanded business operations into Navi Mumbai and Thane markets.",
      "Implemented data-driven growth strategies improving funnel conversion and operational scalability."
    ]
  },

  {
    role: "Zonal Manager",
    company: "Jugyah Real Estate Services Pvt. Ltd.",
    duration: "Apr 2024 – Nov 2024",
    points: [
      "Led Mumbai West operations driving ₹1.44 Crore revenue generation.",
      "Managed a 10-member sales team handling acquisitions, negotiations, and client relationships.",
      "Designed sales training systems and operational frameworks improving conversion rates significantly.",
      "Handled strategic deal closures and operational execution across high-value residential assets."
    ]
  },

  {
    role: "Acquisition Manager – STR Division",
    company: "Jugyah Real Estate Services Pvt. Ltd.",
    duration: "Jan 2024 – Apr 2024",
    points: [
      "Headed the STR business vertical onboarding 50+ premium properties across MMR.",
      "Maintained occupancy above 80% while achieving 2x rental yield compared to long-term rentals.",
      "Managed sourcing, interiors, pricing strategy, listing optimization, and hospitality platforms.",
      "Achieved 50% profitability making the business line cash-flow positive."
    ]
  },

  {
    role: "Senior Sales Associate",
    company: "Jugyah Real Estate Services Pvt. Ltd.",
    duration: "Jun 2023 – Jan 2024",
    points: [
      "Onboarded 200+ properties with complete due diligence and documentation compliance.",
      "Reduced onboarding turnaround time by 93%, contributing to rapid business growth.",
      "Managed ₹800 Crore GMV while optimizing pricing strategies for sales and rental portfolios.",
      "Collaborated with technology teams to improve CRM systems and fake listing detection."
    ]
  },

  {
    role: "House Acquisition Manager",
    company: "Nestaway Technologies Pvt. Ltd.",
    duration: "Nov 2022 – Jun 2023",
    points: [
      "Onboarded 120+ residential homes while improving booking turnaround efficiency.",
      "Worked closely with leadership teams on operational strategy and due diligence initiatives.",
      "Recognized as Employee of the Month for 6 consecutive months.",
      "Contributed to operational optimization and strategic growth initiatives."
    ]
  },

  {
    role: "Business Development Manager",
    company: "Trumac Infra Pvt. Ltd.",
    duration: "Mar 2022 – Nov 2022",
    points: [
      "Managed the complete sales cycle contributing to 30% business revenue growth.",
      "Secured Indian Railways as a major client with an order value of approximately ₹1000 Crore.",
      "Developed multi-channel sales and marketing initiatives improving business acquisition.",
      "Built strategic client relationships and managed high-value negotiations."
    ]
  },

  {
    role: "Retail Sales Manager",
    company: "SRC, Mumbai",
    duration: "Jun 2016 – Mar 2022",
    points: [
      "Managed sales operations, customer service, inventory handling, and staff training.",
      "Led frontline sales execution and customer relationship management initiatives.",
      "Implemented operational improvements reducing turnaround time by 80%.",
      "Built strong foundations in leadership, sales operations, and execution-focused management."
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