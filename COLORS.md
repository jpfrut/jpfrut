# 🎨 Guía de Colores - Mentora Hub

Esta guía documenta la paleta de colores oficial de Mentora Hub y cómo se aplican en la plataforma de aprendizaje de Odoo.

## Mapa de Equivalencias

Para mantener la coherencia con la paleta definida en `tailwind.config.js`, todas las clases genéricas de Tailwind deben migrarse a las variantes personalizadas. Usa la siguiente tabla como referencia rápida:

| Clase genérica | Variante Mentora | Notas |
| --- | --- | --- |
| `text-slate-600`, `text-gray-600` | `text-neutral-600` | Aplica a cualquier escala `gray-*`/`slate-*` (texto, fondo o borde) → `neutral-*` |
| `bg-gray-900` | `bg-neutral-900` | Mantiene los tonos para backgrounds oscuros |
| `text-blue-700` | `text-primary-700` | Todos los `blue-*`/`indigo-*` se sustituyen por `primary-*` |
| `bg-blue-50` | `bg-primary-50` | Úsalo en tarjetas e indicadores suaves |
| `text-yellow-800`, `text-orange-700` | `text-secondary-800`, `text-secondary-700` | La escala `secondary` cubre amarillos y naranjas |
| `bg-yellow-50` | `bg-secondary-50` | Fondos cálidos o llamadas de atención |
| `text-green-700` | `text-accent-green-700` | Para estados positivos, checklists o badges |
| `bg-purple-100`, `text-pink-600` | `bg-accent-purple-100`, `text-accent-pink-600` | Cualquier púrpura/rosa pasa a la familia `accent` |
| `text-red-700` | `text-accent-red-700` | Estados de error o alertas críticas |
| `bg-cyan-100` | `bg-accent-aqua-100` | Casos que antes usaban `cyan` ahora usan el acento Aqua |

> **Tip:** si encuentras una clase `text-`, `bg-`, `border-`, `from-`, `via-` o `to-` que no empiece con `primary`, `secondary`, `accent` o `neutral`, debes reemplazarla siguiendo la tabla anterior.

## Colores Principales

### 1. AZUL REY (Primary)
**Uso:** Color principal de la marca, botones primarios, encabezados importantes

- **Base:** `#001D7A` (primary-600)
- **CMYK:** C100 M95 Y20 K15
- **RGB:** R0 G29 B122

**Escala Completa:**
```
primary-50:  #e6e9f5  (Fondos muy claros)
primary-100: #ccd3eb  (Fondos claros)
primary-200: #99a7d7  (Bordes suaves)
primary-300: #667bc3  (Elementos secundarios)
primary-400: #334faf  (Hover states)
primary-500: #0F7CDA  (Azul Brillante - Estados activos)
primary-600: #001D7A  ⭐ COLOR PRINCIPAL
primary-700: #001662  (Texto sobre fondos claros)
primary-800: #001049  (Elementos oscuros)
primary-900: #000a31  (Texto muy oscuro)
```

### 2. NARANJA (Secondary)
**Uso:** Acentos, llamadas a la acción, elementos destacados, badges importantes

- **Base:** `#FF3F00` (secondary-500)
- **CMYK:** C0 M89 Y100 K0
- **RGB:** R255 G63 B0

**Escala Completa:**
```
secondary-50:  #fff3ed  (Fondos muy claros)
secondary-100: #ffe7db  (Fondos claros)
secondary-200: #ffcfb7  (Bordes suaves)
secondary-300: #ffb793  (Elementos secundarios)
secondary-400: #ff9f6f  (Hover states)
secondary-500: #FF3F00  ⭐ COLOR PRINCIPAL
secondary-600: #cc3200  (Versión más oscura)
secondary-700: #992600  (Texto sobre fondos claros)
secondary-800: #661900  (Elementos oscuros)
secondary-900: #330d00  (Texto muy oscuro)
```

## Colores de Acento

### 3. AZUL BRILLANTE
**Uso:** Enlaces, iconos informativos, elementos interactivos

- **HEX:** `#0F7CDA` (accent-brillante o primary-500)
- **CMYK:** C80 M48 Y0 K0
- **RGB:** R15 G124 B218

### 4. AZUL AQUA
**Uso:** Notificaciones, elementos de progreso, highlights

- **HEX:** `#00BBE6` (accent-aqua)
- **CMYK:** C69 M02 Y04 K0
- **RGB:** R0 G187 B230

### 5. GRIS CLARO
**Uso:** Fondos, separadores, elementos neutros

- **HEX:** `#EFEFEF` (neutral-200)
- **CMYK:** C05 M03 Y03 K0
- **RGB:** R239 G239 B239

## Colores Funcionales

