import { useRef } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Cv from './pages/Cv'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Work from './pages/Work'
import { useGsapAnimations } from './hooks/useGsapAnimations'
import { useRoute } from './hooks/useRoute'
import { useTheme } from './hooks/useThem'
import './App.css'

function App() {
  const appRef = useRef<HTMLDivElement>(null)
  const { activePage, navigate } = useRoute()
  const { theme, toggleTheme } = useTheme()

  useGsapAnimations(appRef)

  return (
    <div className="site-shell" ref={appRef}>
      <Navbar activePage={activePage} onNavigate={navigate} onThemeToggle={toggleTheme} theme={theme} />
      <main>
        <Home />
        <Work />
        <About />
        <Cv />
        <Contact />
      </main>
    </div>
  )
}

export default App