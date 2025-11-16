import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle, Heart, Search, ChevronDown, ChevronUp,
  CheckCircle, Phone, LifeBuoy, Shield, ArrowRight
} from 'lucide-react'
import { Card, Button, Badge } from '../components/ui'

function EmergencyHelpPage() {
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const emergencyProblems = [
    {
      id: 'wrong-invoice',
      emoji: '😱',
      title: 'Confirmé una factura con datos incorrectos',
      severity: 'medium',
      shortAnswer: 'Tranquilo, tiene solución. Crea una Nota de Crédito.',
      detailedSteps: [
        {
          step: 1,
          action: 'NO ENTRES EN PÁNICO',
          detail: 'Esto le pasa a todos. Es normal y tiene solución fácil.',
          tip: 'Respira profundo. No es el fin del mundo.'
        },
        {
          step: 2,
          action: 'Ve a la factura incorrecta',
          detail: 'Facturación → Clientes → Facturas → Busca la factura',
          tip: 'Usa el número de factura o el nombre del cliente para encontrarla.'
        },
        {
          step: 3,
          action: 'Crea una Nota de Crédito',
          detail: 'Haz clic en "Agregar nota de crédito". Esto anula la factura.',
          tip: 'Es como una factura "en negativo" que cancela la anterior.'
        },
        {
          step: 4,
          action: 'Confirma la nota de crédito',
          detail: 'Revisa los datos y confirma.',
          tip: 'El sistema balanceará automáticamente los números.'
        },
        {
          step: 5,
          action: 'Crea la factura correcta',
          detail: 'Ahora crea una nueva factura con los datos correctos.',
          tip: 'Esta vez revisa dos veces antes de confirmar.'
        }
      ],
      preventionTip: 'Siempre revisa el monto total y el nombre del cliente ANTES de confirmar.'
    },
    {
      id: 'deleted-contact',
      emoji: '😰',
      title: 'Archivé o eliminé un contacto por error',
      severity: 'low',
      shortAnswer: 'Los contactos archivados se pueden recuperar fácilmente.',
      detailedSteps: [
        {
          step: 1,
          action: 'Ve a Contactos',
          detail: 'Menú principal → Contactos',
          tip: 'Los contactos archivados no se borran, solo se ocultan.'
        },
        {
          step: 2,
          action: 'Activa el filtro "Archivados"',
          detail: 'En el buscador, haz clic en "Filtros" → "Archivados"',
          tip: 'Esto te mostrará todos los contactos ocultos.'
        },
        {
          step: 3,
          action: 'Encuentra el contacto',
          detail: 'Busca por nombre en la lista de archivados.',
          tip: 'Si no lo ves, asegúrate de que el filtro esté activo.'
        },
        {
          step: 4,
          action: 'Desarchiva el contacto',
          detail: 'Abre el contacto → Menú Acción → "Desarchivar"',
          tip: 'El contacto volverá a aparecer en tu lista normal.'
        }
      ],
      preventionTip: 'Odoo casi nunca borra datos permanentemente. Siempre se pueden recuperar.'
    },
    {
      id: 'wrong-payment',
      emoji: '💸',
      title: 'Registré un pago con el monto equivocado',
      severity: 'medium',
      shortAnswer: 'Puedes revertir el pago y crear uno nuevo con el monto correcto.',
      detailedSteps: [
        {
          step: 1,
          action: 'Encuentra el pago incorrecto',
          detail: 'Facturación → Clientes → Pagos → Busca el pago',
          tip: 'Filtra por fecha o cliente para encontrarlo más rápido.'
        },
        {
          step: 2,
          action: 'Abre el pago',
          detail: 'Haz clic en el pago para ver los detalles.',
          tip: 'Verifica que sea el pago que quieres corregir.'
        },
        {
          step: 3,
          action: 'Revierte el pago',
          detail: 'Haz clic en "Revertir" o "Cancelar".',
          tip: 'Esto deshace el registro sin borrar el historial.'
        },
        {
          step: 4,
          action: 'Crea el pago correcto',
          detail: 'Ve a la factura original → "Registrar pago" → Ingresa el monto correcto.',
          tip: 'Verifica que el monto coincida con lo que realmente recibiste.'
        }
      ],
      preventionTip: 'Siempre ten el comprobante bancario a la mano cuando registres pagos.'
    },
    {
      id: 'cant-find-invoice',
      emoji: '🔍',
      title: 'No encuentro una factura que creé',
      severity: 'low',
      shortAnswer: 'Probablemente está en otro estado. Usa los filtros para encontrarla.',
      detailedSteps: [
        {
          step: 1,
          action: 'Ve a todas las facturas',
          detail: 'Facturación → Clientes → Facturas',
          tip: 'Aquí están TODAS tus facturas.'
        },
        {
          step: 2,
          action: 'Quita todos los filtros',
          detail: 'Haz clic en la "X" junto a cada filtro activo.',
          tip: 'Por defecto puede estar filtrando solo facturas de este mes.'
        },
        {
          step: 3,
          action: 'Busca por número o cliente',
          detail: 'Escribe el número de factura o nombre del cliente en el buscador.',
          tip: 'Si no recuerdas el número, busca por cliente.'
        },
        {
          step: 4,
          action: 'Revisa el estado',
          detail: 'Puede estar en "Borrador" si no la confirmaste, "Pagada" si ya la cobraste, o "Cancelada".',
          tip: 'Haz clic en los diferentes estados para filtrar.'
        }
      ],
      preventionTip: 'Anota el número de factura cuando la crees. Es tu referencia única.'
    },
    {
      id: 'system-slow',
      emoji: '🐌',
      title: 'El sistema está muy lento o no responde',
      severity: 'low',
      shortAnswer: 'Puede ser tu internet o el navegador. Hay soluciones simples.',
      detailedSteps: [
        {
          step: 1,
          action: 'Espera un momento',
          detail: 'A veces solo necesita unos segundos para cargar.',
          tip: 'Mira si hay un indicador de "cargando" girando.'
        },
        {
          step: 2,
          action: 'Refresca la página',
          detail: 'Presiona F5 o el botón de refrescar en tu navegador.',
          tip: 'Esto recarga la página sin perder tus datos guardados.'
        },
        {
          step: 3,
          action: 'Cierra pestañas del navegador',
          detail: 'Demasiadas pestañas abiertas hacen lento todo.',
          tip: 'Deja solo las que realmente necesitas.'
        },
        {
          step: 4,
          action: 'Limpia el caché',
          detail: 'Configuración del navegador → Privacidad → Borrar datos de navegación.',
          tip: 'Esto elimina archivos temporales que pueden estar causando el problema.'
        },
        {
          step: 5,
          action: 'Reinicia el navegador',
          detail: 'Cierra completamente el navegador y ábrelo de nuevo.',
          tip: 'Si sigue lento, puede ser tu conexión a internet.'
        }
      ],
      preventionTip: 'Usa Chrome o Firefox actualizado. Evita usar Internet Explorer.'
    },
    {
      id: 'wrong-date',
      emoji: '📅',
      title: 'La factura tiene la fecha equivocada',
      severity: 'high',
      shortAnswer: 'Si está confirmada, necesitas nota de crédito. Si no, solo edítala.',
      detailedSteps: [
        {
          step: 1,
          action: 'Verifica el estado de la factura',
          detail: 'Abre la factura y mira arriba si dice "Borrador" o "Publicado".',
          tip: 'Si es borrador, puedes editarla directamente.'
        },
        {
          step: 2,
          action: 'Si es BORRADOR: Edita la fecha',
          detail: 'Haz clic en el campo de fecha y cámbiala.',
          tip: 'Fácil, solo cambia la fecha y guarda.'
        },
        {
          step: 3,
          action: 'Si es PUBLICADA: Crea nota de crédito',
          detail: 'Igual que con datos incorrectos: nota de crédito + nueva factura.',
          tip: 'La fecha de factura es importante para impuestos.'
        },
        {
          step: 4,
          action: 'Crea nueva factura con fecha correcta',
          detail: 'Asegúrate de poner la fecha que realmente necesitas.',
          tip: 'Considera el período fiscal al que debe pertenecer.'
        }
      ],
      preventionTip: 'Siempre revisa que la fecha sea la del día que realmente vendiste.'
    },
    {
      id: 'double-entry',
      emoji: '👯',
      title: 'Registré el mismo gasto/ingreso dos veces',
      severity: 'medium',
      shortAnswer: 'Identifica el duplicado y elimina o archiva el registro extra.',
      detailedSteps: [
        {
          step: 1,
          action: 'Identifica cuál es el duplicado',
          detail: 'Busca ambos registros y verifica cuál tiene la información correcta.',
          tip: 'El primero que creaste probablemente es el correcto.'
        },
        {
          step: 2,
          action: 'Abre el registro duplicado',
          detail: 'Haz clic en el que quieres eliminar.',
          tip: 'Asegúrate 100% de que es el duplicado, no el original.'
        },
        {
          step: 3,
          action: 'Cancela o revierte',
          detail: 'Si es factura: Nota de crédito. Si es pago: Revertir.',
          tip: 'No intentes borrar directamente. Usa las opciones de Odoo.'
        },
        {
          step: 4,
          action: 'Verifica los totales',
          detail: 'Revisa que tus números ahora estén correctos.',
          tip: 'Los reportes ahora deberían mostrar montos correctos.'
        }
      ],
      preventionTip: 'Antes de crear un nuevo registro, busca si ya existe.'
    }
  ]

  const filteredProblems = emergencyProblems.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.shortAnswer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <LifeBuoy className="w-12 h-12 text-red-500 mr-3" />
          <h1 className="text-4xl font-heading font-bold text-gray-800">Ayuda de Emergencia</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Cometiste un error? <strong>No te preocupes.</strong> Aquí encontrarás cómo solucionarlo paso a paso.
        </p>
      </motion.div>

      {/* Mensaje calmante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-start">
            <Heart className="w-10 h-10 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Respira. Todo tiene solución.
              </h3>
              <p className="text-green-700 mb-3">
                En Odoo, casi todos los errores se pueden corregir. El sistema está diseñado para permitir ajustes.
                No has dañado nada permanentemente.
              </p>
              <p className="text-sm text-green-600 font-medium">
                Recuerda: Los mejores profesionales son los que saben cómo recuperarse de los errores.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Buscador */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Describe tu problema... (ej: 'factura incorrecta', 'borré contacto')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </Card>

      {/* Lista de problemas */}
      <div className="space-y-4">
        <h2 className="text-xl font-heading font-semibold text-gray-800">
          Problemas comunes y sus soluciones:
        </h2>

        {filteredProblems.map((problem) => (
          <Card key={problem.id} className="overflow-hidden">
            <button
              onClick={() => setSelectedProblem(
                selectedProblem === problem.id ? null : problem.id
              )}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{problem.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600">{problem.shortAnswer}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge
                    variant={
                      problem.severity === 'high'
                        ? 'danger'
                        : problem.severity === 'medium'
                        ? 'warning'
                        : 'success'
                    }
                    size="sm"
                    className="mr-3"
                  >
                    {problem.severity === 'high'
                      ? 'Complejo'
                      : problem.severity === 'medium'
                      ? 'Moderado'
                      : 'Fácil'}
                  </Badge>
                  {selectedProblem === problem.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {selectedProblem === problem.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="border-t border-gray-200 bg-gray-50 p-4"
              >
                <h4 className="font-semibold text-gray-800 mb-4">
                  Pasos para solucionarlo:
                </h4>
                <div className="space-y-4">
                  {problem.detailedSteps.map((step) => (
                    <div key={step.step} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{step.action}</p>
                        <p className="text-gray-600 text-sm">{step.detail}</p>
                        <div className="mt-1 bg-yellow-50 p-2 rounded text-xs text-yellow-700">
                          💡 {step.tip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800 mb-1">
                        Para evitar esto en el futuro:
                      </p>
                      <p className="text-blue-700 text-sm">{problem.preventionTip}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </Card>
        ))}

        {filteredProblems.length === 0 && searchTerm && (
          <Card className="p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              No encontramos tu problema específico, pero no te preocupes.
            </p>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Ver todos los problemas
            </Button>
          </Card>
        )}
      </div>

      {/* Consejos generales */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Reglas de oro para recuperarte de errores:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <p className="text-gray-700 text-sm">
                <strong>Nunca intentes borrar directamente.</strong> Usa las funciones de Odoo (Nota de Crédito, Revertir, etc.)
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <p className="text-gray-700 text-sm">
                <strong>Guarda los comprobantes originales.</strong> Facturas en papel o PDF, extractos bancarios, etc.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <p className="text-gray-700 text-sm">
                <strong>Revisa antes de confirmar.</strong> Es más fácil prevenir que corregir.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <p className="text-gray-700 text-sm">
                <strong>Pide ayuda si no entiendes.</strong> Es mejor preguntar que adivinar.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Mensaje final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-purple-50 border-purple-200 text-center">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            ¿Sigues preocupado?
          </h3>
          <p className="text-purple-700 mb-4">
            Recuerda: Odoo guarda un historial de todo. Incluso si algo sale mal,
            siempre hay un registro de lo que pasó y cómo corregirlo.
          </p>
          <p className="text-sm text-purple-600 font-medium">
            Cada error es una oportunidad de aprendizaje. ¡Tú puedes con esto!
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default EmergencyHelpPage
