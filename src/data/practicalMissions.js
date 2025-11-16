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
  },

  {
    id: 'mission-first-product',
    title: '📦 Mi Primer Producto en Inventario',
    subtitle: 'Registra un producto para controlar cuántos tienes',
    difficulty: 'Principiante',
    estimatedTime: '12 minutos',
    xpReward: 120,
    badge: 'Controlador de Stock',
    category: 'inventario',

    businessImportance: {
      title: '¿Por qué necesitas registrar tus productos?',
      explanation: 'Sin registro de productos: 1) No sabes cuántos tienes realmente, 2) Te quedas sin stock y pierdes ventas, 3) Compras cosas que ya tienes, desperdiciando dinero. Con productos registrados en Odoo, sabes exactamente qué tienes, dónde está, y cuándo comprar más.',
      realLifeExample: 'Si vendes camisetas y no sabes cuántas tienes, podrías decirle a un cliente "sí tengo la talla M" y cuando la busques, ¡no hay! Perdiste la venta y la confianza del cliente.'
    },

    steps: [
      {
        id: 1,
        title: 'Ve al módulo de Inventario',
        instruction: 'Haz clic en "Inventario" en el menú principal. Es tu almacén digital.',
        whyThisMatters: 'Aquí controlarás todos tus productos: cuántos tienes, dónde están, y cuándo comprar más.',
        commonMistake: 'No confundas con "Compras". Inventario es para ver tu stock, Compras es para ordenar a proveedores.',
        visualHelp: '📍 Menú Principal → Inventario'
      },
      {
        id: 2,
        title: 'Crea un nuevo producto',
        instruction: 'Ve a Productos > Productos y haz clic en "Crear". Es como crear una ficha para ese producto.',
        whyThisMatters: 'Cada producto necesita su propia ficha con toda su información.',
        commonMistake: 'No te confundas con "Variantes de producto". Por ahora, crea productos simples.',
        visualHelp: '📦 Productos → Crear'
      },
      {
        id: 3,
        title: 'Pon un nombre claro',
        instruction: 'Escribe un nombre descriptivo. Ejemplo: "Camiseta Azul Talla M" es mejor que solo "Camiseta".',
        whyThisMatters: 'Un buen nombre te ayuda a encontrarlo rápido y evitar confusiones.',
        commonMistake: 'Nombres muy cortos como "Producto 1" no sirven. Sé específico.',
        visualHelp: '✏️ Nombre: "Camiseta Polo Azul Marino - Talla M"'
      },
      {
        id: 4,
        title: 'Elige el tipo de producto',
        instruction: 'Selecciona "Almacenable" si es algo físico que guardas. Esto le dice a Odoo que cuente las cantidades.',
        whyThisMatters: 'Los productos "Almacenables" son los que Odoo cuenta y te avisa cuando se acaban.',
        commonMistake: 'Si eliges "Consumible", Odoo no llevará cuenta. Elige "Almacenable" para controlar stock.',
        visualHelp: '📋 Tipo de producto → Almacenable (seleccionar)'
      },
      {
        id: 5,
        title: 'Agrega precio de venta',
        instruction: 'En "Precio de venta", pon cuánto cobras al cliente. En "Costo", pon cuánto te cuesta a ti.',
        whyThisMatters: 'Esto te ayuda a calcular tu ganancia y hacer facturas correctamente.',
        commonMistake: 'No confundas precio de venta con costo. El precio de venta es mayor porque incluye tu ganancia.',
        visualHelp: '💰 Precio de venta: $250 | Costo: $150'
      },
      {
        id: 6,
        title: 'Guarda el producto',
        instruction: 'Haz clic en "Guardar". ¡Tu producto ya está registrado!',
        whyThisMatters: 'Ahora puedes empezar a controlar cuántos tienes en stock.',
        commonMistake: 'Después de guardar, necesitarás hacer un "ajuste de inventario" para decirle a Odoo cuántos tienes actualmente.',
        visualHelp: '💾 GUARDAR → ¡Producto creado!'
      }
    ],

    celebration: {
      title: '🎉 ¡Excelente! Producto registrado',
      message: 'Ahora Odoo puede llevar la cuenta de cuántos tienes. El siguiente paso es decirle cuántos tienes actualmente.',
      nextSuggestion: 'Siguiente misión: "Ajustar Mi Inventario Inicial"'
    }
  },

  {
    id: 'mission-first-purchase',
    title: '🛍️ Mi Primera Orden de Compra',
    subtitle: 'Compra productos a tu proveedor de forma organizada',
    difficulty: 'Principiante',
    estimatedTime: '15 minutos',
    xpReward: 140,
    badge: 'Comprador Inteligente',
    category: 'compras',

    businessImportance: {
      title: '¿Por qué usar órdenes de compra?',
      explanation: 'Las órdenes de compra te ayudan a: 1) Tener registro de todo lo que pides, 2) Comparar precios de proveedores, 3) Saber cuándo llega tu pedido, 4) Controlar que te entreguen lo correcto. Sin esto, olvidas qué pediste y no puedes reclamar si algo está mal.',
      realLifeExample: 'Imagina que llamas al proveedor y pides "50 bolsas de cemento". Llegan 40 y te cobran 50. Si no tienes orden de compra, no puedes probar qué pediste exactamente.'
    },

    steps: [
      {
        id: 1,
        title: 'Abre el módulo de Compras',
        instruction: 'Haz clic en "Compras" en el menú principal. Es donde gestionas todo lo que compras a proveedores.',
        whyThisMatters: 'Aquí creas pedidos formales para tus proveedores.',
        commonMistake: 'No confundas con Inventario. Compras es para ordenar; Inventario es para ver lo que ya tienes.',
        visualHelp: '📍 Menú Principal → Compras'
      },
      {
        id: 2,
        title: 'Crea una solicitud de presupuesto',
        instruction: 'Haz clic en "Crear" para iniciar una nueva solicitud de presupuesto.',
        whyThisMatters: 'Empiezas pidiendo precio (solicitud). Cuando aceptas, se vuelve orden oficial.',
        commonMistake: 'Es normal que empieces como "solicitud". Después la conviertes en orden.',
        visualHelp: '🔵 CREAR → Nueva solicitud'
      },
      {
        id: 3,
        title: 'Selecciona tu proveedor',
        instruction: 'En el campo "Proveedor", escribe el nombre del proveedor al que le vas a comprar.',
        whyThisMatters: 'El sistema guardará el historial de compras con ese proveedor.',
        commonMistake: 'Si el proveedor no aparece, primero debes registrarlo en Contactos marcando que es "Proveedor".',
        visualHelp: '🏭 Proveedor → Escribe nombre → Selecciona'
      },
      {
        id: 4,
        title: 'Agrega los productos que necesitas',
        instruction: 'En "Productos", haz clic en "Agregar línea". Selecciona el producto, cantidad y precio.',
        whyThisMatters: 'Aquí detallas exactamente qué necesitas comprar y cuánto.',
        commonMistake: 'Verifica que el precio sea el correcto. Pregunta a tu proveedor si no estás seguro.',
        visualHelp: '📝 Agregar línea → Producto → Cantidad → Precio unitario'
      },
      {
        id: 5,
        title: 'Confirma la orden',
        instruction: 'Revisa que todo esté bien y haz clic en "Confirmar Pedido". Esto convierte la solicitud en orden oficial.',
        whyThisMatters: 'Una vez confirmado, es tu compromiso de compra. Puedes imprimir la orden para enviarla al proveedor.',
        commonMistake: 'Revisa dos veces: productos, cantidades y precios. Después de confirmar es más difícil cambiar.',
        visualHelp: '✅ Revisar → CONFIRMAR PEDIDO → Orden creada'
      }
    ],

    celebration: {
      title: '🎉 ¡Perfecto! Orden de compra creada',
      message: 'Ahora tienes registro formal de tu pedido. Cuando llegue, podrás verificar que todo esté correcto.',
      nextSuggestion: 'Siguiente misión: "Recibir Mi Pedido en Almacén"'
    }
  },

  {
    id: 'mission-crm-opportunity',
    title: '🎯 Convertir Interesado en Oportunidad',
    subtitle: 'Cuando alguien muestra interés real, conviértelo en oportunidad de venta',
    difficulty: 'Principiante',
    estimatedTime: '10 minutos',
    xpReward: 130,
    badge: 'Cazador de Oportunidades',
    category: 'crm',

    businessImportance: {
      title: '¿Por qué convertir leads en oportunidades?',
      explanation: 'Un "Lead" es alguien que apenas mostró interés. Una "Oportunidad" es alguien que realmente puede comprarte. Al convertir, le dices a Odoo: "Este cliente va en serio, quiero darle seguimiento especial". Te ayuda a enfocarte en los que sí van a comprar.',
      realLifeExample: 'Si 10 personas te piden información pero solo 3 realmente quieren comprar, enfocarte en esas 3 te ahorra tiempo y aumenta tus ventas.'
    },

    steps: [
      {
        id: 1,
        title: 'Abre el CRM',
        instruction: 'Ve a CRM en el menú principal. Aquí están todos tus leads y oportunidades.',
        whyThisMatters: 'El CRM es tu centro de control de ventas.',
        commonMistake: 'CRM no es solo para empresas grandes. Cualquier negocio se beneficia de dar buen seguimiento.',
        visualHelp: '📍 Menú Principal → CRM'
      },
      {
        id: 2,
        title: 'Busca el lead que quieres convertir',
        instruction: 'En la lista de Leads, busca a la persona que ya confirmaste que tiene interés real en comprar.',
        whyThisMatters: 'Solo conviertes los que realmente van a comprar, no todos los que preguntan.',
        commonMistake: 'No conviertas leads solo por convertir. Primero confirma que tienen presupuesto y necesidad real.',
        visualHelp: '🔍 Leads → Buscar cliente interesado'
      },
      {
        id: 3,
        title: 'Haz clic en "Convertir a Oportunidad"',
        instruction: 'Abre el lead y busca el botón "Convertir a Oportunidad". Haz clic en él.',
        whyThisMatters: 'Este es el momento donde dices: "Este cliente va en serio".',
        commonMistake: 'El botón puede estar arriba o en el menú de acciones. Búscalo bien.',
        visualHelp: '🔄 Botón "Convertir a Oportunidad"'
      },
      {
        id: 4,
        title: 'Estima el valor de la venta',
        instruction: 'Pon cuánto crees que va a comprar el cliente. Ejemplo: Si es un servicio mensual de $500, pon $500.',
        whyThisMatters: 'Esto te ayuda a priorizar: una oportunidad de $10,000 merece más atención que una de $100.',
        commonMistake: 'No pongas un valor inventado. Estima basándote en lo que el cliente dijo que necesita.',
        visualHelp: '💵 Valor esperado: $____'
      },
      {
        id: 5,
        title: 'Guarda la oportunidad',
        instruction: 'Confirma y guarda. Ahora aparecerá en tu Pipeline como una oportunidad activa.',
        whyThisMatters: 'El Pipeline te muestra visualmente en qué etapa está cada venta.',
        commonMistake: 'Recuerda programar la siguiente actividad: ¿Cuándo lo contactarás de nuevo?',
        visualHelp: '💾 GUARDAR → Ver en Pipeline'
      }
    ],

    celebration: {
      title: '🎉 ¡Genial! Oportunidad creada',
      message: 'Ahora tienes una venta potencial bien identificada. Dale seguimiento y cierra esa venta.',
      nextSuggestion: 'Siguiente misión: "Enviar Cotización al Cliente"'
    }
  },

  {
    id: 'mission-add-employee',
    title: '👤 Registrar Mi Primer Empleado',
    subtitle: 'Organiza la información de tu equipo de trabajo',
    difficulty: 'Principiante',
    estimatedTime: '10 minutos',
    xpReward: 110,
    badge: 'Gestor de Equipo',
    category: 'rrhh',

    businessImportance: {
      title: '¿Por qué registrar empleados en el sistema?',
      explanation: 'Tener empleados registrados te permite: 1) Tener sus datos de contacto siempre disponibles, 2) Asignarles tareas y responsabilidades, 3) Calcular nómina y vacaciones, 4) Cumplir con requisitos legales. Sin esto, pierdes información importante y es difícil gestionar tu equipo.',
      realLifeExample: 'Si tienes 5 empleados y no recuerdas cuándo contrataste a cada uno, no sabrás cuándo les toca vacaciones o aumento. Odoo te lo recuerda todo.'
    },

    steps: [
      {
        id: 1,
        title: 'Ve al módulo de Empleados',
        instruction: 'Haz clic en "Empleados" en el menú principal. Es tu directorio de personal.',
        whyThisMatters: 'Aquí gestionas toda la información de tu equipo de trabajo.',
        commonMistake: 'No confundas con "Contactos". Empleados es específico para tu personal.',
        visualHelp: '📍 Menú Principal → Empleados'
      },
      {
        id: 2,
        title: 'Crea un nuevo empleado',
        instruction: 'Haz clic en "Crear" para agregar a alguien de tu equipo.',
        whyThisMatters: 'Cada persona de tu equipo tendrá su ficha con toda su información.',
        commonMistake: 'Incluso si solo tienes 1-2 empleados, vale la pena registrarlos.',
        visualHelp: '🔵 CREAR → Nueva ficha de empleado'
      },
      {
        id: 3,
        title: 'Llena la información básica',
        instruction: 'Pon nombre completo, cargo (puesto de trabajo), y departamento al que pertenece.',
        whyThisMatters: 'Esto te ayuda a organizar quién hace qué en tu empresa.',
        commonMistake: 'Sé específico con el cargo. "Vendedor" es mejor que solo "Empleado".',
        visualHelp: '✏️ Nombre → Cargo → Departamento'
      },
      {
        id: 4,
        title: 'Agrega información de contacto',
        instruction: 'Pon teléfono de trabajo, email, y un contacto de emergencia (familiar).',
        whyThisMatters: 'Necesitas poder contactarlo y saber a quién llamar en caso de emergencia.',
        commonMistake: 'El contacto de emergencia es muy importante. No lo dejes vacío.',
        visualHelp: '📞 Teléfono → Email → Contacto emergencia'
      },
      {
        id: 5,
        title: 'Guarda el empleado',
        instruction: 'Haz clic en "Guardar". ¡El empleado ya está registrado!',
        whyThisMatters: 'Ahora tienes su información organizada y disponible.',
        commonMistake: 'Después puedes agregar más info: contrato, salario, vacaciones, etc.',
        visualHelp: '💾 GUARDAR → Empleado registrado'
      }
    ],

    celebration: {
      title: '🎉 ¡Muy bien! Empleado registrado',
      message: 'Tu equipo está más organizado. Ahora puedes gestionar mejor a tu personal.',
      nextSuggestion: 'Siguiente misión: "Crear Contrato de Trabajo"'
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
  },
  compras: {
    name: 'Compras',
    icon: '🛍️',
    description: 'Gestiona tus proveedores y pedidos',
    color: 'text-teal-600 bg-teal-50'
  },
  rrhh: {
    name: 'Recursos Humanos',
    icon: '👥',
    description: 'Administra tu equipo de trabajo',
    color: 'text-indigo-600 bg-indigo-50'
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
