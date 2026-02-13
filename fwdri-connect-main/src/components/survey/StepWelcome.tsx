import { motion } from "framer-motion";
import { PersonaCycler } from "./PersonaCycler";
import { Users, Shield, Sparkles } from "lucide-react";

export const StepWelcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-forest-green/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>



      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6 relative z-10"
      >
        Torna ad amare il cibo.
        <br />
        <span className="bg-gradient-to-r from-forest-green via-forest-green-light to-forest-green bg-clip-text text-transparent">
          Senza l'ansia.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-foreground-muted max-w-xl mb-10 leading-relaxed relative z-10"
      >
        Un questionario di <span className="text-foreground font-semibold">1 minuto</span> per aiutarci a costruire l'app perfetta per te.
      </motion.p>

      {/* Persona Cycler */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mb-12"
      >
        <p className="text-sm text-foreground-muted mb-3 font-medium uppercase tracking-wide">Creato per</p>
        <PersonaCycler />
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-muted relative z-10"
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-forest-green/10">
            <Users className="w-4 h-4 text-forest-green" />
          </div>
          <span><strong className="text-foreground">1,234+</strong> già iscritti</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-forest-green/10">
            <Shield className="w-4 h-4 text-forest-green" />
          </div>
          <span>100% privato</span>
        </div>
      </motion.div>

      {/* Floating Sparkle */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-secondary/40" />
      </motion.div>
    </motion.div>
  );
};
