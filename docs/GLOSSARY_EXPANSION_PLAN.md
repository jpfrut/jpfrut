# Plan de Expansión del Glosario Interactivo de Odoo 19

## Estado Actual
- **24 términos** existentes
- Bien cubierto: Contabilidad (70%), Ventas (65%)
- Necesita trabajo: CRM (40%), Compras (50%), RRHH (60%)
- Faltan ~30-35 términos críticos

---

## 1. MAPEO COMPLETO DE CONCEPTOS POR MÓDULO

### A) CONTABILIDAD (Agregar 12 términos)

**Existentes (4):**
- Plan de Cuentas ✓
- Cuenta Contable ✓
- Diario Contable ✓
- Asiento Contable ✓

**Nuevos (12):**
1. **Período Contable** → "El mes o año que Odoo usa para organizar tu contabilidad. Como capítulos de tu libro financiero."
2. **Reconciliación Bancaria** → "Comparar tu extracto del banco con lo que Odoo tiene registrado. Como revisar que tu cuenta de Netflix coincida con tu tarjeta."
3. **Balance General** → "La foto de todo lo que tienes (activos), lo que debes (pasivos) y lo que es tuyo (patrimonio). Tu 'estado financiero' completo."
4. **Estado de Resultados** → "El resumen de cuánto vendiste menos cuánto gastaste = tu ganancia. ¿Estás ganando o perdiendo dinero?"
5. **Flujo de Caja** → "El dinero que entra y sale de tu cuenta bancaria. No es lo mismo que ganancias - puedes tener ganancias pero estar sin efectivo."
6. **IVA/Impuestos** → "El porcentaje que el gobierno te obliga a cobrar en tus ventas y que debes pagar después. Odoo lo calcula automáticamente."
7. **Nota de Crédito** → "Una factura al revés. Cuando cancelas o devuelves algo, creas esto para 'deshacer' la venta original."
8. **Extracto Bancario** → "La lista de movimientos de tu banco que subes a Odoo para verificar que todo coincida."
9. **Conciliación Automática** → "Cuando Odoo encuentra solo qué pago corresponde a qué factura. Como un matchmaking financiero."
10. **Centro de Costos** → "Una forma de separar gastos por departamento o proyecto. ¿Cuánto gastó marketing vs. ventas?"
11. **Año Fiscal** → "El período de 12 meses para tu contabilidad. No siempre es enero-diciembre, puede ser abril-marzo."
12. **Cierre Contable** → "Cuando 'cierras los libros' de un período para que nadie modifique nada. Como cerrar un capítulo."

---

### B) VENTAS (Agregar 10 términos)

**Existentes (5):**
- Factura ✓
- Cliente ✓
- Cotización ✓
- Oportunidad ✓
- Lead ✓

**Nuevos (10):**
1. **Pedido de Venta** → "La cotización que tu cliente aceptó. Ya no es propuesta, es un compromiso."
2. **Línea de Pedido** → "Cada producto o servicio dentro de una venta. Un pedido puede tener muchas líneas."
3. **Lista de Precios** → "Los precios que cobras. Puedes tener diferentes listas para mayoristas vs. minoristas."
4. **Descuento** → "Reducción del precio. Puede ser % o monto fijo. Cuidado: afecta tu margen."
5. **Condiciones de Pago** → "¿Cuándo te pagan? A 30 días, 50% adelantado, etc."
6. **Margen de Ganancia** → "Lo que ganas en cada venta después de restar costos. Si vendes a $100 y te costó $60, tu margen es $40."
7. **Comisión de Ventas** → "El porcentaje que gana tu vendedor por cerrar una venta."
8. **Presupuesto (Cotización)** → "El documento donde propones precios antes de que el cliente acepte."
9. **Confirmación de Pedido** → "El momento exacto donde la cotización se convierte en venta real."
10. **Política de Devolución** → "Las reglas sobre qué puede devolver el cliente y en qué condiciones."

---

### C) INVENTARIO (Agregar 15 términos)

**Existentes (4):**
- Producto ✓
- Ubicación ✓
- Movimiento de Stock ✓
- (Falta: Lead como parte de inventario - movido a CRM)

