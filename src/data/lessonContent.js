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
