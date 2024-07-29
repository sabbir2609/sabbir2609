import Image from "next/image";
import type { Metadata } from 'next';
import profilePic from "@/public/me/profile.jpg";


export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Sabbir Hasan Munna, a full stack developer and physics researcher.",
};

export default function About() {
    return (
        <section className="p-6 lg:m-10">
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
                <Image
                    src={profilePic}
                    height={500}
                    width={500}
                    loading="lazy"
                    alt="Sabbir Hasan Munna"
                    className="w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-0 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        Hello! I am <span className="font-semibold">Sabbir Hasan Munna</span>, a passionate and hardworking full stack developer and physics researcher. I am currently pursuing a Postgraduate (MSc) degree specializing in Solid State Physics at Khulna University of Engineering and Technology (KUET).
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        I have extensive experience in developing web applications using <span className="font-semibold">Python (Django)</span> and <span className="font-semibold">JavaScript (React/Next.js)</span>. I thrive in dynamic and challenging environments and am committed to delivering high-quality work.
                    </p>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold">Key Highlights</h2>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Graduate Student majoring in Physics</li>
                            <li>Specializing in Solid State Physics</li>
                            <li>Full Stack Developer at Viriditus</li>
                            <li>Proficient in Django, Next.js, Tailwind CSS, PostgreSQL, Redis, and more</li>
                            <li>Experience in IoT, real-time data, and WebSockets</li>
                            <li>Freelance Writer for Science View Publication, Khulna</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}