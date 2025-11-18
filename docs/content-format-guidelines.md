# Guia de Formato para Glosario y Lecciones

> Objetivo: todos los recursos educativos (`glossaryData`, `lessonContent`, `modules/**`) deben renderizarse como Rich Text consistente en `MarkdownText` sin bloques "tipo terminal". Esta guia define encoding, estructura y componentes necesarios antes de normalizar el contenido.

## 1. Lineamientos globales

- **Codificacion UTF-8 limpia**: ningun texto puede contener artefactos como `A3`, `dY"`, `�?�`. Al detectar garabatos, reescribir manualmente (ej. `Configuracion`, `->`).
- **Markdown semantico** unicamente: usar `#` para encabezados, listas con `-`/`1.` y tablas Markdown. Evitar tablas ASCII, bullets personalizados o caracteres decorativos.
- **Nada de `<pre>` ni backticks triples** salvo codigo real. Ejemplos, checklists y tablas deben ser Markdown estandar para que `ReactMarkdown` los procese como bloques ricos.
- **Longitud de parrafos**: maximo 2-3 oraciones por parrafo. Separar ideas con lineas en blanco para permitir interlineado correcto.
- **Nomenclatura uniforme**: fields `title`, `shortDef`, `fullDef`, `example.title`, `example.content`, `sections[].title`, `tips[]`, `bestPractices[]` deben seguir la misma capitalizacion y tono conversacional.
- **Links**: markdown `[Texto](url)`; nunca pegar URL desnudas.

## 2. Componentes y estilos soportados

### MarkdownText.jsx

- Ya soporta `p`, `strong`, `em`, `ul`, `ol`, `code`, `blockquote`.
- **Accion requerida**:
  1. Cambiar el bullet personalizado `�?�` por el caracter `U+2022` (bullet) o un icono tailwind.
  2. Anadir soporte para tablas (`table`, `thead`, `tbody`, `tr`, `th`, `td`) con clases utilitarias para bordes suaves.
  3. Permitir `hr` como separador con `border-neutral-200`.

### GlossaryPage.jsx

- Quitar el wrapper `font-mono whitespace-pre-line` de los ejemplos; en su lugar, renderizar `<MarkdownText>` dentro de un card claro (`bg-neutral-50`).
- "Mejores Practicas" debe usar un `ul` simple con icono consistente (ej. `CheckCircle` verde).
- Relaciones: seguir usando chips, pero permitir una descripcion breve en tooltip (opcional a futuro).

### ExercisePage.jsx

- `section.example` debe mostrarse como card con `MarkdownText`, **no** `<pre>`.
- Tips se renderizaran con `MarkdownText` para permitir cursivas o links.
- Preparar callouts reutilizables (`Tip`, `Warning`, `Checklist`) si se necesitan despues de homogenizar el contenido.

## 3. Estructuras de datos esperadas

### Glosario (`glossaryTerms`)

```
'cuenta-contable': {
  term: 'Cuenta Contable',
  shortDef: 'Registro de movimientos para un concepto especifico',
  fullDef: 'Descripcion completa en prosa...',
  category: 'Contabilidad',
  icon: 'bank', // usar emoji/alias que soporte la UI
  example: {
    title: 'Ejemplo en Odoo',
    content: `
**Cuenta 1101 - Banco Principal**

| Fecha      | Movimiento            | Debe     | Haber    | Saldo   |
|------------|-----------------------|----------|----------|---------|
| 01/03/24   | Saldo inicial         | $10,000  |          | $10,000 |
| 05/03/24   | Cobro factura #001    | $1,500   |          | $11,500 |

- El saldo final coincide con tu estado bancario.
`
  },
  relationships: [
    { relatedTerm: 'plan-de-cuentas', explanation: 'Cada cuenta vive dentro del plan.' }
  ],
  bestPractices: [
    'Nombra las cuentas con un proposito unico.',
    'Inactiva cuentas en lugar de eliminarlas cuando ya tienen movimientos.'
  ],
  commonMistakes: [
    'Duplicar cuentas con nombres parecidos.',
    'No respetar la numeracion jerarquica.'
  ],
  relatedModules: ['Contabilidad', 'Facturacion']
}
```

### Lecciones (`lessonContent`)

```
'acc-001': {
  title: 'Introduccion a la Contabilidad en Odoo',
  introduction: `
El modulo de Contabilidad centraliza facturas, pagos y reportes. Esta leccion te guia desde la instalacion hasta la configuracion basica.
`,
  sections: [
    {
      title: '1. Configuracion Inicial',
      content: `
Antes de registrar movimientos:

1. Activa el modulo Contabilidad desde **Aplicaciones**.
2. Completa la ficha de tu empresa (nombre, RFC, direccion).
3. Define moneda base y ano fiscal (no podras cambiarlos despues).
`,
      example: `
> **Ruta en Odoo**
>
> `Aplicaciones -> Contabilidad -> Instalar`
>
> Luego ve a **Configuracion -> Ajustes -> Contabilidad** para definir datos fiscales y moneda.
`,
      tips: [
        'Ten a mano tu informacion fiscal antes de iniciar la configuracion.',
        'Si tu empresa opera en varias monedas, habilita la multimoneda desde ajustes.'
      ]
    }
  ],
  quiz: { ... } // sin cambios estructurales
}
```

## 4. Workflow de normalizacion

1. **Corregir encoding** (buscar y reemplazar caracteres rotos usando VSCode/regex).
2. **Aplicar plantillas anteriores**: reescribir `example.content` y `sections[].content` con Markdown semantico.
3. **Actualizar componentes** segun la seccion 2 para aprovechar el nuevo contenido.
4. **QA**: revisar glosario y al menos una leccion por modulo en la UI; confirmar que Markdown se renderiza como texto enriquecido.
5. **Checklist futuro**: anadir lint o script que valide que no existan caracteres problematicos ni backticks triples en campos descriptivos.

Esta guia se usara como referencia durante las siguientes fases del plan MECE para garantizar consistencia visual en toda la experiencia educativa de jpfrut.
