'use client'

import Image from "next/image";
import { useState } from "react";
import About from "./component/About";
import Resume from "./component/Resume";
import Contact from "./component/Contact";

export default function Home() {
  const [activeContent, set_activeContent] = useState("About")

  return (
    <div className="
          flex flex-1 flex-col sm:flex-row 
          m-[2%] 
          overflow-hidden
    ">
      {/*CONTENT NAV*/}
      <nav className="
            sm:w-1/6 md:w-1/12 
            p-4
            my-[2%]
      ">
        <ul className="flex sm:flex-col justify-end space-x-4 sm:space-x-0 sm:space-y-2">
          <li className="min-w-0">
            <button id="content_nav_butn" onClick={() => set_activeContent("About")}>
              About
            </button>
          </li>
          <li className="min-w-0">
            <button id="content_nav_butn" onClick={() => set_activeContent("Resume")}>
              Resume
            </button>
          </li>
          <li className="min-w-0">
            <button id="content_nav_butn" onClick={() => set_activeContent("Contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* QUICK INTRODUCTION */}
      <div className="
            flex flex-wrap flex-col
            sm:w-1/3 md:w-3/12 
            rounded-3xl shadow-xl
            p-4 
            my-[2%]
            bg-blue-800 bg-opacity-25
      ">
        <div className="relative h-[50%] w-[100%]">
          <Image src={"/incandescent.jpeg"}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl border"
          />
        </div>

        <div className="break-words overflow-wrap-break-word">
          Intro text \[T]/
        </div>
      </div>
      
      {/* CONTENT */}
      <div className="
            flex-grow 
            p-4 
            my-[3%] mr-[3%]
            rounded-3xl shadow-lg
            bg-blue-800 bg-opacity-15
      ">
        {
          activeContent === "About" && <About/>
        }
        {
          activeContent === "Resume" && <Resume/>
        }
        {
          activeContent === "Contact" && <Contact/>
        }
      </div>
    </div>
  )
}