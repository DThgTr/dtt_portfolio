import ExpCard from "../util/ExpCard";

export default function Experience() {
    const work_exp = [
        {
            position: "Full Stack Developer",
            company:"Petrolimex Da Nang, Vietnam",
            date:"Jun 2024 - Aug 2024",
            content:"Designed, built and shipped a multi-platform mobile portal to meet Petrolimex Da Nang's enterprise need for efficient querying of onsite fuel equipment information. Collaborated with the database team to construct API support for seamless integration with Petrolimex's database infrastructure and for their equipment QR Code system.",
            skills: ["C#", ".NET Core", "Javascript", "React", "React Native", "IIS"]
        },
        {
            position: "IT Intern",
            company:"Da Nang Hospital, Vietnam",
            date:"Jun 2022 - Aug 2022",
            content:"Collaborated with the IT team to identify key strength and weak points within Da Nang Hospital's intranet configuration. Constructed a virtual Always On Availability group model as a potential improvement for the hospital's current network model.",
            skills: ["Windows Server 2016", "High Availability Network design"]
        }
    ]

    return (
        <div className="size-full">
            <table className="table-fixed w-[100%]">
                <caption className="text-3xl border-b-2 border-b-white pb-3 mb-3 text-center">
                    <p className="text-yellow-500 mr-2">Work Experience</p>
                </caption>
                <tbody className="px-4">
                    {work_exp.map(({position, company, date, content, skills}) => {
                        return (
                            <tr>
                                <td className="text-xl px-[3%] w-[30%]">{date}</td>
                                <td className="pr-[3%]">
                                    <ExpCard
                                        position={position}
                                        company={company}
                                        content={content}
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
/*
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
*/