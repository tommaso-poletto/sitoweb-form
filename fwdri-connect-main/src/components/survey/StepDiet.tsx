import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, X, Wheat, Milk, Leaf, FlaskConical, Moon, Fish, Egg, Stethoscope, CircleSlash } from "lucide-react";
import { Input } from "@/components/ui/input";

// Custom Nut icon since lucide doesn't have one
const NutIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C7 2 3 7 3 12s4 10 9 10 9-5 9-10S17 2 12 2z"/>
    <path d="M12 6c-2 0-4 2-4 6s2 6 4 6 4-2 4-6-2-6-4-6z"/>
  </svg>
);

const dietOptions = [
  { id: "glutine", label: "Glutine", icon: Wheat },
  { id: "lattosio", label: "Lattosio", icon: Milk },
  { id: "vegano", label: "Vegano", icon: Leaf },
  { id: "istamina", label: "Istamina", icon: FlaskConical },
  { id: "halal", label: "Halal", icon: Moon },
  { id: "noci", label: "Noci", icon: NutIcon },
  { id: "pesce", label: "Pesce", icon: Fish },
  { id: "uova", label: "Uova", icon: Egg },
  { id: "medica", label: "Medica", icon: Stethoscope },
];

interface StepDietProps {
  selected: string[];
  customDiets: string[];
  onSelect: (id: string) => void;
  onAddCustom: (diet: string) => void;
  onRemoveCustom: (diet: string) => void;
}

export const StepDiet = ({
  selected,
  customDiets,
  onSelect,
  onAddCustom,
  onRemoveCustom,
}: StepDietProps) => {
  const [customInput, setCustomInput] = useState("");
  const hasNoRestriction = selected.includes("none");

  const handleAddCustom = () => {
    if (customInput.trim()) {
      onAddCustom(customInput.trim());
      setCustomInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCustom();
    }
  };

  const handleSelectDiet = (id: string) => {
    if (id === "none") {
      // If selecting "none", clear all other selections
      onSelect(id);
    } else {
      // If selecting a diet and "none" was selected, this will toggle it
      if (hasNoRestriction) {
        onSelect("none"); // Remove "none" first
      }
      onSelect(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-4 py-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
          Identità Alimentare
        </h2>
        <p className="text-foreground-muted max-w-md mx-auto">
          Seleziona tutte le restrizioni o allergie che ti riguardano
        </p>
      </motion.div>

      {/* Diet Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-6">
        {dietOptions.map((option, index) => {
          const isSelected = selected.includes(option.id) && !hasNoRestriction;
          const Icon = option.icon;
          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelectDiet(option.id)}
              disabled={hasNoRestriction && option.id !== "none"}
              className={`
                relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl
                transition-all duration-200 border-2 aspect-square
                ${hasNoRestriction && option.id !== "none" ? "opacity-40 cursor-not-allowed" : ""}
                ${
                  isSelected
                    ? "bg-forest-green/5 border-forest-green"
                    : "bg-card border-border hover:border-forest-green/30"
                }
              `}
            >
              {/* Checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-forest-green flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </motion.div>
              )}
              
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                              ${isSelected ? "bg-forest-green" : "bg-muted"}`}>
                <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-foreground-muted"}`} />
              </div>
              
              {/* Label */}
              <span className={`text-sm font-semibold text-center leading-tight ${
                isSelected ? "text-forest-green" : "text-foreground"
              }`}>
                {option.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Custom Input */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-3 w-full max-w-md mb-4"
      >
        <div className="relative flex-1">
          <Input
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Altre allergie / Custom..."
            disabled={hasNoRestriction}
            className="h-12 pl-4 pr-4 rounded-xl border-2 border-border focus:border-forest-green 
                       bg-card text-base transition-all disabled:opacity-40"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddCustom}
          disabled={!customInput.trim() || hasNoRestriction}
          className="h-12 w-12 rounded-xl bg-gradient-to-br from-forest-green to-forest-green-light 
                     text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-lg 
                     shadow-forest-green/30 flex items-center justify-center"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Custom Diets Tags */}
      {customDiets.length > 0 && !hasNoRestriction && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-wrap justify-center gap-2 w-full max-w-md mb-6"
        >
          {customDiets.map((diet) => (
            <motion.span
              key={diet}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-forest-green to-forest-green-light 
                         text-white rounded-full text-sm font-medium shadow-md"
            >
              {diet}
              <button
                onClick={() => onRemoveCustom(diet)}
                className="p-0.5 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* No Restriction Option */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleSelectDiet("none")}
        className={`
          w-full max-w-md flex items-center gap-4 p-4 rounded-2xl
          transition-all duration-200 border-2 mt-4
          ${
            hasNoRestriction
              ? "bg-forest-green/5 border-forest-green"
              : "bg-card border-border hover:border-forest-green/30"
          }
        `}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                        ${hasNoRestriction ? "bg-forest-green" : "bg-muted"}`}>
          <CircleSlash className={`w-6 h-6 ${hasNoRestriction ? "text-white" : "text-foreground-muted"}`} />
        </div>
        <div className="text-left flex-1">
          <h3 className={`font-bold ${hasNoRestriction ? "text-forest-green" : "text-foreground"}`}>
            Nessuna Restrizione
          </h3>
          <p className="text-sm text-foreground-muted">Voglio solo esplorare l'app</p>
        </div>
        {hasNoRestriction && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center"
          >
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
};
