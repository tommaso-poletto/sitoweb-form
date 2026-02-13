import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead">
                Last updated: January 2026
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using FWDRI, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                2. Medical Disclaimer
              </h2>
              <p className="font-semibold text-foreground">
                FWDRI is designed to help you discover and organize food options that align 
                with your dietary preferences and restrictions. It is not intended to replace 
                professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always consult with qualified healthcare providers regarding any medical 
                conditions or dietary needs. FWDRI never promises safety — it supports 
                confidence, clarity, and better-informed choices.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                3. Use of Service
              </h2>
              <p>
                You agree to use FWDRI only for lawful purposes and in accordance with 
                these Terms. You are responsible for ensuring that your use of the service 
                complies with all applicable laws and regulations.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of FWDRI are owned by us and 
                protected by international copyright, trademark, and other intellectual 
                property laws.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                FWDRI provides information to assist with food choices but cannot guarantee 
                the accuracy of all product information or the suitability of any product 
                for your specific dietary needs. Always verify information with manufacturers 
                and healthcare providers.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                6. Contact
              </h2>
              <p>
                For questions about these Terms, please contact us at legal@fwdri.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
