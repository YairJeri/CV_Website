import { useEffect, useRef } from "preact/hooks";
import TecnologiesIcon from "../icons/tecnology.svg?raw"
import PersonalProjectsIcon from "../icons/project.svg?raw"
import SkillGrowthIcon from "../icons/brain.svg?raw"

export default function Stats() {
    const stats = [
        { value: 20, label: "Technologies explored", color: "amber-600", icon: TecnologiesIcon },
        { value: 5, label: "Personal Projects", color: "cyan-500", icon: PersonalProjectsIcon },
        { value: 10000, label: "Skill Growth", color: "lime-500", icon: SkillGrowthIcon, infinite: true },
    ];

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
                        const duration = 2500;
                        const startTime = performance.now();

                        // Crea un span extra para el símbolo ∞
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
                            // el.style.position = "relative";

                            function animate(time) {
                                const elapsed = time - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const eased = easeOutCubic(progress);
                                const current = Math.floor(eased * end);

                                el.textContent = current;

                                // Empieza a hacer fade entre 70% y 100%
                                if (progress >= 0.6) {
                                    const fadeProgress = (progress - 0.7) / 0.3; // 0 → 1
                                    el.style.opacity = 1 - fadeProgress;
                                    infinityEl.style.opacity = fadeProgress;
                                }

                                if (progress < 1) requestAnimationFrame(animate);
                                else {
                                    el.style.opacity = "0";
                                    // el.style.display = "none";
                                    infinityEl.style.opacity = "1";
                                }
                            }

                            requestAnimationFrame(animate);
                        } else {
                            // Animación normal
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
            <div className="px-10 w-full">
                <div className="content-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="group bg-linear-to-br from-surface/95 to-surface rounded-2xl py-10 px-5 text-center relative duration-300 ease-in overflow-hidden hover:-translate-y-5"
                            >
                                <div
                                    className={`bg-${stat.color}/40 text-${stat.color} animate-pulse group-hover:scale-110 w-20 h-20 rounded-full flex items-center justify-center mt-0 mx-auto mb-5 duration-300`}
                                    dangerouslySetInnerHTML={{ __html: stat.icon }}
                                />
                                <span className={`relative counter text-5xl font-bold mb-2.5 font-heading text-${stat.color}`}>
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
