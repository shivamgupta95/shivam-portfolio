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
          padding: "20px 28px",
          background: "rgba(5,8,22,0.75)",
          backdropFilter: "blur(16px)",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >

        <h2
          style={{
            color: "white",
            fontSize: "20px",
            margin: 0,
            fontWeight: "700",
            letterSpacing: "-0.5px",
          }}
        >
          Shivam Gupta
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "30px",
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