export interface Skills {
    title: string;

    content: Record<string, string[]>[];
}

export interface Language {
    language: string;
    level: string;
}

export interface Languages {
    title: string;
    content: Language[];
}

export interface Education {
    title: string;
    content: string[];
}

export interface ProfessionalProfile {
    title: string;
    content: string[];
}

export interface AdditionalInfo {
    title: string;
    content: string[];
}

export interface Project {
    title: string;
    content: string[];
}

export interface QuickInformation extends Array<string> { }

export interface Resume {
    name: string;
    lang: string; // "es" | "en"
    image: {
        src: string;
        width: number;
        height: number;
        format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
    };
    quickInformation: QuickInformation;
    professionalProfile: ProfessionalProfile;
    skills: Skills;
    education: Education;
    languages: Languages;
    additionalInfo: AdditionalInfo;
    projects: Project;
}
