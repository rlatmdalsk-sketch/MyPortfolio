import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about",    label: "About"    },
    { href: "#skills",   label: "Skills"   },
    { href: "#projects", label: "Projects" },
    { href: "mailto:your@email.com", label: "Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 bg-[#f7f4ef]/90 backdrop-blur-md border-b border-[#c9a96e]/10 transition-shadow duration-300 ${
                scrolled ? "shadow-sm" : ""
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* 로고 */}
                <a href="#" className="font-serif text-xl text-[#1a1714] tracking-wide">
                    Kim<span className="text-[#c9a96e]">.</span>
                </a>

                {/* 데스크탑 nav */}
                <nav className="hidden md:block" aria-label="주요 메뉴">
                    <ul className="flex gap-10">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-xs tracking-widest uppercase text-[#7a7168] hover:text-[#1a1714] transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 모바일 햄버거 */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-1"
                    aria-label="메뉴 열기"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
          <span
              className={`block w-6 h-[1.5px] bg-[#1a1714] transition-transform duration-300 origin-center ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
          />
                    <span
                        className={`block w-6 h-[1.5px] bg-[#1a1714] transition-all duration-300 ${
                            menuOpen ? "opacity-0 scale-x-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-[1.5px] bg-[#1a1714] transition-transform duration-300 origin-center ${
                            menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <nav className="md:hidden border-t border-[#e8d9bc] bg-[#f7f4ef] py-5">
                    <ul className="flex flex-col items-center gap-5">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-xs tracking-widest uppercase text-[#7a7168] hover:text-[#1a1714] transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}