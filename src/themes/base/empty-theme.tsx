import type { ThemeDefinition } from "@/types/theme";

export const baseEmptyTheme: ThemeDefinition = {
  id: "base-empty",
  version: "1.0.0",
  displayName: "Base vacío",
  HomePage: ({ storefront }) => (
    <main style={{ padding: "var(--store-space-lg)" }}>
      <h1 style={{ fontFamily: "var(--store-font-heading)" }}>{storefront.name}</h1>
      <p>El tema base está listo para recibir un diseño.</p>
    </main>
  ),
};
