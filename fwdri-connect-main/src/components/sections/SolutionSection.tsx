import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ShoppingBag, MapPin, ChefHat } from "lucide-react";

const solutionItems = [
  { icon: ShoppingBag, label: "Products" },
  { icon: MapPin, label: "Restaurants" },
  { icon: ChefHat, label: "Recipes" },
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-background-subtle overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Fwdri brings{" "}
              <span className="text-gradient italic">everything together.</span>
            </h2>

            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Fwdri helps you organize your food life in one place.
            </p>

            <p className="text-base text-foreground-muted mb-8 leading-relaxed">
              Instead of jumping between labels, lists and searches, you get a clear, simple way to manage food choices that match the way you eat.
            </p>

            <motion.ul 
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                "Products you can trust.",
                "Restaurants that work for your diet.",
                "Recipes that match the way you eat.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-forest-green flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p 
              className="text-base text-foreground-subtle mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Instead of jumping between labels, searches and notes, you get a clear, simple way to manage food choices.
            </motion.p>

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-forest-green/5 border border-forest-green/10 rounded-2xl p-6"
            >
              <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                Less searching.<br />
                Less checking.<br />
                <span className="text-forest-green">Less stress, every day.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Hub Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-forest-green/10 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            {/* Phone at Center */}
            <div className="relative z-10">
              <PhoneMockup variant="results" />
              
              {/* Orbiting Items */}
              {solutionItems.map((item, index) => {
                const Icon = item.icon;
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={item.label}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ x, y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white rounded-2xl p-4 shadow-lg border border-border-light flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground text-sm pr-2">{item.label}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-16 mt-16"
        >
          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground-muted max-w-3xl mx-auto">
            "Food decisions are one of the most repeated choices we make every day."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
