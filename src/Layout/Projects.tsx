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
        aspect: "aspect-[16/7]",
        title: "GentleMonster-CopyProject",
        desc: "설명창 높이를 유지하며 Swiper 페이드를 적용했습니다.",
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
        aspect: "aspect-[16/13]",
        title: "WeTube",
        desc: "전환율 최적화 페이지",
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
        title: "Prospecs-UI",
        desc: "상세 설명 텍스트",
        images: ["/Prospecs/Prospecs1.JPG", "/Prospecs/Prospecs2.JPG", "/Prospecs/Prospecs3.JPG"],
        liveUrl: "https://lecture-prospecs.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/lecture-prospecs/tree/master",
    },
    {
        id: "poke-dex",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "POKEDEX",
        desc: "상세 설명 텍스트",
        images: ["/PokeDex/PokeDex1.JPG", "/PokeDex/PokeDex2.JPG"],
        liveUrl: "https://poke-dex-three-ivory.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/PokeDex/tree/master",
    },
    {
        id: "Movie-Search",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "Movie-Search",
        desc: "상세 설명 텍스트",
        images: ["/Movie/movie1.JPG", "/Movie/movie2.JPG", "/Movie/Movie3.JPG"],
        liveUrl: "https://moive-search-eight.vercel.app/",
        githubUrl: "https://github.com/rlatmdalsk-sketch/moive-search/tree/master",
    },
    {
        id: "Anime-Explorer",
        span: "md:col-span-3",
        aspect: "aspect-video",
        title: "Anime Explorer",
        desc: "상세 설명 텍스트",
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
    const [swipers, setSwipers] = useState<{ [key: string]:string }>({});

    return (
        <section id="projects" className="py-24 md:py-36 bg-[#f7f4ef]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12" data-aos="fade-right">
                    <p className="flex items-center gap-3 text-[11px] tracking-[.18em] uppercase text-[#c9a96e] mb-3">
                        PROJECTS <span className="flex-1 h-px bg-[#e8d9bc] max-w-[80px]" />
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                        Selected
                        <br />
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5" data-aos="fade-right">
                    {PROJECTS_DATA.map(p => (
                        <article
                            key={p.id}
                            className={twMerge(
                                p.span,
                                "group bg-white rounded-md overflow-hidden shadow-sm hover:-translate-y-1.5 transition-all duration-300 relative",
                            )}
                            onMouseEnter={() => swipers[p.id]?.autoplay.start()}
                            onMouseLeave={() => {
                                swipers[p.id]?.autoplay.stop();
                                swipers[p.id]?.slideTo(0);
                            }}>
                            {/* 카드 전체 클릭 레이어 (LiveUrl) */}
                            <a
                                href={p.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 z-10"
                            />

                            <div className={twMerge("relative overflow-hidden", p.aspect)}>
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    speed={500}
                                    loop={true}
                                    autoplay={{ delay: 700, disableOnInteraction: false }}
                                    onSwiper={s => {
                                        setSwipers(prev => ({ ...prev, [p.id]: s }));
                                        s.autoplay.stop();
                                    }}
                                    className="w-full h-full">
                                    {p.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img
                                                src={img}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="absolute inset-0 bg-[#1a1714]/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center gap-3 cursor-pointer ">
                                    <a
                                        href={p.liveUrl}
                                        className="px-4 py-1.5 border border-white/60 text-white text-[11px] uppercase hover:text-[#333] hover:bg-[#fff] transition-colors">
                                        Live
                                    </a>
                                    <a
                                        href={p.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-1.5 border border-white/60 text-white text-[11px] uppercase hover:text-[#333] hover:bg-[#fff] transition-colors ">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="py-3 px-5 relative z-0">
                                <h3
                                    className={twMerge(
                                        "font-serif text-[#1a1714] mb-0.5",
                                        p.id === "GentleMonster" ? "text-xl" : "text-lg",
                                    )}>
                                    {p.title}
                                </h3>
                                <p className="text-[11px] text-[#7a7168]">{p.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
