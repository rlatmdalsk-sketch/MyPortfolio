const projects = [
    {
        title: "브랜드 리뉴얼 웹사이트",
        desc: "패션 브랜드의 리뉴얼 프로젝트. 시맨틱 마크업과 CSS 애니메이션으로 브랜드 감성을 표현했습니다.",
        tags: ["HTML", "SCSS", "반응형"],
        bg: "from-[#e8d9bc] to-[#c9a96e]",
        featured: true,
    },
    {
        title: "마케팅 랜딩 페이지",
        desc: "전환율 최적화를 목표로 설계된 캠페인 랜딩 페이지.",
        tags: ["HTML", "Tailwind", "JS"],
        bg: "from-[#d4c4a8] to-[#bfa882]",
    },
    {
        title: "쇼핑몰 UI",
        desc: "React 기반 이커머스 UI 컴포넌트 개발.",
        tags: ["React", "TypeScript"],
        bg: "from-[#e2d5c0] to-[#c8b896]",
    },
    {
        title: "공공기관 웹사이트",
        desc: "WCAG 2.1 기준 웹 접근성 준수 마크업.",
        tags: ["HTML", "SCSS", "접근성"],
        bg: "from-[#cfc0a4] to-[#b9a47e]",
    },
    {
        title: "기업 인트라넷 UI",
        desc: "디자인 시스템 기반 컴포넌트 퍼블리싱.",
        tags: ["Figma", "HTML", "CSS"],
        bg: "from-[#d8ccb8] to-[#c2ad8a]",
    },
];

export default function Projects() {
    return (
        <div id="projects" className="py-24 md:py-36 bg-[#f7f4ef]"   >
            <div className="max-w-5xl mx-auto px-6">

                {/* 헤더 */}
                <div className="flex items-end justify-between mb-12 flex-wrap gap-4" data-aos="fade-right">
                    <div>
                        <p className="flex items-center gap-3 text-[11px] tracking-[.18em] uppercase text-[#c9a96e] mb-3">
                            작업물
                            <span className="flex-1 h-px bg-[#e8d9bc] max-w-[80px]" />
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                            Selected<br />Projects
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c9a96e] hover:gap-3 transition-all duration-300"
                    >
                        All Projects
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4"/>
                        </svg>
                    </a>
                </div>

                {/* 프로젝트 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5" data-aos="fade-right">
                    {projects.map(({ title, desc, tags, bg, featured }, i) => {
                        // 첫번째는 7칸, 두번째는 5칸, 나머지 3개는 4칸씩
                        const colSpan =
                            i === 0 ? "md:col-span-7" :
                                i === 1 ? "md:col-span-5" :
                                    "md:col-span-4";

                        return (
                            <article
                                key={title}
                                className={`${colSpan} group bg-white rounded-md overflow-hidden shadow-sm
                            hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300`}
                            >
                                {/* 썸네일 */}
                                <div className={`relative bg-gradient-to-br ${bg} ${featured ? "aspect-[16/8]" : "aspect-video"} overflow-hidden`}>
                                    {/* 플레이스홀더 텍스트 */}
                                    <span className="absolute inset-0 flex items-center justify-center font-serif italic text-black/25 text-sm">
                    Project Screenshot
                  </span>
                                    {/* 호버 오버레이 */}
                                    <div className="absolute inset-0 bg-[#1a1714]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <a href="#" className="px-4 py-1.5 border border-white/60 text-white text-[11px] tracking-widest uppercase rounded-sm hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-colors duration-200">
                                            Live
                                        </a>
                                        <a href="#" className="px-4 py-1.5 border border-white/60 text-white text-[11px] tracking-widest uppercase rounded-sm hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-colors duration-200">
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* 본문 */}
                                <div className="p-5">
                                    <ul className="flex flex-wrap gap-1.5 mb-2.5">
                                        {tags.map((tag) => (
                                            <li key={tag} className="text-[10px] tracking-widest uppercase px-2.5 py-1 bg-[#f7f4ef] text-[#7a7168] rounded-full">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="font-serif text-lg text-[#1a1714] mb-1">{title}</h3>
                                    <p className="text-xs text-[#7a7168] leading-relaxed">{desc}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}