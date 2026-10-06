import { z } from "zod";

export const Vector3DSchema = z.object({
  x: z.number().finite(),
  y: z.number().finite(),
  z: z.number().finite(),
});

export const SceneObjectSchema = z.object({
  id: z.string().min(1),

  name: z.string().min(1),

  type: z.enum([
    "box",
    "wall",
    "roof",
  ]),

  position: Vector3DSchema,

  rotation: Vector3DSchema,

  dimensions: z.object({
    width: z.number().positive().finite(),
    height: z.number().positive().finite(),
    depth: z.number().positive().finite(),
  }),
});

export type ValidatedSceneObject =
  z.infer<typeof SceneObjectSchema>;