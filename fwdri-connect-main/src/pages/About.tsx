import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { User, Users, Lightbulb, ArrowRight, Heart, Sparkles, Quote, Star, Leaf, Globe } from "lucide-react";
import fwdriIcon from "@/assets/fwdri-icon.png";
import { useRef } from "react";

// Team member images
import giulioImg from "@/assets/team/giulio.jpg";
import simoneImg from "@/assets/team/simone.jpg";
import tommasoImg from "@/assets/team/tommaso.jpg";
import filippoImg from "@/assets/team/filippo.jpg";
import alessandroImg from "@/assets/team/alessandro.jpg";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  }
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const values = [{
  icon: Heart,
  title: "Empatia",
  description: "Comprendiamo le sfide quotidiane perché le viviamo anche noi"
}, {
  icon: Sparkles,
  title: "Semplicità",
  description: "Tecnologia avanzata, esperienza semplice"
}, {
  icon: Globe,
  title: "Inclusività",
  description: "Per tutti i tipi di dieta, senza giudizio"
}, {
  icon: Leaf,
  title: "Cura",
  description: "Costruire qualcosa di semplice richiede attenzione"
}];
const teamMembers = [{
  name: "Giulio",
  role: "Founder & CEO",
  image: tommasoImg,
  bio: "Visionario con allergia alle proteine del latte dalla nascita"
}, {
  name: "Alessandro",
  role: "Product Manager",
  image: giulioImg,
  bio: "Traduce i bisogni in funzionalità"
}, {
  name: "Tommaso",
  role: "Lead Developer",
  image: alessandroImg,
  bio: "L'architetto del codice dietro Fwdri"
}, {
  name: "Filippo",
  role: "Marketing Lead",
  image: simoneImg,
  bio: "Porta la missione nel mondo"
}, {
  name: "Simone",
  role: "UX Designer",
  image: filippoImg,
  bio: "Trasforma la complessità in semplicità visiva"
}];
const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  return <Layout>
    {/* Hero Section - Immersive */}
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-subtle to-background">
        {/* Floating Orbs */}
        <motion.div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl" animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        <motion.div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-forest-green/10 blur-3xl" animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-persimmon/5 blur-3xl" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} />
      </div>

      <motion.div style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY
      }} className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
        {/* Badge */}
        <motion.span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-secondary/20 text-secondary font-medium text-sm tracking-wide uppercase px-5 py-2.5 rounded-full shadow-sm" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
          <Sparkles className="w-4 h-4" />
          La Nostra Storia
        </motion.span>

        {/* Title */}
        <motion.h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1]" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }}>
          Cibo senza <span className="text-gradient italic">complicazioni</span>
        </motion.h1>

        {/* Description */}
        <motion.p className="text-lg sm:text-xl text-foreground-muted max-w-2xl leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
          Fwdri è un progetto digitale nato per semplificare la vita alimentare di chi segue diete speciali — unendo strumenti pratici, informazioni chiare e una community in crescita per ridurre il <span className="text-foreground font-medium">tempo, lo stress e il carico mentale</span>.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div className="mt-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
          <motion.div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center" animate={{
            y: [0, 5, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
            <motion.div className="w-1.5 h-3 bg-secondary rounded-full mt-2" animate={{
              y: [0, 10, 0],
              opacity: [1, 0.3, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    {/* Mission Statement - Big Quote */}
    <section className="section-padding bg-forest-green relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
            Mangiare deve essere una scelta, <br />
            <span className="text-secondary">non un compromesso.</span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-white/60 text-sm uppercase tracking-wider">La Nostra Filosofia</span>
            <div className="w-12 h-px bg-white/30" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values Grid */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-forest-green/20 text-forest-green font-medium text-sm tracking-wide uppercase px-5 py-2.5 rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4" />
            I Nostri Valori
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Cosa ci guida ogni giorno
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-forest-green/10 transition-all duration-300 border border-border/50 overflow-hidden"
            >
              {/* Gradient bar on top */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-forest-green via-forest-green-light to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Subtle background glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-forest-green/5 to-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-green/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-forest-green/20 group-hover:to-secondary/20 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <value.icon className="w-8 h-8 text-forest-green" />
              </motion.div>

              <h3 className="relative font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="relative text-foreground-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Founder Story - Split Layout */}
    <section className="section-padding bg-background-subtle overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background shapes */}
              <motion.div className="absolute top-10 left-10 w-full h-full bg-forest-green/10 rounded-3xl" animate={{
                rotate: [0, 2, 0]
              }} transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
              <motion.div className="absolute top-5 left-5 w-full h-full bg-secondary/10 rounded-3xl" animate={{
                rotate: [0, -2, 0]
              }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }} />

              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-green to-forest-green-light flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">Giulio</h3>
                    <p className="text-foreground-muted">Fondatore di Fwdri</p>
                  </div>
                </div>

                <div className="space-y-4 text-foreground-muted">
                  <p className="text-lg italic border-l-4 border-secondary pl-4">
                    "Vivo con una severa allergia alle proteine del latte dalla nascita..."
                  </p>
                </div>

                {/* Decorative elements */}
                <motion.div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg" animate={{
                  y: [0, -5, 0]
                }} transition={{
                  duration: 3,
                  repeat: Infinity
                }}>
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Story */}
          <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
            <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-secondary/20 text-secondary font-medium text-sm tracking-wide uppercase px-5 py-2.5 rounded-full mb-6 shadow-sm">
              <User className="w-4 h-4" />
              Dal Fondatore
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Una storia personale. <br />
              <span className="text-gradient">Un bisogno condiviso. Una speranza collettiva.</span>
            </h2>

            <div className="space-y-5 text-foreground-muted text-lg leading-relaxed">
              <p>
                Mi chiamo Giulio e FWDRI nasce dalla mia storia personale.
              </p>

              <p>
                Convivo con una severa allergia alle proteine del latte dalla nascita. Da che io ricordi, ogni pasto ha sempre richiesto attenzione, pianificazione e cautela. Mangiare fuori non è mai stato spontaneo: portava con sé dubbi, domande e incertezza.
              </p>

              <p>
                Ma ciò che mi ha segnato di più non è stata l'allergia in sé, quanto lo <span className="text-foreground font-medium">spazio mentale che il cibo occupava ogni giorno</span>. La maggior parte dello stress legato al cibo, infatti, accade molto prima di sedersi a tavola.
              </p>

              <p>
                FWDRI nasce per questo: per rendere l’alimentazione semplice, sicura e libera dallo stress.
              </p>

              <p>
                Non è un’app solo per chi ha allergie. È per chiunque segua uno stile alimentare specifico — per salute, etica, religione o scelta personale. Perché il cibo deve adattarsi alla vita, senza dominare i nostri pensieri o escludere nessuno.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-gradient-to-r from-forest-green via-forest-green-light to-forest-green">
      <div className="container-wide">
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={staggerContainer}>
          {[{
            number: "10%",
            label: "della popolazione mondiale con allergie alimentari"
          }, {
            number: "200+",
            label: "ore l'anno spese a pianificare pasti sicuri"
          }, {
            number: "70%",
            label: "si sente stressato dalle scelte alimentari"
          }, {
            number: "1",
            label: "app per semplificare tutto"
          }].map((stat, index) => <motion.div key={stat.label} variants={fadeInUp} className="text-center">
            <motion.span className="block font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2" initial={{
              scale: 0
            }} whileInView={{
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 200
            }}>
              {stat.number}
            </motion.span>
            <span className="text-white/70 text-sm sm:text-base">{stat.label}</span>
          </motion.div>)}
        </motion.div>
      </div>
    </section>

    {/* Project Today & Team */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* The Project */}
          <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg h-full">
              <div className="flex items-center gap-4 mb-8">
                <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-green/20 to-forest-green/5 flex items-center justify-center" whileHover={{
                  rotate: 10
                }}>
                  <Lightbulb className="w-8 h-8 text-forest-green" />
                </motion.div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                  Il Progetto Oggi
                </h2>
              </div>

              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                Fwdri è un prodotto in crescita plasmato da bisogni reali, feedback reali e uso reale.
              </p>

              <p className="text-foreground-muted leading-relaxed">
                Cresciamo attraverso il dialogo costante con chi usa la nostra tecnologia. Che sia per necessità medica o per scelta di vita, ogni funzione è disegnata sulle vostre voci, per offrirvi un'esperienza alimentare finalmente sicura, organizzata e priva di stress.
              </p>

            </div>
          </motion.div>

          {/* The Team Intro */}
          <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="relative">
            <div className="bg-gradient-to-br from-forest-green to-forest-green-light rounded-3xl p-8 lg:p-10 h-full text-white">
              <div className="flex items-center gap-4 mb-8">
                <motion.div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center" whileHover={{
                  rotate: -10
                }}>
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-secondary">
                  Il Team dietro Fwdri
                </h2>
              </div>

              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Fwdri è costruita da un team piccolo e dedicato che lavora su design, tecnologia e comunicazione.
              </p>

              <p className="text-white/70 leading-relaxed mb-8">
                Background differenti. Un focus condiviso su chiarezza, usabilità e rispetto.
              </p>

              <motion.p className="pt-6 border-t border-white/20 text-white/60 italic" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3
              }}>
                "Perché costruire qualcosa di semplice richiede cura."
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Team Members Grid */}
        <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              y: -8
            }} className="group w-full max-w-[200px]">
              <div className="relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                {/* Photo */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <motion.img src={member.image} alt={member.name} className="w-full aspect-square object-cover" whileHover={{
                    scale: 1.05
                  }} transition={{
                    duration: 0.3
                  }} />
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Looking Ahead - Visual CTA */}
    <section className="section-padding bg-background-subtle overflow-hidden">
      <div className="container-narrow">
        <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="relative text-center">
          {/* Background decoration */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/10 via-transparent to-transparent rounded-full blur-3xl" animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }} />

          <motion.div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-forest-green to-secondary rounded-3xl shadow-xl mb-8" whileHover={{
            scale: 1.1,
            rotate: 5
          }}>
            <ArrowRight className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Guardando al Futuro
          </h2>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-10">
            Fwdri sta ancora crescendo — plasmata dalle persone che la usano ogni giorno. Se il cibo gioca un ruolo importante nella tua vita, <span className="text-foreground font-medium">fai già parte della conversazione</span>.
          </p>

          <motion.div className="flex flex-wrap justify-center gap-4" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
            <motion.a href="/waitlist" className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-persimmon-dark text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
              Unisciti alla lista d'attesa
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <FinalCTASection />
  </Layout>;
};
export default About;