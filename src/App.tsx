import Header from "./Layout/Header.tsx";
import About from "./Layout/About.tsx";
import Skills from "./Layout/Skills.tsx";
import Projects from "./Layout/Projects.tsx";
import { twMerge } from "tailwind-merge";

function App() {
    return (
        <>
            <Header />
            <main className={twMerge("flex", "flex-col")}>
                <section>
                    <About />
                </section>
                <section>
                    <Skills />
                </section>
                <section>
                    <Projects />
                </section>
            </main>
        </>
    );
}

export default App;