**Nuevos (15):**
1. **Stock Disponible** → "Cantidad física que tienes ahora mismo. No cuenta lo reservado para otros pedidos."
2. **Stock Reservado** → "Productos apartados para pedidos pendientes. Ya están 'vendidos' aunque no entregados."
3. **Punto de Reorden** → "Cantidad mínima antes de comprar más. Cuando llegas a 10 unidades, Odoo te avisa 'compra más'."
4. **Cantidad Mínima** → "Lo mínimo que quieres tener siempre. Tu colchón de seguridad."
5. **Lote** → "Un grupo de productos fabricados juntos. Importante para control de calidad y trazabilidad."
6. **Número de Serie** → "Identificación única para cada unidad. Como el VIN de un carro."
7. **Variante de Producto** → "Diferentes versiones del mismo producto. Camiseta azul talla M vs. roja talla L."
8. **Categoría de Producto** → "Cómo agrupas productos: electrónicos, alimentos, servicios..."
9. **Unidad de Medida** → "Cómo cuentas: piezas, kilos, metros, horas..."
10. **Transferencia de Inventario** → "Mover productos de un lugar a otro dentro de tu empresa."
11. **Recepción de Mercancía** → "Cuando recibes productos del proveedor. El momento de verificar que todo llegó bien."
12. **Entrega a Cliente** → "El envío físico de productos vendidos."
13. **Inventario Físico** → "Contar a mano todo lo que tienes y comparar con Odoo. Hacer 'match' entre realidad y sistema."
14. **Ajuste de Inventario** → "Corregir diferencias entre lo que dice Odoo y lo que realmente hay."
15. **Valoración de Inventario** → "Cuánto vale todo tu stock en dinero. Método: FIFO, promedio, etc."

---

### D) COMPRAS (Agregar 10 términos)

**Existentes (2):**
- Orden de Compra ✓
- Proveedor ✓

**Nuevos (10):**
1. **Solicitud de Cotización (RFQ)** → "Pedir precios a proveedores antes de comprar. Como pedir presupuestos para remodelar tu casa."
2. **Línea de Compra** → "Cada producto que pides al proveedor. Una orden puede tener varias líneas."
3. **Recepción** → "Momento en que recibes físicamente lo que compraste. Verificar cantidad y calidad."
4. **Factura de Proveedor** → "El cobro que te hace tu proveedor. La factura que debes pagar."
5. **Aprobación de Compra** → "Proceso donde un jefe autoriza la compra. Para controlar gastos."
6. **Plazo de Entrega** → "Cuánto tarda el proveedor en entregar. Importante para planificar."
7. **Devolución a Proveedor** → "Cuando regresas productos defectuosos o incorrectos."
8. **Lista de Precios de Proveedor** → "Los precios que tu proveedor te cobra. Negociables."
9. **Requisición de Compra** → "Solicitud interna antes de crear orden de compra. Empleado pide, jefe aprueba."
10. **Costos Adicionales** → "Gastos extra: envío, aduanas, seguros. Se suman al costo del producto."

---

### E) CRM (Agregar 12 términos)

**Existentes (2):**
- Lead ✓
- Oportunidad ✓

**Nuevos (12):**
1. **Pipeline** → "El camino visual de tus ventas. Columnas tipo Kanban: nuevo, contactado, propuesta, ganado."
2. **Etapa** → "Cada paso del pipeline. Donde está la venta ahora: ¿en negociación? ¿esperando decisión?"
3. **Actividad** → "Tareas de seguimiento: llamar, enviar email, reunión. Recordatorios para no perder ventas."
4. **Probabilidad de Cierre** → "¿Qué tan probable es ganar esta venta? 10% = difícil, 90% = casi seguro."
5. **Valor Esperado** → "Cuánto dinero representa la oportunidad. Probabilidad x Monto = Valor esperado."
6. **Conversión** → "Cuando un lead se convierte en oportunidad, o oportunidad en cliente."
7. **Pérdida** → "Cuando no ganaste la venta. Importante registrar POR QUÉ perdiste."
8. **Fuente del Lead** → "De dónde vino: sitio web, referido, evento, publicidad..."
9. **Seguimiento** → "Mantener contacto con el cliente potencial hasta cerrar la venta."
10. **Canal de Ventas** → "Por dónde vendes: tienda física, online, distribuidores..."
11. **Equipo de Ventas** → "Grupo de vendedores. Puedes tener equipos por región o por tipo de cliente."
12. **Métricas de CRM** → "Números importantes: leads creados, tasa de conversión, tiempo promedio de cierre."

---

### F) RRHH (Agregar 12 términos)

**Existentes (4):**
- Empleado ✓
- Departamento ✓
- Contrato ✓
- (Sin: cotizacion, mencionado erróneamente)

