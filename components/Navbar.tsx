"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("about");

  const navLinks = [

    {
      name: "About",
      href: "about",
    },

    {
      name: "Experience",
      href: "timeline",
    },

    {
      name: "Leadership",
      href: "leadership",
    },

    {
      name: "Contact",
      href: "contact",
    },

  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = navLinks.map((item) =>
        document.getElementById(item.href)
      );

      sections.forEach((section) => {

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section.id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

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
            gap: "22px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {navLinks.map((item, index) => (

            <a
              key={index}
              href={`#${item.href}`}

              style={{
                color:
                  active === item.href
                    ? "#60A5FA"
                    : "#D1D5DB",

                textDecoration: "none",

                fontSize: "16px",

                fontWeight:
                  active === item.href
                    ? "700"
                    : "500",

                transition: "0.3s",

                padding:
                  active === item.href
                    ? "10px 16px"
                    : "0px",

                borderRadius: "12px",

                background:
                  active === item.href
                    ? "rgba(96,165,250,0.12)"
                    : "transparent",

                boxShadow:
                  active === item.href
                    ? "0 0 25px rgba(37,99,235,0.18)"
                    : "none",
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
              padding: "12px 22px",
              borderRadius: "14px",
              fontWeight: "600",
              boxShadow: "0 0 25px rgba(37,99,235,0.3)",
            }}
          >
            Resume
          </a>

        </div>

      </div>

    </nav>

  );
}