// src/i18n/en.ts
export type Translations = {
    name: string;
    home: {
        title: [string, string];
        prev: string;
        specialization: Array<string>;
        about: string;
        viewProjects: string;
        contact: string;
    };
    navbar: {
        home: string;
        about: string;
        skills: string;
        portfolio: string;
        contact: string;
    };
    about: {
        title: string;
        header: string;
        description: [string, string, string];
        education: Array<{ label: string; value: string }>;
        experience: Array<{ label: string; value: string }>;
        languages: Array<{ label: string; value: string }>;
    };
    stats: {
        technologies: string;
        personalProjects: string;
        potential: string;
    };
    skills: {
        title: string;
        description: string;
        categories: Array<string>;
    };
    portfolio: {
        title: string;
        seeOnGithub: string;
        seeWebsite: string;

    };
};

const en: Translations = {
    name: "English",
    home: {
        title: ["My", "Portfolio"],
        prev: "I'm a",
        specialization: ["Frontend Developer", "Backend Developer", "Python Developer", "Data Analyst", "Data Scientist", "AI Engineer", "Game Developer", "Network Engineer"],
        about: "Student and developer with experience in frontend and backend development, data analysis, machine learning, and game development. Skilled at applying programming and problem-solving to real-world projects.",
        viewProjects: "View My Projects",
        contact: "Contact Me",
    },
    navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Projects",
        contact: "Contact",
    },
    about: {
        title: "About Me",
        header: "Student developer building projects in frontend & backend development, data analysis, machine learning, and game development.",
        description: [
            "Me gusta trabajar con diversas tecnologías, desarrollando habilidades tanto en frontend como en backend. También aplico técnicas básicas de análisis de datos y aprendizaje automático en mis proyectos.",
            "Me concentro en resolver problemas y construir soluciones prácticas, utilizando la programación como herramienta de aprendizaje y creatividad.",
            "Mi objetivo es seguir perfeccionando mis habilidades y desarrollar proyectos significativos en desarrollo de software y tecnologías orientadas a datos."
        ],
        education: [
            { label: "Education", value: "Computer Science" }
        ],
        experience: [
            { label: "Experience Level", value: "Intermediate" }
        ],
        languages: [
            { label: "Languages", value: "Spanish, English" }
        ],
    },
    stats: {
        technologies: "Technologies explored",
        personalProjects: "Personal Projects",
        potential: "Potential",
    },
    skills: {
        title: "Skills",
        description: "My expertise spans multiple areas — constantly expanding as I explore new technologies and tools.",
        categories: [
            "Frameworks & Libraries",
            "Databases",
            "Design",
            "Tools & DevOps",
            "Languages",
        ]
    },
    portfolio: {
        title: "Portfolio",
        seeOnGithub: "See on GitHub",
        seeWebsite: "Website",
    },
};


export default en;