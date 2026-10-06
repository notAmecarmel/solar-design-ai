import type {
  ThreeEvent,
} from "@react-three/fiber";

import type {
  SceneObject as SceneObjectType,
} from "../types";

import { useSceneStore } from "../sceneStore";

import Building from "./Building";
import Wall from "./Wall";
import Roof from "./Roof";

interface Props {
  object: SceneObjectType;
}

export default function SceneObject({
  object,
}: Props) {
  const selectedObjectId =
    useSceneStore(
      (state) => state.selectedObjectId
    );

  const selectObject =
    useSceneStore(
      (state) => state.selectObject
    );

  const selected =
    selectedObjectId === object.id;

  const handleClick = (
    event: ThreeEvent<MouseEvent>
  ) => {
    event.stopPropagation();

    selectObject(object.id);
  };

  switch (object.type) {
    case "box":
      return (
        <Building
          object={object}
          selected={selected}
          onClick={handleClick}
        />
      );

    case "wall":
      return (
        <Wall
          object={object}
          selected={selected}
          onClick={handleClick}
        />
      );

    case "roof":
      return (
        <Roof
          object={object}
          selected={selected}
          onClick={handleClick}
        />
      );

    default:
      return null;
  }
}