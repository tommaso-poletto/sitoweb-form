import { motion } from "framer-motion";
import communityImage from "@/assets/community.jpg";

export const CommunitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Costruito insieme, dalle{" "}
              <span className="text-gradient italic">esperienze reali.</span>
            </h2>

            <div className="space-y-6 text-foreground-muted">
              <p className="text-lg leading-relaxed">
                Fwdri è più di uno strumento. È un progetto plasmato dalle esperienze quotidiane di persone che hanno a cuore il modo in cui il cibo si inserisce nelle loro vite.
              </p>

              <p className="text-base leading-relaxed">
                Dietro ogni funzionalità, ci sono scelte reali, domande reali e bisogni reali. Consigli condivisi. Scoperte condivise. Sfide condivise.
              </p>

              <p className="text-base leading-relaxed">
                Far parte di Fwdri significa contribuire a qualcosa che cresce attraverso l'ascolto, il feedback e la partecipazione. Ogni esperienza aggiunge chiarezza. Ogni contributo aiuta a rendere il cibo un po' più semplice per qualcun altro.
              </p>

              <p className="text-base leading-relaxed">
                È così che Fwdri cresce — non solo come app, ma come una comunità costruita intorno alla comprensione, alla cura e alla semplicità.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative lg:order-first"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={communityImage}
                alt="Persone che cucinano insieme in una cucina di casa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-forest-green/10 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-16 mt-12"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 rounded-3xl blur-xl opacity-50" />
            <blockquote className="relative font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground max-w-2xl mx-auto px-8 py-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
              <span className="absolute -top-4 left-8 text-6xl text-secondary/30 font-serif">"</span>
              Un'esperienza condivisa può fare la differenza.
              <span className="absolute -bottom-8 right-8 text-6xl text-secondary/30 font-serif">"</span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
