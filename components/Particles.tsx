"use client";

export default function Particles() {

  const particles = Array.from({ length: 40 });

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >

      {particles.map((_, index) => {

        const size = Math.random() * 6 + 2;

        return (

          <div
            key={index}

            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              background: "rgba(96,165,250,0.25)",

              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,

              animation: `floating ${
                Math.random() * 8 + 4
              }s ease-in-out infinite`,

              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
            }}
          />

        );

      })}

    </div>

  );
}