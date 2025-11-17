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
  },
  {
    id: 'banking',
    name: 'Bancos y Efectivo',
    icon: '🏦',
    description: 'Cuentas bancarias y manejo de efectivo'
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
  },

  // BANCOS Y EFECTIVO
  {
    id: 'faq-53',
    category: 'banking',
    question: '¿Cómo configuro el Plan de Cuentas para dar de alta mis bancos en México?',
    answer: `
      **El problema en México:** Los tokens bancarios no están habilitados para sincronizar automáticamente con Odoo, así que debes configurar todo manualmente. Aquí te explico paso a paso.

      **Estructura recomendada del Plan de Cuentas para Bancos:**

      \`\`\`
      100 - ACTIVO
        110 - Activo Circulante
          111 - Caja
            111.01 - Caja General (efectivo físico)
            111.02 - Caja Chica
          112 - Bancos
            112.01 - BBVA Cuenta 1234
            112.02 - Santander Cuenta 5678
            112.03 - Banorte Cuenta 9012
            112.04 - Banamex Cuenta 3456
      \`\`\`

      **📍 Ruta en Odoo:** Contabilidad > Configuración > Plan de Cuentas

      **Códigos ideales para México:**
      - **111.XX** → Efectivo y caja chica
      - **112.XX** → Cuentas bancarias
      - Numeración consecutiva (01, 02, 03...)

      **¿Por qué esta estructura?**
      - El código **112** agrupa TODOS los bancos bajo "Activo Circulante"
      - Cada subcuenta (112.01, 112.02) representa UN banco específico
      - En el Balance General, verás el total de bancos (112) Y el detalle de cada uno
      - Facilita reportes fiscales y auditorías

      **Tipo de cuenta correcto:** "Activo Circulante" o "Bank and Cash" según tu localización.
    `,
    relatedQuestions: ['faq-54', 'faq-55']
  },
  {
    id: 'faq-54',
    category: 'banking',
    question: '¿Cómo creo una cuenta contable específica para cada banco (BBVA, Santander, etc.)?',
    answer: `
      **📍 Ruta:** Contabilidad > Configuración > Plan de Cuentas > Crear

      **Paso a paso detallado:**

      **1. Haz clic en "Crear"**

      **2. Llena estos campos OBLIGATORIOS:**
      - **Código:** 112.01 (primer banco), 112.02 (segundo), etc.
      - **Nombre:** "BBVA Empresarial - Cuenta 0123456789"
      - **Tipo:** "Activo Circulante" o "Bank and Cash"
      - **Permite conciliación:** ✓ ACTIVADO (muy importante)

      **3. Campos opcionales pero recomendados:**
      - **Moneda:** Si es cuenta en dólares, selecciona USD
      - **Etiquetas:** "Banco", "Operativa"
      - **Grupo:** Déjalo bajo "Bancos" o "112"

      **Ejemplo para 3 bancos mexicanos:**

      | Código | Nombre | Tipo |
      |--------|--------|------|
      | 112.01 | BBVA Empresarial - Cta 1234 | Activo Circulante |
      | 112.02 | Santander PyME - Cta 5678 | Activo Circulante |
      | 112.03 | Banorte Digital - Cta 9012 | Activo Circulante |

      **¡IMPORTANTE!**
      - El nombre debe ser descriptivo: incluye banco + tipo de cuenta + últimos 4 dígitos
      - NO uses acentos ni caracteres especiales en el código
      - Marca SIEMPRE "Permite conciliación" para poder reconciliar después

      **Repite el proceso** para cada cuenta bancaria que tengas.
    `,
    relatedQuestions: ['faq-53', 'faq-55']
  },
  {
    id: 'faq-55',
    category: 'banking',
    question: '¿Cómo configuro los Diarios Contables para cada banco?',
    answer: `
      **¿Por qué necesito un diario por banco?** Cada banco debe tener su propio diario para registrar movimientos separados y aparecer correctamente en el dashboard de Contabilidad.

      **📍 Ruta:** Contabilidad > Configuración > Diarios > Crear

      **Configuración paso a paso:**

      **1. Información básica:**
      - **Nombre del diario:** "Banco BBVA" o "BBVA Empresarial"
      - **Tipo:** "Banco" ← MUY IMPORTANTE
      - **Código corto:** "BBVA" (máximo 5 caracteres)

      **2. Configuración contable:**
      - **Cuenta bancaria:** Selecciona tu cuenta 112.01 (la que creaste antes)
      - **Cuenta de suspense:** Déjala por defecto
      - **Cuenta de ganancias/pérdidas:** Por defecto

      **3. Información bancaria (opcional pero útil):**
      - **Número de cuenta:** Tu número completo de cuenta
      - **Banco:** Selecciona o crea "BBVA Bancomer"
      - **CLABE interbancaria:** 18 dígitos

      **Ejemplo de configuración completa:**

      \`\`\`
      Diario: Banco BBVA
      ├── Tipo: Banco
      ├── Código: BBVA
      ├── Cuenta contable: 112.01 BBVA Empresarial
      ├── Número de cuenta: 0123456789
      └── CLABE: 012180001234567890
      \`\`\`

      **Para efectivo/caja chica:**
      - Tipo: "Efectivo"
      - Cuenta: 111.01 Caja General
      - Código: "CAJA"

      **¿Resultado?**
      - En el dashboard de Contabilidad verás cada banco por separado
      - Puedes registrar movimientos independientes
      - Los reportes mostrarán saldos individuales y totales
    `,
    relatedQuestions: ['faq-54', 'faq-56', 'faq-58']
  },
  {
    id: 'faq-56',
    category: 'banking',
    question: '¿Cómo registro movimientos bancarios manualmente (depósitos, retiros, comisiones)?',
    answer: `
      **Contexto:** En México, sin tokens de sincronización automática, debes registrar cada movimiento manualmente. Aquí te explico los métodos.

      **📍 Ruta principal:** Contabilidad > Bancos > [Tu Banco] > Nuevo movimiento

      **MÉTODO 1: Desde el diario del banco (RECOMENDADO)**

      1. Ve a Contabilidad > Bancos
      2. Selecciona tu banco (ej: "BBVA")
      3. Clic en "Nuevo"
      4. Llena:
         - **Fecha:** Fecha del movimiento real
         - **Etiqueta:** "Depósito cliente ABC" o "Retiro cajero"
         - **Importe:** Positivo para entrada, negativo para salida
         - **Cuenta contrapartida:** Qué cuenta afecta

      **EJEMPLOS PRÁCTICOS:**

      **Depósito de cliente ($5,000):**
      \`\`\`
      Fecha: 15/01/2025
      Etiqueta: Pago cliente Empresa ABC - Factura 001
      Importe: +5,000.00
      Contrapartida: 120.01 Cuentas por Cobrar
      \`\`\`

      **Retiro para gastos ($1,500):**
      \`\`\`
      Fecha: 16/01/2025
      Etiqueta: Retiro para pago proveedor
      Importe: -1,500.00
      Contrapartida: 201.01 Cuentas por Pagar
      \`\`\`

      **Comisión bancaria ($150):**
      \`\`\`
      Fecha: 31/01/2025
      Etiqueta: Comisión mensual BBVA
      Importe: -150.00
      Contrapartida: 520.01 Gastos Bancarios
      \`\`\`

      **Intereses ganados ($25):**
      \`\`\`
      Fecha: 31/01/2025
      Etiqueta: Intereses del mes
      Importe: +25.00
      Contrapartida: 410.01 Productos Financieros
      \`\`\`

      **MÉTODO 2: Importar extracto bancario (CSV/OFX)**

      Si tu banco te da archivo digital:
      1. Contabilidad > Bancos > Importar
      2. Sube el archivo CSV/OFX
      3. Mapea las columnas
      4. Valida los movimientos importados

      **¡CLAVE!** Siempre reconcilia tus registros con tu estado de cuenta bancario.
    `,
    relatedQuestions: ['faq-55', 'faq-57', 'faq-59']
  },
  {
    id: 'faq-57',
    category: 'banking',
    question: '¿Cómo configuro la caja chica y el efectivo físico?',
    answer: `
      **¿Por qué separar efectivo de bancos?** El dashboard de Contabilidad muestra ambos por separado, así puedes ver:
      - Cuánto tienes en bancos (total y por cuenta)
      - Cuánto tienes en efectivo físico
      - El total global de liquidez

      **PASO 1: Crear cuenta contable para caja**

      📍 Ruta: Contabilidad > Configuración > Plan de Cuentas > Crear

      \`\`\`
      Código: 111.01
      Nombre: Caja General
      Tipo: Activo Circulante / Bank and Cash
      Permite conciliación: ✓
      \`\`\`

      **Para caja chica (gastos menores):**
      \`\`\`
      Código: 111.02
      Nombre: Caja Chica
      Tipo: Activo Circulante
      \`\`\`

      **PASO 2: Crear diario de efectivo**

      📍 Ruta: Contabilidad > Configuración > Diarios > Crear

      \`\`\`
      Nombre: Caja General
      Tipo: Efectivo ← NO "Banco"
      Código corto: CAJA
      Cuenta: 111.01 Caja General
      \`\`\`

      **PASO 3: Registrar movimientos de caja**

      📍 Ruta: Contabilidad > Bancos > Caja General > Nuevo

      **Entrada de efectivo (venta en mostrador):**
      \`\`\`
      Fecha: 15/01/2025
      Etiqueta: Venta mostrador cliente Juan
      Importe: +800.00
      Contrapartida: 401.01 Ingresos por Ventas
      \`\`\`

      **Salida de caja chica (papelería):**
      \`\`\`
      Fecha: 16/01/2025
      Etiqueta: Compra papelería Office Depot
      Importe: -350.00
      Contrapartida: 510.05 Gastos de Papelería
      \`\`\`

      **Reposición de caja chica desde banco:**
      \`\`\`
      En diario BANCO:
      Importe: -2,000.00
      Contrapartida: 111.02 Caja Chica

      En diario CAJA CHICA:
      Importe: +2,000.00
      Contrapartida: 112.01 Banco BBVA
      \`\`\`

      **RESULTADO EN DASHBOARD:**
      - Widget "Banco BBVA": $50,000
      - Widget "Caja General": $3,200
      - Widget "Caja Chica": $2,000
      - **Total Liquidez: $55,200**
    `,
    relatedQuestions: ['faq-55', 'faq-56', 'faq-58']
  },
  {
    id: 'faq-58',
    category: 'banking',
    question: '¿Cómo veo el total de efectivo en bancos y en físico en el dashboard?',
    answer: `
      **El dashboard de Contabilidad es tu mejor amigo para ver liquidez.**

      **📍 Ruta:** Contabilidad > Dashboard (página principal del módulo)

      **¿Qué muestra el dashboard?**

      Verás widgets individuales para cada diario de tipo "Banco" o "Efectivo" que hayas creado:

      \`\`\`
      ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
      │   BANCO BBVA    │  │ BANCO SANTANDER │  │  CAJA GENERAL   │
      │   $125,500.00   │  │   $45,200.00    │  │   $8,750.00     │
      │   ▲ $12,300     │  │   ▼ $3,100      │  │   ▲ $2,150      │
      └─────────────────┘  └─────────────────┘  └─────────────────┘
      \`\`\`

      **Para ver el TOTAL de todos los bancos + efectivo:**

      **Opción 1: Reporte de Balance General**
      📍 Ruta: Contabilidad > Reportes > Balance General

      Busca la sección "Activo Circulante":
      \`\`\`
      ACTIVO CIRCULANTE
      ├── 111 Caja........................$8,750.00
      │   ├── 111.01 Caja General.........$6,750.00
      │   └── 111.02 Caja Chica...........$2,000.00
      ├── 112 Bancos.....................$170,700.00
      │   ├── 112.01 BBVA................$125,500.00
      │   ├── 112.02 Santander............$45,200.00
      │   └── 112.03 Banorte.................$0.00
      └── TOTAL LIQUIDEZ.................$179,450.00
      \`\`\`

      **Opción 2: Filtrar en el dashboard**
      - Haz clic en cualquier widget de banco
      - Ve todos los movimientos detallados
      - Usa filtros por fecha, tipo, etc.

      **Opción 3: Crear reporte personalizado**
      📍 Ruta: Contabilidad > Reportes > Personalizados

      Crea un reporte que sume:
      - Cuenta 111 (todo el efectivo)
      - Cuenta 112 (todos los bancos)
      - = Total liquidez disponible

      **Pro tip:** El saldo en el dashboard es en TIEMPO REAL según lo que hayas registrado. Compáralo con tus estados de cuenta bancarios para asegurar que coincidan.

      **¿No aparece tu banco en el dashboard?**
      - Verifica que el diario sea tipo "Banco" o "Efectivo"
      - Asegúrate que tenga cuenta contable asignada
      - Revisa que no esté archivado
    `,
    relatedQuestions: ['faq-55', 'faq-57', 'faq-59']
  },
  {
    id: 'faq-59',
    category: 'banking',
    question: '¿Cómo hago transferencias entre bancos o de efectivo a banco?',
    answer: `
      **Las transferencias internas NO son pagos ni cobros, son movimientos entre tus propias cuentas.**

      **📍 Ruta recomendada:** Contabilidad > Varios > Asientos Contables > Crear

      **CASO 1: Transferencia entre dos bancos**

      Ejemplo: Pasar $10,000 de BBVA a Santander

      **Asiento contable:**
      \`\`\`
      Fecha: 20/01/2025
      Referencia: Transferencia interna BBVA→Santander
      Diario: Varios

      DEBE:
      112.02 Santander............$10,000.00

      HABER:
      112.01 BBVA.................$10,000.00
      \`\`\`

      **Método alternativo (dos movimientos):**

      En diario BBVA:
      \`\`\`
      Fecha: 20/01/2025
      Etiqueta: Transferencia a Santander
      Importe: -10,000.00
      Contrapartida: 112.02 Santander
      \`\`\`

      En diario Santander (se genera automáticamente o créalo):
      \`\`\`
      Fecha: 20/01/2025
      Etiqueta: Transferencia desde BBVA
      Importe: +10,000.00
      Contrapartida: 112.01 BBVA
      \`\`\`

      **CASO 2: Retiro de banco a caja (efectivo)**

      Ejemplo: Retirar $5,000 del banco para tener efectivo

      \`\`\`
      Fecha: 21/01/2025
      Referencia: Retiro para caja general

      DEBE:
      111.01 Caja General.........$5,000.00

      HABER:
      112.01 BBVA.................$5,000.00
      \`\`\`

      **CASO 3: Depósito de efectivo al banco**

      Ejemplo: Depositar $3,500 de ventas del día

      \`\`\`
      Fecha: 22/01/2025
      Referencia: Depósito ventas del día

      DEBE:
      112.02 Santander............$3,500.00

      HABER:
      111.01 Caja General.........$3,500.00
      \`\`\`

      **IMPORTANTE - Partida doble:**
      - El DEBE es donde ENTRA el dinero
      - El HABER es de donde SALE el dinero
      - Siempre deben ser IGUALES (DEBE = HABER)
      - El total de tu liquidez NO cambia, solo se redistribuye

      **Verificación:**
      Después de cada transferencia, revisa en el dashboard que:
      - El banco origen haya bajado
      - El banco destino haya subido
      - La suma total sea la misma

      **Error común:** No confundas transferencias internas con pagos a proveedores o cobros de clientes. Las transferencias internas son SOLO entre tus cuentas propias.
    `,
    relatedQuestions: ['faq-56', 'faq-57', 'faq-58']
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
