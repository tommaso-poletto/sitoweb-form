import { motion } from "framer-motion";
import { UserCircle, Scan, Sparkles, ArrowRight, User } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureImageComparison } from "@/components/ui/feature-with-image-comparison";
import { RoadmapCard } from "@/components/ui/roadmap-card";
import comparisonBefore from "@/assets/comparison-before-new.png";
import comparisonAfter from "@/assets/comparison-after-new.png";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Lancio Beta",
    description: "Rilascio iniziale con scansione barcode e configurazione profilo dietetico.",
    status: "done" as const,
  },
  {
    quarter: "Q2 2025",
    title: "Integrazione Ristoranti",
    description: "Cerca ristoranti per esigenze dietetiche con analisi menu in tempo reale.",
    status: "in-progress" as const,
  },
  {
    quarter: "Q3 2025",
    title: "Assistente Ricette IA",
    description: "Suggerimenti di ricette personalizzate basate su preferenze e restrizioni.",
    status: "upcoming" as const,
  },
  {
    quarter: "Q4 2025",
    title: "Funzionalità Community",
    description: "Condividi recensioni, consigli e scoperte con la community FWDRI.",
    status: "upcoming" as const,
  },
];

const steps = [
  {
    number: "01",
    icon: UserCircle,
    title: "Imposta il Profilo",
    description: "Parlaci delle tue restrizioni, allergie e preferenze. Il tuo profilo è privato e sicuro.",
    mockup: "results" as const,
  },
  {
    number: "02",
    icon: Scan,
    title: "Scansiona o Cerca",
    description: "Scansiona barcode istantaneamente o cerca ristoranti e ricette adatti a te.",
    mockup: "scan" as const,
  },
  {
    number: "03",
    icon: User,
    title: "Vivi con Fiducia",
    description: "Scopri prodotti, locali e ricette su misura per te nella tua dashboard personale.",
    mockup: "home" as const,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-background overflow-hidden">
      <div className="container-wide">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-secondary font-medium text-xs tracking-widest uppercase mb-2">
            Come Funziona
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            Tre semplici passaggi verso la{" "}
            <span className="text-gradient italic">libertà alimentare</span>
          </h2>
          <p className="text-sm lg:text-base text-foreground-muted max-w-xl mx-auto">
            Una relazione serena con il cibo inizia qui
          </p>
        </motion.div>

        {/* Steps - Horizontal Cards with Mockups */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-5 lg:p-6 hover:border-secondary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Step Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-3xl font-display font-bold text-secondary/20 group-hover:text-secondary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Phone Mockup Preview */}
                <div className="relative h-48 lg:h-56 rounded-xl bg-muted/30 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                  <motion.div
                    className="scale-[0.45] lg:scale-[0.5] origin-center"
                    whileHover={{ scale: 0.52 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <PhoneMockup variant={step.mockup} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Comparison Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <FeatureImageComparison
            badge="La differenza Fwdri"
            title="Da confusione a chiarezza"
            subtitle="Trascina per vedere come Fwdri velocizza le tue scelte quotidiane"
            beforeImage={comparisonBefore}
            afterImage={comparisonAfter}
          />
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <RoadmapCard
            title="La nostra Roadmap"
            description="Ecco cosa stiamo costruendo per te"
            items={roadmapItems}
            blurFromIndex={1}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/waitlist">
            <Button variant="hero" size="xl" className="group">
              Unisciti alla Lista
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
