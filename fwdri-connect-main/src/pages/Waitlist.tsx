import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Sparkles, Users, Bell, Gift } from "lucide-react";
const benefits = [{
  icon: Bell,
  title: "Accesso Anticipato",
  description: "Sii tra i primi a provare FWDRI al lancio."
}, {
  icon: Gift,
  title: "Vantaggi Esclusivi",
  description: "Funzionalità speciali e prezzi dedicati ai primi sostenitori."
}, {
  icon: Users,
  title: "Dà forma al Prodotto",
  description: "Il tuo feedback influenzerà direttamente il nostro sviluppo."
}];
const Waitlist = () => {
  return <Layout>
      <section className="section-padding bg-gradient-hero min-h-[80vh] flex items-center">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Form */}
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              

              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Unisciti alla Lista d'Attesa
              </h1>
              <p className="text-lg text-foreground-muted mb-8 max-w-md">
                Sii tra i primi a sperimentare un modo più semplice di gestire il cibo con restrizioni dietetiche.
              </p>

              <div className="card-warm">
                <WaitlistForm />
              </div>
            </motion.div>

            {/* Right - Benefits */}
            <motion.div initial={{
            opacity: 0,
            x: 40
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Perché unirsi subito?
              </h2>

              {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return <motion.div key={benefit.title} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4 + index * 0.1
              }} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>;
            })}


            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Waitlist;