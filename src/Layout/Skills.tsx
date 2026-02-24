import {
    SiCss3, SiFigma, SiHtml5, SiJavascript, SiNotion, SiReact, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { BsGithub } from "react-icons/bs";
import { DiPhotoshop } from "react-icons/di";

const skills = [
    { label: "HTML5", icon: <SiHtml5 className="w-8 h-8 md:w-14 md:h-14 text-[#E44D26]" /> },
    { label: "CSS3", icon: <SiCss3 className="w-8 h-8 md:w-14 md:h-14 text-[#1572B6]" /> },
    { label: "JavaScript", icon: <SiJavascript className="w-8 h-8 md:w-14 md:h-14 text-[#F7DF1E] bg-black rounded-sm" /> },
    { label: "React", icon: <SiReact className="w-8 h-8 md:w-14 md:h-14 text-[#61DAFB]" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="w-8 h-8 md:w-14 md:h-14 text-[#38BDF8]" /> },
    { label: "TypeScript", icon: <SiTypescript className="w-8 h-8 md:w-14 md:h-14 text-[#3178C6]" /> },
    { label: "Figma", icon: <SiFigma className="w-8 h-8 md:w-14 md:h-14 text-[#F24E1E]" /> },
    { label: "Git", icon: <BsGithub className="w-8 h-8 md:w-14 md:h-14 text-white" /> },
    { label: "Photoshop", icon: <DiPhotoshop className="w-8 h-8 md:w-14 md:h-14 text-[#31A8FF]" /> },
    { label: "Notion", icon: <SiNotion className="w-8 h-8 md:w-14 md:h-14 text-white" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen flex flex-col justify-center py-20 bg-[#1a1714] overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-4 md:px-6 w-full">
                <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
                    <span className="text-[10px] md:text-[11px] tracking-[.22em] uppercase text-[#c9a96e]">Skills & Tools</span>
                    <span className="h-px bg-[#c9a96e]/30 w-12" aria-hidden="true" />
                </div>

                <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-white mb-12 md:mb-20" data-aos="fade-up">
                    Technical<br /><em className="italic text-[#c9a96e]">Skills</em>
                </h2>

                <div className="grid grid-cols-5 gap-2 md:gap-6"  data-aos="fade-up">
                    {skills.map(({ label, icon }) => (
                        <article
                            key={label}
                            className={twMerge(
                                "group relative flex flex-col items-center justify-center gap-2 md:gap-5",
                                "py-4 md:py-10 px-1 md:px-4",
                                "bg-white/3 border border-white/10 rounded-xl md:rounded-3xl",
                                "hover:bg-white/8 hover:border-[#c9a96e]/50",
                                "hover:-translate-y-1.5 transition-all duration-500"
                            )}
                        >
                            <div className="transition-transform duration-500 group-hover:scale-110 relative">
                                {icon}
                            </div>
                            <span className="text-[9px] md:text-[13px] tracking-tight md:tracking-widest font-medium text-white/40 group-hover:text-[#c9a96e] transition-colors">
                                {label}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}