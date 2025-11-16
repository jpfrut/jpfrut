// Preguntas Frecuentes completas con respuestas detalladas
// Organizado por categorías para usuarios sin experiencia técnica

export const faqCategories = [
  {
    id: 'getting-started',
    name: 'Primeros Pasos',
    icon: '🚀',
    description: 'Lo básico para comenzar'
  },
  {
    id: 'invoicing',
    name: 'Facturas y Cobros',
    icon: '💰',
    description: 'Todo sobre facturación'
  },
  {
    id: 'inventory',
    name: 'Inventario',
    icon: '📦',
    description: 'Control de productos'
  },
  {
    id: 'contacts',
    name: 'Clientes y Contactos',
    icon: '👥',
    description: 'Gestión de contactos'
  },
  {
    id: 'common-errors',
    name: 'Errores Comunes',
    icon: '⚠️',
    description: 'Soluciones a problemas'
  },
  {
    id: 'tips',
    name: 'Consejos Útiles',
    icon: '💡',
    description: 'Trucos para trabajar mejor'
  }
]

export const faqData = [
  // PRIMEROS PASOS
  {
    id: 'faq-1',
    category: 'getting-started',
    question: '¿Qué hago si me equivoco y quiero deshacer algo?',
    answer: `
      ¡No te preocupes! Casi todo se puede corregir en Odoo:

      **Si creaste algo por error:**
      - Busca el botón "Archivar" o "Cancelar" en lugar de "Borrar"
      - Los elementos archivados se pueden recuperar después

      **Si escribiste mal un dato:**
      - Haz clic en el campo y edítalo directamente
      - Guarda los cambios con el botón "Guardar"

      **Si confirmaste algo sin querer:**
      - La mayoría de documentos tienen botón "Cancelar"
      - Luego puedes "Restablecer a borrador" y editar

      **Importante:** Odoo guarda historial de cambios, así que siempre puedes ver qué se modificó y cuándo.
    `,
    relatedQuestions: ['faq-5', 'faq-22']
  },
  {
    id: 'faq-2',
    category: 'getting-started',
    question: '¿Por qué no puedo ver ciertas opciones o menús?',
    answer: `
      Esto puede pasar por varias razones:

      **1. No tienes los permisos necesarios:**
      - Tu administrador controla qué puedes ver y hacer
      - Pídele que te dé acceso a esa sección

      **2. El módulo no está instalado:**
      - Ve a Aplicaciones y busca el módulo que necesitas
      - Instálalo con un clic

      **3. Estás en modo usuario básico:**
      - Ve a Configuración > Usuarios
      - Activa el "Modo desarrollador" si necesitas opciones avanzadas

      **4. Estás en la empresa equivocada:**
      - Si tienes múltiples empresas, verifica cuál está seleccionada arriba
    `,
    relatedQuestions: ['faq-3']
  },
  {
    id: 'faq-3',
    category: 'getting-started',
    question: '¿Cómo busco algo rápidamente?',
    answer: `
      Odoo tiene varias formas de buscar:

      **Barra de búsqueda superior (favorito):**
      - Presiona "/" en cualquier momento para activarla
      - Escribe lo que buscas: cliente, factura, producto...
      - Busca en TODA la aplicación

      **Filtros en cada lista:**
      - Cada pantalla tiene una barra de búsqueda propia
      - Usa "Filtros" para opciones predefinidas
      - Usa "Agrupar por" para organizar los resultados

      **Favoritos:**
      - Guarda búsquedas que uses mucho
      - Están disponibles con un clic después

      **Truco rápido:** En el campo de búsqueda, escribe parte del nombre y Odoo mostrará coincidencias automáticamente.
    `,
    relatedQuestions: ['faq-2']
  },

  // FACTURAS Y COBROS
  {
    id: 'faq-10',
    category: 'invoicing',
    question: '¿Cómo creo una factura sin equivocarme?',
    answer: `
      Sigue estos pasos simples:

      **1. Ve a Facturación > Clientes > Facturas**

      **2. Haz clic en "Crear"**

      **3. Llena estos campos obligatorios:**
      - Cliente: Selecciona a quién le cobras
      - Fecha de factura: Normalmente es hoy
      - Líneas: Agrega lo que vendiste con cantidad y precio

      **4. REVISA TODO antes de confirmar:**
      - ¿El cliente es correcto?
      - ¿Los productos/servicios están bien?
      - ¿Los precios son correctos?
      - ¿El total tiene sentido?

      **5. Haz clic en "Confirmar"**

      **Si te equivocaste después de confirmar:**
      - Puedes crear una "Nota de crédito" para corregir
      - Ve a la factura > Crear nota de crédito
    `,
    relatedQuestions: ['faq-11', 'faq-12']
  },
  {
    id: 'faq-11',
    category: 'invoicing',
    question: '¿Cómo registro un pago que me hicieron?',
    answer: `
      **Método 1: Desde la factura (recomendado)**
      1. Abre la factura que te pagaron
      2. Haz clic en "Registrar pago"
      3. Indica: Fecha, monto, método de pago (efectivo, banco, etc.)
      4. Guardar

      **Método 2: Desde el banco**
      1. Ve a Contabilidad > Banco
      2. Importa tu extracto bancario
      3. Odoo relaciona pagos con facturas automáticamente

      **Pagos parciales:**
      - Si te pagan menos del total, registra solo lo que recibiste
      - La factura quedará como "Parcialmente pagada"
      - Cuando paguen el resto, registra otro pago

      **Truco:** El estado de la factura cambia automáticamente a "Pagado" cuando el monto coincide.
    `,
    relatedQuestions: ['faq-10', 'faq-13']
  },
  {
    id: 'faq-12',
    category: 'invoicing',
    question: '¿Qué son los impuestos y cómo los configuro?',
    answer: `
      **¿Qué es el IVA/IGV/Impuesto?**
      Es un porcentaje extra que se cobra al cliente y se paga al gobierno.

      **¿Cómo lo configura Odoo?**
      - Odoo viene con impuestos predeterminados de tu país
      - Se aplican automáticamente a tus productos

      **Para verificar:**
      1. Ve a Contabilidad > Configuración > Impuestos
      2. Verás la lista de impuestos disponibles
      3. Cada uno tiene un porcentaje (ej: 16%, 21%)

      **En tus productos:**
      - Cada producto tiene asignado qué impuesto usa
      - Se aplica automáticamente en facturas

      **Importante:**
      - Los impuestos se calculan solos, no los escribas manual
      - Si ves que el impuesto está mal, revisa la configuración del producto
    `,
    relatedQuestions: ['faq-10']
  },
  {
    id: 'faq-13',
    category: 'invoicing',
    question: '¿Cómo veo quién me debe dinero?',
    answer: `
      **Vista rápida:**
      1. Ve a Facturación > Clientes > Facturas
      2. Filtra por estado "Pendiente" o "Vencido"
      3. Ahí ves todas las facturas sin pagar

      **Reporte detallado:**
      1. Ve a Contabilidad > Reportes > Cuentas por Cobrar
      2. Muestra cada cliente y cuánto debe
      3. Incluye facturas vencidas (marcadas en rojo)

      **Enviar recordatorio:**
      1. Desde la factura pendiente
      2. Haz clic en "Enviar por email"
      3. Odoo manda un recordatorio al cliente

      **Truco:** Configura recordatorios automáticos en Configuración > Seguimiento de pagos
    `,
    relatedQuestions: ['faq-11']
  },

  // INVENTARIO
  {
    id: 'faq-20',
    category: 'inventory',
    question: '¿Cómo sé cuántos productos me quedan?',
    answer: `
      **Ver stock de UN producto:**
      1. Ve a Inventario > Productos
      2. Busca el producto
      3. Verás "Disponible: X unidades"
      4. Haz clic para ver dónde están guardados

      **Ver stock de TODOS:**
      1. Ve a Inventario > Reportes > Stock
      2. Muestra lista completa con cantidades
      3. Puedes filtrar por categoría, ubicación, etc.

      **Alertas de stock bajo:**
      - Configura un "mínimo" para cada producto
      - Odoo te avisa cuando quede poco
      - Ve a producto > pestaña "Inventario" > "Regla de reordenamiento"

      **Actualizar cantidades manualmente:**
      - Usa "Ajuste de inventario" cuando cuentes físicamente
      - Esto corrige diferencias entre sistema y realidad
    `,
    relatedQuestions: ['faq-21', 'faq-22']
  },
  {
    id: 'faq-21',
    category: 'inventory',
    question: '¿Cómo agrego productos que acabo de recibir?',
    answer: `
      **Si compraste con Orden de Compra:**
      1. Ve a Compras > Pedidos
      2. Busca la orden del proveedor
      3. Haz clic en "Recibir"
      4. Confirma las cantidades que llegaron
      5. El stock se actualiza solo

      **Si recibiste sin orden previa:**
      1. Ve a Inventario > Operaciones > Recepción
      2. Crea una nueva recepción
      3. Indica qué productos llegaron y cuántos
      4. Valida la operación

      **Si solo quieres ajustar cantidad:**
      1. Ve a Inventario > Operaciones > Ajustes
      2. Crea nuevo ajuste
      3. Selecciona producto y nueva cantidad
      4. Guarda

      **Importante:** Siempre registra de dónde vino el producto para tener trazabilidad.
    `,
    relatedQuestions: ['faq-20']
  },
  {
    id: 'faq-22',
    category: 'inventory',
    question: '¿Por qué mi inventario no coincide con lo que tengo?',
    answer: `
      **Causas comunes:**

      1. **Ventas no registradas:**
      - Vendiste algo pero no lo registraste en el sistema
      - Solución: Registra todas las ventas

      2. **Recepciones no registradas:**
      - Llegó mercancía pero no la ingresaste
      - Solución: Registra todas las entradas

      3. **Productos dañados/perdidos:**
      - Robos, roturas, vencimientos no registrados
      - Solución: Haz ajustes de inventario periódicos

      4. **Errores de conteo inicial:**
      - Al empezar, pusiste cantidades incorrectas
      - Solución: Haz un inventario físico y ajusta

      **Cómo corregirlo:**
      1. Cuenta físicamente tu stock
      2. Ve a Inventario > Ajustes de inventario
      3. Compara con lo que dice el sistema
      4. Ajusta las diferencias

      **Prevención:** Haz inventarios físicos cada mes o trimestre.
    `,
    relatedQuestions: ['faq-20', 'faq-21']
  },

  // CONTACTOS Y CLIENTES
  {
    id: 'faq-30',
    category: 'contacts',
    question: '¿Cuál es la diferencia entre Cliente, Proveedor y Contacto?',
    answer: `
      **Contacto:**
      - Es cualquier persona o empresa
      - Puede ser cliente, proveedor, o ambos
      - Es la ficha base de información

      **Cliente:**
      - Es un contacto al que le VENDES
      - Le haces facturas y cobras
      - En su ficha marca "Es un cliente"

      **Proveedor:**
      - Es un contacto al que le COMPRAS
      - Te vende productos/servicios
      - En su ficha marca "Es un proveedor"

      **Un contacto puede ser AMBOS:**
      - Por ejemplo: Una imprenta puede ser:
        - Cliente: cuando te compra diseños
        - Proveedor: cuando le compras impresiones

      **Cómo configurarlo:**
      1. Ve a Contactos > Crear
      2. Llena los datos
      3. En las pestañas, marca si es cliente/proveedor
    `,
    relatedQuestions: ['faq-31']
  },
  {
    id: 'faq-31',
    category: 'contacts',
    question: '¿Cómo guardo varios contactos de la misma empresa?',
    answer: `
      Odoo maneja esto con "Contactos relacionados":

      **1. Primero crea la EMPRESA:**
      - Ve a Contactos > Crear
      - Selecciona tipo "Empresa"
      - Llena: Nombre, dirección, teléfono, etc.

      **2. Luego agrega las PERSONAS:**
      - Abre la ficha de la empresa
      - Ve a pestaña "Contactos y direcciones"
      - Haz clic en "Agregar"
      - Crea cada persona: nombre, cargo, email, teléfono

      **Ejemplo:**
      - Empresa: "Panadería La Estrella"
        - María García (Gerente) - maria@...
        - Juan López (Compras) - juan@...
        - Ana Ruiz (Contabilidad) - ana@...

      **Ventaja:**
      - Cuando factures a la empresa, puedes elegir a qué persona enviar
      - Cada persona tiene su propio email y teléfono
    `,
    relatedQuestions: ['faq-30']
  },

  // ERRORES COMUNES
  {
    id: 'faq-40',
    category: 'common-errors',
    question: '"Error: No tienes acceso" - ¿Qué hago?',
    answer: `
      Este error significa que tu usuario no tiene permisos para esa acción.

      **Soluciones:**

      1. **Habla con tu administrador:**
      - Él puede darte acceso a esa función
      - Es la forma más directa

      2. **Verifica tu rol:**
      - Ve a tu perfil de usuario
      - Mira qué permisos tienes asignados
      - Compara con lo que necesitas

      3. **Verifica la empresa:**
      - Si hay múltiples empresas, ¿estás en la correcta?
      - Cambia la empresa activa en el menú superior

      **No intentes:**
      - Crear otro usuario para evitar el error
      - Modificar configuraciones de seguridad sin saber

      **Por qué existe:** Los permisos protegen información sensible y evitan errores accidentales.
    `,
    relatedQuestions: ['faq-2']
  },
  {
    id: 'faq-41',
    category: 'common-errors',
    question: '"Campo obligatorio" - ¿Por qué no me deja guardar?',
    answer: `
      Odoo requiere cierta información mínima para guardar.

      **Cómo identificar campos obligatorios:**
      - Tienen un asterisco rojo (*) o borde rojo
      - El error te dice qué campo falta
      - Están generalmente al inicio del formulario

      **Campos comunes obligatorios:**
      - En facturas: Cliente, al menos una línea de producto
      - En productos: Nombre, Tipo de producto
      - En contactos: Nombre o Empresa
      - En compras: Proveedor

      **Si no sabes qué poner:**
      - Lee la descripción del campo (pasa el mouse encima)
      - Pon algo temporal y edítalo después
      - No uses valores inventados en campos importantes (como RFC/NIF)

      **Truco:** Si realmente no tienes el dato, pregunta si es posible hacerlo opcional en la configuración.
    `,
    relatedQuestions: ['faq-40']
  },
  {
    id: 'faq-42',
    category: 'common-errors',
    question: '¿Puedo borrar una factura que ya confirmé?',
    answer: `
      **Respuesta corta: No directamente, pero hay solución.**

      **Por qué no se puede borrar:**
      - Las facturas confirmadas son documentos legales
      - Tienen número fiscal consecutivo
      - Borrarlas dejaría huecos en la numeración

      **La solución correcta:**
      1. Crea una "Nota de Crédito"
      2. Ve a la factura > "Crear nota de crédito"
      3. Selecciona "Cancelación completa"
      4. Confirma la nota de crédito

      **Resultado:**
      - La factura original queda anulada
      - La nota de crédito la "cancela" legalmente
      - Todo queda registrado para auditoría

      **Prevención:**
      - SIEMPRE revisa antes de confirmar
      - Si tienes dudas, guarda como borrador primero
    `,
    relatedQuestions: ['faq-10', 'faq-1']
  },

  // CONSEJOS ÚTILES
  {
    id: 'faq-50',
    category: 'tips',
    question: '¿Cómo puedo trabajar más rápido en Odoo?',
    answer: `
      **Atajos de teclado útiles:**
      - "/" : Abrir búsqueda global
      - Ctrl + S : Guardar
      - Ctrl + K : Crear nuevo
      - Alt + Q : Abrir menú de apps

      **Trucos de productividad:**

      1. **Favoritos:**
      - Guarda vistas que usas mucho
      - Un clic para acceder

      2. **Filtros guardados:**
      - Crea filtros personalizados
      - Guárdalos para reusar

      3. **Vistas personalizadas:**
      - Cambia entre lista, kanban, calendario
      - Cada una sirve para algo diferente

      4. **Acciones masivas:**
      - Selecciona varios registros
      - Aplica acción a todos a la vez

      **Consejo de oro:** Dedica 10 minutos a explorar los menús. Descubrirás funciones que te ahorrarán horas.
    `,
    relatedQuestions: ['faq-3']
  },
  {
    id: 'faq-51',
    category: 'tips',
    question: '¿Cada cuánto debo hacer respaldo de mis datos?',
    answer: `
      **Si usas Odoo en la nube (Online):**
      - Los respaldos son automáticos
      - Odoo los hace diariamente
      - No necesitas hacer nada

      **Si usas Odoo en tu servidor (On-premise):**
      - Haz respaldo DIARIO
      - Guarda copias en otro lugar (disco externo, nube)
      - Configura respaldos automáticos

      **Cómo hacer respaldo manual:**
      1. Ve a Configuración > Base de datos
      2. Haz clic en "Respaldar"
      3. Descarga el archivo
      4. Guárdalo en lugar seguro

      **Cuándo es CRÍTICO respaldar:**
      - Antes de actualizar Odoo
      - Antes de instalar módulos nuevos
      - Antes de cambios grandes de configuración

      **Historia de terror real:** Una empresa perdió 6 meses de facturas por no respaldar. No seas esa empresa.
    `,
    relatedQuestions: []
  },
  {
    id: 'faq-52',
    category: 'tips',
    question: '¿Cómo personalizo mi vista sin saber programar?',
    answer: `
      **Cambiar columnas en listas:**
      1. En cualquier lista, haz clic en el ícono de ajustes
      2. Marca/desmarca las columnas que quieres ver
      3. Arrastra para reordenar

      **Guardar filtros:**
      1. Aplica los filtros que necesitas
      2. Haz clic en "Favoritos"
      3. "Guardar búsqueda actual"
      4. Ponle un nombre

      **Cambiar vista predeterminada:**
      1. Ve a la vista que prefieres (lista, kanban, etc.)
      2. Guárdala como favorito
      3. Marca "Usar por defecto"

      **Con Studio (si lo tienes):**
      - Arrastra y suelta campos
      - Cambia colores y etiquetas
      - Crea nuevos campos
      - Todo sin programar

      **Importante:** Tus personalizaciones son solo para ti, no afectan a otros usuarios.
    `,
    relatedQuestions: ['faq-50']
  }
]

// Helper functions
export const getFaqsByCategory = (categoryId) => {
  return faqData.filter(faq => faq.category === categoryId)
}

export const searchFaqs = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return faqData.filter(faq =>
    faq.question.toLowerCase().includes(term) ||
    faq.answer.toLowerCase().includes(term)
  )
}

export const getRelatedFaqs = (faqId) => {
  const faq = faqData.find(f => f.id === faqId)
  if (!faq || !faq.relatedQuestions) return []
  return faq.relatedQuestions.map(id => faqData.find(f => f.id === id)).filter(Boolean)
}
