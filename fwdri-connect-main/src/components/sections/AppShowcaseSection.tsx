import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, MapPin, Sparkles } from "lucide-react";
import {
  IPhoneSilhouette,
  ScannerContent,
  MapViewContent,
} from "@/components/ScannerScreen";

const features = [
  {
    id: "scanner",
    label: "Scanner",
    icon: Scan,
    title: "Scansiona",
    description:
      "Punta la fotocamera e scopri all'istante se un prodotto è adatto alla tua dieta.",
    highlights: ["Analisi ingredienti", "Check istantaneo", "Ricerca prodotti"],
    phoneContent: <ScannerContent />,
  },
  {
    id: "mappa",
    label: "Mappa",
    icon: MapPin,
    title: "Esplora la mappa",
    description:
      "Trova ristoranti e locali vicino a te che rispettano le tue esigenze alimentari.",
    highlights: [
      "Locali sicuri",
      "Filtri personalizzati",
      "Recensioni community",
    ],
    phoneContent: <MapViewContent />,
  },
];

export const AppShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="section-padding bg-gradient-to-b from-background-subtle to-background overflow-hidden relative">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-secondary font-medium text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Anteprima App
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Uno strumento che semplifica <br />
            <span className="text-secondary italic">
              la tua vita alimentare
            </span>
          </h2>

          {/* ── Feature Selector Toggle ── */}
          <div className="flex justify-center mt-8">
            <div className="relative inline-flex items-center bg-white/80 backdrop-blur-md border border-forest-green/15 rounded-full p-1.5 shadow-lg shadow-forest-green/5">
              {/* Animated pill background */}
              <motion.div
                layout
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-forest-green to-forest-green/90 shadow-md"
                style={{ width: `calc(50% - 6px)` }}
                animate={{ x: activeIndex === 0 ? 0 : "calc(100% + 6px)" }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative z-10 flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {feat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-6 mt-16 lg:mt-12"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
              animate={{
                scale: [1.15, 1, 1.15],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: 2,
              }}
            />

            {/* Phone with animated content swap */}
            <div className="relative z-10 w-full flex items-start justify-center lg:justify-center">
              <div className="transform scale-[0.8] sm:scale-[0.85] lg:scale-[0.9] origin-top">
                <IPhoneSilhouette hideUtilityBar={activeIndex === 1}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full"
                    >
                      {activeFeature.phoneContent}
                    </motion.div>
                  </AnimatePresence>
                </IPhoneSilhouette>
              </div>
            </div>
          </motion.div>

          {/* Feature Info – animates on feature change */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <h3 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight capitalize">
                  {activeFeature.title}
                </h3>

                <p className="text-xl text-foreground-muted leading-relaxed">
                  {activeFeature.description}
                </p>

                <div className="space-y-4">
                  {activeFeature.highlights.map((highlight, i) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.4 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="group relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-forest-green/30 to-secondary/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex items-center gap-3 bg-white border border-forest-green/20 rounded-xl px-5 py-3 shadow-sm group-hover:shadow-lg group-hover:border-forest-green/40 transition-all duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: i * 0.12 + 0.2,
                            type: "spring",
                            stiffness: 500,
                          }}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-forest-green to-forest-green/80 flex items-center justify-center shadow-sm"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>

                        <span className="text-sm font-semibold text-foreground group-hover:text-forest-green transition-colors duration-300">
                          {highlight}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
