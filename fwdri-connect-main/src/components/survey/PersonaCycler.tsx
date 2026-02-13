import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wheat, Milk, Leaf, Fish, Egg, Nut } from "lucide-react";

const personas = [
  { label: "Celiaci", icon: Wheat, color: "from-amber-400 to-amber-600", bgColor: "bg-amber-500/10", textColor: "text-amber-600" },
  { label: "Intolleranti al lattosio", icon: Milk, color: "from-blue-400 to-blue-600", bgColor: "bg-blue-500/10", textColor: "text-blue-600" },
  { label: "Vegani", icon: Leaf, color: "from-green-400 to-green-600", bgColor: "bg-green-500/10", textColor: "text-green-600" },
  { label: "Allergici al pesce", icon: Fish, color: "from-cyan-400 to-cyan-600", bgColor: "bg-cyan-500/10", textColor: "text-cyan-600" },
  { label: "Allergici alle uova", icon: Egg, color: "from-yellow-400 to-yellow-500", bgColor: "bg-yellow-500/10", textColor: "text-yellow-600" },
  { label: "Allergici alla frutta secca", icon: Nut, color: "from-orange-400 to-orange-600", bgColor: "bg-orange-500/10", textColor: "text-orange-600" },
];

export const PersonaCycler = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % personas.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentPersona = personas[currentIndex];
  const Icon = currentPersona.icon;

  return (
    <div className="flex items-center justify-center py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center gap-4 px-6 py-3 rounded-2xl ${currentPersona.bgColor} border border-current/10`}
        >
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className={`p-3 rounded-xl bg-gradient-to-br ${currentPersona.color} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <span className={`text-xl font-semibold ${currentPersona.textColor}`}>
            {currentPersona.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
