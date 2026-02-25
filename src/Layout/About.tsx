import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsGithub } from "react-icons/bs";

/* 데이터 */
const infoList = [
    { label: "Name", value: "김승민" },
    { label: "Birthdate", value: "2002.01.27" },
    { label: "Role", value: "Web Publisher" },
    { label: "Location", value: "Siheung, Korea" },
    { label: "Email", value: "rlatmdalsk@naver.com" },
];

const career = [
    {
        period: "2025.09 — 2026.02",
        title: "라인컴퓨터 아트학원",
        sub: "Node.JS 기반 Open API를 활용한 응용 소프트웨어 개발자 양성 과정",
        desc: "React 프레임워크를 메인으로 하여 컴포넌트 기반 UI/UX 설계 및 상태 관리 학습. Node.js와 Open API를 연동하여 비동기 데이터를 실제 화면에 효율적으로 렌더링하는 퍼블리싱 기술 숙달.",
    },
    {
        period: "2021.03 — 2025.02",
        title: "인하공업전문대학교",
        sub: "정보통신학과 졸업",
        desc: "네트워크 구조 및 통신 프로토콜 이해, 프로그래밍 기초(C, Java) 및 웹개발실습",
    },
];

const certs = [
    { name: "검색광고마케터 1급", org: "한국정보통신진흥협회", year: "2025" },
    { name: "GoogleAds", org: "Google", year: "2025" },
    { name: "운전면허 2종보통", org: "도로교통공단", year: "2020" },
];

const TABS = [
    { key: "int", label: "소개" },
    { key: "career", label: "교육" },
    { key: "cert", label: "자격증" },
] as const;

type Tab = "int" | "career" | "cert";

