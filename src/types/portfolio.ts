export interface Portfolio {
    title: string;
    description: string;
    image: {
        src: string;
        width: number;
        height: number;
        format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
    };
    tags: string[];
    lang: string;
}