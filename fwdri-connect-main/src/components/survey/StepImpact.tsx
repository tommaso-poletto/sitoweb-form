import { motion } from "framer-motion";
import { AlertTriangle, Leaf, Smile } from "lucide-react";

interface StepImpactProps {
  selected: string | null;
  onSelect: (value: string) => void;
}

const impactOptions = [
  {
    id: "medical",
    label: "Necessità Medica",
    description: "Rischio shock anafilattico o gravi conseguenze",
    icon: AlertTriangle,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500",
    iconColor: "text-red-500",
  },
  {
    id: "strict",
    label: "Scelta Rigorosa",
    description: "Non sgarro mai per etica, religione o salute",
    icon: Leaf,
    color: "from-forest-green to-forest-green-light",
    bgColor: "bg-forest-green/10",
    borderColor: "border-forest-green",
    iconColor: "text-forest-green",
  },
  {
    id: "preference",
    label: "Preferenza",
    description: "Cerco di stare attento, ma se capita pazienza",
    icon: Smile,
    color: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500",
    iconColor: "text-amber-500",
  },
];

export const StepImpact = ({ selected, onSelect }: StepImpactProps) => {
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
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
          Impatto Quotidiano
        </h2>
        <p className="text-foreground-muted max-w-md mx-auto">
          Quanto queste restrizioni influenzano la tua vita?
        </p>
      </motion.div>

      {/* Options */}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        {impactOptions.map((option, index) => {
          const isSelected = selected === option.id;
          const Icon = option.icon;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(option.id)}
              className={`
                relative flex items-center gap-4 p-5 rounded-2xl text-left
                transition-all duration-200 border-2
                ${isSelected
                  ? `${option.bgColor} ${option.borderColor}`
                  : "bg-card border-border hover:border-muted-foreground/30"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center shrink-0
                  ${isSelected ? `bg-gradient-to-br ${option.color}` : "bg-muted"}
                `}
              >
                <Icon
                  className={`w-7 h-7 ${isSelected ? "text-white" : option.iconColor}`}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {option.label}
                </h3>
                <p className="text-sm text-foreground-muted">{option.description}</p>
              </div>

              {/* Selected Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-br ${option.color} 
                             flex items-center justify-center`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
