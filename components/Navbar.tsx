"use client";

export default function Navbar() {

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },

    {
      name: "Experience",
      href: "#timeline",
    },

    {
      name: "Leadership",
      href: "#leadership",
    },

    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (

    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(5,8,22,0.7)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >

        {/* LOGO */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "1px",
          }}
        >
          Shivam Gupta
        </h2>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {navLinks.map((item, index) => (

            <a
              key={index}
              href={item.href}

              style={{
                color: "#D1D5DB",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "0.3s",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#60A5FA";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#D1D5DB";
              }}
            >
              {item.name}
            </a>

          ))}

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"

            style={{
              background: "#2563EB",
              color: "white",
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              fontWeight: "600",
              boxShadow: "0 0 20px rgba(37,99,235,0.4)",
            }}
          >
            Resume
          </a>

        </div>

      </div>

    </nav>

  );
}