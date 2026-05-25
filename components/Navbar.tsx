"use client";

const links = [
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

export default function Navbar() {

  return (

    <header
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 40px)",
        maxWidth: "1200px",
        zIndex: 1000,
      }}
    >

      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          borderRadius: "24px",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        {/* LOGO */}
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "22px",
          }}
        >
          Shivam Gupta
        </h2>

        {/* LINKS */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >

          {links.map((item, index) => (

            <a
              key={index}
              href={item.href}
              style={{
                color: "#D1D5DB",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {item.name}
            </a>

          ))}

        </nav>

      </div>

    </header>
  );
}