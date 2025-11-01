// src/i18n/index.ts
import type { Translations } from "./en";

const modules = import.meta.glob("./*.ts", { eager: true });

export const languages: Record<string, Translations> = Object.fromEntries(
    Object.entries(modules).map(([path, mod]) => {
        const lang = path.split("/").pop()?.replace(".ts", "") ?? "en";
        return [lang, (mod as any).default as Translations];
    })
);
export const availableLangs = Object.keys(languages);

export function getLanguageNames(): { code: string; label: string }[] {
    return availableLangs.map((lang) => ({
        code: lang,
        label: languages[lang].name,
    }));
}

export function getTranslations(lang: string): Translations {
    return languages[lang] || languages["en"];
}
