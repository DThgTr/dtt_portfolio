'use client'

import { useState, useEffect } from 'react'

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('section1')

  useEffect(() => {
    const sections = ['About', 'Experience', 'Contact']
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    }
  }

  return (
    <div className="min-w-screen">
      <nav 
        className="fixed top-0 left-0 right-0 bg-background shadow-lg text-2xl z-50
        bg-gradient-to-b from-fuchsia-800 to-violet-600
      ">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <span className="font-bold">Colby Tran Portfolio</span>
          <div className="space-x-5">
            <button
              variant={activeSection === 'section1' ? 'default' : 'outline'}
              onClick={() => scrollToSection('About')}
            >
              About
            </button>
            <button 
              variant={activeSection === 'section2' ? 'default' : 'outline'}
              onClick={() => scrollToSection('Experience')}
            >
              Experience
            </button>
            <button 
              variant={activeSection === 'section3' ? 'default' : 'outline'}
              onClick={() => scrollToSection('Contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}