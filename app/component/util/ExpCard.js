export default function ExpCard({position, company, content, skills}) {
    return (
        <div className="
            bg-indigo-800
            rounded-lg 
            shadow-slate-800 shadow-md
            my-3
            w-full
        ">
            <div className="p-[5%]">
                <p className="font-bold text-xl pb-2 mb-2 border-b">{position}</p>
                <p className="text-sm text-gray-400">{company}</p>
                <p className="text-base my-3">{content}</p>
                <div className="flex overflow-auto md:flex-row">
                    {skills.map((skill) => {
                        return(
                            <p className="bg-blue-600 border rounded-xl px-2 py-1 m-1 hover:brightness-150 text-base flex justify-center items-center"><strong>{skill}</strong></p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
  }