# Sistema de marca Mentora Hub

Este documento centraliza los tokens cromáticos definidos en `src/theme/brandTokens.js` y describe las combinaciones validadas para mantener la coherencia visual en todos los productos.

## Tokens principales
- **Hero azul** (`gradients.heroBlue`): degradado de azul brillante (`#0F7CDA`) a azul rey (`#001D7A`). Úsalo en cabeceras, secciones hero y fondos inmersivos.
- **CTA naranja** (`gradients.ctaOrange`): degradado de naranja claro (`#FF9F6F`) a naranja intenso (`#FF3F00`). Ideal para botones o chips de llamada a la acción.
- **Acento aqua** (`gradients.accentAqua`): transición de aqua (`#00BBE6`) a azul brillante. Útil para resaltar enlaces, badges informativos y elementos interactivos secundarios.

## Combinaciones recomendadas
1. **Hero azul + Texto claro**
   - Fondo: `gradients.heroBlue`
   - Texto/íconos: usar `getRecommendedTextOnSurface('hero')` → texto blanco (`text.inverse`).
   - Complementa con `shadows.brandGlow` para dar profundidad.
2. **CTA naranja + Texto oscuro**
   - Fondo: `gradients.ctaOrange`
   - Texto: preferir `text.strong` o `getRecommendedTextOnSurface('card')` para mantener contraste AA.
   - Bordes: `surfaces.card.border` para separar del contenido.
3. **Acento aqua + Soportes de vidrio**
   - Fondo: `gradients.accentAqua` o badges sólidos `icons.accent`.
   - Superficie: `surfaces.glass.base` con borde `surfaces.glass.border`.
   - Texto: `text.strong` o `getRecommendedTextOnSurface('glass')`.

## Reglas rápidas
- Aplica `applyBrandTokensToCSSVariables()` antes de renderizar React para heredar los valores en CSS.
- Usa `getContrastRatio` para validar contrastes en nuevos componentes.
- Mantén la jerarquía: Hero azul para fondos principales, CTA naranja para interacciones críticas y acento aqua para microdetalles.
