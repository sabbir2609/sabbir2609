import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            "id": 1,
            "title": "Headless E-commerce",
            "type": "Backend",
            "description": "A headless e-commerce platform using Django REST Framework, Signals, PostgreSQL, and Redis.",
            "github_link": "https://github.com/sabbir2609/storefront",
            "live_link": "#"
        },
        {
            "id": 2,
            "title": "School Management System",
            "type": "Full Stack",
            "description": "A comprehensive school management system built with Django, Bootstrap, jQuery, Ajax, and PostgreSQL.",
            "github_link": "https://github.com/sabbir2609/next-school",
            "live_link": "#"
        },
        {
            "id": 3,
            "title": "CO2 Forecasting",
            "type": "Machine Learning",
            "description": "A CO2 forecasting project using Python and LSTM.",
            "github_link": "https://github.com/sabbir2609/co2-forecasting",
            "live_link": "#"
        },
        {
            "id": 4,
            "title": "Hotel Management System Backend",
            "type": "Backend",
            "description": "Hotel management system backend using Django REST Framework, Next.js, WebSockets, Uvicorn, IoT, and MQTT.",
            "github_link": "https://github.com/sabbir2609/zenith-be",
            "live_link": "#"
        },
        {
            "id": 4,
            "title": "Hotel Management System Frontend",
            "type": "Frontend",
            "description": "Hotel management system frontend using Next.js 14 App Routes, Tailwind CSS, and React Query.",
            "github_link": "https://github.com/sabbir2609/zenith-fe",
            "live_link": "#"
        },
        {
            "id": 5,
            "title": "Plant Based Decor Website Backend",
            "description": "A website for plant-based decor built with Django, Next.js, and Cloudinary.",
            "github_link": "https://github.com/sabbir2609/plantx-be",
            "live_link": "#"
        },

        {
            "id": 6,
            "title": "Plant Based Decor Website Frontend",
            "description": "A website for plant-based decor built with Django, Next.js, and Cloudinary.",
            "github_link": "https://github.com/sabbir2609/plantx-fe",
            "live_link": "#"
        },
    ];
    return (
        <section className="mt-10 mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-primary mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-secondary">{project.title}</h2>
                            <p className="mt-2 text-gray-700 flex-grow">{project.description}</p>
                            <div className="card-actions justify-end mt-4">
                                <Link href={project.github_link} className="btn btn-link text-primary">GitHub</Link>
                                {project.live_link !== "#" && (
                                    <Link href={project.live_link} className="btn btn-link text-primary ml-4">Live</Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}