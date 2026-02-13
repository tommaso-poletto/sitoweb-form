import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CTASection } from "@/components/sections/CTASection";
const HowItWorks = () => {
  return <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-narrow text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Come Funziona FWDRI
            </h1>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto">
              Un'esperienza semplice e intuitiva progettata per rendere le tue 
              decisioni alimentari più facili e sicure.
            </p>
          </motion.div>
        </div>
      </section>

      <HowItWorksSection />
      
    </Layout>;
};
export default HowItWorks;