export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "120px 24px",
        position: "relative"
      }}
    >
      {children}
    </section>
  );
}