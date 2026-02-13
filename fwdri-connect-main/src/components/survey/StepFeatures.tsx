import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  ScanLine,
  Refrigerator,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  Home,
  ChefHat,
  Link as LinkIcon,
  Lock as Padlock,
  Users,
  Apple,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PhoneFlowController,
  ScannerContent,
  ResultContent,
} from "@/components/ScannerScreen";

import scanningJar from "@/assets/scanning-feature.jpg";

interface StepFeaturesProps {
  onContinue: () => void;
}

const scannerSteps = [
  { id: "scan", title: "Scanner AI", component: <ScannerContent /> },
  {
    id: "result",
    title: "Verifica istantanea",
    component: (
      <ResultContent type="APPROVED" name="Yogurt Greco Bio" grade={90} />
    ),
  },
];

const features = [
  {
    id: "scanner",
    title: "SCANNER",
    subtitle: "Analisi istantanea",
    description: "Punta la fotocamera e scopri subito se un prodotto è adatto.",
    icon: ScanLine,
    color: "from-[#FF4F28] to-[#E03E1A]",
    phoneSteps: scannerSteps,
    isLocked: false,
  },
];

const betaBenefits = [
  {
    icon: Clock,
    text: "Accesso V.I.P.",
    subtext: "Sii il primo ad entrare nel futuro",
  },
  {
    icon: Users,
    text: "Founder Community",
    subtext: "Supporta la nostra missione",
  },
  {
    icon: Check,
    text: "Vantaggi Esclusivi",
    subtext: "Promozioni riservate ai pìonieri",
  },
];

/**
 * Helper to render the PhoneFlowController properly scaled
 */
const PhoneCard = ({
  steps,
  isLocked,
}: {
  steps: any[];
  isLocked?: boolean;
}) => {
  return (
    <div className="w-full h-[320px] bg-gray-50 flex items-start justify-center overflow-hidden relative">
      <div
        className={`transform scale-[0.45] origin-top mt-4 pointer-events-none select-none transition-all duration-500 ${isLocked ? "blur-md grayscale opacity-40" : ""}`}
      >
        {/* We just use the simple silhouette for auto-play inside the small card */}
        <PhoneFlowController steps={steps} />
      </div>

      {/* Locked Overlay - Simplified style */}
      {isLocked && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[4px]">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Stylized Padlock Icon */}
            <div className="relative z-30 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center mb-6 border-2 border-forest-green relative overflow-hidden"
              >
                <Padlock
                  className="w-10 h-10 text-forest-green"
                  strokeWidth={2.5}
                />
                <div className="absolute inset-0 bg-forest-green/5" />
              </motion.div>

              {/* Coming Soon Glowing Label */}
              <div className="mt-8 relative">
                {/* Pulsing Glow behind Label */}
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-secondary/40 blur-[25px] rounded-full"
                />

                <div className="relative bg-secondary px-10 py-4 rounded-2xl shadow-xl border-2 border-white/20">
                  <p className="text-4xl md:text-5xl font-display font-black tracking-widest text-white italic drop-shadow-lg uppercase">
                    COMING SOON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to prevent interaction with the mini-phone */}
      <div className="absolute inset-0 z-10"></div>
    </div>
  );
};

