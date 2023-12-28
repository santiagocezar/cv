import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Heading } from "./components/Heading";
import { Social } from "./parts/Social";
import { OpenSource } from "./parts/OpenSource";
import { Block } from "./components/Block";
import { Experience } from "./parts/Experience";
import { Education } from "./parts/Education";
import { Projects } from "./parts/Projects";
import { English } from "./parts/English";
import { Techonolgies } from "./parts/Technologies";
import { SoftSkills } from "./parts/SoftSkills";

import "./css/cssreset.css";
import "./css/index.css";
import "uno.css";
import { References } from "./parts/References";

const Page: FCC = ({ children }) => <div className="page">{children}</div>;

function isProperty<T extends object>(obj: T, k: any): k is keyof T {
    return k in obj;
}

const LANGS = {
    "#en": "english" as const,
    "#es": "spanish" as const,
}
type Langs = typeof LANGS;
declare global {
    function _(strings: { [K in Langs[keyof Langs]]: string }, initial?: Langs[keyof Langs]): string
}
globalThis._ = (strings, initial = "spanish") => {
    const hash = document.location.hash;
    const lang = isProperty(LANGS, hash) ? LANGS[hash] : initial
    return strings[lang]
}

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Page>
            <Heading />
            <div className="row">
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
                    <Social />
                    <OpenSource />
                    <English />
                    {/* <Block className="santi bg-$text adwaita font-bold text-white">
                        5+ years of experience in Linux-based OS
                    </Block> */}
                </div>
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
                    <Experience />
                    <References />
                </div>
            </div>
        </Page>
        <Page>
            <div className="row">
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
                    <Education />
                    <Projects />
                </div>
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
                    <Techonolgies />
                    <SoftSkills />
                </div>
            </div>
        </Page>
    </StrictMode>,
);
