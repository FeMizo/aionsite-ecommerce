import type { StoreManifest } from "@/types/store";

export function isFeatureEnabled(store: StoreManifest, feature: string): boolean {
  return store.features[feature] ?? false;
}
