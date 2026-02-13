import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export const CTASection = () => {
  return <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" animate={{
        x: [0, 50, 0],
        y: [0, -30, 0],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 15,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-forest-green-light/20 rounded-full blur-[100px]" animate={{
        x: [0, -30, 0],
        y: [0, 50, 0],
        scale: [1.1, 1, 1.1]
      }} transition={{
        duration: 12,
        repeat: Infinity
      }} />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center">
          {/* Icon */}
          

          {/* Headline */}
          <motion.h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary-foreground mb-8 leading-tight" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
            Ready to simplify your{" "}
            <span className="italic text-secondary">food journey?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p className="text-lg lg:text-xl text-primary-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            Join thousands of others who are taking the stress out of eating 
            with dietary restrictions. Be the first to experience FWDRI.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }}>
            <Link to="/waitlist">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="hero" size="xl" className="bg-secondary text-secondary-foreground hover:bg-persimmon-light shadow-2xl group">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Text */}
          
        </motion.div>
      </div>
    </section>;
};