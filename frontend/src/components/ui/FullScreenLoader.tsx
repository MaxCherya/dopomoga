"use client";
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function FullScreenLoader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-dark">

            {/* Concentric animated circles */}
            <div className="relative flex items-center justify-center">

                {/* Soft Circle 1 */}
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-primary-light/10"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Soft Circle 2 */}
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-primary-light/5"
                    animate={{ scale: [1.2, 1.5, 1.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Medical Icon Pulse */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="flex items-center justify-center p-6 rounded-full bg-primary-light shadow-xl"
                >
                    <HeartPulse className="w-14 h-14 text-white" />
                </motion.div>
            </div>

            {/* Text */}
            <motion.p
                className="mt-10 text-2xl font-bold tracking-wide text-secondary-soft"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Завантаження...
            </motion.p>
        </div>
    );
}