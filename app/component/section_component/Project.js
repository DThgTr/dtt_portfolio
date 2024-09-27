import ProjCard from "../util/ProjCard"

export default function Project() {
    const projects = [
        {
            proj_name: "Web Portfolio",
            proj_link: ["Github", "https://github.com/DThgTr/dtt_portfolio"],
            description: "This is my personal web portfolio. It is built with React, styled with Tailwind and deployed on Netlify.",
            skills: ["Javascript", "React", "Tailwind", "Nextjs"]
        },
        {
            proj_name: "Sale Management Application (Melior)",
            proj_link: ["Github", "https://github.com/DThgTr/meliorapp"],
            description: "Melior is a Spring Boot-powered, web-based sample system application that manage sale transactions as well as customers' information of an essential oils company. It employs Restful architectural style as the template for its APIs, which are documented with Swagger UI. This project is where I put to use my ability to employ Test-Driven Development methodology, design cohesive Database schemas and formulate Software Architecture Design.",
            skills: ["Java", "Spring Boot", "Rest API", "OpenAPI"]
        },
        {
            proj_name: "ACM Research",
            proj_link: ["ACM UTD", "https://www.acmutd.co/research"],
            description: "ACM Research is a semseter-long program ochestrated by ACM UTD. During my time here, I collaborated with a team to conduct guided research on methods for uncovering anonymous users in Tornado Cash, a crypto tumbler. We developed a simulation environment and data collection scripts, which automated the result collection and compilation process. Comparison test are then performed on the collected simulated transaction data with a predetermined heuristic cluster pattern as the core, which indicated prospects of enhancing address linking accuracy up to 84%.",
            skills: ["Javascript", "Shell Scripting"]
        },
        {
            proj_name: "OS Instruction Intepreter",
            proj_link: [],
            description: "This is a Java application that simulated the behavior of a Processor and its Memory, built as a part of OS System coursework. Encoding and execution support were built for 31 distinct low-level instructions.",
            skills: ["Java", "Operating System Programming"]
        }
    ]

    return (
        <div className="size-full">
            <table className="table-fixed w-[100%]">
                <caption className="text-3xl border-b-2 border-b-white pb-3 mb-3 text-center">
                    <p className="text-yellow-500 mr-2">Projects</p>
                </caption>

                <tbody>
                    {projects.map(({proj_name, proj_link, description, skills}) => {
                        return (
                            <tr>
                                <td className="px-[3%]">
                                    <ProjCard
                                        proj_name={proj_name}
                                        proj_link={proj_link}
                                        description={description}
                                        skills={skills}
                                    />
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}