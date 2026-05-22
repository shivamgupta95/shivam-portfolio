export default function Navbar() {

  const navItems = [
    "About",
    "Experience",
    "Leadership",
    "Contact"
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        backdropFilter: "blur(18px)",
        background: "rgba(0,0,0,0.45)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >

        {/* LOGO */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "1px"
          }}
        >
          Shivam Gupta
        </h2>

        {/* MENU */}
        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >

          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#d1d5db",
                textDecoration: "none",
                fontSize: "16px",
                transition: "0.3s"
              }}
            >
              {item}
            </a>
          ))}

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download
            style={{
              background: "#2563EB",
              padding: "12px 22px",
              borderRadius: "14px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 0 25px rgba(37,99,235,0.35)"
            }}
          >
            Resume
          </a>

        </nav>

      </div>

    </header>
  );
}