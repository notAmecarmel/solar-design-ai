import { useSceneStore } from "../../scene/sceneStore";

export default function Toolbar() {
  const selectedObjectId =
    useSceneStore(
      (state) => state.selectedObjectId
    );

  const objects =
    useSceneStore(
      (state) => state.objects
    );

  const selectedObject = objects.find(
    (object) =>
      object.id === selectedObjectId
  );

  return (
    <div
      style={{
        position: "absolute",
        top: "16px",
        left: "16px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "8px 12px",
        background: "rgba(15, 23, 42, 0.95)",
        border: "1px solid #334155",
        borderRadius: "8px",
        fontSize: "12px",
      }}
    >
      <span
        style={{
          color: "#94a3b8",
        }}
      >
        Objects: {objects.length}
      </span>

      {selectedObject && (
        <>
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "#334155",
            }}
          />

          <span
            style={{
              color: "#60a5fa",
            }}
          >
            Selected: {selectedObject.name}
          </span>
        </>
      )}
    </div>
  );
}