'use client';

import { APP_NAME, LOGO, navItems } from "@/constants/main";
import { Button } from "@chakra-ui/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function PublicHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Fixed Header */}
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
          ${scrolled ? "bg-white/60 shadow-md backdrop-blur-sm" : "bg-transparent"}
        `}
            >
                <div className="max-w-7xl mx-auto px-5 py-5">
                    <div className="flex items-center justify-between">

                        {/* Logo + Name */}
                        <a href="/" className="flex items-center gap-3 group">
                            {LOGO && (
                                <img
                                    src={LOGO}
                                    alt={`${APP_NAME} logo`}
                                    className="w-10 h-10 object-contain rounded-lg transition-transform group-hover:scale-110"
                                />
                            )}
                            <span className="text-2xl font-bold text-primary hidden sm:block">
                                {APP_NAME}
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-12">
                            {navItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <a
                                        key={item.label}
                                        href={item.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push(item.path);
                                        }}
                                        className={`relative font-medium text-base transition-colors
                      ${active ? "text-primary" : "text-neutral-dark hover:text-primary"}
                    `}
                                    >
                                        {item.label}
                                        {active && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Desktop CTA – чиста Chakra Button */}
                        <div className="hidden lg:block">
                            <Button
                                onClick={() => router.push("/booking")}
                                className="!bg-primary hover:!bg-primary-dark !text-white"
                                size='sm'
                                px={8}
                                py={6}
                                fontWeight="bold"
                                rounded="lg"
                                shadow="lg"
                                _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
                                transition="all 0.2s"
                            >
                                Забронювати консультацію
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                            aria-label="Меню"
                        >
                            {isOpen ? <X size={28} className="text-neutral-dark" /> : <Menu size={28} className="text-neutral-dark" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden border-t border-gray-100
                ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    <nav className="bg-white px-6 py-8 space-y-6">
                        {navItems.map((item) => {
                            const active = isActive(item.path);
                            return (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.push(item.path);
                                        setIsOpen(false);
                                    }}
                                    className={`block text-lg font-medium transition-colors flex flex-row gap-4 items-center align-middle
                                    ${active ? "text-primary" : "text-neutral-dark hover:text-primary"}
                  `}
                                >
                                    {active && <ArrowRight className="text-teal-400" />} {item.label}
                                </a>
                            );
                        })}

                        <Button
                            onClick={() => {
                                router.push("/booking");
                                setIsOpen(false);
                            }}
                            className="!bg-primary hover:!bg-primary-dark !text-white !w-full"
                            size="lg"
                            py={7}
                            fontWeight="bold"
                        >
                            Забронювати консультацію
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Spacer */}
            <div className="h-20 lg:h-24" />
        </>
    );
}