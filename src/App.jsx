import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Vsl from './components/Vsl'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialSection from './components/TestimonialsSection'
import Faq from './components/Faq'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Vsl/>
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <Faq />
    </>
  )
}

export default App