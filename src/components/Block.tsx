import { TextTitle } from "./TextTitle";

export const Block: FCC<{ className: string; title?: string }> = p => (
    <div className={p.className + " bg-$c p-5mm rd-3mm"}>
        {p.title && <TextTitle>{p.title}</TextTitle>}
        {p.children}
    </div>
);
