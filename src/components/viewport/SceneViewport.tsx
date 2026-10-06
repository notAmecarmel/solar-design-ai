import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import Scene from "./Scene";
import Grid from "./Grid";
import CameraController from "./CameraController";

import { useSceneStore } from "../../scene/sceneStore";

export default function SceneViewport() {
  const selectObject =
    useSceneStore(
      (state) => state.selectObject
    );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        shadows
        onPointerMissed={() =>
          selectObject(null)
        }
      >
        <PerspectiveCamera
          makeDefault
          position={[18, 14, 18]}
          fov={50}
        />

        <color
          attach="background"
          args={["#020617"]}
        />

        <ambientLight intensity={1.2} />

        <directionalLight
          position={[20, 30, 20]}
          intensity={2}
          castShadow
        />

        <Grid />

        <Scene />

        <CameraController />
      </Canvas>
    </div>
  );
}