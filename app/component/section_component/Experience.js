import ExpCard from "../util/ExpCard";
import ProjCard from "../util/ProjCard";

export default function Experience() {
    const work_exp = [
        {
            position: "Full Stack Developer",
            company:"Petrolimex Da Nang, Vietnam",
            date:"Jun 2024 - Aug 2024",
            content:"Designed, built and shipped a multi-platform mobile portal to meet Petrolimex Da Nang's enterprise need for efficient querying of onsite fuel equipment information. Collaborated with the database team to construct API support for seamless integration with Petrolimex's database infrastructure and for their equipment QR Code system.",
            skills: ["C#", ".NET Core", "Javascript", "React Native", "IIS"]
        },
        {
            position: "IT Intern",
            company:"Da Nang Hospital, Vietnam",
            date:"Jun 2022 - Aug 2022",
            content:"Collaborated with the IT team to identify key strength and weak points within Da Nang Hospital's intranet configuration. Constructed a virtual Always On Availability group model as a potential improvement for the hospital's current network model.",
            skills: ["Windows Server 2016", "High Availability Network design"]
        }
    ]

    const projects = [
        {
            proj_name: "Sale Management Application (Melior)",
            proj_link: ["Github", "https://github.com/DThgTr/meliorapp"],
            description: "Melior is a Spring Boot-powered, web-based sample system application that manage sale transactions as well as customers' information of an essential oils company. It employs Restful architectural style as the template for its APIs, which are documented with Swagger UI. This project is where I put to use my ability to employ Test-Driven Development methodology, design cohesive Database schemas and formulate Software Architecture Design",
            skills: ["Java", "Spring Boot"]
        },
        {
            proj_name: "ACM Research",
            proj_link: ["ACM UTD", "https://www.acmutd.co/research"],
            description: "Collaborated with a team to conduct guided research on methods for uncovering anonymous users in Tornado Cash, a crypto tumbler. Helped develop a simulation environment and data collection scripts, which automated the result collection and compilation process. Performed comparison test on the collected simulated transaction data with a predetermined heuristic cluster pattern as the core, which indicated prospects of enhancing address linking accuracy up to 84%.",
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
        <main className="size-full">
            <section className="grid grid-cols-[1fr_1px_1fr] gap-4 h-full">
                <div className="w-full">
                    <div className="text-3xl border-b-2 border-b-white pb-3 mb-3 text-center">
                        <p className="text-yellow-500 mr-2">Work Experience</p>
                    </div>
                    <div className="overflow-hidden overflow-y-scroll">
                        {work_exp.map(({position, company, date, content, skills}) => {
                            return (
                                <ExpCard
                                    position={position}
                                    company={company}
                                    date={date}
                                    content={content}
                                    skills={skills}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="w-px bg-white"></div>

                <div className="w-full">
                    <div className="text-3xl border-b-2 border-b-white pb-3 mb-3 text-center">
                        <p className="text-yellow-500 mr-2">Projects</p>
                    </div>
                    {projects.map(({proj_name, proj_link, description, skills}) => {
                        return (
                            <ProjCard
                                proj_name={proj_name}
                                proj_link={proj_link}
                                description={description}
                                skills={skills}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}