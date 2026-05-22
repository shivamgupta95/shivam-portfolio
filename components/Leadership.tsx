export default function Leadership() {
  return (
    <section
      style={{
        padding: "140px 24px",
        position: "relative"
      }}
    >

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-200px",
          width: "500px",
          height: "500px",
          background: "rgba(59,130,246,0.10)",
          filter: "blur(120px)",
          borderRadius: "50%"
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}
      >

        {/* TOP */}
        <div
          style={{
            marginBottom: "100px"
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
            Leadership Philosophy
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              maxWidth: "1000px"
            }}
          >
            Building Systems, Teams & Scalable Business Growth
          </h2>

        </div>

        {/* CONTENT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "32px"
          }}
        >

          {/* CARD 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              backdropFilter: "blur(20px)"
            }}
          >

            <h3
              style={{
                fontSize: "32px",
                marginBottom: "24px"
              }}
            >
              Operational Excellence
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px"
              }}
            >
              I believe sustainable growth is built through strong operational
              systems, disciplined execution, process optimization, and scalable
              business structures that improve efficiency while maintaining service quality.
            </p>

          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              backdropFilter: "blur(20px)"
            }}
          >

            <h3
              style={{
                fontSize: "32px",
                marginBottom: "24px"
              }}
            >
              Leadership & Teams
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px"
              }}
            >
              High-performing organizations are built through accountability,
              clarity, ownership, and strong team culture. I focus on enabling
              people, driving execution, and creating environments where teams can scale effectively.
            </p>

          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "32px",
              padding: "40px",
              backdropFilter: "blur(20px)"
            }}
          >

            <h3
              style={{
                fontSize: "32px",
                marginBottom: "24px"
              }}
            >
              Growth & Expansion
            </h3>

            <p
              style={{
                color: "#9CA3AF",
                lineHeight: "2",
                fontSize: "18px"
              }}
            >
              My approach to business growth combines market understanding,
              operational scalability, strategic acquisitions, and long-term
              relationship building to drive sustainable expansion and revenue growth.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}