**Nuevos (12):**
1. **Nómina** → "El pago mensual a tus empleados. Salario + bonos - impuestos = lo que reciben."
2. **Ausencia** → "Cuando el empleado no viene: vacaciones, enfermedad, permiso personal."
3. **Permiso** → "Solicitud formal para ausentarse. El jefe debe aprobar."
4. **Tipo de Contrato** → "Fijo, temporal, por proyecto, medio tiempo..."
5. **Puesto de Trabajo** → "El rol: gerente de ventas, desarrollador, contador..."
6. **Evaluación de Desempeño** → "Calificar cómo trabaja el empleado. Para decisiones de aumento o promoción."
7. **Habilidades** → "Lo que sabe hacer: idiomas, software, certificaciones..."
8. **Currículum/CV** → "Historial del candidato: experiencia, educación, habilidades."
9. **Reclutamiento** → "Proceso de buscar y contratar nuevos empleados."
10. **Onboarding** → "Proceso de integrar al nuevo empleado. Sus primeros días."
11. **Beneficios** → "Extras además del salario: seguro médico, vales de comida..."
12. **Horario de Trabajo** → "Las horas que trabaja: 9-6, turnos rotativos..."

---

### G) CONCEPTOS GENERALES DE ODOO (Agregar 10 términos)

**Nuevos (10):**
1. **Módulo/Aplicación** → "Cada funcionalidad de Odoo: Ventas es un módulo, Inventario es otro. Instala solo lo que necesitas."
2. **Vista Kanban** → "Organización visual en columnas. Como post-its en un pizarrón."
3. **Vista de Lista** → "Datos en tabla, como Excel."
4. **Filtro** → "Mostrar solo ciertos datos. Ejemplo: solo facturas pendientes."
5. **Grupo** → "Agrupar datos por categoría. Ejemplo: ventas por vendedor."
6. **Estado del Documento** → "Dónde está: borrador, confirmado, cancelado..."
7. **Flujo de Aprobación** → "Pasos que debe seguir un documento. Empleado crea, jefe aprueba, director autoriza."
8. **Automatización** → "Acciones automáticas. Ejemplo: enviar email cuando vence una factura."
9. **Reporte** → "Documento con datos analizados. Ventas del mes, rentabilidad, etc."
10. **Dashboard/Tablero** → "Pantalla con indicadores importantes de un vistazo."

---

## 2. UBICACIÓN DE TÉRMINOS EN LA APLICACIÓN

### Por Página/Sección:

**Dashboard (/):**
- Módulo/Aplicación
- Dashboard/Tablero
- Reporte

**Explorar (/explore):**
- Categoría de Producto
- Módulo/Aplicación
- Vista Kanban/Lista

**Lecciones de Contabilidad:**
- Todos los términos de Contabilidad
- Plan de Cuentas (acc-001)
- Diario Contable (acc-001)
- Asiento Contable (acc-002)
- Reconciliación Bancaria (acc-005)
- Balance General, Estado de Resultados (acc-006)
- IVA/Impuestos (mencionados en múltiples lecciones)

**Lecciones de Ventas:**
- Todos los términos de Ventas + CRM
- Lead, Oportunidad (sales-005, crm-001)
- Cotización (sales-003)
- Pedido de Venta (sales-004)
- Factura, Nota de Crédito (sales-001)
- Pipeline (crm-001)

**Lecciones de Inventario:**
- Todos los términos de Inventario
- Producto (inventory-001)
- Ubicación (inventory-001)
- Movimiento de Stock (inventory-002)
- Recepción (inventory-003)
- Valoración (inventory-004)

**Lecciones de Compras:**
- Todos los términos de Compras
- RFQ (purchase-001)
- Orden de Compra (purchase-002)
- Recepción (purchase-003)
- Factura de Proveedor (purchase-004)

**Lecciones de RRHH:**
- Todos los términos de RRHH
- Empleado, Departamento (hr-001)
- Contrato (hr-002)
- Nómina (hr-003)
- Ausencias (hr-004)

**FAQ (/faq):**
- Módulo/Aplicación
- Estado del Documento
- Flujo de Aprobación
- Vista Kanban

**FirstDay (/first-day):**
- Cliente
- Producto
- Factura
- Módulo/Aplicación
- Dashboard

---

## 3. INTEGRACIÓN DEL HOVER EN TÉRMINOS

### Mapeo de texto a glosario (GlossaryText.jsx):

