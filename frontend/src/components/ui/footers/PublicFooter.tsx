'use client';

import { APP_NAME, contacts, LOGO, services } from '@/constants/main'
import WomenDoctors from '../../../../public/images/women-doctors.png'
import { Mail, Phone, MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function PublicFooter() {
    return (
        <footer
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${WomenDoctors.src})` }}
        >
            {/* Dark overlay + gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-primary/95 to-black/90" />

            {/* Main Content */}
            <div className="relative z-10 flex w-full flex-col justify-center min-h-screen text-white">
                {/* Top Section - Services & Contacts */}
                <div className="flex-1 container mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
                        {/* Services */}
                        <section className="space-y-8">
                            <h2 className="text-4xl lg:text-3xl font-bold tracking-tight">Наші послуги</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                                {services.map((service, index) => (
                                    <Link
                                        key={service.name}
                                        href={service.url}
                                        className="group flex items-center gap-3 text-gray-200 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                                    >
                                        <MoveRight className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                                        <span className="font-light tracking-wide group-hover:underline underline-offset-4">
                                            {service.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Contacts */}
                        <section className="space-y-8 flex flex-col">
                            <div>
                                <h2 className="text-3xl lg:text-3xl font-bold tracking-tight mb-4">Контакти</h2>
                                <p className="text-gray-300 text-lg font-light max-w-sm leading-relaxed">
                                    Якщо є питання — зв'яжіться з нами. Ми завжди раді Вам допомогти.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contacts.map((contact) => {
                                    const href =
                                        contact.type === 'email'
                                            ? `mailto:${contact.value}`
                                            : `tel:${contact.value}`

                                    return (
                                        <Link
                                            key={contact.type}
                                            href={href}
                                            className="group flex items-center gap-5 font-light text-gray-200 hover:text-white transition-all duration-300"
                                        >
                                            {contact.type === 'email' ? (
                                                <Mail className="w-7 h-7 text-teal-400 group-hover:scale-110 transition-transform" />
                                            ) : (
                                                <Phone className="w-7 h-7 text-teal-400 group-hover:scale-110 transition-transform" />
                                            )}
                                            <span className="group-hover:underline underline-offset-4 tracking-wide">
                                                {contact.value}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Bottom Branding Bar */}
                <div className="border-t border-white/20 backdrop-blur-sm bg-black/30">
                    <div className="container mx-auto px-6 py-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                            <div className="flex items-center gap-4">
                                {LOGO && (
                                    <img
                                        src={LOGO}
                                        alt={`${APP_NAME} logo`}
                                        className="w-8 h-8 object-contain drop-shadow-lg rounded-xl"
                                    />
                                )}
                                <span className="font-semibold tracking-wider text-gray-300">
                                    {APP_NAME}
                                </span>
                            </div>

                            <p className="text-gray-400 text-xs font-light tracking-wider">
                                © {new Date().getFullYear()} {APP_NAME}. Всі права захищено.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}