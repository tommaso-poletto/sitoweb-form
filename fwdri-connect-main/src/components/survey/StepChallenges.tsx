import { motion } from "framer-motion";
import { ShoppingCart, UtensilsCrossed, Home, ThumbsUp, Check } from "lucide-react";

interface StepChallengesProps {
  ranking: string[];
  onToggle: (id: string) => void;
}

const challengeOptions = [
  {
    id: "supermarket",
    label: "Al Supermercato",
    description: "Etichette incomprensibili",
    icon: ShoppingCart,
  },
  {
    id: "restaurant",
    label: "Al Ristorante",
    description: "Ansia e sfiducia nello staff",
    icon: UtensilsCrossed,
  },
  {
    id: "home",
    label: "A Casa / Cucina",
    description: "Gestione dispensa e ricette",
    icon: Home,
  },
];

export const StepChallenges = ({ ranking, onToggle }: StepChallengesProps) => {
  const isNoneSelected = ranking.includes("none");
  
  const getRankNumber = (id: string) => {
    if (isNoneSelected) return null;
    const index = ranking.indexOf(id);
    return index >= 0 ? index + 1 : null;
  };

  const handleOptionClick = (id: string) => {
    onToggle(id);
  };

  const handleNoneClick = () => {
    onToggle("none");
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
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
          Sfide Maggiori
        </h2>
        <p className="text-foreground-muted max-w-md mx-auto">
          Dove incontri le difficoltà più grandi? <span className="text-forest-green font-medium">(clicca per ordinare)</span>
        </p>
      </motion.div>

      {/* Ranking Options */}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        {challengeOptions.map((option, index) => {
          const rankNum = getRankNumber(option.id);
          const isSelected = rankNum !== null;
          const Icon = option.icon;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOptionClick(option.id)}
              disabled={isNoneSelected}
              className={`
                relative flex items-center gap-4 p-5 rounded-2xl text-left
                transition-all duration-200 border-2
                ${isNoneSelected
                  ? "opacity-50 cursor-not-allowed bg-muted border-border"
                  : isSelected
                    ? "bg-forest-green/5 border-forest-green"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }
              `}
            >
              {/* Rank Number */}
              <div
                className={`
                  w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-2xl font-bold
                  ${isSelected
                    ? "bg-gradient-to-br from-forest-green to-forest-green-light text-white"
                    : "bg-muted text-foreground-muted"
                  }
                `}
              >
                {isSelected ? rankNum : <Icon className="w-7 h-7" />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {option.label}
                </h3>
                <p className="text-sm text-foreground-muted">{option.description}</p>
              </div>

              {/* Icon when selected */}
              {isSelected && (
                <div className="text-forest-green">
                  <Icon className="w-6 h-6" />
                </div>
              )}
            </motion.button>
          );
        })}

        {/* Separator */}
        <div className="flex items-center gap-4 my-2">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-foreground-muted">oppure</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* None Option - Exclusive */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNoneClick}
          className={`
            relative flex items-center gap-4 p-5 rounded-2xl text-left
            transition-all duration-200 border-2
            ${isNoneSelected
              ? "bg-forest-green/5 border-forest-green"
              : "bg-card border-border hover:border-muted-foreground/30"
            }
          `}
        >
          {/* Icon */}
          <div
            className={`
              w-14 h-14 rounded-xl flex items-center justify-center shrink-0
              ${isNoneSelected
                ? "bg-gradient-to-br from-forest-green to-forest-green-light text-white"
                : "bg-muted text-foreground-muted"
              }
            `}
          >
            {isNoneSelected ? <Check className="w-7 h-7" /> : <ThumbsUp className="w-7 h-7" />}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-foreground text-lg mb-1">
              Nessuna Difficoltà
            </h3>
            <p className="text-sm text-foreground-muted">Gestisco tutto bene</p>
          </div>

          {/* Checkmark when selected */}
          {isNoneSelected && (
            <div className="text-forest-green">
              <ThumbsUp className="w-6 h-6" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Helper */}
      {!isNoneSelected && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-foreground-muted mt-6 text-center"
        >
          💡 Clicca sulle opzioni nell'ordine di difficoltà (1 = più difficile)
        </motion.p>
      )}
    </motion.div>
  );
};
