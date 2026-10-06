import type {
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
      type: "UPDATE_ROTATION";
      objectId: string;
      rotation: Partial<Vector3D>;
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
  const store = useSceneStore.getState();

  switch (command.type) {
    case "ADD_OBJECT":
      store.addObject(command.object);
      return;

    case "UPDATE_DIMENSIONS":
      store.updateObjectDimensions(
        command.objectId,
        command.dimensions
      );
      return;

    case "UPDATE_POSITION":
      store.updateObjectPosition(
        command.objectId,
        command.position
      );
      return;

    case "UPDATE_ROTATION":
      store.updateObjectRotation(
        command.objectId,
        command.rotation
      );
      return;

    case "DELETE_OBJECT":
      store.removeObject(command.objectId);
      return;

    case "SELECT_OBJECT":
      store.selectObject(command.objectId);
      return;

    default: {
      const unreachable: never = command;

      throw new Error(
        `Unsupported scene command: ${unreachable}`
      );
    }
  }
}