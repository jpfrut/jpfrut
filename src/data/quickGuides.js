// Guías Rápidas - Usos Frecuentes del Día a Día
// Para usuarios que necesitan resolver tareas comunes sin complicarse

export const dailyTasks = {
  // Tareas que se hacen TODOS LOS DÍAS
  daily: {
    title: '📅 Lo que haces TODOS LOS DÍAS',
    description: 'Tareas que deberías revisar diariamente para mantener tu negocio al día',
    tasks: [
      {
        id: 'daily-check-pending',
        name: 'Revisar facturas pendientes de cobro',
        timeNeeded: '2 minutos',
        frequency: 'Cada mañana',
        whyImportant: 'Para saber si alguien te debe dinero y cobrar a tiempo',
        quickPath: 'Facturación → Tablero → Ver facturas por cobrar',
        tip: '💡 Hazlo cada mañana con tu café. Solo toma 2 minutos pero te mantiene informado.'
      },
      {
        id: 'daily-check-cash',
        name: 'Ver el saldo de tus cuentas',
        timeNeeded: '1 minuto',
        frequency: 'Cada mañana',
        whyImportant: 'Para saber cuánto dinero tienes disponible hoy',
        quickPath: 'Facturación → Tablero → Ver saldos de bancos',
        tip: '💡 Si el saldo es bajo, revisa qué cobros puedes acelerar.'
      },
      {
        id: 'daily-new-messages',
        name: 'Revisar mensajes y actividades',
        timeNeeded: '3 minutos',
        frequency: 'Cada mañana',
        whyImportant: 'Para no perderte recordatorios importantes',
        quickPath: 'Icono de campana (arriba a la derecha)',
        tip: '💡 Odoo te recuerda automáticamente llamadas, vencimientos y tareas pendientes.'
      }
    ]
  },

  // Tareas SEMANALES
  weekly: {
    title: '📆 Lo que haces CADA SEMANA',
    description: 'Revisa estas cosas una vez por semana para mantener todo organizado',
    tasks: [
      {
        id: 'weekly-reconcile',
        name: 'Conciliar cuentas bancarias',
        timeNeeded: '15-30 minutos',
        frequency: 'Viernes o lunes',
        whyImportant: 'Para asegurarte que tus números coinciden con el banco',
        quickPath: 'Facturación → Tablero → Conciliar (botón en cada cuenta)',
        tip: '💡 Es más fácil si lo haces cada semana. Si esperas un mes, tendrás muchos movimientos.'
      },
      {
        id: 'weekly-overdue',
        name: 'Revisar facturas vencidas',
        timeNeeded: '10 minutos',
        frequency: 'Lunes',
        whyImportant: 'Para cobrar a clientes morosos antes de que se olviden',
        quickPath: 'Facturación → Informes → Cuentas por cobrar vencidas',
        tip: '💡 Llama a los clientes con más de 15 días de atraso. Después de 30 días es más difícil cobrar.'
      },
      {
        id: 'weekly-pending-invoices',
        name: 'Facturar trabajos completados',
        timeNeeded: '20 minutos',
        frequency: 'Fin de semana',
        whyImportant: 'No dejes servicios sin cobrar. Mientras más tardas, más se olvidan.',
        quickPath: 'Ventas → Pedidos → Pedidos para facturar',
        tip: '💡 Todo trabajo terminado debe facturarse en máximo 7 días.'
      }
    ]
  },

  // Tareas MENSUALES
  monthly: {
    title: '📊 Lo que haces CADA MES',
    description: 'Cierres y revisiones mensuales importantes',
    tasks: [
      {
        id: 'monthly-reports',
        name: 'Revisar reportes de ganancias',
        timeNeeded: '30 minutos',
        frequency: 'Primeros días del mes',
        whyImportant: 'Para saber si tu negocio está ganando o perdiendo dinero',
        quickPath: 'Contabilidad → Informes → Estado de Resultados',
        tip: '💡 Compara con el mes anterior. Si ganaste menos, investiga por qué.'
      },
      {
        id: 'monthly-expenses',
        name: 'Revisar todos los gastos del mes',
        timeNeeded: '20 minutos',
        frequency: 'Fin de mes',
        whyImportant: 'Para ver en qué se fue tu dinero y reducir gastos innecesarios',
        quickPath: 'Facturación → Proveedores → Filtrar por mes',
        tip: '💡 ¿Hay gastos que puedes eliminar o reducir? Pequeños ahorros suman mucho.'
      },
      {
        id: 'monthly-fleet-costs',
        name: 'Revisar costos de vehículos',
        timeNeeded: '15 minutos',
        frequency: 'Fin de mes',
        whyImportant: 'Para saber cuánto te cuestan tus vehículos realmente',
        quickPath: 'Flota → Informes → Costos por vehículo',
        tip: '💡 Un vehículo muy costoso podría no valer la pena. Compara costos entre vehículos.'
      }
    ]
  }
};

