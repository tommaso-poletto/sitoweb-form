import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground-muted">
              <p className="lead">
                Last updated: January 2026
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, including your email address 
                and dietary preferences when you join our waitlist. We use this information 
                solely to communicate with you about FWDRI and to personalize your experience.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send you updates about FWDRI's launch and development</li>
                <li>Personalize product features based on your dietary needs</li>
                <li>Improve our services based on aggregated, anonymous data</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                3. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your personal 
                information. Your data is encrypted in transit and at rest.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                4. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information 
                at any time. Contact us at privacy@fwdri.com for any requests.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
                5. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at 
                privacy@fwdri.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
