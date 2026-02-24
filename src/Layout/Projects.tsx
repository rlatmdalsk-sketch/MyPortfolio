import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const PROJECTS_DATA = [
    {
        id: "GentleMonster",
        span: "md:col-span-8",
        aspect: "aspect-[16/8]",
        title: "GENTLE MONSTER",
        desc: "GentleMonster 공식홈페이지를 클론한 대형 프로젝트입니다",
        images: [
            "/Gentle/Gentle1.JPG",
            "/Gentle/Gentle2.JPG",
            "/Gentle/Gentle3.JPG",
            "/Gentle/Gentle4.JPG",
        ],
        liveUrl: "https://gentlemonster-copyproject.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/gentlemonster-copyproject/tree/main",
    },
    {
        id: "Wetube",
        span: "md:col-span-4",
        aspect: "aspect-[1]",
        title: "WeTube",
        desc: "유튜브를 모방하여 만든 커뮤니티 프로젝트입니다",
        images: [
            "/Wetube/Wetube1.JPG",
            "/Wetube/Wetube2.JPG",
            "/Wetube/Wetube3.JPG",
            "/Wetube/Wetube4.JPG",
        ],
        liveUrl: "https://wetube-five.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/wetube/tree/master",
    },
    {
        id: "Prospecs",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "Prospecs",
        desc: "Prospecs 공식홈페이지의 UI를 클론한 프로젝트입니다",
        images: ["/Prospecs/Prospecs1.JPG", "/Prospecs/Prospecs2.JPG", "/Prospecs/Prospecs3.JPG"],
        liveUrl: "https://lecture-prospecs.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/lecture-prospecs/tree/master",
    },
    {
        id: "poke-dex",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "POKEDEX",
        desc: "포켓몬 API를 활용한 포켓몬 도감입니다",
        images: ["/PokeDex/PokeDex1.JPG", "/PokeDex/PokeDex2.JPG"],
        liveUrl: "https://poke-dex-three-ivory.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/PokeDex/tree/master",
    },
    {
        id: "Movie-Search",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "Movie-Search",
        desc: "영화 검색 API를 활용하여 만든 사이트입니다",
        images: ["/Movie/movie1.JPG", "/Movie/movie2.JPG", "/Movie/Movie3.JPG"],
        liveUrl: "https://moive-search-eight.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/moive-search/tree/master",
    },
    {
        id: "Anime-Explorer",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "Anime Explorer",
        desc: "애니메이션 API를 활용하여 만든 사이트입니다",
        images: [
            "/Anime/AnimeExplorer1.JPG",
            "/Anime/AnimeExplorer2.JPG",
            "/Anime/AnimeExplorer3.JPG",
        ],
        liveUrl: "https://anime-explorer-two.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/Anime-Explorer/tree/master",
    },
];

export default function Projects() {
    const [swipers, setSwipers] = useState<{ [key: string]: any }>({});
    const btnClass =
        "px-4 py-1.5 border border-white/60 text-white text-[11px] uppercase transition-colors hover:bg-white hover:text-black pointer-events-auto cursor-pointer";

    return (
        <section id="projects" className="bg-[#f7f4ef] py-24 md:py-36">
            <div className="mx-auto max-w-5xl px-6" data-aos="fade-up">
                <div className="mb-4 flex items-center gap-4">
                    <span className="text-[10px] tracking-[.22em] text-[#c9a96e] uppercase md:text-[11px]">
                        PROJECTS
                    </span>
                    <span className="h-px w-12 bg-[#c9a96e]/30" aria-hidden="true" />
                </div>
                <div className="mb-12">
                    <h2
                        className={twMerge(
                            "mb-16",
                            "font-serif text-5xl leading-[1.05] text-[#333] md:text-6xl",
                        )}>
                        My
                        <br />
                        <em className="text-[#c9a96e] italic">Projects</em>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                    {PROJECTS_DATA.map(p => (
                        <a
                            key={p.id}
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-aos="fade-up"
                            className={twMerge(
                                p.span,
                                "group",
                                "relative block",
                                "overflow-hidden",
                                "rounded-md",
                                "bg-white shadow-sm",
                                "transition-all duration-300 hover:-translate-y-1.5",
                            )}
                            onMouseEnter={() => swipers[p.id]?.autoplay.start()}
                            onMouseLeave={() => {
                                swipers[p.id]?.autoplay.stop();
                                swipers[p.id]?.slideTo(0);
                            }}>
                            <div className={twMerge("relative overflow-hidden", p.aspect)}>
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    speed={500}
                                    loop={true}
                                    autoplay={{ delay: 700, disableOnInteraction: false }}
                                    onSwiper={s => {
                                        s.autoplay.stop();
                                        setSwipers(prev => ({ ...prev, [p.id]: s }));
                                    }}
                                    className="pointer-events-none h-full w-full">
                                    {p.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img
                                                src={img}
                                                className="h-full w-full object-cover"
                                                alt={p.title}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div
                                    className={twMerge(
                                        "pointer-events-none",
                                        "absolute inset-0 z-20 hidden",
                                        "items-center justify-center gap-3 md:flex",
                                        "bg-[#1a1714]/60 opacity-0",
                                        "transition-opacity md:group-hover:opacity-100",
                                    )}>
                                    <div className={btnClass}>Live</div>
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open(p.githubUrl, "_blank");
                                        }}
                                        className={btnClass}>
                                        GitHub
                                    </button>
                                </div>
                            </div>

                            <div className="relative z-0 px-5 py-3">
                                <h3
                                    className={twMerge(
                                        "mb-0.5",
                                        "font-serif text-[#1a1714]",
                                        p.id === "GentleMonster" ? "text-xl" : "text-lg",
                                    )}>
                                    {p.title}
                                </h3>
                                <p className="text-[11px] leading-relaxed text-[#7a7168]">
                                    {p.desc}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
