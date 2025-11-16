import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  BookOpen,
  Trophy,
  Award,
  Flame,
  Star,
  Menu,
  X,
  Target,
  Clock,
  Compass,
  HelpCircle,
  Library
} from 'lucide-react'
import { useState } from 'react'
import useStore from '../store/useStore'
import Badge from './ui/Badge'

const Navigation = () => {
  const location = useLocation()
  const { user } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const xpForNextLevel = Math.max(user.level, 1) * 100
  const xpPercentage = Math.min(100, (user.xp / xpForNextLevel) * 100)

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/explore', icon: Compass, label: 'Explorar' },
    { path: '/glossary', icon: Library, label: 'Glosario' },
    { path: '/missions', icon: Target, label: 'Misiones' },
    { path: '/quick-guides', icon: Clock, label: 'Guías' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
  ]

  return (
    <nav className="glass-effect sticky top-0 z-30 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold gradient-text">
                Odoo Learning Platform
              </h1>
              <p className="text-xs text-slate-500">by Mentora Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      transition-all duration-200
                      ${isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* User Stats */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Streak */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-2 bg-orange-100 rounded-lg"
            >
              <Flame className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-xs text-orange-600 font-medium">Racha</p>
                <p className="text-sm font-bold text-orange-700">
                  {user.streak} días
                </p>
              </div>
            </motion.div>

            {/* XP & Level */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-primary-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-600">
                    {user.level}
                  </span>
                </div>
              </div>
              <div className="min-w-[120px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-slate-600">
                    Nivel {user.level}
                  </span>
                  <span className="text-xs font-bold text-primary-600">
                    {user.xp}/{xpForNextLevel} XP
                  </span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${xpPercentage}%` }}
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Badges count */}
            {user.badges.length > 0 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 bg-yellow-100 rounded-lg"
              >
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-bold text-yellow-700">
                  {user.badges.length}
                </span>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      ${isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Stats */}
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-slate-600">Nivel</span>
                <Badge variant="primary">{user.level}</Badge>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-slate-600">XP</span>
                <Badge variant="secondary">
                  {user.xp}/{xpForNextLevel}
                </Badge>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-slate-600">Racha</span>
                <Badge variant="warning" icon={<Flame className="w-3 h-3" />}>
                  {user.streak} días
                </Badge>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
