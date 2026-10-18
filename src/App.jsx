import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
