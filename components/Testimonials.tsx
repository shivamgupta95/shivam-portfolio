"use client";

export default function Testimonials() {

  const testimonials = [

    {
      quote:
        "Shivam consistently demonstrated strong leadership, operational discipline, and execution excellence while managing large-scale business responsibilities.",
      name: "Senior Business Leadership",
      role: "Real Estate Industry"
    },

    {
      quote:
        "His ability to manage acquisitions, operations, team coordination, and strategic execution makes him a highly dependable business leader.",
      name: "Operations Leadership",
      role: "Business Growth & Expansion"
    },

    {
      quote:
        "Shivam combines execution-focused thinking with leadership accountability, making him highly effective in scaling operational systems and business performance.",
      name: "Strategic Growth Perspective",
      role: "Business Operations"
    },

  ];

  return (

    <section
      style={{
        padding: "120px 20px",
        position: "relative",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.08)",
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
            Leadership Reputation
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,7vw,72px)",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Trusted Through
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
            A reputation built through operational excellence,
            leadership accountability, strategic execution,
            and growth-focused business management.
          </p>

        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >

          {testimonials.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "32px",
                padding: "40px",
                backdropFilter: "blur(14px)",
                transition: "0.35s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.02)";

                e.currentTarget.style.border =
                  "1px solid rgba(96,165,250,0.35)";

                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(37,99,235,0.18)";

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";

                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";

                e.currentTarget.style.boxShadow = "none";

              }}
            >

              {/* QUOTE */}
              <div
                style={{
                  fontSize: "70px",
                  color: "rgba(96,165,250,0.2)",
                  lineHeight: "1",
                  marginBottom: "20px",
                }}
              >
                "
              </div>

              <p
                style={{
                  color: "#D1D5DB",
                  lineHeight: "2",
                  fontSize: "17px",
                  marginBottom: "30px",
                }}
              >
                {item.quote}
              </p>

              <div>

                <h3
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "8px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#60A5FA",
                    fontSize: "15px",
                  }}
                >
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}