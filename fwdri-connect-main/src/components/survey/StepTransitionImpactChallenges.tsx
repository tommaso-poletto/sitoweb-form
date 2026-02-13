import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

interface StepTransitionImpactChallengesProps {
    onContinue: () => void;
}

export const StepTransitionImpactChallenges = ({ onContinue }: StepTransitionImpactChallengesProps) => {
    useEffect(() => {
        // Auto-advance after 2.5 seconds
        const timer = setTimeout(() => {
            onContinue();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onContinue]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-green text-white p-6 text-center"
            onClick={onContinue} // Allow clicking anywhere to skip
        >
            <div className="max-w-md w-full flex flex-col items-center">
                {/* Heart Icon with Pulse Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: 1
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm"
                >
                    <Heart className="w-10 h-10 text-white fill-white" />
                </motion.div>

                {/* Text Content */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight"
                >
                    La sicurezza non è un optional.
                </motion.h2>


            </div>

            {/* Skip / Continue Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 right-6 flex items-center gap-2 text-sm font-medium text-white/50 cursor-pointer hover:text-white transition-colors"
            >
                <span>Continua</span>
                <ArrowRight className="w-4 h-4" />
            </motion.div>
        </motion.div>
    );
};
