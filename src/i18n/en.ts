// src/i18n/en.ts
export type Translations = {
    name: string;
    flag: string;
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
    contact: {
        title: string;
        text: string;
        email: string;
        github: string;
        linkedin: string;
    };
};

const en: Translations = {
    name: "English",
    flag: "fi-us",
    home: {
        title: ["My", "Portfolio"],
        prev: "I'm a",
        specialization: ["Frontend Developer", "Backend Developer", "Python Developer", "Data Analyst", "Data Scientist", "AI Engineer", "Game Developer", "Network Engineer"],
        about: "Full stack developer with experience in frontend and backend development, data analysis, machine learning, and game development. Skilled at applying programming and problem-solving to real-world projects.",
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
        header: "Full stack building projects in frontend & backend development, data analysis, machine learning, and game development.",
        description: [
            "I enjoy working with diverse technologies, developing skills in both frontend and backend areas. I also apply basic data analysis and machine learning techniques in my projects.",
            "I focus on solving problems and building practical solutions, using programming as a tool for learning and creativity.",
            "My goal is to keep improving my skills and to develop meaningful projects in software development and data-oriented technologies."
        ]
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
    contact: {
        title: "Contact Me",
        text: "If you have a project, an idea or simply want to say hello, don't hesitate to contact me!",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn"
    }
};


export default en;