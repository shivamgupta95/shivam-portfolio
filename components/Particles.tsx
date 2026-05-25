"use client";

export default function Particles() {

  const particles = Array.from({ length: 25 });

  return (

    <div
      style={{
        position: "fixed",

        width: "100%",

        height: "100%",

        top: 0,

        left: 0,

        overflow: "hidden",

        zIndex: 0,

        pointerEvents: "none",
      }}
    >

      {particles.map((_, index) => {

        const size =
          Math.random() * 6 + 2;

        const left =
          Math.random() * 100;

        const duration =
          Math.random() * 20 + 10;

        const delay =
          Math.random() * 10;

        return (

          <div
            key={index}

            style={{
              position: "absolute",

              width: `${size}px`,

              height: `${size}px`,

              borderRadius: "50%",

              background:
                index % 2 === 0
                  ? "rgba(96,165,250,0.45)"
                  : "rgba(168,85,247,0.35)",

              left: `${left}%`,

              bottom: "-20px",

              animation: `floatParticle ${duration}s linear infinite`,

              animationDelay: `${delay}s`,

              filter: "blur(1px)",
            }}
          />

        );

      })}

      <style jsx>{`

        @keyframes floatParticle {

          0% {
            transform:
              translateY(0px)
              scale(1);

            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            transform:
              translateY(-120vh)
              scale(1.8);

            opacity: 0;
          }

        }

      `}</style>

    </div>
  );
}