// Preguntas Frecuentes - Primeros Auxilios
export const commonQuestions = [
  {
    id: 'faq-1',
    question: '¿Cómo cancelo una factura que ya confirmé?',
    shortAnswer: 'No puedes borrarla, pero puedes hacer una Nota de Crédito que la anula.',
    detailedAnswer: 'En contabilidad, una factura confirmada es un documento legal que no puede borrarse. La solución correcta es crear una "Nota de Crédito" que es como una factura negativa que cancela la original. Ve a la factura → Crear nota de crédito → Confirmar.',
    warningLevel: 'medium',
    relatedTopic: 'facturación'
  },
  {
    id: 'faq-2',
    question: '¿Por qué no puedo borrar un contacto?',
    shortAnswer: 'Porque ya tiene facturas o transacciones asociadas.',
    detailedAnswer: 'Si un contacto tiene historial (facturas, pagos, pedidos), Odoo no te deja borrarlo para mantener tus registros completos. Puedes "Archivar" el contacto en lugar de borrarlo. Esto lo oculta sin perder el historial.',
    warningLevel: 'low',
    relatedTopic: 'contactos'
  },
  {
    id: 'faq-3',
    question: '¿Qué hago si mis números no coinciden con el banco?',
    shortAnswer: 'Necesitas conciliar tu cuenta bancaria.',
    detailedAnswer: 'Es normal que haya pequeñas diferencias. Pueden ser: 1) Transacciones que aún no registraste, 2) Cheques que no han sido cobrados, 3) Comisiones del banco. La conciliación bancaria te ayuda a encontrar y corregir estas diferencias.',
    warningLevel: 'medium',
    relatedTopic: 'contabilidad'
  },
  {
    id: 'faq-4',
    question: '¿Cómo veo cuánto he vendido este mes?',
    shortAnswer: 'Ve a Ventas → Informes → Análisis de ventas.',
    detailedAnswer: 'En el menú de Ventas encontrarás reportes que te muestran: ventas totales, por cliente, por producto, por vendedor. Puedes filtrar por fechas para ver solo el mes actual. También puedes ver gráficos que te ayudan a entender mejor.',
    warningLevel: 'low',
    relatedTopic: 'ventas'
  },
  {
    id: 'faq-5',
    question: '¿Qué pasa si ingreso mal el precio en una factura?',
    shortAnswer: 'Depende: si no está confirmada, corrígela. Si está confirmada, haz nota de crédito.',
    detailedAnswer: 'ANTES de confirmar: simplemente edita el precio. DESPUÉS de confirmar: debes crear una nota de crédito para anular la factura incorrecta y luego crear una nueva con el precio correcto. Por eso es importante revisar todo ANTES de confirmar.',
    warningLevel: 'high',
    relatedTopic: 'facturación'
  },
  {
    id: 'faq-6',
    question: '¿Cómo agrego un nuevo usuario al sistema?',
    shortAnswer: 'Configuración → Usuarios → Crear nuevo usuario.',
    detailedAnswer: 'Solo los administradores pueden agregar usuarios. Ve a Configuración → Usuarios y Compañías → Usuarios → Crear. Importante: define bien los permisos. No todos necesitan acceso a todo. Por ejemplo, un vendedor no necesita ver la contabilidad.',
    warningLevel: 'medium',
    relatedTopic: 'configuración'
  },
  {
    id: 'faq-7',
    question: '¿Por qué tarda en cargar el sistema?',
    shortAnswer: 'Puede ser tu internet, el navegador, o muchos datos abiertos.',
    detailedAnswer: 'Consejos: 1) Cierra pestañas del navegador que no uses, 2) Usa Chrome o Firefox actualizados, 3) Borra el caché del navegador, 4) Verifica tu conexión a internet. Si sigue lento, contacta a tu proveedor de Odoo.',
    warningLevel: 'low',
    relatedTopic: 'técnico'
  },
  {
    id: 'faq-8',
    question: '¿Cómo exporto mis datos a Excel?',
    shortAnswer: 'En cualquier lista, haz clic en el icono de descarga.',
    detailedAnswer: 'Odoo permite exportar casi cualquier información a Excel. Ve a la lista que quieres exportar (ej: lista de clientes), selecciona los registros (o usa "Seleccionar todo"), haz clic en el menú Acción → Exportar. Puedes elegir qué campos incluir.',
    warningLevel: 'low',
    relatedTopic: 'general'
  }
];

