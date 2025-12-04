import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/constants/main";

const FAQItem = ({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="border-b border-primary/10 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full py-6 px-8 flex items-center justify-between text-left 
                   hover:bg-primary/5 transition-colors duration-300 rounded-2xl 
                   focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
                <h3 className="text-lg lg:text-xl font-semibold text-neutral-dark pr-8">
                    {question}
                </h3>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`w-6 h-6 text-primary transition-colors 
            ${isOpen ? "text-primary-light" : "text-primary/70"}`} />
                </motion.div>
            </button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? 16 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="px-8 pb-6">
                    <p className="text-secondary-dark leading-relaxed text-base lg:text-lg">
                        {answer}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

// Главный FAQ компонент
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full pb-20 bg-gradient-to-bl from-secondary/20 via-white to-white">
            <div className="max-w-4xl mx-auto px-6 py-12 bg-secondary-dark/5 rounded-2xl">

                {/* Заголовок */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="inline-flex items-center gap-3 bg-primary/10 text-primary 
                         px-6 py-3 rounded-full font-semibold text-sm lg:text-base shadow-md">
                        Поширені запитання
                    </p>
                    <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-neutral-dark">
                        Маєте питання?<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                            Ми вже відповіли
                        </span>
                    </h2>
                </motion.div>

                {/* Список FAQ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* Нижній акцент */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-secondary-dark text-xs">
                        Залишились питання?{" "}
                        <a href="/contact" className="text-primary-light font-semibold hover:underline">
                            Напишіть нам →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;