# Revisión de uso de Markdown

## Bibliotecas y configuración
- La app usa `react-markdown` 10.1.0 junto con `remark-gfm` para habilitar sintaxis extendida (tablas, listas, etc.).【F:package.json†L15-L23】
- El componente `MarkdownText` es el único renderer y define componentes personalizados para párrafos, títulos, listas, tablas y bloques de código; no hay capa de sanitización adicional.【F:src/components/MarkdownText.jsx†L6-L100】

## Dónde se procesa Markdown
- **FAQ**: cada respuesta pasa por `MarkdownText`, lo que permite encabezados, listas y texto enriquecido en las preguntas frecuentes.【F:src/pages/FAQPage.jsx†L175-L221】
- **Glosario**:
  - Las tarjetas del glosario usan `MarkdownText` para definiciones cortas, contenido expandido, ejemplos y relaciones.【F:src/pages/GlossaryPage.jsx†L220-L314】
  - Los tooltips reutilizan `MarkdownText` para definiciones, ejemplos y listas dentro del popup.【F:src/components/GlossaryTooltip.jsx†L147-L240】
  - El helper `normalizeRichText` elimina indentación y corrige tablas antes de renderizar (evita que el Markdown se trate como bloque de código).【F:src/utils/richText.js†L1-L99】【F:src/pages/GlossaryPage.jsx†L256-L262】
- **Lecciones**: las secciones de cada lección se envían a `MarkdownText`, mientras que los ejemplos se muestran en `<pre>` sin parsear Markdown.【F:src/pages/ExercisePage.jsx†L204-L249】 Los textos vienen de `lessonContent` con formato Markdown.【F:src/data/lessonContent.js†L17-L107】

## Hallazgos de visualización (npm run dev)
- Servidor local ejecutado con `npm run dev -- --host --port 4173` para revisar las vistas.【53dd86†L1-L5】
- **FAQ y Glosario**: el contenido Markdown se muestra con estilos (listas con viñetas personalizadas, títulos y tablas), sin asteriscos visibles.
- **Ejercicios**: en `/modulo/accounting/leccion/acc-001` los párrafos de sección aparecen dentro de bloques de código y muestran los `**` literales. Esto ocurre porque los strings de `lessonContent` están indentados dentro de plantillas multilínea, por lo que `react-markdown` los interpreta como bloques de código y activa el renderer de `<code>` definido en `MarkdownText`.【F:src/data/lessonContent.js†L17-L25】【F:src/components/MarkdownText.jsx†L61-L70】 Los bloques de ejemplo también se renderizan como texto plano dentro de `<pre>`, así que cualquier sintaxis Markdown allí permanece sin parsear.【F:src/pages/ExercisePage.jsx†L220-L229】
