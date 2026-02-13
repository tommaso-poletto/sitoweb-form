import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Confetti component
const Confetti = () => {
  const colors = ["#f59e0b", "#22c55e", "#3b82f6", "#ec4899", "#8b5cf6"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -20,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 500),
            rotate: 0,
            opacity: 1
          }}
          animate={{
            y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
            rotate: Math.random() * 720 - 360,
            opacity: 0
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: "easeOut"
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export const SuccessModal = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background overflow-y-auto"
    >
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="w-full max-w-md text-center py-8 relative z-50"
      >
        {/* Heart Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6 relative inline-block"
        >
          <div className="relative">
            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-destructive/30 rounded-full blur-2xl"
            />

            {/* Icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative w-20 h-20 rounded-full bg-gradient-to-br from-destructive/80 to-destructive 
                          flex items-center justify-center shadow-2xl shadow-destructive/40"
            >
              <Heart className="w-10 h-10 text-white fill-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4"
        >
          Il tuo entusiasmo è il nostro carburante!
        </motion.h2>

        {/* Robin Hood Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-left px-2"
        >
          <p className="text-foreground-muted leading-relaxed mb-3">
            <strong className="text-foreground">Grazie. Davvero.</strong> Vedere che saresti pronto a sostenerci ci da la carica.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-3">
            Ma non vogliamo i tuoi soldi finché l'app non sarà perfetta. <u className="font-medium text-foreground">Tieni i tuoi 3,90€.</u>
          </p>
          <p className="text-foreground leading-relaxed font-medium">
            Sei ufficialmente un Founder Member <span className="text-forest-green font-bold text-persimmon uppercase">GRATIS</span>.
          </p>
        </motion.div>

        {/* Highly Emphasized Email Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative group mb-8"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-forest-green/20 blur-xl rounded-full -z-10 group-hover:bg-forest-green/30 transition-all" />
          
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-forest-green/10 border-2 border-forest-green/20 rounded-full shadow-lg shadow-forest-green/5"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-green flex items-center justify-center shadow-md">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm md:text-base text-forest-green font-bold tracking-tight">
              Quando la beta sarà pronta la riceverai gratuitamente via email
            </span>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/">
            <Button
              className="w-full h-14 text-base font-bold rounded-2xl bg-gradient-to-r from-forest-green to-forest-green-light
                         shadow-lg shadow-forest-green/30 hover:shadow-xl hover:shadow-forest-green/40"
            >
              Accetta il regalo e Vai al Sito
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
