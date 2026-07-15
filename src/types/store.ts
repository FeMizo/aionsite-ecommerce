import type { DesignTokens } from "@/types/theme";

export type AnalyticsConfig = {
  ga4MeasurementId?: string;
  gtmContainerId?: string;
  metaPixelId?: string;
  customScripts: Array<{ id: string; content: string; position: "head" | "bodyEnd" }>;
};

export type StoreManifest = {
  id: string;
  name: string;
  domains: string[];
  locale: string;
  currency: string;
  theme: { id: string; version: string };
  tokens: DesignTokens;
  features: Record<string, boolean>;
  analytics: AnalyticsConfig;
  customCss: string;
  customCssUrl?: string;
};
