'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

interface NavLink {
    name: string;
    href: string;
}

interface NavbarProps {
    activeSection?: string;
    variant?: 'transparent' | 'light';
}

export default function Navbar({
    activeSection = 'ana-sayfa',
    variant = 'transparent'
}: NavbarProps) {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const isLight = variant === 'light' || scrolled || mobileMenuOpen;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            if (mobileMenuOpen) setMobileMenuOpen(false);
        };

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (mobileMenuOpen && !target.closest('nav')) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const navLinks: NavLink[] = [
        { name: 'Hakkımızda', href: 'hakkimizda' },
        { name: 'Hizmetler', href: 'hizmetler' },
        { name: 'Menüler', href: 'menuler' },
        { name: 'İftar Menüleri', href: 'iftar-menuleri' },
        { name: 'Galeri', href: 'galeri' },
        { name: 'İletişim', href: 'iletisim' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
            router.push(`/?scrollTo=${sectionId}`);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isLight ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">

                    {/* Logo */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/logo.png" alt="Ereğli Catering Logo" className="h-16 w-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;

                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`relative transition-colors font-medium active:scale-95
                    ${isActive
                                            ? isLight
                                                ? 'text-[#c02e2f]'
                                                : 'text-white'
                                            : isLight
                                                ? 'text-gray-700 hover:text-[#c02e2f]'
                                                : 'text-white/90 hover:text-white'
                                        }
                  `}
                                >
                                    {link.name}

                                    {isActive && (
                                        <span
                                            className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${isLight ? 'bg-[#c02e2f]' : 'bg-white'
                                                }`}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => router.push('/iletisim')}
                        className="hidden md:block bg-[#c02e2f] hover:bg-[#a02525] text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        Teklif Al
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg"
                    >
                        <svg
                            className={`w-6 h-6 ${isLight ? 'text-gray-900' : 'text-white'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="py-4 bg-white">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => {
                                    scrollToSection(link.href);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 ${activeSection === link.href
                                    ? 'text-[#c02e2f] font-semibold bg-red-50'
                                    : 'text-gray-700 hover:text-[#c02e2f]'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        {/* 🔥 MOBILE CTA */}
                        <div className="px-4 pt-4">
                            <button
                                onClick={() => {
                                    router.push('/iletisim');
                                    setMobileMenuOpen(false);
                                }}
                                className="w-full bg-[#c02e2f] hover:bg-[#a02525] text-white py-3 rounded-full font-semibold transition-all active:scale-95"
                            >
                                Teklif Al
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}
