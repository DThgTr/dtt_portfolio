import About from "./section_component/About"
import Experience from "./section_component/Experience"
import Contact from "./section_component/Contact"

export default function Sections() {
    const sections = [
        {
          name: "About",
          comp: About
        },
        {
          name: "Experience",
          comp: Experience
        },
        {
          name: "Contact",
          comp: Contact
        }
    ]

    return (
        sections.map(({name, comp: Comp}) => {
            return (
                <section id={name} className="
                    w-[98%]
                    p-[2%]
                    my-[3%]
                    rounded-3xl shadow-lg
                    bg-blue-800 bg-opacity-15
                    scroll-mt-20
                    h-[680px]
                ">
                    <div className="
                    p-[3%]
                    size-[100%]
                    border rounded-3xl border-white
                    ">
                    <Comp/>
                    </div>
                </section>
            )
        })
    )
}