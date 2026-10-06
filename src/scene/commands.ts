import {
  SceneObject,
  Vector3D,
} from "./types";
import { useSceneStore } from "./sceneStore";

export type SceneCommand =
  | {
      type: "ADD_OBJECT";
      object: SceneObject;
    }
  | {
      type: "UPDATE_DIMENSIONS";
      objectId: string;
      dimensions: {
        width?: number;
        height?: number;
        depth?: number;
      };
    }
  | {
      type: "UPDATE_POSITION";
      objectId: string;
      position: Partial<Vector3D>;
    }
  | {
      type: "DELETE_OBJECT";
      objectId: string;
    }
  | {
      type: "SELECT_OBJECT";
      objectId: string | null;
    };

export function executeCommand(
  command: SceneCommand
): void {
  const store =
    useSceneStore.getState();

  switch (command.type) {
    case "ADD_OBJECT":
      store.addObject(command.object);
      break;

    case "UPDATE_DIMENSIONS":
      store.updateObjectDimensions(
        command.objectId,
        command.dimensions
      );
      break;

    case "UPDATE_POSITION":
      store.updateObjectPosition(
        command.objectId,
        command.position
      );
      break;

    case "DELETE_OBJECT":
      store.removeObject(
        command.objectId
      );
      break;

    case "SELECT_OBJECT":
      store.selectObject(
        command.objectId
      );
      break;

    default: {
      const exhaustiveCheck: never =
        command;

      throw new Error(
        `Unsupported command: ${exhaustiveCheck}`
      );
    }
  }
}