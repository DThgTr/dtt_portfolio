'use client'

import React from 'react'
import { LucideHome } from 'lucide-react'

export default function NavBar({ sections, activeSection, onSectionChange }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="
            text-4xl font-semibold flex items-center space-x-2 
            text-transparent
            bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-100
          ">
              <span>Duc Thang Tran</span>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => onSectionChange('Intro')}
                className={`px-3 py-2 rounded-md font-medium mr-2 transition-colors ${
                  activeSection === 'Intro' ? 'bg-indigo-500 text-white' : 'hover:bg-pink-400'
                }`}
              >
                <LucideHome className="size-8"/>
              </button>
              {sections.filter(section => section !== 'Intro').map((section) => (
                <button
                  key={section}
                  onClick={() => onSectionChange(section)}
                  className={`px-3 py-2 rounded-md text-lg font-medium mr-2 transition-colors ${
                    activeSection === section
                      ? 'bg-indigo-500 text-white'
                      : 'hover:bg-pink-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  )
}