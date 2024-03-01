import { Block } from "../components/Block";
import { ExperienceItem } from "../components/ExperienceItem";
import _ from "../strings";

export const Experience = () => (
    <Block className="santi flex-basis-0 grow-3" title={_({ english: "Experience", spanish: "Experiencia" })}>
        <ExperienceItem
            date={_({ english: "June 2019", spanish: "junio 2019" })}
            title={_({ english: "KDE Plasma 5.16 Wallpaper Contest Winner", spanish: "Ganador del KDE Plasma 5.16 Wallpaper Contest" })}
            link="https://ahi.ar/fondo516"
        >
            {_({
                english: "Made using open source software. Was used in million of computers around the world. For more info:",
                spanish: "Hecho con software open source. Usado en millones de ordenadores en el mundo. Más info:",
            })}
        </ExperienceItem>
        <br />
        <ExperienceItem
            // date=
            date={_({ english: "March 2020 — present", spanish: "marzo 2020 — hoy" })}
            // title="PEON: Auto-managed online purchasing system"
            title={_({ english: "PEON: E-commerce solution", spanish: "PEON: Solución de e-commerce" })}
            link="https://elbarquito.ar"
        >
            {_({
                english: "Developed for a client",
                spanish: "Desarrollado en base a la necesidades del cliente"
            })}
        </ExperienceItem>
        <br />
        <p className="text-4mm">
            {_({
                english: "+ more info at Personal Projects and my GitHub",
                spanish: "+ más info en Personal Projects y en mi GitHub"
            })}
        </p>
    </Block >
);
