import { useState } from "react";

/* ─────────────── 데이터 ─────────────── */
const infoList = [
    { label: "Name",     value: "홍길동" },
    { label: "Role",     value: "Web Publisher / Front-End" },
    { label: "Location", value: "Seoul, Korea" },
    { label: "Email",    value: "your@email.com" },
];

const stats = [
    { num: "3",  suffix: "+", desc: "Years\nExperience" },
    { num: "24", suffix: "+", desc: "Projects\nCompleted" },
    { num: "12", suffix: "+", desc: "Happy\nClients" },
];

const career = [
    {
        period: "2023.03 — 현재",
        title: "OOO 디지털 에이전시",
        sub: "웹퍼블리셔 · 정규직",
        desc: "반응형 웹 퍼블리싱 및 랜딩 페이지 제작, Figma 시안 기반 마크업, 크로스브라우징 대응.",
    },
    {
        period: "2022.01 — 2023.02",
        title: "OOO 마케팅 회사",
        sub: "프론트엔드 인턴",
        desc: "SNS 광고 배너 HTML 제작, 이메일 템플릿 퍼블리싱, 유지보수 작업 담당.",
    },
    {
        period: "2018 — 2022",
        title: "OO대학교",
        sub: "디지털미디어디자인학과 · 학사 졸업",
        desc: "웹 디자인, UI/UX, 영상 편집 전공.",
    },
];

const certs = [
    { name: "웹디자인기능사",         org: "한국산업인력공단", year: "2022" },
    { name: "정보처리기능사",         org: "한국산업인력공단", year: "2021" },
    { name: "GTQ 그래픽기술자격 1급", org: "한국생산성본부",   year: "2020" },
    { name: "컴퓨터활용능력 1급",     org: "대한상공회의소",   year: "2019" },
];

const TABS = [
    { key: "bio",    label: "소개" },
    { key: "career", label: "경력" },
    { key: "cert",   label: "자격증" },
] as const;

type Tab = (typeof TABS)[number]["key"];

