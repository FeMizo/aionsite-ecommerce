import type { ThemeDefinition } from "@/types/theme";
import { baseEmptyTheme } from "@/themes/base/empty-theme";

const themes = new Map<string, ThemeDefinition>([[baseEmptyTheme.id, baseEmptyTheme]]);

export function getTheme(themeId: string): ThemeDefinition | undefined {
  return themes.get(themeId);
}

export function registerTheme(theme: ThemeDefinition): void {
  if (themes.has(theme.id)) throw new Error(`Theme already registered: ${theme.id}`);
  themes.set(theme.id, theme);
}
