import { Block } from "../components/Block";

export const OpenSource = () => (
    <Block className="santi" title="Open source contribuitions">
        <ul>
            <li>
                Improved Linux support for:
                <ul>
                    <li>the RSDK decompilation project.</li>
                    <li>the enigo-rs library</li>
                    <li>the GLFW for Go library</li>
                    <li>Shattered Pixel Dungeon</li>
                </ul>
            </li>
            <li>
                Bugfixes and translations for Blurble, a native GTK Wordle Clone
            </li>
        </ul>
    </Block>
);
