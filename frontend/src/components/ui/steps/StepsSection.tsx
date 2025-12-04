import { steps } from "@/constants/main";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StepsSection() {
    return (
        <section className="w-full mt-36">
            <div className="max-w-7xl mx-auto px-6">
                {/* Заголовок */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Як це працює?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Прості кроки до професійної медичної консультації онлайн
                    </p>
                </motion.div>

                {/* Кроки */}
                <div className="relative">
                    {/* Лінія з'єднання (десктоп) */}
                    <div className="absolute left-0 right-0 top-24 hidden lg:block h-1 bg-gradient-to-r from-blue-200 to-blue-300 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Коло з номером та іконкою */}
                                <div className="relative mb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl text-white"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
                                        {step.icon}
                                    </motion.div>

                                    {/* Номер кроку */}
                                    <span className="absolute -top-4 -right-4 bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                        {step.number}
                                    </span>

                                    {/* Стрілка між кроками (крім останнього) */}
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="hidden lg:block absolute top-1/2 -right-20 transform -translate-y-1/2 text-blue-400 w-12 h-12 opacity-60" />
                                    )}
                                </div>

                                {/* Текст */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xs">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Ефект при наведенні */}
                                <motion.div
                                    className="absolute -inset-4 bg-blue-100/20 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    layoutId={`step-glow-${index}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}