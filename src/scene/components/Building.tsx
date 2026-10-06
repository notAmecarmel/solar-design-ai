import type {
  ThreeEvent,
} from "@react-three/fiber";

import type {
  SceneObject,
} from "../types";

interface Props {
  object: SceneObject;
  selected: boolean;
  onClick: (
    event: ThreeEvent<MouseEvent>
  ) => void;
}

export default function Building({
  object,
  selected,
  onClick,
}: Props) {
  return (
    <mesh
      position={[
        object.position.x,
        object.position.y,
        object.position.z,
      ]}
      rotation={[
        object.rotation.x,
        object.rotation.y,
        object.rotation.z,
      ]}
      onClick={onClick}
      castShadow
      receiveShadow
    >
      <boxGeometry
        args={[
          object.dimensions.width,
          object.dimensions.height,
          object.dimensions.depth,
        ]}
      />

      <meshStandardMaterial
        color={
          selected
            ? "#2563eb"
            : "#64748b"
        }
      />
    </mesh>
  );
}