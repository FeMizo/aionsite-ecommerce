export function ThemeNotFound({ themeId }: { themeId: string }) {
  return <main role="alert">No se encontró el tema &quot;{themeId}&quot;.</main>;
}

export function ThemeRenderFallback() {
  return <main role="status">No hay contenido disponible para este tema.</main>;
}
