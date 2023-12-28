import { Block } from "../components/Block";
import { TextTitle } from "../components/TextTitle";

export const English = () => (
    <Block className="santi">
        <div className="flex justify-between">
            <TextTitle>CEFR English Level</TextTitle>
            <h1 className="text-2em mt--.2em">B1</h1>
        </div>
        <h2 className="text-$cez font-bold">Cambridge English Scale</h2>
        <table>
            <tr>
                <td className="font-bold pr-.5em">Reading </td>
                <td>149</td>
            </tr>
            <tr>
                <td className="font-bold pr-.5em">Writing </td>
                <td>150</td>
            </tr>
            <tr>
                <td className="font-bold pr-.5em">Listening </td>
                <td>147</td>
            </tr>
            <tr>
                <td className="font-bold pr-.5em">Speaking </td>
                <td>146</td>
            </tr>
        </table>
    </Block>
);
const Enlgish2 = () => (
    <Block className="santi" title="CEFR English Level">
        <h1 className="cefr">B1</h1>
        <p style={{ textAlign: "right" }}>Cambridge English Scale</p>
        <div className="english">
            <div className="ranks">
                <span>A1</span>
                <span>A1</span>
                <span>A2</span>
                <span className="active">B1</span>
                <span>B2</span>
                <span>C1</span>
                <span>C2</span>
            </div>
            <progress value={148 - 80} max={220 - 80}></progress>
            <div className="score">
                <span>80</span>
                <span>148</span>
                <span>220</span>
            </div>
            <p>
                <strong>Reading: </strong>149
            </p>
            <p>
                <strong>Writing: </strong>150
            </p>
            <p>
                <strong>Listening: </strong>147
            </p>
            <p>
                <strong>Speaking: </strong>146
            </p>
        </div>
    </Block>
);
