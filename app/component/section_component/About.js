export default function About() {
    const lang_skill = [
        {
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
            logo: "c-sharp.svg"
        },
        {
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            logo: "js.svg"
        },
        {
            link: "https://docs.oracle.com/en/java/index.html",
            logo: "java.svg"
        },
        {
            link: "https://www.python.org/",
            logo: "python.svg"
        }
    ]
    const tool_skill = [
        {
            link: "https://learn.microsoft.com/en-us/dotnet/",
            logo: "netCore.svg"
        },
        {
            link: "https://tailwindcss.com/",
            logo: "tailwind-css.svg"
        },
        {
            link: "https://react.dev/",
            logo: "reactjs.svg"
        },
        {
            link: "https://nextjs.org/docs",
            logo: "nextjs.svg"
        },
        {
            link: "https://reactnative.dev/",
            logo: "react-native.svg"
        },
        {
            link: "https://docs.expo.dev/get-started/introduction",
            logo: "expo.svg"
        },
        {
            link: "https://spring.io/projects/spring-boot",
            logo: "springio-icon.svg"
        },
    ]
    return (
        <main className="size-[100%]">
            <div className="text-3xl flex flex-row border-b-2 border-b-white pb-3 mb-3">
                <p className="text-yellow-500 mr-2">About</p>
                Me
            </div>

            <section>
                <div className="max-w-min min-w-fit text-xl">
                    <p className="mb-5">
                        I am currently a Computer Science senior at the University of Texas at Dallas, graduating in May 2025.&nbsp;
                        <span className="mt-2">
                            My specialty lies in developing <em className="text-yellow-600">fullstack applications</em> with a focus on building <em className="text-yellow-600">backend systems</em>.&nbsp;
                            I have experience working with <em className="text-yellow-600">.NET Core, React, React Native and Spring Boot</em>. My strongest language is <em className="text-yellow-600">Java</em>, but I am also familiar with <em className="text-yellow-600">C#, Javascript, C and C++</em>. In addition, I have been learning Machine Learning on my own for nearly a year, doing data cleaning and training models using <em className="text-yellow-600">Python and mostly Tensorflow</em>.
                        </span>
                    </p>
                    <p className="mb-5">
                        <strong className="text-3xl text-yellow-500">As a developer</strong>, I am fascinated with building responsive and scalable applications as well as exploring and applying various architecture best practices and standards.
                    </p>
                    <p>
                        <strong className="text-3xl text-yellow-500">As an individual</strong>, I am attentive to details and always on the lookout for new opportunities to grow my skills.
                    </p>
                </div>
            </section>

            <section className="flex flex-wrap justify-center">
                <p className="text-3xl text-center w-[100%] m-5">
                    Main <strong className="text-yellow-500">Skills</strong>:
                </p>
                <div className="flex flex-wrap flex-row w-[100%] justify-center space-y-3 md:space-y-0">
                    <section>
                        <div className="flex flex-row space-x-2 mx-2">
                            {lang_skill.map(({link, logo}) => {
                                return (
                                    <a href={link}>
                                        <img className="size-10 md:size-14 lg:size-16 hover:opacity-25" src={`/SVG/${logo}`}/>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                    
                    <section>
                        <div className="flex flex-row space-x-2 mx-2">
                            {tool_skill.map(({link, logo}) => {
                                return (
                                    <a href={link}>
                                        <img className="size-10 md:size-14 lg:size-16 hover:opacity-25" src={`/SVG/${logo}`}/>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </section>
            
        </main>
    )
}