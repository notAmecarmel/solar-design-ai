import type {
  SceneObject,
} from "../types";

export function createRoof(options: {
  id?: string;
  name?: string;

  width: number;
  height: number;
  depth: number;

  x?: number;
  y?: number;
  z?: number;

  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
}): SceneObject {
  return {
    id:
      options.id ??
      crypto.randomUUID(),

    name:
      options.name ??
      "Roof",

    type: "roof",

    position: {
      x: options.x ?? 0,
      y: options.y ?? 0,
      z: options.z ?? 0,
    },

    rotation: {
      x: options.rotationX ?? 0,
      y: options.rotationY ?? 0,
      z: options.rotationZ ?? 0,
    },

    dimensions: {
      width: options.width,
      height: options.height,
      depth: options.depth,
    },
  };
}