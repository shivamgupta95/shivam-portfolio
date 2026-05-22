export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* LEFT BLUE GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background: "rgba(59,130,246,0.18)",
          filter: "blur(120px)",
          borderRadius: "50%"
        }}
      />

      {/* RIGHT PURPLE GLOW */}
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-150px",
          width: "500px",
          height: "500px",
          background: "rgba(168,85,247,0.18)",
          filter: "blur(120px)",
          borderRadius: "50%"
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 2
        }}
      >

        {/* LEFT SIDE */}
        <div>

          <p
            style={{
              color: "#60A5FA",
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontSize: "14px",
              marginBottom: "24px"
            }}
          >
            Business Growth Leader
          </p>

          <h1
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: "1",
              fontWeight: "bold",
              marginBottom: "32px"
            }}
          >
            Shivam <br /> Gupta
          </h1>

          <p
            style={{
              fontSize: "clamp(18px,2vw,24px)",
              color: "#d1d5db",
              lineHeight: "1.8",
              marginBottom: "40px",
              maxWidth: "700px"
            }}
          >
            I scale businesses, acquisitions, operations, and strategic growth
            across Mumbai’s real estate ecosystem — combining operational excellence,
            leadership, and expansion-driven execution.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            {/* LINKEDIN BUTTON */}
            <a
              href="https://www.linkedin.com/in/shivam-gupta-a86963285"
              target="_blank"
              style={{
                background: "#2563EB",
                padding: "18px 32px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 0 30px rgba(37,99,235,0.35)"
              }}
            >
              LinkedIn Profile
            </a>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download
              style={{
                padding: "18px 32px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.03)",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "grid",
            gap: "24px"
          }}
        >

          {[
            {
              value: "₹4,000Cr+",
              label: "GMV Managed"
            },
            {
              value: "₹200Cr+",
              label: "Luxury Transactions"
            },
            {
              value: "25+",
              label: "Teams Led"
            },
            {
              value: "97%",
              label: "Customer Satisfaction"
            }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "36px",
                backdropFilter: "blur(20px)"
              }}
            >

              <h3
                style={{
                  fontSize: "42px",
                  marginBottom: "12px"
                }}
              >
                {item.value}
              </h3>

              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "16px"
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