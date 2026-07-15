import { getDefaultStore } from "@/stores/registry";
import { ThemeRenderer } from "@/theme-system/theme-renderer";
import { StoreScripts } from "@/integrations/store-scripts";
import { StoreStyles } from "@/theme-system/store-styles";

export function Storefront() {
  const store = getDefaultStore();

  return (
    <>
      <StoreStyles tokens={store.tokens} customCss={store.customCss} customCssUrl={store.customCssUrl} />
      <ThemeRenderer store={store} />
      <StoreScripts analytics={store.analytics} />
    </>
  );
}
