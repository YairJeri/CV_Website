import { useEffect, useRef } from "preact/hooks";

export default function Skills({ t }) {
    const skillsData = [
        {
            category: t.skills.categories[0],
            color: "from-cyan-500/20 to-cyan-500/10",
            items: ["Astro", "Preact/React", "TailwindCSS", "Node.js", "Express", "Angular", "three.js", "TensorFlow", "Flask", "GraphQL"],
        },
        {
            category: t.skills.categories[1],
            color: "from-lime-500/20 to-lime-500/10",
            items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Turso", "SQL Server"],
        },
        {
            category: t.skills.categories[2],
            color: "from-pink-500/20 to-pink-500/10",
            items: ["Figma", "Canva", "UI/UX Principles"],
        },
        {
            category: t.skills.categories[3],
            color: "from-amber-500/20 to-amber-500/10",
            items: ["Git", "Github", "Docker", "VSCode", "Notion", "Godot", "Linux", "AWS"],
        }, {
            category: t.skills.categories[4],
            color: "from-purple-500/20 to-purple-500/10",
            items: ["JavaScript", "Python", "C++", "C#", "C", "TypeScript", "HTML5", "CSS3", "Java", "Spring", "Bash"],
        },
    ];


    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    itemsRef.current.forEach((el) => {
                        if (!el) return;
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0) scale(1)";
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (itemsRef.current.length > 0) {
            observer.observe(itemsRef.current[0].parentElement);
        }
    }, []);

    let counter = 0;

    return (
        <section id="Skills" className="relative">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 tracking-tight"> {t.skills.title} </h2>
                <p className="text-default/80 text-base max-w-2xl mx-auto">
                    {t.skills.description}
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {skillsData.map((group, i) => (
                    <div
                        key={i}
                        className={`group relative flex-1 min-w-72 rounded-2xl p-8 shadow-lg bg-linear-to-br ${group.color} border border-white/5 hover:-translate-y-3 hover:shadow-xl transition-all duration-300`}
                    >
                        <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide text-default">
                            {group.category}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4 ">
                            {group.items.map((skill, j) => (
                                <div
                                    key={j}
                                    ref={(el) => (itemsRef.current[counter++] = el)}
                                    className={`hover:animate-wiggle flex flex-col flex-1 border border-white items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium opacity-0 transform translate-y-5 scale-90 transition-all duration-500
                  bg-linear-to-br ${group.color} text-default/90
                  hover:scale-105 hover:text-white hover:shadow-lg`}
                                >

                                    <SkillIcon name={skill} size={32} />
                                    <span className={``}>{skill}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
function SkillIcon({ name, size = 32 }) {
    const noIcons = ["UI/UX Principles"];
    const simpleIcons = ["Turso"];
    const nameMappings = {
        "C++": "cplusplus",
        "C#": "csharp",
        "VS Code": "vscode",
        "Preact/React": "react",
        "Node.js": "nodejs",
        "SQL Server": "microsoftsqlserver",
        "three.js": "threejs",
        "AWS": "amazonwebservices",
    }
    const sufixMappings = {
        "GraphQL": "plain",
        "AWS": "original-wordmark",
    }


    if (noIcons.includes(name)) return;

    const iconName = nameMappings[name] || name.toLowerCase();
    const sufix = sufixMappings[name] || "original";

    const devIconURL = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${iconName}/${iconName}-${sufix}.svg`;
    const simpleIconURL = `https://cdn.simpleicons.org/${iconName}`;

    var url = devIconURL
    if (simpleIcons.includes(name)) {
        url = simpleIconURL;
    };
    return (
        <img
            src={url}
            alt={name}
            width={size}
            height={size}
            className="transition-transform duration-300 transform hover:scale-110"
        />
    );
}


