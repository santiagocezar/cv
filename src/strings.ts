
function isProperty<T extends object>(obj: T, k: any): k is keyof T {
    return k in obj;
}

const LANGS = {
    "#en": "english" as const,
    "#es": "spanish" as const,
}
type Langs = typeof LANGS;

export default function _(strings: { [K in Langs[keyof Langs]]: string }, initial?: Langs[keyof Langs]): string {
    const hash = "#es"
    const lang = isProperty(LANGS, hash) ? LANGS[hash] : initial!
    return strings[lang]
}
