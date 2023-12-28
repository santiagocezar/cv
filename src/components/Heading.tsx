export const Heading = () => (
    <div className="heading">
        <div className="pic bg-$v flex justify-center rd-3mm overflow-hidden">
            <img className="object-cover" src="/santi2.jpg" alt="" />
        </div>
        <header className="bg-$v name flex flex-col items-center gap-2mm text-center justify-center p-5mm grow font-title rd-2">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <h1 className="text-2.5em font-bold">Santiago Cézar</h1>
            <p className="font-bold">{_({ english: "software development and design", spanish: "diseño y desarrollo de software" })}</p>
            <p></p>
            <p></p>
            <p></p>
            <p className="on-print">cv.scez.ar</p>
        </header>
        <p className="bg-$s desc p-5mm grow rd-3mm indent-5mm">
            {/* I am a Programming Technician and a university entrant in Systems
            Engineering. I have experience in software development, design and
            problem solving. Linux user. I am looking for a part-time job that
            allows me to maintain a balanced approach with my studies. */}
            {_({
                english:
                    "I am a Programming Technician and a university student of Systems " +
                    "Engineering. With experience in software development, design and " +
                    "troubleshooting. Linux user. I am looking for a part-time job that " +
                    "allows me to keep a balanced approach with my studies.",
                spanish:
                    "Soy Técnico en Programación e ingresante universitario de Ingeniería " +
                    "en Sistemas. Con experiencia en desarrollo, diseño y resolución de " +
                    "problemas de software. Usuario de Linux. Busco un trabajo de tiempo " +
                    "parcial que me permita mantener un enfoque balanceado con mis" +
                    "estudios."
            })}

            {/* Capaz de realizar desarrollo Full Stack, automatización y diseño de
            interfaces. */}
        </p>
    </div>
);
