
import { Github, Link2, Linkedin, Mail, PhoneCall } from "lucide-react";

export default function Intro() {
    return (
      <section className="
          flex flex-col md:flex-row
          items-center
          size-full
          space-x-[2%]
      ">
        <section className="
          flex flex-col w-[45%] h-full
          justify-center
          items-center
          space-y-3
          px-3
        ">
          <figure className="relative w-[250px] md:w-[70%]">
            <img src="/the_handsome_me.jpeg"  alt="author's picture" className="object-cover size-full rounded-3xl border"/>
          </figure>
          <div className="text-lg">
            <span className="flex flex-row space-x-4">
              <PhoneCall className="size-7"/> 
              <p>+1 469 922 7783</p>
            </span>
            <span className="flex flex-row space-x-4">
              <Mail className="size-7"/> 
              <p>tdtran420@gmail.com</p>
            </span>
          </div>
          
        </section>
        

        <section className="
                flex flex-col
                p-[1%]
        ">
            {/*Intro */}
            <div className="
                break-words overflow-wrap break-word
            ">
                

                <p className="text-2xl italic space-y-3 flex flex-col">
                    <span className="text-xl italic">Hello there!</span>
                    <span className="md:ml-12">My name is <strong className="text-yellow-400">Duc Thang Tran</strong>.</span>
                    <span className="md:ml-24">Some know me as <strong className="text-yellow-400">Colby</strong>.</span>
                </p>

                <p className="font-bold text-4xl my-[5%]">
                    I am a <em className="text-yellow-400">Software Engineer</em>
                </p>
            </div>

            {/*Links */}
            <div className="flex flex-row justify-center">
              <a href="https://www.linkedin.com/in/ducthangtran" target="_blank"
                className="hover:opacity-50 hover:text-blue-400 p-2"
              >
                <Linkedin className="size-12"/>
              </a>
              <div className="mx-3"/>
              <a href="https://github.com/DThgTr" target="_blank"
                className="hover:opacity-50 hover:text-blue-400 p-2"
              >
                <Github className="size-12"/>
              </a>
            </div>
            
            <div className="flex flex-row justify-center space-x-2 hover:text-blue-400 hover:opacity-50 underline text-2xl mt-3">
              <Link2 className="pr-2 size-10"/>
                <a href="https://docs.google.com/document/d/14_n4Mf9zu7zjXIZUN7Gw3aVsB3qDK-b4Ic_KCAnipF0/edit?usp=drive_link">
                    Resume
                </a>
              <Link2 className="pl-2 size-10"/>
            </div>
        </section>
      </section>
    )
}