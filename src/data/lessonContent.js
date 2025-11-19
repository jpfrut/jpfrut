// Contenido educativo detallado para cada lección
export const lessonContent = {
  // ========================================
  // CONTABILIDAD
  // ========================================
  'acc-001': {
    title: 'Introducción a la Contabilidad en Odoo',
    introduction: `
      El módulo de Contabilidad de Odoo 19 es una solución completa para gestionar todas las operaciones
      contables de tu empresa. Desde la configuración inicial hasta los reportes financieros avanzados,
      Odoo te proporciona las herramientas necesarias para mantener tus finanzas organizadas y cumplir
      con las normativas fiscales.
    `,
    sections: [
      {
        title: '1. Configuración Inicial del Módulo',
        content: `
          Antes de comenzar a trabajar con la contabilidad, es fundamental realizar una configuración adecuada:

          **Pasos clave:**
          - Activar el módulo de Contabilidad desde el menú de Aplicaciones
          - Configurar los datos de tu empresa (nombre, dirección, NIF/RUT/RFC)
          - Seleccionar el país y moneda principal
          - Configurar el año fiscal y períodos contables
        `,
        example: `
          📍 Ruta en Odoo: Aplicaciones > Buscar "Contabilidad" > Instalar

          Luego: Configuración > Ajustes > Contabilidad

          Datos necesarios:
          ✓ Nombre de la empresa
          ✓ NIF/RUT/RFC
          ✓ Dirección fiscal
          ✓ Moneda principal (ej: USD, EUR, MXN, CLP)
          ✓ Año fiscal (inicio y fin)
        `,
        tips: [
          'Asegúrate de tener todos los documentos legales de tu empresa antes de empezar',
          'La moneda principal no se puede cambiar después, ¡elige con cuidado!',
          'Configura correctamente tu año fiscal según las regulaciones de tu país'
        ]
      },
      {
        title: '2. Plan de Cuentas Contables',
        content: `
          El plan de cuentas es la columna vertebral de tu contabilidad. Odoo incluye planes de cuentas
          predefinidos para cada país, pero puedes personalizarlo según tus necesidades.

          **Tipos de cuentas:**
          - Activos: Cuentas por cobrar, bancos, inventario
          - Pasivos: Cuentas por pagar, préstamos
          - Patrimonio: Capital social, utilidades retenidas
          - Ingresos: Ventas, otros ingresos
          - Gastos: Costos operativos, salarios, servicios
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Configuración > Plan de Cuentas

          **Ejemplo de estructura:**

          ~~~text
          1000 - ACTIVOS
            1100 - Activo Corriente
              1110 - Bancos
                1110.01 - Banco Principal
                1110.02 - Banco Secundario
              1120 - Cuentas por Cobrar
                1120.01 - Clientes Nacionales
                1120.02 - Clientes Internacionales

          2000 - PASIVOS
            2100 - Pasivo Corriente
              2110 - Cuentas por Pagar
              2120 - Impuestos por Pagar
          ~~~
        `,
        tips: [
          'Usa una numeración lógica y escalable para tus cuentas',
          'No elimines cuentas que ya tienen movimientos, márcalas como inactivas',
          'Revisa el plan predeterminado antes de crear cuentas nuevas'
        ]
      },
      {
        title: '3. Diarios Contables',
        content: `
          Los diarios son libros donde se registran todas las transacciones contables. Odoo crea
          automáticamente algunos diarios básicos, pero puedes crear más según tus necesidades.

          **Tipos de diarios comunes:**
          - Diario de Ventas: Registro de facturas de cliente
          - Diario de Compras: Registro de facturas de proveedor
          - Diario de Banco: Movimientos bancarios
          - Diario de Efectivo: Operaciones en efectivo
          - Diarios Varios: Ajustes y traspasos
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Configuración > Diarios

          **Crear un nuevo diario:**

          1. Clic en "Crear"
          2. Nombre: "Banco BBVA"
          3. Tipo: "Banco"
          4. Cuenta por defecto: Seleccionar cuenta bancaria
          5. Secuencia de asientos: Automática

          **Configuración del diario:**
          ✓ Moneda (si es diferente a la principal)
          ✓ Cuenta contable asociada
          ✓ Secuencia de numeración
          ✓ Controles de bloqueo
        `,
        tips: [
          'Crea un diario separado para cada cuenta bancaria',
          'Usa nombres descriptivos para identificar rápidamente cada diario',
          'Configura las secuencias de numeración según tus necesidades legales'
        ]
      },
      {
        title: '4. Períodos Fiscales',
        content: `
          Los períodos fiscales te permiten organizar y controlar el cierre de operaciones contables
          por mes, trimestre o año.

          **Funciones principales:**
          - Bloquear períodos cerrados para evitar modificaciones
          - Generar reportes por período
          - Facilitar el cierre contable mensual/anual
          - Cumplir con obligaciones fiscales periódicas
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Configuración > Períodos Fiscales

          **Configuración típica:**

          **Año Fiscal 2025:**
          - Inicio: 01/01/2025
          - Fin: 31/12/2025

          **Períodos mensuales:**
          - Enero 2025 (01/01 - 31/01)
          - Febrero 2025 (01/02 - 28/02)
          - ... etc.

          **Estado de períodos:**
          ○ Abierto: Se pueden crear y modificar asientos
          ○ Cerrado: No se permiten nuevos asientos (solo con permisos especiales)
        `,
        tips: [
          'Cierra los períodos una vez reconciliados y auditados',
          'Mantén al menos un período abierto para operaciones corrientes',
          'Usa permisos especiales para quienes puedan reabrir períodos'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es el primer paso para comenzar a usar el módulo de Contabilidad?',
          options: [
            'Crear facturas',
            'Instalar y configurar el módulo de Contabilidad',
            'Importar extractos bancarios',
            'Crear productos'
          ],
          correct: 1,
          explanation: 'Antes de poder usar cualquier funcionalidad, debes instalar el módulo y configurar los datos básicos de tu empresa.'
        },
        {
          id: 'q2',
          question: '¿Qué es el Plan de Cuentas?',
          options: [
            'Una lista de clientes',
            'La estructura organizativa de todas las cuentas contables',
            'Un calendario de pagos',
            'Una lista de facturas'
          ],
          correct: 1,
          explanation: 'El Plan de Cuentas es la estructura que organiza todas las cuentas contables de la empresa (activos, pasivos, ingresos, gastos, etc.).'
        },
        {
          id: 'q3',
          question: '¿Para qué sirven los Diarios Contables?',
          options: [
            'Para escribir notas personales',
            'Para registrar y organizar las transacciones contables por tipo',
            'Para programar citas',
            'Para enviar emails'
          ],
          correct: 1,
          explanation: 'Los diarios son libros contables donde se registran las transacciones, organizados por tipo (ventas, compras, banco, etc.).'
        },
        {
          id: 'q4',
          question: '¿Por qué es importante cerrar los períodos fiscales?',
          options: [
            'Para ahorrar espacio en disco',
            'Para evitar modificaciones accidentales en períodos ya auditados',
            'Para mejorar la velocidad del sistema',
            'No es importante cerrarlos'
          ],
          correct: 1,
          explanation: 'Cerrar los períodos fiscales evita que se modifiquen transacciones de períodos ya reconciliados y auditados, manteniendo la integridad contable.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Práctico: Configuración Inicial',
      description: 'Imagina que debes configurar la contabilidad para una nueva empresa. Completa los siguientes pasos:',
      steps: [
        {
          id: 'step1',
          task: 'Identifica qué datos de la empresa necesitas antes de configurar Odoo',
          validation: 'multiple-choice',
          options: [
            'Nombre de la empresa',
            'NIF/RUT/RFC',
            'Dirección fiscal',
            'Moneda principal',
            'Todas las anteriores'
          ],
          correct: 4
        },
        {
          id: 'step2',
          task: '¿Qué tipo de cuenta usarías para registrar una cuenta bancaria?',
          validation: 'multiple-choice',
          options: [
            'Pasivo',
            'Activo',
            'Ingreso',
            'Gasto'
          ],
          correct: 1
        },
        {
          id: 'step3',
          task: '¿Qué tipo de diario crearías para registrar las ventas?',
          validation: 'text',
          correctAnswer: 'Diario de Ventas',
          hints: ['Piensa en el tipo de transacción que vas a registrar', 'Es uno de los diarios más comunes']
        }
      ]
    }
  },

  'acc-002': {
    title: 'Gestión de Facturas de Cliente',
    introduction: `
      Las facturas de cliente son documentos esenciales en el ciclo de ventas. Odoo te permite crear,
      enviar y gestionar facturas de manera eficiente, con seguimiento completo de pagos y recordatorios automáticos.
    `,
    sections: [
      {
        title: '1. Crear Facturas de Venta',
        content: `
          En Odoo puedes crear facturas directamente o generarlas automáticamente desde pedidos de venta.

          **Métodos de creación:**
          - Manual: Crear facturas directamente
          - Desde pedido: Convertir pedidos confirmados en facturas
          - Automática: Facturación basada en reglas (por tiempo, entrega, etc.)
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Clientes > Facturas

          **Crear factura manual:**

          1. Clic en "Crear"
          2. Seleccionar Cliente
          3. Agregar líneas de factura:
             - Producto/Servicio
             - Descripción
             - Cantidad
             - Precio unitario
             - Impuestos
          4. Verificar total
          5. Confirmar factura
          6. Enviar por email o imprimir

          **Ejemplo de factura:**

          ~~~text
          Cliente: Empresa ABC S.A.
          Fecha: 15/01/2025

          Líneas:
          - Servicio de Consultoría | 10 horas | $100/hora | IVA 19% = $1,190
          - Software Licencia       | 1 unidad | $500     | IVA 19% = $595

          Subtotal: $1,600
          IVA (19%): $304
          TOTAL: $1,904
          ~~~
        `,
        tips: [
          'Verifica que el cliente tenga configurados todos sus datos fiscales',
          'Asigna la condición de pago correcta (30, 60, 90 días, etc.)',
          'Revisa que los impuestos aplicados sean los correctos según el tipo de producto/servicio'
        ]
      },
      {
        title: '2. Facturas Rectificativas (Notas de Crédito)',
        content: `
          Las notas de crédito se usan para corregir errores en facturas o procesar devoluciones.

          **Casos de uso:**
          - Devolución de productos
          - Descuentos posteriores a la factura
          - Corrección de errores en facturación
          - Cancelación parcial o total de ventas
        `,
        example: `
          📍 Ruta en Odoo: Desde la factura > Botón "Agregar nota de crédito"

          **Proceso:**

          1. Abrir la factura original
          2. Clic en "Agregar nota de crédito"
          3. Seleccionar motivo:
             - Descuento
             - Devolución de producto
             - Corrección
          4. Ajustar cantidades o importes
          5. Confirmar nota de crédito

          **Ejemplo:**

          ~~~text
          Factura Original: #INV/2025/0001 - $1,904
          Nota de Crédito: #RINV/2025/0001 - ($595)

          Motivo: Devolución de Licencia de Software

          Saldo pendiente: $1,904 - $595 = $1,309
          ~~~
        `,
        tips: [
          'Las notas de crédito siempre deben referenciar la factura original',
          'Puedes crear notas de crédito parciales o totales',
          'Si el cliente ya pagó, la nota de crédito puede generar un saldo a favor'
        ]
      },
      {
        title: '3. Gestión de Pagos',
        content: `
          Odoo facilita el registro y seguimiento de los pagos recibidos de clientes.

          **Tipos de pago:**
          - Pago total
          - Pagos parciales
          - Anticipos
          - Pagos con descuento por pronto pago
        `,
        example: `
          📍 Ruta en Odoo: Desde la factura > Botón "Registrar pago"

          **Registrar pago:**

          1. Abrir factura pendiente
          2. Clic en "Registrar pago"
          3. Configurar:
             - Diario de pago (Banco / Efectivo)
             - Método de pago (Transferencia, cheque, etc.)
             - Importe (total o parcial)
             - Fecha de pago
          4. Confirmar

          **Estados de factura:**

          🔴 Borrador - Factura no confirmada
          🟡 Publicada - Factura confirmada, pendiente de pago
          🟢 Pagada - Factura totalmente pagada
          🟠 Pago parcial - Factura parcialmente pagada
        `,
        tips: [
          'Registra los pagos en el diario correcto (banco o efectivo)',
          'Puedes aplicar un pago a múltiples facturas simultáneamente',
          'Usa la conciliación automática para agilizar el proceso'
        ]
      },
      {
        title: '4. Seguimiento de Cobros',
        content: `
          Mantén control sobre las facturas pendientes y automatiza recordatorios.

          **Herramientas de seguimiento:**
          - Reporte de antigüedad de saldos
          - Recordatorios automáticos por email
          - Dashboard de cuentas por cobrar
          - Alertas de facturas vencidas
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Antigüedad de Saldos

          **Reporte de Antigüedad:**

          | Cliente     | Actual | 1-30 días | 31-60 días | +60 días | Total   |
          | ----------- | ------ | --------- | ---------- | -------- | ------- |
          | Empresa ABC | $1,000 | $500      | $300       | $0       | $1,800  |
          | Empresa XYZ | $0     | $0        | $800       | $400     | $1,200  |

          **Acciones de seguimiento:**
          ✓ Enviar recordatorio automático a 30 días
          ✓ Llamada telefónica a 45 días
          ✓ Suspender crédito a 60 días
          ✓ Proceso de cobranza judicial a 90 días
        `,
        tips: [
          'Configura recordatorios automáticos para evitar trabajo manual',
          'Revisa semanalmente el reporte de antigüedad de saldos',
          'Define políticas claras de crédito y cobranza'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia entre una factura y una nota de crédito?',
          options: [
            'No hay diferencia',
            'La factura registra una venta, la nota de crédito la anula o reduce',
            'La nota de crédito es solo para clientes VIP',
            'Las notas de crédito no afectan la contabilidad'
          ],
          correct: 1,
          explanation: 'Una factura registra una venta y genera una cuenta por cobrar. Una nota de crédito reduce o anula esa venta, disminuyendo el saldo por cobrar.'
        },
        {
          id: 'q2',
          question: '¿Qué sucede cuando registras un pago parcial en una factura?',
          options: [
            'La factura se marca como pagada completamente',
            'La factura se cancela',
            'El estado cambia a "Pago parcial" y queda saldo pendiente',
            'Se genera automáticamente una nota de crédito'
          ],
          correct: 2,
          explanation: 'Al registrar un pago parcial, la factura cambia a estado "Pago parcial" y el sistema mantiene el saldo pendiente hasta completar el pago total.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Práctico: Ciclo Completo de Facturación',
      description: 'Simula el proceso completo de facturación y cobro:',
      steps: [
        {
          id: 'step1',
          task: 'Una empresa te solicita 5 licencias de software a $200 c/u con IVA del 19%. ¿Cuál es el total de la factura?',
          validation: 'numeric',
          correctAnswer: 1190,
          tolerance: 1,
          hints: ['Subtotal = 5 × $200 = $1,000', 'IVA = $1,000 × 19% = $190', 'Total = $1,000 + $190']
        },
        {
          id: 'step2',
          task: 'El cliente devuelve 2 licencias. ¿Qué documento debes emitir?',
          validation: 'multiple-choice',
          options: [
            'Una nueva factura',
            'Una nota de crédito',
            'Un recibo',
            'No se emite nada'
          ],
          correct: 1
        },
        {
          id: 'step3',
          task: 'El cliente paga $500 de los $714 que quedaron pendientes. ¿Cuál es el estado de la factura?',
          validation: 'multiple-choice',
          options: [
            'Borrador',
            'Pagada',
            'Pago parcial',
            'Cancelada'
          ],
          correct: 2
        }
      ]
    }
  },

  // Agregar más contenido para las demás lecciones...
  'sales-001': {
    title: 'Configuración del Módulo de Ventas',
    introduction: `
      El módulo de Ventas de Odoo es tu herramienta principal para gestionar todo el ciclo comercial,
      desde la cotización hasta el cierre de la venta. Una configuración adecuada te permitirá trabajar
      de manera más eficiente y personalizar el módulo según tus necesidades.
    `,
    sections: [
      {
        title: '1. Configuración General',
        content: `
          Antes de comenzar a vender, es importante configurar correctamente el módulo.

          **Configuraciones clave:**
          - Moneda y tasas de cambio
          - Términos y condiciones de venta
          - Política de entrega
          - Política de facturación
          - Firma digital para cotizaciones
        `,
        example: `
          📍 Ruta en Odoo: Ventas > Configuración > Ajustes

          Configuraciones recomendadas:

          ✓ Cotizaciones:
            - Validez por defecto: 30 días
            - Bloquear cotizaciones confirmadas: Sí
            - Firmas en línea: Activado

          ✓ Facturación:
            - Política por defecto: "Al confirmar pedido"
            - Términos de pago: 30 días

          ✓ Entrega:
            - Dirección de envío: Por pedido
            - Métodos de envío: Configurar transportistas
        `,
        tips: [
          'Define claramente tus términos y condiciones antes de empezar',
          'La firma digital en cotizaciones agiliza el proceso de aprobación',
          'Configura plantillas de email para comunicación automatizada'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué es importante configurar la validez de las cotizaciones?',
          options: [
            'Para que se borren automáticamente',
            'Para que los precios y condiciones solo sean válidos por un tiempo determinado',
            'No es importante',
            'Para cobrar más caro'
          ],
          correct: 1,
          explanation: 'La validez de las cotizaciones protege a la empresa de cambios en precios, costos o condiciones del mercado.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Configuración Básica',
      description: 'Configura los parámetros básicos del módulo de ventas',
      steps: []
    }
  },

  // Continuación de lecciones de contabilidad
  'acc-003': {
    title: 'Gestión de Facturas de Proveedor',
    introduction: `
      Las facturas de proveedor son esenciales para controlar los gastos de tu empresa. Aprende
      a registrarlas, aprobarlas y gestionarlas de manera eficiente en Odoo 19.
    `,
    sections: [
      {
        title: '1. Registrar Facturas de Compra',
        content: `
          El registro correcto de facturas de proveedor es fundamental para el control de gastos.

          **Métodos de registro:**
          - Manual: Registrar facturas recibidas directamente
          - Desde orden de compra: Vincular con órdenes existentes
          - OCR/Digitalización: Escanear y extraer datos automáticamente
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Proveedores > Facturas

          **Crear factura de proveedor:**

          ~~~text
          Proveedor: Software S.A.
          Fecha factura: 20/01/2025
          Fecha vencimiento: 20/02/2025 (30 días)

          Líneas:
          - Licencias Office 365 | 10 unidades | $50/unidad | IVA 19% = $595
          - Soporte técnico      | 1 servicio  | $200       | IVA 19% = $238

          Subtotal: $700
          IVA (19%): $133
          TOTAL: $833
          ~~~

          **⚠️ IMPORTANTE:**
          - Verificar que el NIF del proveedor sea correcto
          - Adjuntar PDF de la factura original
          - Validar que los montos coincidan
        `,
        tips: [
          'Siempre adjunta la factura original en PDF',
          'Verifica que los datos fiscales del proveedor estén actualizados',
          'Revisa las condiciones de pago antes de confirmar',
          'Usa las etiquetas analíticas para mejor control de gastos'
        ]
      },
      {
        title: '2. Validación y Aprobación',
        content: `
          Implementa un flujo de aprobación para controlar los gastos de la empresa.

          **Niveles de aprobación:**
          - Revisión operativa: Verifica que se recibió el producto/servicio
          - Validación contable: Confirma que la factura es correcta
          - Aprobación gerencial: Para montos superiores a un límite
        `,
        example: `
          📍 Ruta en Odoo: Factura de proveedor > Estado

          **Flujo típico:**

          **1. BORRADOR**
             - Factura ingresada pero no confirmada
             - Se pueden hacer cambios
             - No afecta contabilidad

          **2. PUBLICADA**
             - Factura confirmada
             - Genera asiento contable
             - Ya no se puede editar (solo cancelar)

          **3. PAGO PROGRAMADO**
             - Pago ordenado pero no ejecutado
             - En cola para pago

          **4. PAGADA**
             - Pago registrado y confirmado
             - Factura cerrada

          **Validaciones recomendadas:**
          ✓ ¿La orden de compra existe?
          ✓ ¿Los productos/servicios fueron recibidos?
          ✓ ¿Los precios son correctos?
          ✓ ¿El proveedor está aprobado?
        `,
        tips: [
          'Define límites de aprobación por usuario',
          'Usa reglas de validación automática para facturas pequeñas',
          'Configura notificaciones por email para aprobadores',
          'Mantén un log de quién aprobó cada factura'
        ]
      },
      {
        title: '3. Gestión de Pagos a Proveedores',
        content: `
          Organiza y ejecuta los pagos a proveedores de manera eficiente.

          **Métodos de pago:**
          - Transferencia bancaria
          - Cheque
          - Efectivo
          - Tarjeta de crédito empresarial
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Proveedores > Pagos

          **Registro de pago:**

          ~~~text
          Proveedor: Software S.A.
          Facturas pendientes: 2
            - Factura 001: $833
            - Factura 002: $1,200
          Total adeudado: $2,033
          ~~~

          **Pagar:**

          1. Seleccionar facturas a pagar
          2. Elegir método: Transferencia bancaria
          3. Seleccionar cuenta bancaria
          4. Fecha de pago: 20/01/2025
          5. Referencia: TRANS-2025-001

          **Pago por lotes:**
          - Selecciona múltiples facturas
          - Genera archivo bancario SEPA (Europa) o NACHA (USA)
          - Sube al banco para procesamiento masivo
        `,
        tips: [
          'Programa pagos para aprovechar descuentos por pronto pago',
          'Revisa el reporte de antigüedad para priorizar pagos',
          'Usa la reconciliación automática después de pagar',
          'Mantén comunicación con proveedores sobre fechas de pago'
        ]
      },
      {
        title: '4. Control de Gastos',
        content: `
          Analiza y controla los gastos de tu empresa con las herramientas de Odoo.

          **Análisis de gastos:**
          - Por proveedor
          - Por categoría de producto
          - Por centro de costos
          - Por período
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Gastos

          **Reporte mensual de gastos (Enero 2025):**

          | Categoría               | Monto    | % Total |
          | ----------------------- | -------- | ------- |
          | Software y licencias    | $2,500   | 25%     |
          | Servicios profesionales | $3,000   | 30%     |
          | Marketing y publicidad  | $1,500   | 15%     |
          | Oficina y suministros   | $1,000   | 10%     |
          | Otros                   | $2,000   | 20%     |
          | **TOTAL**               | **$10,000** | **100%** |

          **Comparativa año anterior:**
          - Enero 2024: $8,500
          - Incremento: 17.6% 📈

          **Análisis:**
          - Incremento en software por nuevas herramientas
          - Servicios profesionales estables
          - Oportunidad de reducir "Otros" investigando detalle
        `,
        tips: [
          'Establece presupuestos por categoría y monitorea variaciones',
          'Revisa gastos recurrentes mensualmente para optimizar',
          'Usa etiquetas analíticas para seguimiento por proyecto',
          'Genera reportes automáticos para la gerencia'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la principal diferencia entre una factura en borrador y una publicada?',
          options: [
            'El color en la pantalla',
            'La factura en borrador no genera asientos contables y puede editarse',
            'No hay diferencia',
            'Solo el gerente puede ver las publicadas'
          ],
          correct: 1,
          explanation: 'Una factura en borrador no afecta la contabilidad y puede modificarse libremente. Al publicarla, se genera el asiento contable y ya no puede editarse directamente.'
        },
        {
          id: 'q2',
          question: '¿Por qué es importante validar que se recibieron los productos antes de aprobar una factura?',
          options: [
            'No es importante',
            'Para evitar pagar por productos/servicios no recibidos',
            'Solo es importante para gastos grandes',
            'Es solo un requisito administrativo sin valor'
          ],
          correct: 1,
          explanation: 'Validar la recepción antes de aprobar evita pagos incorrectos y asegura que solo pagas por lo que realmente recibiste.'
        },
        {
          id: 'q3',
          question: '¿Qué ventaja tiene el pago por lotes de facturas?',
          options: [
            'Es más caro pero más rápido',
            'Permite pagar múltiples facturas con un solo archivo bancario',
            'Solo funciona los viernes',
            'No tiene ninguna ventaja'
          ],
          correct: 1,
          explanation: 'El pago por lotes te permite generar un solo archivo bancario para pagar múltiples facturas a diferentes proveedores, ahorrando tiempo y esfuerzo.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Práctico: Ciclo Completo de Factura de Proveedor',
      description: 'Simula el proceso completo de gestión de una factura de proveedor',
      steps: []
    }
  },

  'fleet-001': {
    title: 'Configuración del Módulo de Flota',
    introduction: `El módulo de Flota de Odoo te permite gestionar todos los vehículos de tu empresa, desde el registro inicial hasta el control de mantenimientos y costos operativos.`,
    sections: [
      {
        title: '1. Configuración Inicial',
        content: `Configurar correctamente el módulo es el primer paso para una gestión eficiente de tu flota vehicular.

**Elementos a configurar:**
- **Marcas y modelos** de vehículos
- **Categorías** de vehículos (ligeros, pesados, maquinaria)
- **Tipos de servicio** de mantenimiento
- **Proveedores** de servicio y talleres

**Beneficios de una buena configuración:**
- Registro rápido de nuevos vehículos
- Reportes precisos por categoría
- Control de mantenimientos programados
- Análisis de costos por tipo de vehículo`,
        example: `📍 Ruta en Odoo: Flota > Configuración

**1. Crear categorías de vehículos:**

~~~text
Categoría: Vehículos Ligeros
Descripción: Autos, camionetas y SUVs
Uso: Transporte de personal

Categoría: Vehículos Pesados
Descripción: Camiones y tractocamiones
Uso: Carga y distribución

Categoría: Maquinaria Especial
Descripción: Montacargas, grúas
Uso: Operaciones de almacén
~~~

**2. Configurar marcas y modelos:**

| Marca | Modelos Disponibles |
| --- | --- |
| Toyota | Hilux, Corolla, RAV4 |
| Ford | F-150, Transit, Ranger |
| Mercedes-Benz | Sprinter, Actros |

**3. Tipos de mantenimiento:**

✓ Mantenimiento preventivo (cada 5,000 km)
✓ Cambio de aceite
✓ Revisión de frenos
✓ Alineación y balanceo
✓ Verificación vehicular

**4. Proveedores de servicio:**

~~~text
Proveedor: Taller Mecánico del Norte
Servicios: Mantenimiento general, reparaciones
Contacto: tallernorte@ejemplo.com

Proveedor: Centro de Servicio Ford
Servicios: Mantenimiento oficial, garantías
Contacto: servicio@ford.ejemplo.com
~~~`,
        tips: [
          'Organiza las categorías según el tipo de uso de los vehículos',
          'Mantén actualizada la lista de proveedores de servicio',
          'Configura los tipos de mantenimiento desde el inicio'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Para qué sirven las categorías de vehículos?',
          options: [
            'Solo para decoración',
            'Para organizar y clasificar la flota según características comunes',
            'Para cobrar peajes',
            'No sirven para nada'
          ],
          correct: 1,
          explanation: 'Las categorías ayudan a organizar la flota y facilitan la generación de reportes y análisis por tipo de vehículo.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Configurar tu Flota',
      description: 'Configura los elementos básicos del módulo de flota',
      steps: []
    }
  },

  // ========================================
  // CONTABILIDAD - LECCIONES RESTANTES
  // ========================================

  'acc-004': {
    title: 'Conciliación Bancaria',
    introduction: `
      La conciliación bancaria es esencial para mantener la integridad de tus registros contables.
      Aprende a importar extractos bancarios y conciliar transacciones automática y manualmente.
    `,
    sections: [
      {
        title: '1. Importar Extractos Bancarios',
        content: `
          Odoo permite importar extractos de diferentes formatos para agilizar la conciliación.

          **Formatos soportados:**
          - CSV (valores separados por comas)
          - OFX/QFX (formato bancario estándar)
          - CAMT.053 (formato europeo SEPA)
          - Formatos específicos de bancos
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Bancos > Importar extracto

          **Datos del extracto de Banco Santander (Enero 2025):**

          | Fecha      | Descripción                    | Débito  | Crédito | Saldo   |
          | ---------- | ------------------------------ | ------- | ------- | ------- |
          | 2025-01-05 | Pago Odoo S.A. - Licencias     | 1,089   |         | 123,911 |
          | 2025-01-10 | Cobro INV-2025-001 TechCorp    |         | 18,876  | 142,787 |
          | 2025-01-15 | Pago nóminas enero             | 28,000  |         | 114,787 |
          | 2025-01-20 | Cobro INV-2025-002 Distribuid. |         | 968     | 115,755 |
          | 2025-01-25 | Pago Sistemas Pro - Hardware   | 1,815   |         | 113,940 |

          **Pasos de importación:**

          1. Descargar extracto del banco en formato CSV/OFX
          2. En Odoo: Contabilidad > Bancos > [Tu banco]
          3. Botón "Importar"
          4. Seleccionar archivo
          5. Mapear campos si es necesario
          6. Confirmar importación
        `,
        tips: [
          'Importa extractos regularmente (semanal o mensual)',
          'Verifica que el saldo final coincida con el del banco',
          'Guarda copias de los archivos de extracto',
          'Configura el formato de importación una sola vez por banco'
        ]
      },
      {
        title: '2. Conciliación Automática',
        content: `
          Odoo puede conciliar automáticamente transacciones que coinciden con facturas y pagos.

          **Reglas de conciliación automática:**
          - Coincidencia por monto exacto
          - Coincidencia por referencia de pago
          - Coincidencia por número de factura
          - Reglas personalizadas
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Configuración > Reglas de conciliación

          **Ejemplo de regla automática:**

          ~~~text
          Nombre: "Cobros de clientes"
          Tipo: Extracto bancario de entrada
          Cuenta contable: Clientes (1120)

          Condiciones:
          - Monto > 0 (entrada de dinero)
          - Buscar factura con monto exacto
          - Buscar referencia que contenga "INV"
          ~~~

          **Resultado de conciliación automática:**
          ✅ Transacción: +18,876 EUR - Ref: "INV-2025-001"
          ✅ Conciliada con: Factura INV-2025-001 (TechCorp)
          ✅ Estado: Conciliada automáticamente

          **Ahorro de tiempo:** ~90% de transacciones conciliadas automáticamente
        `,
        tips: [
          'Configura reglas para tus transacciones más frecuentes',
          'Revisa las conciliaciones automáticas periódicamente',
          'Usa referencias claras en pagos para facilitar matching',
          'Ajusta reglas basándote en patrones recurrentes'
        ]
      },
      {
        title: '3. Conciliación Manual',
        content: `
          Algunas transacciones requieren intervención manual para su conciliación.

          **Casos que requieren conciliación manual:**
          - Pagos parciales
          - Múltiples facturas en un solo pago
          - Transacciones con diferencias de cambio
          - Comisiones y cargos bancarios
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Bancos > Conciliar

          **Caso práctico - Pago múltiple:**

          **Transacción bancaria:**
          - Pago a "Odoo S.A." por 2,178 EUR

          **Facturas pendientes:**
          - BILL-2025-001: 1,089 EUR
          - BILL-2025-003: 1,089 EUR

          **Proceso de conciliación:**

          1. Seleccionar transacción bancaria pendiente
          2. Buscar facturas del proveedor
          3. Marcar ambas facturas (1,089 + 1,089 = 2,178)
          4. Verificar que el total coincide
          5. Clic en "Validar"

          ✅ **Resultado:** 2 facturas conciliadas con 1 pago

          **Caso con diferencia:**

          ~~~text
          Transacción: 100 EUR
          Factura: 102 EUR
          Diferencia: -2 EUR (comisión bancaria)
          ~~~

          **Solución:**

          1. Seleccionar transacción y factura
          2. Registrar diferencia como "Comisión bancaria"
          3. Cuenta: Gastos bancarios (6280)
          4. Validar
        `,
        tips: [
          'Investiga las diferencias antes de conciliar',
          'Documenta el motivo de las diferencias',
          'Crea cuentas específicas para comisiones y cargos',
          'No fuerces conciliaciones incorrectas'
        ]
      },
      {
        title: '4. Resolución de Diferencias',
        content: `
          Aprende a identificar y resolver discrepancias entre tus registros y el banco.

          **Tipos de diferencias comunes:**
          - Pagos registrados pero no procesados
          - Cobros procesados pero no registrados
          - Comisiones bancarias no contabilizadas
          - Errores de captura
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Bancos > Diferencias

          **Análisis de diferencias (31/01/2025):**

          ~~~text
          Saldo según Odoo:     115,940 EUR
          Saldo según banco:    113,940 EUR
          Diferencia:            2,000 EUR
          ~~~

          **Investigación:**

          1. Revisar transacciones no conciliadas en Odoo:
             ✓ Pago cheque #1234 a proveedor: 2,000 EUR (sin cobrar)

          2. Revisar transacciones bancarias no registradas:
             - Ninguna encontrada

          3. Verificar fechas:
             ✓ Cheque emitido 30/01 pero cobrado 02/02

          **Resolución:**
          - El cheque se cobrará en febrero
          - Diferencia temporal normal
          - Documentar en "Partidas en tránsito"
          - Se conciliará en próximo extracto

          **Reporte de conciliación:**

          ~~~text
          Saldo banco:              113,940 EUR
          + Cheques en tránsito:      2,000 EUR
          - Depósitos pendientes:         0 EUR
          = Saldo según libros:     115,940 EUR ✅
          ~~~
        `,
        tips: [
          'Concilia al menos mensualmente',
          'Documenta todas las partidas en tránsito',
          'Investiga diferencias inmediatamente',
          'Mantén comunicación con el banco para aclarar dudas'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué porcentaje de transacciones puede conciliar Odoo automáticamente con reglas bien configuradas?',
          options: [
            'Menos del 50%',
            'Aproximadamente 90%',
            '100% siempre',
            'No puede conciliar automáticamente'
          ],
          correct: 1,
          explanation: 'Con reglas de conciliación bien configuradas, Odoo puede conciliar automáticamente cerca del 90% de las transacciones, ahorrando tiempo significativo.'
        },
        {
          id: 'q2',
          question: '¿Qué debes hacer si encuentras una diferencia entre el saldo bancario y tus registros?',
          options: [
            'Ignorarla si es pequeña',
            'Investigar la causa y documentarla',
            'Ajustar el saldo forzadamente',
            'Esperar a que se resuelva sola'
          ],
          correct: 1,
          explanation: 'Siempre debes investigar las diferencias, sin importar el monto, para mantener la integridad contable y detectar posibles errores o fraudes.'
        },
        {
          id: 'q3',
          question: '¿Qué son las "partidas en tránsito"?',
          options: [
            'Errores contables',
            'Transacciones registradas en un sistema pero aún no procesadas en el otro',
            'Facturas canceladas',
            'Pagos rechazados'
          ],
          correct: 1,
          explanation: 'Las partidas en tránsito son transacciones registradas en tus libros (como cheques emitidos) que aún no aparecen en el extracto bancario porque no se han procesado.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Práctico: Conciliación Bancaria Completa',
      description: 'Realiza una conciliación bancaria usando datos de Mentora Consulting',
      steps: []
    }
  },

  'acc-005': {
    title: 'Reportes Financieros',
    introduction: `
      Los reportes financieros son fundamentales para la toma de decisiones. Aprende a generar
      y analizar el Balance General, Estado de Resultados y Flujo de Caja en Odoo 19.
    `,
    sections: [
      {
        title: '1. Balance General',
        content: `
          El Balance General muestra la situación financiera de la empresa en un momento específico.

          **Componentes del Balance:**
          - Activos: Lo que la empresa posee
          - Pasivos: Lo que la empresa debe
          - Patrimonio: Capital y utilidades

          Ecuación contable: Activos = Pasivos + Patrimonio
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Balance General

          **MENTORA CONSULTING S.A.**
          **Balance General al 31/01/2025**
          (Cifras en EUR)

          ~~~text
          ACTIVOS
          Activo Corriente
            Bancos y equivalentes        250,000
            Cuentas por cobrar clientes   19,844
            Otros activos corrientes        5,000
            Total Activo Corriente       274,844

          Activo No Corriente
            Vehículos                     84,000
            Depreciación acumulada       (12,000)
            Equipos de oficina            25,000
            Depreciación acumulada        (5,000)
            Total Activo No Corriente     92,000

          TOTAL ACTIVOS                  366,844

          PASIVOS
          Pasivo Corriente
            Cuentas por pagar              2,178
            Nómina por pagar              28,000
            Impuestos por pagar            8,500
            Total Pasivo Corriente        38,678

          TOTAL PASIVOS                   38,678

          PATRIMONIO
            Capital social               250,000
            Utilidades acumuladas         50,000
            Utilidad del período          28,166
            Total Patrimonio             328,166

          TOTAL PASIVO + PATRIMONIO      366,844 ✅
          ~~~

          **Análisis:**
          - Liquidez: 274,844 / 38,678 = 7.1 (Excelente)
          - Endeudamiento: 38,678 / 366,844 = 10.5% (Bajo)
          - ROE: 28,166 / 328,166 = 8.6% (Bueno)
        `,
        tips: [
          'Genera el balance mensualmente para monitorear tendencias',
          'Compara con períodos anteriores',
          'Calcula ratios financieros clave',
          'Usa filtros de comparación para ver evolución'
        ]
      },
      {
        title: '2. Estado de Resultados',
        content: `
          El Estado de Resultados (P&L) muestra la rentabilidad en un período.

          **Estructura:**
          - Ingresos
          - Costo de ventas
          - Utilidad bruta
          - Gastos operativos
          - Utilidad neta
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Estado de Resultados

          **MENTORA CONSULTING S.A.**
          **Estado de Resultados - Enero 2025**
          (Cifras en EUR)

          ~~~text
          INGRESOS
            Consultoría Estratégica        35,000
            Implementación Odoo            45,000
            Soporte Técnico                12,000
            Capacitación                    8,000
            Total Ingresos                100,000

          COSTO DE VENTAS
            Salarios consultores          (32,000)
            Licencias software             (2,500)
            Costos directos               (10,000)
            Total Costo de Ventas         (44,500)

          UTILIDAD BRUTA                   55,500
          Margen bruto: 55.5%

          GASTOS OPERATIVOS
            Salarios administrativos      (12,000)
            Arriendo oficina               (3,000)
            Servicios (luz, agua, etc)     (1,500)
            Marketing y publicidad         (2,800)
            Depreciación                   (1,500)
            Gastos varios                  (2,534)
            Total Gastos Operativos       (23,334)

          UTILIDAD OPERATIVA               32,166
          Margen operativo: 32.2%

          OTROS INGRESOS/GASTOS
            Intereses ganados                 500
            Comisiones bancarias             (500)
            Total Otros                         0

          UTILIDAD ANTES DE IMPUESTOS      32,166

          IMPUESTOS (12%)                  (4,000)

          UTILIDAD NETA                    28,166
          Margen neto: 28.2%
          ~~~

          **KPIs:**
          ✅ Margen bruto > 50% (55.5%)
          ✅ Margen operativo > 25% (32.2%)
          ✅ Margen neto > 15% (28.2%)
        `,
        tips: [
          'Analiza márgenes por tipo de servicio',
          'Compara con presupuesto mensual',
          'Identifica tendencias de ingresos y gastos',
          'Establece metas de rentabilidad'
        ]
      },
      {
        title: '3. Flujo de Caja',
        content: `
          El Flujo de Caja muestra el movimiento de efectivo en un período.

          **Categorías:**
          - Actividades operativas
          - Actividades de inversión
          - Actividades de financiamiento
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Flujo de Caja

          **MENTORA CONSULTING S.A.**
          **Flujo de Caja - Enero 2025**
          (Cifras en EUR)

          ~~~text
          SALDO INICIAL (01/01/2025)      225,000

          ACTIVIDADES OPERATIVAS
          Cobros de clientes               85,000
          Pago a proveedores               (8,500)
          Pago nóminas                    (28,000)
          Pago impuestos                   (3,500)
          Otros gastos operativos          (6,000)
          Flujo Operativo Neto             39,000

          ACTIVIDADES DE INVERSIÓN
          Compra equipos                   (5,000)
          Venta activos                         0
          Flujo de Inversión               (5,000)

          ACTIVIDADES DE FINANCIAMIENTO
          Aportes de capital                    0
          Distribución dividendos          (9,000)
          Flujo de Financiamiento          (9,000)

          FLUJO NETO DEL PERÍODO           25,000

          SALDO FINAL (31/01/2025)        250,000
          ~~~

          **Análisis:**
          - Flujo operativo positivo: ✅ Bueno
          - Capacidad de inversión: ✅ Sí
          - Días de caja: 250,000 / (100,000/30) = 75 días
        `,
        tips: [
          'Proyecta flujo de caja a 3-6 meses',
          'Identifica períodos de bajo efectivo',
          'Mantén un colchón de seguridad',
          'Negocia términos de pago favorables'
        ]
      },
      {
        title: '4. Reportes Personalizados',
        content: `
          Crea reportes personalizados según las necesidades de tu negocio.

          **Opciones de personalización:**
          - Filtros por período, cuenta, etiqueta
          - Agrupación por diferentes criterios
          - Comparativas entre períodos
          - Exportación a Excel/PDF
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Reportes > Reportes personalizados

          **Ejemplos de reportes útiles:**

          **1. Análisis por Cliente (Top 5):**
          - TechCorp:        18,876 EUR (38%)
          - Distribuidora:   15,200 EUR (30%)
          - Beta Services:   10,500 EUR (21%)
          - Retail Group:     8,424 EUR (17%)
          - Startups Inn:     2,000 EUR (4%)

          **2. Gastos por Categoría:**
          - Personal:        44,000 EUR (51%)
          - Operaciones:     15,000 EUR (17%)
          - Software:         2,500 EUR (3%)
          - Marketing:        2,800 EUR (3%)
          - Otros:           21,700 EUR (25%)

          **3. Rentabilidad por Servicio:**

          | Servicio            | Ingresos | Costos | Margen |
          | ------------------- | -------- | ------ | ------ |
          | Implementación Odoo | 45,000   | 18,000 | 60%    |
          | Consultoría         | 35,000   | 17,500 | 50%    |
          | Soporte             | 12,000   | 6,000  | 50%    |
          | Capacitación        | 8,000    | 3,000  | 62.5%  |

          **Configuración de reporte:**
          - Período: Mes actual
          - Agrupar por: Tipo de servicio
          - Mostrar: Ingresos, Costos, Margen
          - Ordenar por: Margen descendente
          - Exportar a: Excel para análisis detallado
        `,
        tips: [
          'Crea plantillas de reportes frecuentes',
          'Programa envíos automáticos por email',
          'Usa gráficos para visualizar tendencias',
          'Comparte reportes con stakeholders relevantes'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la ecuación contable fundamental?',
          options: [
            'Ingresos - Gastos = Utilidad',
            'Activos = Pasivos + Patrimonio',
            'Ventas - Costos = Margen',
            'Efectivo + Bancos = Liquidez'
          ],
          correct: 1,
          explanation: 'La ecuación contable fundamental es Activos = Pasivos + Patrimonio. Esta ecuación siempre debe estar en balance.'
        },
        {
          id: 'q2',
          question: '¿Qué mide el margen bruto?',
          options: [
            'La liquidez de la empresa',
            'La diferencia entre ingresos y costo de ventas',
            'El total de activos',
            'La deuda total'
          ],
          correct: 1,
          explanation: 'El margen bruto mide la rentabilidad antes de gastos operativos, calculado como (Ingresos - Costo de Ventas) / Ingresos.'
        },
        {
          id: 'q3',
          question: '¿Por qué es importante el flujo de caja?',
          options: [
            'Solo importa para empresas grandes',
            'Muestra el movimiento real de efectivo, esencial para la liquidez',
            'Es lo mismo que la utilidad neta',
            'No es relevante si hay utilidades'
          ],
          correct: 1,
          explanation: 'El flujo de caja es crítico porque muestra el movimiento real de efectivo. Una empresa puede tener utilidades pero quedarse sin efectivo si los cobros son lentos.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Práctico: Análisis Financiero Completo',
      description: 'Genera y analiza los tres reportes principales de Mentora Consulting',
      steps: []
    }
  },

  'acc-006': {
    title: 'Impuestos y Declaraciones',
    introduction: 'Domina la gestión de impuestos y declaraciones fiscales en Odoo para cumplir con tus obligaciones tributarias de manera eficiente.',
    sections: [
      {
        title: '1. Configuración de Impuestos',
        content: `Configura todos los tipos de impuestos de tu jurisdicción para cumplir con las obligaciones fiscales.

**Conceptos clave:**
- Configurar impuestos por pares (compra/venta)
- Definir cuentas contables correctas
- Establecer porcentajes según normativa vigente`,
        example: `📍 Ruta: Contabilidad > Configuración > Impuestos

**Ejemplo: IVA España 21%**

~~~text
Nombre: IVA 21% Ventas
Tipo: Porcentaje
Importe: 21%
Alcance del impuesto: Ventas
Cuenta: 4770001 IVA Repercutido
~~~

**Par complementario:**

~~~text
Nombre: IVA 21% Compras
Tipo: Porcentaje
Importe: 21%
Alcance del impuesto: Compras
Cuenta: 4720001 IVA Soportado
~~~

✓ Siempre configura pares compra/venta
✓ Usa cuentas contables específicas para cada tipo`,
        tips: ['Configura impuestos por pares compra/venta', 'Valida con tu contador']
      },
      {
        title: '2. Reportes Fiscales',
        content: `Genera declaraciones de impuestos automáticamente desde los movimientos registrados.

**Reportes principales:**
- Declaración de IVA trimestral
- Balance de impuestos
- Libro de ventas e IVA repercutido
- Libro de compras e IVA soportado`,
        example: `📍 Ruta: Contabilidad > Reportes > Declaración de Impuestos

**IVA Trimestral Q1 2025:**

| Concepto | Importe |
| --- | --- |
| Ventas | €100,000 |
| IVA Repercutido (21%) | €21,000 |
| Compras | €25,000 |
| IVA Soportado (21%) | €5,250 |
| **A Pagar** | **€15,750** |

✅ Resultado: Pagar €15,750 a la Agencia Tributaria

**Pasos para generar:**
1. Ir a Reportes > Declaración de Impuestos
2. Seleccionar periodo (Trimestre 1 - 2025)
3. Generar reporte
4. Exportar en formato oficial`,
        tips: ['Declara puntualmente', 'Conserva todos los comprobantes']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué configurar impuestos por pares?', options: ['No es necesario', 'Para separar IVA cobrado vs soportado', 'Solo en Europa', 'Solo empresas grandes'], correct: 1, explanation: 'Necesitas pares para registrar correctamente IVA de ventas e IVA de compras por separado.' }] },
    practicalExercise: { title: 'Ejercicio: Declaración Fiscal', description: 'Genera tu primera declaración de IVA', steps: [] }
  },

  'acc-007': {
    title: 'Alta Manual de Cuentas Bancarias en México',
    introduction: `En México, los tokens bancarios no están habilitados para sincronizar automáticamente con Odoo. Esto significa que debemos dar de alta las cuentas bancarias manualmente y registrar cada movimiento. Esta lección te guiará paso a paso para configurar correctamente tus bancos, efectivo, diarios contables, y lograr que el Balance General y el Dashboard de Contabilidad reflejen tu liquidez real.`,
    sections: [
      {
        title: '1. Entender la Estructura: Plan de Cuentas para Bancos',
        content: `
          El Plan de Cuentas es la columna vertebral de tu contabilidad. Para bancos en México,
          necesitas una estructura jerárquica que separe:
          - Efectivo físico (Caja)
          - Cuentas bancarias (Bancos)

          **Códigos recomendados:**
          - 111.XX = Efectivo y caja chica
          - 112.XX = Cuentas bancarias

          Esta numeración sigue estándares contables mexicanos y facilita reportes fiscales.
        `,
        example: `
          📍 Ruta en Odoo: Contabilidad > Configuración > Plan de Cuentas

          Estructura ideal para México:

          100 - ACTIVO
          └── 110 - Activo Circulante
              ├── 111 - Caja
              │   ├── 111.01 - Caja General
              │   └── 111.02 - Caja Chica
              └── 112 - Bancos
                  ├── 112.01 - BBVA Empresarial - Cta 1234
                  ├── 112.02 - Santander PyME - Cta 5678
                  ├── 112.03 - Banorte Digital - Cta 9012
                  └── 112.04 - Banamex Cuenta 3456

          Con esta estructura:
          ✓ Cuenta 111 = Total efectivo físico
          ✓ Cuenta 112 = Total en todos los bancos
          ✓ Cuenta 110 = Total liquidez (efectivo + bancos)
        `,
        tips: [
          'Usa códigos con punto (112.01) para identificar subcuentas fácilmente',
          'Incluye en el nombre: Banco + Tipo de cuenta + Últimos 4 dígitos',
          'NO uses acentos ni caracteres especiales en los códigos',
          'Mantén numeración consecutiva (01, 02, 03...)'
        ]
      },
      {
        title: '2. Crear Cuentas Contables para Cada Banco',
        content: `
          Cada cuenta bancaria física (la que tienes en el banco real) necesita una cuenta contable en Odoo.

          **Campos obligatorios:**
          - Código: Único, sin duplicados
          - Nombre: Descriptivo
          - Tipo: "Activo Circulante" o "Bank and Cash"
          - Permite conciliación: SIEMPRE activado para bancos

          **¿Por qué "Permite conciliación"?**
          Esto te permite después comparar tu registro en Odoo con el estado de cuenta del banco.
        `,
        example: `
          📍 Ruta: Contabilidad > Configuración > Plan de Cuentas > Crear

          EJEMPLO: Crear cuenta para BBVA
          ─────────────────────────────────
          1. Clic en "Crear"

          2. Llenar formulario:
             Código: 112.01
             Nombre: BBVA Empresarial - Cuenta 0123456789
             Tipo: Activo Circulante (o Bank and Cash)
             ✓ Permite conciliación: ACTIVADO
             Moneda: MXN (o USD si es cuenta en dólares)
             Etiquetas: Banco, Operativa

          3. Clic en "Guardar"

          Repetir para cada banco:
          ┌─────────┬──────────────────────────────┬──────────────────┐
          │ Código  │ Nombre                       │ Tipo             │
          ├─────────┼──────────────────────────────┼──────────────────┤
          │ 112.01  │ BBVA Empresarial - Cta 1234  │ Activo Circulante│
          │ 112.02  │ Santander PyME - Cta 5678    │ Activo Circulante│
          │ 112.03  │ Banorte Digital - Cta 9012   │ Activo Circulante│
          │ 111.01  │ Caja General                 │ Activo Circulante│
          │ 111.02  │ Caja Chica                   │ Activo Circulante│
          └─────────┴──────────────────────────────┴──────────────────┘
        `,
        tips: [
          'Verifica que el código NO exista ya en tu plan de cuentas',
          'Si tienes cuenta en dólares, especifica la moneda USD',
          'Guarda el número de cuenta completo en el nombre para referencia',
          'SIEMPRE activa "Permite conciliación" para cuentas bancarias'
        ]
      },
      {
        title: '3. Configurar Diarios Contables por Banco',
        content: `
          **¿Por qué necesito un diario por cada banco?**

          El diario es el "libro" donde se registran los movimientos. Sin él:
          - No aparecerá en el Dashboard de Contabilidad
          - No podrás registrar movimientos
          - No verás el saldo individual del banco

          **Cada banco = 1 cuenta contable + 1 diario**

          Para efectivo:
          **Cada caja = 1 cuenta contable + 1 diario tipo "Efectivo"**
        `,
        example: `
          📍 Ruta: Contabilidad > Configuración > Diarios > Crear

          EJEMPLO: Crear diario para BBVA
          ─────────────────────────────────
          1. Clic en "Crear"

          2. Pestaña "Información General":
             Nombre del diario: Banco BBVA
             Tipo: Banco ← MUY IMPORTANTE
             Código corto: BBVA (máx 5 caracteres)

          3. Pestaña "Configuración Contable":
             Cuenta bancaria: 112.01 BBVA Empresarial
             (selecciona la que creaste antes)
             Cuenta de suspense: Por defecto
             Cuenta de ganancias: Por defecto

          4. Pestaña "Información Bancaria" (opcional):
             Número de cuenta: 0123456789
             Banco: BBVA Bancomer (selecciona o crea)
             CLABE: 012180001234567890

          5. Clic en "Guardar"

          Resultado en Dashboard:
          ┌─────────────────┐
          │   BANCO BBVA    │
          │    $0.00        │
          │  (listo para    │
          │   movimientos)  │
          └─────────────────┘

          Para CAJA (efectivo):
          ─────────────────────
          Nombre: Caja General
          Tipo: Efectivo ← NO "Banco"
          Código: CAJA
          Cuenta: 111.01 Caja General
        `,
        tips: [
          'El tipo "Banco" es para cuentas bancarias, "Efectivo" es para caja física',
          'El código corto (BBVA, BNRT) aparece en los asientos contables',
          'Guarda la CLABE para referencia en transferencias',
          'Después de guardar, el banco aparecerá en el Dashboard'
        ]
      },
      {
        title: '4. Registrar el Saldo Inicial',
        content: `
          Antes de empezar a registrar movimientos, debes indicar cuánto dinero tienes actualmente
          en cada cuenta. Esto se hace con un "Asiento de Apertura".

          **¿Por qué es importante?**
          Si no registras el saldo inicial, Odoo pensará que tienes $0 en todos los bancos,
          y tus reportes estarán incorrectos.
        `,
        example: `
          📍 Ruta: Contabilidad > Varios > Asientos Contables > Crear

          Asiento de apertura de bancos:
          ───────────────────────────────
          Fecha: 01/01/2025 (inicio de tu contabilidad)
          Referencia: Saldos iniciales de bancos
          Diario: Varios (o Diario de Apertura si existe)

          Líneas del asiento:
          ┌─────────────────────────┬──────────────┬──────────────┐
          │ Cuenta                  │ DEBE         │ HABER        │
          ├─────────────────────────┼──────────────┼──────────────┤
          │ 112.01 BBVA             │ $125,500.00  │              │
          │ 112.02 Santander        │  $45,200.00  │              │
          │ 111.01 Caja General     │   $8,750.00  │              │
          │ 111.02 Caja Chica       │   $2,000.00  │              │
          │ 310.01 Capital Social   │              │ $181,450.00  │
          └─────────────────────────┴──────────────┴──────────────┘

          Total DEBE = Total HABER = $181,450.00 ✓

          ¿Por qué Capital Social?
          Es la cuenta que "aporta" el dinero inicial. Si usas otro método,
          consulta con tu contador.

          Después de confirmar:
          - Dashboard mostrará los saldos correctos
          - Balance General reflejará tu liquidez real
        `,
        tips: [
          'Usa la fecha real en que empiezas a llevar contabilidad en Odoo',
          'Verifica que DEBE = HABER (partida doble)',
          'La cuenta contrapartida puede ser Capital o Resultados Acumulados',
          'Consulta con tu contador si tienes dudas sobre la contrapartida'
        ]
      },
      {
        title: '5. Registrar Movimientos Bancarios Manuales',
        content: `
          Sin sincronización automática, cada depósito, retiro, comisión o interés debes registrarlo tú.

          **Tipos de movimientos comunes:**
          - Depósitos de clientes (entrada)
          - Pagos a proveedores (salida)
          - Comisiones bancarias (salida)
          - Intereses ganados (entrada)
          - Transferencias entre cuentas (interna)

          **Regla de oro:** Registra cada movimiento el mismo día que aparece en tu banca en línea.
        `,
        example: `
          📍 Ruta: Contabilidad > Bancos > [Tu Banco] > Nuevo

          EJEMPLO 1: Depósito de cliente ($15,000)
          ─────────────────────────────────────────
          Fecha: 15/01/2025
          Etiqueta: Pago cliente Empresa ABC - Factura INV/2025/001
          Importe: +15,000.00 (positivo = entrada)
          Cuenta contrapartida: 120.01 Cuentas por Cobrar

          Asiento generado:
          DEBE: 112.01 Banco BBVA......$15,000.00
          HABER: 120.01 Cuentas x Cobrar...$15,000.00

          EJEMPLO 2: Pago a proveedor ($8,500)
          ─────────────────────────────────────
          Fecha: 16/01/2025
          Etiqueta: Pago proveedor Distribuidora XYZ
          Importe: -8,500.00 (negativo = salida)
          Cuenta contrapartida: 201.01 Cuentas por Pagar

          EJEMPLO 3: Comisión bancaria ($250)
          ───────────────────────────────────
          Fecha: 31/01/2025
          Etiqueta: Comisión mensual manejo de cuenta
          Importe: -250.00
          Cuenta contrapartida: 520.01 Gastos Bancarios

          EJEMPLO 4: Intereses ganados ($180)
          ────────────────────────────────────
          Fecha: 31/01/2025
          Etiqueta: Intereses del mes enero
          Importe: +180.00
          Cuenta contrapartida: 410.01 Productos Financieros

          Después de cada registro:
          ✓ El saldo del banco se actualiza automáticamente
          ✓ Aparece en el Dashboard
          ✓ Se refleja en el Balance General
        `,
        tips: [
          'Registra movimientos diariamente para no acumular trabajo',
          'Usa etiquetas descriptivas que identifiquen el movimiento',
          'Guarda comprobantes de cada operación',
          'Al final del mes, compara con tu estado de cuenta bancario'
        ]
      },
      {
        title: '6. Transferencias Entre Cuentas Propias',
        content: `
          Las transferencias entre tus propias cuentas NO son gastos ni ingresos, solo redistribuyes tu dinero.

          **Casos comunes:**
          - Transferencia entre bancos
          - Retiro de banco para caja
          - Depósito de caja a banco
          - Reposición de caja chica

          **Principio clave:** Tu liquidez total NO cambia, solo se mueve de lugar.
        `,
        example: `
          📍 Ruta: Contabilidad > Varios > Asientos Contables > Crear

          CASO 1: Transferencia BBVA → Santander ($20,000)
          ──────────────────────────────────────────────────
          Fecha: 20/01/2025
          Referencia: Transferencia entre cuentas propias
          Diario: Varios

          ┌─────────────────────┬──────────────┬──────────────┐
          │ Cuenta              │ DEBE         │ HABER        │
          ├─────────────────────┼──────────────┼──────────────┤
          │ 112.02 Santander    │ $20,000.00   │              │
          │ 112.01 BBVA         │              │ $20,000.00   │
          └─────────────────────┴──────────────┴──────────────┘

          Resultado:
          • BBVA baja $20,000
          • Santander sube $20,000
          • Total liquidez = IGUAL

          CASO 2: Retiro para caja ($5,000)
          ───────────────────────────────────
          ┌─────────────────────┬──────────────┬──────────────┐
          │ Cuenta              │ DEBE         │ HABER        │
          ├─────────────────────┼──────────────┼──────────────┤
          │ 111.01 Caja General │ $5,000.00    │              │
          │ 112.01 BBVA         │              │ $5,000.00    │
          └─────────────────────┴──────────────┴──────────────┘

          CASO 3: Depósito de ventas del día ($12,350)
          ────────────────────────────────────────────────
          ┌─────────────────────┬──────────────┬──────────────┐
          │ Cuenta              │ DEBE         │ HABER        │
          ├─────────────────────┼──────────────┼──────────────┤
          │ 112.02 Santander    │ $12,350.00   │              │
          │ 111.01 Caja General │              │ $12,350.00   │
          └─────────────────────┴──────────────┴──────────────┘

          Recuerda: DEBE es donde ENTRA, HABER es de donde SALE
        `,
        tips: [
          'DEBE = HABER siempre (partida doble)',
          'No uses cuentas de gastos o ingresos para transferencias internas',
          'Registra la misma fecha del movimiento bancario real',
          'Verifica que los saldos en Dashboard cuadren con tus estados de cuenta'
        ]
      },
      {
        title: '7. Visualizar en Dashboard y Balance General',
        content: `
          El objetivo final es ver:
          1. Cuánto tienes en CADA banco (detalle)
          2. Cuánto tienes en TOTAL en bancos
          3. Cuánto tienes en efectivo físico
          4. Tu liquidez TOTAL (bancos + efectivo)

          Odoo te ofrece múltiples vistas para esto.
        `,
        example: `
          📍 Ruta 1: Contabilidad > Dashboard

          Vista de widgets:
          ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
          │   BANCO BBVA    │ │ BANCO SANTANDER │ │  CAJA GENERAL   │
          │  $125,500.00    │ │   $65,200.00    │ │   $11,750.00    │
          │   ↑ $15,000     │ │   ↑ $20,000     │ │   ↑ $3,000      │
          └─────────────────┘ └─────────────────┘ └─────────────────┘

          📍 Ruta 2: Contabilidad > Reportes > Balance General

          ACTIVO CIRCULANTE:
          ────────────────────────────────────────────
          111 - Caja                         $13,750.00
            111.01 Caja General              $11,750.00
            111.02 Caja Chica                 $2,000.00

          112 - Bancos                      $190,700.00
            112.01 BBVA Empresarial         $125,500.00
            112.02 Santander PyME            $65,200.00
            112.03 Banorte Digital                $0.00

          TOTAL LIQUIDEZ                    $204,450.00
          ────────────────────────────────────────────

          📍 Ruta 3: Haz clic en cualquier widget del Dashboard

          Verás todos los movimientos de ese banco:
          • 15/01 - Depósito cliente ABC +$15,000
          • 16/01 - Pago proveedor XYZ -$8,500
          • 20/01 - Transferencia a Santander -$20,000
          • 31/01 - Comisión mensual -$250
          • 31/01 - Intereses +$180

          Saldo final: $125,500.00 ✓

          ¿No aparece un banco en el Dashboard?
          • Verifica que tenga diario tipo "Banco" o "Efectivo"
          • Asegura que tenga cuenta contable asignada
          • Revisa que no esté archivado
        `,
        tips: [
          'Revisa el Dashboard diariamente',
          'Compara SIEMPRE con tus estados de cuenta bancarios',
          'Si hay diferencias, revisa movimientos faltantes',
          'El Balance General es tu reporte oficial para fines fiscales'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué en México debemos dar de alta los bancos manualmente en Odoo?',
          options: [
            'Porque es más seguro',
            'Porque los tokens bancarios no están habilitados para sincronización automática',
            'Porque Odoo no tiene esa función',
            'Porque es más barato'
          ],
          correct: 1,
          explanation: 'En México, los bancos no proporcionan tokens de sincronización automática con ERPs como Odoo, así que debemos configurar todo manualmente.'
        },
        {
          id: 'q2',
          question: '¿Qué código de cuenta recomendamos usar para bancos en el Plan de Cuentas?',
          options: [
            '100.XX',
            '111.XX',
            '112.XX',
            '200.XX'
          ],
          correct: 2,
          explanation: 'El código 112.XX es para cuentas bancarias, siguiendo la estructura: 100 Activo > 110 Circulante > 112 Bancos > 112.01 Banco específico.'
        },
        {
          id: 'q3',
          question: '¿Qué tipo de diario debe tener cada cuenta bancaria?',
          options: [
            'Tipo "Ventas"',
            'Tipo "Compras"',
            'Tipo "Banco"',
            'Tipo "Varios"'
          ],
          correct: 2,
          explanation: 'El diario tipo "Banco" es específico para cuentas bancarias y permite que aparezcan en el Dashboard y se puedan registrar movimientos.'
        },
        {
          id: 'q4',
          question: 'Al registrar una comisión bancaria de $150, ¿qué importe pones?',
          options: [
            '+150.00 (positivo)',
            '-150.00 (negativo)',
            '150.00 sin signo',
            'Cualquiera funciona'
          ],
          correct: 1,
          explanation: 'Las salidas de dinero se registran con importe negativo (-), las entradas con positivo (+). La comisión es una salida.'
        },
        {
          id: 'q5',
          question: '¿Qué campo DEBE estar activado en las cuentas contables de banco?',
          options: [
            'Permite eliminación',
            'Permite conciliación',
            'Permite duplicados',
            'Permite archivado'
          ],
          correct: 1,
          explanation: 'Permite conciliación te permitirá comparar los movimientos de Odoo con tu estado de cuenta bancario real.'
        },
        {
          id: 'q6',
          question: 'Al transferir $10,000 de BBVA a Santander, ¿qué pasa con tu liquidez total?',
          options: [
            'Aumenta en $10,000',
            'Disminuye en $10,000',
            'Se mantiene igual',
            'Se duplica'
          ],
          correct: 2,
          explanation: 'Las transferencias entre cuentas propias no cambian tu liquidez total, solo redistribuyen el dinero.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio Completo: Alta de Bancos para PyME Mexicana',
      description: 'Configura la contabilidad bancaria completa para una empresa ficticia.',
      steps: [
        {
          id: 'step1',
          task: 'La empresa "Distribuidora Norte S.A. de C.V." tiene estos bancos:\n- BBVA con saldo $85,000\n- Banorte con saldo $42,500\n- Caja chica con $3,000\n\nCrea las 3 cuentas contables con los códigos correctos.',
          validation: 'multiple-choice',
          options: [
            '112.01 BBVA, 112.02 Banorte, 111.02 Caja Chica',
            '100.01 BBVA, 100.02 Banorte, 100.03 Caja',
            '500.01 BBVA, 500.02 Banorte, 500.03 Caja',
            '200.01 BBVA, 200.02 Banorte, 200.03 Caja'
          ],
          correct: 0
        },
        {
          id: 'step2',
          task: 'Crea los diarios correspondientes. ¿Qué tipo de diario usarás para la Caja Chica?',
          validation: 'multiple-choice',
          options: [
            'Tipo Banco',
            'Tipo Efectivo',
            'Tipo Ventas',
            'Tipo Varios'
          ],
          correct: 1
        },
        {
          id: 'step3',
          task: 'Registra este movimiento en BBVA:\n"Hoy el cliente Ferretería López depositó $12,000 para pagar su factura".\n¿El importe debe ser positivo o negativo?',
          validation: 'text',
          correctAnswer: 'positivo',
          hints: ['Es dinero que ENTRA al banco', 'Las entradas son con signo +']
        },
        {
          id: 'step4',
          task: 'Necesitas transferir $15,000 de BBVA a Banorte. En el asiento contable:\n¿Cuál cuenta va en DEBE y cuál en HABER?',
          validation: 'multiple-choice',
          options: [
            'DEBE: Banorte, HABER: BBVA',
            'DEBE: BBVA, HABER: Banorte',
            'DEBE: Ambos, HABER: Ninguno',
            'DEBE: Ninguno, HABER: Ambos'
          ],
          correct: 0
        },
        {
          id: 'step5',
          task: 'Después de configurar todo, ¿dónde verificas que el saldo total de bancos + efectivo sea correcto?',
          validation: 'text',
          correctAnswer: 'Balance General',
          hints: ['Es un reporte financiero oficial', 'Muestra Activo, Pasivo y Capital']
        }
      ]
    }
  },

  // ========================================
  // VENTAS - TODAS LAS LECCIONES
  // ========================================

  'sales-002': {
    title: 'Gestión de Cotizaciones',
    introduction: `
      Las cotizaciones son el primer paso formal en tu proceso de ventas. Una cotización bien estructurada
      transmite profesionalismo y claridad, aumentando tus posibilidades de cerrar la venta.
    `,
    sections: [
      {
        title: '1. Crear Cotizaciones',
        content: `
          Genera cotizaciones profesionales que impresionen a tus clientes.

          **Elementos clave de una cotización:**
          - Cliente y datos de contacto
          - Productos o servicios detallados
          - Precios unitarios y totales
          - Validez de la oferta
          - Términos de pago
          - Términos y condiciones
        `,
        example: `
          📍 Ruta en Odoo: Ventas > Cotizaciones > Crear

          Cotización para TechCorp:

          **Datos del cliente:**
          Cliente: TechCorp Solutions
          Contacto: María García
          Email: maria@techcorp.com
          Fecha: 15/01/2025

          **Líneas de cotización:**
          ┌─────────────────────────┬──────┬──────────┬───────────┐
          │ Producto/Servicio       │ Cant │ Precio/U │ Total     │
          ├─────────────────────────┼──────┼──────────┼───────────┤
          │ Implementación Odoo     │ 80h  │ 120 EUR  │ 9,600 EUR │
          │ Módulos incluidos:      │      │          │           │
          │ - Ventas                │      │          │           │
          │ - CRM                   │      │          │           │
          │ - Contabilidad          │      │          │           │
          └─────────────────────────┴──────┴──────────┴───────────┘

          **Totales:**
          Subtotal:        9,600 EUR
          IVA (21%):       2,016 EUR
          TOTAL:          11,616 EUR

          **Condiciones:**
          ✓ Vigencia: 30 días
          ✓ Términos de pago: 50% adelanto, 50% al finalizar
          ✓ Tiempo de implementación: 6 semanas
        `,
        tips: [
          'Usa plantillas para cotizaciones recurrentes y ahorra tiempo',
          'Incluye términos y condiciones claros para evitar malentendidos',
          'Añade notas internas para el equipo de ventas',
          'Configura firmas digitales para aprobación rápida'
        ]
      },
      {
        title: '2. Productos Opcionales',
        content: `
          Los productos opcionales te permiten ofrecer servicios adicionales sin aumentar el precio base.

          **Ventajas de los opcionales:**
          - Cliente personaliza su compra
          - Aumentas el ticket promedio
          - No presionas al cliente
          - Mayor flexibilidad en la oferta
        `,
        example: `
          📍 Ruta: Cotización > Pestaña "Productos Opcionales"

          **Paquete base:**
          Implementación Odoo        9,600 EUR

          **Productos opcionales disponibles:**
          ┌────────────────────────────────┬───────────┬──────────┐
          │ Producto Opcional              │ Precio    │ Margen   │
          ├────────────────────────────────┼───────────┼──────────┤
          │ Capacitación adicional (8h)    │ 1,200 EUR │ 70%      │
          │ Soporte extendido 6 meses      │ 2,400 EUR │ 80%      │
          │ Personalización avanzada       │ 1,800 EUR │ 65%      │
          │ Migración de datos legacy      │ 3,000 EUR │ 60%      │
          └────────────────────────────────┴───────────┴──────────┘

          **Resultado:**
          Si cliente elige 2 opcionales:
          Base:         9,600 EUR
          Opcionales:   3,600 EUR
          Nuevo total: 13,200 EUR (+37.5%)
        `,
        tips: [
          'Usa opcionales para servicios con alto margen',
          'Máximo 3-5 opcionales para no abrumar al cliente',
          'Destaca el valor agregado de cada opcional',
          'Analiza qué opcionales se eligen más para mejorar tu oferta'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la ventaja principal de productos opcionales?',
          options: [
            'No tienen ninguna ventaja',
            'Permiten al cliente personalizar y aumentan el valor promedio de venta',
            'Solo sirven para productos físicos',
            'Complican el proceso de venta'
          ],
          correct: 1,
          explanation: 'Los opcionales dan flexibilidad al cliente para personalizar su compra y te dan la oportunidad de aumentar el valor de la venta sin presionar.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Cotización Completa con Opcionales',
      description: 'Crea una cotización profesional para Distribuidora ABC con productos opcionales',
      steps: []
    }
  },

  'sales-003': {
    title: 'Pedidos de Venta',
    introduction: `
      Una vez que el cliente aprueba tu cotización, es momento de convertirla en un pedido de venta.
      Este pedido activa todo el proceso operativo: reserva de productos, programación de entregas,
      y facturación.
    `,
    sections: [
      {
        title: '1. Confirmar Pedidos',
        content: `
          La confirmación de un pedido es un paso crítico que compromete recursos de la empresa.

          **¿Qué sucede al confirmar un pedido?**
          - Se genera un número de pedido de venta único
          - Se reservan productos del inventario (si aplica)
          - Se programa la entrega o ejecución del servicio
          - Se bloquea el precio y condiciones
          - Se activa el proceso de facturación
        `,
        example: `
          📍 Ruta en Odoo: Ventas > Cotizaciones > [Seleccionar] > Confirmar

          **Flujo de conversión:**

          Cotización #S00045
          → Botón "Confirmar venta"
          → Pedido de venta #SO00123

          **Estado del pedido:**
          Estado: Pedido de venta
          Cliente: TechCorp Solutions
          Fecha pedido: 18/01/2025
          Fecha esperada: 15/02/2025
          Total: 11,616 EUR

          **Acciones activadas:**
          ✓ Productos/servicios reservados
          ✓ Entrega programada: 15/02/2025
          ✓ Facturación: Según política (50% adelanto)
          ✓ Notificación al cliente enviada
          ✓ Equipo de operaciones alertado

          **Verificaciones antes de confirmar:**
          ✓ ¿Cliente aceptó la cotización?
          ✓ ¿Stock disponible? (productos)
          ✓ ¿Equipo disponible? (servicios)
          ✓ ¿Fechas realistas?
          ✓ ¿Términos de pago claros?
        `,
        tips: [
          'Confirma SOLO cuando el cliente ha aceptado formalmente',
          'Verifica disponibilidad de stock antes de confirmar',
          'Para servicios, valida capacidad del equipo',
          'Comunica al cliente el número de pedido por email'
        ]
      },
      {
        title: '2. Gestionar Entregas',
        content: `
          Programa y ejecuta las entregas de productos o ejecución de servicios de manera organizada.

          **Tipos de entrega:**
          - Productos físicos: Almacén genera orden de entrega
          - Servicios: Planificación de ejecución por fases
          - Mixto: Coordinación de ambos
        `,
        example: `
          📍 Ruta: Ventas > Pedidos > [Pedido] > Pestaña "Entrega"

          **Ejemplo: Servicio de implementación**

          Pedido: #SO00123
          Cliente: TechCorp Solutions
          Proyecto: Implementación Odoo

          **Planificación de fases:**
          ┌────────┬─────────────────────┬─────────────┬──────────┐
          │ Fase   │ Descripción         │ Período     │ Estado   │
          ├────────┼─────────────────────┼─────────────┼──────────┤
          │ Fase 1 │ Análisis requisitos │ Semana 1-2  │ ✅ Lista │
          │ Fase 2 │ Configuración       │ Semana 3-4  │ 🔄 En curso│
          │ Fase 3 │ Capacitación        │ Semana 5    │ ⏳ Pendiente│
          │ Fase 4 │ Go-Live             │ Semana 6    │ ⏳ Pendiente│
          └────────┴─────────────────────┴─────────────┴──────────┘

          **Para productos físicos:**

          Pedido: #SO00125
          Cliente: Distribuidora ABC
          Productos: 50 unidades Widget Pro

          Flujo de entrega:
          1. Pedido confirmado → Genera orden de entrega
          2. Almacén prepara productos
          3. Transportista recoge
          4. Cliente firma recepción
          5. Entrega marcada como "Hecho"

          **Comunicación con cliente:**
          ✓ Envío automático de fecha estimada
          ✓ Notificación cuando se despacha
          ✓ Actualización si hay retrasos
          ✓ Confirmación de entrega exitosa
        `,
        tips: [
          'Comunica fechas de entrega claramente y confirma con el cliente',
          'Actualiza el estado del pedido regularmente',
          'Para servicios complejos, divide en fases manejables',
          'Programa recordatorios automáticos para seguimiento'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuándo debes confirmar un pedido de venta?',
          options: [
            'Inmediatamente al crear la cotización',
            'Cuando el cliente ha aprobado formalmente la cotización',
            'Al final del mes para consolidar',
            'Nunca, las cotizaciones son suficientes'
          ],
          correct: 1,
          explanation: 'Solo debes confirmar pedidos cuando el cliente ha aprobado formalmente la cotización, ya que al confirmar comprometes recursos y reservas inventario.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Gestión Completa de Pedido',
      description: 'Convierte una cotización en pedido y programa su entrega',
      steps: []
    }
  },

  'sales-004': {
    title: 'Facturación desde Ventas',
    introduction: `
      La facturación es el paso final del ciclo de ventas. Odoo te permite configurar diferentes
      políticas de facturación según tu modelo de negocio: facturación inmediata, por entrega,
      por hitos o con anticipos.
    `,
    sections: [
      {
        title: '1. Políticas de Facturación',
        content: `
          Configura cuándo y cómo se generan las facturas desde pedidos de venta.

          **Políticas disponibles:**
          - Al confirmar pedido: Factura inmediata (servicios)
          - Al entregar: Factura cuando se entrega (productos físicos)
          - Por hitos: Factura al completar fases (proyectos)
          - Con anticipos: Factura parcial inicial + saldo
        `,
        example: `
          📍 Ruta: Ventas > Configuración > Ajustes > Facturación

          **Política 1: Al confirmar pedido**
          Ideal para: Servicios, suscripciones

          Cliente: TechCorp | Servicio: Consultoría
          Total: 5,000 EUR | Factura: INV/2025/001 (inmediata)

          **Política 2: Al entregar productos**
          Cliente: Distribuidora ABC | Productos: 50 unidades
          Total: 7,500 EUR | Factura: al confirmar entrega

          **Política 3: Por hitos**
          Proyecto: Implementación Odoo (11,616 EUR)

          ┌────────┬─────────────────────┬────────────┬──────────┐
          │ Hito   │ Descripción         │ % Factura  │ Monto    │
          ├────────┼─────────────────────┼────────────┼──────────┤
          │ Hito 1 │ Análisis completado │ 50%        │ 5,808 EUR│
          │ Hito 2 │ Go-Live exitoso     │ 50%        │ 5,808 EUR│
          └────────┴─────────────────────┴────────────┴──────────┘

          **Política 4: Con anticipos**
          - Anticipo 30%: 6,000 EUR
          - Anticipo 40%: 8,000 EUR
          - Saldo 30%: 6,000 EUR
        `,
        tips: [
          'Define la política ANTES de confirmar el pedido',
          'Comunica claramente al cliente cuándo recibirá facturas',
          'Para servicios usa "Al confirmar", para productos "Al entregar"',
          'Los hitos mejoran el flujo de caja en proyectos largos'
        ]
      },
      {
        title: '2. Facturación Automática',
        content: `
          Automatiza la generación de facturas para ahorrar tiempo y reducir errores.

          **Ventajas de la automatización:**
          - Facturas generadas sin intervención manual
          - Consistencia en formato y datos
          - Reducción de errores humanos
          - Ahorro significativo de tiempo
        `,
        example: `
          📍 Ruta: Ventas > Pedidos > [Pedido] > Crear factura

          **Proyecto con hitos automáticos:**

          Pedido: #SO00123 | Cliente: TechCorp | Total: 11,616 EUR

          **Hito 1 - Análisis (50%):**
          ✓ Tarea: "Análisis completado"
          ✓ Al marcar "Hecho" → Factura automática
          ✓ Monto: 5,808 EUR
          ✓ Factura: INV/2025/003

          **Hito 2 - Go-Live (50%):**
          ✓ Tarea: "Go-Live exitoso"
          ✓ Al marcar "Hecho" → Factura automática
          ✓ Monto: 5,808 EUR
          ✓ Factura: INV/2025/004

          **Flujo automático:**
          1. Equipo completa fase
          2. Marca tarea como "Hecho"
          3. Odoo detecta hito completado
          4. Genera factura automáticamente
          5. Envía email al cliente
          6. Registra en contabilidad

          **Resultado:**
          ✅ Sin intervención manual
          ✅ Cliente recibe factura inmediatamente
          ✅ Mejora flujo de caja
        `,
        tips: [
          'Automatiza facturas recurrentes para ahorrar tiempo',
          'SIEMPRE revisa facturas automáticas antes de enviarlas',
          'Configura plantillas de email personalizadas',
          'Documenta en notas internas por qué se factura cada hito'
        ]
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué es facturación por hitos?', options: ['Facturar todo al final', 'Facturar al completar cada fase del proyecto', 'Facturar mensualmente', 'Facturar por producto'], correct: 1, explanation: 'Facturación por hitos significa cobrar al completar cada etapa definida del proyecto.' }] },
    practicalExercise: { title: 'Ejercicio: Facturación Automática', description: 'Configura facturación por hitos', steps: [] }
  },

  'sales-005': {
    title: 'CRM y Seguimiento',
    introduction: `
      El CRM (Customer Relationship Management) de Odoo te ayuda a gestionar todo tu proceso
      comercial, desde el primer contacto hasta el cierre de la venta. Un pipeline bien gestionado
      es clave para aumentar tu tasa de conversión.
    `,
    sections: [
      {
        title: '1. Pipeline de Ventas',
        content: `
          Organiza tus oportunidades de venta en etapas visuales para dar seguimiento efectivo.

          **Beneficios del pipeline visual:**
          - Ver el estado de todas las oportunidades de un vistazo
          - Identificar cuellos de botella en el proceso
          - Priorizar acciones según etapa
          - Proyectar ventas futuras
        `,
        example: `
          📍 Ruta: CRM > Pipeline

          **Pipeline típico de ventas:**

          → **Nuevo Lead**
             Probabilidad: 10%
             Acción: Calificar lead

          → **Contactado**
             Probabilidad: 20%
             Acción: Agendar reunión

          → **Reunión Agendada**
             Probabilidad: 40%
             Acción: Preparar presentación

          → **Propuesta Enviada**
             Probabilidad: 60%
             Acción: Dar seguimiento

          → **Negociación**
             Probabilidad: 80%
             Acción: Cerrar condiciones

          → **Ganada/Perdida**
             Probabilidad: 100% / 0%

          **Ejemplo práctico:**
          ┌──────────────────┬─────────┬──────────────┬───────────┐
          │ Cliente          │ Etapa   │ Valor        │ Prob.     │
          ├──────────────────┼─────────┼──────────────┼───────────┤
          │ TechCorp         │ Negoc.  │ 15,000 EUR   │ 80%       │
          │ Retail Group     │ Propues.│ 8,000 EUR    │ 60%       │
          │ Beta Services    │ Contact.│ 12,000 EUR   │ 20%       │
          └──────────────────┴─────────┴──────────────┴───────────┘

          Pipeline proyectado: 35,000 EUR
          Venta esperada: 21,200 EUR (ponderada por probabilidad)
        `,
        tips: [
          'Actualiza el estado del lead después de cada interacción',
          'Define probabilidades realistas por cada etapa',
          'Revisa tu pipeline diariamente',
          'Identifica leads estancados y toma acción'
        ]
      },
      {
        title: '2. Actividades y Seguimiento',
        content: `
          El seguimiento sistemático es lo que convierte leads en clientes. Programa actividades
          y recordatorios para nunca perder una oportunidad.

          **Tipos de actividades:**
          - Llamadas telefónicas
          - Reuniones presenciales o virtuales
          - Envío de propuestas
          - Seguimiento de propuestas
          - Negociación de términos
        `,
        example: `
          📍 Ruta: CRM > [Lead] > Programar actividad

          **Ejemplo de seguimiento sistemático:**

          **Lead:** TechCorp
          Valor: 15,000 EUR
          Etapa: Propuesta enviada

          **Actividades programadas:**

          ✓ **Completada** - 15/01/2025
            Tipo: Reunión
            Notas: Presentamos solución, les gustó el enfoque

          🔄 **Hoy** - 18/01/2025 10:00
            Tipo: Llamada de seguimiento
            Objetivo: Preguntar si revisaron la propuesta
            Responsable: María González

          ⏳ **Próxima** - 22/01/2025
            Tipo: Email de seguimiento
            Objetivo: Resolver dudas técnicas
            Responsable: Carlos Martínez

          **Resultado del seguimiento:**
          - Lead no se olvida de nosotros
          - Podemos resolver objeciones a tiempo
          - Aumenta probabilidad de cierre
          - Cliente percibe profesionalismo
        `,
        tips: [
          'NUNCA dejes un lead sin una actividad programada',
          'Usa recordatorios automáticos para no olvidar seguimientos',
          'Documenta todas las interacciones en notas',
          'Programa la siguiente actividad al terminar la actual'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué es importante el pipeline visual?',
          options: [
            'Solo es decorativo',
            'Permite ver rápidamente el estado de todas las oportunidades y actuar',
            'Es obligatorio por ley',
            'Solo lo usan los gerentes'
          ],
          correct: 1,
          explanation: 'El pipeline visual te permite identificar rápidamente dónde están tus oportunidades, detectar cuellos de botella y priorizar acciones.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Gestión de Pipeline Completa',
      description: 'Mueve oportunidades por el pipeline y programa seguimientos',
      steps: []
    }
  },

  'sales-006': {
    title: 'Reportes y Análisis de Ventas',
    introduction: `
      Los datos sin análisis no sirven de nada. Aprende a usar los dashboards y reportes de Odoo
      para tomar decisiones informadas que aumenten tus ventas.
    `,
    sections: [
      {
        title: '1. Dashboard de Ventas',
        content: `
          El dashboard te muestra tus KPIs más importantes en tiempo real.

          **KPIs esenciales:**
          - Ventas del período
          - Pipeline activo
          - Tasa de conversión
          - Ticket promedio
          - Top vendedores
          - Ventas por producto/servicio
        `,
        example: `
          📍 Ruta: Ventas > Dashboard

          **Dashboard Enero 2025:**

          **Ventas del mes:** 100,000 EUR ↑15% vs dic
          **Pipeline activo:** 250,000 EUR
          **Tasa de conversión:** 35%
          **Ticket promedio:** 12,500 EUR
          **Top vendedor:** María G. (45,000 EUR)

          **Desglose por servicio:**
          ┌────────────────────────┬──────────┬────────┐
          │ Servicio               │ Ventas   │ % Total│
          ├────────────────────────┼──────────┼────────┤
          │ Implementación Odoo    │ 45,000   │ 45%    │
          │ Consultoría            │ 35,000   │ 35%    │
          │ Soporte                │ 12,000   │ 12%    │
          │ Capacitación           │  8,000   │  8%    │
          └────────────────────────┴──────────┴────────┘

          **Tendencia mensual:**
          Nov: 75,000 EUR
          Dic: 87,000 EUR
          Ene: 100,000 EUR 📈

          **Análisis:**
          - Crecimiento sostenido ✅
          - Implementación es el servicio estrella
          - Oportunidad de aumentar capacitación
        `,
        tips: [
          'Revisa el dashboard al inicio de cada día',
          'Establece metas mensuales realistas pero ambiciosas',
          'Compara con períodos anteriores para ver tendencias',
          'Usa los datos para ajustar estrategia de ventas'
        ]
      },
      {
        title: '2. Análisis por Vendedor',
        content: `
          Analiza el rendimiento de tu equipo para reconocer top performers y apoyar a quien lo necesite.

          **Métricas por vendedor:**
          - Ventas cerradas
          - Número de oportunidades gestionadas
          - Tasa de conversión individual
          - Ticket promedio
          - Velocidad de cierre
        `,
        example: `
          📍 Ruta: Ventas > Reportes > Análisis por vendedor

          **Rendimiento del equipo - Enero 2025:**

          ┌────────────┬─────────┬──────────────┬───────┬──────────┐
          │ Vendedor   │ Ventas  │ Oportunidades│ Conv% │ Ticket   │
          ├────────────┼─────────┼──────────────┼───────┼──────────┤
          │ María G.   │ 45,000  │ 15           │ 40%   │ 15,000   │
          │ Carlos M.  │ 35,000  │ 20           │ 30%   │ 11,667   │
          │ Ana R.     │ 20,000  │ 10           │ 35%   │ 14,000   │
          └────────────┴─────────┴──────────────┴───────┴──────────┘

          **Análisis por vendedor:**

          **María González** - Top performer 🏆
          - Mayor tasa de conversión (40%)
          - Ticket más alto (15,000 EUR)
          - Acción: Compartir mejores prácticas con el equipo

          **Carlos Martínez** - Alto volumen
          - Gestiona más oportunidades (20)
          - Conversión mejorable (30%)
          - Acción: Coaching en técnicas de cierre

          **Ana Rodríguez** - Equilibrada
          - Buena conversión (35%)
          - Potencial de crecimiento
          - Acción: Asignar más leads de alta calidad

          **Acciones del equipo:**
          ✓ Reunión semanal de ventas
          ✓ Compartir casos de éxito
          ✓ Capacitación en objeciones
          ✓ Bonos por metas alcanzadas
        `,
        tips: [
          'Reconoce públicamente a los top performers',
          'Ofrece coaching personalizado a quien necesita apoyo',
          'No solo mires el total de ventas, analiza la conversión',
          'Usa datos para asignar leads de forma inteligente'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué mide la tasa de conversión?',
          options: [
            'El total de ventas del mes',
            'El porcentaje de oportunidades que se cierran exitosamente',
            'El número total de clientes',
            'Los ingresos totales del año'
          ],
          correct: 1,
          explanation: 'La tasa de conversión mide qué porcentaje de oportunidades de venta se convierten en ventas cerradas. Es un indicador clave de efectividad comercial.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Análisis Completo de Ventas',
      description: 'Genera y analiza reportes del mes para tomar decisiones',
      steps: []
    }
  },

  // ========================================
  // FLOTA - TODAS LAS LECCIONES
  // ========================================

  'fleet-002': {
    title: 'Gestión de Vehículos',
    introduction: 'Registra y administra todos los vehículos de tu flota empresarial con información completa y actualizada.',
    sections: [
      {
        title: '1. Registro de Vehículos',
        content: `Ingresa toda la información relevante de cada vehículo para tener un control completo.

**Datos esenciales a registrar:**
- **Identificación:** Placa, VIN, número de serie
- **Especificaciones:** Marca, modelo, año, color
- **Documentación:** Tarjeta de circulación, seguro, factura
- **Estado actual:** Kilometraje, valor de adquisición
- **Asignación:** Conductor responsable o pool

**Beneficios del registro completo:**
- Trazabilidad total del vehículo
- Renovaciones automáticas de seguros y permisos
- Historial completo de servicios
- Control de depreciación`,
        example: `📍 Ruta: Flota > Vehículos > Crear

**Ejemplo: Registro de Toyota Prius 2022**

~~~text
Información General:
Marca: Toyota
Modelo: Prius Hybrid
Año: 2022
Placa: 1234-ABC
VIN: JT2BK18E0X0123456
Color: Blanco Perla
Categoría: Vehículos Ligeros

Estado Actual:
Kilometraje: 45,000 km
Valor de adquisición: €28,000
Valor actual (depreciado): €22,000
Fecha de compra: 15/03/2022

Documentación:
Póliza de seguro: POL-2022-001
Compañía: Seguros Madrid S.A.
Vencimiento seguro: 15/01/2026
Tarjeta de circulación: Vigente
~~~

| Documento | Número | Vencimiento | Estado |
| --- | --- | --- | --- |
| Seguro | POL-2022-001 | 15/01/2026 | ✅ Vigente |
| Verificación | VER-2024-456 | 30/06/2025 | ✅ Vigente |
| Tarjeta circulación | TC-1234-ABC | N/A | ✅ Vigente |`,
        tips: ['Digitaliza documentos', 'Actualiza kilometraje mensualmente']
      },
      {
        title: '2. Seguimiento de Documentación',
        content: `Controla vencimientos de seguros, permisos y revisiones técnicas para cumplir con la normativa.

**Documentos a controlar:**
- **Seguro:** Póliza obligatoria de responsabilidad civil
- **Verificación vehicular:** Revisión técnica periódica
- **Tarjeta de circulación:** Permiso de circulación vigente
- **Tenencia:** Impuesto de tenencia (si aplica)
- **Permisos especiales:** Carga, transporte de personal

**Sistema de alertas:**
- 60 días antes: Alerta temprana
- 30 días antes: Alerta urgente
- Vencido: Alerta crítica`,
        example: `📍 Ruta: Flota > Vehículos > [Vehículo] > Documentos

**Alertas del VEH-001 Toyota Prius:**

⚠️ **Seguro vence en 60 días** (15/01/2026)
Acción: Contactar a Seguros Madrid para renovación
Costo estimado: €1,200/año

⚠️ **Revisión técnica en 15 días** (30/06/2025)
Acción: Agendar cita en Centro de Verificación
Costo: €50

✅ **SOAP vigente** hasta 31/12/2025
No requiere acción

✅ **Tarjeta de circulación** vigente
No requiere renovación

**Calendario de renovaciones:**

~~~text
Junio 2025:
✓ 15 Jun - Revisión técnica
✓ 30 Jun - Pago de tenencia

Enero 2026:
✓ 15 Ene - Renovación de seguro
✓ 20 Ene - Actualización de póliza
~~~`,
        tips: ['Configura alertas 60 días antes', 'Renueva a tiempo']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué registrar el VIN?', options: ['No es necesario', 'Identificación única del vehículo para seguros y trámites', 'Solo para autos nuevos', 'Es opcional'], correct: 1, explanation: 'El VIN es el identificador único del vehículo, esencial para seguros, registros y historial.' }] },
    practicalExercise: { title: 'Ejercicio: Registrar Flota', description: 'Ingresa los 3 vehículos de Mentora', steps: [] }
  },

  'fleet-003': {
    title: 'Asignación de Vehículos',
    introduction: 'Asigna vehículos a conductores y gestiona el uso eficientemente para maximizar el aprovechamiento de la flota.',
    sections: [
      {
        title: '1. Asignar a Conductores',
        content: `Vincula vehículos con empleados autorizados para establecer responsabilidades claras.

**Tipos de asignación:**
- **Asignación individual:** Vehículo exclusivo para un empleado
- **Pool car:** Vehículo compartido disponible para múltiples usuarios
- **Asignación por proyecto:** Vehículo temporal para proyecto específico
- **Flotilla departamental:** Varios vehículos para un departamento

**Requisitos para asignar:**
- Licencia de conducir vigente
- Autorización del responsable
- Capacitación en uso del vehículo
- Firma de carta responsiva`,
        example: `📍 Ruta: Flota > Vehículos > [Vehículo] > Asignar

**Asignaciones actuales:**

| Vehículo | Tipo | Conductor | Puesto | Fecha Asignación |
| --- | --- | --- | --- | --- |
| VEH-001 | Individual | Juan Pérez | Director General | 01/01/2024 |
| VEH-002 | Individual | Carlos Martínez | Consultor Senior | 15/03/2024 |
| VEH-003 | Pool car | Sin asignar | Disponible | N/A |

**Proceso de asignación:**

~~~text
1. Verificar requisitos:
✓ Licencia vigente de Juan Pérez
✓ Categoría A - vigencia hasta 2027
✓ Sin infracciones pendientes
✓ Aprobación de Dirección

2. Registrar asignación:
Vehículo: VEH-001 Toyota Prius
Conductor: Juan Pérez
Fecha inicio: 01/01/2024
Kilometraje inicial: 45,000 km
Responsable: Director General

3. Documentar:
✓ Carta responsiva firmada
✓ Checklist de entrega completo
✓ Fotos del vehículo
✓ Combustible: 3/4 tanque
~~~

**Vehículos Pool:**

~~~text
VEH-003 - Ford Transit
Tipo: Pool car (disponible)
Reservas permitidas por:
- Equipo de ventas
- Consultores
- Área de logística

Proceso de reserva:
1. Solicitar con 24h de anticipación
2. Indicar destino y duración
3. Aprobar con jefe de área
4. Confirmar disponibilidad
~~~`,
        tips: ['Verifica licencia vigente', 'Define responsable único']
      },
      {
        title: '2. Control de Uso',
        content: `Registra y analiza el uso de cada vehículo para optimizar costos y eficiencia.

**Métricas clave a monitorear:**
- **Kilometraje recorrido:** Total mensual y promedio por viaje
- **Número de viajes:** Frecuencia de uso
- **Consumo de combustible:** Litros y costo por km
- **Costo por kilómetro:** Incluye todos los gastos
- **Utilización:** Porcentaje de tiempo en uso

**Indicadores de eficiencia:**
- Promedio km/viaje
- Consumo L/100km
- Costo/km vs presupuesto
- Tasa de utilización`,
        example: `📍 Ruta: Flota > Reportes > Uso por Vehículo

**Reporte VEH-001 - Enero 2025:**

| Métrica | Valor |
| --- | --- |
| Km recorridos | 2,500 km |
| Número de viajes | 45 |
| Promedio por viaje | 55 km |
| Días en uso | 18 días |
| Utilización | 58% |

**Consumo de combustible:**

~~~text
Cargas de combustible: 4
Litros totales: 180 L
Costo total: €280
Precio promedio: €1.56/L

Rendimiento:
Km recorridos: 2,500 km
Consumo: 180 L
Rendimiento: 13.9 km/L (7.2 L/100km)
~~~

**Costo por kilómetro:**

~~~text
Combustible: €280
Mantenimiento: €0 (sin servicios este mes)
Peajes: €25
Estacionamiento: €40
────────────────────
Total: €345
Costo/km: €0.138

Presupuesto: €0.150/km
Estado: ✅ Dentro del presupuesto (-8%)
~~~

**Análisis mensual:**

✅ **Rendimiento óptimo:** 13.9 km/L supera especificación (12 km/L)
✅ **Uso eficiente:** 58% de utilización es adecuado para vehículo individual
⚠️ **Oportunidad:** Viajes cortos (55 km promedio) - considerar pool car para algunos trayectos`,
        tips: ['Pide reporte mensual', 'Analiza costos por vehículo']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué tener vehículos pool (sin asignar)?', options: ['Es un error', 'Flexibilidad para que cualquier empleado autorizado los use según necesidad', 'Solo para emergencias', 'No tiene sentido'], correct: 1, explanation: 'Los vehículos pool dan flexibilidad operativa sin necesidad de tener un vehículo por empleado.' }] },
    practicalExercise: { title: 'Ejercicio: Asignación', description: 'Asigna vehículos a empleados', steps: [] }
  },

  'fleet-004': {
    title: 'Mantenimiento y Servicios',
    introduction: 'Programa y registra todos los mantenimientos para prolongar la vida útil de tu flota y prevenir fallas costosas.',
    sections: [
      {
        title: '1. Plan de Mantenimiento',
        content: `Define intervalos de servicio preventivo según las especificaciones del fabricante.

**Tipos de mantenimiento:**
- **Preventivo:** Servicios programados según km o tiempo
- **Correctivo:** Reparaciones por fallas o averías
- **Predictivo:** Basado en monitoreo de condiciones
- **Estacional:** Preparación para cambios de clima

**Beneficios del mantenimiento preventivo:**
- Reduce fallas inesperadas en 70%
- Prolonga vida útil del vehículo
- Mantiene valor de reventa
- Mejora seguridad y confiabilidad
- Reduce costos operativos a largo plazo`,
        example: `📍 Ruta: Flota > Configuración > Tipos de Servicio

**Plan de mantenimiento: Toyota Prius 2022**

| Servicio | Intervalo | Último | Próximo | Estado |
| --- | --- | --- | --- | --- |
| Cambio de aceite | 15,000 km | 45,000 km | 60,000 km | ⚠️ En 3,000 km |
| Filtros (aire/combustible) | 30,000 km | 30,000 km | 60,000 km | ⚠️ En 3,000 km |
| Revisión mayor | 60,000 km | - | 60,000 km | ⚠️ Próximo |
| Neumáticos | 40,000 km | - | 40,000 km | ❌ Vencido |
| Frenos | 50,000 km | - | 50,000 km | ✅ Vigente |

**Calendario de mantenimiento 2025:**

~~~text
Febrero 2025 (47,000 km):
✓ Cambio de neumáticos - URGENTE
Costo estimado: €600
Taller: Neumáticos Express

Marzo 2025 (48,000 km):
✓ Cambio de aceite
✓ Filtro de aire
✓ Filtro de combustible
✓ Revisión de 60,000 km
Costo estimado: €450
Taller: Toyota Service Madrid

Mayo 2025 (51,000 km):
✓ Revisión de frenos
✓ Alineación y balanceo
Costo estimado: €180
Taller: Frenos del Norte
~~~

**Recordatorios automáticos:**

✓ Alerta a los 57,000 km (3,000 km antes)
✓ Email al conductor y fleet manager
✓ Reserva automática en taller preferido`,
        tips: ['Sigue manual del fabricante', 'Mantén historial completo']
      },
      {
        title: '2. Registro de Servicios',
        content: `Documenta cada servicio realizado para mantener un historial completo y trazable.

**Información a registrar:**
- **Identificación:** Número de servicio, vehículo, fecha
- **Kilometraje:** Lectura actual del odómetro
- **Tipo:** Preventivo, correctivo, garantía
- **Proveedor:** Taller o mecánico responsable
- **Detalle:** Trabajos realizados y refacciones
- **Costos:** Mano de obra, partes, total
- **Documentos:** Facturas, orden de servicio, garantías

**Beneficios del registro:**
- Historial completo para reventa
- Control de garantías
- Análisis de costos por vehículo
- Evaluación de proveedores`,
        example: `📍 Ruta: Flota > Vehículos > [Vehículo] > Servicios > Crear

**Servicio #SRV-001**

~~~text
Información General:
Vehículo: VEH-001 Toyota Prius
Fecha: 15/11/2024
Kilometraje: 45,000 km
Tipo: Mantenimiento preventivo

Proveedor:
Taller: Toyota Service Madrid
Técnico: José García
Contacto: servicio@toyotamadrid.com
Orden de trabajo: OT-2024-1156
~~~

**Trabajos realizados:**

| Concepto | Cantidad | P. Unitario | Total |
| --- | --- | --- | --- |
| Cambio de aceite sintético 5W-30 | 4 L | €8/L | €32 |
| Filtro de aceite Toyota original | 1 | €15 | €15 |
| Filtro de aire | 1 | €25 | €25 |
| Filtro de combustible | 1 | €30 | €30 |
| Mano de obra | 1.5 hrs | €60/hr | €90 |
| Inspección de 45 puntos | Incluido | €0 | €0 |
| IVA (21%) | - | - | €40 |
| **TOTAL** | - | - | **€232** |

**Observaciones del técnico:**

~~~text
✅ Nivel de líquidos correcto
✅ Presión de neumáticos ajustada (32 PSI)
✅ Frenos en buen estado (60% vida útil)
⚠️ Batería con 3 años - monitorear
✓ Sin fugas detectadas
✓ Sistema híbrido funcionando correctamente

Próximo servicio recomendado: 60,000 km
Fecha estimada: Marzo 2025
~~~

**Documentos adjuntos:**

✓ Factura-SRV-001.pdf
✓ OrdenTrabajo-OT-2024-1156.pdf
✓ Checklist-45puntos.pdf
✓ Garantía-filtros-12meses.pdf`,
        tips: ['Guarda facturas digitalmente', 'Adjunta en Odoo']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Cuál es el beneficio del mantenimiento preventivo?', options: ['Ninguno, es gasto innecesario', 'Previene fallas costosas y prolonga vida del vehículo', 'Solo para autos caros', 'Solo si está en garantía'], correct: 1, explanation: 'El mantenimiento preventivo evita averías costosas y extiende significativamente la vida útil del vehículo.' }] },
    practicalExercise: { title: 'Ejercicio: Plan de Mantenimiento', description: 'Crea plan para los vehículos', steps: [] }
  },

  'fleet-005': {
    title: 'Control de Costos',
    introduction: 'Analiza y controla todos los costos asociados a tu flota para tomar decisiones informadas y optimizar el presupuesto.',
    sections: [
      {
        title: '1. Registro de Combustible',
        content: `Lleva control detallado del consumo de combustible para identificar ineficiencias y ahorros.

**Datos a registrar:**
- **Por carga:** Litros, costo, precio/litro, kilometraje
- **Análisis:** Rendimiento km/L, consumo L/100km
- **Comparación:** vs especificación del fabricante
- **Alertas:** Consumos anormales o fugas

**Métodos de control:**
- Tarjetas corporativas con PIN por conductor
- Registro manual con tickets de gasolinera
- Apps móviles de control de combustible
- Integración con estaciones de servicio`,
        example: `📍 Ruta: Flota > Vehículos > [Vehículo] > Combustible

**Reporte VEH-001 - Enero 2025:**

| Fecha | Litros | Costo | €/L | Km | Rendimiento |
| --- | --- | --- | --- | --- | --- |
| 05/01 | 45 L | €70 | €1.56 | 12,500 | - |
| 12/01 | 42 L | €66 | €1.57 | 13,080 | 13.8 km/L |
| 19/01 | 48 L | €75 | €1.56 | 13,690 | 12.7 km/L |
| 26/01 | 45 L | €70 | €1.56 | 14,230 | 12.0 km/L |

**Resumen mensual:**

~~~text
Cargas de combustible: 8
Litros totales: 180 L
Costo total: €280
Precio promedio: €1.56/L

Kilometraje:
Inicial: 12,500 km
Final: 15,000 km
Recorridos: 2,500 km

Rendimiento:
Consumo total: 180 L
Rendimiento promedio: 13.9 km/L
Consumo L/100km: 7.2 L/100km

Especificación fabricante: 7.5 L/100km
Desempeño: ✅ 4% mejor que especificación
~~~

**Análisis:**

✅ **Rendimiento óptimo:** 7.2 L/100km supera la especificación
⚠️ **Tendencia:** Consumo incrementó en última semana (12.0 km/L)
💡 **Acción:** Revisar presión de neumáticos y filtros

**Costo por kilómetro:**

~~~text
Combustible total: €280
Km recorridos: 2,500 km
Costo/km combustible: €0.112
~~~`,
        tips: ['Usa tarjeta corporativa', 'Analiza eficiencia mensualmente']
      },
      {
        title: '2. Costo Total de Propiedad',
        content: `Calcula el TCO (Total Cost of Ownership) para evaluar el costo real de cada vehículo.

**Componentes del TCO:**

**Costos de adquisición:**
- Precio de compra o enganche
- Impuestos de compra
- Gastos de alta y placas

**Costos operativos:**
- Combustible
- Mantenimiento preventivo y correctivo
- Neumáticos y refacciones
- Seguros (responsabilidad civil, cobertura amplia)
- Tenencia e impuestos anuales
- Estacionamiento y peajes

**Costos de depreciación:**
- Valor de compra - Valor residual esperado
- Distribuido en vida útil esperada

**Fórmula TCO:**
TCO Anual = Depreciación + Combustible + Mantenimiento + Seguros + Impuestos + Otros`,
        example: `📍 Ruta: Flota > Reportes > Análisis de Costos

**TCO VEH-001 Toyota Prius - Año 2024**

**Costos de adquisición (amortización anual):**

~~~text
Precio de compra: €28,000
Vida útil esperada: 7 años
Valor residual estimado: €8,000
Depreciación anual: (€28,000 - €8,000) / 7 = €2,857
~~~

**Costos operativos anuales:**

| Concepto | Mensual | Anual |
| --- | --- | --- |
| Combustible | €280 | €3,360 |
| Mantenimiento preventivo | €100 | €1,200 |
| Seguro todo riesgo | €100 | €1,200 |
| Tenencia e impuestos | €67 | €800 |
| Estacionamiento | €50 | €600 |
| Peajes | €30 | €360 |
| Lavado y limpieza | €25 | €300 |
| **Subtotal operativo** | **€652** | **€7,820** |

**TCO Total Anual:**

~~~text
Depreciación:           €2,857
Costos operativos:      €7,820
──────────────────────────────
TOTAL TCO ANUAL:       €10,677

Km recorridos/año: 30,000 km
Costo por km: €10,677 / 30,000 = €0.356/km
Costo mensual promedio: €890
~~~

**Comparación con alternativas:**

| Opción | TCO Anual | Costo/km | Notas |
| --- | --- | --- | --- |
| Propiedad (actual) | €10,677 | €0.356 | Control total |
| Renting 36 meses | €12,000 | €0.400 | Todo incluido |
| Leasing | €11,500 | €0.383 | Sin mantenimiento |

**Análisis:**

✅ **Propiedad es mejor opción** para km anuales altos (30,000)
✅ **TCO/km competitivo** vs alternativas
💡 **Recomendación:** Mantener vehículo hasta 150,000 km o 5 años`,
        tips: ['Calcula TCO anualmente', 'Compara con leasing']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué incluye el TCO?', options: ['Solo combustible', 'Todos los costos del vehículo: compra, operación, mantenimiento, seguros', 'Solo compra', 'Solo mantenimiento'], correct: 1, explanation: 'TCO incluye TODOS los costos: adquisición, depreciación, operación, mantenimiento, seguros e impuestos.' }] },
    practicalExercise: { title: 'Ejercicio: Análisis de Costos', description: 'Calcula TCO de la flota', steps: [] }
  },

  'fleet-006': {
    title: 'Contratos y Reportes',
    introduction: 'Gestiona contratos de arrendamiento y genera reportes de rendimiento de flota para optimizar recursos y costos.',
    sections: [
      {
        title: '1. Contratos de Arrendamiento',
        content: `Administra contratos de leasing y renting de vehículos para mantener control sobre obligaciones y vencimientos.

**Tipos de contratos:**

**Leasing financiero:**
- Opción de compra al final
- Empresa es responsable de mantenimiento
- Deprecia como activo
- Ventajas fiscales

**Renting operativo:**
- Sin opción de compra
- Todo incluido (mantenimiento, seguro)
- Cuota fija mensual
- Vehículo nuevo cada 2-4 años

**Aspectos a controlar:**
- Fechas de inicio y vencimiento
- Cuotas mensuales y forma de pago
- Kilometraje incluido y excedentes
- Servicios incluidos (mantenimiento, seguro, neumáticos)
- Penalizaciones por terminación anticipada
- Condiciones de devolución`,
        example: `📍 Ruta: Flota > Vehículos > [Vehículo] > Contratos

**Contrato VEH-003 - Ford Transit**

~~~text
Tipo de contrato: Renting Operativo
Proveedor: AutoRent S.A.
Contacto: contratos@autorent.com
Ejecutivo de cuenta: Laura Martínez

Condiciones económicas:
Cuota mensual: €450 (+ IVA)
Cuota anual: €5,400
Duración: 36 meses
Fecha inicio: 01/03/2023
Fecha vencimiento: 28/02/2026

Kilometraje:
Incluido: 30,000 km/año (90,000 km total)
Costo excedente: €0.15/km
Km actual: 55,000 km
Km disponibles: 35,000 km
~~~

**Servicios incluidos:**

✅ **Mantenimiento preventivo:** Todos los servicios programados
✅ **Seguro:** Cobertura amplia + responsabilidad civil
✅ **Neumáticos:** 2 juegos durante el contrato
✅ **Asistencia 24/7:** Grúa, auto sustituto
✅ **Impuestos:** Tenencia incluida
❌ **No incluye:** Combustible, multas, daños no cubiertos

**Control de kilometraje:**

| Año | Km Permitidos | Km Reales | Diferencia | Estado |
| --- | --- | --- | --- | --- |
| 2023 | 30,000 | 28,500 | -1,500 | ✅ Bajo |
| 2024 | 30,000 | 32,000 | +2,000 | ⚠️ Exceso |
| 2025 | 30,000 | Proyectado: 29,000 | -1,000 | ✅ OK |

**Proyección exceso:**
~~~text
Total exceso esperado: +500 km
Costo estimado: €75 (500 km × €0.15)
~~~

**Renovación:**

~~~text
Vencimiento: 28/02/2026
Alerta: 01/11/2025 (90 días antes)

Opciones:
1. Renovar con mismo proveedor (descuento 10%)
2. Cambiar a modelo más eficiente
3. Comprar vehículo (no disponible en renting)
~~~`,
        tips: ['Revisa qué incluye el contrato', 'Controla exceso de km']
      },
      {
        title: '2. Reportes de Flota',
        content: `Genera reportes periódicos para analizar rendimiento, costos y tomar decisiones estratégicas.

**Reportes principales:**

**Reporte de utilización:**
- Km recorridos por vehículo
- Días en uso vs días disponibles
- Tasa de utilización

**Reporte de costos:**
- TCO por vehículo
- Costo/km comparativo
- Tendencias de gasto

**Reporte de mantenimiento:**
- Servicios vencidos/próximos
- Costo de mantenimiento
- Vehículos con mayor costo

**Reporte de eficiencia:**
- Consumo de combustible
- Rendimiento km/L
- Comparación vs especificación

**Frecuencia recomendada:**
- Mensual: Costos y combustible
- Trimestral: Análisis integral de flota
- Anual: TCO y decisiones de renovación`,
        example: `📍 Ruta: Flota > Reportes > Análisis Integral

**Reporte Trimestral Q1 2025 - Flota Completa**

**Resumen ejecutivo:**

| Métrica | Q1 2025 | Q4 2024 | Variación |
| --- | --- | --- | --- |
| Vehículos activos | 3 | 3 | - |
| Km totales | 18,500 | 16,200 | +14% |
| Costo total | €8,450 | €7,890 | +7% |
| Costo/km | €0.457 | €0.487 | -6% ✅ |
| Utilización | 75% | 68% | +7% ✅ |

**Análisis por vehículo:**

~~~text
VEH-001 - Toyota Prius (Propiedad)
────────────────────────────────────
Km recorridos: 7,500 km
Costo total: €2,670
Costo/km: €0.356
Utilización: 85%
Rendimiento: 13.9 km/L
Estado: ✅ Óptimo

Fortalezas: Mejor rendimiento, alto uso
Áreas de mejora: Ninguna
Recomendación: Mantener

VEH-002 - Ford Ranger (Propiedad)
────────────────────────────────────
Km recorridos: 6,000 km
Costo total: €4,280
Costo/km: €0.713
Utilización: 55%
Rendimiento: 9.2 km/L
Estado: ⚠️ Costoso

Fortalezas: Necesario para carga
Áreas de mejora: Utilización baja, alto consumo
Recomendación: Evaluar venta/renting

VEH-003 - Ford Transit (Renting)
────────────────────────────────────
Km recorridos: 5,000 km
Costo total: €1,500 (cuota renting)
Costo/km: €0.300
Utilización: 85%
Rendimiento: 11.5 km/L
Estado: ✅ Excelente

Fortalezas: Costo fijo, todo incluido, alta utilización
Áreas de mejora: Ninguna
Recomendación: Renovar al vencimiento
~~~

**Análisis financiero:**

~~~text
Costo total trimestre: €8,450

Distribución:
- Combustible: €3,200 (38%)
- Mantenimiento: €1,400 (17%)
- Seguros: €900 (11%)
- Renting VEH-003: €1,500 (18%)
- Otros: €1,450 (17%)

Presupuesto: €9,000
Ahorro: €550 (6% bajo presupuesto) ✅
~~~

**Recomendaciones estratégicas:**

💡 **Vehículo más eficiente:** VEH-003 (renting)
- Costo/km más bajo: €0.300
- Sin sorpresas, cuota fija
- Alta utilización

⚠️ **Oportunidad de optimización:** VEH-002
- Costo/km alto: €0.713
- Utilización baja: 55%
- Acción: Evaluar venta y cambio a renting

✅ **Mantener:** VEH-001
- Rendimiento óptimo
- Costo/km competitivo
- Alta utilización

**Plan de acción:**

1. **Inmediato:** Analizar cotizaciones de renting para VEH-002
2. **Marzo:** Evaluar venta de VEH-002
3. **Junio:** Negociar renovación VEH-003 con descuento`,
        tips: ['Genera reportes trimestrales', 'Busca optimizaciones']
      }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué ventaja tiene el renting vs compra?', options: ['Ninguna', 'Cuota fija mensual que incluye todos los costos, sin sorpresas', 'Es más caro siempre', 'Solo para empresas grandes'], correct: 1, explanation: 'El renting ofrece cuota fija mensual que incluye mantenimiento, seguros y otros costos, facilitando el presupuesto.' }] },
    practicalExercise: { title: 'Ejercicio: Reporte de Flota', description: 'Genera análisis completo', steps: [] }
  },

  // ========================================
  // CRM - GESTIÓN DE RELACIONES CON CLIENTES
  // ========================================
  'crm-001': {
    title: 'Introducción al CRM',
    introduction: `El CRM (Customer Relationship Management) es tu mejor amigo para encontrar y mantener clientes. Piensa en él como una agenda súper inteligente que recuerda TODO sobre cada persona interesada en tu negocio: qué quiere, cuándo llamó, qué le dijiste, y cuándo debes seguirlo.`,
    sections: [
      {
        title: '1. ¿Qué es un Lead?',
        content: `Un **Lead** es una persona o empresa que mostró interés en tu producto o servicio.

**Puede ser alguien que:**
- Llenó un formulario en tu sitio web
- Te llamó preguntando por precios
- Te envió un email pidiendo información
- Te conoció en una feria o evento
- Te contactó por redes sociales

**¿Por qué es importante registrarlos?**
Porque sin un sistema, ¡se te olvidarán! El CRM te ayuda a no perder ninguna oportunidad de venta.

**Datos esenciales de un lead:**
- Nombre y empresa
- Email y teléfono
- Origen del contacto
- Necesidad o interés específico
- Próxima acción a realizar`,
        example: `📍 Ruta en Odoo: CRM > Leads > Crear

**Ejemplo de Lead:**

~~~text
Nombre: María García
Empresa: Panadería La Estrella
Email: maria@panaderia.com
Teléfono: 555-1234
Origen: Formulario web
Interés: Sistema de inventario
Prioridad: Media
~~~

**Notas del contacto:**

~~~text
"Quiere controlar su stock de harina y otros insumos.
Actualmente usa Excel y pierde mucho tiempo.
Busca solución simple y económica.
Presupuesto aproximado: $500/mes"
~~~

**Plan de acción:**

✓ **Llamarla mañana a las 10am**
✓ **Enviarle información** sobre el módulo de Inventario
✓ **Agendar demostración** si muestra interés
✓ **Enviar cotización** después de la demo

**Estado:** Nuevo
**Siguiente actividad:** Llamada - Mañana 10:00 AM`,
        tips: [
          'Registra TODO de inmediato, la memoria falla',
          'Siempre anota de dónde vino el lead (origen)',
          'Programa la próxima acción: ¿Cuándo lo contactarás?',
          'Sé específico en las notas: qué le interesa y por qué'
        ]
      },
      {
        title: '2. El Pipeline (Embudo de Ventas)',
        content: `Imagina un embudo: muchos leads entran arriba, pero solo algunos salen convertidos en clientes. El Pipeline te muestra visualmente en qué etapa está cada oportunidad.

**Etapas típicas del pipeline:**

1. **Nuevo** - Acaba de llegar, aún sin contactar
2. **Calificado** - Confirmaste que tiene interés real y presupuesto
3. **Propuesta** - Le enviaste cotización o presentación
4. **Negociación** - Están discutiendo precios/términos
5. **Ganado** - ¡Éxito! Se convirtió en cliente
6. **Perdido** - No compró (pero aprendes por qué)

**Métricas importantes:**
- **Tasa de conversión:** % de leads que avanzan
- **Tiempo promedio:** Días en cada etapa
- **Valor del pipeline:** Suma de oportunidades activas
- **Probabilidad de cierre:** Estimación de éxito`,
        example: `📍 Ruta en Odoo: CRM > Pipeline

**Vista Kanban del Pipeline:**

~~~text
┌─────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌────────┐
│  NUEVO  │ │CALIFICADO│ │ PROPUESTA│ │NEGOCIACIÓN│ │ GANADO │
│   10    │ │    5     │ │     3    │ │     2     │ │   1    │
│ $50,000 │ │ $40,000  │ │ $25,000  │ │ $15,000   │ │$10,000 │
└─────────┘ └──────────┘ └──────────┘ └───────────┘ └────────┘
~~~

**Análisis del embudo:**

| Etapa | Leads | % | Valor Potencial |
| --- | --- | --- | --- |
| Nuevo | 10 | 100% | $50,000 |
| Calificado | 5 | 50% | $40,000 |
| Propuesta | 3 | 30% | $25,000 |
| Negociación | 2 | 20% | $15,000 |
| Ganado | 1 | 10% | $10,000 |

**Interpretación:**

✅ **Tasa de conversión: 10%** (1 ganado de 10 iniciales)
⚠️ **Cuello de botella:** De 5 calificados solo 3 pidieron propuesta
💡 **Acción:** Mejorar presentación de propuestas

**¡Esto es NORMAL!** No todos compran, lo importante es dar seguimiento constante.`,
        tips: [
          'Revisa tu pipeline cada mañana',
          'Mueve las tarjetas según avancen',
          'Si un lead no responde en 2 semanas, llámalo',
          'Analiza por qué los pierdes para mejorar'
        ]
      },
      {
        title: '3. Programar Actividades',
        content: `Las actividades son recordatorios de lo que debes hacer con cada cliente potencial. Sin esto, se te olvidará seguirlos y perderás ventas.

**Tipos de actividades:**
- **Llamar:** Hablar por teléfono
- **Email:** Enviar correo con información
- **Reunión:** Agendar cita presencial o virtual
- **Tarea:** Enviar documento, preparar propuesta, etc.
- **Demo:** Demostración del producto

**Reglas de oro:**
- SIEMPRE programa la siguiente actividad
- Sé específico en la descripción
- Asigna responsable y fecha realista
- Registra el resultado de cada actividad`,
        example: `📍 Ruta: En cualquier Lead > Pestaña "Actividades" > Programar

**Actividad programada:**

~~~text
Tipo: Llamada telefónica
Responsable: Carlos Martínez (Vendedor)
Fecha: 20/01/2025
Hora: 10:00 AM
Resumen: Seguimiento a cotización enviada
~~~

**Notas preparatorias:**

~~~text
Preguntarle:
✓ ¿Recibió el PDF de la cotización?
✓ ¿Tiene dudas sobre los módulos incluidos?
✓ ¿Necesita ajustar el precio o términos?
✓ ¿Cuándo puede tomar la decisión?

Documentos listos:
- Cotización COT-2025-001.pdf
- Casos de éxito similares
- Plan de implementación
~~~

**Después de la llamada:**

~~~text
Resultado: Conversación positiva
Duración: 15 minutos

Resumen:
- Sí recibió la cotización
- Tiene dudas sobre módulo de inventario
- Pide descuento del 10%
- Decisión en 1 semana

Siguiente acción:
✓ Enviar video demo de inventario (hoy)
✓ Consultar con gerencia sobre descuento (mañana)
✓ Llamar nuevamente en 7 días (27/01)
~~~

**Odoo te recordará** con notificación cuando se acerque la hora.`,
        tips: [
          'SIEMPRE programa la siguiente actividad',
          'Sé realista con las fechas y horarios',
          'Registra el resultado de cada actividad',
          'No dejes leads sin actividad programada'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es un Lead en el CRM?',
          options: [
            'Un cliente que ya compró',
            'Una persona o empresa que mostró interés en tu producto',
            'Un empleado de la empresa',
            'Un proveedor'
          ],
          correct: 1,
          explanation: 'Un Lead es alguien que mostró interés pero AÚN NO ha comprado. Podría convertirse en cliente si le das buen seguimiento.'
        },
        {
          id: 'q2',
          question: '¿Por qué es importante el Pipeline?',
          options: [
            'No es importante',
            'Te muestra visualmente en qué etapa está cada oportunidad de venta',
            'Solo sirve para jefes',
            'Es solo decoración'
          ],
          correct: 1,
          explanation: 'El Pipeline te permite ver de un vistazo todas tus oportunidades y en qué etapa están, para que no se te escape ninguna.'
        },
        {
          id: 'q3',
          question: '¿Qué pasa si no programas actividades de seguimiento?',
          options: [
            'Nada importante',
            'El cliente llamará solo',
            'Te olvidarás de contactarlo y perderás la venta',
            'Odoo lo hace automáticamente'
          ],
          correct: 2,
          explanation: 'Sin actividades programadas, te olvidarás de dar seguimiento y el lead se "enfriará" o irá con la competencia. ¡El seguimiento es clave!'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Tu Primer Lead',
      description: 'Crea un lead basado en esta situación real',
      steps: [
        'Situación: Te llama Juan Pérez de "Ferretería El Tornillo". Necesita un sistema para controlar su inventario porque siempre le faltan productos. Te dejó su email: juan@ferreteria.com',
        'Ve a CRM > Leads y crea uno nuevo',
        'Llena todos los campos importantes',
        'Programa una actividad: llamarlo en 2 días para enviarle info de Inventario',
        'Guarda y observa cómo aparece en tu Pipeline'
      ]
    }
  },

  'crm-002': {
    title: 'Conversión de Leads a Oportunidades',
    introduction: 'Aprende cuándo y cómo convertir un lead interesado en una oportunidad real de venta para maximizar tus posibilidades de cierre.',
    sections: [
      {
        title: '1. ¿Cuándo Convertir un Lead?',
        content: `Un lead se convierte en **Oportunidad** cuando cumple los criterios BANT (Budget, Authority, Need, Timeline).

**Criterios para convertir a oportunidad:**

- **Problema real:** Confirmaste que tiene una necesidad que puedes resolver
- **Presupuesto:** Tiene capacidad de inversión o está dispuesto a asignar recursos
- **Autoridad:** Es quien decide o influye significativamente en la compra
- **Urgencia/Timeline:** Tiene un plazo definido para resolver su necesidad

**Si NO cumple estos criterios:**
El contacto sigue siendo solo un lead y necesita más seguimiento y calificación antes de invertir tiempo en propuestas formales.

**Beneficios de calificar correctamente:**
- Enfocas esfuerzos en oportunidades reales
- Proyecciones de venta más precisas
- Mejor uso del tiempo del equipo comercial
- Mayor tasa de conversión`,
        example: `📍 Ruta: CRM > Leads > [Lead] > Calificar

**Evaluación: María - Panadería La Estrella**

**Checklist BANT:**

~~~text
✅ ¿Tiene problema real?
Sí, pierde dinero por mal control de inventario.
Desperdicia productos por caducidad.
Pérdidas estimadas: $800/mes

✅ ¿Tiene presupuesto?
Sí, puede invertir hasta $500/mes.
Ya tiene presupuesto aprobado para software.

✅ ¿Decide ella?
Sí, es la dueña de la panadería.
Toma decisiones sin necesidad de aprobaciones.

✅ ¿Tiene urgencia?
Sí, necesita solución antes de temporada alta.
Timeline: Implementar en 30 días.
~~~

**Cálculo de valor:**

~~~text
Inversión mensual: $500/mes
Contrato anual: 12 meses
Valor total: $500 × 12 = $6,000/año

Probabilidad de cierre: 60%
(Tiene presupuesto y urgencia, aún no vio demo)
~~~

**RESULTADO:** ✅ **¡Convertir a Oportunidad!**

**Siguiente paso:** Enviar propuesta y agendar demostración`,
        tips: [
          'No conviertas leads solo por convertir',
          'Haz las preguntas correctas para calificar',
          'Estima el valor de la oportunidad',
          'Define claramente la próxima acción'
        ]
      },
      {
        title: '2. Proceso de Conversión',
        content: `Cuando estés seguro de que el lead está calificado según criterios BANT, convierte a oportunidad.

**Pasos para convertir:**

1. **Abrir el lead** en Odoo
2. **Clic en "Convertir a Oportunidad"**
3. **Asignar valor estimado** (cuánto puede valer la venta)
4. **Seleccionar o crear cliente** (se genera automáticamente)
5. **Elegir etapa inicial** del pipeline (normalmente "Calificado")
6. **Asignar vendedor** responsable
7. **Definir fecha estimada** de cierre
8. **Programar siguiente actividad** (demo, propuesta, reunión)

**Campos importantes:**
- **Nombre:** Descriptivo del proyecto/necesidad
- **Valor esperado:** Estimación realista del contrato
- **Probabilidad:** % de confianza en el cierre
- **Fecha cierre:** Cuándo esperas cerrar la venta
- **Prioridad:** Urgencia del cliente`,
        example: `📍 Ruta: CRM > Lead > Botón "Convertir a Oportunidad"

**Formulario de conversión:**

~~~text
Nombre oportunidad:
"Sistema Inventario - Panadería La Estrella"

Cliente:
María García - Panadería La Estrella
(se crea automáticamente si no existe)

Contacto principal:
María García
Email: maria@panaderia.com
Teléfono: 555-1234

Datos comerciales:
Valor esperado: $6,000 (contrato anual)
Probabilidad: 60%
Fecha cierre estimada: 30 días (20/02/2025)
Vendedor responsable: Carlos Martínez
Prioridad: Alta

Etapa inicial:
Calificado (ya pasó criterios BANT)

Próxima actividad:
Demostración - 22/01/2025 11:00 AM
~~~

**Después de convertir:**

| Campo | Antes (Lead) | Después (Oportunidad) |
| --- | --- | --- |
| Tipo | Lead | Oportunidad |
| Estado | Nuevo | Calificado |
| Valor | - | $6,000 |
| Pipeline | No visible | ✅ Visible |
| Cliente | - | María García creado |

**Ahora puedes:**

✅ **Enviar cotizaciones** formales
✅ **Programar demostraciones** del producto
✅ **Hacer seguimiento** estructurado
✅ **Generar reportes** de proyección de ventas

**Al guardar:**
La oportunidad aparece en tu Pipeline y puedes comenzar el proceso formal de venta con propuestas y cotizaciones.`,
        tips: [
          'El nombre de la oportunidad debe ser descriptivo',
          'Sé realista con la probabilidad de cierre',
          'Actualiza el valor si cambia durante la negociación',
          'La fecha de cierre te ayuda a priorizar'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué diferencia hay entre Lead y Oportunidad?',
          options: [
            'Son lo mismo',
            'El lead es interés inicial, la oportunidad es venta calificada con valor',
            'La oportunidad es más pequeña',
            'Solo el nombre cambia'
          ],
          correct: 1,
          explanation: 'El Lead es contacto inicial. La Oportunidad ya está calificada: sabes que puede comprar y estimaste cuánto vale.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Convierte tu Lead',
      description: 'Transforma el lead de Juan (Ferretería) en oportunidad',
      steps: [
        'Abre el lead que creaste de Juan Pérez',
        'Haz clic en "Convertir a Oportunidad"',
        'Estima valor: $3,600/año (módulo inventario $300/mes)',
        'Probabilidad: 50%',
        'Fecha cierre: 45 días',
        'Observa cómo aparece en el Pipeline'
      ]
    }
  },

  // ========================================
  // INVENTARIO
  // ========================================
  'inv-001': {
    title: 'Fundamentos de Inventario',
    introduction: `
      ¿Alguna vez te quedaste sin producto justo cuando un cliente lo necesitaba? ¿O tienes productos
      acumulándose y ocupando espacio? El módulo de Inventario de Odoo te ayuda a saber EXACTAMENTE
      qué tienes, dónde está, y cuándo necesitas comprar más.
    `,
    sections: [
      {
        title: '1. ¿Por Qué Controlar el Inventario?',
        content: `
**Sin control de inventario:**
- No sabes qué productos tienes realmente
- Te quedas sin stock y pierdes ventas
- Tienes productos vencidos o dañados sin saberlo
- No sabes cuánto dinero tienes "parado" en productos
- Desperdicias dinero comprando lo que ya tienes

**Con control de inventario:**
- Sabes exactamente qué tienes y dónde
- El sistema te avisa cuándo reponer
- Calculas el valor de tu inventario
- Reduces pérdidas y desperdicios
- Tomas decisiones basadas en datos reales
        `,
        example: `
**Ejemplo:** Tienda de Abarrotes "Don José"

**SIN Odoo (Antes):**
- "Creo que tengo como 20 kg de azúcar..."
- "¿Dónde puse esas latas de atún?"
- "¿Ya se venció el queso?"

**CON Odoo (Ahora):**
- Azúcar: 18.5 kg (Ubicación: Estante A-3)
- Atún: 45 latas (Ubicación: Bodega-2)
- Queso: 12 unidades (Vence: 15/03/2024) ⚠️

✅ ¡Todo claro y sin adivinanzas!
        `,
        tips: [
          'Empieza con tus 20 productos más vendidos',
          'Sé consistente: registra TODO',
          'Elige unidades simples (piezas, kg, litros)',
          'Actualiza diariamente al principio'
        ]
      },
      {
        title: '2. Crear tu Primer Producto',
        content: `
          Para controlar el inventario, primero debes registrar tus productos. Cada producto
          necesita información básica que te ayudará a gestionarlo.

          **Información esencial:**
          - Nombre claro del producto
          - Tipo: ¿Es algo físico que guardas?
          - Unidad de medida: ¿Cómo lo cuentas?
          - Precio de venta y costo
          - Categoría: Para organizarlo
        `,
        example: `
          📍 Ruta: Inventario > Productos > Crear

          Producto nuevo:
          ─────────────────────────
          Nombre: Azúcar Refinada 1kg
          Tipo de producto: Almacenable (lo guardas físicamente)
          Unidad de medida: kg
          Precio de venta: $25.00
          Costo: $18.00
          Categoría: Abarrotes > Endulzantes
          Código interno: AZU-001
          Código de barras: 7501234567890

          ✓ "Puede ser vendido" - marcado
          ✓ "Puede ser comprado" - marcado

          Esto crea el producto listo para seguimiento.
        `,
        tips: [
          'Usa nombres descriptivos y consistentes',
          'El código interno te ayuda a buscarlo rápido',
          'Marca bien si es vendible y/o comprable',
          'Agrega foto para identificarlo fácilmente'
        ]
      },
      {
        title: '3. Ubicaciones de Almacén',
        content: `
          Las ubicaciones te dicen DÓNDE está cada producto. Puede ser tan simple como:
          - Una bodega
          - Estantes (A, B, C)
          - Cajones numerados

          O más complejo para negocios grandes:
          - Múltiples almacenes
          - Zonas frías/secas
          - Áreas de cuarentena
        `,
        example: `
          📍 Ruta: Inventario > Configuración > Ubicaciones

          Estructura simple para tienda pequeña:
          ─────────────────────────
          MI TIENDA
          ├── Área de Ventas (lo que está en mostrador)
          ├── Bodega Principal
          │   ├── Estante A (Abarrotes secos)
          │   ├── Estante B (Bebidas)
          │   └── Estante C (Limpieza)
          └── Refrigerador (Lácteos y carnes)

          Ahora cuando registres stock de Azúcar:
          "Hay 18.5 kg en Estante A"

          ¡Sabes exactamente dónde buscarla!
        `,
        tips: [
          'Empieza simple, 2-3 ubicaciones máximo',
          'Usa nombres que todos entiendan',
          'Agrupa productos similares',
          'Puedes agregar más ubicaciones después'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué problema principal resuelve el control de inventario?',
          options: [
            'Hacer las cosas más complicadas',
            'Saber exactamente qué tienes, dónde está y cuándo comprar más',
            'Contratar más empleados',
            'Aumentar los precios'
          ],
          correct: 1,
          explanation: 'El inventario te da visibilidad total de tus productos: qué hay, dónde está, y te avisa cuándo reponer para no perder ventas.'
        },
        {
          id: 'q2',
          question: '¿Qué tipo de producto es uno que guardas físicamente?',
          options: [
            'Servicio',
            'Consumible',
            'Almacenable',
            'Digital'
          ],
          correct: 2,
          explanation: 'Producto "Almacenable" es algo físico que guardas en tu bodega/tienda y necesitas controlar su cantidad.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Tu Primer Producto',
      description: 'Registra un producto real de tu negocio',
      steps: [
        'Piensa en tu producto más vendido',
        'Ve a Inventario > Productos > Crear',
        'Completa: nombre, tipo (Almacenable), unidad, precio',
        'Asigna una categoría',
        'Guarda y observa la ficha completa del producto'
      ]
    }
  },

  // ========================================
  // COMPRAS
  // ========================================
  'pur-001': {
    title: 'Gestión de Proveedores',
    introduction: `
      Tus proveedores son socios clave de tu negocio. Sin ellos, no tienes productos que vender.
      Odoo te ayuda a mantener toda la información de proveedores organizada: precios, plazos de
      entrega, historial de compras, y más. ¡Ya no perderás esa tarjeta con el teléfono del proveedor!
    `,
    sections: [
      {
        title: '1. Registrar un Proveedor',
        content: `
Un proveedor es la empresa o persona que te vende los productos que necesitas.

**Registrarlo en Odoo te permite:**
- Tener sus datos siempre a la mano
- Hacer pedidos directamente desde el sistema
- Llevar historial de todas las compras
- Comparar precios entre proveedores
        `,
        example: `
📍 Ruta: Compras > Proveedores > Crear

**Nuevo proveedor:**
───────────────────────────────
Nombre: Distribuidora ABC S.A.
NIF/RFC: ABC123456789
Dirección: Calle Industrial #100
Teléfono: 555-9876
Email: ventas@abc.com
Sitio web: www.abc.com

**Contacto principal:**
Nombre: Roberto Sánchez
Cargo: Ejecutivo de ventas
Móvil: 555-1111

**Condiciones:**
Plazo de pago: 30 días
Moneda: MXN
Día de entregas: Martes y Jueves
        `,
        tips: [
          'Registra TODOS tus proveedores, incluso pequeños',
          'Incluye varios contactos por si uno no contesta',
          'Anota días y horarios de entrega',
          'Guarda sus políticas de devolución'
        ]
      },
      {
        title: '2. Crear Solicitud de Presupuesto',
        content: `
Cuando necesitas comprar productos, creas una **"Solicitud de Presupuesto"** (RFQ).
Es como decirle al proveedor: "¿Cuánto me cuesta esto?"

**Esto es especialmente útil cuando:**
- Quieres comparar precios
- Necesitas confirmar disponibilidad
- Es la primera vez que compras algo
        `,
        example: `
📍 Ruta: Compras > Solicitudes de Presupuesto > Crear

**Nueva solicitud:**
───────────────────────────────
Proveedor: Distribuidora ABC
Fecha del pedido: Hoy
Fecha límite: En 5 días

**Productos solicitados:**

| Producto     | Cantidad | Precio  |
| ------------ | -------- | ------- |
| Azúcar 1kg   | 50       | $18.00  |
| Arroz 1kg    | 30       | $22.00  |
| Frijol 1kg   | 25       | $28.00  |

**Totales:**
- Subtotal: $2,260.00
- IVA 16%: $361.60
- **TOTAL: $2,621.60**

✅ Estado: Solicitud enviada
        `,
        tips: [
          'Verifica cantidades antes de enviar',
          'Confirma precios actualizados',
          'Considera costos de envío',
          'Guarda copia de la solicitud'
        ]
      },
      {
        title: '3. Confirmar Orden de Compra',
        content: `
Cuando el proveedor acepta tu solicitud y estás de acuerdo con el precio,
la **"Solicitud"** se convierte en **"Orden de Compra"** oficial.

Este es el compromiso formal: tú compras, ellos entregan.
        `,
        example: `
📍 Ruta: En la Solicitud > Botón "Confirmar Pedido"

**La solicitud ahora es ORDEN DE COMPRA:**
───────────────────────────────
Número: PO00015
Estado: Orden de Compra ✅

**Próximos pasos:**
1. Esperar la entrega del proveedor
2. Cuando llegue, registrar la recepción
3. Verificar que todo esté correcto
4. Pagar según los términos acordados

💡 El proveedor puede ver el pedido y preparar el envío.
        `,
        tips: [
          'Revisa TODO antes de confirmar',
          'Guarda número de orden para seguimiento',
          'Confirma fecha esperada de entrega',
          'Prepara espacio en bodega para recibirlo'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Para qué sirve una Solicitud de Presupuesto?',
          options: [
            'Para vender productos',
            'Para preguntar precios y disponibilidad al proveedor',
            'Para contratar empleados',
            'Para cerrar la tienda'
          ],
          correct: 1,
          explanation: 'La Solicitud de Presupuesto (RFQ) es como preguntar: "¿Cuánto me cuesta y lo tienes disponible?" antes de comprometerte a comprar.'
        },
        {
          id: 'q2',
          question: '¿Cuándo se convierte una solicitud en Orden de Compra?',
          options: [
            'Automáticamente después de 1 hora',
            'Cuando el proveedor la rechaza',
            'Cuando confirmas que aceptas el precio y quieres comprar',
            'Nunca se convierte'
          ],
          correct: 2,
          explanation: 'Tú decides confirmar la compra cuando estás de acuerdo con precios y condiciones. Entonces se vuelve compromiso oficial.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Tu Primera Compra',
      description: 'Simula una compra a un proveedor',
      steps: [
        'Crea un proveedor (puede ser ficticio)',
        'Ve a Compras > Solicitudes > Crear',
        'Agrega 3 productos con cantidades',
        'Envía la solicitud',
        'Confírmala como Orden de Compra',
        'Observa cómo cambia el estado'
      ]
    }
  },

  // ========================================
  // RECURSOS HUMANOS
  // ========================================
  'emp-001': {
    title: 'Gestión Básica de Empleados',
    introduction: `
      Tu equipo es el corazón de tu negocio. Odoo te ayuda a mantener toda la información de tus
      empleados organizada: datos personales, contratos, departamentos, y más. Ya no tendrás
      carpetas con papeles regados, ¡todo estará en un solo lugar!
    `,
    sections: [
      {
        title: '1. Crear Ficha de Empleado',
        content: `
Cada empleado necesita su "ficha" en el sistema con información importante.

**Esto te ayuda a:**
- Tener sus datos siempre disponibles
- Asignarle a un departamento
- Gestionar sus documentos
- Calcular su nómina (si usas ese módulo)
        `,
        example: `
📍 Ruta: Empleados > Empleados > Crear

**Ficha de empleado:**
───────────────────────────────

**INFORMACIÓN PERSONAL**
- Nombre: Ana Martínez López
- Foto: [Subir foto]
- Cargo: Vendedora
- Departamento: Ventas
- Jefe directo: Carlos Rodríguez

**INFORMACIÓN DE CONTACTO**
- Teléfono trabajo: Ext. 105
- Email trabajo: ana.martinez@miempresa.com
- Móvil personal: 555-7890

**INFORMACIÓN PRIVADA**
- Dirección: Calle Principal #200
- Fecha nacimiento: 15/03/1990
- Género: Femenino
- Estado civil: Soltera
- Contacto emergencia: Juan Martínez (Padre) 555-4567

⚠️ Esta información es confidencial y solo RRHH la ve completa.
        `,
        tips: [
          'La foto ayuda a identificar al empleado',
          'Mantén los datos actualizados',
          'Respeta la privacidad de información sensible',
          'Siempre ten contacto de emergencia'
        ]
      },
      {
        title: '2. Departamentos y Organigrama',
        content: `
**Organizar a tus empleados por departamentos te ayuda a:**
- Ver la estructura de tu empresa
- Asignar responsables
- Gestionar permisos
- Planificar recursos

**Ejemplos de departamentos:**
- Administración
- Ventas
- Producción
- Almacén
- Contabilidad
        `,
        example: `
📍 Ruta: Empleados > Configuración > Departamentos

**Estructura de Mi Empresa:**
───────────────────────────────

**DIRECCIÓN GENERAL**
└── Director: Roberto Torres
    ├── **VENTAS** (5 personas)
    │   └── Gerente: Carlos Rodríguez
    │       ├── Ana Martínez (Vendedora)
    │       ├── Pedro Gómez (Vendedor)
    │       └── Luis Sánchez (Vendedor)
    ├── **PRODUCCIÓN** (8 personas)
    │   └── Gerente: María Fernández
    └── **ADMINISTRACIÓN** (3 personas)
        └── Gerente: Laura Díaz

✅ Esto te da visibilidad clara de tu organización.
        `,
        tips: [
          'Empieza con departamentos básicos',
          'Asigna un responsable a cada uno',
          'Puedes crear subdepartamentos',
          'Revisa y actualiza cuando haya cambios'
        ]
      },
      {
        title: '3. Contratos de Trabajo',
        content: `
El contrato define la relación laboral: tipo de trabajo, salario, horario.

**Registrarlo en Odoo te permite:**
- Llevar historial de contratos
- Recibir avisos de vencimientos
- Calcular prestaciones automáticamente
- Mantener documentación legal
        `,
        example: `
📍 Ruta: Empleado > Pestaña "Contratos"

**Contrato de Ana Martínez:**
───────────────────────────────
Tipo: Tiempo Completo
Fecha inicio: 01/02/2024
Fecha fin: Indefinido
Horario: Lunes a Viernes, 9am-6pm

**Compensación:**
- Salario mensual: $15,000
- Bono por ventas: 2% de ventas
- Vales de despensa: $1,500/mes

**Documentos adjuntos:**
✓ Contrato firmado (PDF)
✓ Identificación oficial
✓ Comprobante domicilio
✓ RFC
        `,
        tips: [
          'Guarda copias digitales de documentos firmados',
          'Programa alertas para renovaciones',
          'Revisa que cumpla con leyes laborales',
          'Actualiza si hay cambios de salario'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué es importante registrar empleados en Odoo?',
          options: [
            'No es importante',
            'Para espiar a los empleados',
            'Para tener su información organizada y gestionar RRHH eficientemente',
            'Solo por cumplir un requisito'
          ],
          correct: 2,
          explanation: 'Tener la información organizada te permite gestionar mejor: contactar en emergencias, calcular nómina, planificar y cumplir obligaciones legales.'
        },
        {
          id: 'q2',
          question: '¿Qué información debe tener el contrato de trabajo?',
          options: [
            'Solo el nombre',
            'Tipo de contrato, fechas, horario, salario y prestaciones',
            'Solo el salario',
            'Solo las vacaciones'
          ],
          correct: 1,
          explanation: 'El contrato debe ser completo: define qué tipo de trabajo es, cuándo inicia/termina, horarios, salario y todas las prestaciones acordadas.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Registra un Empleado',
      description: 'Crea la ficha de un empleado ficticio',
      steps: [
        'Ve a Empleados > Crear',
        'Llena información personal básica',
        'Asígnalo a un departamento',
        'Indica su jefe directo',
        'Agrega un contrato con salario y horario',
        'Guarda y observa el organigrama'
      ]
    }
  },

  // ========================================
  // GASTOS
  // ========================================
  'exp-001': {
    title: 'Configuración de Categorías de Gastos',
    introduction: `
      El módulo de Gastos de Odoo 19 te permite gestionar todos los gastos de empleados de manera eficiente:
      desde el registro inicial hasta el reembolso final. Una configuración adecuada de las categorías de
      gastos te ayudará a controlar, aprobar y reembolsar los gastos de tu equipo de forma organizada.
    `,
    sections: [
      {
        title: '1. Activación y Configuración Inicial',
        content: `
          Antes de que tus empleados puedan registrar gastos, necesitas configurar el módulo correctamente.

          **Pasos iniciales:**
          - Activar el módulo de Gastos desde Aplicaciones
          - Configurar las políticas de aprobación
          - Definir límites de gastos por categoría
          - Establecer los aprobadores por departamento
        `,
        example: `
          📍 Ruta en Odoo: Aplicaciones > Buscar "Gastos" > Instalar

          Luego: Gastos > Configuración > Ajustes

          **Configuraciones clave:**
          ✓ Activar aprobación por gerente
          ✓ Permitir adjuntar recibos
          ✓ Configurar límites de gasto
          ✓ Habilitar re-facturación a clientes (si aplica)
        `,
        tips: [
          'Define claramente quién puede aprobar gastos en cada departamento',
          'Establece límites de gasto para evitar sorpresas',
          'Activa la opción de adjuntar recibos para mejor control'
        ]
      },
      {
        title: '2. Crear Categorías de Gastos',
        content: `
          Las categorías de gastos te ayudan a organizar y controlar los diferentes tipos de gastos
          que tus empleados pueden realizar.

          **Categorías comunes:**
          - Transporte: Taxis, combustible, estacionamiento
          - Alimentación: Comidas de negocios, cafeterías
          - Hospedaje: Hoteles durante viajes de trabajo
          - Comunicaciones: Llamadas telefónicas, internet
          - Material de oficina: Suministros y papelería
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Configuración > Categorías de Gastos

          **Ejemplo: Categoría "Comidas de Negocios"**

          ~~~text
          Nombre: Comidas de Negocios
          Cuenta contable: 6350 - Gastos de representación
          Tipo de gasto: IVA deducible
          Límite máximo: $500 por comida
          Requiere aprobación: Sí (gerente)
          Re-facturable a cliente: Opcional
          ~~~

          **Configuración de límites:**
          - Sin límite: Para gastos pequeños (ej: café)
          - Límite bajo ($100): Comidas casuales
          - Límite medio ($500): Comidas formales
          - Límite alto ($2,000): Hospedaje
        `,
        tips: [
          'Crea solo las categorías que realmente necesitas',
          'Asigna las cuentas contables correctas desde el inicio',
          'Establece límites realistas pero controlados',
          'Define claramente qué requiere aprobación'
        ]
      },
      {
        title: '3. Productos y Políticas de Gastos',
        content: `
          En Odoo, cada categoría de gasto está vinculada a un producto. Esto permite un mejor
          control contable y facilita la re-facturación a clientes cuando sea necesario.

          **Configuración de productos:**
          - Nombre descriptivo del gasto
          - Precio de referencia (opcional)
          - Impuestos aplicables (IVA, retenciones)
          - Cuenta de gasto en contabilidad
          - Política de re-facturación
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Configuración > Categorías de Gastos > Crear

          **Producto: "Gasolina"**

          ~~~text
          Nombre del producto: Gasolina
          Descripción: Combustible para vehículo de trabajo
          Costo de referencia: Variable
          Impuesto incluido: IVA 16%
          Cuenta contable: 6320 - Gastos de transporte

          POLÍTICA DE APROBACIÓN:
          ✓ Monto menor a $300: Aprobación automática
          ✓ Monto $300-$1,000: Requiere aprobación de jefe
          ✓ Monto mayor a $1,000: Requiere aprobación de gerencia
          ~~~

          **Re-facturación:**
          - Al costo: El cliente paga exactamente lo gastado
          - Precio de venta: Se aplica un margen (ej: +20%)
        `,
        tips: [
          'Vincula correctamente los impuestos según tu país',
          'Define políticas claras de aprobación por montos',
          'Configura la re-facturación si tus empleados cobran gastos a clientes',
          'Usa precios de referencia para detectar gastos inusuales'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué es importante configurar categorías de gastos?',
          options: [
            'No es necesario configurarlas',
            'Para organizar los gastos, controlar límites y facilitar la contabilidad',
            'Solo para que se vea bonito el sistema',
            'Para complicar el proceso de gastos'
          ],
          correct: 1,
          explanation: 'Las categorías ayudan a organizar los gastos por tipo, establecer límites de control, asignar cuentas contables correctas y facilitar la aprobación y análisis.'
        },
        {
          id: 'q2',
          question: '¿Qué debe incluir una política de gastos bien configurada?',
          options: [
            'Solo el nombre de la categoría',
            'Nombre, cuenta contable, límites, requisitos de aprobación e impuestos',
            'Solo el límite de gasto',
            'Solo la cuenta contable'
          ],
          correct: 1,
          explanation: 'Una política completa incluye: categoría clara, cuenta contable, límites de gasto, quién debe aprobar, impuestos aplicables y si es re-facturable.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Crear Categorías de Gastos',
      description: 'Configura las categorías básicas de gastos para tu empresa:',
      steps: [
        {
          id: 'step1',
          task: 'Crea una categoría "Transporte" con límite de $500. ¿Qué cuenta contable usarías?',
          validation: 'multiple-choice',
          options: [
            'Cuentas por cobrar',
            'Gastos de transporte',
            'Ingresos por ventas',
            'Activos fijos'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Un empleado necesita registrar una comida de negocios de $350 con IVA. ¿Qué categoría crearías?',
          validation: 'multiple-choice',
          options: [
            'Gastos generales',
            'Comidas de negocios / Gastos de representación',
            'Salarios',
            'Inventario'
          ],
          correct: 1
        }
      ]
    }
  },

  'exp-002': {
    title: 'Registrar y Enviar Gastos',
    introduction: `
      Una vez configuradas las categorías, tus empleados pueden comenzar a registrar sus gastos.
      Odoo ofrece múltiples formas de hacerlo: desde el registro manual hasta el envío automático
      por correo electrónico, facilitando el proceso para todo el equipo.
    `,
    sections: [
      {
        title: '1. Registro Manual de Gastos',
        content: `
          La forma más directa de registrar un gasto es crearlo manualmente en el sistema.

          **Información necesaria:**
          - Categoría del gasto
          - Descripción clara del gasto
          - Monto total gastado
          - Fecha del gasto
          - Empleado que realizó el gasto
          - Recibo o comprobante (adjunto)
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Mis Gastos > Crear

          **Registro de gasto de transporte:**

          ~~~text
          DATOS DEL GASTO:
          ────────────────────────────────────
          Categoría: Transporte - Taxi
          Descripción: Taxi para reunión con cliente ABC
          Empleado: Juan Pérez
          Fecha: 15/03/2024
          Monto: $85.00
          Pagado por: Empleado
          Cliente: ABC Corporation (si es re-facturable)

          ADJUNTOS:
          ✓ Recibo del taxi (foto o PDF)
          ~~~

          **Datos opcionales:**
          - Notas adicionales
          - Proyecto asociado
          - Centro de costos
          - Analítica contable
        `,
        tips: [
          'Registra los gastos lo antes posible para no olvidar detalles',
          'Toma foto del recibo inmediatamente después del gasto',
          'Describe claramente el motivo del gasto',
          'Indica si es un gasto re-facturable al cliente'
        ]
      },
      {
        title: '2. Subir Recibos con Digitalización',
        content: `
          Odoo puede digitalizar automáticamente los recibos que subes, extrayendo la información
          relevante y creando el gasto automáticamente.

          **Proceso de digitalización:**
          - Sube la foto o PDF del recibo
          - Odoo extrae: fecha, monto, proveedor
          - Revisa y corrige si es necesario
          - Selecciona la categoría correcta
          - Guarda el gasto
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Mis Gastos > Subir

          **Proceso paso a paso:**

          ~~~text
          1. SUBIR RECIBO
             - Arrastra el archivo o haz clic para seleccionar
             - Formatos aceptados: JPG, PNG, PDF

          2. DIGITALIZACIÓN AUTOMÁTICA
             Odoo detecta:
             ✓ Fecha: 15/03/2024
             ✓ Proveedor: Uber México
             ✓ Monto: $125.50
             ✓ Concepto: Viaje (detectado por IA)

          3. REVISIÓN Y AJUSTE
             - Verifica que los datos sean correctos
             - Selecciona categoría: "Transporte"
             - Agrega descripción: "Viaje a reunión cliente"
             - Confirma creación

          4. GASTO CREADO
             El gasto ya está en tu lista para enviar
          ~~~
        `,
        tips: [
          'Asegúrate que la foto del recibo sea clara y legible',
          'Siempre revisa los datos extraídos antes de confirmar',
          'La digitalización funciona mejor con recibos estándar',
          'Guarda los recibos físicos por el tiempo que requiera la ley'
        ]
      },
      {
        title: '3. Enviar Gastos por Correo',
        content: `
          Para máxima comodidad, puedes enviar recibos directamente por email y Odoo creará
          el gasto automáticamente.

          **Configuración:**
          - Cada empleado tiene un email único de gastos
          - Formato: gastos+empleado123@tuempresa.odoo.com
          - Envía el recibo como adjunto
          - Odoo procesa y crea el gasto automáticamente
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Configuración > Ajustes > Email de Gastos

          **Uso del email de gastos:**

          ~~~text
          DE: juan.perez@empresa.com
          PARA: gastos+juan@empresa.odoo.com
          ASUNTO: Comida reunión cliente
          ADJUNTO: recibo_restaurante.jpg

          CUERPO DEL EMAIL:
          "Comida de negocios con cliente ABC Corp para
          discutir proyecto de software. Total: $450"
          ~~~

          **Odoo procesará automáticamente:**
          ✓ Crea el gasto
          ✓ Adjunta el recibo
          ✓ Extrae monto y fecha
          ✓ Usa la descripción del email
          ✓ Te notifica que está listo para revisión
        `,
        tips: [
          'Guarda el email de gastos en tus contactos',
          'Envía un recibo por email para mejor organización',
          'Incluye descripción clara en el asunto o cuerpo',
          'Revisa los gastos creados por email antes de enviarlos a aprobación'
        ]
      },
      {
        title: '4. Crear Reportes de Gastos',
        content: `
          Una vez registrados varios gastos, es momento de agruparlos en un reporte para
          enviar a aprobación y posterior reembolso.

          **Cuándo crear un reporte:**
          - Al final de un viaje de negocios
          - Al final del mes
          - Cuando acumulas varios gastos pendientes
          - Según la política de tu empresa
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Mis Gastos > Crear Reporte

          **Reporte de gastos - Marzo 2024:**

          ~~~text
          REPORTE: Viaje de Negocios - Ciudad de México
          Empleado: Juan Pérez
          Periodo: 13-15 Marzo 2024
          Gerente: María González

          GASTOS INCLUIDOS:
          ────────────────────────────────────
          13/03 - Taxi aeropuerto         $  85.00
          13/03 - Hotel (2 noches)        $1,200.00
          13/03 - Cena reunión            $  350.00
          14/03 - Desayuno cliente        $  120.00
          14/03 - Taxi a oficina cliente  $   65.00
          15/03 - Comida despedida        $  280.00
          15/03 - Taxi a aeropuerto       $   90.00
          ────────────────────────────────────
          TOTAL A REEMBOLSAR:             $2,190.00

          Adjuntos: 7 recibos
          Estado: Borrador
          ~~~

          **Opciones al crear reporte:**
          ✓ Seleccionar gastos específicos
          ✓ Seleccionar todos los gastos pendientes
          ✓ Filtrar por fecha o categoría
        `,
        tips: [
          'Agrupa gastos relacionados en un mismo reporte',
          'Revisa que todos los recibos estén adjuntos',
          'Verifica los montos antes de enviar',
          'Agrega notas explicativas si es necesario'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la ventaja de usar la digitalización de recibos en Odoo?',
          options: [
            'No tiene ventajas',
            'Odoo extrae automáticamente la información del recibo ahorrando tiempo',
            'Es más lento que el registro manual',
            'Solo funciona con recibos internacionales'
          ],
          correct: 1,
          explanation: 'La digitalización automática extrae fecha, monto y proveedor del recibo, ahorrando tiempo y reduciendo errores de captura manual.'
        },
        {
          id: 'q2',
          question: '¿Cuándo debes crear un reporte de gastos?',
          options: [
            'Por cada gasto individual',
            'Nunca, no es necesario',
            'Al agrupar varios gastos relacionados para enviar a aprobación',
            'Solo una vez al año'
          ],
          correct: 2,
          explanation: 'Los reportes de gastos agrupan múltiples gastos relacionados (ej: viaje de negocios, gastos del mes) para enviarlos juntos a aprobación y reembolso.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Registrar Gastos de un Viaje',
      description: 'Simula el registro de gastos de un viaje de negocios:',
      steps: [
        {
          id: 'step1',
          task: 'Registra un taxi al aeropuerto por $95. ¿Qué categoría usas?',
          validation: 'multiple-choice',
          options: [
            'Comidas',
            'Transporte',
            'Hospedaje',
            'Oficina'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Hotel por 2 noches: $1,400. Comida con cliente: $380. Taxi de regreso: $90. ¿Cuál es el total del reporte?',
          validation: 'numeric',
          correctAnswer: 1965,
          tolerance: 5,
          hints: ['$95 + $1,400 + $380 + $90']
        }
      ]
    }
  },

  'exp-003': {
    title: 'Aprobar y Reembolsar',
    introduction: `
      El proceso de aprobación y reembolso es fundamental para mantener el control financiero.
      Los reportes de gastos deben ser revisados y aprobados antes de proceder al reembolso,
      asegurando que todos los gastos cumplan con las políticas de la empresa.
    `,
    sections: [
      {
        title: '1. Enviar Reportes a Aprobación',
        content: `
          Una vez que el empleado ha creado su reporte de gastos, debe enviarlo a su gerente
          o aprobador designado para su revisión.

          **Antes de enviar, verifica:**
          - Todos los gastos tienen recibos adjuntos
          - Los montos son correctos
          - Las descripciones son claras
          - No faltan gastos del periodo
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Mis Reportes > [Seleccionar reporte] > Enviar a Gerente

          **Estado del reporte:**

          ~~~text
          ANTES DE ENVIAR:
          Estado: Borrador
          ✓ Puedes editar
          ✓ Puedes agregar/quitar gastos
          ✓ No visible para aprobadores

          DESPUÉS DE ENVIAR:
          Estado: Enviado
          ⚠️ Ya no puedes editar
          ✓ Visible para tu gerente
          ✓ Esperando aprobación

          NOTIFICACIONES:
          ✓ El gerente recibe email de notificación
          ✓ Aparece en su bandeja de aprobaciones
          ✓ Tú recibes confirmación de envío
          ~~~
        `,
        tips: [
          'Revisa todo antes de enviar, no podrás editar después',
          'Asegúrate que tu gerente esté correctamente asignado',
          'Envía los gastos regularmente, no los acumules por meses',
          'Incluye notas explicativas para gastos inusuales'
        ]
      },
      {
        title: '2. Proceso de Aprobación',
        content: `
          Los aprobadores (gerentes, directores) revisan los reportes de gastos para validar
          que cumplan con las políticas de la empresa.

          **Derechos de aprobación:**
          - Aprobador de Equipo: Puede aprobar gastos de su equipo
          - Aprobador Total: Puede aprobar cualquier gasto
          - Solo los usuarios con estos derechos ven reportes pendientes
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Reportes a Aprobar

          **Vista del aprobador:**

          ~~~text
          REPORTE: Viaje CDMX - Juan Pérez
          Monto total: $2,190.00
          Gastos: 7 items
          Recibos adjuntos: 7/7 ✓

          REVISIÓN LÍNEA POR LÍNEA:
          ────────────────────────────────────
          ✅ Taxi aeropuerto      $85.00    OK
          ✅ Hotel 2 noches     $1,200.00   Dentro de política
          ⚠️  Cena reunión        $350.00   Límite: $300
             → Revisar justificación
          ✅ Desayuno            $120.00    OK
          ✅ Taxi                 $65.00    OK
          ✅ Comida              $280.00    OK
          ✅ Taxi regreso         $90.00    OK

          OPCIONES:
          [Aprobar] [Rechazar] [Solicitar Aclaración]
          ~~~

          **Criterios de aprobación:**
          ✓ Gastos dentro de límites establecidos
          ✓ Recibos válidos y legibles
          ✓ Descripciones claras del motivo
          ✓ Categorías correctas
        `,
        tips: [
          'Revisa cada gasto individualmente, no solo el total',
          'Verifica que los recibos adjuntos coincidan con los montos',
          'Si algo no es claro, solicita aclaración antes de aprobar',
          'Puedes aprobar parcialmente y rechazar gastos específicos'
        ]
      },
      {
        title: '3. Aprobar, Rechazar o Solicitar Cambios',
        content: `
          Como aprobador, tienes tres opciones principales al revisar un reporte de gastos.

          **Opciones disponibles:**
          - **Aprobar:** El reporte procede a contabilización y reembolso
          - **Rechazar:** El reporte regresa al empleado con comentarios
          - **Solicitar aclaración:** Pausar para pedir más información
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Reportes a Aprobar > [Seleccionar] > [Acción]

          **Escenario 1: Aprobar**
          ~~~text
          ✅ APROBADO
          Reporte: Viaje CDMX
          Aprobado por: María González
          Fecha aprobación: 18/03/2024

          SIGUIENTE PASO:
          → Contabilización automática
          → Programación de reembolso
          ~~~

          **Escenario 2: Rechazar**
          ~~~text
          ❌ RECHAZADO
          Motivo: "La cena de $350 excede el límite de
          $300. Por favor, separa ese gasto y justifica
          el exceso con una nota explicativa."

          ACCIÓN DEL EMPLEADO:
          → Recibe notificación
          → Edita el reporte
          → Vuelve a enviar
          ~~~

          **Escenario 3: Solicitar Aclaración**
          ~~~text
          ⏸️ EN PAUSA
          Pregunta: "¿El hotel incluye desayuno? Veo
          un gasto separado de desayuno y quiero
          verificar que no haya duplicidad."

          PROCESO:
          → Empleado recibe pregunta
          → Responde y adjunta evidencia
          → Aprobador revisa nuevamente
          ~~~
        `,
        tips: [
          'Sé específico al rechazar: indica exactamente qué debe corregirse',
          'Usa "Solicitar aclaración" para dudas antes de rechazar',
          'Documenta el motivo de rechazo para auditorías futuras',
          'Comunica las políticas claramente a tu equipo para evitar rechazos'
        ]
      },
      {
        title: '4. Contabilización y Reembolso',
        content: `
          Una vez aprobado el reporte, se procede a la contabilización y el reembolso al empleado.

          **Proceso automático:**
          - Odoo crea asientos contables
          - Registra el gasto en las cuentas correspondientes
          - Genera cuenta por pagar al empleado
          - Permite programar el pago
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Reportes > [Seleccionar aprobado] > Contabilizar

          **Asiento contable generado:**

          ~~~text
          DIARIO: Gastos de Personal
          Fecha: 18/03/2024
          Referencia: Viaje CDMX - Juan Pérez

          DEBE                           HABER
          ────────────────────────────────────────────
          Gastos de transporte    $240.00
          Gastos de hospedaje   $1,200.00
          Gastos de representación $750.00
                                          Cuentas por
                                          pagar empleados $2,190.00
          ────────────────────────────────────────────
          TOTAL                 $2,190.00  $2,190.00
          ~~~

          **Reembolso al empleado:**

          📍 Ruta: Contabilidad > Proveedores > Pagos > Crear Pago

          ~~~text
          PAGO A: Juan Pérez (Empleado)
          Monto: $2,190.00
          Método: Transferencia bancaria
          Cuenta bancaria: XXXX-1234 (Juan)
          Referencia: Reembolso gastos Viaje CDMX
          Fecha pago: 25/03/2024

          ✅ Pago registrado
          ✅ Notificación enviada al empleado
          ~~~
        `,
        tips: [
          'Configura un calendario de reembolsos (ej: quincenales)',
          'Verifica las cuentas bancarias de empleados antes del primer pago',
          'Los asientos contables se generan automáticamente',
          'Puedes pagar múltiples reportes en un solo lote de pagos'
        ]
      },
      {
        title: '5. Re-facturación a Clientes',
        content: `
          Algunos gastos pueden ser re-facturados a clientes. Odoo facilita este proceso
          integrándolo con el módulo de Ventas.

          **Cuándo re-facturar:**
          - Gastos de viaje para visitar al cliente
          - Comidas con el cliente
          - Hospedaje para proyecto del cliente
          - Cualquier gasto acordado en el contrato
        `,
        example: `
          📍 Ruta en Odoo: Gastos > [Gasto] > Pestaña "Ventas" > Cliente

          **Configuración de re-facturación:**

          ~~~text
          GASTO ORIGINAL:
          Hotel para reunión con Cliente ABC
          Costo: $1,200.00
          Empleado: Juan Pérez

          CONFIGURACIÓN:
          Cliente: ABC Corporation
          Pedido de venta: SO-2024-001
          Política: Al costo (sin margen)
          o
          Política: Precio de venta (+20% margen)

          RESULTADO EN FACTURA:
          ────────────────────────────────────
          Factura a: ABC Corporation

          Hospedaje - Reunión proyecto
          $1,200.00 (al costo)
          o
          $1,440.00 (con 20% margen)

          IVA 16%: $192.00 / $230.40
          Total: $1,392.00 / $1,670.40
          ~~~

          **Flujo completo:**
          1. Empleado registra gasto y selecciona cliente
          2. Se aprueba el gasto normalmente
          3. Al contabilizar, Odoo crea línea en pedido de venta
          4. Se factura al cliente automáticamente
          5. La empresa recupera el gasto (y margen si aplica)
        `,
        tips: [
          'Acuerda con el cliente qué gastos son re-facturables',
          'Define si re-facturas al costo o con margen',
          'Documenta bien para justificar los cargos al cliente',
          'Vincula gastos al pedido de venta correcto'
        ]
      },
      {
        title: '6. Análisis de Gastos',
        content: `
          Odoo proporciona herramientas de análisis para revisar los gastos de la empresa
          y detectar tendencias, excesos o áreas de optimización.

          **Reportes disponibles:**
          - Gastos por empleado
          - Gastos por categoría
          - Gastos por departamento
          - Gastos por proyecto/cliente
          - Tendencias mensuales
        `,
        example: `
          📍 Ruta en Odoo: Gastos > Reportes > Análisis de Gastos

          **Panel de análisis:**

          ~~~text
          GASTOS MARZO 2024
          ════════════════════════════════════════

          POR CATEGORÍA:
          ────────────────────────────────────
          Transporte           $3,450.00  (28%)
          Hospedaje            $4,800.00  (39%)
          Comidas              $2,890.00  (24%)
          Comunicaciones       $  680.00  (5%)
          Material oficina     $  450.00  (4%)
          ────────────────────────────────────
          TOTAL               $12,270.00

          POR EMPLEADO:
          ────────────────────────────────────
          Juan Pérez (Ventas)  $5,200.00
          Ana García (Ventas)  $4,100.00
          Carlos López (Mkt)   $2,970.00

          ALERTAS:
          ⚠️ Gastos de transporte +35% vs mes anterior
          ⚠️ Juan Pérez excedió presupuesto mensual

          OPORTUNIDADES:
          💡 Negociar tarifa corporativa con hotel
          💡 Implementar política de viajes compartidos
          ~~~
        `,
        tips: [
          'Revisa los reportes mensualmente para detectar patrones',
          'Establece presupuestos por departamento o empleado',
          'Identifica oportunidades de negociación con proveedores frecuentes',
          'Usa los datos para ajustar políticas de gastos'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué debe hacer un aprobador si un gasto excede el límite establecido?',
          options: [
            'Aprobar automáticamente',
            'Ignorar el reporte',
            'Rechazar o solicitar justificación según el caso',
            'Modificar el monto sin preguntar'
          ],
          correct: 2,
          explanation: 'Si un gasto excede el límite, el aprobador debe evaluar si hay justificación válida. Puede solicitar aclaración antes de aprobar o rechazar según las políticas.'
        },
        {
          id: 'q2',
          question: '¿Cuándo se debe re-facturar un gasto a un cliente?',
          options: [
            'Siempre, todos los gastos',
            'Nunca, la empresa siempre asume los gastos',
            'Cuando el gasto fue realizado específicamente para ese cliente y está acordado',
            'Solo los gastos de comida'
          ],
          correct: 2,
          explanation: 'Los gastos se re-facturan cuando fueron realizados específicamente para un cliente (viaje para visitarlo, hospedaje para su proyecto) y está acordado en el contrato.'
        },
        {
          id: 'q3',
          question: '¿Qué sucede después de aprobar un reporte de gastos?',
          options: [
            'No pasa nada más',
            'Se contabiliza automáticamente y se programa el reembolso',
            'Se elimina del sistema',
            'El empleado debe volver a enviarlo'
          ],
          correct: 1,
          explanation: 'Al aprobar, Odoo automáticamente crea los asientos contables, registra la deuda con el empleado y permite programar el pago de reembolso.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Ciclo Completo de Aprobación',
      description: 'Simula el proceso completo de aprobación y reembolso:',
      steps: [
        {
          id: 'step1',
          task: 'Un empleado envía un reporte con 3 gastos: Taxi $80, Hotel $1,200, Comida $450. El límite de comida es $300. ¿Qué haces?',
          validation: 'multiple-choice',
          options: [
            'Aprobar todo sin revisar',
            'Rechazar todo el reporte',
            'Solicitar justificación del exceso en comida antes de decidir',
            'Modificar el monto de la comida a $300'
          ],
          correct: 2
        },
        {
          id: 'step2',
          task: 'Aprobaste un reporte de $2,500. El empleado usó su dinero. ¿Cuánto debes reembolsar?',
          validation: 'numeric',
          correctAnswer: 2500,
          tolerance: 0,
          hints: ['Si el empleado pagó con su dinero, reembolsas el total aprobado']
        },
        {
          id: 'step3',
          task: 'Un gasto de $800 de hotel fue para visitar al cliente XYZ. Política: re-facturar al costo. ¿Cuánto cargas al cliente (sin IVA)?',
          validation: 'numeric',
          correctAnswer: 800,
          tolerance: 0,
          hints: ['Al costo significa sin margen, cobras exactamente lo que costó']
        }
      ]
    }
  },

  // ========================================
  // EMAIL MARKETING - TODAS LAS LECCIONES
  // ========================================

  'email-001': {
    title: 'Introducción a Email Marketing en Odoo',
    introduction: `
      El Email Marketing es una de las herramientas más poderosas y rentables para comunicarte con tus clientes y generar ventas. Odoo 19 ofrece un módulo completo de Email Marketing que te permite crear campañas profesionales, segmentar tu audiencia y medir resultados en tiempo real.

      Con el Email Marketing de Odoo, puedes diseñar emails atractivos sin necesidad de conocimientos técnicos, automatizar tus envíos y generar leads calificados para tu negocio. Todo integrado con tu CRM, ventas y base de datos de contactos.
    `,
    sections: [
      {
        title: '1. ¿Qué es Email Marketing en Odoo?',
        content: `
          El módulo de Email Marketing de Odoo te permite crear y gestionar campañas de email masivas de forma profesional.

          **Características principales:**
          - Editor visual drag & drop para diseñar emails
          - Plantillas profesionales pre-diseñadas
          - Segmentación avanzada de audiencias
          - A/B testing para optimizar resultados
          - Analytics detallado de cada campaña
          - Integración total con CRM y ventas
        `,
        example: `
          📍 Ruta en Odoo: Aplicaciones > Buscar "Email Marketing" > Instalar

          **Casos de uso típicos:**

          **1. Newsletter mensual:**
          Envías actualizaciones a 5,000 suscriptores cada mes
          → Tasa de apertura: 28%
          → Clicks: 12%
          → Leads generados: 60

          **2. Campaña promocional:**
          Descuento del 20% solo para clientes VIP (500 contactos)
          → Tasa de apertura: 45%
          → Conversión: 8%
          → Ventas: 40 pedidos x $150 promedio = $6,000

          **3. Recuperación de carritos abandonados:**
          Recordatorio a 200 usuarios que no completaron compra
          → Tasa de apertura: 35%
          → Recuperación: 15%
          → Recuperados: 30 carritos x $80 = $2,400
        `,
        tips: [
          'Comienza con una plantilla para no partir de cero',
          'Define claramente el objetivo de cada campaña antes de crearla',
          'Mantén tu base de datos de contactos actualizada y limpia',
          'Respeta siempre las leyes de protección de datos (GDPR, CAN-SPAM)',
          'Envía emails en horarios óptimos según tu audiencia (martes-jueves, 10am-2pm suele funcionar bien)'
        ]
      },
      {
        title: '2. Interfaz y Navegación',
        content: `
          La interfaz de Email Marketing está diseñada para ser intuitiva y eficiente.

          **Secciones principales:**
          - **Mailings:** Tus campañas de email (borradores, programadas, enviadas)
          - **Listas de correo:** Segmentos de tu audiencia
          - **Plantillas:** Diseños reutilizables
          - **Configuración:** Ajustes generales y remitente
          - **Reportes:** Analytics y métricas
        `,
        example: `
          📍 Ruta: Email Marketing > Dashboard

          **Vista del dashboard:**

          Campañas activas:              3
          Emails programados:            2
          Tasa de apertura promedio:    32%
          Tasa de clicks promedio:      14%
          Total suscriptores:         12,450

          **Campañas recientes:**

          | Campaña              | Enviados | Abiertos | Clicks | Conversión |
          | -------------------- | -------- | -------- | ------ | ---------- |
          | Black Friday 2025    | 8,500    | 3,400    | 1,190  | 8.2%       |
          | Newsletter Nov       | 12,000   | 3,840    | 1,536  | 4.1%       |
          | Lanzamiento Producto | 2,500    | 1,125    | 450    | 12.5%      |

          **Métricas clave:**
          ✓ Open rate (tasa de apertura)
          ✓ Click rate (tasa de clicks)
          ✓ Bounce rate (rebotes)
          ✓ Unsubscribe rate (bajas)
          ✓ Conversion rate (conversiones)
        `,
        tips: [
          'Revisa el dashboard semanalmente para identificar tendencias',
          'Usa filtros para encontrar rápidamente campañas específicas',
          'Marca como favoritas tus mejores plantillas',
          'Configura notificaciones para eventos importantes'
        ]
      },
      {
        title: '3. Mejores Prácticas de Email Marketing',
        content: `
          Seguir las mejores prácticas garantiza mejores resultados y protege tu reputación.

          **Reglas de oro:**
          - **Permiso:** Solo envía a quien te dio permiso explícito
          - **Valor:** Cada email debe aportar valor al receptor
          - **Frecuencia:** No satures a tu audiencia (1-2 emails/semana máximo)
          - **Mobile-first:** 70% abre emails en móvil, diseña para ello
          - **Subject line:** El asunto es crítico para la apertura
          - **CTA claro:** Botón de acción visible y único
        `,
        example: `
          **EJEMPLO MALO ❌**

          Subject: "Hola"
          Contenido: Texto largo sin formato, múltiples productos, 5 botones diferentes, sin personalización
          Resultado: 8% apertura, 1% clicks

          **EJEMPLO BUENO ✅**

          Subject: "María, 20% OFF exclusivo para ti (termina hoy)"
          Contenido:
          - Saludo personalizado
          - 1 producto estrella con imagen
          - Beneficio claro del descuento
          - 1 solo CTA grande: "Usar mi descuento"
          - Diseño responsive
          - Opción de cancelar suscripción visible

          Resultado: 42% apertura, 18% clicks, 7% conversión

          **Elementos del email exitoso:**
          ✓ Subject line personalizado con urgencia
          ✓ Preheader atractivo
          ✓ Contenido escaneable (bullets, negritas)
          ✓ Imágenes optimizadas (< 100KB cada una)
          ✓ CTA único y visible
          ✓ Unsubscribe claro
        `,
        tips: [
          'Personaliza siempre: usa el nombre del destinatario',
          'Testea en diferentes dispositivos antes de enviar',
          'Evita palabras spam: "gratis", "garantizado", exceso de mayúsculas',
          'Incluye texto alternativo (ALT) en todas las imágenes',
          'Mantén el ratio 60% texto / 40% imágenes'
        ]
      },
      {
        title: '4. Configuración Inicial',
        content: `
          Antes de lanzar tu primera campaña, configura correctamente los ajustes básicos.

          **Configuración esencial:**
          - **Remitente:** Nombre y email de envío (ej: "Pedro de MiEmpresa" <noreply@miempresa.com>)
          - **Dominio:** Verificación de dominio (SPF, DKIM, DMARC)
          - **Plantilla por defecto:** Footer con datos de la empresa
          - **Unsubscribe:** Link de baja automático
        `,
        example: `
          📍 Ruta: Email Marketing > Configuración > Ajustes

          **Configuración de remitente:**

          ~~~text
          Nombre del remitente: "Equipo de Marketing - TechCorp"
          Email del remitente: marketing@techcorp.com
          Reply-to: contacto@techcorp.com

          Dirección de la empresa:
          TechCorp Solutions S.A. de C.V.
          Av. Reforma 123, Piso 5
          Ciudad de México, 06600
          México
          ~~~

          **Verificación de dominio:**
          ✓ SPF record configurado
          ✓ DKIM signature activa
          ✓ DMARC policy: p=quarantine

          **Footer automático:**
          ✓ Dirección física de la empresa (requerido legalmente)
          ✓ Link de baja de suscripción
          ✓ Links a redes sociales
          ✓ Política de privacidad
        `,
        tips: [
          'Usa un dominio verificado para mejor deliverability',
          'Nunca uses emails personales como remitente (@gmail, @hotmail)',
          'Configura un email reply-to que sí revises',
          'Cumple con requisitos legales de tu país (dirección física)',
          'Calienta tu dominio enviando primero a pequeños grupos'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la ventaja principal del Email Marketing?',
          options: [
            'Es gratis siempre',
            'No requiere permiso de los destinatarios',
            'Es una herramienta muy rentable con alto ROI y fácil medición',
            'Solo funciona para empresas grandes'
          ],
          correct: 2,
          explanation: 'El Email Marketing tiene uno de los mejores ROI (retorno de inversión) de todos los canales de marketing, con medición precisa de resultados.'
        },
        {
          id: 'q2',
          question: '¿Qué porcentaje aproximado de usuarios abre emails en dispositivos móviles?',
          options: [
            '10%',
            '30%',
            '50%',
            '70%'
          ],
          correct: 3,
          explanation: 'Aproximadamente el 70% de los emails se abren en dispositivos móviles, por eso es crítico diseñar emails responsive.'
        },
        {
          id: 'q3',
          question: '¿Qué elemento es MÁS importante para lograr que abran tu email?',
          options: [
            'El color del botón',
            'El asunto (subject line)',
            'El tamaño de las imágenes',
            'La hora de envío'
          ],
          correct: 1,
          explanation: 'El asunto es lo primero que ve el destinatario y determina en gran medida si abrirá o no tu email. Un mal asunto = email no abierto.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Planifica tu Primera Campaña',
      description: 'Define los elementos clave de tu primera campaña de email marketing',
      steps: [
        {
          id: 'step1',
          task: 'Define el objetivo de tu campaña. ¿Cuál de estos es un objetivo SMART (específico y medible)?',
          validation: 'multiple-choice',
          options: [
            'Aumentar las ventas',
            'Generar 50 leads calificados en 7 días',
            'Mandar emails a muchas personas',
            'Mejorar la imagen de marca'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Tu producto cuesta $100. Enviarás a 1,000 personas. Si logras 30% apertura, 15% clicks y 5% conversión, ¿cuánto venderás?',
          validation: 'numeric',
          correctAnswer: 1500,
          tolerance: 100,
          hints: ['1,000 emails → 30% abiertos = 300 → 15% de 300 = 45 clicks → 5% de 1,000 = 50 conversiones → 50 × $100 = ?']
        },
        {
          id: 'step3',
          task: 'Escribe un subject line efectivo para una campaña de descuento del 25% (máximo 50 caracteres, incluye urgencia y personalización)',
          validation: 'text',
          correctAnswer: '[Nombre], tu 25% OFF termina hoy',
          hints: ['Incluye: nombre personalizado, beneficio claro, urgencia']
        }
      ]
    }
  },

  'email-002': {
    title: 'Creación y Gestión de Listas de Correo',
    introduction: `
      Las listas de correo son la base de tu estrategia de email marketing. Una lista bien organizada y segmentada te permite enviar mensajes relevantes a las personas correctas, aumentando drásticamente tus tasas de apertura y conversión.

      Odoo 19 te ofrece herramientas poderosas para crear, importar, segmentar y gestionar tus listas de correo de manera profesional y conforme a las regulaciones de privacidad.
    `,
    sections: [
      {
        title: '1. Crear Listas de Correo',
        content: `
          Las listas te permiten organizar tus contactos en grupos específicos según criterios que definas.

          **Tipos de listas:**
          - **Públicas:** Los usuarios pueden suscribirse desde tu sitio web
          - **Privadas:** Solo tú puedes añadir contactos
          - **Estáticas:** Lista fija de contactos que actualizas manualmente
          - **Dinámicas:** Se actualizan automáticamente según criterios
        `,
        example: `
          📍 Ruta en Odoo: Email Marketing > Listas de correo > Crear

          **Ejemplo de listas segmentadas:**

          **Lista: "Clientes VIP"** (Privada, Dinámica)
          Criterios:
          - Total de compras > $5,000
          - Última compra < 90 días
          - País: México
          Total contactos: 342

          **Lista: "Newsletter General"** (Pública, Estática)
          - Suscriptores del sitio web
          - Opt-in confirmado
          Total contactos: 12,450

          **Lista: "Leads Tecnología"** (Privada, Dinámica)
          Criterios:
          - Etiqueta: "Tech"
          - No es cliente
          - Descargó ebook
          Total contactos: 890

          **Configuración de una lista:**

          ~~~text
          Nombre: Clientes VIP México
          Tipo: Privada
          Modo: Dinámico

          Filtros:
          [Ventas totales] [>] [$5,000]
          Y
          [Última compra] [<] [90 días]
          Y
          [País] [=] [México]

          ✓ Actualizar automáticamente cada día
          ✓ Enviar email de bienvenida al entrar
          ✓ Permitir bajas
          ~~~
        `,
        tips: [
          'Usa listas dinámicas para segmentos que cambian frecuentemente',
          'Nombra las listas de forma descriptiva y clara',
          'No mezcles contactos B2B y B2C en la misma lista',
          'Revisa y limpia tus listas cada 3 meses',
          'Crea listas por etapa del customer journey'
        ]
      },
      {
        title: '2. Importar Contactos',
        content: `
          Importa contactos desde archivos CSV o Excel para poblar tus listas rápidamente.

          **Requisitos para importación:**
          - Formato CSV o XLSX
          - Columnas: Email (obligatorio), Nombre, Apellido, Empresa, etc.
          - Emails únicos sin duplicados
          - Opt-in válido (importante legalmente)
        `,
        example: `
          📍 Ruta: Email Marketing > Listas > [Lista] > Importar

          **Archivo CSV de ejemplo:**

          ~~~text
          email,nombre,apellido,empresa,pais,opt_in_date
          maria@techcorp.com,María,García,TechCorp,México,2025-01-15
          juan@retail.mx,Juan,López,RetailMX,México,2025-01-14
          ana@consulting.com,Ana,Martínez,Consulting Plus,España,2025-01-13
          ~~~

          **Proceso de importación:**

          1. Preparar archivo
             ✓ Verificar que todos tienen opt-in válido
             ✓ Eliminar duplicados
             ✓ Limpiar datos (espacios, caracteres raros)

          2. Importar en Odoo
             → Subir archivo CSV
             → Mapear columnas
             → Validar preview
             → Confirmar importación

          3. Verificación post-importación
             ✓ Contactos importados: 2,500
             ✓ Duplicados ignorados: 45
             ✓ Emails inválidos: 12
             ✓ Exitosos: 2,443

          **Mapeo de columnas:**
          CSV Column          →    Odoo Field
          email               →    Email
          nombre              →    First Name
          apellido            →    Last Name
          empresa             →    Company
          pais                →    Country
          opt_in_date         →    Subscription Date
        `,
        tips: [
          'NUNCA importes listas compradas, solo contactos opt-in',
          'Limpia los datos antes de importar (usa Excel o Google Sheets)',
          'Verifica que no haya duplicados antes de importar',
          'Guarda un backup del archivo original',
          'Importa primero un lote pequeño de prueba (50-100 contactos)'
        ]
      },
      {
        title: '3. Segmentación Avanzada',
        content: `
          La segmentación es la clave para campañas relevantes y efectivas.

          **Criterios de segmentación:**
          - **Demográficos:** Edad, género, ubicación, idioma
          - **Comportamiento:** Compras, clicks, descargas, visitas
          - **Engagement:** Aperturas, clicks, inactivos
          - **Ciclo de vida:** Leads, clientes nuevos, recurrentes, VIP
          - **Intereses:** Categorías de productos, temas
        `,
        example: `
          **Segmento 1: "Recuperación de Inactivos"**

          Criterios:
          - Última apertura > 60 días
          - Es cliente (al menos 1 compra)
          - No ha cancelado suscripción

          Objetivo: Reactivar con oferta especial
          Tamaño: 1,250 contactos

          Estrategia:
          Subject: "Te extrañamos [Nombre] - 30% solo para ti"
          Contenido: Descuento exclusivo por regresar

          **Segmento 2: "Super Fans"**

          Criterios:
          - Open rate > 60% últimos 90 días
          - Click rate > 25%
          - Ha compartido al menos 1 email

          Objetivo: Convertir en promotores
          Tamaño: 420 contactos

          Estrategia:
          Invitación a programa de referidos con incentivos

          **Segmento 3: "Leads Calientes"**

          Criterios:
          - Visitó pricing page
          - Descargó case study
          - Abrió últimos 3 emails
          - NO es cliente aún

          Objetivo: Conversión a venta
          Tamaño: 180 contactos

          Estrategia:
          Demo personalizada + descuento por pronto pago
        `,
        tips: [
          'Cuanto más específico el segmento, más efectiva la campaña',
          'Crea al menos 5 segmentos básicos antes de empezar',
          'Segmenta por nivel de engagement para ajustar frecuencia',
          'Usa segmentos para excluir (ej: no enviar promoción a clientes VIP)',
          'Actualiza los criterios de segmentación cada trimestre'
        ]
      },
      {
        title: '4. Gestión de Suscripciones',
        content: `
          Gestiona altas, bajas y preferencias de tus suscriptores de forma transparente.

          **Tipos de suscripción:**
          - **Single opt-in:** Usuario se suscribe directamente
          - **Double opt-in:** Usuario confirma por email (recomendado)
          - **Opt-out:** Usuario puede darse de baja en cualquier momento
        `,
        example: `
          📍 Ruta: Email Marketing > Configuración > Suscripciones

          **Flujo de double opt-in:**

          1. Usuario completa formulario web
             Email: cliente@empresa.com
             ✓ "Acepto recibir newsletter"

          2. Odoo envía email de confirmación
             Subject: "Confirma tu suscripción a TechCorp News"
             → Link: "Sí, confirmar suscripción"

          3. Usuario hace click en link
             Estado: Suscripción confirmada ✓
             Fecha: 15/01/2025 10:45

          4. Email de bienvenida automático
             "¡Bienvenido! Aquí está tu guía gratuita..."

          **Centro de preferencias:**

          ~~~text
          Gestiona tus suscripciones - cliente@empresa.com

          Newsletter semanal              [✓] Suscrito
          Ofertas y promociones           [✓] Suscrito
          Lanzamiento de productos        [ ] No suscrito
          Eventos y webinars              [✓] Suscrito

          Frecuencia preferida: Semanal

          [Guardar preferencias]  [Cancelar todas las suscripciones]
          ~~~

          **Razones de baja (analytics):**
          - "Muy frecuente": 45%
          - "No relevante": 30%
          - "No recuerdo suscribirme": 15%
          - "Otro": 10%
        `,
        tips: [
          'Usa siempre double opt-in para lista de calidad',
          'Haz el proceso de baja FÁCIL (1 click)',
          'Ofrece centro de preferencias antes de darse de baja',
          'Envía encuesta opcional al darse de baja',
          'No elimines bajas inmediatamente, guárdalas como "unsubscribed" por si piden reactivación'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia entre lista estática y dinámica?',
          options: [
            'No hay diferencia',
            'Estática se actualiza manualmente, dinámica se actualiza automáticamente según criterios',
            'Dinámica es solo para emails automatizados',
            'Estática es más profesional'
          ],
          correct: 1,
          explanation: 'Las listas dinámicas se actualizan automáticamente cuando los contactos cumplen los criterios definidos, mientras que las estáticas requieren actualización manual.'
        },
        {
          id: 'q2',
          question: '¿Por qué es recomendable usar double opt-in?',
          options: [
            'Es más rápido',
            'No es recomendable',
            'Asegura que los suscriptores realmente quieren recibir tus emails y mejora la calidad de la lista',
            'Es obligatorio por ley siempre'
          ],
          correct: 2,
          explanation: 'El double opt-in confirma que el suscriptor realmente quiere recibir emails, reduciendo spam complaints y mejorando engagement.'
        },
        {
          id: 'q3',
          question: '¿Qué tipo de contactos NUNCA debes importar?',
          options: [
            'Contactos de tu CRM',
            'Listas compradas sin opt-in verificado',
            'Asistentes a tus eventos',
            'Clientes actuales'
          ],
          correct: 1,
          explanation: 'Importar listas compradas sin permiso explícito es ilegal en muchas jurisdicciones (GDPR, CAN-SPAM) y daña tu reputación de envío.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Crea y Segmenta tus Listas',
      description: 'Diseña una estrategia de listas segmentadas para tu negocio',
      steps: [
        {
          id: 'step1',
          task: 'Tienes 10,000 contactos. Quieres crear un segmento "Clientes Activos". ¿Qué criterios usarías?',
          validation: 'multiple-choice',
          options: [
            'Todos los contactos que tengan email',
            'Solo los que abrieron el último email',
            'Quienes compraron en los últimos 90 días',
            'Los que viven en México'
          ],
          correct: 2
        },
        {
          id: 'step2',
          task: 'Importaste 500 contactos. 45 eran duplicados y 12 tenían emails inválidos. ¿Cuántos contactos nuevos añadiste?',
          validation: 'numeric',
          correctAnswer: 443,
          tolerance: 0,
          hints: ['500 - 45 duplicados - 12 inválidos = ?']
        },
        {
          id: 'step3',
          task: 'De tus 5,000 suscriptores, 200 se dan de baja cada mes. ¿Cuál es tu tasa de bajas mensual (en %)?',
          validation: 'numeric',
          correctAnswer: 4,
          tolerance: 0.5,
          hints: ['(200 / 5,000) × 100 = ?']
        }
      ]
    }
  },

  'email-003': {
    title: 'Diseñar Campañas de Email Efectivas',
    introduction: `
      El diseño de tu email es crucial para captar la atención y lograr que los destinatarios realicen la acción deseada. Un diseño profesional, limpio y responsive puede marcar la diferencia entre una campaña exitosa y un email ignorado.

      Odoo 19 incluye un potente editor drag & drop y plantillas profesionales que te permiten crear emails atractivos sin necesidad de conocer HTML o diseño gráfico.
    `,
    sections: [
      {
        title: '1. Editor de Emails Drag & Drop',
        content: `
          El editor visual de Odoo te permite diseñar emails profesionales arrastrando y soltando elementos.

          **Bloques disponibles:**
          - **Texto:** Párrafos, títulos, listas
          - **Imágenes:** Fotos de productos, banners
          - **Botones:** Call-to-actions destacados
          - **Columnas:** Layouts de 2, 3 o 4 columnas
          - **Separadores:** Líneas divisorias
          - **Redes sociales:** Íconos con links
          - **HTML personalizado:** Para necesidades avanzadas
        `,
        example: `
          📍 Ruta en Odoo: Email Marketing > Mailings > Crear

          **Estructura típica de un email efectivo:**

          ~~~text
          ┌────────────────────────────────────┐
          │ [LOGO]           Newsletter  #42  │ ← Header con logo
          ├────────────────────────────────────┤
          │                                    │
          │ Hola María,                       │ ← Saludo personalizado
          │                                    │
          │ [IMAGEN PRINCIPAL DEL PRODUCTO]   │ ← Hero image
          │                                    │
          │ Título: Nueva Colección Primavera │ ← Título atractivo
          │                                    │
          │ Texto: Descubre las últimas       │ ← Descripción breve
          │ tendencias de la temporada...     │
          │                                    │
          │    [COMPRAR AHORA] ←───────────── │ ← CTA principal (botón grande)
          │                                    │
          ├─────────┬─────────┬───────────────┤
          │[Img 1]  │[Img 2]  │  [Img 3]     │ ← Productos destacados
          │Vestido  │Zapatos  │  Bolsa       │
          │$899     │$1,299   │  $599        │
          └─────────┴─────────┴───────────────┘
          │                                    │
          │ Síguenos: [FB][IG][TW]           │ ← Redes sociales
          │ Darte de baja                    │ ← Unsubscribe
          └────────────────────────────────────┘
          ~~~

          **Configuración del editor:**
          - Ancho máximo: 600px (óptimo para emails)
          - Fuentes: Arial, Helvetica (web-safe)
          - Tamaño de fuente: mínimo 14px
          - Espacio entre secciones: 20-30px
        `,
        tips: [
          'Mantén el diseño simple: menos es más en email marketing',
          'Usa una jerarquía visual clara (título > subtítulo > texto)',
          'Los CTAs deben destacar con colores contrastantes',
          'Optimiza imágenes (máximo 1MB total)',
          'Preview en móvil antes de enviar (70% lo verá en smartphone)'
        ]
      },
      {
        title: '2. Plantillas Profesionales',
        content: `
          Usa plantillas pre-diseñadas para ahorrar tiempo y asegurar un diseño profesional.

          **Tipos de plantillas:**
          - **Newsletter:** Para actualizaciones regulares
          - **Promocional:** Para ofertas y descuentos
          - **Transaccional:** Confirmaciones, recibos
          - **Evento:** Invitaciones y recordatorios
          - **Producto:** Lanzamientos y catálogos
        `,
        example: `
          📍 Ruta: Email Marketing > Configuración > Plantillas

          **Ejemplo: Plantilla "Black Friday"**

          Elementos incluidos:
          ✓ Header con cuenta regresiva
          ✓ Banner hero con % de descuento
          ✓ Grid de productos (2x2)
          ✓ Código de cupón destacado
          ✓ CTA urgente ("Quedan 6 horas")
          ✓ Footer con términos y condiciones

          **Personalización de plantilla:**

          1. Seleccionar plantilla base
             → "E-commerce: Promotional"

          2. Personalizar colores
             Color primario: #FF6B35 (naranja)
             Color secundario: #004E89 (azul)
             Color CTA: #FF6B35

          3. Reemplazar contenido
             - Logo de empresa
             - Imágenes de productos
             - Textos y ofertas
             - Links de destino

          4. Guardar como plantilla propia
             Nombre: "Plantilla Promo - MiEmpresa"

          **Buenas prácticas de plantillas:**
          ✓ Mantén consistencia con tu marca
          ✓ Guarda versiones para diferentes campañas
          ✓ Documenta qué funciona mejor
          ✓ Actualiza plantillas trimestralmente
        `,
        tips: [
          'Empieza siempre con una plantilla, no desde cero',
          'Crea tu biblioteca de plantillas para diferentes objetivos',
          'Mantén coherencia de marca en todas las plantillas',
          'Testea plantillas en distintos clientes de email',
          'Guarda versiones ganadoras de A/B tests como nuevas plantillas'
        ]
      },
      {
        title: '3. Personalización Dinámica',
        content: `
          La personalización aumenta drásticamente el engagement y conversión.

          **Elementos personalizables:**
          - Nombre del destinatario
          - Empresa
          - Productos recomendados según historial
          - Ubicación geográfica
          - Fecha de última compra
          - Categorías de interés
        `,
        example: `
          **Email SIN personalización:**

          Subject: Oferta especial
          Contenido: "Hola, tenemos descuentos"

          Resultado: 15% apertura, 2% clicks

          **Email CON personalización:**

          Subject: {{first_name}}, 20% OFF en {{favorite_category}}
          → "María, 20% OFF en Tecnología"

          Contenido personalizado:

          ~~~text
          Hola {{first_name}},

          Como eres fan de {{favorite_category}}, tenemos
          estas recomendaciones especiales para ti:

          [Producto 1 de su categoría favorita]
          [Producto 2 de su categoría favorita]
          [Producto 3 de su categoría favorita]

          Código exclusivo: {{first_name}}20OFF
          Válido hasta: {{expiry_date}}

          Tu descuento VIP: {{vip_discount}}%
          (Has ahorrado {{total_saved}} con nosotros)
          ~~~

          Resultado: 42% apertura, 18% clicks, 7% conversión

          **Variables disponibles en Odoo:**
          - {{object.name}} → Nombre completo
          - {{object.email}} → Email
          - {{object.company_id.name}} → Empresa
          - {{object.country_id.name}} → País
          - Custom fields → Cualquier campo personalizado
        `,
        tips: [
          'Personaliza al menos el nombre en subject y saludo',
          'Usa datos de compras para recomendar productos relevantes',
          'Segmenta y personaliza por industria en B2B',
          'Incluye cupones personalizados con el nombre del cliente',
          'No abuses: demasiada personalización puede parecer invasiva'
        ]
      },
      {
        title: '4. Diseño Responsive',
        content: `
          Tu email debe verse perfecto en desktop, tablet y móvil.

          **Principios de diseño responsive:**
          - Layout de una sola columna en móvil
          - Botones grandes (mínimo 44x44px)
          - Texto legible sin zoom (14px mínimo)
          - Imágenes que se adaptan al ancho
          - Touch targets separados
        `,
        example: `
          **Vista Desktop (600px ancho):**

          ┌──────────┬──────────┬──────────┐
          │ Prod 1   │ Prod 2   │ Prod 3   │
          │ $99      │ $149     │ $199     │
          └──────────┴──────────┴──────────┘

          **Vista Móvil (320px ancho):**

          ┌────────────────────┐
          │ Producto 1         │
          │ $99                │
          │ [Comprar]         │
          ├────────────────────┤
          │ Producto 2         │
          │ $149               │
          │ [Comprar]         │
          ├────────────────────┤
          │ Producto 3         │
          │ $199               │
          │ [Comprar]         │
          └────────────────────┘

          **Checklist responsive:**

          ✓ Texto: mínimo 14px
          ✓ Botón CTA: mínimo 44px alto
          ✓ Imágenes: max-width 100%
          ✓ No usar hover effects (no funciona en móvil)
          ✓ Links espaciados (evitar clicks accidentales)
          ✓ Asunto: máximo 40 caracteres (se corta en móvil)

          **Test en dispositivos:**
          ✓ iPhone (Safari)
          ✓ Android (Gmail app)
          ✓ iPad
          ✓ Outlook Desktop
          ✓ Gmail Web
        `,
        tips: [
          'Diseña primero para móvil (mobile-first)',
          'Usa el preview de Odoo para ver versión móvil',
          'Testea enviándote el email a ti mismo',
          'Los botones deben ser fáciles de tocar con el dedo',
          'Evita layouts complejos de múltiples columnas'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es el ancho máximo recomendado para emails?',
          options: [
            '1200px',
            '960px',
            '600px',
            '320px'
          ],
          correct: 2,
          explanation: '600px es el ancho estándar recomendado para emails, ya que se visualiza bien en la mayoría de clientes de email y pantallas.'
        },
        {
          id: 'q2',
          question: '¿Qué porcentaje de usuarios abre emails en móvil?',
          options: [
            'Aproximadamente 30%',
            'Aproximadamente 50%',
            'Aproximadamente 70%',
            'Aproximadamente 90%'
          ],
          correct: 2,
          explanation: 'Aproximadamente el 70% de los emails se abren en dispositivos móviles, por eso es crítico diseñar emails responsive.'
        },
        {
          id: 'q3',
          question: 'En un email efectivo, ¿cuántos CTAs (botones de acción) deberías incluir?',
          options: [
            'Solo 1, muy claro y destacado',
            'Entre 5-7 para dar opciones',
            'Ninguno, que el usuario decida',
            '2-3 máximo'
          ],
          correct: 0,
          explanation: 'Un solo CTA claro y destacado es más efectivo. Múltiples CTAs confunden al usuario y reducen la tasa de conversión.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Diseña tu Email',
      description: 'Aplica los principios de diseño efectivo de emails',
      steps: [
        {
          id: 'step1',
          task: 'Estás diseñando un email promocional. ¿Cuál es la mejor estructura?',
          validation: 'multiple-choice',
          options: [
            'Logo → Texto largo → Múltiples productos → Varios botones',
            'Logo → Hero image → Título claro → Breve descripción → 1 CTA destacado',
            'Solo texto sin imágenes',
            'Solo imágenes sin texto'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Tu email pesa 2.5 MB por las imágenes. ¿Qué debes hacer?',
          validation: 'multiple-choice',
          options: [
            'Enviarlo así, no importa',
            'Eliminar todas las imágenes',
            'Optimizar y comprimir imágenes a máximo 1MB total',
            'Convertir todo a texto'
          ],
          correct: 2
        },
        {
          id: 'step3',
          task: 'Personalizas el subject line con el nombre. Si tu tasa de apertura era 20%, ¿qué mejora aproximada esperas?',
          validation: 'multiple-choice',
          options: [
            'Ninguna mejora',
            'Mejora de 5-10%',
            'Mejora de 50%',
            'Empeora'
          ],
          correct: 1
        }
      ]
    }
  },

  'email-004': {
    title: 'A/B Testing y Optimización',
    introduction: `
      El A/B Testing (también llamado split testing) es la práctica de crear dos versiones de un email para descubrir cuál funciona mejor. Esta técnica basada en datos te permite optimizar cada elemento de tus campañas y maximizar resultados.

      Odoo 19 facilita la creación y análisis de A/B tests, permitiéndote tomar decisiones informadas basadas en el comportamiento real de tu audiencia.
    `,
    sections: [
      {
        title: '1. ¿Qué es A/B Testing?',
        content: `
          El A/B Testing consiste en enviar dos versiones diferentes de un email a segmentos de tu audiencia para determinar cuál genera mejores resultados.

          **Qué puedes testear:**
          - Subject lines (asuntos)
          - Nombres de remitente
          - Contenido del email
          - Call-to-actions (texto y diseño)
          - Imágenes
          - Horarios de envío
          - Ofertas y pricing
        `,
        example: `
          📍 Ruta en Odoo: Email Marketing > Mailings > Crear > A/B Test

          **Ejemplo de A/B Test de Subject Line:**

          **Configuración:**
          Audiencia total: 10,000 suscriptores
          Sample size: 20% (2,000 para test)
          Ganador automático: Mejor open rate después de 4 horas
          Métrica: Tasa de apertura

          **Versión A (1,000 personas):**
          Subject: "Descuento especial para ti"
          Resultado: 250 aperturas = 25% open rate

          **Versión B (1,000 personas):**
          Subject: "María, tu 20% OFF termina hoy"
          Resultado: 420 aperturas = 42% open rate

          **Ganador: Versión B** ✓

          **Envío masivo:**
          Las 8,000 personas restantes reciben la Versión B
          → 8,000 × 42% = 3,360 aperturas adicionales

          **Total de aperturas:**
          - Con A/B test: 3,670 (42% promedio)
          - Sin A/B test (solo A): 2,500 (25%)
          - **Mejora: +47% más aperturas** 📈
        `,
        tips: [
          'Testea UN solo elemento a la vez (si cambias todo, no sabrás qué funcionó)',
          'Usa una muestra significativa (mínimo 1,000 personas por versión)',
          'Espera tiempo suficiente antes de declarar ganador (mínimo 4 horas)',
          'Documenta todos los tests para aprender patrones',
          'No todos los tests tendrán un ganador claro, está bien'
        ]
      },
      {
        title: '2. A/B Test de Subject Lines',
        content: `
          El asunto es lo primero que ve el destinatario. Un buen subject line puede duplicar tu tasa de apertura.

          **Elementos a testear:**
          - Personalización (con/sin nombre)
          - Longitud (corto vs largo)
          - Emojis (con/sin)
          - Urgencia ("última oportunidad", "termina hoy")
          - Curiosidad vs claridad
          - Preguntas vs afirmaciones
        `,
        example: `
          **Test 1: Personalización**

          Versión A: "Nueva colección disponible"
          Open rate: 22%

          Versión B: "{{first_name}}, nueva colección solo para ti"
          Open rate: 35%
          **Ganador: B (+59%)** ✓

          **Test 2: Urgencia**

          Versión A: "Descuento del 25% en toda la tienda"
          Open rate: 28%

          Versión B: "⏰ Solo hoy: 25% OFF (termina en 6 horas)"
          Open rate: 41%
          **Ganador: B (+46%)** ✓

          **Test 3: Longitud**

          Versión A: "Oferta"
          Open rate: 18%

          Versión B: "Oferta especial exclusiva solo para suscriptores VIP de nuestra tienda online"
          Open rate: 15%
          **Ganador: A (más corto)** ✓

          **Mejores prácticas para subject lines:**

          ✅ FUNCIONA:
          - Personalización con nombre
          - Urgencia real
          - Beneficio claro
          - 30-50 caracteres
          - Emojis relevantes (1-2 máximo)

          ❌ EVITA:
          - ALL CAPS
          - Múltiples signos !!!???
          - Palabras spam: "gratis", "garantizado"
          - Clickbait que no cumple
          - Más de 60 caracteres
        `,
        tips: [
          'El subject line es lo MÁS importante: 47% decide abrir solo por el asunto',
          'Testea personalización primero (suele ganar)',
          'Usa emojis con moderación (1-2 relevantes)',
          'Mantén coherencia: el subject debe reflejar el contenido',
          'Revisa subject lines en móvil (se cortan antes)'
        ]
      },
      {
        title: '3. A/B Test de Contenido y CTAs',
        content: `
          Una vez abierto el email, el contenido y call-to-action determinan si el usuario realizará la acción deseada.

          **Elementos a testear:**
          - Texto del CTA ("Comprar ahora" vs "Ver oferta")
          - Color del botón CTA
          - Posición del CTA (arriba vs abajo)
          - Longitud del contenido (corto vs largo)
          - Imágenes vs solo texto
          - Una oferta vs múltiples opciones
        `,
        example: `
          **Test de CTA Text:**

          Versión A:
          Botón: "Saber más"
          Click rate: 8%

          Versión B:
          Botón: "Obtener mi 20% OFF ahora"
          Click rate: 18%
          **Ganador: B (+125%)** ✓

          **Test de Color de Botón:**

          Versión A:
          Botón azul (#0066CC)
          Click rate: 12%

          Versión B:
          Botón naranja (#FF6B35) - contraste alto
          Click rate: 17%
          **Ganador: B (+42%)** ✓

          **Test de Longitud de Contenido:**

          Versión A: Email largo (800 palabras)
          - Hero image
          - 4 párrafos explicativos
          - Testimonios
          - FAQ
          - CTA al final
          Click rate: 9%

          Versión B: Email corto (150 palabras)
          - Hero image
          - 1 párrafo breve
          - CTA prominente arriba
          Click rate: 15%
          **Ganador: B (más conciso)** ✓

          **Aprendizajes clave:**
          - CTAs específicos y orientados a beneficio funcionan mejor
          - Contraste visual importa (botón debe destacar)
          - Menos suele ser más en contenido de email
          - El CTA debe estar "above the fold" (visible sin scroll)
        `,
        tips: [
          'El texto del CTA debe ser orientado a acción y beneficio',
          'Usa verbos de acción: "Obtener", "Descargar", "Reservar"',
          'El color del botón debe contrastar con el fondo',
          'Testea posición del CTA: arriba vs abajo',
          'Un solo CTA claro funciona mejor que múltiples opciones'
        ]
      },
      {
        title: '4. Análisis de Resultados',
        content: `
          Analizar correctamente los resultados es clave para tomar decisiones acertadas.

          **Métricas a comparar:**
          - Open rate (tasa de apertura)
          - Click rate (tasa de clicks)
          - Click-to-open rate (CTOR)
          - Conversion rate (conversión)
          - Unsubscribe rate (bajas)
          - Revenue per email
        `,
        example: `
          📍 Ruta: Email Marketing > Reportes > A/B Test Results

          **Análisis completo de campaña:**

          | Métrica            | Versión A | Versión B | Diferencia |
          | ------------------ | --------- | --------- | ---------- |
          | Enviados           | 5,000     | 5,000     | -          |
          | Abiertos           | 1,250     | 2,100     | +68%       |
          | Open Rate          | 25%       | 42%       | +17pp      |
          | Clicks             | 200       | 504       | +152%      |
          | Click Rate         | 4%        | 10.1%     | +6.1pp     |
          | CTOR               | 16%       | 24%       | +8pp       |
          | Conversiones       | 40        | 121       | +202%      |
          | Conversion Rate    | 0.8%      | 2.42%     | +1.62pp    |
          | Revenue            | $4,000    | $12,100   | +202%      |
          | Revenue per Email  | $0.80     | $2.42     | +202%      |
          | Unsubscribes       | 25        | 21        | -16%       |

          **Conclusión:**
          Versión B es ganador CLARO en todas las métricas ✓
          - Open rate: +68%
          - Clicks: +152%
          - Revenue: +202%

          **Significancia estadística:**
          Confidence level: 99%
          P-value: < 0.01
          ✓ Resultado estadísticamente significativo

          **Acción:**
          - Implementar elementos ganadores de Versión B en futuras campañas
          - Documentar aprendizajes
          - Continuar tests para optimizar más
        `,
        tips: [
          'Espera un tamaño de muestra suficiente antes de concluir',
          'Una diferencia del 10-15% ya es significativa',
          'Si la diferencia es menor al 5%, probablemente no es significativa',
          'Considera el contexto: conversión importa más que apertura',
          'Documenta todos los resultados para identificar patrones'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la regla principal del A/B Testing?',
          options: [
            'Testear múltiples elementos al mismo tiempo',
            'Testear UN solo elemento a la vez',
            'Enviar ambas versiones a toda la audiencia',
            'No documentar los resultados'
          ],
          correct: 1,
          explanation: 'Debes testear UN solo elemento a la vez. Si cambias múltiples cosas, no sabrás cuál fue responsable del resultado.'
        },
        {
          id: 'q2',
          question: 'Enviaste a 1,000 personas la versión A (open rate 20%) y a 1,000 la versión B (open rate 35%). ¿Cuál es el ganador?',
          options: [
            'Versión A',
            'Versión B',
            'Empate',
            'No se puede determinar'
          ],
          correct: 1,
          explanation: 'Versión B tiene 35% vs 20% de apertura, una diferencia del +75%, claramente significativa.'
        },
        {
          id: 'q3',
          question: '¿Qué métrica es MÁS importante para una campaña de venta de producto?',
          options: [
            'Open rate (apertura)',
            'Click rate (clicks)',
            'Conversion rate (ventas realizadas)',
            'Número de impresiones'
          ],
          correct: 2,
          explanation: 'Para ventas, la conversión (ventas reales) es lo más importante. Puedes tener alta apertura pero si no vende, no sirve.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Diseña un A/B Test',
      description: 'Planifica y analiza un A/B test para tu campaña',
      steps: [
        {
          id: 'step1',
          task: 'Tienes 10,000 suscriptores. ¿Qué tamaño de muestra usarías para el A/B test?',
          validation: 'multiple-choice',
          options: [
            '100 personas (50 + 50)',
            '2,000 personas (1,000 + 1,000)',
            '10,000 personas (5,000 + 5,000)',
            '500 personas (250 + 250)'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Versión A: 1,000 enviados, 250 abiertos. Versión B: 1,000 enviados, 400 abiertos. ¿Cuál es el open rate de B?',
          validation: 'numeric',
          correctAnswer: 40,
          tolerance: 0,
          hints: ['(400 / 1,000) × 100 = ?']
        },
        {
          id: 'step3',
          task: '¿Qué deberías testear PRIMERO para mejorar una campaña con bajo open rate?',
          validation: 'multiple-choice',
          options: [
            'El color del botón',
            'El subject line (asunto)',
            'El footer',
            'Las imágenes'
          ],
          correct: 1
        }
      ]
    }
  },

  'email-005': {
    title: 'Métricas y Analytics de Email',
    introduction: `
      Medir y analizar el desempeño de tus campañas es esencial para mejorar continuamente tus resultados. Sin datos, estás navegando a ciegas. Con las métricas correctas, puedes tomar decisiones informadas y optimizar cada aspecto de tu email marketing.

      Odoo 19 proporciona analytics detallado y dashboards visuales que te permiten entender qué funciona, qué no, y dónde enfocar tus esfuerzos de optimización.
    `,
    sections: [
      {
        title: '1. Métricas Fundamentales',
        content: `
          Estas son las métricas esenciales que debes monitorear en cada campaña.

          **Open Rate (Tasa de Apertura):**
          - Qué es: % de personas que abrieron tu email
          - Fórmula: (Abiertos / Enviados) × 100
          - Benchmark: 20-30% es bueno, 30-40% es excelente

          **Click Rate (Tasa de Clicks):**
          - Qué es: % de personas que hicieron click en algún link
          - Fórmula: (Clicks / Enviados) × 100
          - Benchmark: 2-5% es bueno, 5-10% es excelente

          **Click-to-Open Rate (CTOR):**
          - Qué es: % de los que abrieron y además hicieron click
          - Fórmula: (Clicks / Abiertos) × 100
          - Benchmark: 10-20% es bueno, 20-35% es excelente

          **Conversion Rate:**
          - Qué es: % que completaron la acción deseada (compra, registro, etc.)
          - Fórmula: (Conversiones / Enviados) × 100
          - Benchmark: 1-3% es bueno, 3-5%+ es excelente
        `,
        example: `
          📍 Ruta: Email Marketing > Reportes > Campaign Analytics

          **Campaña: "Black Friday 2025"**

          Enviados:              10,000
          Entregados:             9,850 (98.5%)
          Rebotados:                150 (1.5%)

          **Engagement:**
          Abiertos:               3,940 (40% open rate) ✓ Excelente
          Clicks únicos:          1,182 (12% click rate) ✓ Excelente
          CTOR:                   30% (1,182/3,940) ✓ Excelente

          **Conversión:**
          Pedidos generados:        280
          Conversion rate:        2.8% (280/10,000) ✓ Bueno
          Revenue total:      $42,000
          Revenue per email:    $4.20
          AOV (ticket promedio): $150

          **Negativo:**
          Unsubscribes:            45 (0.45%) ✓ Aceptable
          Spam reports:             2 (0.02%) ✓ Muy bueno

          **ROI:**
          Costo de campaña:      $200 (plataforma + diseño)
          Revenue:            $42,000
          Beneficio:          $41,800
          ROI:                 20,900%
        `,
        tips: [
          'Open rate mide el interés inicial (subject line)',
          'Click rate mide el engagement con el contenido',
          'CTOR es mejor indicador que click rate simple',
          'Conversion rate es lo que realmente importa para el negocio',
          'Compara siempre contra tus propios benchmarks históricos'
        ]
      },
      {
        title: '2. Bounce Rate y Deliverability',
        content: `
          El bounce rate afecta tu reputación de envío. Mantenerlo bajo es crítico.

          **Tipos de bounces:**
          - **Hard bounce:** Email inválido o inexistente (eliminar de lista)
          - **Soft bounce:** Problema temporal (buzón lleno, servidor caído)

          **Deliverability (Entregabilidad):**
          - Qué es: % de emails que llegan a la bandeja de entrada
          - Objetivo: > 95% delivered
          - Factores: Reputación del dominio, contenido spam-free, engagement
        `,
        example: `
          **Análisis de Bounces:**

          Total enviados:        10,000
          Delivered:              9,700 (97%)
          Total bounced:            300 (3%)

          **Desglose:**
          Hard bounces:            180 (1.8%)
          - Email inválido:        120
          - Dominio inexistente:    45
          - Bloqueado:              15

          Soft bounces:            120 (1.2%)
          - Buzón lleno:            70
          - Servidor temporal:      35
          - Mensaje muy grande:     15

          **Acción correctiva:**

          ✓ Eliminar hard bounces de lista inmediatamente
          ✓ Reintentar soft bounces en 24-48h
          ✓ Si bounce rate > 5%, investigar causa
          ✓ Limpiar lista mensualmente

          **Factores que afectan deliverability:**

          ✅ MEJORAN:
          - Listas opt-in verificadas
          - High engagement (aperturas, clicks)
          - Dominio autenticado (SPF, DKIM)
          - Buen historial de envíos
          - Contenido relevante

          ❌ EMPEORAN:
          - Listas compradas
          - Alto spam report rate
          - Palabras spam en contenido
          - Envío inconsistente
          - Alto bounce rate
        `,
        tips: [
          'Mantén bounce rate por debajo del 3%',
          'Elimina hard bounces inmediatamente',
          'Autentifica tu dominio (SPF, DKIM, DMARC)',
          'Evita palabras spam: "gratis", "garantizado", "urgente"',
          'Limpia tu lista cada 3 meses'
        ]
      },
      {
        title: '3. Unsubscribe y Spam Reports',
        content: `
          Monitorear bajas y reportes de spam te ayuda a mantener una lista saludable.

          **Unsubscribe Rate:**
          - Qué es: % que se da de baja
          - Aceptable: < 0.5% por campaña
          - Preocupante: > 1%

          **Spam Report Rate:**
          - Qué es: % que marca como spam
          - Aceptable: < 0.1%
          - Crítico: > 0.5% (afecta reputación severamente)
        `,
        example: `
          **Análisis de Bajas:**

          Campaña: "Newsletter Semanal"
          Enviados: 15,000

          Unsubscribes:         45 (0.3%) ✓ Bueno
          Spam reports:          3 (0.02%) ✓ Excelente

          **Razones de baja (encuesta):**
          - "Demasiado frecuente":     18 (40%)
          - "No es relevante":         15 (33%)
          - "No recuerdo suscribirme":  8 (18%)
          - "Otro":                     4 (9%)

          **Acciones basadas en datos:**

          1. Alta frecuencia → Reducir de 2/semana a 1/semana
          2. No relevante → Mejorar segmentación
          3. No recuerdan → Verificar proceso de opt-in

          **Comparativa por tipo de campaña:**

          | Tipo Campaña  | Unsub Rate | Spam Rate |
          | ------------- | ---------- | --------- |
          | Newsletter    | 0.3%       | 0.02%     |
          | Promocional   | 0.8%       | 0.05%     |
          | Transaccional | 0.1%       | 0.01%     |

          **Señales de alerta:**
          ⚠️ Unsub rate > 1%: Revisa frecuencia o relevancia
          ⚠️ Spam rate > 0.3%: Mejora opt-in y relevancia
          ⚠️ Aumento súbito: Analiza qué cambió en esa campaña
        `,
        tips: [
          'Haz el proceso de baja fácil (1 click)',
          'Ofrece "centro de preferencias" antes de baja total',
          'Analiza patrones: ¿qué campañas generan más bajas?',
          'Un unsubscribe es mejor que un spam report',
          'Encuesta opcional al darse de baja para aprender'
        ]
      },
      {
        title: '4. Dashboards y Reportes',
        content: `
          Visualiza tus datos en dashboards para identificar tendencias y oportunidades.

          **Reportes esenciales:**
          - Overview de campaña
          - Comparativa entre campañas
          - Tendencias temporales
          - Segmentos más engaged
          - Revenue attribution
        `,
        example: `
          📍 Ruta: Email Marketing > Reportes > Dashboard

          **Dashboard Principal:**

          ┌─────────────────────────────────────────┐
          │  Email Marketing Overview - Últimos 30d │
          ├─────────────────────────────────────────┤
          │                                         │
          │  Campañas enviadas:           12        │
          │  Total emails enviados:    140,000      │
          │  Open rate promedio:         32%        │
          │  Click rate promedio:        8.5%       │
          │  Conversion rate:            2.1%       │
          │  Revenue total:          $284,000       │
          │  ROI:                      14,200%      │
          │                                         │
          ├─────────────────────────────────────────┤
          │  Top 3 Campañas (por revenue)           │
          ├─────────────────────────────────────────┤
          │  1. Black Friday        $125,000        │
          │  2. Lanzamiento         $89,000         │
          │  3. Newsletter #45      $42,000         │
          └─────────────────────────────────────────┘

          **Reporte de Tendencias:**

          Semana 1: Open 28%, Click 7%, Conv 1.8%
          Semana 2: Open 31%, Click 8%, Conv 2.0%
          Semana 3: Open 35%, Click 9%, Conv 2.3% 📈
          Semana 4: Open 33%, Click 8.5%, Conv 2.1%

          **Análisis por Segmento:**

          | Segmento    | Size   | Open  | Click | Conv  | Rev/Email |
          | ----------- | ------ | ----- | ----- | ----- | --------- |
          | VIP         | 1,200  | 58%   | 25%   | 8.2%  | $12.50    |
          | Activos     | 8,500  | 38%   | 12%   | 3.1%  | $4.20     |
          | Inactivos   | 3,800  | 18%   | 4%    | 0.8%  | $0.90     |

          **Insight:** VIPs generan 3x más revenue por email
          **Acción:** Crear más campañas exclusivas para VIP
        `,
        tips: [
          'Revisa métricas semanalmente',
          'Identifica tu top 3 campañas y replica su fórmula',
          'Segmenta métricas por audiencia',
          'Exporta reportes mensuales para stakeholders',
          'Usa datos para tomar decisiones, no intuiciones'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Enviaste 5,000 emails. 1,500 los abrieron. ¿Cuál es tu open rate?',
          options: [
            '15%',
            '30%',
            '50%',
            '75%'
          ],
          correct: 1,
          explanation: 'Open rate = (1,500 / 5,000) × 100 = 30%'
        },
        {
          id: 'q2',
          question: '¿Qué bounce rate es aceptable?',
          options: [
            'Menos del 1%',
            'Menos del 3%',
            'Menos del 10%',
            'No importa'
          ],
          correct: 1,
          explanation: 'Un bounce rate menor al 3% es aceptable. Si supera el 5%, debes investigar y limpiar tu lista.'
        },
        {
          id: 'q3',
          question: 'Tu spam report rate es 0.8%. ¿Qué debes hacer?',
          options: [
            'Nada, es normal',
            'Es preocupante, revisar proceso de opt-in y relevancia de contenido',
            'Dejar de enviar emails',
            'Comprar una nueva lista'
          ],
          correct: 1,
          explanation: '0.8% de spam reports es alto (aceptable es < 0.1%). Debes mejorar tu proceso de opt-in y relevancia del contenido urgentemente.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Analiza tu Campaña',
      description: 'Calcula e interpreta las métricas de una campaña',
      steps: [
        {
          id: 'step1',
          task: 'Enviaste 8,000 emails. 2,400 los abrieron y 480 hicieron click. ¿Cuál es tu click-to-open rate (CTOR)?',
          validation: 'numeric',
          correctAnswer: 20,
          tolerance: 0,
          hints: ['CTOR = (Clicks / Abiertos) × 100 = (480 / 2,400) × 100']
        },
        {
          id: 'step2',
          task: 'De 10,000 enviados, 150 rebotaron. ¿Tu bounce rate está dentro del rango aceptable (< 3%)?',
          validation: 'multiple-choice',
          options: [
            'Sí, 1.5% es aceptable',
            'No, es demasiado alto',
            'No se puede determinar',
            'Bounce rate no importa'
          ],
          correct: 0
        },
        {
          id: 'step3',
          task: 'Campaña A: 2,000 enviados, 80 conversiones. Campaña B: 5,000 enviados, 150 conversiones. ¿Cuál tiene mejor conversion rate?',
          validation: 'multiple-choice',
          options: [
            'Campaña A (4%)',
            'Campaña B (3%)',
            'Iguales',
            'No se puede determinar'
          ],
          correct: 0
        }
      ]
    }
  },

  'email-006': {
    title: 'Generación de Leads con Email',
    introduction: `
      El email marketing no solo sirve para vender a clientes existentes. Es una herramienta poderosa para generar y nutrir leads (prospectos) que eventualmente se convertirán en clientes.

      En esta lección aprenderás a crear campañas de lead generation, diseñar lead magnets efectivos, integrar con tu CRM y implementar estrategias de lead nurturing que conviertan prospectos en clientes.
    `,
    sections: [
      {
        title: '1. Lead Magnets Efectivos',
        content: `
          Un lead magnet es un recurso valioso que ofreces a cambio del email de un prospecto.

          **Tipos de lead magnets:**
          - **Ebooks y guías:** Conocimiento profundo sobre un tema
          - **Checklists y templates:** Herramientas prácticas
          - **Webinars y cursos:** Educación en vivo o grabada
          - **Trials y demos:** Prueba de tu producto/servicio
          - **Descuentos:** Incentivo económico
          - **Toolkits y recursos:** Paquetes de herramientas útiles

          **Características de un buen lead magnet:**
          - **Valioso:** Resuelve un problema real
          - **Específico:** Enfocado en un tema concreto
          - **Instant access:** Se entrega inmediatamente
          - **Fácil de consumir:** No requiere mucho tiempo/esfuerzo
          - **Relevante:** Relacionado con tu producto/servicio
        `,
        example: `
          **EJEMPLO MALO ❌**

          Lead Magnet: "Newsletter general"
          Resultado: 2% conversion rate

          ¿Por qué falla?
          - No ofrece valor inmediato
          - Muy genérico
          - No resuelve problema específico

          **EJEMPLO BUENO ✅**

          Lead Magnet: "Checklist: 15 pasos para implementar Odoo en 30 días (PDF + plantillas)"

          Landing page:
          ~~~text
          🎯 ¿Implementación de Odoo sin caos?

          Descarga GRATIS nuestra checklist completa con:
          ✓ 15 pasos probados
          ✓ Plantillas de planificación
          ✓ Checklist de configuración
          ✓ Errores comunes a evitar

          [email input]
          [Descargar Checklist Gratis]

          ⏱️ 2,500+ empresas lo usan
          ~~~

          Resultado: 28% conversion rate

          **Flujo completo:**

          1. Usuario llega a landing page (desde Google Ads, redes sociales, etc.)
          2. Ve el valor del lead magnet
          3. Ingresa su email
          4. Recibe email automático con:
             - Link de descarga del checklist
             - Bienvenida cálida
             - Qué esperar de futuros emails
          5. Entra en secuencia de nurturing

          **Lead magnets por industria:**

          **B2B Software:**
          - "ROI Calculator" interactivo
          - Case studies con resultados
          - Demo personalizada

          **E-commerce:**
          - Descuento del 15% primer pedido
          - "Guía de tallas" PDF
          - Lookbook de temporada

          **Consultoría:**
          - Auditoría gratuita
          - Template de estrategia
          - Webinar educativo
        `,
        tips: [
          'El lead magnet debe ser irresistible para tu buyer persona ideal',
          'Más específico > más genérico (ebook de 20 páginas > "newsletter")',
          'Entrega inmediata (automated email con link de descarga)',
          'Usa landing page dedicada (no form genérico)',
          'El lead magnet debe conectar naturalmente con tu oferta principal'
        ]
      },
      {
        title: '2. Landing Pages Optimizadas',
        content: `
          La landing page es donde conviertes visitantes en leads. Debe estar optimizada para conversión.

          **Elementos esenciales:**
          - Headline claro del beneficio
          - Subheadline explicativo
          - Imagen/video del lead magnet
          - Bullets de lo que incluye
          - Form corto (solo email o email + nombre)
          - CTA prominente
          - Trust signals (# de descargas, testimonios)
          - Sin navegación que distraiga
        `,
        example: `
          📍 Ruta: Sitio Web > Landing Pages > Crear

          **Estructura de landing page de alta conversión:**

          ~~~text
          ┌──────────────────────────────────────────┐
          │ [LOGO]                                   │
          ├──────────────────────────────────────────┤
          │                                          │
          │  🎯 Headline: "Domina Odoo en 30 días"  │ ← Beneficio claro
          │                                          │
          │  Subheadline: "Descarga nuestra guía    │
          │  paso a paso + plantillas gratis"        │
          │                                          │
          │  [IMAGEN: Preview del ebook]             │
          │                                          │
          │  Aprenderás:                             │
          │  ✓ Configuración inicial perfecta        │
          │  ✓ 15 módulos esenciales                 │
          │  ✓ Errores que cuestan miles de $       │
          │  ✓ Plantillas listas para usar           │
          │                                          │
          │  ┌─────────────────────────────┐         │
          │  │ [Email]                     │         │
          │  │ [Nombre]                    │         │
          │  │                             │         │
          │  │  [DESCARGAR GRATIS] ←────────────── │ CTA grande
          │  └─────────────────────────────┘         │
          │                                          │
          │  🔒 No spam. Cancela cuando quieras.    │
          │                                          │
          │  ⭐⭐⭐⭐⭐ "Excelente recurso"            │ ← Social proof
          │  - 2,847 descargas                       │
          │                                          │
          └──────────────────────────────────────────┘
          ~~~

          **Tests A/B de landing pages:**

          Test 1: Longitud del form
          - Versión A: Email + Nombre + Empresa + Teléfono
            Conversion: 12%
          - Versión B: Solo Email
            Conversion: 31%
          **Ganador: B (menos campos)** ✓

          Test 2: CTA text
          - Versión A: "Enviar"
            Conversion: 18%
          - Versión B: "Descargar mi guía gratis"
            Conversion: 28%
          **Ganador: B (específico)** ✓

          **Checklist de optimización:**
          ✓ Un solo objetivo (capturar email)
          ✓ Form above the fold (visible sin scroll)
          ✓ Mobile responsive
          ✓ Carga rápida (< 3 segundos)
          ✓ Sin menú de navegación
          ✓ Trust badges/testimonios
          ✓ Beneficios > características
        `,
        tips: [
          'Menos campos en el form = mayor conversión',
          'El headline debe comunicar beneficio en 5 segundos',
          'Usa imagen/preview del lead magnet',
          'CTA debe decir QUÉ recibirán, no solo "enviar"',
          'Testea constantemente: headline, CTA, form length'
        ]
      },
      {
        title: '3. Lead Nurturing',
        content: `
          Una vez capturado el lead, necesitas nutrirlo hasta que esté listo para comprar.

          **Email nurturing sequence típica:**
          - **Email 1 (inmediato):** Entrega del lead magnet + bienvenida
          - **Email 2 (día 2):** Contenido educativo relacionado
          - **Email 3 (día 5):** Case study o testimonio
          - **Email 4 (día 8):** Introduce tu solución sutilmente
          - **Email 5 (día 12):** Oferta directa con incentivo
          - **Email 6+ (semanal):** Continúa educando

          **Objetivos del nurturing:**
          - Educar sobre el problema y solución
          - Construir confianza y autoridad
          - Mover al lead por el embudo
          - Identificar leads calientes (lead scoring)
        `,
        example: `
          **Secuencia de nurturing: Implementación de Odoo**

          **Email 1 - Día 0 (Inmediato):**
          Subject: "Tu checklist de Odoo está lista ✓"

          ~~~text
          Hola {{first_name}},

          Aquí está tu checklist de implementación:
          [Descargar Checklist]

          También incluimos:
          - Template de planificación
          - Video tutorial (10 min)
          - FAQ de errores comunes

          ¿Necesitas ayuda? Responde este email.

          Saludos,
          Pedro
          ~~~

          **Email 2 - Día 2:**
          Subject: "¿Ya revisaste el checklist? + Bonus"

          Content: Tips adicionales, pregunta si tiene dudas
          CTA: Responder con preguntas

          **Email 3 - Día 5:**
          Subject: "Cómo TechCorp implementó Odoo en 21 días"

          Content: Case study detallado
          CTA: Ver más casos de éxito

          **Email 4 - Día 8:**
          Subject: "3 errores que cuestan $10,000+ en implementaciones"

          Content: Errores comunes + cómo evitarlos
          CTA suave: "Nosotros te ayudamos a evitarlos"

          **Email 5 - Día 12:**
          Subject: "{{first_name}}, ¿listo para implementar?"

          Content: Oferta directa de consultoría
          CTA fuerte: "Agendar demo gratuita"
          Incentivo: "Bonus: auditoría de procesos gratis"

          **Métricas de nurturing:**

          | Email | Open Rate | Click Rate | Conversión |
          | ----- | --------- | ---------- | ---------- |
          | #1    | 72%       | 45%        | 0%         |
          | #2    | 58%       | 28%        | 2%         |
          | #3    | 52%       | 22%        | 3%         |
          | #4    | 48%       | 18%        | 5%         |
          | #5    | 45%       | 32%        | 12%        |

          Conversión total de secuencia: 18%
        `,
        tips: [
          'Primer email debe entregar lo prometido INMEDIATAMENTE',
          'Educa antes de vender (regla 80/20: 80% valor, 20% oferta)',
          'Personaliza según comportamiento (abrió vs no abrió)',
          'Lead scoring automático basado en engagement',
          'No bombardees: espaciar emails (cada 2-5 días)'
        ]
      },
      {
        title: '4. Integración con CRM',
        content: `
          Integrar email marketing con CRM te permite gestionar leads de forma inteligente.

          **Beneficios de integración:**
          - Sincronización automática de leads
          - Lead scoring basado en engagement
          - Asignación automática a vendedores
          - Tracking completo del journey
          - Reporting unificado
        `,
        example: `
          📍 Ruta: Email Marketing > Configuración > Integración CRM

          **Flujo automático:**

          1. **Lead descarga ebook**
             → Odoo crea contacto en CRM
             → Etapa: "Nuevo lead"
             → Score: 10 puntos

          2. **Lead abre 3 emails**
             → Score: +15 puntos (total: 25)
             → Etiqueta: "Engaged"

          3. **Lead hace click en pricing**
             → Score: +25 puntos (total: 50)
             → Etapa: "Lead caliente"
             → Notificar a vendedor

          4. **Lead agenda demo**
             → Score: +30 puntos (total: 80)
             → Etapa: "Oportunidad"
             → Asignar a vendedor senior

          **Lead Scoring:**

          Acción                    Puntos
          ─────────────────────────────────
          Descarga lead magnet         10
          Abre email                    5
          Click en email               10
          Visita pricing page          25
          Responde email               20
          Agenda demo                  30
          Descarga case study          15

          **Umbral de calificación:**
          0-25: Cold lead (nurturing automático)
          26-50: Warm lead (mezcla auto + manual)
          51-80: Hot lead (asignar a vendedor)
          80+: Very hot (prioridad máxima)

          **Asignación automática:**

          ~~~text
          SI lead score >= 51
          Y lead country = "México"
          Y lead company_size >= 50
          ENTONCES asignar a: "Vendedor Senior - México"
          Y crear tarea: "Contactar en < 24h"
          ~~~

          **Dashboard integrado:**

          | Fuente        | Leads | Calientes | Conv | Revenue |
          | ------------- | ----- | --------- | ---- | ------- |
          | Ebook Odoo    | 450   | 82        | 18%  | $89K    |
          | Webinar       | 280   | 95        | 34%  | $142K   |
          | Trial         | 120   | 78        | 65%  | $195K   |
        `,
        tips: [
          'Define criterios claros de lead scoring',
          'Sincroniza en tiempo real (no batch diario)',
          'Notifica a vendedores cuando lead está caliente',
          'Tracking completo: desde primer email hasta venta',
          'Reporta ROI por campaña de lead gen'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es un lead magnet?',
          options: [
            'Un imán literal',
            'Un recurso valioso que ofreces a cambio del email de un prospecto',
            'Una técnica de spam',
            'Un tipo de publicidad pagada'
          ],
          correct: 1,
          explanation: 'Un lead magnet es un recurso valioso (ebook, checklist, descuento, etc.) que ofreces gratis a cambio del email del prospecto.'
        },
        {
          id: 'q2',
          question: 'En una landing page de generación de leads, ¿qué funciona mejor?',
          options: [
            'Form largo con muchos campos',
            'Form corto solo con email',
            'No poner form, solo información',
            'Múltiples CTAs diferentes'
          ],
          correct: 1,
          explanation: 'Forms cortos (solo email o email + nombre) tienen mayor conversión. Cada campo adicional reduce la tasa de conversión aproximadamente 10%.'
        },
        {
          id: 'q3',
          question: '¿Cuál debe ser el enfoque principal de los primeros emails de nurturing?',
          options: [
            'Vender agresivamente',
            'Educar y aportar valor',
            'Pedir referencias',
            'Enviar promociones'
          ],
          correct: 1,
          explanation: 'Los primeros emails deben educar y aportar valor (regla 80/20). La venta directa viene después de construir confianza.'
        }
      ]
    },
    practicalExercise: {
      title: 'Ejercicio: Diseña tu Estrategia de Lead Generation',
      description: 'Crea una estrategia completa de generación de leads',
      steps: [
        {
          id: 'step1',
          task: 'Tienes un curso de Odoo. ¿Cuál es el mejor lead magnet?',
          validation: 'multiple-choice',
          options: [
            '"Newsletter general"',
            '"Checklist: 10 pasos para elegir ERP + video explicativo"',
            '"Compra el curso ahora"',
            '"Síguenos en redes sociales"'
          ],
          correct: 1
        },
        {
          id: 'step2',
          task: 'Tu landing page recibe 1,000 visitas y 250 personas dejan su email. ¿Cuál es tu conversion rate?',
          validation: 'numeric',
          correctAnswer: 25,
          tolerance: 0,
          hints: ['(250 / 1,000) × 100 = ?']
        },
        {
          id: 'step3',
          task: 'De 100 leads nurturing, 18 se convirtieron en clientes. Tu ticket promedio es $500. ¿Cuánto revenue generaste?',
          validation: 'numeric',
          correctAnswer: 9000,
          tolerance: 0,
          hints: ['18 clientes × $500 = ?']
        }
      ]
    }
  }
}

// Función auxiliar para obtener contenido de lección
export const getLessonContent = (lessonId) => {
  return lessonContent[lessonId] || null
}

// Función para verificar si existe contenido para una lección
export const hasLessonContent = (lessonId) => {
  return lessonContent.hasOwnProperty(lessonId)
}
