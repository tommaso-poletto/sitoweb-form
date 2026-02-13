import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Brain, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const analysisMetrics = [
  { label: "Compatibilità Dieta", maxValue: 94 },
  { label: "Rischio Allergeni", maxValue: 87 },
  { label: "Personalizzazione", maxValue: 91 },
];

interface AnalysisScreenProps {
  onComplete: () => void;
}

export const AnalysisScreen = ({ onComplete }: AnalysisScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // Randomize targets on mount (all > 70%)
  const [randomizedMetrics] = useState(() => 
    analysisMetrics.map((m) => ({
      ...m,
      maxValue: Math.floor(Math.random() * (99 - 71 + 1)) + 71
    }))
  );
  
  const [metricValues, setMetricValues] = useState(analysisMetrics.map(() => 0));

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Animate metric bars based on progress
    if (progress > 30) {
      setMetricValues((prev) =>
        prev.map((val, i) => {
          const target = randomizedMetrics[i].maxValue;
          const progressFactor = Math.min((progress - 30) / 70, 1);
          return Math.round(target * progressFactor);
        })
      );
    }
  }, [progress, randomizedMetrics]);

  const handleComplete = useCallback(() => {
    console.log("AnalysisScreen: handleComplete called");
    onComplete();
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-8"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                     bg-gradient-to-r from-forest-green/10 via-secondary/10 to-forest-green/10 
                     rounded-full blur-[100px]"
        />
      </div>

      {/* AI Brain Icon */}
      <motion.div className="relative mb-8 z-10">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-28 h-28 rounded-full border-4 border-dashed border-forest-green/20"
          style={{ margin: "-12px" }}
        />
        
        {/* Inner Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-forest-green/30 blur-xl"
        />
        
        {/* Icon Container */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-forest-green to-forest-green-light 
                        flex items-center justify-center shadow-2xl shadow-forest-green/40">
          <motion.div
            animate={{ rotate: isComplete ? 0 : [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: isComplete ? 0 : Infinity }}
          >
            {isComplete ? (
              <Sparkles className="w-10 h-10 text-white" />
            ) : (
              <Brain className="w-10 h-10 text-white" />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-2 z-10"
      >
        {isComplete ? "Possiamo aiutarti!" : "Analisi del tuo profilo"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-foreground-muted text-center mb-10 z-10"
      >
        {isComplete
          ? "Il tuo profilo è stato analizzato con successo"
          : "La nostra AI sta analizzando le tue risposte..."}
      </motion.p>

      {/* Metric Bars */}
      <div className="w-full max-w-md space-y-6 mb-10 z-10">
        {randomizedMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{metric.label}</span>
              <span className="text-sm font-bold text-forest-green">{metricValues[index]}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metricValues[index]}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-forest-green via-forest-green-light to-forest-green rounded-full relative"
              >
                {/* Shimmer Effect */}
                {!isComplete && (
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Complete State */}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md z-20 relative"
        >
          {/* Success Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-2 rounded-full bg-forest-green/10">
              <CheckCircle2 className="w-5 h-5 text-forest-green" />
            </div>
            <span className="text-forest-green font-semibold">Analisi completata</span>
          </div>

          {/* CTA Button */}
          <Button
            type="button"
            onClick={handleComplete}
            className="w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-forest-green/30
                       bg-gradient-to-r from-forest-green to-forest-green-light 
                       hover:shadow-xl hover:shadow-forest-green/40 transition-all relative z-30"
          >
            Scopri la nostra soluzione
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      )}

      {/* Progress text (when not complete) */}
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-10"
        >
          <span className="text-2xl font-bold text-forest-green">{Math.round(progress)}%</span>
        </motion.div>
      )}
    </motion.div>
  );
};
