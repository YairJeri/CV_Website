import { useEffect, useRef } from "preact/hooks";
import TecnologiesIcon from "../icons/tecnology.svg?raw"
import PersonalProjectsIcon from "../icons/project.svg?raw"
import SkillGrowthIcon from "../icons/brain.svg?raw"

export default function Stats() {
    const stats = [
        { value: 30, label: "Technologies explored", color: "amber-600", icon: TecnologiesIcon },
        { value: 5, label: "Personal Projects", color: "cyan-500", icon: PersonalProjectsIcon },
        { value: 1000000, label: "Potential", color: "lime-500", icon: SkillGrowthIcon, infinite: true },

    ];
    const colorClasses = {
        "amber-600": {
            bg: "bg-amber-600/40",
            text: "text-amber-600"
        },
        "cyan-500": {
            bg: "bg-cyan-500/40",
            text: "text-cyan-500"
        },
        "lime-500": {
            bg: "bg-lime-500/40",
            text: "text-lime-500"
        }
    };


    const counters = useRef([]);
    const sectionRef = useRef(null);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    counters.current.forEach((el, i) => {
                        if (!el) return;

                        const end = parseInt(el.dataset.value);
                        const duration = 4000;
                        const startTime = performance.now();

                        if (stats[i].infinite) {
                            const infinityEl = document.createElement("span");
                            infinityEl.textContent = "∞";
                            infinityEl.style.position = "absolute";
                            infinityEl.style.inset = "0";
                            infinityEl.style.display = "flex";
                            infinityEl.style.alignItems = "center";
                            infinityEl.style.justifyContent = "center";
                            infinityEl.style.opacity = "0";
                            infinityEl.style.transition = "opacity 0.6s ease";
                            el.parentElement.appendChild(infinityEl);

                            function animate(time) {
                                const elapsed = time - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const eased = easeOutCubic(progress);
                                const current = Math.floor(eased * end);

                                el.textContent = current;
                                if (progress >= 0.2) {
                                    const fadeProgress = (progress - 0.2) / 0.8;
                                    el.style.opacity = 1 - fadeProgress;
                                    infinityEl.style.opacity = fadeProgress;
                                }

                                if (progress < 1) requestAnimationFrame(animate);
                                else {
                                    el.style.opacity = "0";
                                    infinityEl.style.opacity = "1";
                                }
                            }

                            requestAnimationFrame(animate);
                        } else {
                            function animate(time) {
                                const elapsed = time - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const eased = easeOutCubic(progress);
                                const current = Math.floor(eased * end);
                                el.textContent = current + "+";
                                if (progress < 1) requestAnimationFrame(animate);
                            }
                            requestAnimationFrame(animate);
                        }
                    });

                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="stats"
            className="relative flex items-center w-full"
        >
            <div className="w-full">
                <div className="content-center justify-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="group bg-linear-to-br from-surface/95 to-surface rounded-2xl py-10 px-5 text-center relative duration-300 ease-in overflow-hidden hover:-translate-y-5 min-w-60 flex-1"
                            >
                                <div className="relative w-24 h-24 flex items-center justify-center mt-0 mx-auto mb-5 group-hover:scale-110 duration-300">
                                    <div className={`${colorClasses[stat.color].bg} absolute w-28 h-28 rounded-full animate-pulse`} />
                                    <div className={`${colorClasses[stat.color].text} absolute w-20 h-20 bg-surface/50 rounded-full flex items-center justify-center z-10 overflow-hidden`}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: stat.icon }}
                                        />
                                    </div>
                                </div>

                                <span className={`relative counter text-5xl font-bold mb-2.5 font-heading ${colorClasses[stat.color].text}`}>
                                    <span
                                        ref={(el) => (counters.current[i] = el)}
                                        data-value={stat.value}
                                    >
                                        0
                                    </span>
                                </span>
                                <p className="text-default text-base m-0 font-medium font-heading opacity-80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
