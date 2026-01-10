'use client';

import { motion, Transition, Variants } from "framer-motion";
import { CheckCircle2, Clock, HeartPulse, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import WomanDoctorMain from '../../../public/images/woman-smiles-crossed-hands.png';
import WomanDoctorSecondary from '../../../public/images/woman-doctor-speaking-phone.png';
import Link from 'next/link';

const springTransition = {
    type: "spring" as const,
    stiffness: 80,
    damping: 14,
} satisfies Transition;

const fadeInUp: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: springTransition,
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.16, delayChildren: 0.25 },
    },
};

export default function AboutUs() {
    return (
        <main className="bg-gradient-to-b from-neutral-light/30 via-white to-secondary/10 min-h-screen">
            {/* ====================== HERO / INTRODUCTION ====================== */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full pt-16 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
            >
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 mt-[10%]">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Images block */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative flex justify-center lg:justify-end order-2 lg:order-1"
                        >
                            <div className="relative">
                                <motion.img
                                    variants={fadeInUp}
                                    src={WomanDoctorMain.src}
                                    alt="Наші лікарі"
                                    className="relative z-10 w-80 lg:w-[440px] rounded-3xl shadow-2xl object-cover border-8 border-white"
                                    whileHover={{ scale: 1.03 }}
                                />

                                <motion.img
                                    variants={{
                                        hidden: { opacity: 0, y: 100, x: -50 },
                                        visible: {
                                            opacity: 0.94,
                                            y: 0,
                                            x: -70,
                                            transition: { delay: 0.45, ...springTransition },
                                        },
                                    }}
                                    src={WomanDoctorSecondary.src}
                                    alt="Наш спеціаліст"
                                    className="absolute -bottom-12 -left-10 lg:-bottom-20 lg:-left-24 w-64 lg:w-80 rounded-3xl shadow-2xl object-cover border-8 border-white"
                                    whileHover={{ scale: 1.03 }}
                                />

                                <motion.div
                                    initial={{ scale: 0, rotate: -12 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.8, type: "spring" as const, stiffness: 160, damping: 12 }}
                                    className="absolute -top-16 -right-8 bg-gradient-to-br from-secondary to-primary px-6 py-3.5 rounded-full shadow-2xl text-white font-bold text-base flex items-center gap-2.5 border-4 border-white"
                                >
                                    <HeartPulse className="w-5 h-5" /> 10+ років турботи
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text block */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="order-1 lg:order-2"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="inline-flex items-center gap-3 mb-7 bg-primary/10 text-primary px-5 py-2 text-xs rounded-full shadow-lg font-medium"
                            >
                                <Info className="w-5 h-5" /> Наша історія
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl font-bold leading-tight text-neutral-dark mb-8"
                            >
                                Ми робимо медицину{' '}
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    доступною
                                </span>{' '}
                                та зручною
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-sm lg:text-base text-secondary-dark leading-relaxed max-w-2xl mb-10"
                            >
                                У сучасному ритмі життя час стає одним з найдорожчих ресурсів.
                                Черги в поліклініках, багатогодинні поїздки, очікування — це те,
                                з чим стикається практично кожен, коли потребує консультації лікаря.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ====================== STORY & PROBLEM-SOLUTION ====================== */}
            <section className="relative w-full py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="max-w-4xl mx-auto prose prose-lg prose-headings:text-neutral-dark prose-p:text-secondary-dark"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        >
                            Чому ми з'явилися
                        </motion.h2>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            Чи помічали ви, скільки часу та сил забирає звичайна консультація у лікаря?
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                            Сучасне життя диктує свій ритм: робота, сім'я, зустрічі, поїздки. Виділити кілька годин на дорогу, черги та очікування в поліклініці стає справжнім викликом — навіть якщо розмова з лікарем триває лише 15–20 хвилин.
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            Ми переконані: якісна медична допомога не повинна залежати від географії, заторів чи щільного графіку. Вона має бути доступною саме тоді, коли вам це потрібно — швидко, безпечно та зручно.
                        </motion.p>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-medium text-xl mt-8">
                            Саме тому ми створили платформу онлайн-консультацій, де ви можете:
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="space-y-4 mt-6 list-none"
                        >
                            {[
                                "Отримати консультацію провідних спеціалістів у зручний для вас час",
                                "Забути про багатогодинні поїздки та черги",
                                "Звернутися за допомогою з будь-якої точки України чи світу — під час відпустки, відрядження чи перебування за кордоном",
                                "Отримувати рекомендації від перевірених лікарів замість пошуку відповідей у пошуковиках",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                    className="flex items-start gap-4 text-lg"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-12 text-lg">
                            Кожен лікар, який працює з нами, проходить ретельну перевірку кваліфікації, досвіду та відгуків. Ми співпрацюємо лише з професіоналами, щоб ви отримували послуги найвищої якості та могли спокійно займатися своїми справами, знаючи, що ваше здоров'я під надійним захистом.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="mt-10 text-xl font-medium text-center italic text-neutral-dark/90"
                        >
                            Бо здоров'я — це не те, що можна відкласти на потім.
                        </motion.p>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        className="text-center mt-20"
                    >
                        <Link
                            href="/booking"
                            className="group inline-flex items-center gap-5 bg-gradient-to-r from-primary to-secondary px-14 py-6 rounded-2xl text-base sm:text-xl font-bold text-white shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span>Отримати консультацію вже зараз</span>
                            <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}