'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <header className="bg-base-200">
            <nav className="mx-auto flex justify-between items-center p-3">
                <Link href="/" className="text-lg font-bold text-blue-500">Sabbir</Link>
                <div className="hidden md:flex space-x-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="btn btn-sm rounded-sm shadow-none"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>
            <div
                className={`md:hidden fixed inset-0 bg-base-300 bg-opacity-90 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={toggleMenu}
                            className="font-bold text-2xl"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
