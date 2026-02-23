import { twMerge } from "tailwind-merge";

function Header() {
    return <>
        <div className={twMerge("w-full","h-10","border","flex","justify-between","px-70","items-center","sticky")}>
            <h1>
                김승민
            </h1>
            <nav>
                <ul className={twMerge("flex","gap-2")}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </div>
    </>
}

export default Header;