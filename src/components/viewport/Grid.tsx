import { Grid as DreiGrid } from "@react-three/drei";

export default function Grid() {
  return (
    <DreiGrid
      args={[100, 100]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#334155"
      sectionSize={5}
      sectionThickness={1}
      sectionColor="#64748b"
      fadeDistance={100}
      fadeStrength={1}
      infiniteGrid
    />
  );
}