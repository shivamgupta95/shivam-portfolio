"use client";

export default function Stats() {

  const stats = [

    {
      number: "₹4000Cr+",
      label: "GMV Managed",
    },

    {
      number: "120+",
      label: "Properties Onboarded",
    },

    {
      number: "25+",
      label: "Teams Led",
    },

    {
      number: "95%+",
      label: "Occupancy Optimization",
    },

  ];

  return (

    <section
      style={{
        padding: "60px 20px 120px",
        position: "relative",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "28px",
          }}
        >

          {stats.map((item, index) => (

            <div
              key={index}

              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "30px",
                padding: "45px 35px",
                textAlign: "center",
                backdropFilter: "blur(14px)",
                transition: "0.35s",
                cursor: "pointer",
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

              <h2
                style={{
                  fontSize: "clamp(40px,6vw,64px)",
                  marginBottom: "16px",
                  color: "white",
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "18px",
                  lineHeight: "1.6",
                }}
              >
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}