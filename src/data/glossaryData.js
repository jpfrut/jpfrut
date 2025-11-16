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
