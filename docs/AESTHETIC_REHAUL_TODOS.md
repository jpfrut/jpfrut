# Mentora Hub - Aesthetic Rehaul TODOs

Este documento contiene los TODOs pendientes para completar el rehaul estético al 100%.

## ✅ COMPLETADO (Fase 1 - Foundation)

- [x] **brandTokens.js** - Colores exactos (#001D7A, #FF3F00, #0F7CDA, #00BBE6, #EFEFEF), sin gradientes
- [x] **tailwind.config.js** - Escala de colores, border-radius 6-12px, line-height generoso
- [x] **index.css** - Sin glass effects, sin shimmer, variables CSS sólidas
- [x] **Button.jsx** - Colores sólidos, hover Azul Brillante, padding generoso
- [x] **Navigation.jsx** - Fondo Azul Rey, texto blanco, iconos Naranja/Aqua
- [x] **Card.jsx** - Sin glass, borde gris sutil, border-radius 8px
- [x] **Badge.jsx** - Colores sólidos, sin animate-pulse
- [x] **ProgressBar.jsx** - Sin shimmer, colores sólidos
- [x] **Modal.jsx** - Sin backdrop blur, border-radius 12px
- [x] **ModuleCard.jsx** - Colores sólidos, border-radius 8px
- [x] **Footer.jsx** - Fondo Azul Rey, texto blanco, links Aqua
- [x] **BrandStroke.jsx** - Componente SVG de trazo naranja distintivo

---

## 🔄 PENDIENTE (Fase 2 - Feature Components)

### Componentes Feature Restantes

Cada componente debe seguir estos principios:
- Colores sólidos de marca (sin gradientes)
- Border-radius 6-12px
- Padding generoso
- Sombras sutiles o ninguna
- Iconografía en Aqua (#00BBE6) o Naranja (#FF3F00)
- Estados activos en Azul Brillante (#0F7CDA)

#### TODO: AccessibilityPanel.jsx
- [ ] Panel: fondo blanco, borde gris sutil
- [ ] Toggles activos: Azul Brillante
- [ ] Iconos: Aqua o Naranja
- [ ] Border-radius: 8px

#### TODO: AchievementCard.jsx
- [ ] Fondo: blanco o gris claro
- [ ] Iconos: Aqua o Naranja
- [ ] Sin gradientes ni efectos
- [ ] Borde sutil

#### TODO: StatsCard.jsx
- [ ] Fondo minimalista: blanco
- [ ] Números grandes: Azul Rey o Brillante
- [ ] Iconos: Aqua o Naranja
- [ ] Sin sombras pesadas

#### TODO: ProgressSummary.jsx
- [ ] Contenedor: fondo limpio blanco
- [ ] Barras de progreso: colores sólidos
- [ ] Textos: tipografía clara
- [ ] Iconos de estado: colores funcionales

#### TODO: PersonalizedRecommendations.jsx
- [ ] Cards: blancas con borde sutil
- [ ] Iconos: Aqua destacado
- [ ] CTAs: Botones Azul Rey o Naranja
- [ ] Padding generoso

#### TODO: DailyChecklist.jsx
- [ ] Check activo: Azul Brillante con óvalo
- [ ] Check inactivo: gris claro
- [ ] Texto: gris oscuro
- [ ] Container: blanco, borde sutil

#### TODO: TipOfTheDay.jsx
- [ ] Card: fondo blanco o Aqua muy claro
- [ ] Icono: Naranja destacado
- [ ] Título: tipografía heading
- [ ] Borde sutil o acento Aqua

#### TODO: OnboardingWizard.jsx
- [ ] Pasos activos: Azul Brillante con óvalo
- [ ] Pasos inactivos: gris claro
- [ ] Botón siguiente: Azul Rey
- [ ] Fondo: limpio, sin gradientes
- [ ] Integrar BrandStroke decorativo

#### TODO: GlossaryTooltip.jsx
- [ ] Tooltip: fondo blanco, sombra muy sutil
- [ ] Borde: gris claro
- [ ] Título: Azul Rey o Brillante
- [ ] Link: Azul Brillante

#### TODO: GlossaryText.jsx
- [ ] Link inline: Azul Brillante
- [ ] Hover: subrayado o Aqua
- [ ] Sin efectos complejos

---

## 🔄 PENDIENTE (Fase 3 - Páginas)

Todas las páginas deben seguir:
- Fondo de página: #EFEFEF (Gris Claro)
- Headers de sección: Azul Rey con texto blanco
- Contenedores: Cards blancas con borde sutil
- Padding generoso (py-8, px-6 mínimo)
- Tipografía: Avenir Next para títulos, Neuzeit Grotesk para texto
- CTAs: Botones según especificación (Azul Rey primario, Naranja secundario)

### TODO: Dashboard.jsx (src/pages/Dashboard.jsx)
- [ ] Fondo: #EFEFEF
- [ ] Header hero: Azul Rey sólido, texto blanco
- [ ] Stats cards: fondo blanco, borde sutil
- [ ] Iconografía: Aqua/Naranja
- [ ] Eliminar cualquier gradiente
- [ ] Padding generoso entre secciones (py-8)

### TODO: FirstDayPage.jsx (src/pages/FirstDayPage.jsx)
- [ ] Pasos del tutorial: Azul Brillante activo, gris inactivo
- [ ] Botones: Azul Rey para continuar, Naranja para CTAs
- [ ] Cards de contenido: blancas, borde sutil
- [ ] Iconos de paso: Aqua o Naranja

### TODO: ExplorePage.jsx (src/pages/ExplorePage.jsx)
- [ ] Barra de búsqueda: borde gris, focus Azul Rey
- [ ] Filtros activos: Azul Brillante
- [ ] Grid de módulos: fondo #EFEFEF
- [ ] Sin efectos complejos en hover

### TODO: ModulePage.jsx (src/pages/ModulePage.jsx)
- [ ] Header del módulo: Azul Rey sólido
- [ ] Lista de lecciones: items con borde sutil
- [ ] Estados completados: badge verde funcional
- [ ] Progreso: barra sólida sin shimmer

### TODO: ExercisePage.jsx (src/pages/ExercisePage.jsx)
- [ ] Contenido: fondo blanco, borde gris
- [ ] Opciones de respuesta: óvalo Azul Brillante para seleccionado
- [ ] Botón enviar: Azul Rey
- [ ] Feedback: colores funcionales (verde/rojo)

### TODO: MissionsPage.jsx (src/pages/MissionsPage.jsx)
- [ ] Cards de misión: blancas, borde sutil
- [ ] Estados: badges con colores sólidos
- [ ] Pasos: numeración con Azul Brillante
- [ ] CTAs: Naranja para "Iniciar misión"

### TODO: QuickGuidesPage.jsx (src/pages/QuickGuidesPage.jsx)
- [ ] Lista de guías: items con hover Aqua sutil
- [ ] Iconografía: Naranja o Aqua
- [ ] Contenido: tipografía clara, interlineado generoso
- [ ] Padding amplio

### TODO: EmergencyHelpPage.jsx (src/pages/EmergencyHelpPage.jsx)
- [ ] Header: Azul Rey o Rojo funcional
- [ ] Contactos: cards blancas con iconos Naranja
- [ ] Links: Azul Brillante
- [ ] CTAs destacados: Naranja

### TODO: FAQPage.jsx (src/pages/FAQPage.jsx)
- [ ] Acordeones: borde gris sutil
- [ ] Estado abierto: sin gradientes
- [ ] Iconos: Aqua
- [ ] Búsqueda: borde gris, focus Azul Rey

### TODO: GlossaryPage.jsx (src/pages/GlossaryPage.jsx)
- [ ] Lista alfabética: items con hover sutil
- [ ] Definiciones: tipografía clara
- [ ] Links internos: Azul Brillante
- [ ] Ejemplos: fondo gris muy claro

### TODO: SuccessStoriesPage.jsx (src/pages/SuccessStoriesPage.jsx)
- [ ] Cards de historia: blancas, borde sutil
- [ ] Fotos: integrar BrandStroke decorativo
- [ ] Citas: tipografía italic
- [ ] CTAs: Azul Rey o Naranja

---

## 📐 PRINCIPIOS CLAVE (Referencia Rápida)

### Colores de Marca
```
AZUL REY:       #001D7A  (Primario, fondos importantes, botones primarios)
NARANJA:        #FF3F00  (Secundario, CTAs, acentos, iconos destacados)
AZUL BRILLANTE: #0F7CDA  (Estados activos, hovers, selecciones)
AZUL AQUA:      #00BBE6  (Iconografía, acentos suaves, notificaciones)
GRIS CLARO:     #EFEFEF  (Fondos, contenedores, separadores)
```

### Tipografía
```
Títulos:    font-heading (Avenir Next)
Texto:      font-sans (Neuzeit Grotesk)
Line-height: 1.7 (generoso)
```

### Espaciado
```
Border-radius: 6-12px (rounded-lg)
Padding cards: p-6 mínimo
Padding páginas: px-6 py-8
Márgenes entre secciones: my-8
```

### Estados
```
Activo:     Azul Brillante (#0F7CDA) con texto blanco
Inactivo:   Gris claro (#EFEFEF) o blanco con texto gris oscuro
Hover:      Azul Aqua (#00BBE6) o tono más claro
Disabled:   Gris muy claro, opacidad reducida
```

### ❌ EVITAR
- Gradientes (linear-gradient)
- Glass effects (backdrop-filter blur)
- Sombras pesadas (brand glow)
- Shimmer animations
- Transforms exagerados en hover
- Colores fuera de la paleta

### ✅ APLICAR
- Colores planos sólidos
- Alto contraste (Azul Rey vs Blanco)
- Padding generoso
- Transiciones suaves (200ms)
- Focus states accesibles (outline Azul Rey)

---

## 🎯 SIGUIENTE ITERACIÓN

1. Empezar por Dashboard.jsx (página principal)
2. Continuar con feature components más visibles
3. Aplicar cambios página por página
4. Verificar consistencia visual en cada commit

---

*Documento generado: 2024-11-16*
*Plan completo en: claude/plan-aesthetic-changes-01Bq584Gyq5wcrn3PeeBMe5J*
