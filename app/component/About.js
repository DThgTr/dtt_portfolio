import React from "react"
import styles from "./About.module.css"

export default function About() {
    return (
        <main className="size-[100%]">
            <div className="text-3xl flex flex-row">
                <p className="text-yellow-500 mr-2">About</p>
                Me
            </div>

            <div className="my-3 border border-white"></div>

            <section>
                <div className="max-w-min min-w-fit text-xl">
                    <p className="mb-5">
                        Hi! I'm <span className="text-yellow-500">Thang</span>, some might know me as <span className="text-yellow-500">Colby</span>. 
                        Currently a Computer Science senior at the University of Texas at Dallas, I am graduating in <strong className="underline">May 2025</strong>.
                    </p>
                    <p className="mb-5">
                        <strong className="text-3xl text-yellow-500">As</strong> a developer, I am fascinated with building responsive and scalable applications as well as exploring and applying various architecture designs and standards.
                    </p>
                    <p>
                        <strong className="text-3xl text-yellow-500">I</strong> am attentive to details and always on the lookout for new opportunities to grow my skills.
                    </p>
                </div>
            </section>

            <div className="my-5"></div>

            <section className="flex flex-wrap justify-center">
                <p className="text-3xl text-center w-[100%] m-5">
                    Notable <strong className="text-yellow-500">Skills</strong>:
                </p>
                <div className="flex flex-wrap flex-row w-[100%] justify-center ">
                    <section>
                        <div className="flex flex-row">
                                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                                    <img className={styles.skill_icon} src="/SVG/c-sharp.svg"/>
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                    <img className={styles.skill_icon} src="/SVG/js.svg"/>
                                </a>
                                <a href="https://docs.oracle.com/en/java/index.html">
                                    <img className={styles.skill_icon} src="/SVG/java.svg"/>
                                </a>
                        </div>
                    </section>

                    <div className="mx-5 border border-white"></div>
                    
                    <section>
                        <div className="flex flex-row">
                            <a href="https://learn.microsoft.com/en-us/dotnet/">
                                <img className={styles.skill_icon} src="/SVG/netCore.svg"/>
                            </a>
                            <a href="https://tailwindcss.com/docs/installation">
                                <img className={styles.skill_icon} src="/SVG/tailwind-css.svg"/>
                            </a>
                            <a href="https://react.dev/">
                                <img className={styles.skill_icon} src="/SVG/reactjs.svg"/>
                            </a>
                            <a href="https://nextjs.org/docs">
                                <img className={styles.skill_icon} src="/SVG/nextjs.svg"/>
                            </a>
                            <a href="https://reactnative.dev/">
                                <img className={styles.skill_icon} src="/SVG/react-native.svg"/>
                            </a>
                            <a href="https://docs.expo.dev/get-started/introduction/">
                                <img className={styles.skill_icon} src="/SVG/expo.svg"/>
                            </a>
                            <a href="https://spring.io/projects/spring-boot">
                                <img className={styles.skill_icon} src="/SVG/springio-icon.svg"/>
                            </a>
                        </div>
                    </section>
                </div>
            </section>
            
        </main>
    )
}