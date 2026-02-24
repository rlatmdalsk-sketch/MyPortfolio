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
            "/Gentle/Gentle3.JPG", "/Gentle/Gentle4.JPG",
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

    return (
        <section id="projects" className="py-24 md:py-36 bg-[#f7f4ef]">
            <div className="max-w-5xl mx-auto px-6">
                <div data-aos="fade-right" className="mb-12">
                    <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-[#333] mb-16">
                        My
                        <br />
                        <em className="italic text-[#c9a96e]">Projects</em>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {PROJECTS_DATA.map(p => (
                        <article
                            key={p.id}
                            className={twMerge(
                                p.span,
                                "group bg-white rounded-md overflow-hidden shadow-sm hover:-translate-y-1.5 transition-all duration-300 relative",
                            )}
                            // 마우스 들어오면 재생
                            onMouseEnter={() => {
                                if (swipers[p.id]) {
                                    swipers[p.id].autoplay.start();
                                }
                            }}
                            // 마우스 나가면 정지 + 첫 슬라이드로 복귀
                            onMouseLeave={() => {
                                if (swipers[p.id]) {
                                    swipers[p.id].autoplay.stop();
                                    swipers[p.id].slideTo(0);
                                }
                            }}>

                            <div className={twMerge("relative overflow-hidden", p.aspect)}>
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    speed={500}
                                    loop={true}
                                    // 1. 초기 상태에서 실행되지 않도록 설정
                                    autoplay={{
                                        delay: 700,
                                        disableOnInteraction: false,
                                        enabled: false // 처음엔 꺼둠
                                    }}
                                    onSwiper={s => {
                                        s.autoplay.stop(); // 확실하게 한 번 더 멈춤
                                        setSwipers(prev => ({ ...prev, [p.id]: s }));
                                    }}
                                    className="w-full h-full pointer-events-none">
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

                                <div className="absolute inset-0 bg-[#1a1714]/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center gap-3 pointer-events-none">
                                    <a
                                        href={p.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-1.5 border border-white/60 text-white text-[11px] uppercase hover:bg-white hover:text-black transition-colors pointer-events-auto cursor-pointer">
                                        Live
                                    </a>

                                    <a
                                        href={p.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-1.5 border border-white/60 text-white text-[11px] uppercase hover:bg-white hover:text-black transition-colors pointer-events-auto">
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
                                <p className="text-[11px] text-[#7a7168] leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
