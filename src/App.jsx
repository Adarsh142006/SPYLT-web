import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection'


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <MessageSection/>
      <FlavourSection/>
      <div className='h-dvh border border-red-500'/>
    </main>
  )
}

export default App