export default function Expertise() {

  const expertise = [

    {
      title: "Business Expansion",
      description:
        "Scaling real estate operations and driving strategic business growth across multiple verticals."
    },

    {
      title: "Strategic Acquisitions",
      description:
        "Managing acquisitions, onboarding, owner relationships, and expansion operations."
    },

    {
      title: "Luxury Real Estate",
      description:
        "Handling premium property portfolios and high-value client relationships."
    },

    {
      title: "Operations Leadership",
      description:
        "Building operational systems, execution workflows, and scalable business processes."
    },

    {
      title: "Revenue Growth",
      description:
        "Driving occupancy growth, profitability improvement, and long-term business performance."
    }

  ];

  return (

    <section
      style={{
        padding: "120px 24px"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "80px"
          }}
        >

          <p
            style={{
              color: "#60A5FA",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}
          >
            Expertise
          </p>

          <h2
            style={{
              fontSize: "64px",
              marginBottom: "20px"
            }}
          >
            Core Expertise
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8"
            }}
          >
            Combining operational excellence, acquisitions,
            strategic leadership, and execution-driven growth.
          </p>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "24px"
          }}
        >

          {expertise.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "36px"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#9CA3AF",
                  lineHeight: "1.8"
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