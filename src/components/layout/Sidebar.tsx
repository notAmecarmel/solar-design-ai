import { executeCommand } from "../../scene/sceneEngine";

export default function Sidebar() {
  function addBuilding() {
    executeCommand({
      type: "ADD_OBJECT",

      object: {
        id: crypto.randomUUID(),

        name: "Building",

        type: "box",

        position: {
          x: 0,
          y: 2,
          z: 0,
        },

        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },

        dimensions: {
          width: 12,
          height: 4,
          depth: 8,
        },
      },
    });
  }

  return (
    <aside
      style={{
        width: "220px",
        flexShrink: 0,
        padding: "20px",
        background: "#0f172a",
        borderRight: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#64748b",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "12px",
        }}
      >
        Components
      </div>

      <button
        onClick={addBuilding}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "none",
          borderRadius: "6px",
          background: "#2563eb",
          color: "#ffffff",
          fontWeight: 600,
        }}
      >
        + Add Building
      </button>

      <div
        style={{
          marginTop: "24px",
          padding: "12px",
          borderRadius: "6px",
          background: "#111827",
          border: "1px solid #1e293b",
          color: "#64748b",
          fontSize: "12px",
          lineHeight: 1.5,
        }}
      >
        All dimensions use
        <strong style={{ color: "#94a3b8" }}>
          {" "}meters
        </strong>
        .
      </div>
    </aside>
  );
}