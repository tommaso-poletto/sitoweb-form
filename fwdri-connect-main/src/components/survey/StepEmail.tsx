import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface StepEmailProps {
  email: string;
  onEmailChange: (email: string) => void;
}

export const StepEmail = ({ email, onEmailChange }: StepEmailProps) => {
  const isValidEmail = email.includes("@") && email.includes(".");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-green to-forest-green-light mb-6 shadow-lg shadow-forest-green/30">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
          Unisciti a noi
        </h2>
        <p className="text-foreground-muted max-w-md mx-auto">
          Riceverai un invito prioritario appena FWDRI sarà pronta
        </p>
      </motion.div>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md mb-6"
      >
        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="la-tua@email.com"
            className={`w-full h-16 text-lg text-center rounded-2xl border-2 
                       transition-all duration-300 bg-card
                       ${
                         isValidEmail
                           ? "border-forest-green focus:ring-4 focus:ring-forest-green/20"
                           : "border-border focus:border-forest-green focus:ring-4 focus:ring-forest-green/20"
                       }`}
          />
          {/* Glow Effect */}
          {email && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isValidEmail ? 0.4 : 0.2 }}
              className={`absolute inset-0 -z-10 rounded-2xl blur-xl ${
                isValidEmail ? "bg-forest-green" : "bg-muted"
              }`}
            />
          )}
          {/* Valid Indicator */}
          <AnimatePresence>
            {isValidEmail && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <CheckCircle2 className="w-6 h-6 text-forest-green" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 mt-8 text-sm text-foreground-muted"
      >
        <span>🔒</span>
        <span>Non condivideremo mai la tua email con terzi</span>
      </motion.div>
    </motion.div>
  );
};
