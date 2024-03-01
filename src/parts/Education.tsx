import { Block } from "../components/Block";
import { ExperienceItem } from "../components/ExperienceItem";
import _ from "../strings";

export const Education = () => (
    <Block className="santi" title={_({ english: "Education", spanish: "Educación" })}>
        <ExperienceItem date="2023" title="UTN San Francisco" link="">
            {_({
                english: "Systems Engineer - 1st Year",
                spanish: "Ingeniería en Sistemas de información - 1° Año",
            })}
        </ExperienceItem>
        <br />
        <ExperienceItem
            date="2016 - 2022"
            title="Escuela ProA Técnica San Francisco"
            link=""
        >
            {_({
                english: "Programming Technician",
                spanish: "Técnico en programación"
            })}
            <br />
            {_({
                english: "First escort of the National Flag",
                spanish: "Primer escolta de la Bandera Nacional"
            })}
        </ExperienceItem>
        <br />
        <ExperienceItem date="2022" title="Argentina Programa" link="">
            {_({
                english: "Full Stack Web Development",
                spanish: "Desarrollo web Full Stack"
            })}
        </ExperienceItem>
    </Block>
);
