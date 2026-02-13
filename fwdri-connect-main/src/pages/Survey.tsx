import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/survey/ProgressBar";
import { StepWelcome } from "@/components/survey/StepWelcome";
import { StepDiet } from "@/components/survey/StepDiet";
import { StepImpact } from "@/components/survey/StepImpact";
import { StepChallenges } from "@/components/survey/StepChallenges";
import { StepSolutions } from "@/components/survey/StepSolutions";
import { StepUnexpected } from "@/components/survey/StepUnexpected";
import { StepEmail } from "@/components/survey/StepEmail";
import { AnalysisScreen } from "@/components/survey/AnalysisScreen";
import { StepFeatures } from "@/components/survey/StepFeatures";
import { StepTransitionDietImpact } from "@/components/survey/StepTransitionDietImpact";
import { StepTransitionImpactChallenges } from "@/components/survey/StepTransitionImpactChallenges";
import { StepTransitionChallengesSolutions } from "@/components/survey/StepTransitionChallengesSolutions";
import { StepTransitionSolutionsUnexpected } from "@/components/survey/StepTransitionSolutionsUnexpected";
import { SuccessModal } from "@/components/survey/SuccessModal";
import { Link } from "react-router-dom";
import { 
  createSubmission, 
  saveAnswerSingle, 
  saveAnswerMulti, 
  saveAnswerRanked, 
  saveCustomText, 
  linkUserToSubmission, 
  logEvent,
  generateSessionToken 
} from "@/lib/api";
import fwdriLogo from "@/assets/fwdri-logo.png";

type Step = "welcome" | "diet" | "transition-diet-impact" | "impact" | "transition-impact-challenges" | "challenges" | "transition-challenges-solutions" | "solutions" | "transition-solutions-unexpected" | "unexpected" | "email" | "analysis" | "features" | "success";

