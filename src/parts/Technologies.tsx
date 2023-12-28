import { Block } from "../components/Block";

export const Techonolgies = () => (
    <Block className="valen" title="Technologies">
        <ul>
            <li>
                <strong>Frontend</strong>
                <ul>
                    <li>
                        <i className="i-simple-icons-react" /> React
                    </li>
                    <li>
                        <i className="i-simple-icons-vuedotjs" /> Vue
                    </li>
                </ul>
            </li>
            <li>
                <strong>Backend</strong>
                <ul>
                    <li>
                        <i className="i-simple-icons-mysql" /> SQL
                    </li>
                    <li>
                        <i className="i-simple-icons-amazonaws" /> AWS
                    </li>
                    <li>
                        <i className="i-simple-icons-linux" /> Linux
                    </li>
                    <li>
                        <i className="i-simple-icons-docker" /> Docker
                    </li>
                </ul>
            </li>
            <li>
                <strong>Graphics and media</strong>
                <ul>
                    <li>
                        <i className="i-simple-icons-blender" /> Blender
                    </li>
                    <li>
                        <i className="i-simple-icons-adobephotoshop" />{" "}
                        Photoshop
                    </li>
                    <li>
                        <i className="i-simple-icons-inkscape" /> Inkscape
                    </li>
                    <li>
                        <i className="i-simple-icons-kdenlive" /> KDEnlive
                    </li>
                </ul>
            </li>
            <li>
                <strong>Other</strong>
                <ul>
                    <li>
                        <i className="i-simple-icons-telegram" /> Chatbots
                    </li>
                    <li>
                        <i className="i-simple-icons-godotengine" /> Games
                    </li>
                </ul>
            </li>
        </ul>
    </Block>
);
