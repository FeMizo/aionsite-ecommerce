<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Arquitectura de tiendas

- `core` no contiene componentes ni datos específicos de clientes.
- Los temas solo reciben el contrato público de `types/theme.ts`; no importan `stores`, `integrations`, variables de entorno ni futuros módulos de comercio.
- Cada cliente vive en `src/stores/<store-id>/`, incluido su código personalizado y CSS.
- Registra los temas en `src/theme-system/theme-registry.ts` y las tiendas en `src/stores/registry.ts`; nunca agregues condiciones por ID de tienda a componentes compartidos.
- Fija explícitamente la versión del tema en cada manifiesto: actualizar el core no debe sustituir un tema vendido.
