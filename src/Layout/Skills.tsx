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
    { label: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-[#E44D26]" /> },
    { label: "CSS3", icon: <SiCss3 className="w-10 h-10 text-[#1572B6]" /> },
    { label: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E] bg-black" /> },
    { label: "React", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="w-10 h-10 text-[#38BDF8]" /> },
    { label: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-[#3178C6]" /> },
    { label: "Figma", icon: <SiFigma className="w-10 h-10 text-[#F24E1E]" /> },
    { label: "Git", icon: <BsGithub  className="w-10 h-10 text-[#fff]" /> },
    { label: "Photoshop", icon: <DiPhotoshop className="w-10 h-10 text-[#31A8FF]" /> },
    { label: "Notion", icon: <SiNotion className="w-10 h-10 text-white" /> },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className={twMerge(
                "relative py-28 md:py-40",
                "bg-[#1a1714] overflow-hidden"
            )}
        >
            {/* 배경 dot 패턴 */}
            <div
                aria-hidden="true"
                className={twMerge("pointer-events-none absolute inset-0", "opacity-20")}
                style={{
                    backgroundImage: "radial-gradient(circle, #c9a96e 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6">

                {/* 섹션 레이블 */}
                <div
                    className={twMerge("flex items-center gap-4", "mb-4")}
                    data-aos="fade-up"
                >
                    <span className={twMerge("text-[10px] tracking-[.22em] uppercase", "text-[#c9a96e]")}>
                        Skills &amp; Tools
                    </span>
                    <span className="h-px bg-[#c9a96e]/30 w-12" aria-hidden="true" />
                </div>

                {/* 제목 */}
                <h2
                    className={twMerge(
                        "font-serif text-5xl md:text-6xl leading-[1.05]",
                        "text-white mb-16"
                    )}
                    data-aos="fade-up"
                >
                    Technical<br />
                    <em className="italic text-[#c9a96e]">Skills</em>
                </h2>

                {/* 카드 그리드 */}
                <div
                    className={twMerge(
                        "grid gap-3",
                        "grid-cols-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6"
                    )}

                >
                    {skills.map(({ label, icon }) => (
                        <article
                            key={label}
                            className={twMerge(
                                "relative flex flex-col items-center justify-center gap-3",
                                "py-6 px-3",
                                "bg-white/[0.03] border border-white/10 rounded-2xl",
                                "hover:bg-white/[0.07] hover:border-[#c9a96e]/50",
                                "hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(201,169,110,0.12)]",
                                "transition-all duration-300 cursor-default"
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className={twMerge(
                                    "absolute inset-0 rounded-2xl",
                                    "opacity-0 group-hover:opacity-100",
                                    "transition-opacity duration-300"
                                )}
                                style={{
                                    background: "radial-gradient(circle at 50% 0%, rgba(201,169,110,0.08), transparent 70%)",
                                }}
                            />
                            <div className="transition-transform duration-300 group-hover:scale-110 relative">
                                {icon}
                            </div>
                            <span className={twMerge(
                                "text-[11px] tracking-wider font-medium",
                                "text-white/50 group-hover:text-white/90",
                                "transition-colors duration-200"
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