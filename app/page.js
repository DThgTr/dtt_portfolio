'use client'

import Image from "next/image";
import { useState } from "react";
import About from "./component/About";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  const [activeContent, set_activeContent] = useState("About")

  return (
    <div className="
          flex flex-1 flex-col sm:flex-row 
          m-[2%] 
          overflow-hidden
    ">
      {/*=====================CONTENT NAV=====================*/}
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

      {/*=====================QUICK INFO=====================*/}
      <div className="
            flex flex-wrap flex-col
            items-center
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

        <div className="
                break-words overflow-wrap-break-word
                flex flex-wrap flex-col
                justify-center
                m-[5%]
                p-[3%]
        ">
            <p className="font-bold text-3xl text-center">
                Duc Thang Tran
            </p>
            
            <div className="my-3 border"></div>

            <p className="font-bold text-base text-center">
                Software Engineer
            </p>

            <div className="my-3"></div>
            
            <div className="
                flex flex-wrap flex-row
                justify-center
            ">
              <a href="https://www.linkedin.com/in/ducthangtran" target="_blank"
                className="
                  hover:opacity-50
                  p-2
              ">
                <Linkedin className="w-8 h-8"/>
              </a>
              <a href="https://github.com/DThgTr" target="_blank"
                className="
                  hover:opacity-50
                  p-2
              ">
                <Github className="w-8 h-8"/>
              </a>
            </div>
        </div>
      </div>
      
      {/*=====================CONTENT=====================*/}
      <div className="
            flex-grow 
            p-4 
            my-[3%] mr-[3%]
            rounded-3xl shadow-lg
            bg-blue-800 bg-opacity-15
      ">
        <div className="
              p-4
              size-[100%]
              border rounded-3xl border-white
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
    </div>
  )
}