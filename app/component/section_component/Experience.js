import ExpCard from "../util/ExpCard";
import resume_lists from '@/app/resume_lists.json'

export default function Experience() {
    const work_exp = resume_lists.work_exp

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