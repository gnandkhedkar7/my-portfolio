import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App