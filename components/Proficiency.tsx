interface Skill {
    name: string;
    level: number; // Level from 0 to 100
}

export default function Proficiency() {
    const skills: Skill[] = [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Django', level: 90 },
        { name: 'React', level: 70 },
        { name: 'Next.js', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Docker', level: 40 },
    ]
    return (
        <section className="relative py-12 bg-base-200 min-h-screen content-center">
            <div className="mx-auto p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Proficiency</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    {skills.map((skill, key) => (
                        <div key={key} className="p-4 bg-base-100 rounded-lg shadow-md">
                            <div className="flex justify-between">
                                <span className="text-base font-medium">{skill.name}</span>
                                <span className="text-sm font-medium">{skill.level}%</span>
                            </div>
                            <progress className="progress progress-accent w-full h-4" value={skill.level} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}