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

          Ejemplo de estructura:

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

          Crear un nuevo diario:

          1. Clic en "Crear"
          2. Nombre: "Banco BBVA"
          3. Tipo: "Banco"
          4. Cuenta por defecto: Seleccionar cuenta bancaria
          5. Secuencia de asientos: Automática

          Configuración del diario:
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

          Configuración típica:

          Año Fiscal 2025:
          - Inicio: 01/01/2025
          - Fin: 31/12/2025

          Períodos mensuales:
          - Enero 2025 (01/01 - 31/01)
          - Febrero 2025 (01/02 - 28/02)
          - ... etc.

          Estado de períodos:
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

          Crear factura manual:
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

          Ejemplo de factura:

          Cliente: Empresa ABC S.A.
          Fecha: 15/01/2025

          Líneas:
          - Servicio de Consultoría | 10 horas | $100/hora | IVA 19% = $1,190
          - Software Licencia       | 1 unidad | $500     | IVA 19% = $595

          Subtotal: $1,600
          IVA (19%): $304
          TOTAL: $1,904
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

          Proceso:
          1. Abrir la factura original
          2. Clic en "Agregar nota de crédito"
          3. Seleccionar motivo:
             - Descuento
             - Devolución de producto
             - Corrección
          4. Ajustar cantidades o importes
          5. Confirmar nota de crédito

          Ejemplo:

          Factura Original: #INV/2025/0001 - $1,904
          Nota de Crédito: #RINV/2025/0001 - ($595)

          Motivo: Devolución de Licencia de Software

          Saldo pendiente: $1,904 - $595 = $1,309
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

          Registrar pago:
          1. Abrir factura pendiente
          2. Clic en "Registrar pago"
          3. Configurar:
             - Diario de pago (Banco / Efectivo)
             - Método de pago (Transferencia, cheque, etc.)
             - Importe (total o parcial)
             - Fecha de pago
          4. Confirmar

          Estados de factura:

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

          Reporte de Antigüedad:

          Cliente         | Actual | 1-30 días | 31-60 días | +60 días | Total
          ----------------|--------|-----------|------------|----------|-------
          Empresa ABC     | $1,000 | $500      | $300       | $0       | $1,800
          Empresa XYZ     | $0     | $0        | $800       | $400     | $1,200

          Acciones de seguimiento:
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

          Crear factura de proveedor:

          Proveedor: Software S.A.
          Fecha factura: 20/01/2025
          Fecha vencimiento: 20/02/2025 (30 días)

          Líneas:
          - Licencias Office 365 | 10 unidades | $50/unidad | IVA 19% = $595
          - Soporte técnico      | 1 servicio  | $200       | IVA 19% = $238

          Subtotal: $700
          IVA (19%): $133
          TOTAL: $833

          ⚠️ IMPORTANTE:
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

          Flujo típico:

          1. BORRADOR
             - Factura ingresada pero no confirmada
             - Se pueden hacer cambios
             - No afecta contabilidad

          2. PUBLICADA
             - Factura confirmada
             - Genera asiento contable
             - Ya no se puede editar (solo cancelar)

          3. PAGO PROGRAMADO
             - Pago ordenado pero no ejecutado
             - En cola para pago

          4. PAGADA
             - Pago registrado y confirmado
             - Factura cerrada

          Validaciones recomendadas:
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

          Registro de pago:

          Proveedor: Software S.A.
          Facturas pendientes: 2
            - Factura 001: $833
            - Factura 002: $1,200
          Total adeudado: $2,033

          Pagar:
          1. Seleccionar facturas a pagar
          2. Elegir método: Transferencia bancaria
          3. Seleccionar cuenta bancaria
          4. Fecha de pago: 20/01/2025
          5. Referencia: TRANS-2025-001

          Pago por lotes:
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

          Reporte mensual de gastos (Enero 2025):

          Categoría              | Monto    | % Total
          -----------------------|----------|--------
          Software y licencias   | $2,500   | 25%
          Servicios profesionales| $3,000   | 30%
          Marketing y publicidad | $1,500   | 15%
          Oficina y suministros  | $1,000   | 10%
          Otros                  | $2,000   | 20%
          -----------------------|----------|--------
          TOTAL                  | $10,000  | 100%

          Comparativa año anterior:
          Enero 2024: $8,500
          Incremento: 17.6% 📈

          Análisis:
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
    introduction: `
      El módulo de Flota de Odoo te permite gestionar todos los vehículos de tu empresa, desde el registro
      inicial hasta el control de mantenimientos y costos operativos.
    `,
    sections: [
      {
        title: '1. Configuración Inicial',
        content: `
          Configurar correctamente el módulo es el primer paso para una gestión eficiente.

          **Elementos a configurar:**
          - Marcas y modelos de vehículos
          - Categorías de vehículos
          - Tipos de servicio de mantenimiento
          - Proveedores de servicio
        `,
        example: `
          📍 Ruta en Odoo: Flota > Configuración

          Crear categorías:
          - Vehículos ligeros (autos, camionetas)
          - Vehículos pesados (camiones, tractocamiones)
          - Maquinaria especial

          Configurar marcas:
          - Toyota
          - Ford
          - Mercedes-Benz

          Cada marca con sus modelos correspondientes.
        `,
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

          Datos del extracto de Banco Santander (Enero 2025):

          Fecha      | Descripción                    | Débito  | Crédito | Saldo
          -----------|--------------------------------|---------|---------|--------
          2025-01-05 | Pago Odoo S.A. - Licencias     | 1,089   |         | 123,911
          2025-01-10 | Cobro INV-2025-001 TechCorp    |         | 18,876  | 142,787
          2025-01-15 | Pago nóminas enero             | 28,000  |         | 114,787
          2025-01-20 | Cobro INV-2025-002 Distribuid. |         | 968     | 115,755
          2025-01-25 | Pago Sistemas Pro - Hardware   | 1,815   |         | 113,940

          Pasos de importación:
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

          Ejemplo de regla automática:

          Nombre: "Cobros de clientes"
          Tipo: Extracto bancario de entrada
          Cuenta contable: Clientes (1120)

          Condiciones:
          - Monto > 0 (entrada de dinero)
          - Buscar factura con monto exacto
          - Buscar referencia que contenga "INV"

          Resultado de conciliación automática:
          ✅ Transacción: +18,876 EUR - Ref: "INV-2025-001"
          ✅ Conciliada con: Factura INV-2025-001 (TechCorp)
          ✅ Estado: Conciliada automáticamente

          Ahorro de tiempo: ~90% de transacciones conciliadas automáticamente
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

          Caso práctico - Pago múltiple:

          Transacción bancaria:
          - Pago a "Odoo S.A." por 2,178 EUR

          Facturas pendientes:
          - BILL-2025-001: 1,089 EUR
          - BILL-2025-003: 1,089 EUR

          Proceso de conciliación:
          1. Seleccionar transacción bancaria pendiente
          2. Buscar facturas del proveedor
          3. Marcar ambas facturas (1,089 + 1,089 = 2,178)
          4. Verificar que el total coincide
          5. Clic en "Validar"

          ✅ Resultado: 2 facturas conciliadas con 1 pago

          Caso con diferencia:
          Transacción: 100 EUR
          Factura: 102 EUR
          Diferencia: -2 EUR (comisión bancaria)

          Solución:
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

          Análisis de diferencias (31/01/2025):

          Saldo según Odoo:     115,940 EUR
          Saldo según banco:    113,940 EUR
          Diferencia:            2,000 EUR

          Investigación:

          1. Revisar transacciones no conciliadas en Odoo:
             ✓ Pago cheque #1234 a proveedor: 2,000 EUR (sin cobrar)

          2. Revisar transacciones bancarias no registradas:
             - Ninguna encontrada

          3. Verificar fechas:
             ✓ Cheque emitido 30/01 pero cobrado 02/02

          Resolución:
          - El cheque se cobrará en febrero
          - Diferencia temporal normal
          - Documentar en "Partidas en tránsito"
          - Se conciliará en próximo extracto

          Reporte de conciliación:
          Saldo banco:              113,940 EUR
          + Cheques en tránsito:      2,000 EUR
          - Depósitos pendientes:         0 EUR
          = Saldo según libros:     115,940 EUR ✅
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

          MENTORA CONSULTING S.A.
          Balance General al 31/01/2025
          (Cifras en EUR)

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

          Análisis:
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

          MENTORA CONSULTING S.A.
          Estado de Resultados - Enero 2025
          (Cifras en EUR)

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

          KPIs:
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

          MENTORA CONSULTING S.A.
          Flujo de Caja - Enero 2025
          (Cifras en EUR)

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

          Análisis:
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

          Ejemplos de reportes útiles:

          1. Análisis por Cliente (Top 5):
             - TechCorp:        18,876 EUR (38%)
             - Distribuidora:   15,200 EUR (30%)
             - Beta Services:   10,500 EUR (21%)
             - Retail Group:     8,424 EUR (17%)
             - Startups Inn:     2,000 EUR (4%)

          2. Gastos por Categoría:
             - Personal:        44,000 EUR (51%)
             - Operaciones:     15,000 EUR (17%)
             - Software:         2,500 EUR (3%)
             - Marketing:        2,800 EUR (3%)
             - Otros:           21,700 EUR (25%)

          3. Rentabilidad por Servicio:
             Servicio              | Ingresos | Costos | Margen
             ---------------------|----------|--------|--------
             Implementación Odoo  | 45,000   | 18,000 | 60%
             Consultoría          | 35,000   | 17,500 | 50%
             Soporte              | 12,000   |  6,000 | 50%
             Capacitación         |  8,000   |  3,000 | 62.5%

          Configuración de reporte:
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
      { title: '1. Configuración de Impuestos', content: 'Configura todos los tipos de impuestos de tu jurisdicción.', example: '📍 Ruta: Contabilidad > Configuración > Impuestos\n\nIVA España 21%:\nNombre: IVA 21% Ventas\nTipo: Porcentaje\nImporte: 21%\nCuenta: 4770001 IVA Repercutido', tips: ['Configura impuestos por pares compra/venta', 'Valida con tu contador'] },
      { title: '2. Reportes Fiscales', content: 'Genera declaraciones de impuestos automáticamente.', example: 'IVA Trimestral Q1 2025:\nVentas: 100,000 EUR\nIVA Repercutido: 21,000 EUR\nCompras: 25,000 EUR  \nIVA Soportado: 5,250 EUR\nA Pagar: 15,750 EUR', tips: ['Declara puntualmente', 'Conserva todos los comprobantes'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué configurar impuestos por pares?', options: ['No es necesario', 'Para separar IVA cobrado vs soportado', 'Solo en Europa', 'Solo empresas grandes'], correct: 1, explanation: 'Necesitas pares para registrar correctamente IVA de ventas e IVA de compras por separado.' }] },
    practicalExercise: { title: 'Ejercicio: Declaración Fiscal', description: 'Genera tu primera declaración de IVA', steps: [] }
  },

  // ========================================
  // VENTAS - TODAS LAS LECCIONES
  // ========================================

  'sales-002': {
    title: 'Gestión de Cotizaciones',
    introduction: 'Crea cotizaciones profesionales y conviértelas en pedidos de venta de manera eficiente.',
    sections: [
      { title: '1. Crear Cotizaciones', content: 'Genera cotizaciones profesionales rápidamente.', example: '📍 Cotización para TechCorp:\nServicio: Implementación Odoo\nHoras: 80\nPrecio/hora: 120 EUR\nSubtotal: 9,600 EUR\nIVA 21%: 2,016 EUR\nTotal: 11,616 EUR\n\nVigencia: 30 días\nTérminos de pago: 50% adelanto, 50% al finalizar', tips: ['Usa plantillas para servicios recurrentes', 'Incluye términos claros'] },
      { title: '2. Productos Opcionales', content: 'Ofrece productos adicionales en tus cotizaciones.', example: 'Base: Implementación Odoo (9,600 EUR)\nOpcionales:\n- Capacitación adicional: 1,200 EUR\n- Soporte extendido 6 meses: 2,400 EUR\n\nCliente elige qué agregar', tips: ['Usa opcionales para upselling', 'Márgenes más altos en opcionales'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Cuál es la ventaja de productos opcionales?', options: ['No tienen ventaja', 'Permiten al cliente personalizar y aumentan ventas', 'Solo para inventario', 'Complican el proceso'], correct: 1, explanation: 'Los opcionales dan flexibilidad al cliente y oportunidad de vender más sin presionar.' }] },
    practicalExercise: { title: 'Ejercicio: Cotización Completa', description: 'Crea una cotización con opcionales', steps: [] }
  },

  'sales-003': {
    title: 'Pedidos de Venta',
    introduction: 'Gestiona el ciclo completo de pedidos desde la confirmación hasta la entrega.',
    sections: [
      { title: '1. Confirmar Pedidos', content: 'Convierte cotizaciones aprobadas en pedidos.', example: 'Cotización #S00045 → Pedido #SO00123\nEstado: Confirmado\nProductos reservados\nEntrega programada: 15/02/2025', tips: ['Confirma solo cuando el cliente acepta', 'Verifica stock antes'] },
      { title: '2. Gestionar Entregas', content: 'Programa y ejecuta entregas de productos/servicios.', example: 'Pedido SO00123:\nFase 1: Análisis (Semana 1-2)\nFase 2: Configuración (Semana 3-4)\nFase 3: Capacitación (Semana 5)\nFase 4: Go-Live (Semana 6)', tips: ['Comunica fechas claramente', 'Actualiza estado regularmente'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Cuándo confirmar un pedido?', options: ['Inmediatamente al crear', 'Cuando el cliente aprueba la cotización', 'Al final del mes', 'Nunca'], correct: 1, explanation: 'Solo confirma pedidos cuando el cliente ha aprobado formalmente la cotización.' }] },
    practicalExercise: { title: 'Ejercicio: Gestión de Pedido', description: 'Procesa un pedido completo', steps: [] }
  },

  'sales-004': {
    title: 'Facturación desde Ventas',
    introduction: 'Factura automáticamente desde pedidos de venta según diferentes políticas.',
    sections: [
      { title: '1. Políticas de Facturación', content: 'Factura según entrega, hitos o anticipos.', example: 'Opciones:\n- Al confirmar pedido (servicios)\n- Al entregar productos (ventas)\n- Por hitos (proyectos)\n- Anticipos + saldo', tips: ['Define política antes de confirmar', 'Comunica al cliente cuándo facturarás'] },
      { title: '2. Facturación Automática', content: 'Genera facturas automáticamente según reglas.', example: 'Pedido #SO00123:\nHito 1 (50%): Factura al completar análisis\nHito 2 (50%): Factura al Go-Live\n\nOdoo genera facturas automáticamente', tips: ['Automatiza para ahorrar tiempo', 'Revisa facturas antes de enviar'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué es facturación por hitos?', options: ['Facturar todo al final', 'Facturar al completar cada fase del proyecto', 'Facturar mensualmente', 'Facturar por producto'], correct: 1, explanation: 'Facturación por hitos significa cobrar al completar cada etapa definida del proyecto.' }] },
    practicalExercise: { title: 'Ejercicio: Facturación Automática', description: 'Configura facturación por hitos', steps: [] }
  },

  'sales-005': {
    title: 'CRM y Seguimiento',
    introduction: 'Usa el CRM integrado para gestionar tu pipeline de ventas y dar seguimiento a oportunidades.',
    sections: [
      { title: '1. Pipeline de Ventas', content: 'Organiza oportunidades en etapas visuales.', example: 'Pipeline:\n→ Nuevo Lead\n→ Contactado\n→ Reunión Agendada\n→ Propuesta Enviada\n→ Negociación\n→ Ganada/Perdida', tips: ['Actualiza estado regularmente', 'Define probabilidad por etapa'] },
      { title: '2. Actividades y Seguimiento', content: 'Programa recordatorios y tareas de seguimiento.', example: 'Lead: TechCorp\nActividad: Llamada de seguimiento\nFecha: Mañana 10:00\nResponsable: María González\nNotas: Preguntar por presupuesto', tips: ['No dejes leads sin seguimiento', 'Usa recordatorios automáticos'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué es importante el pipeline visual?', options: ['Solo es decorativo', 'Permite ver rápidamente el estado de todas las oportunidades', 'Es obligatorio', 'Solo para gerentes'], correct: 1, explanation: 'El pipeline visual te permite identificar rápidamente dónde están tus oportunidades y actuar en consecuencia.' }] },
    practicalExercise: { title: 'Ejercicio: Gestión de Pipeline', description: 'Mueve oportunidades por el pipeline', steps: [] }
  },

  'sales-006': {
    title: 'Reportes y Análisis de Ventas',
    introduction: 'Analiza el desempeño de ventas con dashboards y reportes detallados.',
    sections: [
      { title: '1. Dashboard de Ventas', content: 'Visualiza KPIs clave en tiempo real.', example: 'Dashboard Enero 2025:\nVentas del mes: 100,000 EUR ↑15%\nPipeline activo: 250,000 EUR\nTasa de conversión: 35%\nTicket promedio: 12,500 EUR\nTop vendedor: María G. (45,000 EUR)', tips: ['Revisa dashboard diariamente', 'Establece metas mensuales'] },
      { title: '2. Análisis por Vendedor', content: 'Compara rendimiento del equipo de ventas.', example: 'Vendedor | Ventas | Oportunidades | Conv%\nMaría G. | 45,000 | 15 | 40%\nCarlos M.| 35,000 | 20 | 30%\nAna R.   | 20,000 | 10 | 35%', tips: ['Reconoce top performers', 'Ayuda a los que necesitan apoyo'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué mide la tasa de conversión?', options: ['Total de ventas', 'Porcentaje de oportunidades que se cierran exitosamente', 'Número de clientes', 'Ingresos totales'], correct: 1, explanation: 'La tasa de conversión mide qué porcentaje de oportunidades se convierten en ventas cerradas.' }] },
    practicalExercise: { title: 'Ejercicio: Análisis de Ventas', description: 'Genera y analiza reportes de ventas', steps: [] }
  },

  // ========================================
  // FLOTA - TODAS LAS LECCIONES
  // ========================================

  'fleet-002': {
    title: 'Gestión de Vehículos',
    introduction: 'Registra y administra todos los vehículos de tu flota empresarial.',
    sections: [
      { title: '1. Registro de Vehículos', content: 'Ingresa toda la información de cada vehículo.', example: 'Vehículo: Toyota Prius 2022\nPlaca: 1234-ABC\nVIN: JT2BK18E0X0123456\nKm actuales: 45,000\nValor adquisición: 28,000 EUR\nSeguro: POL-2022-001\nVence: 15/01/2026', tips: ['Digitaliza documentos', 'Actualiza kilometraje mensualmente'] },
      { title: '2. Seguimiento de Documentación', content: 'Controla vencimientos de seguros, permisos, revisiones técnicas.', example: 'Alertas VEH-001:\n⚠️ Seguro vence en 60 días\n⚠️ Revisión técnica en 15 días\n✅ SOAP vigente', tips: ['Configura alertas 60 días antes', 'Renueva a tiempo'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué registrar el VIN?', options: ['No es necesario', 'Identificación única del vehículo para seguros y trámites', 'Solo para autos nuevos', 'Es opcional'], correct: 1, explanation: 'El VIN es el identificador único del vehículo, esencial para seguros, registros y historial.' }] },
    practicalExercise: { title: 'Ejercicio: Registrar Flota', description: 'Ingresa los 3 vehículos de Mentora', steps: [] }
  },

  'fleet-003': {
    title: 'Asignación de Vehículos',
    introduction: 'Asigna vehículos a conductores y gestiona el uso eficientemente.',
    sections: [
      { title: '1. Asignar a Conductores', content: 'Vincula vehículos con empleados autorizados.', example: 'VEH-001: Juan Pérez (Director)\nVEH-002: Carlos Martínez (Consultor)\nVEH-003: Pool car (sin asignar)', tips: ['Verifica licencia vigente', 'Define responsable único'] },
      { title: '2. Control de Uso', content: 'Registra y analiza el uso de cada vehículo.', example: 'VEH-001 Enero 2025:\nKm recorridos: 2,500\nViajes: 45\nPromedio: 55 km/viaje\nCombustible: 180 EUR\nCosto/km: 0.072 EUR', tips: ['Pide reporte mensual', 'Analiza costos por vehículo'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Por qué tener vehículos pool (sin asignar)?', options: ['Es un error', 'Flexibilidad para que cualquier empleado autorizado los use según necesidad', 'Solo para emergencias', 'No tiene sentido'], correct: 1, explanation: 'Los vehículos pool dan flexibilidad operativa sin necesidad de tener un vehículo por empleado.' }] },
    practicalExercise: { title: 'Ejercicio: Asignación', description: 'Asigna vehículos a empleados', steps: [] }
  },

  'fleet-004': {
    title: 'Mantenimiento y Servicios',
    introduction: 'Programa y registra todos los mantenimientos para prolongar la vida útil de tu flota.',
    sections: [
      { title: '1. Plan de Mantenimiento', content: 'Define intervalos de servicio preventivo.', example: 'Toyota Prius:\nCambio aceite: cada 15,000 km\nFiltros: cada 30,000 km\nRevisión mayor: cada 60,000 km\nNeumáticos: cada 40,000 km\n\nPróximo servicio: 60,000 km (en 3,000 km)', tips: ['Sigue manual del fabricante', 'Mantén historial completo'] },
      { title: '2. Registro de Servicios', content: 'Documenta cada servicio realizado.', example: 'Servicio #SRV-001:\nVehículo: VEH-001\nFecha: 15/11/2024\nKm: 45,000\nTipo: Mantenimiento preventivo\nTaller: Toyota Service Madrid\nCosto: 250 EUR\nDetalle: Cambio aceite + filtros', tips: ['Guarda facturas digitalmente', 'Adjunta en Odoo'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Cuál es el beneficio del mantenimiento preventivo?', options: ['Ninguno, es gasto innecesario', 'Previene fallas costosas y prolonga vida del vehículo', 'Solo para autos caros', 'Solo si está en garantía'], correct: 1, explanation: 'El mantenimiento preventivo evita averías costosas y extiende significativamente la vida útil del vehículo.' }] },
    practicalExercise: { title: 'Ejercicio: Plan de Mantenimiento', description: 'Crea plan para los vehículos', steps: [] }
  },

  'fleet-005': {
    title: 'Control de Costos',
    introduction: 'Analiza y controla todos los costos asociados a tu flota.',
    sections: [
      { title: '1. Registro de Combustible', content: 'Lleva control detallado de consumo de combustible.', example: 'VEH-001 Enero:\nCargas: 8\nLitros totales: 180 L\nCosto total: 280 EUR\nPrecio promedio: 1.56 EUR/L\nKm recorridos: 2,500\nConsumo: 7.2 L/100km', tips: ['Usa tarjeta corporativa', 'Analiza eficiencia mensualmente'] },
      { title: '2. Costo Total de Propiedad', content: 'Calcula el TCO (Total Cost of Ownership).', example: 'VEH-001 TCO Anual:\nDepreciación: 4,000 EUR\nCombustible: 3,360 EUR\nMantenimiento: 1,200 EUR\nSeguro: 1,200 EUR\nImpuestos: 800 EUR\nTotal: 10,560 EUR\nCosto/km: 0.352 EUR\nCosto/mes: 880 EUR', tips: ['Calcula TCO anualmente', 'Compara con leasing'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué incluye el TCO?', options: ['Solo combustible', 'Todos los costos del vehículo: compra, operación, mantenimiento, seguros', 'Solo compra', 'Solo mantenimiento'], correct: 1, explanation: 'TCO incluye TODOS los costos: adquisición, depreciación, operación, mantenimiento, seguros e impuestos.' }] },
    practicalExercise: { title: 'Ejercicio: Análisis de Costos', description: 'Calcula TCO de la flota', steps: [] }
  },

  'fleet-006': {
    title: 'Contratos y Reportes',
    introduction: 'Gestiona contratos de arrendamiento y genera reportes de rendimiento de flota.',
    sections: [
      { title: '1. Contratos de Arrendamiento', content: 'Administra leasing y renting de vehículos.', example: 'Contrato VEH-003:\nTipo: Renting\nProveedor: AutoRent S.A.\nCuota mensual: 450 EUR\nIncluye: mantenimiento, seguro, neumáticos\nDuración: 36 meses\nInicio: 01/03/2023\nVence: 28/02/2026\nKm incluidos: 30,000/año', tips: ['Revisa qué incluye el contrato', 'Controla exceso de km'] },
      { title: '2. Reportes de Flota', content: 'Genera análisis para optimizar tu flota.', example: 'Reporte Trimestral:\nFlota total: 3 vehículos\nKm totales: 18,500\nCosto total: 8,450 EUR\nCosto/km: 0.457 EUR\nUtilización: 75%\nVehículo más eficiente: VEH-003\nRecomendación: Renovar VEH-002', tips: ['Genera reportes trimestrales', 'Busca optimizaciones'] }
    ],
    quiz: { questions: [{ id: 'q1', question: '¿Qué ventaja tiene el renting vs compra?', options: ['Ninguna', 'Cuota fija mensual que incluye todos los costos, sin sorpresas', 'Es más caro siempre', 'Solo para empresas grandes'], correct: 1, explanation: 'El renting ofrece cuota fija mensual que incluye mantenimiento, seguros y otros costos, facilitando el presupuesto.' }] },
    practicalExercise: { title: 'Ejercicio: Reporte de Flota', description: 'Genera análisis completo', steps: [] }
  },

  // ========================================
  // CRM - GESTIÓN DE RELACIONES CON CLIENTES
  // ========================================
  'crm-001': {
    title: 'Introducción al CRM',
    introduction: `
      El CRM (Customer Relationship Management) es tu mejor amigo para encontrar y mantener clientes.
      Piensa en él como una agenda súper inteligente que recuerda TODO sobre cada persona interesada
      en tu negocio: qué quiere, cuándo llamó, qué le dijiste, y cuándo debes seguirlo.
    `,
    sections: [
      {
        title: '1. ¿Qué es un Lead?',
        content: `
          Un **Lead** es una persona o empresa que mostró interés en tu producto o servicio.
          Puede ser alguien que:
          - Llenó un formulario en tu sitio web
          - Te llamó preguntando por precios
          - Te enviaron un email pidiendo información
          - Te conoció en una feria o evento

          **¿Por qué es importante registrarlos?**
          Porque sin un sistema, ¡se te olvidarán! El CRM te ayuda a no perder ninguna oportunidad.
        `,
        example: `
          📍 Ruta en Odoo: CRM > Leads

          Ejemplo de Lead:
          ─────────────────────
          Nombre: María García
          Empresa: Panadería La Estrella
          Email: maria@panaderia.com
          Teléfono: 555-1234
          Origen: Formulario web
          Interés: Sistema de inventario
          Notas: "Quiere controlar su stock de harina"

          ¿Qué hacer ahora?
          ✓ Llamarla mañana a las 10am
          ✓ Enviarle información sobre el módulo de Inventario
          ✓ Agendar una demostración si le interesa
        `,
        tips: [
          'Registra TODO de inmediato, la memoria falla',
          'Siempre anota de dónde vino el lead (origen)',
          'Programa la próxima acción: ¿Cuándo lo contactarás?',
          'Sé específico en las notas: qué le interesa y por qué'
        ]
      },
      {
        title: '2. El Pipeline (Embudo de Ventas)',
        content: `
          Imagina un embudo: muchos leads entran arriba, pero solo algunos salen convertidos en clientes.
          El Pipeline te muestra visualmente en qué etapa está cada oportunidad.

          **Etapas típicas:**
          1. Nuevo - Acaba de llegar
          2. Calificado - Confirmaste que tiene interés real
          3. Propuesta - Le enviaste cotización
          4. Negociación - Están discutiendo precios/términos
          5. Ganado - ¡Éxito! Se convirtió en cliente
          6. Perdido - No compró (pero aprendes por qué)
        `,
        example: `
          📍 Ruta en Odoo: CRM > Pipeline

          Tu Pipeline Visual:
          ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐
          │  NUEVO  │ │CALIFICADO│ │ PROPUESTA│ │NEGOCIACIÓN│
          │   10    │ │    5     │ │     3    │ │     2     │
          └─────────┘ └──────────┘ └──────────┘ └───────────┘

          De 10 leads nuevos:
          • 5 estaban realmente interesados (50%)
          • 3 pidieron cotización (30%)
          • 2 están negociando (20%)
          • Posiblemente 1-2 comprarán (10-20%)

          ¡Esto es NORMAL! No todos compran, lo importante es dar seguimiento.
        `,
        tips: [
          'Revisa tu pipeline cada mañana',
          'Mueve las tarjetas según avancen',
          'Si un lead no responde en 2 semanas, llámalo',
          'Analiza por qué los pierdes para mejorar'
        ]
      },
      {
        title: '3. Programar Actividades',
        content: `
          Las actividades son recordatorios de lo que debes hacer con cada cliente potencial.
          Sin esto, se te olvidará seguirlos y perderás ventas.

          **Tipos de actividades:**
          - Llamar: Hablar por teléfono
          - Email: Enviar correo
          - Reunión: Agendar cita presencial o virtual
          - Tarea: Algo que hacer (enviar documento, etc.)
        `,
        example: `
          📍 Ruta: En cualquier Lead > Pestaña "Actividades" > Programar

          Actividad programada:
          ─────────────────────────
          Tipo: Llamada telefónica
          Responsable: Yo
          Fecha: Mañana 10:00 AM
          Resumen: "Seguimiento a cotización enviada"
          Notas: "Preguntarle si recibió el PDF y si tiene dudas"

          Cuando se acerque la hora, Odoo te mostrará un aviso.
          Después de la llamada, registras qué pasó y programas la siguiente acción.
        `,
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
    introduction: 'Aprende cuándo y cómo convertir un lead interesado en una oportunidad real de venta.',
    sections: [
      {
        title: '1. ¿Cuándo Convertir un Lead?',
        content: `
          Un lead se convierte en **Oportunidad** cuando:
          - Confirmaste que tiene un problema real que puedes resolver
          - Tiene presupuesto (o está dispuesto a invertir)
          - Es la persona que decide o influye en la compra
          - Tiene un plazo en mente para resolver su necesidad

          Si no cumple estos criterios, sigue siendo solo un lead y necesita más seguimiento.
        `,
        example: `
          Lead: María de Panadería La Estrella

          ¿Tiene problema real? ✓ Sí, pierde dinero por mal control de inventario
          ¿Tiene presupuesto? ✓ Sí, puede invertir hasta $500/mes
          ¿Decide ella? ✓ Sí, es la dueña
          ¿Urgencia? ✓ Sí, necesita antes de temporada alta

          RESULTADO: ¡Convertir a Oportunidad!

          Valor estimado: $500/mes × 12 meses = $6,000/año
        `,
        tips: [
          'No conviertas leads solo por convertir',
          'Haz las preguntas correctas para calificar',
          'Estima el valor de la oportunidad',
          'Define claramente la próxima acción'
        ]
      },
      {
        title: '2. Proceso de Conversión',
        content: `
          Cuando estés seguro de que el lead está calificado:
          1. Abre el lead en Odoo
          2. Haz clic en "Convertir a Oportunidad"
          3. Asigna un valor estimado (cuánto puede valer la venta)
          4. Selecciona o crea el cliente
          5. Elige la etapa inicial del pipeline
        `,
        example: `
          📍 Ruta: CRM > Lead > Botón "Convertir a Oportunidad"

          Datos a completar:
          ─────────────────────
          Nombre oportunidad: "Sistema Inventario - Panadería La Estrella"
          Cliente: María García (se crea automático)
          Valor esperado: $6,000
          Probabilidad: 60%
          Fecha cierre estimada: 30 días
          Vendedor: Tú

          Al guardar, aparece en el Pipeline como Oportunidad
          y puedes empezar a enviar cotizaciones.
        `,
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
          Sin control de inventario:
          - No sabes qué productos tienes realmente
          - Te quedas sin stock y pierdes ventas
          - Tienes productos vencidos o dañados sin saberlo
          - No sabes cuánto dinero tienes "parado" en productos
          - Desperdicias dinero comprando lo que ya tienes

          Con control de inventario:
          - Sabes exactamente qué tienes y dónde
          - El sistema te avisa cuándo reponer
          - Calculas el valor de tu inventario
          - Reduces pérdidas y desperdicios
          - Tomas decisiones basadas en datos reales
        `,
        example: `
          Ejemplo: Tienda de Abarrotes "Don José"

          SIN Odoo (Antes):
          "Creo que tengo como 20 kg de azúcar..."
          "¿Dónde puse esas latas de atún?"
          "¿Ya se venció el queso?"

          CON Odoo (Ahora):
          Azúcar: 18.5 kg (Ubicación: Estante A-3)
          Atún: 45 latas (Ubicación: Bodega-2)
          Queso: 12 unidades (Vence: 15/03/2024) ⚠️

          ¡Todo claro y sin adivinanzas!
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
          Registrarlo en Odoo te permite:
          - Tener sus datos siempre a la mano
          - Hacer pedidos directamente desde el sistema
          - Llevar historial de todas las compras
          - Comparar precios entre proveedores
        `,
        example: `
          📍 Ruta: Compras > Proveedores > Crear

          Nuevo proveedor:
          ─────────────────────────
          Nombre: Distribuidora ABC S.A.
          NIF/RFC: ABC123456789
          Dirección: Calle Industrial #100
          Teléfono: 555-9876
          Email: ventas@abc.com
          Sitio web: www.abc.com

          Contacto principal: Roberto Sánchez
          Cargo: Ejecutivo de ventas
          Móvil: 555-1111

          Condiciones:
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
          Cuando necesitas comprar productos, creas una "Solicitud de Presupuesto" (RFQ).
          Es como decirle al proveedor: "¿Cuánto me cuesta esto?"

          Esto es especialmente útil cuando:
          - Quieres comparar precios
          - Necesitas confirmar disponibilidad
          - Es la primera vez que compras algo
        `,
        example: `
          📍 Ruta: Compras > Solicitudes de Presupuesto > Crear

          Nueva solicitud:
          ─────────────────────────
          Proveedor: Distribuidora ABC
          Fecha del pedido: Hoy
          Fecha límite: En 5 días

          Productos solicitados:
          ┌────────────────┬─────────┬─────────┐
          │ Producto       │ Cantidad│ Precio  │
          ├────────────────┼─────────┼─────────┤
          │ Azúcar 1kg     │   50    │ $18.00  │
          │ Arroz 1kg      │   30    │ $22.00  │
          │ Frijol 1kg     │   25    │ $28.00  │
          └────────────────┴─────────┴─────────┘

          Subtotal: $2,260.00
          IVA 16%: $361.60
          TOTAL: $2,621.60

          Estado: Solicitud enviada ✓
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
          la "Solicitud" se convierte en "Orden de Compra" oficial.

          Este es el compromiso formal: tú compras, ellos entregan.
        `,
        example: `
          📍 Ruta: En la Solicitud > Botón "Confirmar Pedido"

          La solicitud ahora es ORDEN DE COMPRA:
          ─────────────────────────
          Número: PO00015
          Estado: Orden de Compra ✓

          Próximos pasos:
          1. Esperar la entrega del proveedor
          2. Cuando llegue, registrar la recepción
          3. Verificar que todo esté correcto
          4. Pagar según los términos acordados

          El proveedor puede ver el pedido y preparar el envío.
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
          Esto te ayuda a:
          - Tener sus datos siempre disponibles
          - Asignarle a un departamento
          - Gestionar sus documentos
          - Calcular su nómina (si usas ese módulo)
        `,
        example: `
          📍 Ruta: Empleados > Empleados > Crear

          Ficha de empleado:
          ─────────────────────────
          INFORMACIÓN PERSONAL
          Nombre: Ana Martínez López
          Foto: [Subir foto]
          Cargo: Vendedora
          Departamento: Ventas
          Jefe directo: Carlos Rodríguez

          INFORMACIÓN DE CONTACTO
          Teléfono trabajo: Ext. 105
          Email trabajo: ana.martinez@miempresa.com
          Móvil personal: 555-7890

          INFORMACIÓN PRIVADA
          Dirección: Calle Principal #200
          Fecha nacimiento: 15/03/1990
          Género: Femenino
          Estado civil: Soltera
          Contacto emergencia: Juan Martínez (Padre) 555-4567

          Esta información es confidencial y solo RRHH la ve completa.
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
          Organizar a tus empleados por departamentos te ayuda a:
          - Ver la estructura de tu empresa
          - Asignar responsables
          - Gestionar permisos
          - Planificar recursos

          Ejemplos de departamentos:
          - Administración
          - Ventas
          - Producción
          - Almacén
          - Contabilidad
        `,
        example: `
          📍 Ruta: Empleados > Configuración > Departamentos

          Estructura de Mi Empresa:
          ─────────────────────────
          DIRECCIÓN GENERAL
          └── Director: Roberto Torres
              ├── VENTAS (5 personas)
              │   └── Gerente: Carlos Rodríguez
              │       ├── Ana Martínez (Vendedora)
              │       ├── Pedro Gómez (Vendedor)
              │       └── Luis Sánchez (Vendedor)
              ├── PRODUCCIÓN (8 personas)
              │   └── Gerente: María Fernández
              └── ADMINISTRACIÓN (3 personas)
                  └── Gerente: Laura Díaz

          Esto te da visibilidad clara de tu organización.
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
          Registrarlo en Odoo te permite:
          - Llevar historial de contratos
          - Recibir avisos de vencimientos
          - Calcular prestaciones automáticamente
          - Mantener documentación legal
        `,
        example: `
          📍 Ruta: Empleado > Pestaña "Contratos"

          Contrato de Ana Martínez:
          ─────────────────────────
          Tipo: Tiempo Completo
          Fecha inicio: 01/02/2024
          Fecha fin: Indefinido
          Horario: Lunes a Viernes, 9am-6pm

          Compensación:
          Salario mensual: $15,000
          Bono por ventas: 2% de ventas
          Vales de despensa: $1,500/mes

          Documentos adjuntos:
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
