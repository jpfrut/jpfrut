# ADR: Renderizado de Markdown

## Contexto
- La aplicación React renderiza Markdown con `react-markdown` 10.1.0 y el plugin `remark-gfm`, lo que ya habilita enlaces, listas y tablas mediante un componente `MarkdownText` con renderers personalizados para cada etiqueta.【F:package.json†L16-L24】【F:src/components/MarkdownText.jsx†L6-L76】
- La decisión debe considerar compatibilidad con SSR, licencias y mantenimiento a futuro.

## Opciones evaluadas
### `react-markdown` + plugins (`remark-gfm`, `rehype-*`)
- Licencia MIT y ecosistema activo de plugins Remark/Rehype.
- Integra directamente con React y permite sobrescribir componentes (por ejemplo, insertar lógica de glosario en párrafos, listas y tablas) sin pasar por `dangerouslySetInnerHTML`. Soporta SSR porque no depende del DOM y se usa en frameworks como Next.js.
- Contras: está acoplado a React; si se necesitara renderizado genérico (fuera de React) se requeriría otro pipeline.

### `markdown-it`
- Licencia MIT con ecosistema amplio de plugins y extensiones; soporta CommonMark y sintaxis GFM (enlaces, listas y tablas) mediante opciones nativas o complementos.
- Emite HTML string, por lo que en React obliga a usar `dangerouslySetInnerHTML` y añadir un sanitizador (p. ej. DOMPurify) para proteger de XSS; también habría que recrear la inyección de componentes personalizados (glosario, estilos de listas y tablas) y gestionar handlers de eventos.
- Compatible con SSR al ejecutarse en Node, pero requiere una capa adicional para mapear el HTML a componentes React si se quiere mantener la extensibilidad actual.

## Decisión
Mantener `react-markdown` con `remark-gfm` como renderer principal.

## Rationale
- Ya está integrado con componentes React que encapsulan estilos y lógica de glosario; migrar a `markdown-it` exigiría reconstruir esa capa y añadir sanitización extra.
- Ofrece soporte inmediato para enlaces, listas y tablas dentro del flujo React, y es apto para SSR sin cambios estructurales.

## Consecuencias
- Continuar usando `MarkdownText` como punto único de renderizado y mantener los plugins actuales.
- Si en el futuro se necesita exportar HTML estático o un pipeline no React, `markdown-it` sigue siendo una alternativa viable pero requerirá sanitización y wrappers de componentes.
