import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart, Star, Clock, Trophy, Quote, ChevronRight,
  Users, Lightbulb
} from 'lucide-react'
import { Card, Badge, Button } from '../components/ui'
import { successStories, motivationalQuotes } from '../data/successStories'

function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState(null)

  // Obtener cita motivacional del día
  const today = new Date()
  const quoteIndex = today.getDate() % motivationalQuotes.length
  const dailyQuote = motivationalQuotes[quoteIndex]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-12 h-12 text-red-500 mr-3" />
          <h1 className="text-4xl font-heading font-bold text-gray-800">Historias de Éxito</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Personas reales que empezaron igual que tú, con miedo y sin experiencia.
          <strong> Si ellos pudieron, tú también puedes.</strong>
        </p>
      </motion.div>

      {/* Cita motivacional */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <div className="flex items-center justify-center">
            <Quote className="w-8 h-8 text-purple-400 mr-4" />
            <div className="text-center">
              <p className="text-xl font-medium text-purple-800 italic mb-2">
                "{dailyQuote.quote}"
              </p>
              <p className="text-purple-600 font-medium">
                — {dailyQuote.author}
              </p>
            </div>
            <Quote className="w-8 h-8 text-purple-400 ml-4 transform rotate-180" />
          </div>
        </Card>
      </motion.div>

      {/* Mensaje de solidaridad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-green-50 border-green-200">
          <div className="flex items-start">
            <Users className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                No estás solo en este camino
              </h3>
              <p className="text-green-700">
                Miles de personas han pasado por lo mismo: el miedo inicial, las dudas,
                los errores. Pero todas comparten algo: <strong>decidieron intentarlo</strong>.
                Y tú ya diste ese paso al estar aquí.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Grid de historias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card
              className="h-full hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="p-6">
                {/* Avatar y nombre */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{story.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {story.name}, {story.age} años
                    </h3>
                    <p className="text-sm text-gray-500">{story.business}</p>
                    <p className="text-xs text-gray-400">{story.location}</p>
                  </div>
                </div>

                {/* Desafío */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-red-600 mb-1">
                    Su desafío:
                  </p>
                  <p className="text-gray-700 text-sm">
                    {story.challenge}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <Clock className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                    <p className="text-xs text-blue-700 font-medium">
                      {story.timeToLearn}
                    </p>
                    <p className="text-xs text-blue-600">para aprender</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <Trophy className="w-4 h-4 text-green-500 mx-auto mb-1" />
                    <p className="text-xs text-green-700 font-medium">
                      Gran logro
                    </p>
                  </div>
                </div>

                {/* Cita */}
                <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                  <p className="text-sm italic text-yellow-800">
                    "{story.quote.substring(0, 80)}..."
                  </p>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Leer historia completa
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal de historia completa */}
      {selectedStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{selectedStory.avatar}</div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-800">
                    {selectedStory.name}, {selectedStory.age} años
                  </h2>
                  <p className="text-gray-600">{selectedStory.business}</p>
                  <p className="text-sm text-gray-500">{selectedStory.location}</p>
                </div>
              </div>

              {/* Desafío */}
              <Card className="p-4 bg-red-50 border-red-200 mb-4">
                <h3 className="font-semibold text-red-800 mb-2">
                  Su mayor desafío:
                </h3>
                <p className="text-red-700">{selectedStory.challenge}</p>
              </Card>

              {/* Historia */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Su historia:</h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedStory.story}
                </div>
              </div>

              {/* Cita */}
              <Card className="p-4 bg-yellow-50 border-yellow-200 mb-6">
                <Quote className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="text-lg italic text-yellow-800 mb-2">
                  "{selectedStory.quote}"
                </p>
                <p className="text-yellow-700 font-medium text-right">
                  — {selectedStory.name}
                </p>
              </Card>

              {/* Resultados */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <Clock className="w-6 h-6 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-blue-800">Tiempo para aprender</h4>
                  <p className="text-blue-700">{selectedStory.timeToLearn}</p>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <Trophy className="w-6 h-6 text-green-500 mb-2" />
                  <h4 className="font-semibold text-green-800">Mayor logro</h4>
                  <p className="text-green-700">{selectedStory.biggestWin}</p>
                </Card>
              </div>

              {/* Consejo */}
              <Card className="p-4 bg-purple-50 border-purple-200 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">
                      Su consejo para ti:
                    </h4>
                    <p className="text-purple-700">
                      {selectedStory.tipForBeginners}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Cerrar */}
              <Button
                onClick={() => setSelectedStory(null)}
                className="w-full"
              >
                Cerrar historia
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Mensaje final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200 text-center">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Tu historia de éxito está por escribirse
          </h3>
          <p className="text-gray-700 mb-4">
            Cada una de estas personas empezó exactamente donde tú estás ahora.
            La diferencia fue que decidieron dar el primer paso.
          </p>
          <p className="text-primary-600 font-medium">
            ¿Cuál será TU historia de éxito?
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default SuccessStoriesPage