### Success (Verde)
- **HEX:** `#10b981`
- **Uso:** Mensajes de éxito, completados, confirmaciones

### Warning (Amarillo/Naranja)
- **HEX:** `#f59e0b`
- **Uso:** Advertencias, información importante

### Error (Rojo)
- **HEX:** `#ef4444`
- **Uso:** Errores, validaciones fallidas, acciones destructivas

## Aplicación en Componentes

### Botones

```jsx
// Botón primario (Azul Rey)
<Button variant="primary">Acción Principal</Button>
// Clases: bg-gradient-to-r from-primary-500 to-primary-600

// Botón secundario (Naranja)
<Button variant="secondary">Acción Secundaria</Button>
// Clases: bg-gradient-to-r from-secondary-500 to-secondary-600

// Botón de éxito
<Button variant="success">Completar</Button>
```

### Badges

```jsx
// Badge prioritario (Naranja)
<Badge variant="warning">Prioritario</Badge>

// Badge completado (Verde)
<Badge variant="success">Completado</Badge>

// Badge informativo (Azul)
<Badge variant="primary">Info</Badge>
```

### Tarjetas de Módulos

Los módulos usan gradientes personalizados que combinan los colores de la marca:

```javascript
// Contabilidad - Verde esmeralda
color: 'from-emerald-500 to-teal-600'

// Ventas - Azul (usando colores de marca)
color: 'from-primary-500 to-primary-700'

// Flota - Naranja/Rojo (usando color secundario)
color: 'from-secondary-500 to-red-600'

// CRM - Verde
color: 'from-green-500 to-emerald-600'

// Sitio Web - Púrpura/Rosa
color: 'from-purple-500 to-pink-600'

// Email Marketing - Azul Aqua (usando color de acento)
color: 'from-accent-aqua to-primary-500'
```

## Gradientes Recomendados

### Gradiente Principal (Azul Rey → Azul Brillante)
```css
bg-gradient-to-r from-primary-600 to-primary-500
```

### Gradiente Secundario (Naranja → Naranja Oscuro)
```css
bg-gradient-to-r from-secondary-500 to-secondary-600
```

### Gradiente Hero (Azul Brillante → Azul Aqua)
```css
bg-gradient-to-br from-primary-500 via-primary-600 to-accent-aqua
```

### Gradiente Call-to-Action (Naranja → Rojo)
```css
bg-gradient-to-r from-secondary-500 to-red-600
```

## Contraste y Accesibilidad

### Texto sobre Azul Rey (#001D7A)
- ✅ **Blanco:** Excelente contraste (WCAG AAA)
- ✅ **Gris muy claro:** Buen contraste
- ❌ **Colores oscuros:** Mal contraste

### Texto sobre Naranja (#FF3F00)
- ✅ **Blanco:** Excelente contraste (WCAG AAA)
- ✅ **Negro:** Excelente contraste
- ⚠️ **Gris medio:** Revisar contraste

### Texto sobre Fondos Claros
- ✅ **primary-700 o más oscuro:** Excelente para texto
- ✅ **secondary-700 o más oscuro:** Bueno para acentos
- ✅ **Negro (#000):** Máximo contraste

## Ejemplos de Uso

### Dashboard Hero
```jsx
<div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
  {/* Texto en blanco */}
</div>
```

### Tarjetas de Estadísticas
```jsx
// XP / Nivel - Azul Brillante
<div className="bg-gradient-to-br from-primary-500 to-accent-aqua">

// Logros - Naranja
<div className="bg-gradient-to-br from-secondary-500 to-secondary-600">

// Racha - Naranja (fuego)
<div className="bg-orange-100"> {/* o usar secondary-50 */}
```

### Estados de Progreso
```jsx
// En progreso - Azul Aqua
<ProgressBar color="primary" />

// Completado - Verde
<ProgressBar color="success" />

// Advertencia - Naranja
<ProgressBar color="warning" />
```

## Personalización Adicional

Si necesitas crear variaciones adicionales, usa las escalas proporcionadas o combina los colores base con opacidad:

```jsx
// Azul Rey con 50% opacidad
className="bg-primary-600/50"

// Naranja con 20% opacidad para overlay
className="bg-secondary-500/20"
```

## Notas de Implementación

1. **Consistencia:** Usa siempre los colores de la escala, evita valores hexadecimales directos
2. **Gradientes:** Combina colores adyacentes de la escala para gradientes suaves
3. **Accesibilidad:** Verifica siempre el contraste entre texto y fondo
4. **Hover States:** Usa tonos más oscuros (600-700) para estados hover
5. **Disabled States:** Reduce opacidad al 50% en lugar de cambiar color

---

**Última actualización:** Noviembre 2024
**Versión:** 1.0
