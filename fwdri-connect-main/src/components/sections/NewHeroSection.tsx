import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { 
  PhoneFlowController, 
  ScannerContent, 
  ResultContent, 
  HistoryContent 
} from "@/components/ScannerScreen";
import fwdriLogo from "@/assets/fwdri-logo-hero.png";

const heroSteps = [
  { id: "scan-1", component: <ScannerContent /> },
  { id: "result-ok", component: <ResultContent type="APPROVED" name="Bio Greek Yogurt" grade={90} /> },
  { id: "scan-2", component: <ScannerContent /> },
  { id: "result-bad", component: <ResultContent type="TO AVOID" name="Extra Choco Cereals" grade={25} /> },
  { id: "scan-3", component: <ScannerContent /> },
  { id: "result-warn", component: <ResultContent type="ATTENTION" name="Tomato Sauce" grade={55} /> },
  { id: "history", component: <HistoryContent /> },
];
export const NewHeroSection = () => {
  return <section className="relative overflow-hidden min-h-screen flex items-center bg-background pt-24 pb-16">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[200px]" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.05, 0.08, 0.05]
      }} transition={{
        duration: 12,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.05, 0.08, 0.05]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        delay: 4
      }} />
      </div>


      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Bold Typography */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }} className="text-left">
            {/* Badge */}
            

            {/* Massive Headline */}
            <motion.h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-8" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}>
              Mangia Senza{" "}
              <br className="hidden sm:block" />
              Paura.{" "}
              <span className="text-secondary italic font-normal">Scopri</span>
              <br />
              Con Gioia.
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed mb-4 max-w-xl" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              Prodotti, ristoranti e ricette per la tua dieta — senza stress.
            </motion.p>

            <motion.p className="text-base sm:text-lg text-foreground-subtle leading-relaxed mb-10 max-w-lg" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              L'unica app per gestire la tua alimentazione, risparmiare tempo e vivere con serenità ogni tua scelta a tavola.
            </motion.p>

            {/* CTA */}
            <motion.div className="flex-col gap-4 flex sm:flex-row" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }}>
              <Link to="/waitlist">
                <Button variant="hero" size="lg" className="w-full sm:w-auto group text-base px-8">
                  Unisciti alla Lista d'Attesa
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 border-forest-green/20 text-forest-green hover:bg-forest-green/5">
                  Scopri come Funziona
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div initial={{
          opacity: 0,
          x: 60
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative flex flex-col items-center gap-6 mt-16 lg:mt-12">
          {/* Fwdri Logo - aligned with headline */}
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="w-full flex justify-center">
              
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }} transition={{
            duration: 8,
            repeat: Infinity
          }} />
            <motion.div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.15, 0.25, 0.15]
          }} transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }} />
            
            {/* Phone */}
            <div className="relative z-10 w-full flex items-start justify-center lg:justify-end lg:pr-12">
              <div className="transform scale-[0.8] sm:scale-[0.85] lg:scale-[0.9] origin-top">
                <PhoneFlowController steps={heroSteps} />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1,
      duration: 0.8
    }} onClick={() => {
      document.getElementById('problem-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    }}>
        <span className="text-sm text-foreground-muted font-medium">Scorri per esplorare</span>
        <motion.div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5" animate={{
        y: [0, 5, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }}>
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" animate={{
          y: [0, 8, 0],
          opacity: [1, 0.5, 1]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} />
        </motion.div>
      </motion.div>
    </section>;
};