// Glosario de términos en lenguaje simple
export const glossary = {
  'Factura': 'Documento que dice cuánto debe pagarte un cliente. Es tu comprobante de venta.',
  'Nota de Crédito': 'Documento que anula o reduce una factura. Es como una factura "negativa".',
  'Conciliación': 'Verificar que tus registros coincidan con el extracto del banco.',
  'Cuenta por Cobrar': 'Dinero que tus clientes te deben.',
  'Cuenta por Pagar': 'Dinero que tú debes a tus proveedores.',
  'Proveedor': 'Empresa o persona a quien le compras productos o servicios.',
  'Cliente': 'Empresa o persona a quien le vendes.',
  'Pedido': 'Solicitud de compra. Antes de ser factura.',
  'Cotización': 'Propuesta de precio que envías al cliente. Si acepta, se convierte en pedido.',
  'IVA': 'Impuesto al Valor Agregado. Porcentaje que agregas al precio y debes pagar al gobierno.',
  'Estado de Resultados': 'Reporte que muestra si ganaste o perdiste dinero en un período.',
  'Balance General': 'Reporte que muestra todo lo que tienes (activos) y todo lo que debes (pasivos).',
  'Flujo de Caja': 'Movimiento del dinero: cuánto entra y cuánto sale.',
  'Arqueo': 'Contar el dinero físico y compararlo con lo que dice el sistema.',
  'Backup': 'Copia de seguridad de tus datos. Por si algo sale mal.',
  'Dashboard': 'Tablero o pantalla principal con resumen de información importante.',
  'Pipeline': 'Embudo de ventas. Muestra en qué etapa está cada oportunidad de venta.',
  'Lead': 'Posible cliente. Alguien interesado pero que aún no ha comprado.',
  'Oportunidad': 'Lead que tiene alta probabilidad de convertirse en venta.',
  'Presupuesto': 'Estimación de cuánto gastarás. Plan financiero.',
  'Depreciación': 'Pérdida de valor de un activo (como un carro) con el tiempo.'
};

// Señales de alerta - Cuándo preocuparse
export const warningSignals = [
  {
    signal: '🔴 Más de 30% de tus facturas están vencidas',
    meaning: 'Tienes problemas de cobro. Necesitas mejorar tu proceso de cobranza.',
    action: 'Revisa tus cuentas por cobrar esta semana y contacta a los clientes morosos.',
    urgency: 'alta'
  },
  {
    signal: '🔴 Tu saldo bancario está bajando cada mes',
    meaning: 'Gastas más de lo que ganas. Tu negocio podría tener problemas.',
    action: 'Revisa tus gastos y busca qué puedes reducir. Considera aumentar precios.',
    urgency: 'alta'
  },
  {
    signal: '🟡 No has conciliado el banco en más de 2 semanas',
    meaning: 'Tus números podrían no ser precisos. Podrías tener sorpresas.',
    action: 'Dedica 30 minutos esta semana para conciliar.',
    urgency: 'media'
  },
  {
    signal: '🟡 Tienes pedidos de venta sin facturar por más de 7 días',
    meaning: 'Estás regalando tu trabajo. Dinero que podrías tener en tu bolsillo.',
    action: 'Factura todos los trabajos completados antes del viernes.',
    urgency: 'media'
  },
  {
    signal: '🟢 Tu cliente más grande representa más del 50% de tus ventas',
    meaning: 'Riesgo de concentración. Si ese cliente se va, pierdes la mitad de ingresos.',
    action: 'Busca nuevos clientes para diversificar tu cartera.',
    urgency: 'baja'
  }
];
