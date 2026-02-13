import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Heart } from "lucide-react";

const Mission = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero min-h-[60vh] flex items-center">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-forest-green/10 rounded-3xl flex items-center justify-center mx-auto mb-10"
            >
              <Heart className="w-10 h-10 text-forest-green" />
            </motion.div>

            <motion.span 
              className="inline-block text-secondary font-medium text-sm tracking-wide uppercase mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Our Mission
            </motion.span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight">
              Making food a source of{" "}
              <span className="text-gradient italic">ease, not stress.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-foreground-muted text-lg leading-relaxed">
              <p>
                Fwdri was created to help people with special diets manage food more simply and with less stress — whatever the reason behind their choices or needs.
              </p>

              <p>
                Our mission is to lighten the daily effort that food can carry: the planning, the constant checking, the fear of getting it wrong, and the feeling of being different at the table.
              </p>

              <p>
                We believe that no one should feel excluded, dependent or limited because of what they can or cannot eat.
              </p>

              <p>
                Through clarity, organization and community, Fwdri helps people live food with more confidence, autonomy and peace of mind.
              </p>

              {/* Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-forest-green/5 border border-forest-green/10 rounded-2xl p-8 my-12"
              >
                <p className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-relaxed text-center m-0">
                  Because food should adapt to people —<br />
                  <span className="text-forest-green">not force people to adapt their lives around food.</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
};

export default Mission;
