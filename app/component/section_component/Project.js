import ProjCard from "../util/ProjCard"
import content from '@/app/content.json'

export default function Project() {
    const projects = content.projects

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