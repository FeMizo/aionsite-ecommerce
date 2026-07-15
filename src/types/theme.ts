import type { ReactNode } from "react";

export type DesignTokens = {
  colors: { background: string; foreground: string; primary: string; muted: string };
  fonts: { body: string; heading: string };
  radii: { sm: string; md: string; lg: string };
  spacing: { xs: string; sm: string; md: string; lg: string };
};

export type ThemeStorefront = {
  id: string;
  name: string;
  locale: string;
  currency: string;
  features: Record<string, boolean>;
  tokens: DesignTokens;
};

export type ThemePageProps = {
  storefront: ThemeStorefront;
  slots: { header?: ReactNode; footer?: ReactNode };
};

export type ThemeDefinition = {
  id: string;
  version: string;
  displayName: string;
  HomePage: (props: ThemePageProps) => ReactNode;
};
