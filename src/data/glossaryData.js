// Glosario completo de Odoo 19 con definiciones, relaciones, ejemplos y best practices
// Diseñado para usuarios sin experiencia técnica

export const glossaryTerms = {
  // =====================================
  // CONTABILIDAD Y FINANZAS
  // =====================================
  'plan-de-cuentas': {
    term: 'Plan de Cuentas',
    shortDef: 'La columna vertebral de tu contabilidad',
    fullDef: 'Es la lista organizada de TODAS las cuentas contables de tu empresa. Piensa en él como un índice o tabla de contenido de tu libro de finanzas.',
    category: 'Contabilidad',
    icon: '📊',
    example: {
      title: 'Estructura típica',
      content: `
        1000 - ACTIVOS
        ├── 1100 - Bancos
        │   ├── 1101 - Banco Principal
        │   └── 1102 - Cuenta de Ahorros
        ├── 1200 - Cuentas por Cobrar
        └── 1300 - Inventario

        2000 - PASIVOS
        ├── 2100 - Cuentas por Pagar
        └── 2200 - Impuestos por Pagar

        3000 - PATRIMONIO
        4000 - INGRESOS
        5000 - GASTOS
      `
    },
    relationships: [
      {
        relatedTerm: 'cuenta-contable',
        explanation: 'El Plan de Cuentas contiene todas las Cuentas Contables organizadas jerárquicamente'
      },
      {
        relatedTerm: 'diario-contable',
        explanation: 'Cada movimiento en un Diario afecta cuentas específicas del Plan'
      }
    ],
    bestPractices: [
      'Usa numeración lógica: 1xxx para activos, 2xxx para pasivos, etc.',
      'No elimines cuentas con movimientos, márcalas como inactivas',
      'Revisa el plan predeterminado de tu país antes de crear cuentas nuevas',
      'La estructura debe ser escalable para crecer con tu negocio'
    ],
    commonMistakes: [
      'Crear cuentas duplicadas con nombres diferentes',
      'No seguir la estructura jerárquica correcta',
      'Eliminar cuentas que ya tienen movimientos históricos'
    ],
    relatedModules: ['Contabilidad', 'Facturación', 'Gastos']
  },

  'cuenta-contable': {
    term: 'Cuenta Contable',
    shortDef: 'Donde se registran movimientos específicos de dinero',
    fullDef: 'Es un registro individual donde se anotan entradas y salidas de dinero de un tipo específico. Por ejemplo, la cuenta "Bancos" solo registra movimientos de tu cuenta bancaria.',
    category: 'Contabilidad',
    icon: '💳',
    example: {
      title: 'Cuenta 1101 - Banco Principal',
      content: `
        Fecha       | Descripción          | Debe    | Haber   | Saldo
        01/03/2024  | Saldo inicial        | $10,000 |         | $10,000
        05/03/2024  | Cobro factura #001   | $1,500  |         | $11,500
        10/03/2024  | Pago a proveedor     |         | $3,000  | $8,500
        15/03/2024  | Cobro factura #002   | $2,000  |         | $10,500

        El saldo final te dice: "Tienes $10,500 en el banco"
      `
    },
    relationships: [
      {
        relatedTerm: 'asiento-contable',
        explanation: 'Cada asiento mueve dinero de una cuenta a otra (partida doble)'
      },
      {
        relatedTerm: 'diario-contable',
        explanation: 'Los movimientos de la cuenta se registran a través de diarios'
      }
    ],
    bestPractices: [
      'Cada cuenta debe tener un propósito claro y único',
      'El código de cuenta determina su posición en la jerarquía',
      'Cuentas hijas heredan características de cuentas padre',
      'Mantén consistencia en la nomenclatura'
    ],
    commonMistakes: [
      'Mezclar diferentes tipos de gastos en una sola cuenta',
      'No usar el tipo de cuenta correcto (activo vs pasivo)',
      'Olvidar que el código define la jerarquía'
    ],
    relatedModules: ['Contabilidad', 'Reportes Financieros']
  },

  'diario-contable': {
    term: 'Diario Contable',
    shortDef: 'Libro donde se registran transacciones por tipo',
    fullDef: 'Es como tener diferentes libretas para diferentes tipos de transacciones. Una para ventas, otra para compras, otra para bancos, etc. Cada transacción va al diario que le corresponde.',
    category: 'Contabilidad',
    icon: '📒',
    example: {
      title: 'Diarios típicos en una empresa',
      content: `
        DIARIO DE VENTAS (VNT)
        → Aquí van TODAS las facturas que emites a clientes
        → Afecta: Cuentas por Cobrar + Ingresos

        DIARIO DE COMPRAS (CMP)
        → Aquí van TODAS las facturas de tus proveedores
        → Afecta: Cuentas por Pagar + Gastos/Inventario

        DIARIO DE BANCO (BNC)
        → Aquí van movimientos de tu cuenta bancaria
        → Afecta: Cuenta de Banco + diversas cuentas

        DIARIO DE CAJA (EFV)
        → Aquí van movimientos en efectivo
        → Afecta: Cuenta de Caja + diversas cuentas
      `
    },
    relationships: [
      {
        relatedTerm: 'asiento-contable',
        explanation: 'Los asientos se crean dentro de un diario específico'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Al confirmar una factura, se genera un asiento en el diario correspondiente'
      }
    ],
    bestPractices: [
      'Cada diario debe tener una secuencia única de numeración',
      'Configura la cuenta por defecto para cada diario',
      'Usa diarios separados para mejor control y auditoría',
      'El código del diario aparece en todos sus movimientos'
    ],
    commonMistakes: [
      'Registrar transacciones en el diario equivocado',
      'No configurar la cuenta bancaria asociada al diario de banco',
      'Mezclar diferentes tipos de operaciones en un solo diario'
    ],
    relatedModules: ['Contabilidad', 'Facturación', 'Tesorería']
  },

  'asiento-contable': {
    term: 'Asiento Contable',
    shortDef: 'Registro de una transacción que siempre cuadra',
    fullDef: 'Es el registro oficial de una transacción financiera. Sigue la regla de "partida doble": por cada peso que entra (DEBE), debe salir de otro lado (HABER). Siempre debe cuadrar.',
    category: 'Contabilidad',
    icon: '✍️',
    example: {
      title: 'Asiento: Cobro de factura #001 por $1,500',
      content: `
        DEBE (lo que entra):
        → Cuenta Bancos: +$1,500

        HABER (de dónde sale):
        → Cuentas por Cobrar: -$1,500

        TOTAL DEBE: $1,500
        TOTAL HABER: $1,500
        ¿Cuadra? ✓ SÍ

        Significado: "El dinero entró al banco y dejamos de tener esa cuenta por cobrar"
      `
    },
    relationships: [
      {
        relatedTerm: 'diario-contable',
        explanation: 'Todo asiento pertenece a un diario específico'
      },
      {
        relatedTerm: 'cuenta-contable',
        explanation: 'Cada línea del asiento afecta una cuenta contable'
      }
    ],
    bestPractices: [
      'Siempre verifica que DEBE = HABER antes de guardar',
      'Agrega descripción clara de qué representa el asiento',
      'Usa la fecha correcta del movimiento, no la fecha de registro',
      'Vincula documentos de respaldo (facturas, recibos)'
    ],
    commonMistakes: [
      'Asientos que no cuadran (DEBE ≠ HABER)',
      'Olvidar el impuesto en las líneas',
      'Usar fechas incorrectas que afectan reportes',
      'No incluir referencia al documento origen'
    ],
    relatedModules: ['Contabilidad']
  },

  'factura': {
    term: 'Factura',
    shortDef: 'Documento legal de cobro a clientes',
    fullDef: 'Es el documento oficial que envías al cliente para cobrarle por productos o servicios. Tiene valor legal y fiscal. Al confirmarla, Odoo crea automáticamente el asiento contable correspondiente.',
    category: 'Ventas',
    icon: '🧾',
    example: {
      title: 'Factura INV/2024/00015',
      content: `
        Cliente: Panadería La Estrella
        Fecha: 15/03/2024
        Vencimiento: 15/04/2024 (30 días)

        Líneas:
        - Servicio de consultoría x 10 hrs @ $100 = $1,000
        - IVA 16%: $160
        TOTAL: $1,160

        Al CONFIRMAR esta factura:
        1. Se crea asiento en Diario de Ventas
        2. Aumenta Cuentas por Cobrar (+$1,160)
        3. Aumenta Ingresos (+$1,000)
        4. Aumenta IVA por Pagar (+$160)
      `
    },
    relationships: [
      {
        relatedTerm: 'asiento-contable',
        explanation: 'Al confirmar la factura, se genera automáticamente un asiento'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'Cada factura está asociada a un cliente específico'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Las líneas de factura contienen productos o servicios'
      }
    ],
    bestPractices: [
      'Revisa todos los datos ANTES de confirmar',
      'Configura plazos de pago estándar para cada cliente',
      'Usa productos predefinidos para consistencia',
      'Adjunta documentos de soporte cuando sea necesario'
    ],
    commonMistakes: [
      'Confirmar sin revisar cliente, productos o importes',
      'No configurar impuestos correctamente en productos',
      'Olvidar establecer fecha de vencimiento',
      'No dar seguimiento a facturas vencidas'
    ],
    relatedModules: ['Ventas', 'Contabilidad', 'CRM']
  },

  // =====================================
  // INVENTARIO Y PRODUCTOS
  // =====================================
  'producto': {
    term: 'Producto',
    shortDef: 'Artículo que vendes, compras o fabricas',
    fullDef: 'Es cualquier artículo que manejas en tu negocio. Puede ser físico (camisetas), consumible (papel) o servicio (consultoría). Cada tipo se comporta diferente en el sistema.',
    category: 'Inventario',
    icon: '📦',
    example: {
      title: 'Tipos de productos',
      content: `
        ALMACENABLE (controla stock):
        → Camiseta Azul Talla M
        → Odoo cuenta cuántas tienes
        → Avisa cuando quedan pocas

        CONSUMIBLE (no controla stock):
        → Papel de impresora
        → Siempre disponible, no rastrea cantidad

        SERVICIO (no físico):
        → Hora de consultoría
        → No hay stock, solo se factura tiempo
      `
    },
    relationships: [
      {
        relatedTerm: 'ubicacion',
        explanation: 'Los productos almacenables tienen una ubicación física'
      },
      {
        relatedTerm: 'movimiento-stock',
        explanation: 'Cada entrada/salida de producto genera un movimiento'
      }
    ],
    bestPractices: [
      'Usa nombres descriptivos y consistentes',
      'Asigna categorías para organizar productos',
      'Configura unidades de medida correctas',
      'Establece reglas de reabastecimiento para no quedarte sin stock'
    ],
    commonMistakes: [
      'Elegir tipo "Consumible" cuando quieres controlar stock',
      'No establecer precios de costo y venta',
      'Nombres genéricos como "Producto 1"',
      'No configurar impuestos del producto'
    ],
    relatedModules: ['Inventario', 'Ventas', 'Compras', 'Fabricación']
  },

  'ubicacion': {
    term: 'Ubicación de Almacén',
    shortDef: 'Lugar físico donde guardas productos',
    fullDef: 'Representa un lugar específico dentro de tu almacén donde se guardan productos. Puede ser tan general como "Bodega Principal" o tan específico como "Estante A, Nivel 3, Caja 5".',
    category: 'Inventario',
    icon: '📍',
    example: {
      title: 'Estructura de ubicaciones',
      content: `
        MI ALMACÉN
        ├── 🏪 Tienda (productos en mostrador)
        ├── 📦 Bodega Principal
        │   ├── Estante A (Ropa)
        │   │   ├── A-1 (Camisetas)
        │   │   └── A-2 (Pantalones)
        │   ├── Estante B (Accesorios)
        │   └── Estante C (Zapatos)
        └── ❄️ Refrigerador (Perecederos)

        Así sabes EXACTAMENTE dónde está cada producto.
      `
    },
    relationships: [
      {
        relatedTerm: 'movimiento-stock',
        explanation: 'Todo movimiento tiene ubicación origen y destino'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Cada producto puede estar en múltiples ubicaciones'
      }
    ],
    bestPractices: [
      'Empieza simple, puedes agregar detalle después',
      'Usa nombres que todos en tu equipo entiendan',
      'Agrupa productos similares en mismas ubicaciones',
      'Considera "ubicaciones virtuales" para cosas especiales (merma, cuarentena)'
    ],
    commonMistakes: [
      'Crear demasiadas ubicaciones al inicio',
      'No actualizar ubicaciones cuando reorganizas físicamente',
      'Olvidar ubicaciones especiales (devoluciones, productos dañados)'
    ],
    relatedModules: ['Inventario', 'Almacén']
  },

  'movimiento-stock': {
    term: 'Movimiento de Stock',
    shortDef: 'Registro de entrada o salida de productos',
    fullDef: 'Cada vez que un producto se mueve de un lugar a otro, se genera un movimiento. Puede ser: recepción de proveedor, venta a cliente, transferencia interna, ajuste de inventario, etc.',
    category: 'Inventario',
    icon: '🔄',
    example: {
      title: 'Tipos de movimientos',
      content: `
        RECEPCIÓN (entrada):
        Proveedor → Tu Almacén
        "Llegaron 50 camisetas del proveedor"
        Stock: 0 → 50

        ENTREGA (salida):
        Tu Almacén → Cliente
        "Vendiste 10 camisetas"
        Stock: 50 → 40

        TRANSFERENCIA INTERNA:
        Bodega → Tienda
        "Moviste 5 camisetas a mostrador"
        Bodega: 40 → 35
        Tienda: 0 → 5

        AJUSTE:
        "Encontraste 3 camisetas dañadas"
        Stock: 35 → 32
      `
    },
    relationships: [
      {
        relatedTerm: 'ubicacion',
        explanation: 'Todo movimiento va de una ubicación a otra'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Cada movimiento afecta el stock de un producto específico'
      },
      {
        relatedTerm: 'orden-compra',
        explanation: 'Las recepciones se originan de órdenes de compra'
      }
    ],
    bestPractices: [
      'Registra movimientos inmediatamente, no acumules',
      'Siempre indica la razón del movimiento',
      'Verifica cantidades físicamente antes de confirmar',
      'Usa estrategias de salida: FIFO, LIFO, FEFO según tu negocio'
    ],
    commonMistakes: [
      'No registrar movimientos y perder trazabilidad',
      'Confirmar sin verificar cantidades reales',
      'Olvidar movimientos de productos dañados o perdidos',
      'No usar lotes o series cuando es necesario'
    ],
    relatedModules: ['Inventario', 'Compras', 'Ventas']
  },

  // =====================================
  // CRM Y VENTAS
  // =====================================
  'lead': {
    term: 'Lead',
    shortDef: 'Persona interesada en tu producto',
    fullDef: 'Es alguien que mostró interés inicial en tu negocio pero aún NO ha comprado. Podría convertirse en cliente si le das buen seguimiento.',
    category: 'CRM',
    icon: '🎯',
    example: {
      title: 'Ciclo de vida de un Lead',
      content: `
        1️⃣ NUEVO: María llena formulario en tu web
        → "Quiero información sobre sus servicios"

        2️⃣ CONTACTADO: La llamas
        → "Sí, necesito ayuda con mi contabilidad"

        3️⃣ CALIFICADO: Confirmas su interés real
        → Tiene presupuesto, necesidad y urgencia

        4️⃣ CONVERTIDO: Se vuelve Oportunidad
        → Ya puedes enviarle cotización

        ❌ PERDIDO: No tiene interés real
        → "Solo preguntaba, gracias"
      `
    },
    relationships: [
      {
        relatedTerm: 'oportunidad',
        explanation: 'Un lead calificado se convierte en oportunidad'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'Si el lead compra, se convierte en cliente'
      }
    ],
    bestPractices: [
      'Registra TODOS los leads, incluso los pequeños',
      'Siempre anota el origen (web, teléfono, referido)',
      'Programa actividad de seguimiento inmediatamente',
      'Califica rápido: ¿es lead real o solo curiosidad?'
    ],
    commonMistakes: [
      'No registrar leads y perder oportunidades',
      'Olvidar dar seguimiento en tiempo',
      'No anotar información importante de la conversación',
      'Convertir a oportunidad sin calificar primero'
    ],
    relatedModules: ['CRM', 'Ventas', 'Marketing']
  },

  'oportunidad': {
    term: 'Oportunidad',
    shortDef: 'Venta potencial con valor estimado',
    fullDef: 'Es un lead que ya calificaste y tiene posibilidades reales de comprar. Incluye valor estimado de la venta y probabilidad de cierre.',
    category: 'CRM',
    icon: '💰',
    example: {
      title: 'Oportunidad en Pipeline',
      content: `
        Oportunidad: "Sistema contable - Panadería La Estrella"

        Cliente: María García
        Valor esperado: $6,000/año
        Probabilidad: 60%
        Fecha cierre estimada: 30 días

        PIPELINE:
        ┌─────────┐  ┌───────────┐  ┌─────────┐
        │  NUEVO  │→ │ PROPUESTA │→ │ GANADO  │
        │         │  │    ★      │  │         │
        └─────────┘  └───────────┘  └─────────┘

        ★ = Aquí está esta oportunidad
        Ya le enviaste cotización, esperas respuesta.
      `
    },
    relationships: [
      {
        relatedTerm: 'lead',
        explanation: 'La oportunidad nace de un lead calificado'
      },
      {
        relatedTerm: 'cotizacion',
        explanation: 'Puedes crear cotizaciones desde la oportunidad'
      }
    ],
    bestPractices: [
      'Estima valor realista basado en necesidades del cliente',
      'Actualiza probabilidad según avanza la negociación',
      'Siempre ten próxima actividad programada',
      'Analiza por qué pierdes oportunidades para mejorar'
    ],
    commonMistakes: [
      'Inflar valores para verse bien en reportes',
      'No actualizar estado cuando cambia la situación',
      'Dejar oportunidades sin seguimiento',
      'No cerrar oportunidades perdidas (y aprender de ellas)'
    ],
    relatedModules: ['CRM', 'Ventas']
  },

  // =====================================
  // COMPRAS
  // =====================================
  'orden-compra': {
    term: 'Orden de Compra',
    shortDef: 'Pedido formal a tu proveedor',
    fullDef: 'Es el documento oficial donde le dices al proveedor: "Quiero comprar estos productos, en estas cantidades, a estos precios". Es un compromiso de compra.',
    category: 'Compras',
    icon: '📋',
    example: {
      title: 'Flujo de compra completo',
      content: `
        1️⃣ SOLICITUD (RFQ):
        "Hola proveedor, ¿me cotizas 50 camisetas?"
        Estado: Borrador

        2️⃣ CONFIRMACIÓN:
        "Ok, acepto. Mándame las 50 camisetas"
        Estado: Orden de Compra
        → Se genera obligación de pago

        3️⃣ RECEPCIÓN:
        "Llegaron las camisetas, verifico..."
        → Stock aumenta en almacén

        4️⃣ FACTURA:
        "Proveedor me envía factura por $2,500"
        → Se registra cuenta por pagar

        5️⃣ PAGO:
        "Le pago al proveedor"
        → Se cancela la deuda
      `
    },
    relationships: [
      {
        relatedTerm: 'proveedor',
        explanation: 'Cada orden se hace a un proveedor específico'
      },
      {
        relatedTerm: 'movimiento-stock',
        explanation: 'Al recibir la orden, se genera movimiento de entrada'
      },
      {
        relatedTerm: 'factura',
        explanation: 'La orden genera factura de proveedor por pagar'
      }
    ],
    bestPractices: [
      'Siempre compara precios de varios proveedores',
      'Verifica cantidades y precios antes de confirmar',
      'Registra fecha esperada de entrega',
      'Vincula con requisición si existe proceso de aprobación'
    ],
    commonMistakes: [
      'Confirmar sin verificar precios actuales',
      'No registrar la recepción cuando llega mercancía',
      'Olvidar costos adicionales (envío, seguros)',
      'No dar seguimiento a entregas retrasadas'
    ],
    relatedModules: ['Compras', 'Inventario', 'Contabilidad']
  },

  // =====================================
  // RRHH
  // =====================================
  'empleado': {
    term: 'Empleado',
    shortDef: 'Persona que trabaja en tu empresa',
    fullDef: 'Es el registro completo de una persona de tu equipo. Incluye datos personales, cargo, departamento, contrato, salario y más.',
    category: 'RRHH',
    icon: '👤',
    example: {
      title: 'Ficha completa de empleado',
      content: `
        INFORMACIÓN LABORAL:
        Nombre: Ana Martínez
        Cargo: Vendedora Senior
        Departamento: Ventas
        Jefe: Carlos Rodríguez
        Fecha ingreso: 01/02/2024

        INFORMACIÓN PERSONAL:
        Teléfono: 555-7890
        Email: ana@empresa.com
        Dirección: Calle Principal #200
        Contacto emergencia: Juan (Padre) 555-4567

        CONTRATO:
        Tipo: Indefinido
        Salario: $15,000/mes
        Horario: L-V 9am-6pm

        → Todo en un solo lugar, organizado y seguro.
      `
    },
    relationships: [
      {
        relatedTerm: 'departamento',
        explanation: 'Cada empleado pertenece a un departamento'
      },
      {
        relatedTerm: 'contrato',
        explanation: 'Define condiciones laborales y salariales'
      }
    ],
    bestPractices: [
      'Mantén información actualizada constantemente',
      'Siempre ten contacto de emergencia',
      'Guarda documentos digitalizados (contratos, ID)',
      'Respeta la privacidad de datos sensibles'
    ],
    commonMistakes: [
      'Información desactualizada',
      'No definir jefe directo y departamento',
      'Olvidar fechas importantes (contrato, renovación)',
      'No respaldar documentos digitales'
    ],
    relatedModules: ['Empleados', 'Nómina', 'Asistencias', 'Ausencias']
  },

  'cliente': {
    term: 'Cliente',
    shortDef: 'Persona o empresa que te compra',
    fullDef: 'Es cualquier persona o empresa a la que le vendes productos o servicios. Su ficha contiene toda su información: contacto, historial de compras, saldos pendientes, etc.',
    category: 'Ventas',
    icon: '🤝',
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'Las facturas se emiten a clientes específicos'
      },
      {
        relatedTerm: 'oportunidad',
        explanation: 'Un lead convertido se asocia a un cliente'
      }
    ],
    bestPractices: [
      'Registra múltiples contactos por cliente (diferentes áreas)',
      'Mantén actualizada información de facturación',
      'Configura términos de pago estándar',
      'Revisa periódicamente clientes con saldos vencidos'
    ]
  },

  'proveedor': {
    term: 'Proveedor',
    shortDef: 'Quien te vende productos o servicios',
    fullDef: 'Es la empresa o persona que te suministra los productos o servicios que necesitas para tu negocio. Puede ser el mismo contacto que es cliente (ambas cosas).',
    category: 'Compras',
    icon: '🏭',
    relationships: [
      {
        relatedTerm: 'orden-compra',
        explanation: 'Las órdenes de compra se hacen a proveedores'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Puedes configurar qué proveedor vende cada producto'
      }
    ],
    bestPractices: [
      'Registra tiempos de entrega de cada proveedor',
      'Guarda historial de precios para negociar',
      'Ten proveedores alternativos para productos críticos',
      'Evalúa proveedores periódicamente (precio, calidad, tiempo)'
    ]
  },

  'cotizacion': {
    term: 'Cotización / Presupuesto',
    shortDef: 'Propuesta de venta antes de facturar',
    fullDef: 'Es el documento que envías al cliente con los precios y condiciones ANTES de que acepte comprar. Si acepta, se convierte en orden de venta y luego en factura.',
    category: 'Ventas',
    icon: '📄',
    example: {
      title: 'Flujo de cotización',
      content: `
        1. COTIZACIÓN (borrador)
        → Creas propuesta con productos y precios
        → Estado: Presupuesto

        2. ENVÍAS AL CLIENTE
        → Por email directamente desde Odoo
        → Estado: Presupuesto Enviado

        3. CLIENTE ACEPTA
        → Confirmas la cotización
        → Estado: Orden de Venta
        → Ahora puedes entregar y facturar

        Si el cliente NO acepta:
        → Modificas o cancelas la cotización
        → Aprendes para mejorar
      `
    },
    relationships: [
      {
        relatedTerm: 'oportunidad',
        explanation: 'Puedes crear cotizaciones desde oportunidades del CRM'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Al confirmar cotización y entregar, se genera factura'
      }
    ],
    bestPractices: [
      'Usa plantillas para cotizaciones repetitivas',
      'Incluye términos y condiciones claros',
      'Establece fecha de validez de la cotización',
      'Haz seguimiento a cotizaciones sin respuesta'
    ]
  },

  'departamento': {
    term: 'Departamento',
    shortDef: 'Área o división de tu empresa',
    fullDef: 'Agrupa empleados que trabajan en funciones similares. Ayuda a organizar tu empresa y asignar responsabilidades claras.',
    category: 'RRHH',
    icon: '🏢',
    example: {
      title: 'Organigrama típico',
      content: `
        DIRECCIÓN GENERAL
        ├── VENTAS (10 personas)
        │   ├── Equipo Corporativo
        │   └── Equipo Retail
        ├── OPERACIONES (15 personas)
        │   ├── Producción
        │   └── Almacén
        ├── FINANZAS (5 personas)
        │   ├── Contabilidad
        │   └── Tesorería
        └── RRHH (3 personas)

        Cada departamento tiene un responsable y objetivos claros.
      `
    },
    relationships: [
      {
        relatedTerm: 'empleado',
        explanation: 'Los empleados se asignan a departamentos'
      }
    ],
    bestPractices: [
      'Define un responsable para cada departamento',
      'Alinea departamentos con estructura organizacional real',
      'Usa subdepartamentos si necesitas más detalle',
      'Revisa y actualiza cuando cambia la organización'
    ]
  },

  'contrato': {
    term: 'Contrato de Trabajo',
    shortDef: 'Acuerdo laboral formal con empleado',
    fullDef: 'Documento legal que define la relación laboral: tipo de trabajo, salario, horario, prestaciones y duración.',
    category: 'RRHH',
    icon: '📜',
    relationships: [
      {
        relatedTerm: 'empleado',
        explanation: 'Cada empleado debe tener al menos un contrato activo'
      }
    ],
    bestPractices: [
      'Guarda copia digital del contrato firmado',
      'Programa alertas para vencimientos',
      'Mantén historial de contratos anteriores',
      'Actualiza cuando hay cambios de salario o condiciones'
    ]
  }
}

