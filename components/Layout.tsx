export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "Inter, Arial, sans-serif"
      }}
    >
      {children}
    </main>
  );
}