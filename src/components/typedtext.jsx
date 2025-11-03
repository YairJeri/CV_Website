import { useState, useEffect } from "preact/hooks";

export default function TypedText({ specialization }) {

    const typingSpeed = 100;
    const deletingSpeed = 70;
    const pauseTime = 1000;

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;

        function type() {
            const currentRole = specialization[roleIndex];

            if (!isDeleting) {
                setText(currentRole.slice(0, charIndex + 1));
                if (charIndex + 1 === currentRole.length) {
                    timeout = setTimeout(() => setIsDeleting(true), pauseTime);
                } else {
                    timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
                }
            } else {
                setText(currentRole.slice(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % specialization.length);
                    timeout = setTimeout(() => setCharIndex(0), typingSpeed);
                } else {
                    timeout = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
                }
            }
        }

        timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <span class="border-accent pb-0.5">
            <span class="text-accent font-semibold border-accent whitespace-nowrap overflow-hidden border-r-2 animate-blink">
                {text || "\u200B"}
            </span>
        </span>
    );
}
