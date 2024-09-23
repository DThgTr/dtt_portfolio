
import Image from "next/image";
import { Github, Link2, Linkedin } from "lucide-react";

export default function Intro() {
    return (
      <section className="
          flex md:flex-row sm:flex-col sm
          justify-center
          items-center
          w-[98%]
          md:h-[600px] sm:h-[800px]
          rounded-3xl shadow-lg
          p-[5%]
          mb-[3%]
          bg-blue-800 bg-opacity-15
          brightness-110
      ">
        <figure className="relative md:h-[70%] md:w-[30%] sm:size-[40%] ">
            <img src="/incandescent.jpeg"  alt="author's picture" className="object-cover size-full rounded-3xl border"/>
        </figure>

        <div className="mx-[4%]"></div>

        <section className="
                flex flex-col
                w-[50%]
                p-[3%]
        ">
            {/*Intro */}
            <div className="
                break-words overflow-wrap break-word
            ">
                <p className="text-xl mb-2 italic">Hello there!</p>

                <p className="text-xl italic">
                    &emsp;My name is <strong className="text-yellow-500">Duc Thang Tran</strong>. 
                    <br className="mb-2"/>
                    &emsp;&emsp;Some know me as <strong className="text-yellow-500">Colby</strong>.
                </p>

                <p className="font-bold text-3xl my-[10%]">
                    I am a <em className="text-yellow-500">fullstack developer</em>
                </p>
            </div>

            {/*Links */}
            <div className="flex flex-row justify-center
            ">
              <a href="https://www.linkedin.com/in/ducthangtran" target="_blank"
                className="hover:opacity-50 hover:text-yellow-400 p-2"
              >
                <Linkedin className="size-12"/>
              </a>
              <div className="mx-3"/>
              <a href="https://github.com/DThgTr" target="_blank"
                className="hover:opacity-50 hover:text-yellow-400 p-2"
              >
                <Github className="size-12"/>
              </a>
            </div>
            
            <div className="flex flex-row justify-center hover:text-yellow-400 hover:opacity-50 underline text-2xl mt-3">
              <Link2 className="pr-2 size-10"/>
                <a href="https://docs.google.com/document/d/14_n4Mf9zu7zjXIZUN7Gw3aVsB3qDK-b4Ic_KCAnipF0/edit?usp=drive_link">
                    Download Resume
                </a>
              <Link2 className="pl-2 size-10"/>
            </div>
        </section>
      </section>
    )
}