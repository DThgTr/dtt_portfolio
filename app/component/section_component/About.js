import content from '@/app/content.json'

export default function About() {
    const lang_skill = content.lang_skill
    const tool_skill = content.tool_skill
    const aboutContent = content.about_content
    return (
        <main className="size-[100%]">
            <div className="text-3xl flex flex-row border-b-2 border-b-white pb-3 mb-3">
                <p className="text-yellow-500 mr-2">About</p>
                Me
            </div>

            <section>
                <div className="max-w-min min-w-fit text-xl">
                    <p className="mb-5" dangerouslySetInnerHTML={{ __html: aboutContent.text }} />
                    <p dangerouslySetInnerHTML={{ __html: aboutContent.developer_section }} />
                    <p dangerouslySetInnerHTML={{ __html: aboutContent.individual_section }} />
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