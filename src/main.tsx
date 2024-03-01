import { StrictMode } from "react";
import { Heading } from "./components/Heading";
import { Social } from "./parts/Social";
import { OpenSource } from "./parts/OpenSource";
import { Block } from "./components/Block";
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

export const Root: React.FC = () =>
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
//                     <Experience />
                    <References />
                </div>
            </div>
        </Page>
        <Page>
            <div className="row">
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
//                     <Education />
                    <Projects />
                </div>
                <div className="flex flex-col flex-basis-0 grow-4 gap-5mm">
                    <Techonolgies />
                    <SoftSkills />
                </div>
            </div>
        </Page>
    </StrictMode>

