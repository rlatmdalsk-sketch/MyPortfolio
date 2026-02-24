import {
    SiCss3,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiNotion,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { BsGithub } from "react-icons/bs";
import { DiPhotoshop } from "react-icons/di";

const skills = [
    { label: "HTML5", icon: <SiHtml5 className="h-8 w-8 text-[#E44D26] md:h-14 md:w-14" /> },
    { label: "CSS3", icon: <SiCss3 className="h-8 w-8 text-[#1572B6] md:h-14 md:w-14" /> },
    {
        label: "JavaScript",
        icon: (
            <SiJavascript className="h-8 w-8 rounded-sm bg-black text-[#F7DF1E] md:h-14 md:w-14" />
        ),
    },
    { label: "React", icon: <SiReact className="h-8 w-8 text-[#61DAFB] md:h-14 md:w-14" /> },
    {
        label: "Tailwind",
        icon: <SiTailwindcss className="h-8 w-8 text-[#38BDF8] md:h-14 md:w-14" />,
    },
    {
        label: "TypeScript",
        icon: <SiTypescript className="h-8 w-8 text-[#3178C6] md:h-14 md:w-14" />,
    },
    { label: "Figma", icon: <SiFigma className="h-8 w-8 text-[#F24E1E] md:h-14 md:w-14" /> },
    { label: "Git", icon: <BsGithub className="h-8 w-8 text-white md:h-14 md:w-14" /> },
    {
        label: "Photoshop",
        icon: <DiPhotoshop className="h-8 w-8 text-[#31A8FF] md:h-14 md:w-14" />,
    },
    { label: "Notion", icon: <SiNotion className="h-8 w-8 text-white md:h-14 md:w-14" /> },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className={twMerge(
                "relative",
                "flex flex-col justify-center",
                "min-h-screen",
                "overflow-hidden",
                "bg-[#1a1714]",
                "py-20",
            )}>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className={twMerge("relative", "mx-auto", "w-full max-w-5xl", "px-4 md:px-6")}>
                <div className={twMerge("mb-4", "flex items-center gap-4")} data-aos="fade-up">
                    <span className="text-[10px] tracking-[.22em] text-[#c9a96e] uppercase md:text-[11px]">
                        Skills & Tools
                    </span>
                    <span className={twMerge("h-px w-12", "bg-[#c9a96e]/30")} aria-hidden="true" />
                </div>

                <h2
                    className={twMerge(
                        "mb-12",
                        "font-serif text-5xl leading-[1.1] text-white",
                        "md:mb-20 md:text-7xl",
                    )}
                    data-aos="fade-up">
                    Technical
                    <br />
                    <em className="text-[#c9a96e] italic">Skills</em>
                </h2>

                <div className="grid grid-cols-5 gap-2 md:gap-6" data-aos="fade-up">
                    {skills.map(({ label, icon }) => (
                        <article
                            key={label}
                            className={twMerge(
                                "group relative flex flex-col items-center justify-center gap-2 md:gap-5",
                                "px-1 py-4 md:px-4 md:py-10",
                                "rounded-xl border border-white/10 bg-white/3 md:rounded-3xl",
                                "hover:border-[#c9a96e]/50 hover:bg-white/8",
                                "transition-all duration-500 hover:-translate-y-1.5",
                            )}>
                            <div className="relative transition-transform duration-500 group-hover:scale-110">
                                {icon}
                            </div>
                            <span
                                className={twMerge(
                                    "text-[9px] font-medium tracking-tight text-white/40",
                                    "transition-colors group-hover:text-[#c9a96e]",
                                    "md:text-[13px] md:tracking-widest",
                                )}>
                                {label}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
