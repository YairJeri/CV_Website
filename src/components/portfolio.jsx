import { useState } from "preact/hooks";

export default function Portfolio({ projects }) {
    const [selectedTag, setSelectedTag] = useState("All");


    const allTags = Array.from(new Set(projects.flatMap(p => p.data.tags)));

    const filteredProjects =
        selectedTag === "All"
            ? projects
            : projects.filter(p => p.data.tags.includes(selectedTag));

    return (
        <div className="max-w-7xl mx-auto" id="Portfolio">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-center">
                Portfolio
            </h2>

            <div className="flex flex-wrap gap-3 mb-8 justify-center sm:justify-start">
                <TagButton
                    label="All"
                    isSelected={selectedTag === "All"}
                    onClick={() => setSelectedTag("All")}
                />
                {allTags.map(tag => (
                    <TagButton
                        key={tag}
                        label={tag}
                        isSelected={selectedTag === tag}
                        onClick={() => setSelectedTag(tag)}
                    />
                ))}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {filteredProjects.map(project => (
                    <a href={"/portfolio/" + project.slug} className="block" key={project.data.title}>
                        <div className="bg-surface rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-[400px] min-w-[280px] cursor-pointer hover:scale-105 hover:bg-accent/10 hover:text-accent">
                            <img src={project.optimizedImage?.src ?? project.data.image} alt={project.data.title} className="w-full h-48 object-cover" />
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-xl font-heading text-heading mb-2 font-bold">{project.data.title}</h3>
                                <p className="text-default mb-4 flex-1 line-clamp-2">{project.data.description}</p>
                                <div className="flex gap-2 mb-4 overflow-hidden flex-nowrap">
                                    {project.data.tags.map(tag => (
                                        <span key={tag} className={`shrink-0 text-xs px-2 py-1 rounded-full ${tag === "TestTag" ? "bg-red-600 text-white" : "bg-contrast text-default"}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>


        </div>
    );
}

function TagButton({ label, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full border font-medium transition-all
        ${isSelected
                    ? "bg-accent text-white border-accent shadow-md"
                    : "bg-surface text-default border-accent hover:bg-contrast hover:text-white"
                }`}
        >
            {label}
        </button>
    );
}
