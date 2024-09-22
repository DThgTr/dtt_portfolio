'use client'

import React from "react";
import NavBar from "./component/NavBar";
import Intro from "./component/Intro";
import Sections from "./component/Sections";

export default function Home() {
  return (
    <main className="
          flex flex-1 flex-col
          mx-[10%]
          my-[5%]
          justify-center
          overflow-hidden
    ">
      {/*=====================CONTENT NAV=====================*/}
      <NavBar/>
      {/*=====================QUICK INFO SECTION=====================*/}
      <Intro/>
      {/*=====================CONTENT SECTION=====================*/}
      <Sections/>
    </main>
  )
}