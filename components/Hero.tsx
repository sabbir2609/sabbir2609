"use client";

import Image from "next/image";
import Link from "next/link";

import profileImage from "@/public/me/profile.jpg";

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
        <section className="relative w-full overflow-hidden min-h-[92vh] content-center">
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
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDWWcJ4j82a3F1aLFs2hSoBOSTg/l171y3gop9Sk5bM/9k=',
                        className="
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