export const StepFeatures = ({ onContinue }: StepFeaturesProps) => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-background overflow-y-auto"
    >
      {/* Website Link */}
      <Link
        to="/"
        className="absolute top-6 right-6 z-50 bg-white/50 backdrop-blur-md border border-border/50 
                   px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-[#1F5036] 
                   hover:bg-white transition-all hover:scale-105 shadow-sm"
      >
        <span>Home</span>
        <Home className="w-3 h-3" />
      </Link>

      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-32">
        {/* Header content ... same as before */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
            Mangia Senza Paura.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative px-6 py-4 rounded-2xl bg-forest-green/5 border border-forest-green/10 max-w-2xl mx-auto"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-green text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm">
              La Nostra Visione
            </div>
            <p className="text-sm md:text-base text-forest-green/80 leading-relaxed font-medium">
              Siamo un team di giovani sognatori con i piedi ben piantati a
              terra. Abbiamo fondato questa startup con un{" "}
              <span className="text-forest-green font-bold text-lg">
                obiettivo chiaro
              </span>
              : trasformare la nostra energia in{" "}
              <span className="text-secondary italic">soluzioni concrete</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Carousel */}
        <div className="relative w-full max-w-md mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-2 border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              {/* Feature Content (Phone) */}
              <PhoneCard
                steps={features[currentFeature].phoneSteps}
                isLocked={features[currentFeature].isLocked}
              />

              <div className="p-6 text-center relative z-20 bg-white">
                <div className="flex justify-center gap-1.5 mb-4">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentFeature ? "w-6 bg-secondary" : "w-2 bg-[#DED8C4]"}`}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black uppercase tracking-widest text-[#1F5036] mb-1">
                  {features[currentFeature].title}
                </h3>

                <p className="text-sm font-medium text-forest-green mb-2">
                  {features[currentFeature].subtitle}
                </p>
                <p className="text-foreground-muted text-xs leading-relaxed max-w-[240px] mx-auto">
                  {features[currentFeature].description}
                </p>

                <div className="mt-4 mx-auto w-fit px-4 py-2 bg-secondary/5 border border-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    e molte altre opzioni arriveranno presto
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>



        {/* Beta Program Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md bg-gradient-to-br from-[#FFF9F3] to-white 
                     border border-[#DED8C4] rounded-[2rem] p-6 shadow-lg relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/5 rounded-bl-[4rem] -z-10" />

          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
              PROGRAMMA BETA
            </span>
            <h3 className="text-xl font-black text-foreground">
              Diventa un Pioniere
            </h3>
          </div>

          {/* Benefits */}
          <div className="space-y-4 mb-6">
            {betaBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-foreground text-sm block leading-tight">
                      {benefit.text}
                    </span>
                    {benefit.subtext && (
                      <p className="text-[10px] text-foreground-muted leading-tight mt-0.5">
                        {benefit.subtext}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Price Scratch */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="relative">
              <span className="text-2xl font-black text-gray-300">5€</span>
              <div className="absolute inset-0 w-full h-0.5 bg-red-400 rotate-[-15deg] top-1/2"></div>
              <div className="absolute inset-0 w-full h-0.5 bg-red-400 rotate-[15deg] top-1/2"></div>
            </div>
            <span className="text-4xl font-black text-forest-green">3,90€</span>
          </div>

          {/* CTA */}
          <Button
            type="button"
            onClick={onContinue}
            className="w-full h-14 rounded-2xl font-black text-base shadow-xl shadow-forest-green/20
                       bg-[#FF4F28] hover:bg-[#E03E1A] text-white uppercase tracking-wider
                       hover:scale-[1.02] transition-all"
          >
            OTTIENI LA BETA <span className="ml-2 text-xl">🚀</span>
          </Button>

          {/* Payment Icons */}
          <div className="flex items-center justify-center gap-4 mt-6 select-none scale-110 origin-top">
            {/* Apple Pay */}
            <div className="flex items-center justify-center bg-white rounded-lg h-10 px-4 border border-[#e5e7eb] gap-1.5 shadow-sm">
              <span className="flex items-center justify-center">
                <svg viewBox="0 0 384 512" className="h-[18px] w-auto fill-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-53.7-88-54.2-37.1-.4-72.3 22-91.1 22-19.1 0-51.2-21.4-83.3-22-42.8-.7-82.6 24.8-104.9 63-45 77.2-11.6 191.2 32.4 254.4 21.6 31 47.4 65.5 81.3 64 32.3-1.4 44.5-20.9 83.6-20.9 38.9 0 50 20.9 84.1 20.2 34.6-.7 56.6-31.2 78-62 25-36 34.9-70.9 35.3-72.7-.2-.2-67.6-26.2-67.4-107zm-73.3-200.7c18.5-22.4 31-53.6 27.5-84.8-26.6 1.1-59.2 17.8-78.3 40.2-17.1 19.9-32.3 52-27.9 82.5 29.8 2.3 62-15.5 78.7-37.9z"/>
                </svg>
              </span>
              <span className="text-black font-sans font-medium text-xl tracking-tight leading-none mt-0.5">
                Pay
              </span>
            </div>

            {/* Google Pay */}
            <div className="flex items-center justify-center bg-white rounded-lg h-10 px-4 border border-[#e5e7eb] gap-1.5 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[#5f6368] font-sans font-medium text-xl tracking-tight leading-none mt-0.5">
                Pay
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
