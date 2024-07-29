interface Skill {
    name: string;
    level: number; // Level from 0 to 100
}

export default function Proficiency() {
    const skills: Skill[] = [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Django', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Next.js', level: 75 },
        // Add more skills as needed
    ]
    return (
        <section className="relative py-12 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Proficiency</h2>
                <div className="space-y-4">
                    {skills.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium">{skill.name}</span>
                                <span className="text-sm font-medium">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}