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
    // Mentora Hub: Fondo AZUL REY sólido, texto blanco
    <footer className="bg-primary-500 text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Odoo Learning Platform</h3>
                <p className="text-xs text-white/70">by Mentora Hub</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Plataforma de aprendizaje de Odoo 19 diseñada especialmente para personas
              sin experiencia técnica. Aprende a tu ritmo, sin presiones.
            </p>
            <div className="mt-4 flex items-center text-sm text-white/80">
              <Heart className="w-4 h-4 mr-1 text-secondary-500" />
              Hecho con amor para ti
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Aprende</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/first-day" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Mi Primer Día
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Explorar Módulos
                </Link>
              </li>
              <li>
                <Link to="/missions" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Misiones Prácticas
                </Link>
              </li>
              <li>
                <Link to="/quick-guides" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Guías Rápidas
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/emergency-help" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Ayuda de Emergencia
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Historias de Éxito
                </Link>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Plataforma</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Módulos disponibles</span>
                <span className="text-white font-medium">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Lecciones totales</span>
                <span className="text-white font-medium">131+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Misiones prácticas</span>
                <span className="text-white font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Horas de contenido</span>
                <span className="text-white font-medium">159+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">FAQs disponibles</span>
                <span className="text-white font-medium">18</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70">
              © 2024 Odoo Learning Platform. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-white/70">Versión de Odoo: 19.0</span>
              <span className="text-white/50">•</span>
              <span className="text-accent-aqua">Siempre en mejora continua</span>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/80 italic">
            "Cada experto fue alguna vez un principiante. Tu viaje con Odoo empieza hoy."
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
