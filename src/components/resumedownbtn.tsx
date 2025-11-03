import { useEffect } from "preact/hooks";
import jsPDF from "jspdf";

interface DownloadBtnProps {
    resumeId: string;
}
// import certExcel from "../assets/certificates/Certificado_Excel_Intermedio.webp?inline";
// import certWord from "../assets/certificates/Certificado_Word_Intermedio.webp?inline";

// import certSDN from "../assets/certificates/Software Defined Networking.webp?inline";

// import certWDSAI from "../assets/certificates/Web Design_ Strategy and Information Architecture.webp?inline";
// import certWDWTP from "../assets/certificates/Web Design_ Wireframes to Prototypes.webp?inline";
// import certUXDF from "../assets/certificates/UX Design Fundamentals.webp?inline";
// import certVEOUI from "../assets/certificates/Visual Elements of User Interface Design.webp?inline";
// import certHTMLCSSJS from "../assets/certificates/HTML, CSS and Javascript for Web Developers.webp?inline";

// import certCAFVG from "../assets/certificates/Concept Art For Videogames.webp?inline";
// import certCG3DGPP from "../assets/certificates/Current Gen 3D Game Prop Production.webp?inline";
// import certLPAFV from "../assets/certificates/Low Poly Art For Videogames.webp?inline";
// import certPAFV from "../assets/certificates/Pixel Art For Videogames.webp?inline";

// const certificates = [
//     certExcel,
//     certWord,
//     certSDN,
//     certUXDF,
//     certVEOUI,
//     certWDSAI,
//     certWDWTP,
//     certHTMLCSSJS,
//     certCAFVG,
//     certCG3DGPP,
//     certLPAFV,
//     certPAFV,
// ];

export default function DownloadBtn({ resumeId }: DownloadBtnProps) {
    useEffect(() => {
        const btn = document.getElementById("downloadCV");
        const resumeSection = document.getElementById("Resume");
        if (!btn || !resumeSection) return;

        const handleClick = async () => {
            await document.fonts.ready;

            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const margin = 15;
            const lineHeight = 5;
            let y = margin;

            // --- Funciones Helper ---
            const addLine = (top: number, bottom: number) => {
                pdf.setLineWidth(0.2);
                y += top;
                pdf.line(margin, y, pdf.internal.pageSize.getWidth() - margin, y);
                y += bottom;
            };

            const addText = (text: string, options?: { bold?: boolean; size?: number; shareSpace?: boolean }) => {
                if (!text.trim()) return;
                pdf.setFont("helvetica", options?.bold ? "bold" : "normal");
                pdf.setFontSize(options?.size || 12);

                const lines = pdf.splitTextToSize(text.replace(/\n/g, " "), pdf.internal.pageSize.getWidth() - 2 * margin);
                lines.forEach((line: string) => {
                    if (y + lineHeight > pdf.internal.pageSize.getHeight() - margin) {
                        pdf.addPage();
                        y = margin;
                    }
                    pdf.text(line, margin, y);
                    y += lineHeight * (options?.shareSpace ? 0 : 1);
                });
            };

            const addCenteredText = (
                text: string,
                options?: { bold?: boolean; size?: number; maxWidth?: number; lineHeight?: number }
            ) => {
                if (!text.trim()) return;
                pdf.setFont("helvetica", options?.bold ? "bold" : "normal");
                pdf.setFontSize(options?.size || 12);

                const pageWidth = pdf.internal.pageSize.getWidth();
                const maxWidth = options?.maxWidth || pageWidth - 20;
                const lines = pdf.splitTextToSize(text.replace(/\n/g, " "), maxWidth);

                lines.forEach((line: string) => {
                    const x = (pageWidth - pdf.getTextWidth(line)) / 2;
                    pdf.text(line, x, y);
                    y += (options?.lineHeight || 1) * lineHeight;
                });
            };

            const addIndentedText = (text: string, indent: number, options?: { bold?: boolean; size?: number }) => {
                if (!text.trim()) return;
                pdf.setFont("helvetica", options?.bold ? "bold" : "normal");
                pdf.setFontSize(options?.size || 10);

                const x = margin + indent; // indent en mm
                const lines = pdf.splitTextToSize(text.replace(/\n/g, " "), pdf.internal.pageSize.getWidth() - margin - x);

                lines.forEach((line: string) => {
                    if (y + lineHeight > pdf.internal.pageSize.getHeight() - margin) {
                        pdf.addPage();
                        y = margin;
                    }
                    pdf.text(line, x, y);
                    y += lineHeight;
                });
            };

            const processOrderedList = (ol: HTMLElement) => {
                Array.from(ol.children).forEach(li => {
                    if (!(li instanceof HTMLElement) || li.tagName.toLowerCase() !== "li") return;

                    const h4 = li.querySelector("h4");
                    if (h4) addText("• " + h4.textContent?.trim(), { size: 10, bold: true, shareSpace: true });

                    const nestedUl = li.querySelector("ul");
                    if (nestedUl) {
                        Array.from(nestedUl.children).forEach(nestedLi => {
                            if (nestedLi instanceof HTMLElement && nestedLi.tagName.toLowerCase() === "li") {
                                addIndentedText(nestedLi.textContent?.trim() || "", 45); // 10mm de indent
                            }
                        });
                    }
                    y += 3;
                });
            };

            const processNode = (node: HTMLElement) => {
                const tag = node.tagName.toLowerCase();
                const text = node.textContent?.trim().replace(/\n/g, " ") || "";

                switch (tag) {
                    case "h1":
                        addCenteredText(text, { bold: true, size: 18 });
                        break;
                    case "h2":
                        addCenteredText(text, { size: 12, maxWidth: 140, lineHeight: 0.8 });
                        break;
                    case "h3":
                    case "h4":
                        addLine(1, 5);
                        addText(text, { bold: true, size: 12 });
                        y += 3;
                        break;
                    case "p":
                        addText(text, { size: 10 });
                        break;
                    case "ul":
                        Array.from(node.children).forEach(li => {
                            if (li instanceof HTMLElement && li.tagName.toLowerCase() === "li") {
                                addText("• " + li.textContent?.trim(), { size: 10 });
                            }
                        });
                        break;
                    case "ol":
                        processOrderedList(node);
                        break;
                    default:
                        Array.from(node.childNodes).forEach(child => {
                            if (child instanceof HTMLElement) processNode(child);
                            else if (child.nodeType === Node.TEXT_NODE) {
                                const childText = child.textContent?.trim() || "";
                                if (childText) addText(childText, { size: 12 });
                            }
                        });
                }
            };

            processNode(resumeSection);

            // for (const cert of certificates) {
            //     pdf.addPage("a4", "l");
            //     const { width, height } = pdf.internal.pageSize;
            //     pdf.addImage(cert, "JPEG", 0, 0, width, height, undefined, "FAST");
            // }

            pdf.save(`${resumeId}.pdf`);
        };

        btn.addEventListener("click", handleClick);
        return () => btn.removeEventListener("click", handleClick);
    }, [resumeId]);

    return (
        <div class="relative group mx-auto">
            <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-full animate-ping group-hover:hidden group-hover:animate-none rounded-xl bg-accent opacity-75"></span>
            <button
                id="downloadCV"
                class="relative py-3.5 px-8 rounded-xl font-semibold duration-300 inline-flex items-center gap-2 border-2 border-transparent hover:border-accent bg-accent text-contrast hover:bg-neutral-800 hover:text-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
            >
                Download CV
            </button>
        </div>
    );
}
