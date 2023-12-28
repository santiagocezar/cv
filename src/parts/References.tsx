import { FC } from "react";
import { Block } from "../components/Block";
import { ExperienceItem } from "../components/ExperienceItem";

const NUMBERS = {
    eze: undefined as string | undefined,
    ali: undefined as string | undefined,
    gra: undefined as string | undefined,
};

export function References() {
    return (
        <Block className="valen" title={_({ english: "References", spanish: "Referencias" })}>
            <ExperienceItem title="Ezequiel Ricca" link={NUMBERS.eze}>
                {_({
                    english: "Teacher at Escuela ProA",
                    spanish: "Profesor en la Escuela ProA"
                })}
            </ExperienceItem>
            <ExperienceItem title="Alicia Ferreyra" link={NUMBERS.ali}>
                {_({
                    english: "Escuela ProA Principal",
                    spanish: "Directora de la Escuela ProA"
                })}
            </ExperienceItem>
            <ExperienceItem title="Graciela Ricci" link={NUMBERS.gra}>
                {_({
                    english: "English Academy teacher",
                    spanish: "Profesora de academia de inglés"
                })}
            </ExperienceItem>
        </Block>
    );
}

if (import.meta.env.DEV) {
    NUMBERS.eze = "tel:+5493564416223";
    NUMBERS.ali = "tel:+5493564689859";
    NUMBERS.gra = "tel:+5493564608495";
}
// const first =
//     Math.pow(2, 22) +
//     Math.pow(4, 10) +
//     Math.pow(3, 11) +
//     Math.pow(5, 7) -
//     Math.pow(5, 5) -
//     1463;

// const LINKS = {
//     eze: "tel:+5493564416223", // 11 * 3 + 95 * 2 + 104 * 50 * 80
//     ali: "tel:+5493564689859",
// };
