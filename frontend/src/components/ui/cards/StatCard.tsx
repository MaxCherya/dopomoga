import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const StatCard = ({ percentage, label, delay }: { percentage: number; label: string; delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay, duration: 0.7, ease: "easeOut" }}
            className="text-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: delay + 0.3, type: "spring", stiffness: 150 }}
                className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-primary to-primary-light"
            >
                {isInView ? `${percentage.toFixed(2)}%` : "0%"}
            </motion.div>

            <p className="mt-3 text-neutral-dark/80 font-medium text-sm lg:text-base">{label}</p>

            <div className="mt-4 h-3 bg-neutral-light rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : {}}
                    transition={{ delay: delay + 0.5, duration: 1.8, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};