```javascript
// Agregar estos mappings:
const termMappings = {
  // Existentes...

  // Contabilidad - Nuevos
  'período contable': 'periodo-contable',
  'reconciliación bancaria': 'reconciliacion-bancaria',
  'balance general': 'balance-general',
  'estado de resultados': 'estado-resultados',
  'flujo de caja': 'flujo-caja',
  'iva': 'iva-impuestos',
  'impuestos': 'iva-impuestos',
  'nota de crédito': 'nota-credito',
  'extracto bancario': 'extracto-bancario',
  'centro de costos': 'centro-costos',
  'año fiscal': 'anio-fiscal',
  'cierre contable': 'cierre-contable',

  // Ventas - Nuevos
  'pedido de venta': 'pedido-venta',
  'línea de pedido': 'linea-pedido',
  'lista de precios': 'lista-precios',
  'condiciones de pago': 'condiciones-pago',
  'margen de ganancia': 'margen-ganancia',
  'comisión': 'comision-ventas',

  // Inventario - Nuevos
  'stock disponible': 'stock-disponible',
  'stock reservado': 'stock-reservado',
  'punto de reorden': 'punto-reorden',
  'lote': 'lote',
  'número de serie': 'numero-serie',
  'variante': 'variante-producto',
  'categoría de producto': 'categoria-producto',
  'unidad de medida': 'unidad-medida',
  'transferencia': 'transferencia-inventario',
  'recepción': 'recepcion-mercancia',
  'entrega': 'entrega-cliente',
  'inventario físico': 'inventario-fisico',
  'ajuste de inventario': 'ajuste-inventario',
  'valoración': 'valoracion-inventario',

  // Compras - Nuevos
  'solicitud de cotización': 'rfq',
  'rfq': 'rfq',
  'factura de proveedor': 'factura-proveedor',
  'aprobación': 'aprobacion-compra',
  'requisición': 'requisicion-compra',

  // CRM - Nuevos
  'pipeline': 'pipeline',
  'etapa': 'etapa-crm',
  'actividad': 'actividad-crm',
  'probabilidad': 'probabilidad-cierre',
  'conversión': 'conversion',
  'pérdida': 'perdida-venta',
  'seguimiento': 'seguimiento-crm',

  // RRHH - Nuevos
  'nómina': 'nomina',
  'ausencia': 'ausencia',
  'permiso': 'permiso-rrhh',
  'evaluación': 'evaluacion-desempeno',
  'reclutamiento': 'reclutamiento',
  'onboarding': 'onboarding',
  'beneficios': 'beneficios',

  // Generales - Nuevos
  'módulo': 'modulo-aplicacion',
  'aplicación': 'modulo-aplicacion',
  'kanban': 'vista-kanban',
  'filtro': 'filtro',
  'reporte': 'reporte',
  'dashboard': 'dashboard',
  'tablero': 'dashboard',
  'automatización': 'automatizacion',
  'flujo de aprobación': 'flujo-aprobacion'
}
```

---

## 4. ESTRUCTURA DE DEFINICIONES NARRATIVAS

### Formato mejorado para cada término:

```javascript
{
  term: 'Nombre del Término',
  shortDef: 'Explicación corta y directa (1-2 oraciones para el tooltip)',
  fullDef: `
    **¿Qué es en palabras simples?**
    Imagina que [analogía de la vida real]...

    **¿Para qué sirve en tu negocio?**
    Te ayuda a [beneficio concreto]...

    **¿Cuándo lo usas?**
    Lo necesitas cuando [situación real]...
  `,
  category: 'Categoría',
  icon: '📊',
  realLifeAnalogy: 'Como [ejemplo cotidiano que todos entienden]',
  example: {
    title: 'Ejemplo Real',
    content: `
      Situación: María tiene una tienda de ropa...

      En Odoo esto se vería así:
      [ejemplo visual con datos reales]
    `
  },
  whyMatters: '¿Por qué debería importarte?',
  relationships: [...],
  bestPractices: [...],
  commonMistakes: [...]
}
```

### Ejemplo de término con narrativa completa:

