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
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 48px)",
        maxWidth: "1320px",
        zIndex: 1000,
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(16px)",
          borderRadius: "18px",
          border:
            "1px solid rgba(255,255,255,0.05)",
        }}
      >

        <h2
          style={{
            color: "#C8A96B",
            fontSize: "20px",
            margin: 0,
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Shivam Gupta
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >

          {links.map((item, index) => (

            <a
              key={index}
              href={item.href}
              style={{
                color: "#D6D6D6",
                textDecoration: "none",
                fontSize: "15px",
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