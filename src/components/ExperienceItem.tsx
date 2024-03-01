function displayLink(link: string) {
    if (link.startsWith("tel:")) {
        link = link.split(":", 2)[1];
        // TODO: format phone numbers
        return link;
    }
    if (link.match(/^https?:\/\//)) return link.split("//", 2)[1];
}

export const ExperienceItem: FCC<{
    date?: string;
    title: string;
    link?: string;
}> = p => {
    return (
        <div>
            {p.date && <p className="text-$cez text-4mm font-bold">{p.date}</p>}
            <h3 className={"font-bold " + (p.date ? "" : "text-$cez")}>
                {p.title}
            </h3>
            <p className="text-4mm">{p.children}</p>
            {p.link && (
                <a href={p.link} className="text-4mm text-$cez">
                    {displayLink(p.link)}
                </a>
            )}
        </div>
    );
};
