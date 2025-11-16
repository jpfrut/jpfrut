# Checklist visual de tokens en Dashboard

Para cada sección actualizada se realizó una verificación manual en el entorno local (`npm run dev`) revisando el DOM con las DevTools de Vite para confirmar que no quedan clases `bg-yellow-*`, `bg-purple-*` ni gradientes fuera de los tokens aprobados.

## Hero y banners iniciales
- [x] Hero usa `surface-hero` y botones con bordes `border-glass`; sin clases `bg-yellow-*`.
- [x] Banner "Primera vez" y Glosario usan `surface-neutral` y `tint-secondary-soft`.

## Accesos rápidos y llamados
- [x] Tarjetas de Misiones y Guías reutilizan `surface-card` + `tint-primary/secondary-soft`.
- [x] CTA inferior "Explora módulos" utiliza `surface-neutral` y flechas `text-secondary-500`.

## TipOfTheDay
- [x] Variante `neutral` aplicada con `surface-neutral` e iconos `text-primary-600`; sin `bg-yellow-*`.

## PersonalizedRecommendations
- [x] Tarjetas usan `surface-card` y apariencias `action/cta` con `tint-primary/secondary-soft`.

## DailyChecklist
- [x] Progress bar y tarjetas internas usan `surface-hero`, `tint-neutral-soft` y `tint-warning-soft`.

## ProgressSummary
- [x] Panel completo con `surface-neutral`, estadísticas con `tint-*` y sin gradientes no aprobados.

## Navegación
- [x] Variante `glass` aplica `glass-effect` + `tint` en los indicadores de racha, XP y badges.

## Mensajes motivacionales y tarjetas de apoyo
- [x] Tarjetas de ánimo y "Historias de éxito" emplean `surface-neutral`/`tint-neutral-soft` sin colores prohibidos.
