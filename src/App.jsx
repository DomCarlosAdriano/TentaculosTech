import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Vsl from './components/Vsl'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialSection from './components/TestimonialsSection'
import Faq from './components/Faq'
import Footer from './components/Footer'
import CommunitySection from './components/CommunitySection'
import ProcessoContratacao from './components/ProcessoContratacao'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Vsl/>
      <ServicesSection />
      <ProcessoContratacao />
      <ProjectsSection />
      <TestimonialSection />
      <Faq />
      <CommunitySection />
      <Footer />
    </>
  )
}

export default App