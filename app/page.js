'use client'

import Intro from "./component/section_component/Intro"
import About from "./component/section_component/About"
import Experience from "./component/section_component/Experience"
import Project from "./component/section_component/Project"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import NavBar from "./component/NavBar"

export default function Home() {
  const [activeSection, set_activeSection] = useState("Intro")

  const section_comps = {
    Intro,
    About,
    Experience,
    Project
  }
  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-pink-800 via-purple-800 to-blue-800">
      <NavBar
        sections={Object.keys(section_comps)}
        activeSection={activeSection}
        onSectionChange={set_activeSection}
      />
      <div className="
            h-full
            flex flex-1 flex-col
            mx-[10%]
            my-[5%]
            items-center
            relative
            top-[10%]
            md:top-0
      ">
        <section 
              className="
                  h-[80%]
                  w-[98%]
                  p-[2%]
                  mb-[3%]
                  rounded-3xl shadow-lg
                  bg-blue-600 bg-opacity-25
                  brightness-110
          ">
              <AnimatePresence mode="wait">
                  <motion.div className="h-full overflow-auto p-[3%] rounded-3xl"
                      key={activeSection}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                  >
                      {section_comps[activeSection]()}
                  </motion.div>
              </AnimatePresence>
          </section>
      </div>
    </main>
  )
}