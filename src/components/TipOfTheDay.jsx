import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, RefreshCw, X, Bookmark } from 'lucide-react'
import { Card, Badge } from '../components/ui'

function TipOfTheDay() {
  const [currentTip, setCurrentTip] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const [savedTips, setSavedTips] = useState([])

  const tips = [
    {
      id: 1,
      category: 'facturación',
      title: 'Revisa antes de confirmar',
      content: 'Siempre revisa el nombre del cliente y el monto total ANTES de confirmar una factura. Es más fácil corregir en borrador que después.',
      emoji: '✅',
      actionable: 'Hoy, antes de confirmar cualquier factura, léela dos veces.'
    },
    {
      id: 2,
      category: 'organización',
      title: 'Usa etiquetas para organizar',
      content: 'Puedes agregar etiquetas (tags) a tus contactos para clasificarlos: "Cliente VIP", "Pago lento", "Nuevo". Te ayuda a filtrar rápido.',
      emoji: '🏷️',
      actionable: 'Agrega una etiqueta a 3 de tus clientes más importantes.'
    },
    {
      id: 3,
      category: 'productividad',
      title: 'Los atajos del teclado ahorran tiempo',
      content: 'En Odoo puedes usar Alt+S para guardar, Alt+N para nuevo registro, y la barra "/" para buscar rápido. No necesitas el mouse para todo.',
      emoji: '⌨️',
      actionable: 'Intenta usar Alt+S la próxima vez que guardes algo.'
    },
    {
      id: 4,
      category: 'seguridad',
      title: 'Haz respaldo de tus datos',
      content: 'Exporta regularmente tu lista de clientes y facturas a Excel. Si algo falla, tendrás una copia de seguridad.',
      emoji: '💾',
      actionable: 'Exporta tu lista de clientes esta semana.'
    },
    {
      id: 5,
      category: 'facturación',
      title: 'Configura plazos de pago',
      content: 'En cada cliente puedes configurar su plazo de pago habitual (15 días, 30 días, etc.). Así Odoo calcula automáticamente la fecha de vencimiento.',
      emoji: '📅',
      actionable: 'Verifica que tus 5 clientes principales tengan plazo de pago configurado.'
    },
    {
      id: 6,
      category: 'contabilidad',
      title: 'Concilia semanalmente',
      content: 'No esperes a fin de mes para conciliar tu banco. Hacerlo cada semana es más rápido y encuentras errores antes.',
      emoji: '🏦',
      actionable: 'Programa 15 minutos cada viernes para conciliar.'
    },
    {
      id: 7,
      category: 'ventas',
      title: 'Personaliza tus cotizaciones',
      content: 'Puedes agregar notas personalizadas en cada cotización. Un "Gracias por confiar en nosotros" hace la diferencia.',
      emoji: '📝',
      actionable: 'Agrega un mensaje de agradecimiento en tu próxima cotización.'
    },
    {
      id: 8,
      category: 'organización',
      title: 'Usa favoritos para acceso rápido',
      content: 'Puedes marcar cualquier vista como favorita (la estrella en el buscador). Así llegas más rápido a lo que más usas.',
      emoji: '⭐',
      actionable: 'Marca como favorita la lista de facturas pendientes.'
    },
    {
      id: 9,
      category: 'productividad',
      title: 'Las búsquedas guardadas ahorran tiempo',
      content: 'Si siempre buscas lo mismo (ej: facturas de este mes), guarda la búsqueda como favorito. Un solo clic y listo.',
      emoji: '🔍',
      actionable: 'Guarda tu búsqueda más común como favorita.'
    },
    {
      id: 10,
      category: 'flota',
      title: 'Registra el kilometraje regularmente',
      content: 'Cada vez que cargues gasolina, actualiza el kilometraje del vehículo. Te ayuda a calcular costos reales por kilómetro.',
      emoji: '🚗',
      actionable: 'La próxima vez que tanquees, registra el kilometraje.'
    },
    {
      id: 11,
      category: 'seguridad',
      title: 'Verifica los permisos de usuario',
      content: 'No todos los empleados necesitan ver toda la información. Configura permisos apropiados para cada rol.',
      emoji: '🔐',
      actionable: 'Revisa qué acceso tiene cada usuario de tu equipo.'
    },
    {
      id: 12,
      category: 'contabilidad',
      title: 'Categoriza tus gastos correctamente',
      content: 'Usar las categorías correctas (combustible, oficina, servicios) te ayuda a ver en qué gastas más y encontrar ahorros.',
      emoji: '📊',
      actionable: 'Verifica que los últimos 5 gastos tengan categoría correcta.'
    },
    {
      id: 13,
      category: 'ventas',
      title: 'Da seguimiento a las cotizaciones',
      content: 'Una cotización sin seguimiento es dinero perdido. Llama al cliente 3-5 días después de enviarla.',
      emoji: '📞',
      actionable: 'Revisa si tienes cotizaciones pendientes de hace más de una semana.'
    },
    {
      id: 14,
      category: 'organización',
      title: 'Mantén los datos actualizados',
      content: 'Direcciones incorrectas = facturas que no llegan = pagos atrasados. Verifica los datos de contacto regularmente.',
      emoji: '📍',
      actionable: 'Actualiza la información de un cliente que no has contactado recientemente.'
    },
    {
      id: 15,
      category: 'productividad',
      title: 'Usa las notas internas',
      content: 'Odoo permite agregar notas internas en cada registro. Úsalas para recordar detalles importantes sobre clientes o transacciones.',
      emoji: '📌',
      actionable: 'Agrega una nota interna en el perfil de tu cliente más importante.'
    }
  ]

  useEffect(() => {
    // Cargar tips guardados
    const saved = localStorage.getItem('savedTips')
    if (saved) {
      setSavedTips(JSON.parse(saved))
    }

    // Obtener tip del día basado en la fecha
    const today = new Date()
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
    const tipIndex = dayOfYear % tips.length
    setCurrentTip(tips[tipIndex])

    // Verificar si ya lo vio hoy
    const lastShown = localStorage.getItem('lastTipShown')
    const todayString = today.toDateString()
    if (lastShown === todayString) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('lastTipShown', new Date().toDateString())
  }

  const handleSaveTip = () => {
    if (currentTip && !savedTips.includes(currentTip.id)) {
      const newSaved = [...savedTips, currentTip.id]
      setSavedTips(newSaved)
      localStorage.setItem('savedTips', JSON.stringify(newSaved))
    }
  }

  const handleNewTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length)
    setCurrentTip(tips[randomIndex])
  }

  if (!currentTip || !isVisible) return null

  const categoryColors = {
    facturación: 'bg-blue-100 text-blue-700',
    organización: 'bg-purple-100 text-purple-700',
    productividad: 'bg-green-100 text-green-700',
    seguridad: 'bg-red-100 text-red-700',
    contabilidad: 'bg-yellow-100 text-yellow-700',
    ventas: 'bg-orange-100 text-orange-700',
    flota: 'bg-cyan-100 text-cyan-700'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Card className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Consejo del Día
                </h3>
                <Badge size="sm" className={categoryColors[currentTip.category]}>
                  {currentTip.category}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={handleSaveTip}
                className={`p-1.5 rounded-lg transition-colors ${
                  savedTips.includes(currentTip.id)
                    ? 'bg-yellow-200 text-yellow-700'
                    : 'hover:bg-yellow-100 text-gray-400'
                }`}
                title="Guardar consejo"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={handleNewTip}
                className="p-1.5 hover:bg-yellow-100 rounded-lg text-gray-400 transition-colors"
                title="Otro consejo"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={handleDismiss}
                className="p-1.5 hover:bg-yellow-100 rounded-lg text-gray-400 transition-colors"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-2xl mr-3">{currentTip.emoji}</span>
              <div>
                <p className="font-medium text-gray-800 mb-1">
                  {currentTip.title}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentTip.content}
                </p>
              </div>
            </div>

            <div className="bg-yellow-100 p-3 rounded-lg">
              <p className="text-sm font-medium text-yellow-800">
                🎯 Acción de hoy:
              </p>
              <p className="text-sm text-yellow-700">
                {currentTip.actionable}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}

export default TipOfTheDay
