'use client';

import { ArrowRight, CheckCircle2, Clock, Form, HeartPulse, Info, MessageCircleMore, Phone, ShieldCheck, User } from 'lucide-react';
import WomanDoctor from '../../public/images/woman-doctor-crossed-arms.png';
import { Button } from '@chakra-ui/react';
import WomanDoc1 from '../../public/images/doctor-1.png';
import WomanDoc2 from '../../public/images/doctor-2.png';
import { motion } from "framer-motion";
import { StatCard } from '@/components/ui/cards/StatCard';
import FAQSection from '@/components/ui/faq/FAQSection';
import StepsSection from '@/components/ui/steps/StepsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[80svh] bg-primary flex flex-col lg:flex-row items-center justify-center lg:justify-evenly overflow-hidden"
      >

        {/* ===== CONTENT CONTAINER ===== */}
        <div className='w-full flex flex-col items-center'>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:justify-evenly">

            {/* TEXT FIRST ON MOBILE, LEFT ON DESKTOP */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-1 flex flex-col max-w-2xl px-4 pt-14"
            >
              {/* Tag */}
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary-dark max-w-fit mx-auto lg:mx-0 text-sm flex flex-row items-center gap-4 px-4 py-1 rounded-2xl shadow-md text-secondary-soft"
              >
                <HeartPulse className="w-4 h-4" /> Медичні консультації
              </motion.p>

              {/* Headline – line by line */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-white mt-7"
              >
                Найкращі лікарі,
              </motion.h1>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-secondary"
              >
                Найкращі консультації
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-7 text-gray-300 max-w-xl mx-auto lg:mx-0"
              >
                Зверніться за допомогою до лікаря не виходячи з дому. Ми пропонуємо онлайн консультації з фахівцями різних напрямів у будь-якому для Вас зручному форматі (відео/чат). Тільки перевірені лікарі з прозорими відгуками та багатим досвідом.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-row gap-4 mt-10 justify-center lg:justify-start w-full"
              >
                <Button className="!bg-secondary hover:!bg-secondary-dark !text-primary-dark !w-full" size="lg" py={7} fontWeight="bold" px={8} rounded="xl">
                  Забронювати консультацію
                </Button>
              </motion.div>
            </motion.div>

            {/* DOCTOR IMAGE + CIRCLES */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="order-2 lg:order-2 relative flex items-center justify-center"
            >
              {/* BIG CIRCLE */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80 }}
                className="absolute w-[300px] h-[300px] lg:w-[520px] lg:h-[520px] rounded-full bg-secondary/90 -z-10"
              />

              {/* SMALL CIRCLE */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
                className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary-light/90 -z-10"
              />

              {/* Doctor Image */}
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                src={WomanDoctor.src}
                alt="Лікарка"
                className="relative z-10 h-auto max-w-sm lg:max-w-none lg:h-[100svh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* DETAILS SECTION – animated cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full mb-10 lg:mb-14"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:justify-start gap-6 lg:gap-10 
                      bg-gradient-to-b lg:bg-gradient-to-r from-indigo-50/70 via-white to-transparent 
                      backdrop-blur-sm border border-gray-100/80 
                      p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl">

                {/* Card 1 */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center 
                        bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-400 hover:-translate-y-2 
                        w-full sm:max-w-sm lg:max-w-none lg:w-80 
                        border border-gray-100"
                >
                  <div className="mb-5 p-5 bg-gradient-to-br from-indigo-500 to-purple-600 
                          rounded-2xl shadow-xl group-hover:scale-110 
                          transition-transform duration-300">
                    <ShieldCheck className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                    Ми співпрацюємо виключно з перевіреними фахівцями.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center 
                        bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-400 hover:-translate-y-2 
                        w-full sm:max-w-sm lg:max-w-none lg:w-80 
                        border border-gray-100"
                >
                  <div className="mb-5 p-5 bg-gradient-to-br from-teal-500 to-emerald-600 
                          rounded-2xl shadow-xl group-hover:scale-110 
                          transition-transform duration-300">
                    <MessageCircleMore className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                    Будь-який зручний графік та формат консультації для Вас.
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="w-full min-h-screen bg-gradient-to-br from-neutral-light via-white to-secondary/20 flex flex-col items-center py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left: Images */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">

                {/* Main Doctor Photo */}
                <motion.img
                  src={WomanDoc1.src}
                  alt="Наш лікар"
                  whileHover={{ scale: 1.04 }}
                  className="relative z-10 w-80 lg:w-96 rounded-3xl shadow-2xl object-cover 
                           border-8 border-white"
                />

                {/* Overlapping Photo */}
                <motion.img
                  src={WomanDoc2.src}
                  alt="Наш лікар"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 0.94, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.9 }}
                  whileHover={{ scale: 1.04 }}
                  className="absolute -bottom-8 -left-12 lg:-bottom-12 lg:-left-20 
                           w-64 lg:w-80 rounded-3xl shadow-2xl object-cover border-8 border-white"
                />

                {/* Floating Badge – Brand Style */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="absolute -top-20 -right-8 bg-primary text-white 
                           px-7 py-4 rounded-full shadow-2xl font-bold text-lg 
                           flex items-center gap-2 border-4 border-white"
                >
                  10+ років досвіду
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Tag */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center mb-7 gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit shadow-lg font-semibold"
              >
                <Info className="w-5 h-5" />
                Про нас
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold text-neutral-dark leading-tight"
              >
                Якісні онлайн-<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  консультації для всіх
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-secondary-dark leading-relaxed max-w-2xl"
              >
                Ми спеціалізуємося на дитячих та дорослих консультаціях.
                Кваліфіковані лікарі, зручний графік, індивідуальний підхід —
                ми допомагаємо кожному почуватися краще, не виходячи з дому.
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-10 mt-12">
                <StatCard percentage={93.47} label="Задоволені клієнти" delay={0.6} />
                <StatCard percentage={95.05} label="Успішність лікування" delay={0.8} />
              </div>
            </motion.div>
          </div>
        </div>

        <StepsSection />

        <section className="relative w-full mt-32 overflow-hidden bg-transparent">

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-12 lg:space-y-16"
            >
              {/* Headline */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl font-bold leading-tight tracking-tight"
                >
                  Отримайте консультацію лікаря {" "}
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
                    вже сьогодні
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-primary-dark max-w-4xl mx-auto leading-relaxed font-light"
                >
                  Заповніть форму — ми зв’яжемося з вами{" "}
                  <span className="font-bold text-blue-600">протягом 30 хвилин</span> і підберемо зручний час
                </motion.p>
              </div>

              {/* Benefits - Beautiful glass cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
              >
                {[
                  "Без черг та поїздок",
                  "Кваліфіковані лікарі",
                  "Офіційне медичне заключення",
                  "Онлайн з будь-якого міста України чи світу",
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl bg-secondary-dark backdrop-blur-xl border border-white/40 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="p-6 text-left">
                      <CheckCircle2 className="w-9 h-9 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-base lg:text-lg font-medium text-gray-800 dark:text-gray-100">
                        {benefit}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button - Premium look */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16"
              >
                <Link
                  href="/booking"
                  scroll={true}
                  className="group relative inline-flex items-center gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary px-12 py-7 text-xl lg:text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-1"
                >
                  <span className="relative z-10">Записатися на консультацію</span>
                  <ArrowRight className="w-8 h-8 relative z-10 transition-transform group-hover:translate-x-4" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-black/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 mt-20 text-primary-dark"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <span className="text-lg font-semibold">Відповідь за 30 хвилин</span>
                </div>

                <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-teal-100 dark:bg-teal-900/50 rounded-full">
                    <User className="w-7 h-7 text-teal-600" />
                  </div>
                  <span className="text-lg font-semibold">Понад 12 000 пацієнтів</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </section>

      <FAQSection />
    </main>
  );
}