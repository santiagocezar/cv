import { Block } from "../components/Block";
import { ExperienceItem } from "../components/ExperienceItem";

export const Projects = () => (
    <Block className="santi" title="Personal Projects">
        <ExperienceItem title="Score" link="https://score.scez.ar/">
            Extensible framework that allows to easily make score counters for
            different styles of board games. Try it in:
        </ExperienceItem>
        <br />
        <ExperienceItem title="ahi.ar" link="https://ahi.ar/santi">
            Private link shortener made using AWS. Can be managed via a Telegram
            chatbot. Example:
        </ExperienceItem>
        <br />
        <ExperienceItem title="Gengir" link="https://ahi.ar/gengir">
            A tool to create type definitions for GTK on Python. It uses modern python standards and it's easy to use
        </ExperienceItem>
    </Block>
);
