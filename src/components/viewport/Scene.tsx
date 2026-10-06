import { useSceneStore } from "../../scene/sceneStore";
import SceneObject from "../../scene/components/SceneObject";

export default function Scene() {
  const objects =
    useSceneStore(
      (state) => state.objects
    );

  return (
    <>
      {objects.map((object) => (
        <SceneObject
          key={object.id}
          object={object}
        />
      ))}
    </>
  );
}