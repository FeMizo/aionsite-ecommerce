import { z } from "zod";
import type { StoreManifest } from "@/types/store";

const designTokensSchema = z.object({
  colors: z.object({ background: z.string(), foreground: z.string(), primary: z.string(), muted: z.string() }),
  fonts: z.object({ body: z.string(), heading: z.string() }),
  radii: z.object({ sm: z.string(), md: z.string(), lg: z.string() }),
  spacing: z.object({ xs: z.string(), sm: z.string(), md: z.string(), lg: z.string() }),
});

export const storeManifestSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  domains: z.array(z.string().min(1)).min(1),
  locale: z.string().min(2),
  currency: z.string().length(3),
  theme: z.object({ id: z.string().min(1), version: z.string().min(1) }),
  tokens: designTokensSchema,
  features: z.record(z.string(), z.boolean()),
  analytics: z.object({
    ga4MeasurementId: z.string().optional(),
    gtmContainerId: z.string().optional(),
    metaPixelId: z.string().optional(),
    customScripts: z.array(z.object({ id: z.string().min(1), content: z.string(), position: z.enum(["head", "bodyEnd"]) })),
  }),
  customCss: z.string(),
  customCssUrl: z.string().startsWith("/").optional(),
});

export function defineStore(input: unknown): StoreManifest {
  return storeManifestSchema.parse(input);
}
