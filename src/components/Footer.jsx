import { Link } from 'react-router-dom'
import {
  BookOpen,
  Target,
  HelpCircle,
  Compass,
  Heart,
  Sun,
  MessageCircle,
  Shield,
  Lightbulb
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-neutral-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Odoo Learning Platform</h3>
                <p className="text-xs text-neutral-400">by Mentora Hub</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Plataforma de aprendizaje de Odoo 19 diseñada especialmente para personas
              sin experiencia técnica. Aprende a tu ritmo, sin presiones.
            </p>
            <div className="mt-4 flex items-center text-sm text-neutral-400">
              <Heart className="w-4 h-4 mr-1 text-accent-red-400" />
              Hecho con amor para ti
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Aprende</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/first-day" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Mi Primer Día
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Explorar Módulos
                </Link>
              </li>
              <li>
                <Link to="/missions" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Misiones Prácticas
                </Link>
              </li>
              <li>
                <Link to="/quick-guides" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Guías Rápidas
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/emergency-help" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Ayuda de Emergencia
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Historias de Éxito
                </Link>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Módulos disponibles</span>
                <span className="text-white font-medium">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Lecciones totales</span>
                <span className="text-white font-medium">131+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Misiones prácticas</span>
                <span className="text-white font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Horas de contenido</span>
                <span className="text-white font-medium">159+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">FAQs disponibles</span>
                <span className="text-white font-medium">18</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-400">
              © 2024 Odoo Learning Platform. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-neutral-400">Versión de Odoo: 19.0</span>
              <span className="text-neutral-400">•</span>
              <span className="text-primary-400">Siempre en mejora continua</span>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-400 italic">
            "Cada experto fue alguna vez un principiante. Tu viaje con Odoo empieza hoy."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
