# Guías de Formato para Contenido Markdown

## Objetivo
Unificar el formato de todos los módulos de aprendizaje y términos del glosario para que se rendericen con rich text estético y consistente.

## Principios de Formato

### 1. Texto Enfatizado
- **Negrita** para términos importantes: `**texto**`
- *Cursiva* para énfasis suave: `*texto*` (usar con moderación)
- NO usar asteriscos sueltos o sin formato

### 2. Listas
**Listas no ordenadas:**
```markdown
- Primer elemento
- Segundo elemento
  - Subelemento con indentación de 2 espacios
  - Otro subelemento
- Tercer elemento
```

**Listas ordenadas:**
```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
```

**Listas de verificación:**
```markdown
✓ Elemento completado
✓ Otro elemento
```

### 3. Encabezados
```markdown
## Título de Sección Principal
### Subtítulo
#### Subsección (raramente usado)
```

### 4. Bloques de Código
**Código inline:** `código` para comandos cortos o rutas

**Bloques de código:**
```markdown
~~~text
Contenido de código o ejemplos
con múltiples líneas
~~~
```

### 5. Tablas Markdown
```markdown
| Columna 1 | Columna 2 | Columna 3 |
| --- | --- | --- |
| Dato 1 | Dato 2 | Dato 3 |
| Dato 4 | Dato 5 | Dato 6 |
```

**Alternativa para datos financieros:**
```markdown
Descripción           Monto
────────────────────  ──────
Ingresos              $10,000
Gastos                $5,000
Total                 $5,000
```

### 6. Citas y Notas
```markdown
> Nota importante o tip
> Puede tener múltiples líneas
```

### 7. Enlaces
```markdown
[Texto del enlace](https://url.com)
```

### 8. Separadores Visuales
```markdown
───────────────────────────────
```

### 9. Emojis
Usar emojis para mejorar la legibilidad visual:
- 📍 Para rutas en Odoo
- ✓ Para items completados o validaciones
- ✅ Para resultados correctos
- ❌ Para errores o advertencias
- 💡 Para tips
- 📊 Para datos/reportes
- 🎯 Para objetivos
- ⚠️ Para advertencias importantes

### 10. Espaciado
- Una línea vacía entre secciones diferentes
- NO usar indentación excesiva innecesaria
- Mantener bloques de texto alineados a la izquierda

## Estructura Específica

### Para Términos del Glosario

**Estructura del campo `content` en examples:**
```markdown
**Título o contexto del ejemplo**

Explicación clara y concisa

Elementos visuales:
- Lista de puntos clave
- Datos relevantes
- Ejemplos prácticos

> Tip o nota final si es necesaria

[Enlace a documentación](url) si aplica
```

**Estructura de tablas de datos:**
```markdown
Fecha       | Descripción          | Debe    | Haber   | Saldo
01/03/2024  | Saldo inicial        | $10,000 |         | $10,000
05/03/2024  | Cobro factura #001   | $1,500  |         | $11,500
```

### Para Lecciones de Módulos

**Campo `content` en secciones:**
```markdown
Introducción clara al tema.

**Conceptos clave:**
- Punto 1 explicado
- Punto 2 explicado
- Punto 3 explicado

Texto adicional con contexto.
```

**Campo `example` en secciones:**
```markdown
📍 Ruta en Odoo: Menú > Submenú > Opción

Descripción del ejemplo:

~~~text
Código o pasos específicos
con formato de texto plano
~~~

Datos necesarios:
✓ Item 1
✓ Item 2
✓ Item 3
```

**Campo `tips` (array de strings):**
```javascript
tips: [
  'Tip conciso y accionable sin markdown innecesario',
  'Otro tip directo al punto',
  'Tercer tip útil'
]
```

## Patrones a EVITAR

❌ **Indentación excesiva innecesaria:**
```markdown
        Texto muy indentado
        sin razón aparente
```

❌ **Tablas sin separadores:**
```markdown
Columna1  Columna2
Dato1     Dato2
```

❌ **Texto plano donde debería haber negrita:**
```markdown
Pasos clave:
Activar módulo
Configurar empresa
```

✅ **Correcto:**
```markdown
**Pasos clave:**
- Activar módulo
- Configurar empresa
```

❌ **Asteriscos sin formato:**
```markdown
*Esto es importante* pero *usa* demasiados *asteriscos*
```

❌ **Mezcla inconsistente de estilos:**
```markdown
Algunas cosas con **negrita**
Otras sin negrita
- Lista aquí
Texto sin lista después
**Negrita** aleatoria
```

## Checklist de Calidad

Antes de marcar una sección como completada, verificar:

- [ ] No hay indentación excesiva innecesaria
- [ ] Las tablas tienen separadores apropiados
- [ ] Los términos importantes están en **negrita**
- [ ] Las listas usan formato consistente (- o 1.)
- [ ] Los bloques de código usan ~~~text
- [ ] Los emojis mejoran la legibilidad
- [ ] El espaciado es consistente
- [ ] No hay asteriscos sueltos sin formato
- [ ] Los ejemplos son claros y visuales
- [ ] Los tips son concisos y accionables

## Aplicación Automática

La utilidad `normalizeRichText()` en `/src/utils/richText.js` ayuda con:
- Eliminación de indentación excesiva
- Normalización de tablas markdown

Pero la calidad del contenido debe revisarse manualmente para asegurar:
- Coherencia narrativa
- Claridad de ejemplos
- Uso apropiado de énfasis
- Estructura lógica
