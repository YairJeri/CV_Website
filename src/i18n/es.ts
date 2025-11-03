// src/i18n/es.ts
import type { Translations } from "./en";

const es: Translations = {
    name: "Español",
    flag: "fi-es",
    home: {
        title: ["Mi", "Portafolio"],
        prev: "Soy un",
        specialization: ["Desarrollador Frontend", "Desarrollador Backend", "Desarrollador Python", "Analista de Datos", "Científico de Datos", "Ingeniero de IA", "Desarrollador de Juegos", "Ingeniero de Redes"],
        about: "Desarrollador full stack con experiencia en desarrollo frontend y backend, análisis de datos, aprendizaje automático y desarrollo de videojuegos. Competente en aplicar programación y resolución de problemas a proyectos del mundo real.",
        viewProjects: "Vé mis Proyectos",
        contact: "Contáctame",
    },
    navbar: {
        home: "Inicio",
        about: "Acerca de",
        skills: "Habilidades",
        portfolio: "Proyectos",
        contact: "Contacto",
    },
    about: {
        title: "Acerca de mí",
        header: "Desarrollador full stack con experiencia en proyectos de frontend y backend, análisis de datos, aprendizaje automático y desarrollo de videojuegos.",
        description: [
            "Me gusta crear proyectos con diversas tecnologías, desarrollando habilidades tanto en frontend como en backend. También aplico técnicas básicas de análisis de datos y aprendizaje automático en mis proyectos.",
            "Me enfoco en resolver problemas y construir soluciones prácticas, usando la programación como herramienta para aprender y ser creativo.",
            "Mi objetivo es seguir mejorando mis habilidades y crear proyectos significativos en desarrollo de software y tecnologías orientadas a datos."],
    },
    stats: {
        technologies: "Tecnologías exploradas",
        personalProjects: "Proyectos personales",
        potential: "Potencial",
    },
    skills: {
        title: "Habilidades",
        description: "Mi experiencia se extiende a varios ámbitos — constantemente ampliando mi conocimiento y experiencia en nuevas tecnologías y herramientas.",
        categories: [
            "Frameworks & Librerías",
            "Bases de Datos",
            "Diseño",
            "Herramientas & DevOps",
            "Lenguajes",
        ]
    },
    portfolio: {
        title: "Portafolio",
        seeOnGithub: "Ver en GitHub",
        seeWebsite: "Sitio web",
    },
};

export default es;
