import type { StoreManifest } from "@/types/store";
import { demoStore } from "@/stores/demo/store.config";

const stores = new Map<string, StoreManifest>([[demoStore.id, demoStore]]);
const defaultStoreId = demoStore.id;

export function getStore(storeId: string): StoreManifest | undefined {
  return stores.get(storeId);
}

export function getDefaultStore(): StoreManifest {
  const store = getStore(defaultStoreId);
  if (!store) throw new Error("Default store is not registered.");
  return store;
}
