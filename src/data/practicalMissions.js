// Misiones Prácticas - Casos de uso reales del día a día
// Diseñado para usuarios sin experiencia técnica, tercera edad, y personas que le temen al software

export const practicalMissions = [
  {
    id: 'mission-first-invoice',
    title: '🎯 Mi Primera Factura',
    subtitle: 'Aprende a crear una factura para cobrar a tu cliente',
    difficulty: 'Principiante',
    estimatedTime: '15 minutos',
    xpReward: 150,
    badge: 'Facturador Novato',
    category: 'ventas',

    // ¿Por qué esto es importante para tu negocio?
    businessImportance: {
      title: '¿Por qué necesitas saber hacer esto?',
      explanation: 'Sin facturas, no puedes cobrar legalmente a tus clientes. Además, el gobierno necesita que registres todas tus ventas para calcular tus impuestos. Una factura bien hecha te protege legalmente y te ayuda a tener control de tu dinero.',
      realLifeExample: 'Imagina que le vendes un servicio de consultoría a un cliente por €1,000. Si no le das factura, podrías tener problemas legales y el cliente podría no pagarte porque no tiene comprobante de la compra.'
    },

    // Pasos explicados de forma muy simple
    steps: [
      {
        id: 1,
        title: 'Abre el menú de Ventas',
        instruction: 'Haz clic en "Facturación" en el menú principal. Es como abrir un cajón donde guardas todos tus cobros.',
        whyThisMatters: 'Aquí encontrarás todas las herramientas para cobrar a tus clientes.',
        commonMistake: 'Muchas personas buscan "Facturas" en el menú de Contabilidad. Recuerda: las facturas de COBRO están en Ventas.',
        visualHelp: '📍 Menú Principal → Facturación → Clientes → Facturas'
      },
      {
        id: 2,
        title: 'Crea una nueva factura',
        instruction: 'Haz clic en el botón azul "Crear". Es como tomar una hoja en blanco para escribir tu factura.',
        whyThisMatters: 'Cada factura nueva tiene un número único que el sistema genera automáticamente.',
        commonMistake: 'No te preocupes por el número de factura, Odoo lo pone solo.',
        visualHelp: '🔵 Botón CREAR (esquina superior izquierda)'
      },
      {
        id: 3,
        title: 'Selecciona al cliente',
        instruction: 'En el campo "Cliente", escribe el nombre de tu cliente. Si ya lo registraste antes, aparecerá automáticamente.',
        whyThisMatters: 'El sistema guardará esta factura en el historial del cliente, así podrás ver todo lo que le has vendido.',
        commonMistake: 'Si el cliente no aparece, significa que primero debes registrarlo en Contactos.',
        visualHelp: '👤 Campo "Cliente" → Escribe el nombre → Selecciónalo de la lista'
      },
      {
        id: 4,
        title: 'Agrega lo que vendiste',
        instruction: 'En "Líneas de factura", haz clic en "Agregar línea". Escribe qué vendiste (producto o servicio), cuántas unidades y el precio.',
        whyThisMatters: 'Aquí detallas exactamente qué le estás cobrando al cliente. Es tu comprobante legal.',
        commonMistake: 'No olvides poner el precio correcto. Si te equivocas, puedes corregirlo antes de confirmar.',
        visualHelp: '📝 Agregar línea → Producto → Cantidad → Precio'
      },
      {
        id: 5,
        title: 'Revisa y confirma',
        instruction: 'Verifica que todo esté correcto: cliente, productos, precios y total. Luego haz clic en "Confirmar".',
        whyThisMatters: 'Una vez confirmada, la factura es oficial. El sistema calculará los impuestos automáticamente.',
        commonMistake: 'Revisa dos veces antes de confirmar. Después de confirmar, necesitarás crear una nota de crédito si hay errores.',
        visualHelp: '✅ Revisar todo → Botón CONFIRMAR → ¡Listo!'
      }
    ],

    // Celebración al completar
    celebration: {
      title: '🎉 ¡Felicidades! Creaste tu primera factura',
      message: 'Ahora sabes cobrar profesionalmente. Tu negocio está un paso más cerca de estar organizado.',
      nextSuggestion: 'Siguiente misión recomendada: "Mi Primer Pago Recibido"'
    }
  },

  {
    id: 'mission-register-client',
    title: '👥 Registro de Mi Primer Cliente',
    subtitle: 'Guarda la información de tus clientes para no perderla nunca',
    difficulty: 'Principiante',
    estimatedTime: '10 minutos',
    xpReward: 100,
    badge: 'Organizador de Contactos',
    category: 'crm',

    businessImportance: {
      title: '¿Por qué necesitas registrar a tus clientes?',
      explanation: 'Tener a tus clientes registrados te permite: 1) No olvidar sus datos de contacto, 2) Ver el historial de todo lo que les has vendido, 3) Enviarles facturas y recordatorios fácilmente, 4) Saber quiénes son tus mejores clientes.',
      realLifeExample: 'Si tienes 20 clientes y guardas sus datos en papelitos o en tu cabeza, un día olvidarás el teléfono de alguien importante. Con Odoo, todo está guardado y organizado.'
    },

    steps: [
      {
        id: 1,
        title: 'Ve a Contactos',
        instruction: 'Haz clic en "Contactos" en el menú principal. Es tu agenda digital de clientes.',
        whyThisMatters: 'Aquí se guardan TODOS tus contactos: clientes, proveedores, y cualquier persona importante para tu negocio.',
        commonMistake: 'No confundas con el menú de CRM. Contactos es más directo para crear clientes.',
        visualHelp: '📍 Menú Principal → Contactos'
      },
      {
        id: 2,
        title: 'Crea un nuevo contacto',
        instruction: 'Haz clic en "Crear". Se abrirá una ficha vacía como si fuera una tarjeta de presentación digital.',
        whyThisMatters: 'Cada contacto tiene su propia ficha con toda su información.',
        commonMistake: 'No te asustes si ves muchos campos. Solo necesitas llenar los básicos.',
        visualHelp: '🔵 Botón CREAR'
      },
      {
        id: 3,
        title: 'Llena los datos básicos',
        instruction: 'Escribe: Nombre de la empresa o persona, Teléfono, Email, y Dirección. Solo esos 4 datos son necesarios al inicio.',
        whyThisMatters: 'Con estos datos podrás contactarlo y enviarle facturas. El resto es opcional.',
        commonMistake: 'No intentes llenar TODOS los campos. Muchos son opcionales y puedes completarlos después.',
        visualHelp: '📝 Nombre → Teléfono → Email → Dirección'
      },
      {
        id: 4,
        title: 'Marca que es un cliente',
        instruction: 'Busca la opción que dice "Es un cliente" y actívala. Esto le dice a Odoo que le podrás vender cosas.',
        whyThisMatters: 'Así aparecerá en la lista cuando hagas facturas de venta.',
        commonMistake: 'Si no marcas esto, no podrás seleccionarlo cuando crees facturas.',
        visualHelp: '☑️ Casilla "Es un cliente" → Activar'
      },
      {
        id: 5,
        title: 'Guarda el contacto',
        instruction: 'Haz clic en "Guardar". ¡Ya tienes tu primer cliente registrado!',
        whyThisMatters: 'El contacto quedará guardado para siempre en tu sistema.',
        commonMistake: 'No olvides guardar. Si cierras sin guardar, perderás todo lo que escribiste.',
        visualHelp: '💾 Botón GUARDAR'
      }
    ],

    celebration: {
      title: '🎉 ¡Excelente! Ya tienes tu primer cliente registrado',
      message: 'Nunca más perderás la información de tus clientes. Están seguros en tu sistema.',
      nextSuggestion: 'Siguiente misión: "Mi Primera Factura"'
    }
  },

  {
    id: 'mission-check-money',
    title: '💰 Ver Cuánto Dinero Me Deben',
    subtitle: 'Revisa qué clientes no te han pagado todavía',
    difficulty: 'Principiante',
    estimatedTime: '5 minutos',
    xpReward: 80,
    badge: 'Detective de Cobros',
    category: 'contabilidad',

    businessImportance: {
      title: '¿Por qué es vital saber quién te debe dinero?',
      explanation: 'Si no controlas lo que te deben, podrías pensar que tienes más dinero del que realmente tienes. Esto causa problemas cuando necesitas pagar a tus proveedores o empleados. Saber quién te debe te permite cobrar a tiempo.',
      realLifeExample: 'Tienes €5,000 en facturas pero solo €1,000 en el banco. Si no cobras pronto, no podrás pagar la renta del local el próximo mes.'
    },

    steps: [
      {
        id: 1,
        title: 'Abre el reporte de cuentas por cobrar',
        instruction: 'Ve a Facturación → Informes → Cuentas por cobrar. Es como ver una lista de todos los que te deben dinero.',
        whyThisMatters: 'Este reporte te muestra exactamente cuánto te debe cada cliente y hace cuánto tiempo.',
        commonMistake: 'No busques en "Ventas". Los reportes financieros están en "Facturación" o "Contabilidad".',
        visualHelp: '📍 Facturación → Informes → Cuentas por Cobrar Vencidas'
      },
      {
        id: 2,
        title: 'Entiende lo que ves',
        instruction: 'Verás una tabla con: Nombre del cliente, Monto que debe, Días de atraso. Los números en rojo son los más urgentes.',
        whyThisMatters: 'Las deudas viejas (más de 30 días) son las más difíciles de cobrar. Debes actuar rápido.',
        commonMistake: 'No ignores los montos pequeños. Muchos montos pequeños sin cobrar suman mucho dinero.',
        visualHelp: '📊 Tabla: Cliente | Monto | Días vencido | TOTAL'
      },
      {
        id: 3,
        title: 'Filtra por antigüedad',
        instruction: 'Usa los filtros para ver: "No vencidas", "1-30 días", "31-60 días", "Más de 60 días".',
        whyThisMatters: 'Te ayuda a priorizar. Primero cobra las más vencidas.',
        commonMistake: 'No te concentres solo en los montos grandes. A veces los pequeños están más atrasados.',
        visualHelp: '🔍 Filtros → Selecciona el rango de días'
      }
    ],

    celebration: {
      title: '🎉 ¡Muy bien! Ya sabes revisar tus cuentas por cobrar',
      message: 'Ahora puedes controlar tu flujo de dinero. Revisa esto al menos una vez por semana.',
      nextSuggestion: 'Siguiente misión: "Registrar un Pago Recibido"'
    }
  },

  {
    id: 'mission-record-expense',
    title: '📋 Registrar un Gasto de la Empresa',
    subtitle: 'Aprende a registrar cuando pagas por algo para tu negocio',
    difficulty: 'Principiante',
    estimatedTime: '10 minutos',
    xpReward: 120,
    badge: 'Controlador de Gastos',
    category: 'contabilidad',

    businessImportance: {
      title: '¿Por qué debes registrar todos tus gastos?',
      explanation: 'Registrar gastos te permite: 1) Saber exactamente cuánto dinero sale de tu negocio, 2) Deducir impuestos (pagar menos al gobierno legalmente), 3) Calcular si realmente estás ganando dinero, 4) Planificar mejor tus finanzas.',
      realLifeExample: 'Compraste una computadora por €800 para tu negocio. Si la registras, puedes deducirla de tus impuestos y pagar menos. Si no la registras, pagas impuestos de más.'
    },

    steps: [
      {
        id: 1,
        title: 'Ve a facturas de proveedor',
        instruction: 'Haz clic en Facturación → Proveedores → Facturas. Aquí registras lo que TÚ pagas a otros.',
        whyThisMatters: 'Cada factura que recibes de un proveedor debe registrarse aquí.',
        commonMistake: 'No confundas con facturas de cliente. Proveedores = lo que tú pagas. Clientes = lo que te pagan a ti.',
        visualHelp: '📍 Facturación → Proveedores → Facturas'
      },
      {
        id: 2,
        title: 'Crea una nueva factura de proveedor',
        instruction: 'Haz clic en "Crear". Vas a registrar la factura que te dio tu proveedor.',
        whyThisMatters: 'Es tu comprobante de gasto. Lo necesitas para impuestos.',
        commonMistake: 'Guarda siempre la factura original (papel o PDF). Odoo guarda el registro, pero necesitas el documento.',
        visualHelp: '🔵 Botón CREAR'
      },
      {
        id: 3,
        title: 'Selecciona el proveedor',
        instruction: 'En "Proveedor", escribe el nombre de quien te vendió. Si no existe, puedes crearlo rápido.',
        whyThisMatters: 'Así sabrás a quién le compraste y cuánto le has pagado en total.',
        commonMistake: 'Si el proveedor no aparece, haz clic en "Crear y Editar" para agregarlo.',
        visualHelp: '👤 Campo Proveedor → Buscar o Crear nuevo'
      },
      {
        id: 4,
        title: 'Ingresa los datos de la factura',
        instruction: 'Pon el número de factura del proveedor, la fecha, y agrega los productos o servicios que compraste.',
        whyThisMatters: 'El número de factura es único. Te ayudará a encontrar este gasto después.',
        commonMistake: 'No inventes el número. Copia exactamente el que viene en la factura del proveedor.',
        visualHelp: '📝 Número de factura → Fecha → Líneas de producto → Monto'
      },
      {
        id: 5,
        title: 'Confirma la factura',
        instruction: 'Revisa que todo esté correcto y haz clic en "Confirmar".',
        whyThisMatters: 'La factura quedará registrada y podrás programar su pago.',
        commonMistake: 'Revisa el monto total. Debe coincidir exactamente con la factura original.',
        visualHelp: '✅ Revisar → CONFIRMAR'
      }
    ],

    celebration: {
      title: '🎉 ¡Perfecto! Registraste tu gasto correctamente',
      message: 'Ahora tienes control de lo que gastas. Esto te ayudará en tus declaraciones de impuestos.',
      nextSuggestion: 'Siguiente misión: "Programar un Pago a Proveedor"'
    }
  },

  {
    id: 'mission-bank-balance',
    title: '🏦 Verificar Mi Saldo Bancario',
    subtitle: 'Aprende a ver cuánto dinero tienes disponible en tus cuentas',
    difficulty: 'Principiante',
    estimatedTime: '5 minutos',
    xpReward: 60,
    badge: 'Vigilante del Banco',
    category: 'contabilidad',

    businessImportance: {
      title: '¿Por qué revisar tu saldo en Odoo si puedo ver en el banco?',
      explanation: 'El banco te dice cuánto tienes HOY. Odoo te dice: cuánto tienes + cuánto te deben + cuánto debes pagar. Es una vista completa de tu situación financiera real.',
      realLifeExample: 'Tienes €3,000 en el banco, pero debes pagar €2,500 mañana a proveedores. En realidad solo tienes €500 "libres". Odoo te muestra esto claramente.'
    },

    steps: [
      {
        id: 1,
        title: 'Abre el tablero de contabilidad',
        instruction: 'Ve a Facturación → Tablero. Verás un resumen de tus cuentas bancarias.',
        whyThisMatters: 'El tablero te da una vista rápida de todas tus cuentas.',
        commonMistake: 'No busques "saldo" en un menú. El tablero lo muestra automáticamente.',
        visualHelp: '📍 Facturación → Tablero (Dashboard)'
      },
      {
        id: 2,
        title: 'Identifica tus cuentas',
        instruction: 'Verás tarjetas con el nombre de cada cuenta bancaria y su saldo actual.',
        whyThisMatters: 'Si tienes varias cuentas, verás cada una por separado.',
        commonMistake: 'El saldo que ves es el último que sincronizaste. Si no has conciliado recientemente, podría estar desactualizado.',
        visualHelp: '💳 Cuenta 1: €X,XXX | Cuenta 2: €X,XXX'
      },
      {
        id: 3,
        title: 'Revisa lo que entra y sale',
        instruction: 'Haz clic en una cuenta para ver los movimientos recientes: depósitos y retiros.',
        whyThisMatters: 'Te permite ver de dónde viene y a dónde va tu dinero.',
        commonMistake: 'No entres en pánico si el saldo no coincide exactamente con tu banco. Puede haber transacciones pendientes.',
        visualHelp: '📊 Click en cuenta → Ver movimientos'
      }
    ],

    celebration: {
      title: '🎉 ¡Excelente! Ya puedes monitorear tu dinero',
      message: 'Revisa tu tablero diariamente para mantener el control de tus finanzas.',
      nextSuggestion: 'Siguiente misión: "Conciliar Mi Cuenta Bancaria"'
    }
  },

  {
    id: 'mission-vehicle-service',
    title: '🚗 Programar Servicio de Vehículo',
    subtitle: 'Mantén tus vehículos de trabajo en buen estado',
    difficulty: 'Principiante',
    estimatedTime: '10 minutos',
    xpReward: 100,
    badge: 'Cuidador de Flota',
    category: 'flota',

    businessImportance: {
      title: '¿Por qué programar mantenimientos?',
      explanation: 'Un vehículo sin mantenimiento se daña más rápido y cuesta más repararlo. Programar servicios regulares (cambio de aceite, revisión de frenos, etc.) evita fallas graves y costosas.',
      realLifeExample: 'Cambiar el aceite cuesta €50. Si no lo haces y se daña el motor, la reparación puede costar €2,000 o más. Además, tu vehículo estará parado días sin poder trabajar.'
    },

    steps: [
      {
        id: 1,
        title: 'Ve al módulo de Flota',
        instruction: 'Haz clic en "Flota" en el menú principal.',
        whyThisMatters: 'Aquí gestionas todos tus vehículos de trabajo.',
        commonMistake: 'Si no ves "Flota", puede que no esté instalado. Contacta a tu administrador.',
        visualHelp: '📍 Menú Principal → Flota'
      },
      {
        id: 2,
        title: 'Selecciona el vehículo',
        instruction: 'Busca el vehículo que necesita servicio y haz clic en él.',
        whyThisMatters: 'Cada vehículo tiene su historial de mantenimiento independiente.',
        commonMistake: 'Asegúrate de seleccionar el vehículo correcto por su placa.',
        visualHelp: '🚙 Lista de vehículos → Click en el vehículo'
      },
      {
        id: 3,
        title: 'Agrega un servicio',
        instruction: 'Haz clic en "Registrar Servicio" o ve a la pestaña "Servicios". Luego "Crear".',
        whyThisMatters: 'Aquí registras qué servicio se hará y cuándo.',
        commonMistake: 'No confundas con "Contratos". Servicios son mantenimientos puntuales.',
        visualHelp: '🔧 Pestaña Servicios → Crear'
      },
      {
        id: 4,
        title: 'Completa los detalles',
        instruction: 'Indica: Tipo de servicio (ej: Cambio de aceite), Fecha programada, Kilometraje actual, Proveedor (taller mecánico).',
        whyThisMatters: 'El kilometraje te ayuda a saber cuándo toca el próximo servicio.',
        commonMistake: 'Anota el kilometraje correcto. Te recordará futuros mantenimientos.',
        visualHelp: '📝 Tipo → Fecha → Km → Proveedor → Costo estimado'
      },
      {
        id: 5,
        title: 'Guarda el servicio',
        instruction: 'Haz clic en "Guardar". El sistema te recordará cuando se acerque la fecha.',
        whyThisMatters: 'Nunca olvidarás un mantenimiento importante.',
        commonMistake: 'Recuerda actualizar el servicio cuando se complete con el costo real.',
        visualHelp: '💾 GUARDAR'
      }
    ],

    celebration: {
      title: '🎉 ¡Muy bien! Mantenimiento programado',
      message: 'Tus vehículos durarán más tiempo y tendrás menos gastos inesperados.',
      nextSuggestion: 'Siguiente misión: "Calcular Costos de Mi Flota"'
    }
  }
];

