import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-hero min-h-[70vh] flex items-center">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground-muted mb-12 max-w-xl mx-auto">
              Have questions, feedback, or just want to say hello? 
              We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.a
                href="mailto:partnerships@fwdri.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-warm-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest-green/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-forest-green" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Partnerships
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  For business and restaurant partnerships
                </p>
                <span className="text-forest-green font-medium">
                  partnerships@fwdri.com
                </span>
              </motion.a>

              <motion.a
                href="mailto:fwdri.team@fwdri.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card-warm-hover text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Richieste Generali
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  Per domande, feedback o informazioni
                </p>
                <span className="text-secondary font-medium">
                  fwdri.team@fwdri.com
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