const Survey = () => {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");

  // Form Data
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [customDiets, setCustomDiets] = useState<string[]>([]);
  const [impactLevel, setImpactLevel] = useState<string | null>(null);
  const [challengesRanking, setChallengesRanking] = useState<string[]>([]);
  const [solutionChoice, setSolutionChoice] = useState<string | null>(null);
  const [unexpectedChoice, setUnexpectedChoice] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const getProgressStep = () => {
    switch (currentStep) {
      case "diet": return 0;
      case "transition-diet-impact": return 0.5;
      case "impact": return 1;
      case "transition-impact-challenges": return 1.5;
      case "challenges": return 2;
      case "transition-challenges-solutions": return 2.5;
      case "solutions": return 3;
      case "transition-solutions-unexpected": return 3.5;
      case "unexpected": return 4;
      case "email": return 5;
      case "analysis": return 5;
      case "features": return 5;
      case "success": return 5;
      default: return 0;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case "welcome": return true;
      case "diet": return selectedDiets.length > 0 || customDiets.length > 0;
      case "impact": return impactLevel !== null;
      case "transition-impact-challenges": return true;
      case "challenges": return challengesRanking.length > 0;
      case "transition-challenges-solutions": return true;
      case "solutions": return solutionChoice !== null;
      case "transition-solutions-unexpected": return true;
      case "unexpected": return unexpectedChoice !== null;
      case "transition-diet-impact": return true;
      case "email": return email.includes("@") && email.includes(".");
      default: return false;
    }
  };

  const getButtonText = () => {
    switch (currentStep) {
      case "welcome": return "Verifica la tua idoneità";
      case "email": return "Analizza le risposte";
      default: return "Continua";
    }
  };

  const handleDietSelect = (id: string) => {
    if (id === "none") {
      // Toggle "none" option
      if (selectedDiets.includes("none")) {
        setSelectedDiets([]);
      } else {
        setSelectedDiets(["none"]);
        setCustomDiets([]);
      }
    } else {
      setSelectedDiets((prev) =>
        prev.includes(id) ? prev.filter((d) => d !== id) : [...prev.filter(d => d !== "none"), id]
      );
    }
  };

  const handleAddCustomDiet = (diet: string) => {
    if (!customDiets.includes(diet)) {
      setCustomDiets((prev) => [...prev, diet]);
    }
  };

  const handleRemoveCustomDiet = (diet: string) => {
    setCustomDiets((prev) => prev.filter((d) => d !== diet));
  };

  const handleChallengeToggle = (id: string) => {
    if (id === "none") {
      // "Nessuna Difficoltà" is exclusive - toggle it and clear others
      if (challengesRanking.includes("none")) {
        setChallengesRanking([]);
      } else {
        setChallengesRanking(["none"]);
      }
    } else {
      // Regular options - remove "none" if present, then toggle
      setChallengesRanking((prev) => {
        const withoutNone = prev.filter((c) => c !== "none");
        if (withoutNone.includes(id)) {
          return withoutNone.filter((c) => c !== id);
        } else {
          return [...withoutNone, id];
        }
      });
    }
  };

  // DB Integration State
  const [submissionId, setSubmissionId] = useState<number | null>(null);
  const [sessionToken] = useState(() => generateSessionToken());

  // Initialize Submission
  useEffect(() => {
    const initSubmission = async () => {
      const sub = await createSubmission(sessionToken);
      if (sub) {
        setSubmissionId(sub.id);
        logEvent('CLICK_DISCOVER_SOLUTION', sub.id, sessionToken, { source: 'landing' }); 
        // Note: 'CLICK_DISCOVER_SOLUTION' might be better logged at start or specific button.
        // For now, logging start of survey as an event or just relying on submission creation.
      }
    };
    initSubmission();
  }, [sessionToken]);

  const handleNext = async () => {
    if (!isStepValid()) return;

    // Save answers based on current step
    if (submissionId) {
        try {
            switch (currentStep) {
                case "diet":
                    // Multi-select for diet
                    // Map local IDs to DB codes if needed. 
                    // Assuming local IDs like 'glutine', 'lattosio' match DB codes (uppercase/lowercase handling needed?)
                    // The DB codes are uppercase (GLUTINE, LATTOSIO). Local might be lowercase.
                    // Let's normalize.
                    const dietCodes = selectedDiets.map(d => d.toUpperCase());
                    // Handle 'none' -> 'NESSUNA_RESTRIZIONE'?
                    // If local is 'none', map to 'NESSUNA_RESTRIZIONE'
                    const mappedDietCodes = dietCodes.map(c => c === 'NONE' ? 'NESSUNA_RESTRIZIONE' : c);
                    if (customDiets.length > 0) {
                        // If we have custom diets, we add the 'CUSTOM' code
                        const finalDietCodes = [...mappedDietCodes];
                        if (!finalDietCodes.includes('CUSTOM')) finalDietCodes.push('CUSTOM');
                        await saveAnswerMulti(submissionId, 'IDENTITA_ALIMENTARE', finalDietCodes);
                        await saveCustomText(submissionId, 'IDENTITA_ALIMENTARE', customDiets.join(', '));
                    } else {
                        await saveAnswerMulti(submissionId, 'IDENTITA_ALIMENTARE', mappedDietCodes);
                    }
                    break;
                case "impact":
                    let impactCode = '';
                    if (impactLevel === 'medical') impactCode = 'NECESSITA_MEDICA';
                    else if (impactLevel === 'strict') impactCode = 'SCELTA_RIGOROSA';
                    else if (impactLevel === 'preference') impactCode = 'PREFERENZA';
                    
                    if (impactCode) {
                        await saveAnswerSingle(submissionId, 'IMPATTO_QUOTIDIANO', impactCode);
                    }
                    break;
                case "challenges":
                    const mappedChallengeCodes = challengesRanking.map(c => {
                        if (c === 'supermarket') return 'SUPERMERCATO';
                        if (c === 'restaurant') return 'RISTORANTE';
                        if (c === 'home') return 'CASA_CUCINA';
                        if (c === 'none') return 'NESSUNA_DIFFICOLTA';
                        return c.toUpperCase(); // Fallback for any other values
                    });
                    await saveAnswerRanked(submissionId, 'SFIDE_MAGGIORI', mappedChallengeCodes);
                    break;
                case "solutions":
                    let solutionCode = '';
                    if (solutionChoice === 'paying') solutionCode = 'PAGO_REGOLARMENTE';
                    else if (solutionChoice === 'paid_past') solutionCode = 'HO_PAGATO_PASSATO';
                    else if (solutionChoice === 'free') solutionCode = 'METODI_GRATUITI';
                    
                    if (solutionCode) {
                        await saveAnswerSingle(submissionId, 'INVESTIMENTO_SOLUZIONI', solutionCode);
                    }
                    break;
                case "unexpected":
                    let unexpectedCode = '';
                    if (unexpectedChoice === 'investigate') unexpectedCode = 'INVESTIGO_FONDO';
                    else if (unexpectedChoice === 'avoid') unexpectedCode = 'EVITO_PROBLEMA';
                    else if (unexpectedChoice === 'risk') unexpectedCode = 'RISCHIO';
                    
                    if (unexpectedCode) {
                        await saveAnswerSingle(submissionId, 'GESTIONE_IMPREVISTI', unexpectedCode);
                    }
                    break;

                case "email":
                    // Link user
                    await linkUserToSubmission(submissionId, email);
                    await logEvent('SUBMIT_EMAIL', submissionId, sessionToken, { email });
                    break;
            }
        } catch (e) {
            console.error("Error saving step data", e);
        }
    }

    switch (currentStep) {
      case "welcome":
        setCurrentStep("diet");
        break;
      case "diet":
        setCurrentStep("transition-diet-impact");
        break;
      case "transition-diet-impact":
        setCurrentStep("impact");
        break;
      case "impact":
        setCurrentStep("transition-impact-challenges");
        break;
      case "transition-impact-challenges":
        setCurrentStep("challenges");
        break;
      case "challenges":
        setCurrentStep("transition-challenges-solutions");
        break;
      case "transition-challenges-solutions":
        setCurrentStep("solutions");
        break;
      case "solutions":
        setCurrentStep("transition-solutions-unexpected");
        break;
      case "transition-solutions-unexpected":
        setCurrentStep("unexpected");
        break;
      case "unexpected":
        setCurrentStep("email");
        break;
      case "email":
        setCurrentStep("analysis");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "diet":
        setCurrentStep("welcome");
        break;
      case "impact":
        setCurrentStep("diet"); // Skip transition on back
        break;
      case "challenges":
        setCurrentStep("impact"); // Skip transition on back
        break;
      case "solutions":
        setCurrentStep("challenges"); // Skip transition on back
        break;
      case "unexpected":
        setCurrentStep("solutions"); // Skip transition on back
        break;
      case "email":
        setCurrentStep("unexpected");
        break;
      default:
        break;
    }
  };

  const handleAnalysisComplete = () => {
    setCurrentStep("features");
  };

  const handleFeaturesComplete = async () => {
    if (submissionId) {
      await logEvent('CLICK_GET_BETA', submissionId, sessionToken);
    }
    setCurrentStep("success");
  };

  const showNavigation = !["welcome", "transition-diet-impact", "transition-impact-challenges", "transition-challenges-solutions", "transition-solutions-unexpected", "analysis", "features", "success"].includes(currentStep);
  const showWelcomeButton = currentStep === "welcome";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      {(showNavigation || showWelcomeButton) && currentStep !== "welcome" && (
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50"
        >
          <div className="container mx-auto px-4 py-4">
            {/* Top Row */}
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center gap-2">
                <img src={fwdriLogo} alt="Fwdri" className="h-8" />
              </Link>
              <Link
                to="/"
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground-muted hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Link>
            </div>

            {/* Progress Bar */}
            <ProgressBar currentStep={getProgressStep()} totalSteps={6} />
          </div>
        </motion.header>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 pb-32">
        <AnimatePresence mode="wait">
          {currentStep === "welcome" && <StepWelcome key="welcome" />}
          {currentStep === "diet" && (
            <StepDiet
              key="diet"
              selected={selectedDiets}
              customDiets={customDiets}
              onSelect={handleDietSelect}
              onAddCustom={handleAddCustomDiet}
              onRemoveCustom={handleRemoveCustomDiet}
            />
          )}
          {currentStep === "transition-diet-impact" && (
            <StepTransitionDietImpact key="transition-diet-impact" onContinue={handleNext} />
          )}
          {currentStep === "impact" && (
            <StepImpact
              key="impact"
              selected={impactLevel}
              onSelect={setImpactLevel}
            />
          )}
          {currentStep === "transition-impact-challenges" && (
            <StepTransitionImpactChallenges key="transition-impact-challenges" onContinue={handleNext} />
          )}
          {currentStep === "challenges" && (
            <StepChallenges
              key="challenges"
              ranking={challengesRanking}
              onToggle={handleChallengeToggle}
            />
          )}
          {currentStep === "transition-challenges-solutions" && (
            <StepTransitionChallengesSolutions key="transition-challenges-solutions" onContinue={handleNext} />
          )}
          {currentStep === "solutions" && (
            <StepSolutions
              key="solutions"
              selected={solutionChoice}
              onSelect={setSolutionChoice}
            />
          )}
          {currentStep === "transition-solutions-unexpected" && (
            <StepTransitionSolutionsUnexpected key="transition-solutions-unexpected" onContinue={handleNext} />
          )}
          {currentStep === "unexpected" && (
            <StepUnexpected
              key="unexpected"
              selected={unexpectedChoice}
              onSelect={setUnexpectedChoice}
            />
          )}
          {currentStep === "email" && (
            <StepEmail
              key="email"
              email={email}
              onEmailChange={setEmail}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentStep === "analysis" && (
            <AnalysisScreen key="analysis" onComplete={handleAnalysisComplete} />
          )}
          {currentStep === "features" && (
            <StepFeatures key="features" onContinue={handleFeaturesComplete} />
          )}
          {currentStep === "success" && <SuccessModal key="success" />}
        </AnimatePresence>
      </main>

      {/* Sticky Footer - Welcome */}
      {showWelcomeButton && (
        <motion.footer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-t border-border/50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-md mx-auto">
              <Button
                onClick={handleNext}
                className="w-full h-14 rounded-xl font-semibold text-base shadow-lg 
                           bg-gradient-to-r from-forest-green to-forest-green-light 
                           hover:shadow-xl hover:shadow-forest-green/25 hover:scale-[1.02] transition-all"
              >
                {getButtonText()}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.footer>
      )}

      {/* Sticky Footer - Other Steps */}
      {showNavigation && (
        <motion.footer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-t border-border/50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-3 max-w-md mx-auto">
              <Button
                variant="outline"
                onClick={handleBack}
                className="h-14 px-6 rounded-xl border-2 font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Indietro
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex-1 h-14 rounded-xl font-semibold text-base shadow-lg transition-all
                  ${isStepValid()
                    ? "bg-gradient-to-r from-forest-green to-forest-green-light hover:shadow-xl hover:shadow-forest-green/25 hover:scale-[1.02]"
                    : "bg-muted text-muted-foreground"
                  }`}
              >
                {getButtonText()}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.footer>
      )}
    </div>
  );
};

export default Survey;
