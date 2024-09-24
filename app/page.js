'use client'

import Intro from "./component/section_component/Intro"
import About from "./component/section_component/About"
import Experience from "./component/section_component/Experience"
import Contact from "./component/section_component/Contact"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import NavBar from "./component/NavBar"

export default function Home() {
  const sections = {
    Intro,
    About,
    Experience,
    Contact
  }
  const [activeSection, set_activeSection] = useState("Intro")
  return (
    <main className="
          flex flex-1 flex-col
          mx-[10%]
          my-[5%]
          justify-center
          overflow-hidden
    ">
      <NavBar
        sections={Object.keys(sections)}
        activeSection={activeSection}
        onSectionChange={set_activeSection}
      />
      <section 
            className="
                w-[98%]
                p-[2%]
                mb-[3%]
                rounded-3xl shadow-lg
                bg-blue-800 bg-opacity-25
                h-[640px]
        ">
            
            <AnimatePresence mode="wait">
                <motion.div className="p-[3%] size-[100%] rounded-3xl"
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {sections[activeSection]()}
                </motion.div>
            </AnimatePresence>
        </section>
    </main>
  )
}