// Categorías de misiones con descripciones amigables
export const missionCategories = {
  ventas: {
    name: 'Ventas y Cobros',
    icon: '💰',
    description: 'Aprende a vender y cobrar correctamente',
    color: 'text-green-600 bg-green-50'
  },
  contabilidad: {
    name: 'Dinero y Finanzas',
    icon: '📊',
    description: 'Controla tu dinero y gastos',
    color: 'text-blue-600 bg-blue-50'
  },
  crm: {
    name: 'Clientes y Contactos',
    icon: '👥',
    description: 'Organiza la información de tus clientes',
    color: 'text-purple-600 bg-purple-50'
  },
  flota: {
    name: 'Vehículos',
    icon: '🚗',
    description: 'Cuida tus vehículos de trabajo',
    color: 'text-orange-600 bg-orange-50'
  },
  inventario: {
    name: 'Productos',
    icon: '📦',
    description: 'Maneja tu inventario',
    color: 'text-yellow-600 bg-yellow-50'
  }
};

// Rutas de aprendizaje sugeridas para diferentes tipos de negocios
export const learningPaths = {
  consultant: {
    name: 'Negocio de Servicios / Consultoría',
    description: 'Para profesionales que venden su conocimiento y tiempo',
    suggestedMissions: ['mission-register-client', 'mission-first-invoice', 'mission-check-money', 'mission-record-expense']
  },
  retail: {
    name: 'Tienda / Comercio',
    description: 'Para negocios que venden productos físicos',
    suggestedMissions: ['mission-register-client', 'mission-first-invoice', 'mission-record-expense', 'mission-bank-balance']
  },
  transport: {
    name: 'Transporte / Logística',
    description: 'Para negocios con vehículos de trabajo',
    suggestedMissions: ['mission-register-client', 'mission-vehicle-service', 'mission-first-invoice', 'mission-record-expense']
  }
};
