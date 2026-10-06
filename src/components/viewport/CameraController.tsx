import { OrbitControls } from "@react-three/drei";

export default function CameraController() {
  return (
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.08}
      minDistance={2}
      maxDistance={200}
      target={[0, 0, 0]}
    />
  );
}