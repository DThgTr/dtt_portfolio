import ExpCard from "../util/ExpCard";

export default function Experience() {
    const work_exp = [
        {
            position: "Full Stack Developer",
            company:"Petrolimex Da Nang, Vietnam",
            date: ["Jun 2024", "Aug 2024"],
            content:"Designed, built and shipped a multi-platform mobile portal to meet Petrolimex Da Nang's enterprise need for efficient querying of onsite fuel equipment information. Collaborated with the database team to construct API support for seamless integration with Petrolimex's database infrastructure and for their equipment QR Code system.",
            skills: ["C#", ".NET Core", "Javascript", "React", "React Native", "IIS"]
        },
        {
            position: "IT Intern",
            company:"Da Nang Hospital, Vietnam",
            date: ["Jun 2022", "Aug 2022"],
            content:"Collaborated with the IT team to configure and deploy a demo AlwaysOn Availability Group. Setup Windows Server 2016 virtual machines on VMware Workstation as well as helped configure a Windows Server Failover Cluster (WSFC) and integrate SQL Server instances into the WSFC. Assisted the Network Administrator in demonstrating the demo, which was approved for further development as an upgrade to the hospital's disaster recovery system.",
            skills: ["Networking", "SQL Server", "Windows Server 2016", "VMWare Workstation"]
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
                                <td className="text-xl px-[3%] w-[20%]">
                                    <p className="italic text-lg flex flex-col justify-center items-center">
                                        <span>{date[0]}</span>
                                        <span>-</span>
                                        <span>{date[1]}</span>
                                    </p>
                                </td>
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