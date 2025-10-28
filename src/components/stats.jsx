import { useEffect, useRef } from "preact/hooks";

export default function Stats() {
    const stats = [
        { value: 255, label: "Stat 1", color: "bg-amber-600/40" },
        { value: 24, label: "Stat 2", color: "bg-cyan-500/40" },
        { value: 43, label: "Stat 3", color: "bg-lime-500/40" },
    ];

    const counters = useRef([]);
    const sectionRef = useRef(null);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    counters.current.forEach((el) => {
                        if (!el) return;

                        const end = parseInt(el.dataset.value);
                        const duration = 2000;
                        const startTime = performance.now();

                        function animate(time) {
                            const elapsed = time - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = easeOutCubic(progress);
                            const current = Math.floor(eased * end);

                            el.textContent = current;

                            if (progress < 1) requestAnimationFrame(animate);
                        }

                        requestAnimationFrame(animate);
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
            className="relative flex items-center lg:ml-80 w-full"
        >
            <div className="px-10 w-full">
                <div className="content-center justify-center">
                    <div className="stats-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="stats-item group bg-linear-to-br from-surface/95 to-surface rounded-2xl py-10 px-5 text-center relative duration-300 ease-in overflow-hidden hover:-translate-y-5"
                            >
                                <div
                                    className={`icon-wrapper ${stat.color} group-hover:scale-110 w-20 h-20 rounded-full flex items-center justify-center mt-0 mx-auto mb-5 duration-300`}
                                >
                                    <i></i>
                                </div>
                                <span className="counter text-5xl font-bold text-heading mb-2.5 font-heading">
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