// Función para buscar términos en texto
export const findGlossaryTerms = (text) => {
  const foundTerms = []
  Object.entries(glossaryTerms).forEach(([key, term]) => {
    const termName = term.term.toLowerCase()
    if (text.toLowerCase().includes(termName)) {
      foundTerms.push(key)
    }
  })
  return foundTerms
}

// Función para obtener término por clave
export const getGlossaryTerm = (termKey) => {
  return glossaryTerms[termKey] || null
}

// Función para buscar por categoría
export const getTermsByCategory = (category) => {
  return Object.entries(glossaryTerms)
    .filter(([key, term]) => term.category === category)
    .map(([key, term]) => ({ key, ...term }))
}

// Función para buscar términos
export const searchGlossary = (searchText) => {
  const search = searchText.toLowerCase()
  return Object.entries(glossaryTerms)
    .filter(([key, term]) =>
      term.term.toLowerCase().includes(search) ||
      term.shortDef.toLowerCase().includes(search) ||
      term.fullDef.toLowerCase().includes(search)
    )
    .map(([key, term]) => ({ key, ...term }))
}

// Obtener todas las categorías
export const getGlossaryCategories = () => {
  const categories = new Set()
  Object.values(glossaryTerms).forEach(term => {
    categories.add(term.category)
  })
  return Array.from(categories)
}
