'use client';

import { HeartPulse, MessageCircleMore, ShieldCheck } from 'lucide-react';
import WomanDoctor from '../../public/images/woman-doctor-crossed-arms.png';
import { Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <section className="relative w-full min-h-[80svh] bg-primary flex flex-col lg:flex-row items-center justify-center lg:justify-evenly overflow-hidden">

        {/* ===== CONTENT CONTAINER ===== */}
        <div className='w-full flex flex-col items-center'>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:justify-evenly">

            {/* TEXT FIRST ON MOBILE, FIRST ON LEFT SIDE ON DESKTOP */}
            <div className="order-1 lg:order-1 flex flex-col max-w-2xl px-4 pt-14">
              <p className="bg-secondary-dark max-w-fit mx-auto lg:mx-0 text-sm flex flex-row items-center gap-4 px-4 py-1 rounded-2xl shadow-md text-secondary-soft"><HeartPulse className="w-4 h-4" /> Медичні консультації</p>

              <h1 className="text-5xl font-bold text-white mt-7">Найкращі лікарі,</h1>
              <h1 className="text-5xl font-bold text-secondary">Найкращі консультації</h1>

              <p className="mt-7 text-gray-300 max-w-xl mx-auto lg:mx-0">Зверніться за допомогою до лікаря не виходячи з дому. Ми пропонуємо онлайн консультації з фахівцями різних напрямів у будь-якому для Вас зручному форматі (відео/чат). Тільки перевірені лікарі з прозорими відгуками та багатим досвідом.</p>

              <div className="flex flex-row gap-4 mt-10 justify-center lg:justify-start w-full">
                <Button
                  className="!bg-secondary hover:!bg-secondary-dark !text-primary-dark !w-full" size="lg" py={7} fontWeight="bold" px={8} rounded="xl">Забронювати консультацію</Button>
              </div>
            </div>

            {/* DOCTOR IMAGE SECOND ON MOBILE, SECOND ON DESKTOP (RIGHT SIDE) */}
            <div className="order-2 lg:order-2 relative flex items-center justify-center">

              {/* BIG CIRCLE */}
              <div className="absolute w-[300px] h-[300px] lg:w-[520px] lg:h-[520px] rounded-full bg-secondary/90 -z-10" />

              {/* SMALL CIRCLE */}
              <div className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary-light/90 -z-10" />

              <img src={WomanDoctor.src} alt="Лікарка" className="relative z-10 h-auto max-w-sm lg:max-w-none lg:h-[100svh] object-contain drop-shadow-2xl" />
            </div>
          </div>

          {/* DETAILS SECTION*/}
          <div className="w-full mb-10 lg:mb-14">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Container with left alignment on large screens */}
              <div className="flex flex-col lg:flex-row lg:justify-start gap-6 lg:gap-10 
                    bg-gradient-to-b lg:bg-gradient-to-r from-indigo-50/70 via-white to-transparent 
                    backdrop-blur-sm border border-gray-100/80 
                    p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl">

                {/* Card 1 - Verified Specialists */}
                <div className="group flex flex-col items-center text-center 
                      bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                      transition-all duration-400 hover:-translate-y-2 
                      w-full sm:max-w-sm lg:max-w-none lg:w-80 
                      border border-gray-100">
                  <div className="mb-5 p-5 bg-gradient-to-br from-indigo-500 to-purple-600 
                        rounded-2xl shadow-xl group-hover:scale-110 
                        transition-transform duration-300">
                    <ShieldCheck className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                    Ми співпрацюємо виключно з перевіреними фахівцями.
                  </p>
                </div>

                {/* Card 2 - Flexible Schedule */}
                <div className="group flex flex-col items-center text-center 
                      bg-white/90 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                      transition-all duration-400 hover:-translate-y-2 
                      w-full sm:max-w-sm lg:max-w-none lg:w-80 
                      border border-gray-100">
                  <div className="mb-5 p-5 bg-gradient-to-br from-teal-500 to-emerald-600 
                        rounded-2xl shadow-xl group-hover:scale-110 
                        transition-transform duration-300">
                    <MessageCircleMore className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                    Будь-який зручний графік та формат консультації для Вас.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      {/* NEXT SECTION */}
      <section className="w-full min-h-screen bg-white" />
    </main>
  );
}