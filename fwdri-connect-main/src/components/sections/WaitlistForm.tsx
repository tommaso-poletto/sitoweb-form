import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { logEvent, generateSessionToken } from "@/lib/api";

const dietaryOptions = [
  { id: "gluten-free", label: "Senza Glutine" },
  { id: "dairy-free", label: "Senza Lattosio" },
  { id: "vegan", label: "Vegano" },
  { id: "vegetarian", label: "Vegetariano" },
  { id: "nut-allergy", label: "Allergia Frutta a Guscio" },
  { id: "other", label: "Altro" },
];

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const toggleDiet = (id: string) => {
    setSelectedDiets((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email richiesta",
        description: "Per favore inserisci il tuo indirizzo email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Log intent to DB
    const token = generateSessionToken();
    await logEvent('CLICK_GET_BETA', null, token, { email, diets: selectedDiets });

    // Simulate API call - will be connected to Supabase later
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Sei nella lista! 🎉",
      description: "Ti avviseremo quando FWDRI verrà lanciata.",
    });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-10 h-10 text-primary-foreground" />
        </motion.div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          Sei nella lista!
        </h3>
        <p className="text-foreground-muted">
          Ti terremo aggiornato sui progressi del lancio.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Indirizzo Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-xl text-base"
          required
        />
      </div>

      {/* Dietary Restrictions */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Le tue esigenze dietetiche (opzionale)
        </label>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleDiet(option.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedDiets.includes(option.id)
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-foreground-muted hover:bg-muted/80"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Iscrizione...
          </>
        ) : (
          <>
            Unisciti alla Lista d'Attesa
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-foreground-subtle text-center">
        Rispettiamo la tua privacy. Niente spam, mai.
      </p>
    </form>
  );
};
