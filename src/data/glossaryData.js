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
  },

  // =====================================
  // FINANZAS - TÉRMINOS ADICIONALES
  // =====================================

  'impuesto': {
    term: 'Impuesto',
    shortDef: 'Porcentaje que cobras o pagas al gobierno',
    fullDef: 'Es el dinero extra que agregas al precio de venta (como el IVA) o que te descuentan de tus ingresos. El gobierno lo usa para escuelas, hospitales y servicios públicos. Odoo lo calcula automáticamente en cada factura.',
    category: 'Contabilidad',
    icon: '🏛️',
    example: {
      title: 'Ejemplo de IVA en una venta',
      content: `
        Vendes una silla:
        Precio base:        $1,000
        + IVA (16%):        $160
        ━━━━━━━━━━━━━━━━━━
        Cliente paga:       $1,160

        Los $160 NO son tuyos:
        → Los guardas temporalmente
        → Cada mes o bimestre, los pagas al gobierno
        → Odoo lleva la cuenta de cuánto debes
      `
    },
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'Cada factura muestra el desglose de impuestos automáticamente'
      },
      {
        relatedTerm: 'posicion-fiscal',
        explanation: 'La posición fiscal determina qué impuestos aplican a cada cliente'
      }
    ],
    bestPractices: [
      'Configura los impuestos de tu país al inicio (Odoo tiene plantillas)',
      'Nunca modifiques un impuesto que ya usaste - crea uno nuevo',
      'Separa IVA de otros impuestos (IEPS, ISR retenido, etc.)',
      'Revisa que las tasas sean las vigentes según tu gobierno'
    ],
    commonMistakes: [
      'Confundir impuestos incluidos con impuestos añadidos',
      'Olvidar que algunos productos tienen tasas diferentes (0%, exentos)',
      'No actualizar tasas cuando el gobierno las cambia'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Compras', 'Punto de Venta']
  },

  'posicion-fiscal': {
    term: 'Posición Fiscal',
    shortDef: 'Reglas de impuestos según el tipo de cliente',
    fullDef: 'Es como una "etiqueta" que le pones a un cliente o proveedor para que Odoo sepa qué impuestos cobrarle. Por ejemplo: clientes extranjeros no pagan IVA, clientes exentos tienen tasa 0%, etc.',
    category: 'Contabilidad',
    icon: '🏷️',
    example: {
      title: 'Posiciones fiscales comunes',
      content: `
        1. CLIENTE NACIONAL
           → Cobra IVA normal (16%)
           → Factura con todos los impuestos

        2. CLIENTE EXTRANJERO (exportación)
           → NO cobra IVA (0%)
           → Factura sin impuestos locales

        3. CLIENTE EXENTO (ej: asociación civil)
           → No cobra IVA
           → Requiere documentación especial

        Odoo cambia los impuestos automáticamente
        según la posición fiscal del cliente.
      `
    },
    relationships: [
      {
        relatedTerm: 'cliente',
        explanation: 'Cada cliente puede tener una posición fiscal asignada'
      },
      {
        relatedTerm: 'impuesto',
        explanation: 'La posición fiscal mapea un impuesto a otro (o lo elimina)'
      }
    ],
    bestPractices: [
      'Configura las posiciones fiscales más comunes al inicio',
      'Asigna la posición correcta al crear cada cliente',
      'Revisa facturas de exportación para confirmar que no cobran IVA',
      'Documenta cuándo aplica cada posición'
    ],
    commonMistakes: [
      'Olvidar asignar posición fiscal a clientes extranjeros',
      'Crear clientes sin verificar su situación fiscal',
      'No actualizar cuando cambian las leyes fiscales'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Compras']
  },

  'moneda': {
    term: 'Moneda',
    shortDef: 'El tipo de dinero que usas (pesos, dólares, euros)',
    fullDef: 'Odoo puede manejar múltiples monedas: tu moneda principal (con la que llevas tu contabilidad) y monedas extranjeras para clientes o proveedores de otros países. El sistema convierte automáticamente usando tipos de cambio.',
    category: 'Contabilidad',
    icon: '💵',
    example: {
      title: 'Venta en dólares (moneda principal: pesos)',
      content: `
        Vendes a cliente en USA:
        Factura:        $100 USD

        Tipo de cambio del día: 1 USD = 17.50 MXN

        En tu contabilidad registra:
        Cuenta por cobrar: $1,750 MXN
        Ventas:            $1,750 MXN

        Cuando el cliente paga (y el tipo cambió a 18.00):
        Recibes:           $1,800 MXN
        Ganancia cambiaria: $50 MXN (diferencia)

        Odoo hace todo esto automáticamente ✓
      `
    },
    relationships: [
      {
        relatedTerm: 'tipo-de-cambio',
        explanation: 'El tipo de cambio determina la conversión entre monedas'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Cada factura puede estar en diferente moneda'
      }
    ],
    bestPractices: [
      'Define tu moneda principal al configurar la empresa (no se puede cambiar después)',
      'Activa solo las monedas que realmente usas',
      'Actualiza tipos de cambio diariamente si tienes muchas operaciones',
      'Configura actualización automática de tipos de cambio si está disponible'
    ],
    commonMistakes: [
      'Intentar cambiar la moneda principal después de tener movimientos',
      'No registrar pagos en la moneda correcta de la factura',
      'Olvidar actualizar tipos de cambio por mucho tiempo'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Compras', 'Tesorería']
  },

  'tipo-de-cambio': {
    term: 'Tipo de Cambio',
    shortDef: 'Cuánto vale una moneda en otra',
    fullDef: 'Es el precio de una moneda expresado en otra. Por ejemplo: 1 dólar = 17.50 pesos. Odoo usa estos valores para convertir facturas y pagos en moneda extranjera a tu moneda principal.',
    category: 'Contabilidad',
    icon: '📈',
    example: {
      title: 'Cómo funciona el tipo de cambio',
      content: `
        Hoy:     1 USD = 17.50 MXN
        Mañana:  1 USD = 17.80 MXN (el dólar subió)

        Si tienes una factura de $100 USD:
        Hoy vale:   $1,750 MXN
        Mañana vale: $1,780 MXN

        Esta diferencia se llama "diferencia cambiaria"
        y puede ser ganancia o pérdida.

        Odoo registra estos cambios automáticamente
        cuando cierras períodos contables.
      `
    },
    relationships: [
      {
        relatedTerm: 'moneda',
        explanation: 'El tipo de cambio conecta la moneda extranjera con tu moneda principal'
      },
      {
        relatedTerm: 'pago',
        explanation: 'Al recibir/hacer pagos en otra moneda, usa el tipo de cambio del día'
      }
    ],
    bestPractices: [
      'Actualiza tipos de cambio al menos una vez por semana',
      'Usa fuentes oficiales (banco central de tu país)',
      'Configura actualización automática si Odoo lo permite',
      'Guarda histórico de tipos de cambio para auditorías'
    ],
    commonMistakes: [
      'Dejar tipos de cambio desactualizados por meses',
      'Usar tipos de cambio inventados en lugar de oficiales',
      'No revisar diferencias cambiarias al cierre del período'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Compras']
  },

  'pago': {
    term: 'Pago',
    shortDef: 'Registrar cuando recibes o das dinero',
    fullDef: 'Es la acción de registrar que tu cliente te pagó su factura, o que tú pagaste a tu proveedor. Puede ser en efectivo, transferencia, cheque o tarjeta. El pago se "conecta" con la factura para marcarla como pagada.',
    category: 'Contabilidad',
    icon: '💳',
    example: {
      title: 'Registro de pago de cliente',
      content: `
        1. Cliente tiene factura #001 por $1,000
           Estado: "Por cobrar"

        2. Cliente hace transferencia bancaria
           Ves $1,000 en tu cuenta de banco

        3. En Odoo registras el pago:
           → Seleccionas la factura #001
           → Indicas método: Transferencia
           → Monto: $1,000
           → Fecha: hoy

        4. Resultado:
           → Factura #001 cambia a "Pagada" ✓
           → Tu saldo bancario aumenta en Odoo
           → Contador feliz porque todo cuadra
      `
    },
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'Los pagos se aplican a facturas pendientes'
      },
      {
        relatedTerm: 'conciliacion-bancaria',
        explanation: 'Los pagos deben coincidir con movimientos del banco'
      }
    ],
    bestPractices: [
      'Registra pagos el mismo día que ocurren',
      'Siempre vincula el pago con su factura correspondiente',
      'Usa la referencia del cliente (número de transferencia) en la descripción',
      'Revisa que el método de pago sea el correcto (efectivo, banco, etc.)'
    ],
    commonMistakes: [
      'Registrar pagos sin vincularlos a facturas',
      'Confundir anticipos con pagos de facturas',
      'No registrar pagos parciales correctamente',
      'Olvidar registrar comisiones bancarias'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Compras', 'Tesorería']
  },

  'conciliacion-bancaria': {
    term: 'Conciliación Bancaria',
    shortDef: 'Comparar tu banco real con lo que Odoo tiene registrado',
    fullDef: 'Es revisar que los movimientos de tu cuenta de banco (depósitos, retiros, transferencias) coincidan exactamente con lo que tienes registrado en Odoo. Si no cuadran, hay un error que debes encontrar y corregir.',
    category: 'Contabilidad',
    icon: '🔍',
    example: {
      title: 'Proceso de conciliación',
      content: `
        TU EXTRACTO BANCARIO dice:
        Saldo inicial:     $10,000
        + Depósito cliente: $1,500
        - Pago proveedor:   $3,000
        - Comisión banco:   $50
        Saldo final:       $8,450

        ODOO dice:
        Saldo inicial:     $10,000
        + Pago recibido:   $1,500
        - Pago realizado:  $3,000
        Saldo:             $8,500

        ¡No cuadra! Falta registrar la comisión de $50.
        Al conciliar, encuentras y corriges este error.
      `
    },
    relationships: [
      {
        relatedTerm: 'pago',
        explanation: 'Cada pago debe aparecer en la conciliación bancaria'
      },
      {
        relatedTerm: 'sincronizacion-bancaria',
        explanation: 'La sincronización automática facilita la conciliación'
      }
    ],
    bestPractices: [
      'Concilia al menos una vez por semana (idealmente diario)',
      'Nunca dejes pasar más de un mes sin conciliar',
      'Revisa comisiones y cargos que el banco hace automáticamente',
      'Mantén un registro de diferencias encontradas y cómo las resolviste'
    ],
    commonMistakes: [
      'Ignorar pequeñas diferencias (acumulan errores grandes)',
      'No registrar comisiones bancarias, intereses o cargos',
      'Conciliar sin verificar cada movimiento individualmente',
      'Dejar pagos "huérfanos" sin vincular a facturas'
    ],
    relatedModules: ['Contabilidad', 'Tesorería']
  },

  'gasto': {
    term: 'Gasto',
    shortDef: 'Dinero que pagas para operar tu negocio',
    fullDef: 'Son los costos necesarios para que tu empresa funcione: renta, luz, internet, sueldos, papelería, etc. En Odoo, puedes registrar gastos de empleados (viáticos, compras menores) o gastos generales de la empresa.',
    category: 'Contabilidad',
    icon: '🧾',
    example: {
      title: 'Tipos de gastos comunes',
      content: `
        GASTOS FIJOS (siempre los pagas):
        - Renta de oficina: $5,000/mes
        - Internet: $800/mes
        - Luz: $1,200/mes
        - Sueldos: $50,000/mes

        GASTOS VARIABLES (cambian):
        - Gasolina: depende de cuánto manejes
        - Papelería: según necesites
        - Comidas de trabajo: ocasional

        GASTOS DE EMPLEADOS:
        - Juan fue a ver cliente y pagó $500 de taxi
        - María compró toners: $1,200
        → Ellos piden reembolso, tú lo registras
      `
    },
    relationships: [
      {
        relatedTerm: 'reembolso',
        explanation: 'Los empleados solicitan reembolso de los gastos que pagaron'
      },
      {
        relatedTerm: 'informe-de-gastos',
        explanation: 'Los gastos se agrupan en informes para aprobar y pagar'
      }
    ],
    bestPractices: [
      'Categoriza gastos correctamente (marketing, operación, etc.)',
      'Guarda SIEMPRE el comprobante/factura del gasto',
      'Registra gastos al momento, no acumules para "después"',
      'Define política clara de qué gastos son reembolsables'
    ],
    commonMistakes: [
      'Mezclar gastos personales con gastos de empresa',
      'No guardar comprobantes (problemas con impuestos)',
      'Registrar gastos en cuenta incorrecta',
      'Olvidar gastos pequeños que suman mucho al año'
    ],
    relatedModules: ['Gastos', 'Contabilidad', 'RRHH']
  },

  'reembolso': {
    term: 'Reembolso',
    shortDef: 'Devolver dinero al empleado que pagó algo de su bolsa',
    fullDef: 'Cuando un empleado usa su propio dinero para pagar algo del trabajo (taxi, comida con cliente, materiales), la empresa le devuelve ese dinero. En Odoo, el empleado registra el gasto, lo apruebas, y luego se lo pagas.',
    category: 'RRHH',
    icon: '💰',
    example: {
      title: 'Proceso de reembolso paso a paso',
      content: `
        1. EMPLEADO GASTA:
           María paga taxi para ver cliente: $250
           Guarda el ticket/recibo

        2. REGISTRA EN ODOO:
           - Sube foto del ticket
           - Categoría: Transporte
           - Monto: $250
           - Descripción: "Visita cliente ABC"

        3. APROBACIÓN:
           Su jefe revisa y aprueba ✓

        4. PAGO:
           Finanzas incluye los $250 en siguiente nómina
           o hace transferencia directa

        5. RESULTADO:
           María recupera su dinero
           Empresa tiene gasto registrado correctamente
      `
    },
    relationships: [
      {
        relatedTerm: 'gasto',
        explanation: 'El reembolso es para devolver gastos que el empleado pagó'
      },
      {
        relatedTerm: 'informe-de-gastos',
        explanation: 'Los reembolsos se agrupan en informes para facilitar aprobación'
      }
    ],
    bestPractices: [
      'Define límites claros: qué se reembolsa y qué no',
      'Exige comprobantes para TODO (sin excepción)',
      'Establece proceso de aprobación rápido (no más de 1 semana)',
      'Paga reembolsos puntualmente para mantener confianza'
    ],
    commonMistakes: [
      'Aprobar gastos sin revisar comprobantes',
      'Tardar semanas en reembolsar (desmotiva empleados)',
      'No tener política clara de gastos permitidos',
      'Mezclar reembolsos con adelantos de nómina'
    ],
    relatedModules: ['Gastos', 'RRHH', 'Nómina']
  },

  'nota-de-credito': {
    term: 'Nota de Crédito',
    shortDef: 'Factura al revés para cancelar o corregir una venta',
    fullDef: 'Cuando necesitas cancelar una factura (devolución, error en precio, descuento posterior), creas una nota de crédito. Es como una "factura negativa" que anula total o parcialmente la original.',
    category: 'Contabilidad',
    icon: '↩️',
    example: {
      title: 'Cuándo usar nota de crédito',
      content: `
        CASO 1 - DEVOLUCIÓN COMPLETA:
        Factura #100: Vendiste 10 sillas por $10,000
        Cliente devuelve TODO
        → Nota de crédito por $10,000
        → Factura queda en $0

        CASO 2 - DEVOLUCIÓN PARCIAL:
        Factura #100: 10 sillas por $10,000
        Cliente devuelve 2 sillas
        → Nota de crédito por $2,000
        → Factura queda en $8,000

        CASO 3 - DESCUENTO POSTERIOR:
        Factura #100: $10,000
        Le das 10% descuento después
        → Nota de crédito por $1,000
        → Cliente solo debe $9,000

        La nota de crédito se vincula a la factura original.
      `
    },
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'La nota de crédito siempre se relaciona con una factura existente'
      },
      {
        relatedTerm: 'pago',
        explanation: 'La nota de crédito puede aplicarse como "pago" a otras facturas'
      }
    ],
    bestPractices: [
      'SIEMPRE vincula la nota de crédito a su factura original',
      'Documenta claramente el motivo (devolución, error, descuento)',
      'Verifica que cumpla requisitos fiscales de tu país',
      'No uses notas de crédito para "esconder" ventas'
    ],
    commonMistakes: [
      'Crear nota de crédito sin vincular a factura original',
      'No incluir los impuestos correspondientes',
      'Usar nota de crédito cuando debería ser factura nueva',
      'Olvidar notificar al cliente sobre la nota de crédito'
    ],
    relatedModules: ['Contabilidad', 'Ventas', 'Facturación']
  },

  'balance-general': {
    term: 'Balance General',
    shortDef: 'Foto completa de tu situación financiera en un momento',
    fullDef: 'Es un reporte que muestra TODO lo que tienes (activos), TODO lo que debes (pasivos) y lo que realmente es tuyo (patrimonio). Como una fotografía de la salud financiera de tu empresa en una fecha específica.',
    category: 'Contabilidad',
    icon: '📊',
    example: {
      title: 'Balance General simplificado',
      content: `
        BALANCE GENERAL al 31 de diciembre

        LO QUE TIENES (ACTIVOS):
        Banco:                  $50,000
        Clientes que te deben:  $30,000
        Inventario:             $40,000
        Equipo de cómputo:      $20,000
        TOTAL ACTIVOS:          $140,000

        LO QUE DEBES (PASIVOS):
        A proveedores:          $25,000
        Préstamo bancario:      $35,000
        TOTAL PASIVOS:          $60,000

        LO QUE ES TUYO (PATRIMONIO):
        Capital:                $50,000
        Utilidades:             $30,000
        TOTAL PATRIMONIO:       $80,000

        ✓ ACTIVOS = PASIVOS + PATRIMONIO
        $140,000 = $60,000 + $80,000
      `
    },
    relationships: [
      {
        relatedTerm: 'cuenta-contable',
        explanation: 'El balance agrupa todas las cuentas por tipo (activo, pasivo, patrimonio)'
      },
      {
        relatedTerm: 'estado-de-resultados',
        explanation: 'Las utilidades del estado de resultados pasan al patrimonio del balance'
      }
    ],
    bestPractices: [
      'Genera balance al menos cada mes',
      'Compara con meses anteriores para ver tendencias',
      'Verifica que siempre cuadre (activos = pasivos + patrimonio)',
      'Úsalo para tomar decisiones de inversión o préstamos'
    ],
    commonMistakes: [
      'Ignorar el balance y solo ver ventas',
      'No entender qué significa cada sección',
      'Generar balance sin haber cerrado el período contable',
      'No comparar con períodos anteriores'
    ],
    relatedModules: ['Contabilidad', 'Reportes Financieros']
  },

  'proveedor-de-pagos': {
    term: 'Proveedor de Pagos',
    shortDef: 'Servicio que permite a tus clientes pagarte en línea',
    fullDef: 'Son empresas como PayPal, Stripe, MercadoPago o el banco que te dan la tecnología para aceptar pagos con tarjeta de crédito o transferencias en tu tienda en línea. Cobran una comisión pequeña por cada pago.',
    category: 'Contabilidad',
    icon: '💳',
    example: {
      title: 'Cómo funcionan los proveedores de pago',
      content: `
        TU TIENDA EN LÍNEA:
        Cliente quiere comprar zapatos: $1,000

        1. Cliente da clic en "Pagar"
        2. Ve opciones: PayPal, Tarjeta, Transferencia
        3. Elige PayPal y pone su tarjeta
        4. PayPal verifica que la tarjeta tiene fondos ✓
        5. PayPal te avisa: "Pago exitoso"
        6. Tú envías los zapatos

        COSTOS (ejemplo):
        Venta:                     $1,000
        - Comisión PayPal (3%):    $30
        Recibes:                   $970

        Es como tener una terminal bancaria, pero digital.
      `
    },
    relationships: [
      {
        relatedTerm: 'pago',
        explanation: 'El proveedor de pagos facilita recibir pagos de clientes'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Los pagos recibidos se vinculan a facturas pendientes'
      }
    ],
    bestPractices: [
      'Compara comisiones entre proveedores antes de elegir',
      'Configura notificaciones para saber cuando te pagan',
      'Ten al menos 2 opciones de pago para tus clientes',
      'Verifica que el proveedor opere en tu país'
    ],
    commonMistakes: [
      'No considerar las comisiones en tu precio de venta',
      'Elegir proveedor sin verificar compatibilidad con Odoo',
      'No registrar las comisiones como gasto',
      'Olvidar verificar transferencias antes de enviar producto'
    ],
    relatedModules: ['Website', 'Ventas', 'Contabilidad', 'Punto de Venta']
  },

  'sincronizacion-bancaria': {
    term: 'Sincronización Bancaria',
    shortDef: 'Conectar tu cuenta de banco con Odoo automáticamente',
    fullDef: 'En lugar de revisar manualmente tu estado de cuenta y registrar cada movimiento en Odoo, la sincronización bancaria importa automáticamente todos los depósitos y retiros. Así ahorras tiempo y evitas errores.',
    category: 'Contabilidad',
    icon: '🔄',
    example: {
      title: 'Sin sincronización vs con sincronización',
      content: `
        SIN SINCRONIZACIÓN (manual):
        1. Abres página del banco
        2. Descargas movimientos del mes
        3. Revisas uno por uno (50 movimientos)
        4. Registras cada uno en Odoo a mano
        5. Tardas 2-3 horas
        6. Posibles errores de dedo

        CON SINCRONIZACIÓN (automático):
        1. Odoo se conecta a tu banco
        2. Importa los 50 movimientos automáticamente
        3. Los relaciona con facturas existentes
        4. Tardas 15 minutos revisando
        5. Sin errores de captura

        ¡Es como tener un asistente que hace la tarea por ti!
      `
    },
    relationships: [
      {
        relatedTerm: 'conciliacion-bancaria',
        explanation: 'La sincronización facilita el proceso de conciliación'
      },
      {
        relatedTerm: 'pago',
        explanation: 'Los pagos importados se vinculan automáticamente con facturas'
      }
    ],
    bestPractices: [
      'Verifica que tu banco sea compatible con Odoo',
      'Sincroniza al menos una vez al día',
      'Revisa movimientos importados antes de confirmarlos',
      'Configura reglas automáticas para movimientos frecuentes'
    ],
    commonMistakes: [
      'Confiar ciegamente sin revisar los movimientos',
      'No actualizar credenciales cuando expiran',
      'Sincronizar sin tener respaldo de datos',
      'Ignorar movimientos que el sistema no pudo clasificar'
    ],
    relatedModules: ['Contabilidad', 'Tesorería']
  },

  'informe-de-gastos': {
    term: 'Informe de Gastos',
    shortDef: 'Documento que agrupa varios gastos para aprobarlos juntos',
    fullDef: 'Es como una "lista de compras" que el empleado entrega con todos los tickets de lo que pagó con su dinero durante un viaje o proyecto. El jefe revisa todo junto, aprueba, y se le reembolsa en un solo pago.',
    category: 'RRHH',
    icon: '📑',
    example: {
      title: 'Informe de gastos de viaje',
      content: `
        INFORME DE GASTOS
        Empleado: Roberto García
        Proyecto: Visita cliente Monterrey
        Fecha: 10-12 marzo 2024

        GASTOS INCLUIDOS:
        1. Vuelo ida y vuelta:        $3,500
        2. Hotel 2 noches:            $2,400
        3. Comidas (3 días):          $900
        4. Taxis locales:             $450
        5. Estacionamiento aeropuerto: $350
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        TOTAL A REEMBOLSAR:           $7,600

        Adjuntos: 5 tickets/facturas

        FLUJO:
        Roberto → Envía informe
        Su jefe → Revisa y aprueba
        Finanzas → Paga $7,600 a Roberto
      `
    },
    relationships: [
      {
        relatedTerm: 'gasto',
        explanation: 'El informe agrupa múltiples gastos individuales'
      },
      {
        relatedTerm: 'reembolso',
        explanation: 'Una vez aprobado el informe, se procesa el reembolso'
      }
    ],
    bestPractices: [
      'Agrupa gastos por proyecto o viaje (no mezcles)',
      'Adjunta TODOS los comprobantes escaneados',
      'Envía el informe máximo 1 semana después del gasto',
      'Describe brevemente cada gasto para facilitar aprobación'
    ],
    commonMistakes: [
      'Enviar informes sin comprobantes completos',
      'Mezclar gastos de diferentes proyectos en un informe',
      'Esperar semanas para enviar (dificulta recordar detalles)',
      'No categorizar correctamente cada gasto'
    ],
    relatedModules: ['Gastos', 'RRHH', 'Contabilidad']
  },

  'anticipo': {
    term: 'Anticipo',
    shortDef: 'Dinero que el cliente te paga antes de recibir el producto',
    fullDef: 'Es un pago adelantado, parcial o total, que el cliente hace antes de que le entregues el producto o servicio. Sirve para asegurar el pedido y ayuda a tu flujo de efectivo. NO es lo mismo que la factura final.',
    category: 'Contabilidad',
    icon: '💵',
    example: {
      title: 'Anticipo para muebles a medida',
      content: `
        Cliente pide escritorio a medida: $10,000

        PASO 1 - ANTICIPO (50%):
        Cliente paga: $5,000
        → Tú registras el anticipo
        → Aún NO le facturas el escritorio
        → Empiezas a fabricar

        PASO 2 - ENTREGA Y FACTURA FINAL:
        Entregas escritorio
        Facturas: $10,000
        Aplicas anticipo: -$5,000
        Cliente debe: $5,000

        PASO 3 - PAGO FINAL:
        Cliente paga los $5,000 restantes
        → Factura pagada completamente ✓

        El anticipo es DIFERENTE a facturar.
        Primero recibes dinero, luego facturas.
      `
    },
    relationships: [
      {
        relatedTerm: 'pago',
        explanation: 'El anticipo es un tipo especial de pago recibido antes de facturar'
      },
      {
        relatedTerm: 'factura',
        explanation: 'El anticipo se aplica como "crédito" a la factura final'
      }
    ],
    bestPractices: [
      'Define claramente política de anticipos (50%, 30%, etc.)',
      'Siempre emite comprobante del anticipo recibido',
      'Registra anticipos en cuenta especial (no como ingreso aún)',
      'Vincula el anticipo con la factura final cuando la emitas'
    ],
    commonMistakes: [
      'Registrar anticipo como venta (antes de entregar producto)',
      'No vincular anticipo con pedido del cliente',
      'Olvidar aplicar anticipo a la factura final',
      'No tener política clara de devolución de anticipos'
    ],
    relatedModules: ['Ventas', 'Contabilidad', 'Proyectos']
  },

  'factura-proforma': {
    term: 'Factura Proforma',
    shortDef: 'Propuesta de factura que NO tiene valor fiscal',
    fullDef: 'Es un "borrador" de factura que envías al cliente para mostrarle cuánto costará todo antes de que compre. NO tiene valor legal ni fiscal, es solo informativa. Si el cliente acepta, entonces creas la factura real.',
    category: 'Ventas',
    icon: '📋',
    example: {
      title: 'Diferencia: Proforma vs Factura Real',
      content: `
        FACTURA PROFORMA:
        ✗ NO tiene folio fiscal
        ✗ NO genera obligación de pago
        ✗ NO se reporta al gobierno
        ✗ NO afecta tu contabilidad
        ✓ Es solo para informar al cliente

        FACTURA REAL:
        ✓ Tiene folio fiscal legal
        ✓ Cliente debe pagarte
        ✓ Se reporta en impuestos
        ✓ Afecta tu contabilidad
        ✓ Es documento oficial

        USO COMÚN:
        1. Cliente pide cotización detallada
        2. Le envías factura proforma
        3. Si acepta, creas factura real
        4. Si no acepta, no pasa nada

        Muy usado en comercio internacional para aduanas.
      `
    },
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'La proforma se convierte en factura real cuando el cliente acepta'
      },
      {
        relatedTerm: 'cotizacion',
        explanation: 'La proforma es más formal que una cotización, pero sin valor fiscal'
      }
    ],
    bestPractices: [
      'Marca claramente "PROFORMA - SIN VALOR FISCAL"',
      'Incluye fecha de validez (cuánto tiempo es válida)',
      'Usa numeración diferente a facturas reales',
      'Úsala para clientes nuevos o pedidos grandes'
    ],
    commonMistakes: [
      'Enviar proforma pensando que ya facturaste',
      'No marcar claramente que es proforma',
      'Usar misma numeración que facturas reales',
      'Confundir al cliente sobre si ya pagó o no'
    ],
    relatedModules: ['Ventas', 'Comercio Exterior']
  },

  'estado-de-resultados': {
    term: 'Estado de Resultados',
    shortDef: 'Reporte que muestra si ganaste o perdiste dinero',
    fullDef: 'Es como la "libreta de calificaciones" de tu negocio. Te dice cuánto vendiste, cuánto gastaste, y si al final te quedó ganancia o pérdida. Se hace para un período específico (mes, trimestre, año).',
    category: 'Contabilidad',
    icon: '📈',
    example: {
      title: 'Estado de Resultados simplificado',
      content: `
        ESTADO DE RESULTADOS - Enero 2024

        VENTAS (lo que facturaste):
        Productos vendidos:         $100,000
        Servicios prestados:        $20,000
        TOTAL INGRESOS:             $120,000

        COSTOS (lo que te costó vender):
        Costo de productos:         $60,000
        UTILIDAD BRUTA:             $60,000

        GASTOS (para operar):
        Sueldos:                    $25,000
        Renta:                      $8,000
        Luz, agua, internet:        $3,000
        Marketing:                  $5,000
        TOTAL GASTOS:               $41,000

        RESULTADO:
        $60,000 - $41,000 = $19,000

        ✓ GANASTE $19,000 este mes 🎉
      `
    },
    relationships: [
      {
        relatedTerm: 'balance-general',
        explanation: 'La utilidad del estado de resultados aumenta el patrimonio en el balance'
      },
      {
        relatedTerm: 'cuenta-contable',
        explanation: 'Resume las cuentas de ingresos y gastos del período'
      }
    ],
    bestPractices: [
      'Genera al menos mensualmente para monitorear',
      'Compara con meses anteriores para ver tendencias',
      'Analiza qué gastos puedes reducir',
      'Úsalo para proyectar ventas necesarias para ser rentable'
    ],
    commonMistakes: [
      'Confundir ingresos con dinero en banco (no es lo mismo)',
      'No separar costos de productos de gastos operativos',
      'Generar sin cerrar el período contable',
      'No considerar gastos no recurrentes'
    ],
    relatedModules: ['Contabilidad', 'Reportes Financieros']
  },

  'cierre-contable': {
    term: 'Cierre Contable',
    shortDef: 'Proceso de cerrar un mes o año y empezar uno nuevo',
    fullDef: 'Es como "cerrar caja" pero para todo un período (mes o año). Verificas que todo esté registrado correctamente, generas reportes finales, y "cierras la puerta" para que nadie modifique ese período. Así mantienes tu contabilidad ordenada.',
    category: 'Contabilidad',
    icon: '🔒',
    example: {
      title: 'Pasos del cierre mensual',
      content: `
        CIERRE DE ENERO 2024:

        1. VERIFICAR TODO REGISTRADO:
           ✓ Todas las facturas emitidas
           ✓ Todas las facturas recibidas
           ✓ Todos los pagos
           ✓ Nómina del mes
           ✓ Gastos menores

        2. CONCILIAR BANCOS:
           ✓ Odoo = Extracto bancario

        3. REVISAR REPORTES:
           ✓ Balance General cuadra
           ✓ Estado de Resultados correcto

        4. CERRAR PERÍODO:
           → En Odoo: Bloquear enero
           → Ya nadie puede modificar enero
           → Si hay error, se corrige en febrero

        5. RESULTADO:
           Enero queda "sellado" y confiable.
           Empiezas febrero limpio.
      `
    },
    relationships: [
      {
        relatedTerm: 'balance-general',
        explanation: 'Se genera el balance final antes del cierre'
      },
      {
        relatedTerm: 'estado-de-resultados',
        explanation: 'Se genera el estado de resultados del período antes de cerrar'
      }
    ],
    bestPractices: [
      'Cierra mes anterior antes del día 15 del mes siguiente',
      'Haz checklist de todo lo que debes verificar',
      'No cierres si hay diferencias sin explicar',
      'Guarda respaldo de datos antes del cierre'
    ],
    commonMistakes: [
      'Cerrar sin revisar conciliaciones bancarias',
      'Olvidar facturas pendientes de registrar',
      'No verificar que reportes cuadren',
      'Cerrar muy tarde (acumulas errores)'
    ],
    relatedModules: ['Contabilidad']
  },

  'presupuesto': {
    term: 'Presupuesto',
    shortDef: 'Plan de cuánto dinero vas a gastar o ganar',
    fullDef: 'Es como hacer tu "lista de propósitos financieros" para el año. Decides cuánto planeas vender, cuánto vas a gastar en cada área, y qué utilidad esperas. Después comparas plan vs realidad para ver si vas bien.',
    category: 'Contabilidad',
    icon: '🎯',
    example: {
      title: 'Presupuesto anual simplificado',
      content: `
        PRESUPUESTO 2024

        META DE VENTAS:
        Enero:    $100,000
        Febrero:  $110,000
        Marzo:    $120,000
        ...
        Total año: $1,500,000

        LÍMITES DE GASTOS:
        Marketing: máximo $15,000/mes
        Sueldos:   $50,000/mes (fijo)
        Renta:     $8,000/mes (fijo)
        Varios:    $5,000/mes

        SEGUIMIENTO MENSUAL:
        Enero real: vendiste $95,000
        vs presupuesto: $100,000
        Diferencia: -$5,000 (alerta ⚠️)

        El presupuesto te ayuda a:
        → Saber si vas en camino a tus metas
        → No gastar de más
        → Planificar recursos
      `
    },
    relationships: [
      {
        relatedTerm: 'estado-de-resultados',
        explanation: 'Comparas presupuesto con resultados reales'
      },
      {
        relatedTerm: 'centro-de-costos',
        explanation: 'Puedes presupuestar por cada centro de costos'
      }
    ],
    bestPractices: [
      'Basa tu presupuesto en datos reales del año anterior',
      'Revisa mensualmente: plan vs real',
      'Ajusta el presupuesto si cambian las condiciones',
      'Involucra a los responsables de cada área'
    ],
    commonMistakes: [
      'Hacer presupuesto demasiado optimista',
      'Crear presupuesto y nunca revisarlo',
      'No considerar gastos inesperados',
      'No involucrar a quienes ejecutarán el presupuesto'
    ],
    relatedModules: ['Contabilidad', 'Reportes Financieros']
  },

  'centro-de-costos': {
    term: 'Centro de Costos',
    shortDef: 'Área de tu empresa donde se acumulan gastos',
    fullDef: 'Es una forma de organizar tus gastos por departamento, proyecto o ubicación. Así sabes exactamente cuánto cuesta operar cada área de tu negocio y puedes identificar dónde optimizar.',
    category: 'Contabilidad',
    icon: '🏷️',
    example: {
      title: 'Centros de costos típicos',
      content: `
        EMPRESA DE RETAIL - Gastos de enero:

        CENTRO: TIENDA NORTE
        - Renta: $12,000
        - Luz: $3,000
        - Sueldos: $25,000
        - Total: $40,000

        CENTRO: TIENDA SUR
        - Renta: $10,000
        - Luz: $2,500
        - Sueldos: $20,000
        - Total: $32,500

        CENTRO: OFICINA CENTRAL
        - Renta: $8,000
        - Sistemas: $5,000
        - Administración: $15,000
        - Total: $28,000

        INSIGHT:
        Tienda Norte cuesta más pero vende más.
        Tienda Sur es más eficiente por metro cuadrado.
        Oficina Central apoya a ambas tiendas.

        Sin centros de costos, solo verías: "Gasté $100,500"
        Con centros de costos ves: "La tienda Norte me cuesta $40,000"
      `
    },
    relationships: [
      {
        relatedTerm: 'gasto',
        explanation: 'Cada gasto se asigna a un centro de costos específico'
      },
      {
        relatedTerm: 'presupuesto',
        explanation: 'Puedes hacer presupuesto por cada centro de costos'
      }
    ],
    bestPractices: [
      'Define centros que tengan sentido para tu negocio',
      'Asigna un responsable por cada centro',
      'Analiza mensualmente rentabilidad por centro',
      'No crees demasiados (dificulta análisis)'
    ],
    commonMistakes: [
      'Crear centros de costos sin propósito claro',
      'Olvidar asignar centro de costos al registrar gastos',
      'No revisar reportes por centro de costos',
      'Mezclar gastos de diferentes centros'
    ],
    relatedModules: ['Contabilidad', 'Analítica']
  },

  'activo-fijo': {
    term: 'Activo Fijo',
    shortDef: 'Cosas valiosas que compras y usas por años',
    fullDef: 'Son las inversiones grandes que haces para operar tu negocio a largo plazo: computadoras, muebles, vehículos, maquinaria. No se "gastan" inmediatamente, sino que se deprecian (pierden valor) poco a poco cada año.',
    category: 'Contabilidad',
    icon: '🏭',
    example: {
      title: 'Ejemplo de depreciación',
      content: `
        Compras computadora para oficina: $20,000
        Vida útil estimada: 4 años

        DEPRECIACIÓN (cómo pierde valor):
        Año 1: $20,000 - $5,000 = $15,000
        Año 2: $15,000 - $5,000 = $10,000
        Año 3: $10,000 - $5,000 = $5,000
        Año 4: $5,000 - $5,000 = $0

        CADA AÑO:
        → Registras $5,000 como gasto de depreciación
        → El valor en libros disminuye
        → Aunque no gastes dinero real

        ¿POR QUÉ IMPORTA?
        - Refleja el desgaste real del equipo
        - Es deducible de impuestos
        - Te prepara para reemplazar el equipo
        - Muestra el valor real de tu empresa
      `
    },
    relationships: [
      {
        relatedTerm: 'balance-general',
        explanation: 'Los activos fijos aparecen en el balance como parte de tus activos'
      },
      {
        relatedTerm: 'gasto',
        explanation: 'La depreciación mensual se registra como gasto'
      }
    ],
    bestPractices: [
      'Registra cada activo fijo con su fecha y costo de compra',
      'Define vida útil realista (no exageres)',
      'Configura depreciación automática en Odoo',
      'Haz inventario físico anual de activos'
    ],
    commonMistakes: [
      'Registrar compra grande como gasto directo (debe ser activo)',
      'No calcular depreciación mensualmente',
      'Olvidar dar de baja activos que ya no usas',
      'No tener control de dónde están tus activos'
    ],
    relatedModules: ['Contabilidad', 'Activos Fijos']
  },

  // =====================================
  // VENTAS Y CRM - TÉRMINOS ADICIONALES
  // =====================================

  'pipeline': {
    term: 'Pipeline de Ventas',
    shortDef: 'El camino que sigue un cliente potencial hasta que compra',
    fullDef: 'Es como un embudo o tubo donde entran muchos interesados por arriba, y conforme avanzan en el proceso de venta, algunos compran y otros se pierden. Te ayuda a ver en qué etapa está cada negociación.',
    category: 'CRM',
    icon: '🔺',
    example: {
      title: 'Pipeline típico de una empresa',
      content: `
        VISUALIZACIÓN DEL PIPELINE:

        NUEVO (10 oportunidades)
        → Acaban de contactarte

        CONTACTADO (7 oportunidades)
        → Ya hablaste con ellos

        PROPUESTA ENVIADA (4 oportunidades)
        → Les mandaste cotización

        NEGOCIACIÓN (2 oportunidades)
        → Están discutiendo precio/condiciones

        GANADO (1 oportunidad)
        → ¡Cerraste la venta! 🎉

        PERDIDO (4 oportunidades)
        → No compraron (razones varias)

        MÉTRICAS IMPORTANTES:
        - Tasa de conversión: 1/10 = 10%
        - Valor del pipeline: suma de todas las oportunidades
        - Tiempo promedio de cierre: cuánto tarda en decidir
      `
    },
    relationships: [
      {
        relatedTerm: 'oportunidad',
        explanation: 'Cada oportunidad se mueve a través del pipeline'
      },
      {
        relatedTerm: 'etapa',
        explanation: 'El pipeline está dividido en etapas'
      }
    ],
    bestPractices: [
      'Revisa tu pipeline diariamente',
      'Mantén suficientes oportunidades en cada etapa',
      'Analiza dónde se estancan las oportunidades',
      'Limpia oportunidades viejas que ya no avanzan'
    ],
    commonMistakes: [
      'No mover oportunidades cuando cambian de etapa',
      'Tener pipeline inflado con oportunidades falsas',
      'No dar seguimiento a oportunidades estancadas',
      'Ignorar métricas de conversión'
    ],
    relatedModules: ['CRM', 'Ventas']
  },

  'etapa': {
    term: 'Etapa',
    shortDef: 'Paso o fase en un proceso (ventas, proyectos, etc.)',
    fullDef: 'Es cada una de las fases que atraviesa algo en Odoo. Por ejemplo, en ventas: Nuevo → Contactado → Propuesta → Negociación → Ganado. En proyectos: Por hacer → En progreso → Terminado.',
    category: 'CRM',
    icon: '📍',
    example: {
      title: 'Etapas en diferentes contextos',
      content: `
        PIPELINE DE VENTAS:
        1. Nuevo (acaba de llegar)
        2. Calificado (verificamos interés real)
        3. Propuesta (enviamos cotización)
        4. Negociación (discutiendo términos)
        5. Ganado / Perdido (resultado final)

        TABLERO KANBAN DE TAREAS:
        1. Pendiente (por hacer)
        2. En Progreso (trabajando)
        3. En Revisión (verificando)
        4. Completado (terminado)

        PROCESO DE RECLUTAMIENTO:
        1. Nuevo candidato
        2. Entrevista inicial
        3. Prueba técnica
        4. Entrevista final
        5. Contratado / Rechazado

        Las etapas te ayudan a ver el estado de todo de un vistazo.
      `
    },
    relationships: [
      {
        relatedTerm: 'pipeline',
        explanation: 'Las etapas forman el pipeline de ventas'
      },
      {
        relatedTerm: 'oportunidad',
        explanation: 'Cada oportunidad está en una etapa específica'
      }
    ],
    bestPractices: [
      'Define etapas claras que representen tu proceso real',
      'No tengas demasiadas etapas (5-7 es ideal)',
      'Asegúrate que cada etapa tenga criterios claros de salida',
      'Revisa periódicamente si las etapas siguen teniendo sentido'
    ],
    commonMistakes: [
      'Crear etapas que no reflejan el proceso real',
      'Tener demasiadas etapas que confunden',
      'No capacitar al equipo sobre cuándo mover de etapa',
      'Dejar cosas en etapas incorrectas'
    ],
    relatedModules: ['CRM', 'Proyectos', 'Helpdesk', 'Reclutamiento']
  },

  'actividad': {
    term: 'Actividad',
    shortDef: 'Tarea que debes hacer en Odoo (llamar, enviar email, reunión)',
    fullDef: 'Es un recordatorio o tarea que programas en Odoo. Puede ser: llamar a cliente, enviar cotización, reunión, tarea pendiente. Odoo te avisa cuando está próxima o vencida.',
    category: 'CRM',
    icon: '📅',
    example: {
      title: 'Cómo funcionan las actividades',
      content: `
        OPORTUNIDAD: "Venta sistema a Panadería ABC"

        ACTIVIDADES PROGRAMADAS:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ☑️ Hoy 10:00 - Llamar para seguimiento
        📧 Mañana - Enviar cotización por email
        🤝 Viernes 15:00 - Reunión de cierre

        TIPOS DE ACTIVIDADES:
        📞 Llamada telefónica
        📧 Enviar email
        🤝 Reunión presencial/virtual
        📋 Tarea/Pendiente
        📤 Subir documento

        BENEFICIOS:
        → Nunca olvidas dar seguimiento
        → Tu jefe ve que estás activo
        → Historial de todo lo que hiciste
        → Planificas tu día eficientemente
      `
    },
    relationships: [
      {
        relatedTerm: 'oportunidad',
        explanation: 'Las actividades se programan sobre oportunidades y otros documentos'
      },
      {
        relatedTerm: 'lead',
        explanation: 'Puedes programar actividades de seguimiento para leads'
      }
    ],
    bestPractices: [
      'Siempre programa la siguiente actividad al terminar una',
      'Sé específico: no solo "llamar", sino "llamar para X motivo"',
      'Respeta las fechas programadas',
      'Revisa tus actividades pendientes cada mañana'
    ],
    commonMistakes: [
      'Dejar oportunidades sin actividad programada',
      'Acumular actividades vencidas sin completarlas',
      'Programar actividades vagas sin propósito claro',
      'No marcar actividades como completadas'
    ],
    relatedModules: ['CRM', 'Ventas', 'Proyectos', 'RRHH']
  },

  'puntuacion-lead': {
    term: 'Puntuación de Lead',
    shortDef: 'Número que indica qué tan probable es que un lead compre',
    fullDef: 'Es un sistema de puntos que califica qué tan "caliente" está un lead. Más puntos = más probabilidad de comprar. Se basa en criterios como: tamaño de empresa, presupuesto, urgencia, comportamiento en tu sitio web.',
    category: 'CRM',
    icon: '⭐',
    example: {
      title: 'Sistema de puntuación de leads',
      content: `
        CRITERIOS DE PUNTUACIÓN:

        PERFIL DEL LEAD:
        + 20 pts: Empresa mediana/grande
        + 15 pts: Tiene presupuesto definido
        + 10 pts: Decisor de compra
        + 5 pts: Sector industrial relevante

        COMPORTAMIENTO:
        + 10 pts: Visitó página de precios
        + 15 pts: Descargó demo/prueba
        + 20 pts: Solicitó cotización
        + 5 pts: Abrió emails

        EJEMPLO:
        Lead "Panadería ABC":
        - Empresa mediana: +20
        - Tiene presupuesto: +15
        - Visitó precios: +10
        - Pidió cotización: +20
        TOTAL: 65 puntos ⭐⭐⭐ (Lead CALIENTE)

        Lead "Juan curioso":
        - Freelancer: +5
        - Sin presupuesto: +0
        - Solo exploró: +5
        TOTAL: 10 puntos ⭐ (Lead FRÍO)

        Enfócate en leads con más puntos.
      `
    },
    relationships: [
      {
        relatedTerm: 'lead',
        explanation: 'La puntuación se asigna a cada lead'
      },
      {
        relatedTerm: 'oportunidad',
        explanation: 'Leads con alta puntuación se convierten en oportunidades'
      }
    ],
    bestPractices: [
      'Define criterios claros y objetivos para puntuar',
      'Revisa y ajusta el sistema según resultados reales',
      'Automatiza la puntuación cuando sea posible',
      'Prioriza seguimiento según puntuación'
    ],
    commonMistakes: [
      'Crear sistema muy complejo que nadie entiende',
      'No ajustar puntuación según resultados reales',
      'Ignorar el puntaje y no usarlo para priorizar',
      'Puntuar subjetivamente en lugar de con criterios'
    ],
    relatedModules: ['CRM', 'Marketing']
  },

  'lista-de-precios': {
    term: 'Lista de Precios',
    shortDef: 'Catálogo con los precios de tus productos',
    fullDef: 'Es donde defines cuánto cobras por cada producto. Puedes tener varias listas: una para clientes normales, otra para mayoristas, otra para VIP. Así el mismo producto puede tener diferentes precios según quién compre.',
    category: 'Ventas',
    icon: '💲',
    example: {
      title: 'Múltiples listas de precios',
      content: `
        PRODUCTO: Camiseta Polo

        LISTA PÚBLICA (clientes normales):
        → Precio: $500

        LISTA MAYORISTA (compra 50+ piezas):
        → Precio: $400 (20% menos)

        LISTA VIP (clientes frecuentes):
        → Precio: $450 (10% menos)

        LISTA EMPLEADOS:
        → Precio: $350 (30% menos)

        CÓMO FUNCIONA:
        1. Asignas lista de precios al cliente
        2. Al crear cotización, usa esa lista
        3. Precios se calculan automáticamente
        4. No necesitas recordar descuentos

        CASOS DE USO:
        - Precios por volumen
        - Precios por región/país
        - Precios por temporada
        - Precios B2B vs B2C
      `
    },
    relationships: [
      {
        relatedTerm: 'cliente',
        explanation: 'Cada cliente puede tener asignada una lista de precios específica'
      },
      {
        relatedTerm: 'descuento',
        explanation: 'Las listas de precios pueden incluir descuentos automáticos'
      }
    ],
    bestPractices: [
      'Ten una lista pública como base',
      'Nombra las listas claramente (Mayorista, VIP, etc.)',
      'Revisa precios periódicamente',
      'Documenta cuándo aplicar cada lista'
    ],
    commonMistakes: [
      'Crear demasiadas listas que confunden',
      'No asignar lista correcta al cliente',
      'Olvidar actualizar precios en todas las listas',
      'No tener lista pública por defecto'
    ],
    relatedModules: ['Ventas', 'Website', 'Punto de Venta']
  },

  'descuento': {
    term: 'Descuento',
    shortDef: 'Reducción en el precio de venta',
    fullDef: 'Es bajar el precio de un producto para incentivar la compra. Puede ser porcentaje (10% menos) o monto fijo ($100 menos). Odoo permite descuentos manuales o automáticos según reglas.',
    category: 'Ventas',
    icon: '🏷️',
    example: {
      title: 'Tipos de descuentos',
      content: `
        DESCUENTO MANUAL (tú decides):
        Producto: $1,000
        Descuento: 15%
        Precio final: $850

        DESCUENTO POR CANTIDAD:
        1-9 unidades: precio normal
        10-49 unidades: 10% descuento
        50+ unidades: 20% descuento

        DESCUENTO POR PROMOCIÓN:
        "Buen Fin": 25% en toda la tienda
        Fecha inicio: 15 nov
        Fecha fin: 18 nov

        DESCUENTO POR PRONTO PAGO:
        "Si pagas en 10 días: 2% descuento"
        Ayuda a mejorar tu flujo de efectivo

        IMPORTANTE:
        → Siempre calcula si el descuento es rentable
        → No vendas por debajo del costo
        → Documenta por qué diste el descuento
      `
    },
    relationships: [
      {
        relatedTerm: 'lista-de-precios',
        explanation: 'Los descuentos pueden estar incluidos en listas de precios'
      },
      {
        relatedTerm: 'regla-de-precio',
        explanation: 'Las reglas de precio automatizan descuentos'
      }
    ],
    bestPractices: [
      'Define política clara de descuentos máximos',
      'Requiere aprobación para descuentos grandes',
      'Registra el motivo de cada descuento',
      'Analiza impacto de descuentos en rentabilidad'
    ],
    commonMistakes: [
      'Dar descuentos sin calcular si sigues ganando',
      'No documentar por qué se dio el descuento',
      'Descuentos excesivos que devalúan tu producto',
      'No tener límites de autorización'
    ],
    relatedModules: ['Ventas', 'Punto de Venta', 'Website']
  },

  'programa-de-fidelidad': {
    term: 'Programa de Fidelidad',
    shortDef: 'Recompensas para clientes que compran seguido',
    fullDef: 'Es un sistema donde premias a clientes frecuentes con puntos, descuentos o regalos. Cada compra suma puntos, y esos puntos se canjean por beneficios. Mantiene a los clientes regresando.',
    category: 'Ventas',
    icon: '🎁',
    example: {
      title: 'Programa de puntos típico',
      content: `
        ACUMULACIÓN:
        Por cada $100 de compra = 10 puntos

        CANJE:
        100 puntos = $50 de descuento
        200 puntos = $120 de descuento
        500 puntos = Producto gratis

        EJEMPLO CLIENTE:
        María compra regularmente:
        - Enero: $500 → 50 puntos
        - Febrero: $800 → 80 puntos
        - Marzo: $400 → 40 puntos
        Total: 170 puntos

        María canjea 100 puntos:
        → Obtiene $50 de descuento
        → Le quedan 70 puntos

        BENEFICIOS PARA TI:
        → Clientes regresan (retención)
        → Compran más para juntar puntos
        → Datos de comportamiento de compra
        → Diferenciarte de competencia
      `
    },
    relationships: [
      {
        relatedTerm: 'cliente',
        explanation: 'El programa registra puntos por cada cliente'
      },
      {
        relatedTerm: 'descuento',
        explanation: 'Los puntos se canjean por descuentos o productos'
      }
    ],
    bestPractices: [
      'Hazlo simple: puntos fáciles de entender',
      'Recompensas alcanzables para motivar',
      'Comunica claramente cómo funciona',
      'Ten varios niveles de canje'
    ],
    commonMistakes: [
      'Reglas muy complicadas que confunden',
      'Puntos que expiran muy rápido',
      'Recompensas muy difíciles de alcanzar',
      'No comunicar el programa a los clientes'
    ],
    relatedModules: ['Ventas', 'Punto de Venta', 'Website']
  },

  'comision': {
    term: 'Comisión de Ventas',
    shortDef: 'Pago extra al vendedor por cada venta que cierra',
    fullDef: 'Es el dinero adicional que gana el vendedor cuando logra una venta. Generalmente es un porcentaje del monto vendido. Motiva al equipo de ventas a cerrar más negocios.',
    category: 'Ventas',
    icon: '💸',
    example: {
      title: 'Cálculo de comisiones',
      content: `
        ESQUEMA DE COMISIÓN:
        Vendedor: Ana García
        Comisión: 5% sobre ventas

        VENTAS DEL MES:
        Venta 1: $10,000 → Comisión: $500
        Venta 2: $25,000 → Comisión: $1,250
        Venta 3: $8,000  → Comisión: $400
        ━━━━━━━━━━━━━━━━━━━━━━━━━━
        Total ventas: $43,000
        Total comisión: $2,150

        ESQUEMAS COMUNES:
        - Porcentaje fijo (5% de toda venta)
        - Escalonado (5% hasta $50k, 7% arriba)
        - Por producto (más % en productos prioritarios)
        - Por margen (% sobre la ganancia, no venta)

        Odoo calcula automáticamente según reglas que configures.
      `
    },
    relationships: [
      {
        relatedTerm: 'equipo-de-ventas',
        explanation: 'Las comisiones se asignan a miembros del equipo de ventas'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Las comisiones se calculan sobre facturas pagadas'
      }
    ],
    bestPractices: [
      'Define reglas claras y transparentes',
      'Paga comisiones puntualmente',
      'Considera pagar al cobrar, no al facturar',
      'Revisa si el esquema motiva al equipo'
    ],
    commonMistakes: [
      'Reglas confusas que generan conflictos',
      'No documentar cómo se calculan',
      'Pagar comisión de ventas no cobradas',
      'Cambiar reglas sin avisar al equipo'
    ],
    relatedModules: ['Ventas', 'RRHH', 'Nómina']
  },

  'equipo-de-ventas': {
    term: 'Equipo de Ventas',
    shortDef: 'Grupo de vendedores que trabajan juntos',
    fullDef: 'Es un grupo de personas dedicadas a vender. Pueden estar organizados por producto, territorio, tipo de cliente, etc. Cada equipo tiene metas y métricas propias.',
    category: 'Ventas',
    icon: '👥',
    example: {
      title: 'Organización de equipos de ventas',
      content: `
        EMPRESA DE SOFTWARE:

        EQUIPO CORPORATIVO:
        - Líder: Carlos (20% comisión)
        - Ana, Roberto, María
        - Meta: $500,000/mes
        - Clientes: Empresas grandes

        EQUIPO PYMES:
        - Líder: Laura (15% comisión)
        - José, Diana, Pedro
        - Meta: $200,000/mes
        - Clientes: Pequeños negocios

        EQUIPO RETAIL:
        - Líder: Fernanda
        - Vendedores de tienda
        - Meta: $100,000/mes
        - Clientes: Consumidor final

        BENEFICIOS:
        → Especialización por tipo de cliente
        → Metas claras por equipo
        → Competencia sana entre equipos
        → Mejor seguimiento de rendimiento
      `
    },
    relationships: [
      {
        relatedTerm: 'oportunidad',
        explanation: 'Las oportunidades se asignan a equipos de ventas'
      },
      {
        relatedTerm: 'comision',
        explanation: 'Cada equipo puede tener diferentes esquemas de comisión'
      }
    ],
    bestPractices: [
      'Define un líder claro para cada equipo',
      'Establece metas realistas pero retadoras',
      'Revisa métricas de equipo semanalmente',
      'Fomenta colaboración, no solo competencia'
    ],
    commonMistakes: [
      'Equipos sin líder definido',
      'Metas imposibles que desmotivan',
      'No dar seguimiento al rendimiento',
      'Competencia tóxica entre equipos'
    ],
    relatedModules: ['CRM', 'Ventas']
  },

  'territorio': {
    term: 'Territorio de Ventas',
    shortDef: 'Zona geográfica o segmento asignado a un vendedor',
    fullDef: 'Es dividir el mercado en "territorios" para que cada vendedor se enfoque en su zona. Puede ser geográfico (Zona Norte, Zona Sur) o por tipo de cliente (sector salud, sector retail).',
    category: 'Ventas',
    icon: '🗺️',
    example: {
      title: 'División por territorios',
      content: `
        POR GEOGRAFÍA:
        ━━━━━━━━━━━━━━━
        Norte (Monterrey, Saltillo):
        → Vendedor: Roberto
        → 150 clientes potenciales

        Centro (CDMX, Puebla):
        → Vendedor: María
        → 300 clientes potenciales

        Sur (Oaxaca, Chiapas):
        → Vendedor: Ana
        → 100 clientes potenciales

        POR SECTOR:
        ━━━━━━━━━━━━━━━
        Salud (hospitales, clínicas):
        → Vendedor especializado: Juan

        Retail (tiendas, supermercados):
        → Vendedor especializado: Laura

        VENTAJAS:
        → Evita que vendedores compitan por mismos clientes
        → Mejor conocimiento del territorio/sector
        → Responsabilidad clara
        → Más fácil medir rendimiento
      `
    },
    relationships: [
      {
        relatedTerm: 'equipo-de-ventas',
        explanation: 'Los territorios se asignan a equipos o vendedores específicos'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'Cada cliente pertenece a un territorio específico'
      }
    ],
    bestPractices: [
      'Divide territorios de forma equitativa (potencial similar)',
      'Considera distancias y costos de visitas',
      'Revisa y ajusta territorios anualmente',
      'Documenta qué clientes pertenecen a cada territorio'
    ],
    commonMistakes: [
      'Territorios desbalanceados (uno tiene todo el potencial)',
      'No respetar asignaciones (pisar territorio ajeno)',
      'No actualizar cuando crece la empresa',
      'Ignorar costos de desplazamiento'
    ],
    relatedModules: ['CRM', 'Ventas']
  },

  'plantilla-de-cotizacion': {
    term: 'Plantilla de Cotización',
    shortDef: 'Formato predefinido para crear cotizaciones rápidamente',
    fullDef: 'Es un modelo que ya tiene productos, términos y condiciones preestablecidos. En lugar de crear cotizaciones desde cero, eliges la plantilla y la personalizas. Ahorra tiempo y mantiene consistencia.',
    category: 'Ventas',
    icon: '📄',
    example: {
      title: 'Plantillas típicas',
      content: `
        PLANTILLA: "Paquete Básico Software"
        Productos incluidos:
        - Licencia básica: $5,000/año
        - Soporte estándar: $1,200/año
        - Capacitación 4 horas: $2,000
        Total: $8,200

        PLANTILLA: "Paquete Empresarial"
        Productos incluidos:
        - Licencia empresarial: $15,000/año
        - Soporte prioritario: $3,600/año
        - Capacitación 16 horas: $6,000
        - Implementación: $10,000
        Total: $34,600

        CÓMO USARLA:
        1. Cliente pide cotización
        2. Seleccionas plantilla apropiada
        3. Ajustas cantidades si necesario
        4. Envías en 2 minutos

        VENTAJAS:
        → Ahorro de tiempo enorme
        → Mismos términos siempre
        → Menos errores
        → Imagen profesional consistente
      `
    },
    relationships: [
      {
        relatedTerm: 'cotizacion',
        explanation: 'Las plantillas agilizan la creación de cotizaciones'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Las plantillas incluyen productos predefinidos'
      }
    ],
    bestPractices: [
      'Crea plantillas para tus productos/servicios más vendidos',
      'Incluye términos y condiciones estándar',
      'Revisa y actualiza plantillas cuando cambien precios',
      'Nombra plantillas claramente'
    ],
    commonMistakes: [
      'Tener demasiadas plantillas que confunden',
      'No actualizar precios en las plantillas',
      'Enviar cotización sin personalizar',
      'Olvidar revisar términos y condiciones'
    ],
    relatedModules: ['Ventas']
  },

  'terminos-de-pago': {
    term: 'Términos de Pago',
    shortDef: 'Reglas de cuándo y cómo debe pagar el cliente',
    fullDef: 'Define las condiciones de pago: ¿paga de inmediato?, ¿tiene 30 días?, ¿paga en 3 cuotas? Cada cliente puede tener diferentes términos según la confianza y relación comercial.',
    category: 'Ventas',
    icon: '⏰',
    example: {
      title: 'Términos de pago comunes',
      content: `
        PAGO INMEDIATO:
        → Debe pagar al recibir factura
        → Usado: Clientes nuevos, ventas pequeñas

        NETO 15 DÍAS:
        → Paga dentro de 15 días
        → Usado: Clientes frecuentes

        NETO 30 DÍAS:
        → Paga dentro de 30 días
        → Usado: Clientes confiables

        NETO 60 DÍAS:
        → Paga dentro de 60 días
        → Usado: Clientes corporativos grandes

        30% ANTICIPO + 70% ENTREGA:
        → 30% al confirmar pedido
        → 70% al entregar producto
        → Usado: Proyectos, fabricación

        50% ANTICIPO + 25% + 25%:
        → Tres pagos parciales
        → Usado: Proyectos largos

        Cada cliente tiene términos asignados en su ficha.
      `
    },
    relationships: [
      {
        relatedTerm: 'factura',
        explanation: 'Los términos determinan la fecha de vencimiento de la factura'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'Cada cliente tiene términos de pago asignados'
      }
    ],
    bestPractices: [
      'Asigna términos según historial del cliente',
      'Ten términos más estrictos para clientes nuevos',
      'Revisa clientes morosos y ajusta sus términos',
      'Ofrece descuento por pronto pago si ayuda tu flujo'
    ],
    commonMistakes: [
      'Dar mucho plazo a clientes nuevos sin historial',
      'No cobrar intereses por pago tardío',
      'No revisar términos de clientes morosos',
      'Olvidar actualizar términos en la ficha del cliente'
    ],
    relatedModules: ['Ventas', 'Contabilidad']
  },

  'regla-de-precio': {
    term: 'Regla de Precio',
    shortDef: 'Condición que aplica descuento automáticamente',
    fullDef: 'Son las instrucciones que le das a Odoo para cambiar precios automáticamente. Ejemplo: "Si compra más de 10 unidades, da 15% de descuento". No tienes que calcular manualmente, Odoo lo hace solo.',
    category: 'Ventas',
    icon: '⚙️',
    example: {
      title: 'Reglas de precio en acción',
      content: `
        REGLA POR CANTIDAD:
        Si cantidad >= 10: descuento 10%
        Si cantidad >= 50: descuento 20%
        Si cantidad >= 100: descuento 30%

        Cotización:
        - 5 camisetas: precio normal ($500 c/u)
        - 15 camisetas: -10% automático ($450 c/u)
        - 60 camisetas: -20% automático ($400 c/u)

        REGLA POR FECHA:
        Del 1-15 diciembre: -25% (promoción navidad)
        Resto del año: precio normal

        REGLA POR CLIENTE:
        Si cliente es "Mayorista": -15% siempre
        Si cliente es "VIP": -10% siempre

        CÓMO FUNCIONA:
        1. Configuras la regla una vez
        2. Al crear cotización, se aplica automática
        3. No olvidas dar descuentos prometidos
        4. Consistencia en todos los vendedores
      `
    },
    relationships: [
      {
        relatedTerm: 'lista-de-precios',
        explanation: 'Las reglas se configuran dentro de listas de precios'
      },
      {
        relatedTerm: 'descuento',
        explanation: 'Las reglas aplican descuentos de forma automática'
      }
    ],
    bestPractices: [
      'Documenta todas las reglas activas',
      'Prueba las reglas antes de activarlas',
      'Revisa que no se contrapongan reglas',
      'Ten cuidado con reglas que acumulan descuentos'
    ],
    commonMistakes: [
      'Reglas que se sobreponen y confunden',
      'No probar antes de activar',
      'Olvidar desactivar reglas temporales',
      'Crear descuentos acumulativos no deseados'
    ],
    relatedModules: ['Ventas', 'Website']
  },

  'orden-de-venta': {
    term: 'Orden de Venta',
    shortDef: 'Pedido confirmado por el cliente',
    fullDef: 'Es cuando la cotización se convierte en un compromiso real. El cliente aceptó comprar. A partir de aquí puedes entregar el producto y facturar. Es el documento oficial de venta.',
    category: 'Ventas',
    icon: '✅',
    example: {
      title: 'De cotización a orden de venta',
      content: `
        COTIZACIÓN (propuesta):
        Estado: "Presupuesto"
        → Esperando respuesta del cliente
        → Sin compromiso de entrega
        → Puedes modificar libremente

        ORDEN DE VENTA (confirmada):
        Estado: "Orden de Venta"
        → Cliente aceptó
        → Compromiso de entregar
        → Puedes facturar
        → Reserva inventario

        PROCESO:
        1. Creas cotización
        2. Envías al cliente
        3. Cliente acepta
        4. Confirmas → Se vuelve Orden de Venta
        5. Entregas producto
        6. Facturas

        EFECTOS DE CONFIRMAR:
        → Productos se reservan en inventario
        → Se crea orden de entrega
        → Puedes generar factura
        → Aparece en reportes de ventas
      `
    },
    relationships: [
      {
        relatedTerm: 'cotizacion',
        explanation: 'La cotización se convierte en orden de venta al confirmarse'
      },
      {
        relatedTerm: 'factura',
        explanation: 'La orden de venta permite crear facturas'
      }
    ],
    bestPractices: [
      'Solo confirma cuando el cliente realmente aceptó',
      'Verifica stock antes de confirmar',
      'Revisa términos de pago y entrega',
      'Comunica al almacén sobre la orden'
    ],
    commonMistakes: [
      'Confirmar sin autorización real del cliente',
      'No verificar disponibilidad de productos',
      'Olvidar notificar al equipo de entregas',
      'Modificar orden ya confirmada sin documentar'
    ],
    relatedModules: ['Ventas', 'Inventario', 'Contabilidad']
  },

  'confirmacion-de-pedido': {
    term: 'Confirmación de Pedido',
    shortDef: 'Documento que envías al cliente diciendo que su pedido está registrado',
    fullDef: 'Es la notificación oficial que le das al cliente confirmando que recibiste su orden y la estás procesando. Incluye qué compró, cuánto costó y cuándo lo recibirá.',
    category: 'Ventas',
    icon: '📨',
    example: {
      title: 'Email de confirmación típico',
      content: `
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━
        CONFIRMACIÓN DE PEDIDO
        Orden: SO-2024-0156
        Fecha: 15 marzo 2024
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Estimado cliente,

        ¡Gracias por tu compra! Tu pedido ha sido
        registrado y está siendo procesado.

        PRODUCTOS:
        - 10x Camiseta Polo Azul: $4,500
        - 5x Pantalón Negro: $3,750
        Subtotal: $8,250
        IVA (16%): $1,320
        TOTAL: $9,570

        ENTREGA:
        Dirección: Calle Principal #123
        Fecha estimada: 18-20 marzo 2024
        Método: Envío estándar

        PAGO:
        Estado: Pendiente
        Términos: Neto 15 días
        Vence: 30 marzo 2024

        Dudas: ventas@empresa.com
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Odoo envía esto automáticamente al confirmar.
      `
    },
    relationships: [
      {
        relatedTerm: 'orden-de-venta',
        explanation: 'La confirmación se genera al crear la orden de venta'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'La confirmación se envía al email del cliente'
      }
    ],
    bestPractices: [
      'Personaliza la plantilla con tu logo y datos',
      'Incluye información clara de entrega',
      'Agrega datos de contacto para dudas',
      'Activa envío automático al confirmar orden'
    ],
    commonMistakes: [
      'No enviar confirmación y dejar cliente esperando',
      'Información incorrecta en el correo',
      'No incluir fecha estimada de entrega',
      'Olvidar adjuntar condiciones de compra'
    ],
    relatedModules: ['Ventas', 'Website']
  },

  // =====================================
  // INVENTARIO - TÉRMINOS ADICIONALES
  // =====================================

  'almacen': {
    term: 'Almacén',
    shortDef: 'Lugar físico donde guardas tus productos',
    fullDef: 'Es el edificio o espacio donde almacenas tu mercancía. Puede ser una bodega, tienda, o cualquier lugar. En Odoo puedes tener múltiples almacenes y controlar el inventario de cada uno por separado.',
    category: 'Inventario',
    icon: '🏭',
    example: {
      title: 'Estructura de almacenes',
      content: `
        EMPRESA CON MÚLTIPLES ALMACENES:

        ALMACÉN CENTRAL (Bodega principal):
        - Stock principal: 10,000 productos
        - Recibe de proveedores
        - Abastece a tiendas

        TIENDA NORTE:
        - Stock para venta: 500 productos
        - Vende al público
        - Se reabastece de Central

        TIENDA SUR:
        - Stock para venta: 300 productos
        - Vende al público
        - Se reabastece de Central

        CADA ALMACÉN TIENE:
        → Su propio inventario
        → Sus ubicaciones internas
        → Sus reglas de reabastecimiento
        → Sus movimientos separados

        Así sabes exactamente qué hay en cada lugar.
      `
    },
    relationships: [
      {
        relatedTerm: 'ubicacion',
        explanation: 'Cada almacén tiene ubicaciones internas'
      },
      {
        relatedTerm: 'transferencia',
        explanation: 'Puedes mover productos entre almacenes'
      }
    ],
    bestPractices: [
      'Un almacén por ubicación física real',
      'Nombra claramente cada almacén',
      'Define responsable por almacén',
      'Configura reglas de reabastecimiento entre almacenes'
    ],
    commonMistakes: [
      'Crear almacenes que no existen físicamente',
      'No transferir productos cuando se mueven',
      'Confundir almacén con ubicación',
      'No controlar acceso por almacén'
    ],
    relatedModules: ['Inventario', 'Ventas', 'Compras']
  },

  'ubicacion-fisica': {
    term: 'Ubicación Física',
    shortDef: 'Lugar específico dentro del almacén (estante, pasillo, caja)',
    fullDef: 'Es la dirección exacta donde guardas un producto dentro del almacén. Como el pasillo, estante, nivel y posición. Así cualquier persona puede encontrar el producto rápidamente.',
    category: 'Inventario',
    icon: '📍',
    example: {
      title: 'Sistema de ubicaciones',
      content: `
        CÓDIGO DE UBICACIÓN: A-02-03-B

        A  = Zona A del almacén
        02 = Pasillo 2
        03 = Estante 3
        B  = Nivel B (segundo nivel)

        EJEMPLO REAL:
        Producto: Camiseta Azul Talla M
        Ubicación: A-02-03-B
        Cantidad: 50 unidades

        BENEFICIOS:
        → Empleado nuevo encuentra producto en segundos
        → No pierdes tiempo buscando
        → Control preciso de espacio
        → Optimizas rutas de picking

        TIPOS DE UBICACIONES:
        - Físicas: donde realmente están
        - Virtuales: para control (merma, cuarentena)
        - De tránsito: productos en camino
      `
    },
    relationships: [
      {
        relatedTerm: 'almacen',
        explanation: 'Las ubicaciones están dentro de un almacén'
      },
      {
        relatedTerm: 'picking',
        explanation: 'El picking usa las ubicaciones para encontrar productos'
      }
    ],
    bestPractices: [
      'Crea sistema de codificación lógico',
      'Etiqueta físicamente cada ubicación',
      'Agrupa productos similares cerca',
      'Deja espacio para crecimiento'
    ],
    commonMistakes: [
      'Ubicaciones no coinciden con realidad física',
      'Sistema de código confuso',
      'No actualizar cuando reorganizas',
      'Sobrecargar ubicaciones'
    ],
    relatedModules: ['Inventario']
  },

  'numero-de-serie': {
    term: 'Número de Serie',
    shortDef: 'Código único que identifica cada unidad individual',
    fullDef: 'Es un código que hace único a cada producto individual. Dos camisetas iguales tienen diferente número de serie. Útil para garantías, devoluciones y rastreo. Como el número de chassis de un auto.',
    category: 'Inventario',
    icon: '🔢',
    example: {
      title: 'Trazabilidad con números de serie',
      content: `
        PRODUCTO: Laptop Dell XPS
        CANTIDAD EN STOCK: 5 unidades

        CADA UNA ES ÚNICA:
        SN-001: Comprada 01/01, vendida a María
        SN-002: Comprada 01/01, en stock
        SN-003: Comprada 15/01, vendida a Pedro
        SN-004: Comprada 15/01, en reparación
        SN-005: Comprada 20/01, en stock

        CASOS DE USO:
        → Cliente reclama garantía
          "¿Cuál es su número de serie?"
          SN-003
          "Ah, la compraste el 15/01, tienes garantía"

        → Producto defectuoso
          Proveedor retira SN-004 por falla
          Sabes exactamente cuál es

        → Auditoría
          Puedes rastrear cada unidad desde compra hasta venta
      `
    },
    relationships: [
      {
        relatedTerm: 'producto',
        explanation: 'Los productos almacenables pueden tener números de serie'
      },
      {
        relatedTerm: 'numero-de-lote',
        explanation: 'Serie es individual, lote agrupa varios productos'
      }
    ],
    bestPractices: [
      'Usa series para productos de alto valor',
      'Escanea series en entrada y salida',
      'Mantén registro actualizado',
      'Vincula con garantías y servicios'
    ],
    commonMistakes: [
      'No registrar serie al recibir producto',
      'Vender sin especificar qué serie',
      'Series duplicadas (¡nunca!)',
      'Perder trazabilidad por no escanear'
    ],
    relatedModules: ['Inventario', 'Ventas', 'Servicio']
  },

  'numero-de-lote': {
    term: 'Número de Lote',
    shortDef: 'Código que agrupa productos fabricados o comprados juntos',
    fullDef: 'Es un código que identifica un grupo de productos iguales que se hicieron o compraron al mismo tiempo. Si hay problema con ese lote, sabes cuáles productos están afectados. Muy usado en alimentos y medicinas.',
    category: 'Inventario',
    icon: '📦',
    example: {
      title: 'Control por lotes',
      content: `
        PRODUCTO: Yogurt Natural 1L

        LOTE: LOT-2024-03-15
        - Fecha producción: 15 marzo 2024
        - Fecha vencimiento: 15 abril 2024
        - Cantidad: 500 unidades
        - Proveedor: Lácteos ABC

        LOTE: LOT-2024-03-22
        - Fecha producción: 22 marzo 2024
        - Fecha vencimiento: 22 abril 2024
        - Cantidad: 500 unidades
        - Proveedor: Lácteos ABC

        PROBLEMA DETECTADO:
        ⚠️ Lote LOT-2024-03-15 tiene defecto
        Acción: Retirar las 500 unidades de ese lote
        → Sabes exactamente cuáles son
        → No afectas al otro lote bueno

        REGLA FIFO:
        Vende primero LOT-2024-03-15 (más viejo)
        para evitar vencimientos.
      `
    },
    relationships: [
      {
        relatedTerm: 'fecha-de-vencimiento',
        explanation: 'Cada lote tiene su propia fecha de vencimiento'
      },
      {
        relatedTerm: 'estrategia-de-remocion',
        explanation: 'Las estrategias FIFO/FEFO usan información de lotes'
      }
    ],
    bestPractices: [
      'Usa lotes para perecederos y trazables',
      'Incluye fecha en código de lote',
      'Vende lotes más viejos primero (FIFO)',
      'Registra proveedor por lote'
    ],
    commonMistakes: [
      'Mezclar lotes diferentes sin control',
      'No verificar fechas de vencimiento',
      'Vender lotes nuevos antes que viejos',
      'No poder rastrear origen de problemas'
    ],
    relatedModules: ['Inventario', 'Calidad']
  },

  'fecha-de-vencimiento': {
    term: 'Fecha de Vencimiento',
    shortDef: 'Día hasta el cual el producto es seguro usar o vender',
    fullDef: 'Es la fecha límite de uso de un producto perecedero. Después de esa fecha, el producto puede estar dañado o ser peligroso. Odoo te avisa antes de que venzan para que vendas o descarte a tiempo.',
    category: 'Inventario',
    icon: '📅',
    example: {
      title: 'Control de vencimientos',
      content: `
        DASHBOARD DE VENCIMIENTOS:

        ⚠️ PRÓXIMOS A VENCER (7 días):
        - 50 Yogurt → Vence: 20 marzo
        - 30 Queso  → Vence: 22 marzo
        → ACCIÓN: Promoción o donación

        ✅ STOCK SALUDABLE (30+ días):
        - 200 Yogurt → Vence: 15 abril
        - 100 Queso  → Vence: 20 abril
        → OK, vender normalmente

        ❌ VENCIDOS:
        - 10 Leche → Venció: 10 marzo
        → ACCIÓN: Retirar y desechar

        ALERTAS AUTOMÁTICAS:
        Odoo te avisa X días antes:
        - 30 días: Planificar promoción
        - 7 días: Descuento urgente
        - 1 día: Última oportunidad
        - 0 días: No vender, retirar
      `
    },
    relationships: [
      {
        relatedTerm: 'numero-de-lote',
        explanation: 'Cada lote tiene su propia fecha de vencimiento'
      },
      {
        relatedTerm: 'estrategia-de-remocion',
        explanation: 'FEFO vende primero lo que vence antes'
      }
    ],
    bestPractices: [
      'Configura alertas con suficiente anticipación',
      'Revisa reporte de vencimientos diariamente',
      'Ten plan para productos próximos a vencer',
      'Nunca vendas productos vencidos'
    ],
    commonMistakes: [
      'Ignorar alertas de vencimiento',
      'No configurar fechas al recibir producto',
      'Vender producto vencido (ilegal y peligroso)',
      'No tener política de productos por vencer'
    ],
    relatedModules: ['Inventario', 'Punto de Venta', 'Calidad']
  },

  'reabastecimiento': {
    term: 'Reabastecimiento',
    shortDef: 'Proceso de reabastecer productos cuando se acaban',
    fullDef: 'Es el proceso automático o manual de pedir más productos cuando tu stock baja. Odoo puede generar órdenes de compra o transferencias automáticamente para que nunca te quedes sin inventario.',
    category: 'Inventario',
    icon: '🔄',
    example: {
      title: 'Reabastecimiento automático',
      content: `
        CONFIGURACIÓN:
        Producto: Camiseta Azul
        Stock mínimo: 10 unidades
        Cantidad a pedir: 50 unidades

        SITUACIÓN:
        Stock actual: 12 unidades
        Vendes 5 camisetas
        Stock nuevo: 7 unidades (¡bajo del mínimo!)

        ACCIÓN AUTOMÁTICA:
        Odoo genera orden de compra:
        "Pedir 50 camisetas a proveedor"
        → Nunca te quedas sin stock
        → No dependes de que alguien recuerde

        TIPOS:
        - Por pedido: solo cuando vendes
        - Por mínimo: cuando baja de límite
        - Por pronóstico: basado en historial
      `
    },
    relationships: [
      {
        relatedTerm: 'regla-de-reorden',
        explanation: 'Las reglas definen cuándo y cuánto reabastecer'
      },
      {
        relatedTerm: 'punto-de-reorden',
        explanation: 'El nivel de stock que dispara el reabastecimiento'
      }
    ],
    bestPractices: [
      'Configura para productos de alta rotación',
      'Considera tiempos de entrega del proveedor',
      'Revisa reglas periódicamente',
      'Ajusta según temporadas'
    ],
    commonMistakes: [
      'No considerar tiempo de entrega',
      'Mínimos muy altos (capital atado)',
      'Mínimos muy bajos (te quedas sin stock)',
      'No revisar y ajustar según demanda real'
    ],
    relatedModules: ['Inventario', 'Compras']
  },

  'regla-de-reorden': {
    term: 'Regla de Reorden',
    shortDef: 'Instrucción que dice cuándo pedir más producto',
    fullDef: 'Son las condiciones que defines para que Odoo automáticamente genere pedidos de reabastecimiento. Incluye: producto, cantidad mínima, cantidad a pedir, y de dónde obtenerlo.',
    category: 'Inventario',
    icon: '📏',
    example: {
      title: 'Configuración de regla de reorden',
      content: `
        PRODUCTO: Laptop Dell
        ALMACÉN: Tienda Principal

        REGLA:
        - Cantidad mínima: 5 unidades
        - Cantidad máxima: 20 unidades
        - Cantidad múltiple: 5 (pedir de 5 en 5)
        - Proveedor: Dell México
        - Lead time: 7 días

        FUNCIONAMIENTO:
        Stock: 6 laptops → OK, arriba del mínimo
        Stock: 4 laptops → ¡Genera orden!
        Cantidad a pedir: 20 - 4 = 16 unidades
        (Sube hasta el máximo)

        RESULTADO:
        Odoo crea automáticamente:
        "Orden de Compra #PO-2024-0089"
        Proveedor: Dell México
        Producto: 16 Laptops Dell
        Fecha esperada: +7 días
      `
    },
    relationships: [
      {
        relatedTerm: 'reabastecimiento',
        explanation: 'Las reglas controlan el proceso de reabastecimiento'
      },
      {
        relatedTerm: 'orden-compra',
        explanation: 'La regla genera automáticamente órdenes de compra'
      }
    ],
    bestPractices: [
      'Crea reglas para productos críticos primero',
      'Incluye lead time realista',
      'Revisa reglas mensualmente',
      'Ajusta según ventas históricas'
    ],
    commonMistakes: [
      'Reglas muy agresivas que generan sobrestock',
      'No considerar costos de almacenamiento',
      'Olvidar actualizar cuando cambian proveedores',
      'No tener reglas para productos nuevos'
    ],
    relatedModules: ['Inventario', 'Compras']
  },

  'picking': {
    term: 'Picking',
    shortDef: 'Proceso de recoger productos del almacén para enviarlos',
    fullDef: 'Es cuando el trabajador va al almacén con una lista, busca los productos en sus ubicaciones y los prepara para enviar al cliente. "Pick" significa recoger. Es uno de los procesos más importantes del almacén.',
    category: 'Inventario',
    icon: '🛒',
    example: {
      title: 'Proceso de picking paso a paso',
      content: `
        ORDEN DE VENTA: Cliente pide 3 productos

        LISTA DE PICKING:
        1. Camiseta Azul M
           Ubicación: A-02-03-B
           Cantidad: 2
        2. Pantalón Negro 32
           Ubicación: B-01-05-A
           Cantidad: 1

        PROCESO:
        1. Trabajador recibe lista en tablet
        2. Ruta optimizada: A → B
        3. Va a A-02-03-B, toma 2 camisetas ✓
        4. Va a B-01-05-A, toma 1 pantalón ✓
        5. Lleva al área de empaque
        6. Confirma picking en sistema

        ESTRATEGIAS:
        - Uno por uno: cada orden por separado
        - Por lotes: varias órdenes juntas
        - Por zona: dividido por áreas
        - Por oleadas: grupos programados
      `
    },
    relationships: [
      {
        relatedTerm: 'ubicacion-fisica',
        explanation: 'El picking usa las ubicaciones para encontrar productos'
      },
      {
        relatedTerm: 'entrega',
        explanation: 'Después del picking viene el empaque y entrega'
      }
    ],
    bestPractices: [
      'Optimiza rutas de picking',
      'Usa escáner para confirmar productos',
      'Productos de alta rotación cerca de empaque',
      'Mide tiempo por picking para optimizar'
    ],
    commonMistakes: [
      'Tomar producto equivocado',
      'No actualizar sistema al terminar',
      'Rutas ineficientes que pierden tiempo',
      'No verificar cantidades correctas'
    ],
    relatedModules: ['Inventario']
  },

  'estrategia-de-remocion': {
    term: 'Estrategia de Remoción',
    shortDef: 'Regla que decide qué producto sale primero del almacén',
    fullDef: 'Cuando tienes varios lotes del mismo producto, ¿cuál vendes primero? La estrategia define esto: FIFO (el más viejo primero), LIFO (el más nuevo primero), o FEFO (el que vence antes primero).',
    category: 'Inventario',
    icon: '📤',
    example: {
      title: 'Comparación de estrategias',
      content: `
        PRODUCTO: Leche (3 lotes disponibles)

        Lote A: Llegó 01 marzo, vence 01 abril
        Lote B: Llegó 15 marzo, vence 15 abril
        Lote C: Llegó 20 marzo, vence 10 abril

        ESTRATEGIA FIFO (First In, First Out):
        "Vende lo que llegó primero"
        Orden: A → B → C
        Uso: Productos no perecederos

        ESTRATEGIA LIFO (Last In, First Out):
        "Vende lo que llegó último"
        Orden: C → B → A
        Uso: Materiales donde orden no importa

        ESTRATEGIA FEFO (First Expired, First Out):
        "Vende lo que vence primero"
        Orden: A → C → B (por fecha vencimiento)
        Uso: Alimentos, medicinas, perecederos

        FEFO es la mejor para evitar mermas.
      `
    },
    relationships: [
      {
        relatedTerm: 'numero-de-lote',
        explanation: 'La estrategia decide qué lote usar primero'
      },
      {
        relatedTerm: 'fecha-de-vencimiento',
        explanation: 'FEFO prioriza productos que vencen antes'
      }
    ],
    bestPractices: [
      'FEFO para perecederos siempre',
      'FIFO para la mayoría de productos',
      'Configura por categoría de producto',
      'Capacita al equipo sobre la estrategia'
    ],
    commonMistakes: [
      'No seguir la estrategia configurada',
      'LIFO para perecederos (¡evitar!)',
      'No entrenar al personal',
      'Mezclar estrategias sin control'
    ],
    relatedModules: ['Inventario']
  },

  'valoracion-de-inventario': {
    term: 'Valoración de Inventario',
    shortDef: 'Cuánto dinero vale todo tu stock',
    fullDef: 'Es calcular el valor monetario de todos los productos que tienes en almacén. Hay diferentes métodos: costo estándar, costo promedio, FIFO. Importante para reportes financieros y toma de decisiones.',
    category: 'Inventario',
    icon: '💰',
    example: {
      title: 'Métodos de valoración',
      content: `
        PRODUCTO: Camiseta (50 en stock)

        COSTO ESTÁNDAR:
        Defines: $100 por camiseta
        Valor = 50 × $100 = $5,000
        Simple pero no refleja cambios

        COSTO PROMEDIO:
        Compra 1: 30 × $90 = $2,700
        Compra 2: 20 × $120 = $2,400
        Total: 50 camisetas, $5,100
        Promedio: $102 c/u
        Valor = 50 × $102 = $5,100

        FIFO (First In First Out):
        Vendes primero las de $90
        Quedan las de $120
        Valor varía según qué vendiste

        ¿POR QUÉ IMPORTA?
        → Balance general necesita valor de inventario
        → Determina costo de ventas
        → Afecta utilidades reportadas
        → Decisiones de precios
      `
    },
    relationships: [
      {
        relatedTerm: 'producto',
        explanation: 'Cada producto tiene un método de valoración asignado'
      },
      {
        relatedTerm: 'balance-general',
        explanation: 'El valor del inventario aparece en activos del balance'
      }
    ],
    bestPractices: [
      'Elige método y sé consistente',
      'Costo promedio es bueno para mayoría',
      'Consulta contador para decisión',
      'Revisa valoración mensualmente'
    ],
    commonMistakes: [
      'Cambiar método frecuentemente',
      'No incluir costos adicionales (flete, impuestos)',
      'Inventario físico no coincide con sistema',
      'No considerar implicaciones fiscales'
    ],
    relatedModules: ['Inventario', 'Contabilidad']
  },

  'transferencia': {
    term: 'Transferencia Interna',
    shortDef: 'Mover productos de un lugar a otro dentro de tu empresa',
    fullDef: 'Es cuando mueves productos entre almacenes o ubicaciones. Por ejemplo: de bodega central a tienda. El stock total no cambia, pero sí dónde está el producto.',
    category: 'Inventario',
    icon: '🔀',
    example: {
      title: 'Transferencia entre almacenes',
      content: `
        ANTES:
        Almacén Central: 100 camisetas
        Tienda Norte: 5 camisetas (¡pocas!)
        Tienda Sur: 50 camisetas

        TRANSFERENCIA:
        De: Almacén Central
        A: Tienda Norte
        Producto: 20 camisetas

        DESPUÉS:
        Almacén Central: 80 camisetas
        Tienda Norte: 25 camisetas ✓
        Tienda Sur: 50 camisetas

        PROCESO:
        1. Creas transferencia en sistema
        2. Imprimes lista de productos
        3. Picking en origen
        4. Transportas físicamente
        5. Recepciones en destino
        6. Confirmas transferencia
        → Stock actualizado en ambos lugares
      `
    },
    relationships: [
      {
        relatedTerm: 'almacen',
        explanation: 'Las transferencias mueven stock entre almacenes'
      },
      {
        relatedTerm: 'movimiento-stock',
        explanation: 'Cada transferencia genera movimientos de stock'
      }
    ],
    bestPractices: [
      'Usa sistema para todas las transferencias',
      'Confirma recepción antes de cerrar transferencia',
      'Documenta motivo de la transferencia',
      'Planifica rutas eficientes'
    ],
    commonMistakes: [
      'Mover físicamente sin registrar en sistema',
      'No confirmar recepción',
      'Cantidades incorrectas',
      'No verificar stock en destino'
    ],
    relatedModules: ['Inventario']
  },

  'ajuste-de-inventario': {
    term: 'Ajuste de Inventario',
    shortDef: 'Corregir diferencias entre stock físico y sistema',
    fullDef: 'Cuando cuentas físicamente y encuentras diferencias con lo que dice Odoo, haces un ajuste. Si sistema dice 100 pero físicamente hay 95, ajustas el sistema a 95. Importante para mantener datos reales.',
    category: 'Inventario',
    icon: '✏️',
    example: {
      title: 'Proceso de ajuste',
      content: `
        CONTEO FÍSICO:
        Producto: Laptop Dell
        Sistema dice: 10 unidades
        Conteo real: 8 unidades
        Diferencia: -2 unidades

        POSIBLES CAUSAS:
        - Robo/pérdida
        - Error de entrada anterior
        - Producto dañado no registrado
        - Error de conteo anterior

        AJUSTE:
        1. Creas ajuste de inventario
        2. Producto: Laptop Dell
        3. Cantidad sistema: 10
        4. Cantidad real: 8
        5. Motivo: "Diferencia en conteo trimestral"
        6. Confirmas ajuste

        RESULTADO:
        → Sistema ahora dice: 8 unidades
        → Se registra la merma contablemente
        → Historial documenta el ajuste
      `
    },
    relationships: [
      {
        relatedTerm: 'conteo-ciclico',
        explanation: 'Los conteos cíclicos descubren necesidad de ajustes'
      },
      {
        relatedTerm: 'movimiento-stock',
        explanation: 'El ajuste genera movimiento hacia ubicación virtual de merma'
      }
    ],
    bestPractices: [
      'Documenta siempre el motivo del ajuste',
      'Requiere autorización para ajustes grandes',
      'Investiga causas de diferencias frecuentes',
      'Haz conteos regulares para detectar temprano'
    ],
    commonMistakes: [
      'Ajustar sin investigar la causa',
      'No documentar motivo',
      'Ajustes frecuentes en mismos productos',
      'No revisar seguridad ante diferencias'
    ],
    relatedModules: ['Inventario', 'Contabilidad']
  },

  'variante-de-producto': {
    term: 'Variante de Producto',
    shortDef: 'Versiones diferentes del mismo producto (talla, color)',
    fullDef: 'Cuando un producto tiene opciones como talla o color, cada combinación es una variante. "Camiseta Azul Talla M" es una variante de "Camiseta". Así no creas mil productos diferentes, solo uno con variantes.',
    category: 'Inventario',
    icon: '🎨',
    example: {
      title: 'Producto con variantes',
      content: `
        PRODUCTO: Camiseta Polo

        ATRIBUTOS:
        - Color: Azul, Rojo, Negro
        - Talla: S, M, L, XL

        VARIANTES GENERADAS (12 total):
        Camiseta Polo - Azul - S
        Camiseta Polo - Azul - M
        Camiseta Polo - Azul - L
        Camiseta Polo - Azul - XL
        Camiseta Polo - Rojo - S
        ... (y así 12 combinaciones)

        CADA VARIANTE TIENE:
        → SKU único (POL-AZL-M)
        → Stock separado
        → Puede tener precio diferente
        → Su propia imagen

        VENTAJAS:
        → Un solo producto base, múltiples variantes
        → Reportes consolidados
        → Fácil gestión de catálogo
        → Cliente ve opciones claras
      `
    },
    relationships: [
      {
        relatedTerm: 'atributo',
        explanation: 'Los atributos definen las opciones de variantes'
      },
      {
        relatedTerm: 'producto',
        explanation: 'Las variantes son versiones específicas del producto'
      }
    ],
    bestPractices: [
      'Usa variantes para productos con opciones',
      'Mantén stock por variante, no global',
      'Fotos diferentes por variante si es necesario',
      'Precios pueden variar (XL más caro que S)'
    ],
    commonMistakes: [
      'Crear productos separados en vez de variantes',
      'Demasiados atributos que explotan combinaciones',
      'No asignar SKU único por variante',
      'No trackear stock por variante individual'
    ],
    relatedModules: ['Inventario', 'Ventas', 'Website']
  },

  'unidad-de-medida': {
    term: 'Unidad de Medida',
    shortDef: 'Cómo mides tus productos (pieza, kilo, metro, etc.)',
    fullDef: 'Define cómo cuentas y vendes cada producto. Puede ser piezas, kilogramos, litros, metros, cajas, docenas, etc. Odoo convierte automáticamente entre unidades relacionadas.',
    category: 'Inventario',
    icon: '📐',
    example: {
      title: 'Unidades de medida en acción',
      content: `
        PRODUCTO: Tela para tapicería

        UNIDAD DE COMPRA: Rollo (50 metros)
        Compras: 10 rollos
        Stock: 500 metros

        UNIDAD DE VENTA: Metro
        Cliente pide: 15 metros
        Stock restante: 485 metros

        CONVERSIÓN AUTOMÁTICA:
        1 rollo = 50 metros
        Odoo sabe convertir

        OTRO EJEMPLO:
        Producto: Cerveza
        Compras: Cajas (24 botellas)
        Vendes: Botellas individuales
        Sistema convierte automático

        CATEGORÍAS COMUNES:
        - Unidad/Pieza
        - Peso (kg, gr, lb)
        - Volumen (L, ml, galón)
        - Longitud (m, cm, ft)
        - Tiempo (hora, día)
      `
    },
    relationships: [
      {
        relatedTerm: 'producto',
        explanation: 'Cada producto tiene unidad de medida asignada'
      },
      {
        relatedTerm: 'orden-compra',
        explanation: 'Puedes comprar en una unidad y vender en otra'
      }
    ],
    bestPractices: [
      'Usa unidades estándar de tu industria',
      'Configura conversiones correctamente',
      'Mismo producto, misma unidad en todo lugar',
      'Verifica decimales en conversiones'
    ],
    commonMistakes: [
      'Mezclar unidades en mismo producto',
      'Conversiones incorrectas',
      'No definir unidad de compra vs venta',
      'Errores de redondeo en decimales'
    ],
    relatedModules: ['Inventario', 'Ventas', 'Compras', 'Fabricación']
  },

  // =====================================
  // RRHH - TÉRMINOS ADICIONALES
  // =====================================

  'ausencia': {
    term: 'Ausencia',
    shortDef: 'Día que el empleado no trabaja (vacaciones, enfermedad, permiso)',
    fullDef: 'Es cualquier día que el empleado falta al trabajo, ya sea planeado (vacaciones) o no planeado (enfermedad). Odoo registra cada ausencia, quién la aprobó y cuántos días le quedan.',
    category: 'RRHH',
    icon: '🏖️',
    example: {
      title: 'Tipos de ausencias',
      content: `
        EMPLEADO: María García - AÑO 2024

        VACACIONES:
        Derecho: 15 días/año
        Usados: 8 días
        Disponibles: 7 días

        INCAPACIDAD (enfermedad):
        Usados: 3 días (con certificado médico)

        PERMISO SIN GOCE:
        Usados: 1 día (descontado de nómina)

        PERMISO CON GOCE:
        Usados: 2 días (pagado por empresa)

        PROCESO:
        1. Empleado solicita en sistema
        2. Jefe aprueba o rechaza
        3. Se registra en calendario
        4. Afecta nómina automáticamente
      `
    },
    relationships: [
      {
        relatedTerm: 'nomina',
        explanation: 'Las ausencias pueden afectar el cálculo de nómina'
      },
      {
        relatedTerm: 'empleado',
        explanation: 'Cada empleado tiene su saldo de ausencias'
      }
    ],
    bestPractices: [
      'Define claramente tipos de ausencias',
      'Requiere aprobación antes de la ausencia',
      'Mantén registro de saldos actualizados',
      'Notifica al equipo sobre ausencias'
    ],
    commonMistakes: [
      'No registrar ausencias en el sistema',
      'Aprobar sin verificar saldo disponible',
      'No pedir comprobantes cuando se requiere',
      'No planificar cobertura del trabajo'
    ],
    relatedModules: ['Ausencias', 'Nómina', 'Asistencias']
  },

  'nomina': {
    term: 'Nómina',
    shortDef: 'Cálculo y pago del salario de los empleados',
    fullDef: 'Es el proceso de calcular cuánto debes pagar a cada empleado: salario base + bonos - deducciones - impuestos = pago neto. Odoo automatiza este cálculo y genera los recibos de nómina.',
    category: 'RRHH',
    icon: '💵',
    example: {
      title: 'Estructura de nómina quincenal',
      content: `
        NÓMINA - María García

        PERCEPCIONES (lo que gana):
        Salario base:           $7,500
        Bono productividad:     $500
        Horas extra (5 hrs):    $300
        TOTAL BRUTO:            $8,300

        DEDUCCIONES (lo que se resta):
        IMSS (seguro social):   $250
        ISR (impuesto):         $850
        Fondo de ahorro:        $200
        TOTAL DEDUCCIONES:      $1,300

        NETO A PAGAR:           $7,000

        PROCESO:
        1. Configuras reglas salariales
        2. Registras incidencias del período
        3. Generas nómina automática
        4. Revisas y apruebas
        5. Pagas y envías recibos
      `
    },
    relationships: [
      {
        relatedTerm: 'empleado',
        explanation: 'Cada empleado tiene su nómina con su contrato'
      },
      {
        relatedTerm: 'ausencia',
        explanation: 'Las ausencias pueden afectar el cálculo'
      }
    ],
    bestPractices: [
      'Procesa nómina con tiempo suficiente',
      'Verifica incidencias antes de calcular',
      'Guarda respaldo de cada nómina',
      'Cumple regulaciones fiscales locales'
    ],
    commonMistakes: [
      'No registrar horas extra o ausencias',
      'Calcular impuestos incorrectamente',
      'No actualizar tablas de impuestos',
      'Pagar sin revisar el cálculo'
    ],
    relatedModules: ['Nómina', 'Empleados', 'Contabilidad']
  },

  'solicitud-de-cotizacion': {
    term: 'Solicitud de Cotización (RFQ)',
    shortDef: 'Pedir a varios proveedores sus precios antes de comprar',
    fullDef: 'Es cuando envías mensaje a varios proveedores diciendo "necesito X producto, ¿cuánto me cobras?". Comparas respuestas y eliges la mejor opción. RFQ significa Request For Quotation.',
    category: 'Compras',
    icon: '📨',
    example: {
      title: 'Proceso de solicitud de cotización',
      content: `
        NECESITAS: 100 laptops para oficina

        PASO 1 - ENVIAR RFQ:
        Proveedor A: Dell México
        Proveedor B: HP Store
        Proveedor C: Lenovo Direct

        PASO 2 - RECIBIR RESPUESTAS:
        Dell: $15,000 c/u, entrega 10 días
        HP: $14,500 c/u, entrega 15 días
        Lenovo: $14,800 c/u, entrega 7 días

        PASO 3 - COMPARAR:
        Precio: HP gana
        Tiempo: Lenovo gana
        Decisión: Lenovo (buen precio + rápido)

        PASO 4 - CONVERTIR:
        RFQ de Lenovo → Orden de Compra
        Confirmas y esperas entrega.
      `
    },
    relationships: [
      {
        relatedTerm: 'orden-compra',
        explanation: 'La RFQ aceptada se convierte en orden de compra'
      },
      {
        relatedTerm: 'proveedor',
        explanation: 'Envías RFQ a múltiples proveedores para comparar'
      }
    ],
    bestPractices: [
      'Pide al menos 3 cotizaciones',
      'Especifica claramente qué necesitas',
      'Define fecha límite para respuestas',
      'Considera precio, tiempo y calidad'
    ],
    commonMistakes: [
      'Comprar sin comparar proveedores',
      'Especificaciones vagas',
      'No considerar tiempo de entrega',
      'Elegir solo por precio más bajo'
    ],
    relatedModules: ['Compras']
  },

  'carrito-de-compras': {
    term: 'Carrito de Compras',
    shortDef: 'Donde el cliente guarda productos antes de pagar',
    fullDef: 'Es la "canasta virtual" donde el cliente va agregando productos mientras navega tu tienda en línea. Puede agregar, quitar o modificar cantidades antes de proceder al pago.',
    category: 'Website',
    icon: '🛒',
    example: {
      title: 'Flujo del carrito',
      content: `
        CLIENTE NAVEGANDO TU TIENDA:

        1. Ve producto → "Agregar al carrito"
        2. Sigue navegando → Agrega otro
        3. Revisa carrito:
           - Camiseta Azul (x2): $1,000
           - Pantalón Negro: $800
           Subtotal: $1,800

        4. Aplica cupón "DESCUENTO10":
           -$180
           Total: $1,620

        5. Procede a pagar →

        CARRITOS ABANDONADOS:
        Cliente agregó pero no pagó
        → Oportunidad de remarketing
        → Email recordatorio automático
        → 70% de carritos se abandonan
      `
    },
    relationships: [
      {
        relatedTerm: 'checkout',
        explanation: 'Después del carrito viene el proceso de pago'
      },
      {
        relatedTerm: 'producto',
        explanation: 'El carrito contiene productos seleccionados'
      }
    ],
    bestPractices: [
      'Muestra carrito siempre visible',
      'Permite modificar cantidades fácilmente',
      'Guarda carrito aunque cierre sesión',
      'Envía recordatorios de carritos abandonados'
    ],
    commonMistakes: [
      'Carrito difícil de encontrar',
      'No mostrar subtotal actualizado',
      'Perder carrito si no está logueado',
      'No hacer seguimiento a abandonos'
    ],
    relatedModules: ['Website', 'Ventas', 'Marketing']
  },

  'checkout': {
    term: 'Checkout',
    shortDef: 'Proceso final de pago en tienda online',
    fullDef: 'Es el momento donde el cliente finaliza su compra: ingresa datos de envío, elige método de pago, y confirma la orden. Un buen checkout es simple y rápido para evitar abandonos.',
    category: 'Website',
    icon: '💳',
    example: {
      title: 'Pasos del checkout',
      content: `
        CHECKOUT EN 4 PASOS:

        1. REVISAR CARRITO:
        ✓ Confirma productos
        ✓ Ve total con impuestos
        ✓ Aplica cupón si tiene

        2. DATOS DE ENVÍO:
        ✓ Nombre y dirección
        ✓ Teléfono de contacto
        ✓ Método de envío

        3. MÉTODO DE PAGO:
        ✓ Tarjeta crédito/débito
        ✓ PayPal / MercadoPago
        ✓ Transferencia
        ✓ Pago contra entrega

        4. CONFIRMAR:
        ✓ Resumen final
        ✓ Botón "Confirmar Pedido"
        ✓ Email de confirmación

        MÉTRICA CLAVE:
        Tasa de conversión = % que completa
      `
    },
    relationships: [
      {
        relatedTerm: 'carrito-de-compras',
        explanation: 'El checkout es el paso después del carrito'
      },
      {
        relatedTerm: 'proveedor-de-pagos',
        explanation: 'El checkout usa proveedores de pago'
      }
    ],
    bestPractices: [
      'Mínimos pasos posibles',
      'No requieras crear cuenta para comprar',
      'Muestra progreso claramente',
      'Múltiples opciones de pago'
    ],
    commonMistakes: [
      'Demasiados pasos que cansan',
      'Obligar registro antes de pagar',
      'Costos sorpresa al final',
      'Opciones de pago limitadas'
    ],
    relatedModules: ['Website', 'Ventas']
  },

  'formulario-web': {
    term: 'Formulario Web',
    shortDef: 'Campos donde visitantes llenan información en tu sitio',
    fullDef: 'Son los espacios en tu página donde los visitantes escriben sus datos: nombre, email, mensaje. Puede ser para contacto, cotización o registro. Odoo captura estos datos automáticamente.',
    category: 'Website',
    icon: '📝',
    example: {
      title: 'Formulario de contacto',
      content: `
        PÁGINA "CONTÁCTANOS":

        Nombre: [____________]
        Email:  [____________]
        Tel:    [____________]
        Mensaje:
        [____________________]

           [ENVIAR MENSAJE]

        AL ENVIAR:
        1. Datos llegan a Odoo
        2. Se crea Lead automáticamente
        3. Te notifica por email
        4. Cliente recibe confirmación
        5. Puedes dar seguimiento en CRM

        TIPOS COMUNES:
        - Contacto general
        - Solicitud de cotización
        - Registro a newsletter
        - Encuesta de satisfacción
      `
    },
    relationships: [
      {
        relatedTerm: 'lead',
        explanation: 'Los formularios pueden crear leads automáticamente'
      },
      {
        relatedTerm: 'cliente',
        explanation: 'La información se guarda en ficha del cliente'
      }
    ],
    bestPractices: [
      'Solo pide información necesaria',
      'Indica campos obligatorios',
      'Confirma que se recibió el mensaje',
      'Responde en menos de 24 horas'
    ],
    commonMistakes: [
      'Pedir demasiada información',
      'No confirmar recepción al usuario',
      'Formularios que no funcionan en móvil',
      'No revisar los mensajes recibidos'
    ],
    relatedModules: ['Website', 'CRM', 'Marketing']
  },

  // =====================================
  // PROYECTOS Y SERVICIOS
  // =====================================

  'proyecto': {
    term: 'Proyecto',
    shortDef: 'Conjunto de tareas organizadas para lograr un objetivo',
    fullDef: 'Es un trabajo con inicio y fin definidos, compuesto por varias tareas. En Odoo, agrupas tareas, asignas responsables, y das seguimiento al progreso y presupuesto.',
    category: 'Proyectos',
    icon: '📁',
    example: {
      title: 'Estructura de un proyecto',
      content: `
        PROYECTO: Implementación Odoo - Panadería
        Fecha inicio: 01 marzo
        Fecha fin: 30 abril

        FASES:
        1. Análisis (1 semana)
        2. Configuración (2 semanas)
        3. Migración datos (1 semana)
        4. Capacitación (1 semana)
        5. Go-live (3 semanas)

        EQUIPO:
        - Gerente: Ana
        - Consultor: Roberto
        - Técnico: María

        MÉTRICAS:
        Progreso: 65% completado
        Horas planeadas: 200 hrs
        Horas usadas: 130 hrs
        Presupuesto: $50,000
        Gastado: $32,000
      `
    },
    relationships: [
      {
        relatedTerm: 'tarea',
        explanation: 'Los proyectos contienen múltiples tareas'
      },
      {
        relatedTerm: 'parte-de-horas',
        explanation: 'Las horas se registran contra el proyecto'
      }
    ],
    bestPractices: [
      'Define alcance claro al inicio',
      'Divide en fases manejables',
      'Asigna responsable por proyecto',
      'Revisa progreso semanalmente'
    ],
    commonMistakes: [
      'No definir fecha de fin clara',
      'Alcance que crece sin control',
      'No dar seguimiento regular',
      'No comunicar cambios al cliente'
    ],
    relatedModules: ['Proyectos', 'Partes de Horas', 'Facturación']
  },

  'tarea': {
    term: 'Tarea',
    shortDef: 'Actividad específica a completar dentro de un proyecto',
    fullDef: 'Es una unidad de trabajo asignable a una persona. Tiene responsable, fecha límite y horas estimadas. Las tareas se organizan en tableros Kanban (Por hacer, En progreso, Hecho).',
    category: 'Proyectos',
    icon: '✅',
    example: {
      title: 'Gestión de tareas en Kanban',
      content: `
        PROYECTO: Implementación Odoo

        POR HACER:
        □ Configurar plan de cuentas
          Asignado: Roberto
          Fecha: 15 marzo
          Estimado: 4 hrs

        EN PROGRESO:
        □ Migrar productos
          Asignado: María
          Progreso: 50%
          Usado: 6/10 hrs

        HECHO:
        ✓ Crear usuarios
        ✓ Configurar empresa
        ✓ Instalar módulos

        FUNCIONES:
        → Arrastra entre columnas
        → Asigna responsable
        → Adjunta documentos
        → Registra tiempo
        → Comenta y colabora
      `
    },
    relationships: [
      {
        relatedTerm: 'proyecto',
        explanation: 'Las tareas pertenecen a un proyecto'
      },
      {
        relatedTerm: 'etapa',
        explanation: 'Las tareas se mueven entre etapas'
      }
    ],
    bestPractices: [
      'Tareas pequeñas (2-8 hrs)',
      'Una persona responsable',
      'Fecha límite realista',
      'Actualiza estado diariamente'
    ],
    commonMistakes: [
      'Tareas muy grandes y vagas',
      'Sin responsable claro',
      'Fechas irreales',
      'No actualizar progreso'
    ],
    relatedModules: ['Proyectos', 'Tareas']
  },

  'parte-de-horas': {
    term: 'Parte de Horas (Timesheet)',
    shortDef: 'Registro del tiempo trabajado en cada tarea',
    fullDef: 'Es llevar control de cuántas horas dedicas a cada trabajo. Útil para facturar al cliente, medir productividad y costear proyectos. El empleado registra diariamente qué hizo y cuánto tiempo.',
    category: 'Proyectos',
    icon: '⏱️',
    example: {
      title: 'Registro semanal de horas',
      content: `
        EMPLEADO: Roberto García
        SEMANA: 11-15 marzo

        LUNES:
        - Proyecto ABC: 4 hrs
        - Proyecto XYZ: 2 hrs
        - Interno: Reunión 1 hr
        Total: 7 hrs

        MARTES:
        - Proyecto ABC: 6 hrs
        - Interno: Capacitación 2 hrs
        Total: 8 hrs

        RESUMEN SEMANAL:
        Total: 40 hrs
        ABC: 25 hrs (facturable)
        XYZ: 8 hrs (facturable)
        Interno: 7 hrs (no facturable)

        FACTURACIÓN:
        ABC: 25 hrs × $500/hr = $12,500
        XYZ: 8 hrs × $500/hr = $4,000
      `
    },
    relationships: [
      {
        relatedTerm: 'tarea',
        explanation: 'Las horas se registran contra tareas'
      },
      {
        relatedTerm: 'factura',
        explanation: 'Las horas se convierten en facturas'
      }
    ],
    bestPractices: [
      'Registra al final de cada día',
      'Sé específico en descripción',
      'Separa horas facturables',
      'Revisa semanalmente con jefe'
    ],
    commonMistakes: [
      'Registrar días después',
      'Descripciones vagas',
      'No separar tiempo facturable',
      'Horas infladas o inventadas'
    ],
    relatedModules: ['Partes de Horas', 'Proyectos', 'Facturación']
  },

  'campana-marketing': {
    term: 'Campaña de Marketing',
    shortDef: 'Acciones coordinadas para promocionar algo',
    fullDef: 'Es planificar y ejecutar actividades de promoción con un objetivo específico. Odoo te ayuda a crear emails masivos, medir aperturas y conversiones, y calcular ROI de tus campañas.',
    category: 'Marketing',
    icon: '📢',
    example: {
      title: 'Campaña de email marketing',
      content: `
        CAMPAÑA: Promoción Navidad 2024

        OBJETIVO:
        Incrementar ventas 30% en diciembre

        AUDIENCIA:
        5,000 contactos (clientes último año)

        ACCIONES:
        1. Email #1 (1 dic): Anticipo
        2. Email #2 (10 dic): 20% descuento
        3. Email #3 (20 dic): Última chance
        4. SMS recordatorio (23 dic)

        MÉTRICAS:
        Enviados: 5,000
        Abiertos: 1,250 (25%)
        Clics: 375 (7.5%)
        Ventas: $150,000
        ROI: 500%

        Odoo trackea todo automáticamente.
      `
    },
    relationships: [
      {
        relatedTerm: 'lead',
        explanation: 'Las campañas pueden generar nuevos leads'
      },
      {
        relatedTerm: 'segmento',
        explanation: 'Las campañas se envían a segmentos específicos'
      }
    ],
    bestPractices: [
      'Define objetivo medible',
      'Segmenta tu audiencia',
      'Prueba A/B antes de enviar masivo',
      'Mide resultados y aprende'
    ],
    commonMistakes: [
      'Enviar a todos sin segmentar',
      'No medir resultados',
      'Emails muy frecuentes (spam)',
      'No tener objetivo claro'
    ],
    relatedModules: ['Email Marketing', 'Marketing Automation', 'CRM']
  },

  'calendario': {
    term: 'Calendario',
    shortDef: 'Vista de tus eventos y reuniones por fecha',
    fullDef: 'Es donde ves organizados todos tus compromisos: reuniones, fechas límite, eventos. Odoo sincroniza el calendario con tus actividades de CRM, proyectos y RRHH todo en un lugar.',
    category: 'Productividad',
    icon: '📅',
    example: {
      title: 'Vista de calendario semanal',
      content: `
        MARZO 2024 - SEMANA 11

        LUNES 11:
        09:00 Reunión equipo
        14:00 Llamada cliente ABC
        16:00 Revisión proyecto

        MARTES 12:
        10:00 Demo a prospecto
        15:00 Capacitación

        MIÉRCOLES 13:
        TODO EL DÍA: Visita cliente

        JUEVES 14:
        11:00 Entrevista candidato
        14:00 Seguimiento leads

        VIERNES 15:
        09:00 Cierre de mes
        12:00 Comida equipo

        INTEGRACIÓN:
        → Actividades CRM aquí
        → Ausencias visibles
        → Fechas límite tareas
        → Todo sincronizado
      `
    },
    relationships: [
      {
        relatedTerm: 'actividad',
        explanation: 'Las actividades aparecen en el calendario'
      },
      {
        relatedTerm: 'ausencia',
        explanation: 'Las ausencias se ven en el calendario'
      }
    ],
    bestPractices: [
      'Revisa calendario cada mañana',
      'Bloquea tiempo para trabajo enfocado',
      'Sincroniza con Google/Outlook',
      'Programa recordatorios'
    ],
    commonMistakes: [
      'No actualizar el calendario',
      'Sobrecargar de reuniones',
      'No dejar tiempo entre eventos',
      'Ignorar conflictos de horario'
    ],
    relatedModules: ['Calendario', 'CRM', 'Proyectos', 'RRHH']
  },

  'nota-interna': {
    term: 'Nota Interna',
    shortDef: 'Comentario privado que solo ve tu equipo',
    fullDef: 'Son mensajes internos que adjuntas a cualquier documento. Solo los ve tu equipo, no el cliente. Útil para instrucciones, advertencias o historial de decisiones importantes.',
    category: 'Productividad',
    icon: '📌',
    example: {
      title: 'Notas internas en ficha de cliente',
      content: `
        CLIENTE: Panadería ABC

        NOTAS INTERNAS (solo equipo):

        ━━━ 15 marzo - Ana ━━━
        ⚠️ Cliente sensible a precio.
        Siempre pide descuento.
        Máximo autorizado: 10%

        ━━━ 20 febrero - Roberto ━━━
        Prefiere llamadas por la tarde
        después de las 3pm.

        ━━━ 10 enero - María ━━━
        Pagó 15 días tarde últimas 2 facturas.
        Considerar pedir anticipo.

        MENSAJES AL CLIENTE (visibles):
        "Gracias por su compra"

        Las notas ayudan al equipo
        a dar mejor servicio.
      `
    },
    relationships: [
      {
        relatedTerm: 'cliente',
        explanation: 'Las notas se adjuntan a clientes'
      },
      {
        relatedTerm: 'oportunidad',
        explanation: 'Puedes dejar notas en oportunidades'
      }
    ],
    bestPractices: [
      'Documenta información importante',
      'Sé específico y útil',
      'Fecha y firma cada nota',
      'Revisa notas antes de contactar'
    ],
    commonMistakes: [
      'No documentar decisiones',
      'Notas confusas o incompletas',
      'Olvidar revisar historial',
      'Información desactualizada'
    ],
    relatedModules: ['Discuss', 'CRM', 'Ventas', 'Proyectos']
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
