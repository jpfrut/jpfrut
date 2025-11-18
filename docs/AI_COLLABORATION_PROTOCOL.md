# 🤖 Protocolo de Colaboración para Agentes de IA

**Versión:** 1.0
**Fecha:** 2025-11-18
**Propósito:** Coordinar trabajo entre múltiples agentes de IA (Claude Code, Codex, etc.) en el proyecto Mentora Hub

---

## 📋 Requisitos Obligatorios

### Para CADA Push o Pull Request

Todo agente de IA que haga cambios al proyecto DEBE incluir:

1. **Bitácora de Sesión** en `/docs/changelog/[YYYY-MM-DD]-[agente]-[tema].md`
2. **Actualización del Índice** en `/docs/changelog/README.md`
3. **Commit message estructurado** siguiendo el formato establecido

---

## 📝 Formato de Bitácora

Cada bitácora debe seguir este template:

```markdown
# Bitácora: [Título Descriptivo]

**Agente:** [Claude Code | Codex | Otro]
**Fecha:** YYYY-MM-DD
**Sesión ID:** [branch name o identificador único]
**Duración:** [tiempo aproximado]

---

## 🎯 Objetivo de la Sesión

[Descripción clara de qué se quería lograr]

---

## ✅ Cambios Realizados

### [Categoría 1: ej. Documentación]
- [x] Cambio específico 1
- [x] Cambio específico 2
- [x] Cambio específico 3

### [Categoría 2: ej. Código]
- [x] Cambio específico 1
- [x] Cambio específico 2

### Archivos Modificados
- `ruta/archivo1.js` - [descripción]
- `ruta/archivo2.md` - [descripción]

### Archivos Creados
- `ruta/archivo-nuevo.js` - [descripción]

---

## 🚧 Pendientes

### Para Completar el Objetivo
- [ ] Tarea pendiente 1
- [ ] Tarea pendiente 2

### Bloqueadores Identificados
- [Si hay] Descripción del bloqueador
- [Cómo resolverlo] Pasos sugeridos

---

## 🎯 Objetivo Final del Proyecto

[Recordatorio del objetivo general - copiar de docs/PLAN_EXPANSION_MECE.md]

**Meta actual:** [ej. Fase 1 - 50% cobertura, 26 módulos]

**Estado actual:** [ej. 13/26 módulos, 23% → 25% cobertura]

---

## 🔗 Contexto para Próxima Sesión

### Lo que el siguiente agente debe saber:
1. [Punto clave 1]
2. [Punto clave 2]
3. [Punto clave 3]

### Archivos importantes a revisar:
- `docs/MODULE_EXPANSION_TODOS.md` - Tracking de progreso
- `docs/PLAN_EXPANSION_MECE.md` - Plan maestro
- [Otros archivos relevantes]

### Próximos pasos sugeridos:
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

---

## 📊 Métricas de Impacto

- **Módulos:** [antes] → [después]
- **Lecciones:** [antes] → [después]
- **Cobertura:** [antes] → [después]
- **Categorías completas:** [antes] → [después]

---

## 🔍 Testing Realizado

- [ ] Build exitoso (`npm run build`)
- [ ] Dev server funcional (`npm run dev`)
- [ ] Tests pasando (si aplica)
- [ ] Navegación sin errores
- [ ] Imports funcionando correctamente

---

## 💡 Aprendizajes y Notas

[Cualquier insight, patrón descubierto, o decisión de diseño importante]

---

**Commits relacionados:**
- [hash] - [mensaje commit 1]
- [hash] - [mensaje commit 2]

**Branch:** [nombre del branch]
```

---

## 🗂️ Estructura de Changelog

```
/docs/changelog/
├── README.md                           # Índice de todas las bitácoras
├── 2025-11-18-claude-module-restructure.md
├── 2025-11-18-claude-email-marketing.md
├── 2025-11-19-codex-ui-improvements.md
└── [YYYY-MM-DD]-[agente]-[tema].md
```

---

## 🚦 Reglas de Coordinación

### 1. Antes de Empezar una Sesión

