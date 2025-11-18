# 📚 Documentación de Mentora Hub

Índice centralizado de toda la documentación del proyecto.

---

## 🎯 Planes de Expansión y Desarrollo

### [📋 PLAN_EXPANSION_MECE.md](./PLAN_EXPANSION_MECE.md)
**Plan maestro de expansión de módulos**
- Auditoría completa: 12 módulos actuales vs 80+ aplicaciones Odoo 19.0
- Gap analysis detallado por categoría
- Roadmap MECE de 4 fases (10 meses)
- Estructura de archivos propuesta
- Directrices de diseño pedagógico y UX/UI
- Templates de módulos y lecciones
- KPIs y métricas de éxito

### [✅ MODULE_EXPANSION_TODOS.md](./MODULE_EXPANSION_TODOS.md)
**Sistema de tracking para expansión de módulos**
- TODOs organizados por fase (Fase 0-4)
- Checklist detallado de cada módulo nuevo
- Métricas de progreso y cobertura
- Próximos pasos accionables
- Se actualiza semanalmente

### [📖 GLOSSARY_EXPANSION_PLAN.md](./GLOSSARY_EXPANSION_PLAN.md)
**Plan de expansión del glosario**
- Estado actual: 17 términos → Objetivo: 150+ términos
- Términos organizados por categoría MECE
- Alineado con expansión de módulos

### [🎨 AESTHETIC_REHAUL_TODOS.md](./AESTHETIC_REHAUL_TODOS.md)
**TODOs del rehaul estético**
- Sistema de diseño y marca
- Componentes UI actualizados
- Colores, tipografía, espaciado

### [🤖 AI_COLLABORATION_PROTOCOL.md](./AI_COLLABORATION_PROTOCOL.md)
**Protocolo de colaboración para agentes de IA**
- Formato de bitácoras obligatorio
- Reglas de coordinación entre agentes
- Templates y mejores prácticas
- Prevención de conflictos

### [📚 changelog/](./changelog/)
**Bitácoras de todas las sesiones**
- Historial completo de desarrollo
- Ver [índice de changelog](./changelog/README.md)

---

## 🎨 Diseño y Marca

### [🎨 brand-system.md](./brand-system.md)
**Sistema de marca completo**
- Paleta de colores oficial
- Tipografía y escalas
- Componentes de diseño
- Guías de uso

---

## 🛠️ Guías Técnicas

### [🔧 troubleshooting.md](./troubleshooting.md)
**Guía de resolución de problemas**
- Problemas comunes y soluciones
- Debugging tips
- FAQ técnico

---

## 📂 Estructura del Proyecto

```
/docs
├── README.md                          # Este archivo - índice de documentación
│
├── PLAN_EXPANSION_MECE.md            # Plan maestro de expansión
├── MODULE_EXPANSION_TODOS.md         # TODOs tracking de módulos
├── GLOSSARY_EXPANSION_PLAN.md        # Plan de glosario
├── AESTHETIC_REHAUL_TODOS.md         # TODOs de diseño
├── AI_COLLABORATION_PROTOCOL.md      # Protocolo para agentes de IA
│
├── brand-system.md                   # Sistema de marca
├── troubleshooting.md                # Troubleshooting
│
├── changelog/                        # Bitácoras de sesiones
│   ├── README.md                     # Índice de bitácoras
│   └── [fecha]-[agente]-[tema].md    # Bitácoras individuales
│
└── templates/                        # (Pendiente) Templates de desarrollo
    ├── module-template.js
    ├── lesson-content-template.js
    ├── quiz-template.js
    └── exercise-template.js
```

---

## 🚀 Inicio Rápido

### Para Desarrolladores (Humanos)

1. **Revisar el plan de expansión:**
   - Lee `PLAN_EXPANSION_MECE.md` para entender la visión completa
   - Revisa `MODULE_EXPANSION_TODOS.md` para ver próximos pasos

2. **Antes de agregar contenido nuevo:**
   - Consulta `brand-system.md` para mantener coherencia visual
   - Revisa templates (cuando estén disponibles)

3. **Tracking de progreso:**
   - Actualiza `MODULE_EXPANSION_TODOS.md` al completar tareas
   - Marca checkboxes ✅ al terminar módulos/lecciones

### Para Agentes de IA (Claude Code, Codex, etc.)

1. **ANTES de cada sesión:**
   - Lee `AI_COLLABORATION_PROTOCOL.md` (OBLIGATORIO)
   - Revisa `changelog/README.md` para últimas sesiones
   - Checa `MODULE_EXPANSION_TODOS.md` para estado actual

2. **DURANTE la sesión:**
   - Trabaja en branch con formato: `[agente]/[tema]-[session-id]`
   - Commits frecuentes y descriptivos

3. **AL TERMINAR la sesión:**
   - Crea bitácora en `changelog/[fecha]-[agente]-[tema].md`
   - Actualiza `changelog/README.md` con nueva entrada
   - Marca ✅ en `MODULE_EXPANSION_TODOS.md`
   - Push de todo

### Para Diseñadores

1. **Sistema de diseño:**
   - Consulta `brand-system.md`
   - Revisa `AESTHETIC_REHAUL_TODOS.md` para pendientes

2. **Assets visuales:**
   - Mantén coherencia con paleta de colores
   - Sigue guías de iconografía en `PLAN_EXPANSION_MECE.md`

### Para Content Creators

1. **Crear contenido nuevo:**
   - Consulta sección "Directrices de Contenido" en `PLAN_EXPANSION_MECE.md`
   - Usa templates cuando estén disponibles
   - Mantén tono y estilo consistente

2. **Glosario:**
   - Actualiza `glossaryData.js` según `GLOSSARY_EXPANSION_PLAN.md`

---

## 📊 Estado Actual del Proyecto

### Módulos: 13/52 (25% cobertura)
### Lecciones: 59/300+ (20%)
### Categorías: 5/11 parcialmente implementadas

**Siguiente milestone:** Fase 1 - 50% cobertura (26 módulos)

**Ver progreso detallado:** [changelog/README.md](./changelog/README.md)

---

## 🔄 Actualización de Documentación

**Frecuencia de actualización:**
- `MODULE_EXPANSION_TODOS.md` - Semanal (cada lunes)
- `PLAN_EXPANSION_MECE.md` - Trimestral o cuando haya cambios mayores
- `GLOSSARY_EXPANSION_PLAN.md` - Mensual
- `AESTHETIC_REHAUL_TODOS.md` - Al completar componentes

**Proceso de actualización:**
1. Haz cambios en el documento correspondiente
2. Actualiza este README si es necesario
3. Commit con mensaje descriptivo
4. Push a rama de desarrollo

---

## 📞 Contacto

Para preguntas sobre la documentación o el plan de expansión, contacta al equipo de desarrollo.

---

**Última actualización:** 2025-11-18
