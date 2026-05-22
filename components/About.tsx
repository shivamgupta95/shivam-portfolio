export default function About() {
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
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "100px",
          alignItems: "center"
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
            My Journey
          </p>

          <h2
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              lineHeight: "1.1",
              marginBottom: "40px"
            }}
          >
            From Operations To Business Leadership
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              lineHeight: "2",
              marginBottom: "35px"
            }}
          >
            My journey started with frontline retail operations, where I learned
            the fundamentals of customer psychology, operational discipline,
            team coordination, and business execution.
          </p>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              lineHeight: "2",
              marginBottom: "35px"
            }}
          >
            Over the years, I transitioned into acquisitions, strategic expansion,
            revenue operations, and large-scale business management across Mumbai’s
            rapidly evolving real estate ecosystem.
          </p>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              lineHeight: "2"
            }}
          >
            Today, as Business Head at Jugyah Real Estate Services,
            I lead high-value operations, growth initiatives,
            luxury transactions, and expansion-focused business strategies
            across the Mumbai Metropolitan Region.
          </p>

        </div>

      </div>

    </section>
  );
}