**Revisar OBLIGATORIAMENTE:**
1. `/docs/changelog/README.md` - Últimas bitácoras
2. `/docs/MODULE_EXPANSION_TODOS.md` - Estado actual
3. `git log --oneline -10` - Últimos commits

### 2. Durante la Sesión

- Trabajar en branch con formato: `[agente]/[tema]-[session-id]`
- Commits frecuentes con mensajes descriptivos
- Actualizar TODOs en `MODULE_EXPANSION_TODOS.md` al completar tareas

### 3. Al Terminar la Sesión

**Checklist obligatorio:**
- [ ] Bitácora creada en `/docs/changelog/`
- [ ] Índice actualizado en `/docs/changelog/README.md`
- [ ] `MODULE_EXPANSION_TODOS.md` actualizado con ✅
- [ ] Build exitoso
- [ ] Commits pusheados
- [ ] Branch documentado en bitácora

---

## 🎯 Objetivo Final del Proyecto

**Copiar siempre en cada bitácora:**

> Expandir Mentora Hub de 12 módulos (23% cobertura de Odoo 19.0) a 52+ módulos (100% cobertura) en 10 meses, manteniendo la calidad pedagógica, UX/UI y formato rico actual.
>
> **Fases:**
> - Fase 1 (Mes 1-3): 26 módulos - 50% cobertura - CRÍTICOS
> - Fase 2 (Mes 4-6): 39 módulos - 75% cobertura - SERVICIOS/PRODUCTIVIDAD
> - Fase 3 (Mes 7-8): 47 módulos - 90% cobertura - ESSENTIALS/ESPECIALIZACIÓN
> - Fase 4 (Mes 9-10): 52+ módulos - 100% cobertura - AVANZADO/NICHO

---

## ⚠️ Conflictos y Resolución

### Si Dos Agentes Trabajan en Paralelo

1. **Comunicar en bitácora** qué archivo/módulo se está trabajando
2. **Usar branches separados** siempre
3. **Merge conflicts:** El agente más reciente resuelve
4. **Duplicación:** Revisar changelog antes de empezar

### Prioridades de Trabajo

1. **Alta:** Módulos marcados como "PRIORIDAD 1" en `MODULE_EXPANSION_TODOS.md`
2. **Media:** Completar fases en orden (Fase 1 antes que Fase 2)
3. **Baja:** Refactorings, optimizaciones, mejoras menores

---

## 📞 Escalación

Si un agente encuentra un bloqueador que no puede resolver:

1. **Documentar en bitácora** en sección "Bloqueadores"
2. **Marcar en TODO** con nota: `⚠️ BLOQUEADO: [razón]`
3. **Crear issue en GitHub** si es necesario
4. **Notificar al usuario** en el commit message

---

## 🎓 Mejores Prácticas

### Commits

```
[Tipo]: [Título breve]

[Categoría 1]:
- Cambio específico 1
- Cambio específico 2

[Categoría 2]:
- Cambio específico 1

Métricas: [antes] → [después]
Ver bitácora: docs/changelog/[fecha]-[agente]-[tema].md
```

### Comunicación entre Agentes

- **Explícita:** No asumir que el siguiente agente sabe el contexto
- **Clara:** Usar lenguaje directo y específico
- **Completa:** Incluir TODO lo necesario para continuar
- **Actualizada:** Bitácoras reflejan el estado REAL

### Respeto al Trabajo Previo

- **NO sobrescribir** sin revisar bitácoras
- **NO duplicar** trabajo ya hecho
- **NO cambiar** decisiones de diseño sin documentar por qué
- **SÍ mejorar** incrementalmente
- **SÍ documentar** cambios significativos

---

## 📚 Referencias Rápidas

- **Plan Maestro:** `/docs/PLAN_EXPANSION_MECE.md`
- **TODOs de Progreso:** `/docs/MODULE_EXPANSION_TODOS.md`
- **Bitácoras:** `/docs/changelog/README.md`
- **Sistema de Diseño:** `/docs/brand-system.md`
- **Templates:** `/docs/templates/` (cuando estén disponibles)

---

**Última actualización:** 2025-11-18
**Responsable:** Claude Code
**Versión del protocolo:** 1.0
