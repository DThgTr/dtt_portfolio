'use client'

import React from "react";
import Image from "next/image";
import { useState } from "react";
import About from "./component/About";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import { Github, Link2, Linkedin } from "lucide-react";

export default function Home() {
  const [activeContent, set_activeContent] = useState("About")

  return (
    <main className="
          flex flex-1 flex-col sm:flex-row 
          m-[2%] 
          overflow-hidden
    ">
      {/*=====================CONTENT NAV=====================*/}
      <nav className="
            w-[12%]
            p-4
            my-[2%]
      ">
        <ul className="flex sm:flex-col justify-end space-x-4 sm:space-x-0 sm:space-y-2">
          <li className="min-w-0">
            <button className="content_nav_butn" onClick={() => set_activeContent("About")}>
              About
            </button>
          </li>
          <li className="min-w-0">
            <button className="content_nav_butn" onClick={() => set_activeContent("Resume")}>
              Experience
            </button>
          </li>
          <li className="min-w-0">
            <button className="content_nav_butn" onClick={() => set_activeContent("Contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/*=====================QUICK INFO SECTION=====================*/}
      <section className="
            flex flex-wrap flex-col
            items-center
            w-3/12
            rounded-3xl shadow-xl
            p-4 
            my-[2%]
            bg-blue-800 bg-opacity-25
      ">
        <figure className="relative h-[50%] w-[100%]">
          <Image src={"/incandescent.jpeg"}
            fill
            objectFit="cover"
            className="rounded-3xl border"
          />
        </figure>

        <section className="
                break-words overflow-wrap break-word
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
        </section>

        <footer className="flex flex-row hover:text-blue-400 underline">
          <Link2 className="pr-2"/>
          <a href="https://docs.google.com/document/d/14_n4Mf9zu7zjXIZUN7Gw3aVsB3qDK-b4Ic_KCAnipF0/edit?usp=drive_link">
            Download Resume
          </a>
          <Link2 className="pl-2"/>
        </footer>
      </section>
      
      {/*=====================CONTENT SECTION=====================*/}
      <section className="
            flex flex-grow
            p-[2%]
            my-[3%] mr-[3%]
            rounded-3xl shadow-lg
            bg-blue-800 bg-opacity-15
      ">
        <div className="
              p-[3%]
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
      </section>
    </main>
  )
}