export default function Header() {
  return (
    <header
      style={{
        height: "56px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#f8fafc",
        }}
      >
        Solar Design AI
      </div>

      <div
        style={{
          marginLeft: "12px",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        3D Solar Design Platform
      </div>
    </header>
  );
}