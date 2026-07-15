import type { StoreManifest } from "@/types/store";
import { getTheme } from "@/theme-system/theme-registry";
import { ThemeNotFound, ThemeRenderFallback } from "@/theme-system/fallbacks";

export function ThemeRenderer({ store }: { store: StoreManifest }) {
  const theme = getTheme(store.theme.id);
  if (!theme) return <ThemeNotFound themeId={store.theme.id} />;
  if (theme.version !== store.theme.version) return <ThemeRenderFallback />;

  return <>{theme.HomePage({ storefront: { id: store.id, name: store.name, locale: store.locale, currency: store.currency, features: store.features, tokens: store.tokens }, slots: {} })}</>;
}
