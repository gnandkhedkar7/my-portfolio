import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import WorkExperience from './components/work-experience/WorkExperience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
       <WorkExperience />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  )
}

export default App