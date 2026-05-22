export default function Stats() {

  const stats = [
    {
      title: "₹4,000+ Crore",
      subtitle: "GMV Portfolio Managed",
      description:
        "Led and managed large-scale real estate portfolios across Mumbai Metropolitan Region with strategic operational oversight."
    },
    {
      title: "₹200+ Crore",
      subtitle: "Luxury Transactions",
      description:
        "Handled premium and high-value real estate transactions involving HNI and investor-driven acquisitions."
    },
    {
      title: "25+",
      subtitle: "Teams Led",
      description:
        "Built and managed multi-functional teams across acquisitions, operations, sales, and strategic expansion."
    },
    {
      title: "97%",
      subtitle: "Customer Satisfaction",
      description:
        "Maintained high operational standards and client satisfaction through process optimization and relationship management."
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

        {/* TOP */}
        <div
          style={{
            marginBottom: "80px",
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
            Business Impact
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px"
            }}
          >
            Driving Scale, Revenue & Expansion
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "20px",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8"
            }}
          >
            Over the years, I have contributed across acquisitions,
            operations, strategic growth, revenue scaling, and high-value
            real estate execution across Mumbai’s competitive market landscape.
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

          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "40px",
                backdropFilter: "blur(20px)",
                transition: "0.3s"
              }}
            >

              <h3
                style={{
                  fontSize: "56px",
                  marginBottom: "16px"
                }}
              >
                {item.title}
              </h3>

              <h4
                style={{
                  fontSize: "22px",
                  marginBottom: "24px",
                  color: "white"
                }}
              >
                {item.subtitle}
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