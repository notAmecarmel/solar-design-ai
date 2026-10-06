export type Vector3D = {
  x: number;
  y: number;
  z: number;
};

export type SceneObjectType =
  | "box"
  | "wall"
  | "roof";

export interface SceneObject {
  id: string;
  name: string;

  type: SceneObjectType;

  position: Vector3D;
  rotation: Vector3D;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

export interface SceneState {
  objects: SceneObject[];
  selectedObjectId: string | null;
}