/* ─────────────── 컴포넌트 ─────────────── */
export default function About() {
    const [tab, setTab] = useState<Tab>("bio");

    return (
        <section
            id="about"
            className="relative bg-[#f7f4ef] py-28 md:py-40 overflow-hidden"
        >
            {/* 배경 미세 그리드 */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(201,169,110,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,.06) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6">

                {/* 섹션 레이블 ─ AOS ① */}
                <div
                    className="flex items-center gap-4 mb-16"
                    data-aos="fade-up"
                >
                    <span className="text-[10px] tracking-[.22em] uppercase text-[#c9a96e]">
                        About Me
                    </span>
                    <span className="flex-1 h-px bg-[#c9a96e]/25 max-w-[60px]" aria-hidden="true" />
                </div>

                {/* 본문 그리드 */}
                <div className="grid md:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

                    {/* 왼쪽 컬럼 ─ AOS ② */}
                    <div
                        className="flex flex-col gap-8"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        {/* 프로필 사진 */}
                        <div className="relative self-start w-full">
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-3 -right-3 w-full h-full border border-[#c9a96e]/50 rounded-2xl"
                            />
                            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#e8d9bc]">
                                {/*
                                    ✅ 사진 교체 방법
                                    1) src="/images/profile.jpg"  (public 폴더)
                                    2) import img from "../assets/profile.jpg" → src={img}
                                */}
                                <img
                                    src=""
                                    alt="프로필 사진"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = "none";
                                    }}
                                />
                                {/* 플레이스홀더 */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                    <svg
                                        className="w-14 h-14 text-[#c9a96e]/40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                        />
                                    </svg>
                                    <span className="text-[10px] tracking-[.2em] uppercase text-[#c9a96e]/50">
                                        Your Photo
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 기본 정보 */}
                        <ul className="flex flex-col divide-y divide-[#e8d9bc]">
                            {infoList.map(({ label, value }) => (
                                <li key={label} className="flex justify-between items-baseline py-3 gap-4">
                                    <span className="text-[10px] tracking-[.15em] uppercase text-[#c9a96e] shrink-0">
                                        {label}
                                    </span>
                                    <span className="text-sm text-[#1a1714] text-right leading-snug">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 오른쪽 컬럼 ─ AOS ③ */}
                    <div
                        className="flex flex-col gap-0"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        {/* 제목 */}
                        <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-[#1a1714] mb-10">
                            Creative<br />
                            <em className="italic text-[#c9a96e]">Developer</em>
                        </h2>

                        {/* 탭 버튼 */}
                        <div
                            role="tablist"
                            aria-label="소개 탭"
                            className="flex gap-0 border-b border-[#e8d9bc] mb-8"
                        >
                            {TABS.map(({ key, label }) => (
                                <button
                                    key={key}
                                    role="tab"
                                    aria-selected={tab === key}
                                    aria-controls={`panel-${key}`}
                                    onClick={() => setTab(key)}
                                    className={[
                                        "relative px-6 py-3 text-[11px] tracking-[.16em] uppercase transition-colors duration-200",
                                        tab === key
                                            ? "text-[#1a1714]"
                                            : "text-[#7a7168] hover:text-[#1a1714]",
                                    ].join(" ")}
                                >
                                    {label}
                                    <span
                                        aria-hidden="true"
                                        className={[
                                            "absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#c9a96e] transition-transform duration-300 origin-left",
                                            tab === key ? "scale-x-100" : "scale-x-0",
                                        ].join(" ")}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* 소개 패널 */}
                        {tab === "bio" && (
                            <div
                                id="panel-bio"
                                role="tabpanel"
                                className="flex flex-col gap-5 animate-[fadeUp_.35s_ease_forwards]"
                            >
                                <p className="text-[15px] text-[#7a7168] leading-[1.85]">
                                    안녕하세요! 웹퍼블리셔 &amp; 프론트엔드 개발자{" "}
                                    <strong className="text-[#1a1714] font-medium">홍길동</strong>입니다.
                                    시맨틱 마크업과 접근성에 기반한 깔끔한 코드를 작성하고,
                                    사용자 경험을 중심으로 인터페이스를 설계합니다.
                                </p>
                                <p className="text-[15px] text-[#7a7168] leading-[1.85]">
                                    광고·마케팅 에이전시와 협업하며{" "}
                                    <strong className="text-[#1a1714] font-medium">
                                        브랜드 아이덴티티를 디지털로 구현하는 작업
                                    </strong>
                                    을 즐겨 왔습니다. 반응형 웹, 크로스브라우징, SEO 최적화를 기본으로
                                    퀄리티 높은 결과물을 만들어냅니다.
                                </p>

                                {/* 스탯 */}
                                <div className="grid grid-cols-3 gap-px mt-4 bg-[#e8d9bc] rounded-xl overflow-hidden">
                                    {stats.map(({ num, suffix, desc }) => (
                                        <div
                                            key={num}
                                            className="bg-[#f7f4ef] flex flex-col items-center justify-center py-6 px-4 text-center"
                                        >
                                            <p className="font-serif text-4xl text-[#1a1714] leading-none">
                                                {num}
                                                <span className="text-[#c9a96e] text-2xl">{suffix}</span>
                                            </p>
                                            <p className="text-[10px] tracking-wider uppercase text-[#7a7168] mt-2 whitespace-pre-line leading-relaxed">
                                                {desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 경력 패널 */}
                        {tab === "career" && (
                            <ol
                                id="panel-career"
                                role="tabpanel"
                                className="relative flex flex-col gap-0 pl-6 animate-[fadeUp_.35s_ease_forwards]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute left-[3px] top-2 bottom-4 w-px bg-[#e8d9bc]"
                                />
                                {career.map(({ period, title, sub, desc }) => (
                                    <li key={title} className="relative pb-8 last:pb-0">
                                        <span
                                            aria-hidden="true"
                                            className="absolute -left-6 top-[6px] w-[10px] h-[10px] rounded-full border-2 border-[#c9a96e] bg-[#f7f4ef]"
                                        />
                                        <p className="text-[10px] tracking-[.15em] uppercase text-[#c9a96e] mb-1.5">
                                            {period}
                                        </p>
                                        <h3 className="font-serif text-[17px] text-[#1a1714] mb-0.5 leading-snug">
                                            {title}
                                        </h3>
                                        <p className="text-xs text-[#c9a96e]/80 mb-2">{sub}</p>
                                        <p className="text-[13px] text-[#7a7168] leading-relaxed">{desc}</p>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {/* 자격증 패널 */}
                        {tab === "cert" && (
                            <ul
                                id="panel-cert"
                                role="tabpanel"
                                className="flex flex-col gap-2.5 animate-[fadeUp_.35s_ease_forwards]"
                            >
                                {certs.map(({ name, org, year }) => (
                                    <li
                                        key={name}
                                        className="group flex items-center gap-4 px-5 py-4
                                                   border border-[#e8d9bc] rounded-xl bg-white
                                                   hover:border-[#c9a96e] hover:shadow-[0_4px_24px_rgba(201,169,110,.12)]
                                                   transition-all duration-300"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="w-10 h-10 rounded-full bg-[#f7f4ef] border border-[#e8d9bc]
                                                       group-hover:border-[#c9a96e]/40
                                                       flex items-center justify-center text-base shrink-0 transition-colors duration-300"
                                        >
                                            🏅
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-[#1a1714] leading-snug">{name}</p>
                                            <p className="text-xs text-[#7a7168] mt-0.5">{org}</p>
                                        </div>
                                        <span className="font-serif text-xl text-[#c9a96e] shrink-0 tabular-nums">
                                            {year}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* 패널 fadeUp 키프레임 */}
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: none; }
                }
            `}</style>
        </section>
    );
}