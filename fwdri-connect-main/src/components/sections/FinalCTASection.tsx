import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle2, MessageSquare, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="section-padding bg-dark-spruce relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white rounded-md px-3 py-1 mb-6 shadow-sm border border-white/10"
            >
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Solo 1 minuto
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Supporta Fwdri e aiutaci a <br className="hidden sm:block" />
              portarla in vita.
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Prenditi 1 minuto per condividere ciò che conta per te. Le tue risposte ci aiuteranno a creare un'app che risolva i tuoi problemi reali.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/survey">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="hero"
                    size="xl"
                    className="bg-secondary text-secondary-foreground hover:bg-persimmon-light shadow-2xl group w-full sm:w-auto"
                  >
                    Compila il modulo
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Form Preview Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Form Card */}
              <div className="bg-background/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50 w-[320px] sm:w-[380px]">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sondaggio Rapido</h3>
                    <p className="text-xs text-muted-foreground">Aiutaci a migliorare</p>
                  </div>
                </div>

                {/* Mock Form Fields */}
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-muted rounded" />
                    <div className="h-10 bg-muted/50 rounded-lg border border-border" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-32 bg-muted rounded" />
                    <div className="flex gap-2">
                      <div className="h-8 px-3 bg-forest-green/10 rounded-full border border-forest-green/30 flex items-center">
                        <span className="text-xs text-forest-green font-medium">Celiac</span>
                      </div>
                      <div className="h-8 px-3 bg-muted/50 rounded-full border border-border flex items-center">
                        <span className="text-xs text-muted-foreground">Vegan</span>
                      </div>
                      <div className="h-8 px-3 bg-muted/50 rounded-full border border-border flex items-center">
                        <span className="text-xs text-muted-foreground">Lactose</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-28 bg-muted rounded" />
                    <div className="h-20 bg-muted/50 rounded-lg border border-border" />
                  </div>
                </div>

                {/* Submit Button Mock */}
                <div className="h-11 bg-secondary rounded-xl flex items-center justify-center">
                  <span className="text-sm font-semibold text-secondary-foreground">Invia</span>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-secondary rounded-full p-2 shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-secondary-foreground" />
                </motion.div>
              </div>

              {/* Floating Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-4 top-1/4 bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-green" />
                  <span className="text-xs font-medium text-foreground">La tua voce conta</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-medium text-foreground">Disegna l'app</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
