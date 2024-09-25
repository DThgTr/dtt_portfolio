'use client'

import React from 'react'
import { LucideHome } from 'lucide-react'

export default function NavBar({ sections, activeSection, onSectionChange }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <button
              onClick={() => onSectionChange('Intro')}
              className="text-3xl font-semibold hover:text-blue-500 flex items-center space-x-2"
            >
              <LucideHome className="size-10"/>
              <span>Duc Thang Tran</span>
            </button>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
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