```javascript
'reconciliacion-bancaria': {
  term: 'Reconciliación Bancaria',
  shortDef: 'Comparar tu extracto del banco con Odoo para asegurarte que todo coincida.',
  fullDef: `
    ¿Alguna vez revisaste tu cuenta del banco y pensaste "¿de dónde salió este cargo?"
    Eso es exactamente lo que hace la reconciliación bancaria, pero para tu empresa.

    Imagina que tienes una libreta donde anotas todo lo que gastas e ingresas.
    Tu banco también lleva su propia cuenta. Al final del mes, comparas ambas
    y te aseguras de que coincidan. Si no coinciden, hay que investigar por qué.

    En Odoo, subes el extracto de tu banco (PDF o Excel) y el sistema intenta
    hacer match automático: "Esta transferencia de $500 corresponde a esta factura #123".
    Tu trabajo es verificar que todo esté correcto y investigar lo que no cuadra.
  `,
  category: 'Contabilidad',
  icon: '🏦',
  realLifeAnalogy: 'Como cuando revisas tu estado de cuenta de la tarjeta de crédito y verificas que reconoces todos los cargos',
  example: {
    title: 'María reconcilia su cuenta',
    content: `
      María tiene una panadería. Su banco muestra:

      📅 Marzo 2024
      ─────────────────────────────
      Día 5:  +$2,500 (Depósito)
      Día 8:  -$800   (Proveedor harina)
      Día 12: +$1,200 (Depósito)
      Día 15: -$150   (Luz)
      Día 20: +$3,000 (Depósito)

      En Odoo, María tiene:
      ✅ Factura #45: $2,500 - MATCH
      ✅ Orden Compra #12: $800 - MATCH
      ✅ Factura #46: $1,200 - MATCH
      ❓ Gasto luz: No registrado - CREAR
      ✅ Factura #47: $3,000 - MATCH

      Resultado: Todo cuadra, pero María olvidó
      registrar el pago de luz. Lo agrega y ¡listo!
    `
  },
  whyMatters: 'Si no reconcilias, podrías tener facturas sin cobrar o gastos fantasma. Es la única forma de saber si tu dinero real coincide con tu contabilidad.',
  relationships: [
    {
      relatedTerm: 'extracto-bancario',
      explanation: 'El extracto es lo que subes del banco, la reconciliación es el proceso de compararlo'
    },
    {
      relatedTerm: 'asiento-contable',
      explanation: 'Cuando algo no cuadra, creas un asiento contable para corregirlo'
    }
  ],
  bestPractices: [
    'Hazlo semanalmente, no esperes al fin de mes',
    'Guarda los extractos bancarios como respaldo',
    'Investiga inmediatamente las diferencias, no las dejes para después',
    'Usa la conciliación automática de Odoo para ahorrar tiempo'
  ],
  commonMistakes: [
    'No reconciliar por meses y luego no poder encontrar errores',
    'Ignorar pequeñas diferencias (se acumulan)',
    'No registrar gastos bancarios (comisiones, mantenimiento de cuenta)'
  ]
}
```

---

## 5. PRIORIDAD DE IMPLEMENTACIÓN

### Fase 1 - Críticos (Esta semana):
1. ✅ Reconciliación Bancaria
2. ✅ IVA/Impuestos
3. ✅ Pedido de Venta
4. ✅ RFQ (Solicitud de Cotización)
5. ✅ Pipeline de CRM
6. ✅ Stock Disponible vs Reservado

### Fase 2 - Importantes (Próxima semana):
7. Balance General y Estado de Resultados
8. Nota de Crédito
9. Actividades de CRM
10. Nómina
11. Recepción de Mercancía
12. Variantes de Producto

### Fase 3 - Complementarios:
- Resto de términos de cada categoría
- Términos generales de Odoo
- Refinamiento de definiciones existentes con más narrativa

---

## 6. MÉTRICAS DE ÉXITO

- **Cobertura**: De 24 a 80+ términos
- **Engagement**: Tiempo promedio en tooltips > 5 segundos
- **Usabilidad**: 100% de términos técnicos en lecciones tienen hover
- **Comprensión**: Feedback de usuarios sobre claridad (encuesta)

---

## RESUMEN EJECUTIVO

**Total términos actuales:** 24
**Total términos propuestos:** 80-85

**Distribución por módulo:**
- Contabilidad: 16 términos (4 existentes + 12 nuevos)
- Ventas: 15 términos (5 existentes + 10 nuevos)
- Inventario: 19 términos (4 existentes + 15 nuevos)
- Compras: 12 términos (2 existentes + 10 nuevos)
- CRM: 14 términos (2 existentes + 12 nuevos)
- RRHH: 16 términos (4 existentes + 12 nuevos)
- Generales: 10 términos (0 existentes + 10 nuevos)

**Enfoque clave:**
Definiciones narrativas con analogías de la vida real, ejemplos con personajes recurrentes (María la panadera, Carlos el distribuidor), y explicación del "por qué importa" antes del "cómo funciona".
