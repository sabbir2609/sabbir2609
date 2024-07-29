"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#fff",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000",
                },
                links: {
                    color: "#000",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );
    return (
        <section className="relative w-full overflow-hidden min-h-[90vh]">
            {init && (
                <Particles
                    id="tsparticles"
                    options={options}
                />
            )}
            <div className="relative z-20 hero p-2">
                <div className="hero-content flex-col lg:flex-row-reverse text-black">
                    <Image
                        src='/me/profile.jpg'
                        alt="Sabbir Hasan Munna"
                        width={500}
                        height={500}
                        className="lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:6xl font-bold">First, solve the problem. Then, write the code.</h1>
                        <p className="mt-4 text-lg">- John Johnson</p>
                        <p className="mt-4 text-lg">I am a Full Stack Developer. I love to solve problems and write code. I am passionate about learning new technologies and building new things. I am a quick learner and love to work in a team. I am always ready to take new challenges and solve them.</p>
                        <div className="flex mt-4 space-x-2">
                            <Link
                                href="/doc/resume.pdf"
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-secondary"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
