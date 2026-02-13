import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full">
      {/* Step Badge */}
      <div className="flex justify-center mb-3">
        <span className="px-3 py-1 bg-forest-green/10 text-forest-green text-xs font-bold rounded-full uppercase tracking-wide">
          Step {Math.floor(currentStep) + 1} of {totalSteps}
        </span>
      </div>

      {/* Progress Pills */}
      <div className="flex items-center gap-2 w-full max-w-lg mx-auto">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex-1">
              <div className="relative h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: isCompleted ? "100%" : isCurrent ? "50%" : "0%",
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-forest-green to-forest-green-light rounded-full"
                />

                {/* Shimmer effect for current step */}
                {isCurrent && (
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
