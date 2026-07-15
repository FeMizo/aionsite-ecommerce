import type { DesignTokens } from "@/types/theme";

function cssVariables(tokens: DesignTokens) {
  return `:root{--store-color-background:${tokens.colors.background};--store-color-foreground:${tokens.colors.foreground};--store-color-primary:${tokens.colors.primary};--store-color-muted:${tokens.colors.muted};--store-font-body:${tokens.fonts.body};--store-font-heading:${tokens.fonts.heading};--store-radius-sm:${tokens.radii.sm};--store-radius-md:${tokens.radii.md};--store-radius-lg:${tokens.radii.lg};--store-space-xs:${tokens.spacing.xs};--store-space-sm:${tokens.spacing.sm};--store-space-md:${tokens.spacing.md};--store-space-lg:${tokens.spacing.lg}}`;
}

export function StoreStyles({ tokens, customCss, customCssUrl }: { tokens: DesignTokens; customCss: string; customCssUrl?: string }) {
  return <>
    <style>{`${cssVariables(tokens)}\n${customCss}`}</style>
    {customCssUrl ? <link rel="stylesheet" href={customCssUrl} /> : null}
  </>;
}