export default function About() {
    const [tab, setTab] = useState<Tab>("int");

    return (
        <section
            id="about"
            className={twMerge("relative", "overflow-hidden", "bg-[#f7f4ef]", [
                "py-28",
                "md:py-40",
            ])}>
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

            <div className={twMerge("relative", "max-w-5xl", "mx-auto px-6")}>
                {/*ABOUT ME*/}
                <div className={twMerge("flex items-center", "gap-4", "mb-16")} data-aos="fade-up">
                    <span
                        className={twMerge(
                            "text-[10px] tracking-[.22em] text-[#c9a96e] uppercase",
                        )}>
                        About Me
                    </span>
                    <span
                        className={twMerge("flex-1", "h-px", "bg-[#c9a96e]/25", "max-w-15")}
                        aria-hidden="true"
                    />
                </div>

                {/* 본문 그리드 */}
                <div
                    className={twMerge(
                        "grid items-start md:grid-cols-[300px_1fr]",
                        "gap-12 lg:gap-20",
                    )}>
                    {/*왼쪽 컬럼*/}
                    <div
                        className={twMerge("flex flex-col gap-8")}
                        data-aos="fade-right"
                        data-aos-delay="100">
                        {/* 프로필 사진 */}
                        <div className={twMerge("relative", "self-start", "w-full")}>
                            <div
                                aria-hidden="true"
                                className={twMerge(
                                    "absolute -right-3 -bottom-3",
                                    "h-full w-full",
                                    "rounded-2xl border border-[#c9a96e]/50",
                                )}
                            />
                            <div
                                className={twMerge(
                                    "relative",
                                    "aspect-4/5",
                                    "w-full",
                                    "overflow-hidden rounded-2xl",
                                    "bg-[#e8d9bc]",
                                )}>
                                <img
                                    src="/Profile.jpg"
                                    alt="프로필 사진"
                                    className={twMerge(
                                        "absolute",
                                        "inset-0",
                                        "h-full w-full",
                                        "object-cover object-center",
                                    )}
                                />
                            </div>
                        </div>

                        {/* 기본 정보 */}
                        <ul className={twMerge("flex", "flex-col", "divide-y divide-[#e8d9bc]")}>
                            {infoList.map(({ label, value }) => (
                                <li
                                    key={label}
                                    className={twMerge(
                                        "flex items-baseline justify-between gap-4",
                                        "py-3",
                                    )}>
                                    <span
                                        className={twMerge(
                                            "text-[10px] tracking-[.15em] text-[#c9a96e] uppercase",
                                            "shrink-0",
                                        )}>
                                        {label}
                                    </span>
                                    <span
                                        className={twMerge(
                                            "text-right text-sm leading-snug text-[#1a1714]",
                                        )}>
                                        {value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 오른쪽 컬럼  */}
                    <div
                        className={twMerge("flex flex-col gap-0")}
                        data-aos="fade-right"
                        data-aos-delay="200">
                        {/* 제목 */}
                        <h2
                            className={twMerge(
                                "font-serif leading-[1.05] text-[#1a1714]",
                                "text-5xl md:text-6xl",
                                "mb-10",
                            )}>
                            Web Agency
                            <br />
                            <em className="text-[#c9a96e] italic">Publisher</em>
                        </h2>

                        {/* 탭 버튼 */}
                        <div
                            role="tablist"
                            aria-label="소개 탭"
                            className={twMerge("flex gap-0", "border-b border-[#e8d9bc]", "mb-8")}>
                            {TABS.map(({ key, label }) => (
                                <button
                                    key={key}
                                    role="tab"
                                    aria-selected={tab === key}
                                    aria-controls={`panel-${key}`}
                                    onClick={() => setTab(key)}
                                    className={twMerge(
                                        "relative",
                                        "px-6 py-3",
                                        "text-[11px] tracking-[.16em] uppercase",
                                        "transition-colors duration-200",
                                        tab === key
                                            ? "text-[#1a1714]"
                                            : "text-[#7a7168] hover:text-[#1a1714]",
                                        "cursor-pointer",
                                    )}>
                                    {label}
                                    <span
                                        aria-hidden="true"
                                        className={twMerge(
                                            "absolute right-0 -bottom-px left-0 h-0.5",

                                            "bg-[#c9a96e]",
                                            "origin-left transition-transform duration-300",
                                            tab === key ? "scale-x-100" : "scale-x-0",
                                        )}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* 소개 패널 */}
                        {tab === "int" && (
                            <div
                                id="panel-int"
                                role="tabpanel"
                                className={twMerge(
                                    "flex flex-col gap-5",
                                    "animate-[fadeUp_.35s_ease_forwards]",
                                    "text-center text-[14px] leading-[1.85] break-keep text-[#7a7168] md:text-left",
                                    "items-center md:items-start",
                                )}>
                                <p>
                                    대학 시절 웹 개발을 처음 접하며, 웹이 브랜드와 세상을 연결하는
                                    강력한 소통 도구라는 점에 매력을 느껴 <br className="md:hidden"/>
                                    <strong className="font-medium text-[#1a1714] ">
                                        {" "}
                                        퍼블리셔
                                    </strong>
                                    의 길을 걷게 되었습니다.
                                </p>
                                <p>
                                    어떤 기기에서든 최상의 경험을 주는 유연한{" "}
                                    <strong className="font-medium text-[#1a1714]">
                                        반응형 웹
                                    </strong>
                                    을 지향하며, 웹 표준을 준수하는
                                    <strong className="font-medium text-[#1a1714]"> 마크업</strong>과<strong className="font-medium text-[#1a1714]"> SEO 최적화</strong>
                                    로 사용자의 실질적인 전환을 이끌어내는 데 집중합니다.
                                </p>
                                <p>
                                    또한, 최신
                                    <strong className="font-medium text-[#1a1714]">AI 기술</strong>
                                    을 작업에 적극적으로 활용하여 효율을 높이고, 더 정교한
                                    인터랙션과 코드 구조를 설계합니다
                                </p>

                                <a
                                    href="https://github.com/rlatmdalsk-sketch"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={twMerge(
                                        "flex items-center justify-center md:self-start",
                                        "md:mt-5 mt-2 gap-3 px-5 py-2.5",
                                        "rounded-full border border-[#c9a96e]/40",
                                        "text-[11px] tracking-widest text-[#1a1714] uppercase",
                                        [
                                            "hover:bg-[#c9a96e]",
                                            "hover:text-white",
                                            "hover:border-[#c9a96e]",
                                        ],
                                        ["transition-all", "group duration-300"],
                                    )}>
                                    <BsGithub
                                        className={twMerge("h-4 w-4", [
                                            "transition-transform",
                                            "group-hover:scale-110",
                                        ])}
                                    />
                                    <span>Visit GitHub</span>
                                </a>
                            </div>
                        )}

                        {tab === "career" && (
                            <ol
                                id="panel-career"
                                role="tabpanel"
                                className={twMerge(
                                    "relative",
                                    "flex flex-col",
                                    "gap-0 pl-6",
                                    "animate-[fadeUp_.35s_ease_forwards]",
                                )}>
                                <span
                                    aria-hidden="true"
                                    className={twMerge(
                                        "absolute top-2 bottom-4 left-0.75",
                                        "w-px",
                                        "bg-[#e8d9bc]",
                                    )}
                                />
                                {career.map(({ period, title, sub, desc }) => (
                                    <li key={title} className="relative pb-8 last:pb-0">
                                        <span
                                            aria-hidden="true"
                                            className={twMerge(
                                                "absolute top-1.5 -left-6",
                                                "h-2.5 w-2.5",
                                                "rounded-full border-2 border-[#c9a96e]",
                                                "bg-[#f7f4ef]",
                                            )}
                                        />
                                        <p
                                            className={twMerge(
                                                "text-[10px] tracking-[.15em] text-[#c9a96e] uppercase",
                                                "mb-1.5",
                                            )}>
                                            {period}
                                        </p>
                                        <h3
                                            className={twMerge(
                                                "font-serif text-[17px] leading-snug text-[#1a1714]",
                                                "mb-0.5",
                                            )}>
                                            {title}
                                        </h3>
                                        <p className="mb-2 text-xs text-[#c9a96e]/80">{sub}</p>
                                        <p className="text-[13px] leading-relaxed text-[#7a7168]">
                                            {desc}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        )}

                        {/* 자격증  */}
                        {tab === "cert" && (
                            <ul
                                id="panel-cert"
                                role="tabpanel"
                                className="flex animate-[fadeUp_.35s_ease_forwards] flex-col gap-3">
                                {certs.map(({ name, org, year }) => (
                                    <li
                                        key={name}
                                        className={twMerge(
                                            "group flex items-center justify-between gap-4",
                                            "px-6 py-5",
                                            "bg-white",
                                            "rounded-2xl border border-[#e8d9bc]",
                                            [
                                                "transition-all duration-300 hover:border-[#c9a96e] hover:shadow-lg",
                                            ],
                                        )}>
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={twMerge("text-xl", [
                                                    "group-hover:scale-110",
                                                    "transition-transform",
                                                ])}>
                                                🏅
                                            </span>
                                            <div>
                                                <h4
                                                    className={twMerge(
                                                        "text-[15px] leading-tight font-medium text-[#1a1714]",
                                                    )}>
                                                    {name}
                                                </h4>
                                                <p className="mt-1 text-[12px] text-[#7a7168]">
                                                    {org}
                                                </p>
                                            </div>
                                        </div>

                                        <span
                                            className={twMerge(
                                                "font-serif text-lg text-[#c9a96e] tabular-nums",
                                                "shrink-0",
                                            )}>
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
