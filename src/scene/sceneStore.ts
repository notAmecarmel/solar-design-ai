import { create } from "zustand";

import type {
  SceneObject,
  Vector3D,
} from "./types";

import {
  SceneObjectSchema,
} from "./schema";

interface SceneStore {
  objects: SceneObject[];

  selectedObjectId: string | null;

  addObject: (
    object: SceneObject
  ) => void;

  updateObjectDimensions: (
    id: string,
    dimensions: {
      width?: number;
      height?: number;
      depth?: number;
    }
  ) => void;

  updateObjectPosition: (
    id: string,
    position: Partial<Vector3D>
  ) => void;

  updateObjectRotation: (
    id: string,
    rotation: Partial<Vector3D>
  ) => void;

  removeObject: (
    id: string
  ) => void;

  selectObject: (
    id: string | null
  ) => void;

  clearScene: () => void;
}

export const useSceneStore =
  create<SceneStore>((set) => ({
    objects: [],

    selectedObjectId: null,

    addObject: (object) => {
      const result =
        SceneObjectSchema.safeParse(
          object
        );

      if (!result.success) {
        console.error(
          "Invalid scene object:",
          result.error
        );

        return;
      }

      set((state) => ({
        objects: [
          ...state.objects,
          result.data,
        ],
      }));
    },

    updateObjectDimensions: (
      id,
      dimensions
    ) => {
      set((state) => ({
        objects:
          state.objects.map(
            (object) => {
              if (object.id !== id) {
                return object;
              }

              const updatedObject: SceneObject = {
                ...object,

                dimensions: {
                  ...object.dimensions,
                  ...dimensions,
                },
              };

              const result =
                SceneObjectSchema.safeParse(
                  updatedObject
                );

              if (!result.success) {
                console.error(
                  "Invalid object dimensions:",
                  result.error
                );

                return object;
              }

              return result.data;
            }
          ),
      }));
    },

    updateObjectPosition: (
      id,
      position
    ) => {
      set((state) => ({
        objects:
          state.objects.map(
            (object) =>
              object.id === id
                ? {
                    ...object,

                    position: {
                      ...object.position,
                      ...position,
                    },
                  }
                : object
          ),
      }));
    },

    updateObjectRotation: (
      id,
      rotation
    ) => {
      set((state) => ({
        objects:
          state.objects.map(
            (object) =>
              object.id === id
                ? {
                    ...object,

                    rotation: {
                      ...object.rotation,
                      ...rotation,
                    },
                  }
                : object
          ),
      }));
    },

    removeObject: (id) => {
      set((state) => ({
        objects:
          state.objects.filter(
            (object) =>
              object.id !== id
          ),

        selectedObjectId:
          state.selectedObjectId === id
            ? null
            : state.selectedObjectId,
      }));
    },

    selectObject: (id) => {
      set({
        selectedObjectId: id,
      });
    },

    clearScene: () => {
      set({
        objects: [],
        selectedObjectId: null,
      });
    },
  }));