import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import ExercisePage from './pages/ExercisePage'
import MissionsPage from './pages/MissionsPage'
import QuickGuidesPage from './pages/QuickGuidesPage'
import EmergencyHelpPage from './pages/EmergencyHelpPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import ExplorePage from './pages/ExplorePage'
import AccessibilityPanel from './components/AccessibilityPanel'
import OnboardingWizard from './components/OnboardingWizard'
import useStore from './store/useStore'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { user } = useStore()

  useEffect(() => {
    // Verificar si es primera vez
    const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted')
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true)
    }
  }, [])

  const handleOnboardingComplete = (preferences) => {
    localStorage.setItem('onboardingCompleted', 'true')
    localStorage.setItem('userPreferences', JSON.stringify(preferences))
    setShowOnboarding(false)
  }

  return (
    <Router>
      <div className="min-h-screen">
        {showOnboarding && (
          <OnboardingWizard onComplete={handleOnboardingComplete} />
        )}
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/missions/:missionId" element={<MissionsPage />} />
            <Route path="/quick-guides" element={<QuickGuidesPage />} />
            <Route path="/emergency-help" element={<EmergencyHelpPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/module/:moduleId/exercise/:exerciseId" element={<ExercisePage />} />
          </Routes>
        </motion.main>
        <AccessibilityPanel />
      </div>
    </Router>
  )
}

export default App
