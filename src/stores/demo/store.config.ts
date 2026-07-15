import { defineStore } from "@/core/store-config";

export const demoStore = defineStore({
  id: "demo-store",
  name: "Tienda Demo",
  domains: ["demo.localhost"],
  locale: "es-MX",
  currency: "MXN",
  theme: { id: "base-empty", version: "1.0.0" },
  tokens: {
    colors: { background: "#ffffff", foreground: "#172033", primary: "#2563eb", muted: "#64748b" },
    fonts: { body: "Arial, Helvetica, sans-serif", heading: "Arial, Helvetica, sans-serif" },
    radii: { sm: "0.375rem", md: "0.75rem", lg: "1rem" },
    spacing: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2.5rem" },
  },
  features: { catalog: false, search: false, wishlists: false },
  analytics: { customScripts: [] },
  customCss: "",
  customCssUrl: "/stores/demo-store/custom.css",
});
