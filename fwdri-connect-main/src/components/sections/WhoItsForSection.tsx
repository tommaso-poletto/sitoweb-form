import { motion } from "framer-motion";
import whoItsForImage from "@/assets/who-its-for.jpg";
import { Heart, Leaf, Church, AlertTriangle, Search, ShoppingCart, Store, Calendar } from "lucide-react";
const dietReasons = [{
  icon: Heart,
  label: "Salute"
}, {
  icon: Leaf,
  label: "Etica"
}, {
  icon: Church,
  label: "Credo"
}, {
  icon: AlertTriangle,
  label: "Allergie"
}];
export const WhoItsForSection = () => {
  return <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-green/5 via-background to-secondary/5" />
      
      {/* Animated Background Orbs */}
      <motion.div className="absolute top-20 left-10 w-96 h-96 bg-forest-green/10 rounded-full blur-3xl" animate={{
      scale: [1, 1.3, 1],
      x: [0, 30, 0],
      y: [0, -20, 0]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-forest-green/5 to-transparent rounded-full" animate={{
      rotate: 360
    }} transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }} />

      <div className="container-wide relative z-10">
        {/* Main Title - Full Width Hero Style */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center mb-16 lg:mb-24">

        {/* Coming Soon Section */}
        <div className="mb-16">
          <span className="inline-block px-6 py-2.5 bg-gray-100 text-gray-600 text-base font-black uppercase tracking-[0.2em] rounded-full mb-10">
            COMING SOON
          </span>
          
          {/* Pain Points Cards - Copied from ProblemSection */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-5 lg:gap-8 max-w-4xl mx-auto" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Search, text: "Controllare le etichette ogni volta.", color: "bg-secondary/10 text-secondary" },
              { icon: ShoppingCart, text: "Cercare prodotti che funzionano davvero per te.", color: "bg-primary/10 text-primary" },
              { icon: Store, text: "Cercare ristoranti di cui ti puoi fidare.", color: "bg-forest-green/10 text-forest-green" },
              { icon: Calendar, text: "Trasforma i tuoi ingredienti in piatti su misura per te grazie all AI.", color: "bg-secondary/10 text-secondary" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.15 * index,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Card content */}
                <div className="relative p-7 rounded-2xl bg-white/80 backdrop-blur-md border border-border/40 shadow-sm group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  {/* Decorative corner gradient */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number indicator */}
                  <span className="absolute top-4 right-5 text-5xl font-display font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="flex items-start gap-5 relative z-10">
                    {/* Icon with animated ring */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <div className={`relative p-4 rounded-2xl ${item.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <item.icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1 pt-1">
                      <p className="text-foreground text-lg font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] max-w-5xl mx-auto">
            Le persone seguono diete diverse, ma la sfida quotidiana è spesso{" "}
            <span className="relative inline-block">
              <span className="text-gradient italic">la stessa.</span>
              <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-forest-green via-secondary to-forest-green rounded-full" initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeOut"
            }} />
            </span>
          </h2>
        </motion.div>

        {/* Diet Reason Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 lg:mb-20">
          {dietReasons.map((reason, index) => <motion.div key={reason.label} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1 * index,
          duration: 0.5
        }} className="group">
              <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-forest-green/5 to-transparent border border-forest-green/15 hover:border-forest-green/30 hover:from-forest-green/10 transition-all duration-300">
                <reason.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest-green/70 group-hover:text-forest-green transition-colors duration-300" />
                <span className="text-sm sm:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {reason.label}
                </span>
              </div>
            </motion.div>)}
        </div>

        {/* Content Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with Creative Frame */}
          <motion.div initial={{
          opacity: 0,
          x: -60,
          rotate: -3
        }} whileInView={{
          opacity: 1,
          x: 0,
          rotate: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }} className="relative">
            {/* Decorative Frame Behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-forest-green/20 via-secondary/10 to-forest-green/20 rounded-[2rem] blur-xl opacity-60" />
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Border Glow Effect */}
              <motion.div className="absolute -inset-[2px] bg-gradient-to-r from-forest-green via-secondary to-forest-green rounded-3xl opacity-50" animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }} style={{
              backgroundSize: "200% 200%"
            }} />
              
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-background">
                <img src={whoItsForImage} alt="Diverse group sharing different meals" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.6,
                duration: 0.5
              }} className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-foreground/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                    <p className="text-sm font-medium text-foreground-muted">
                      Per chiunque segua una dieta speciale
                    </p>
                    <p className="text-lg font-semibold text-forest-green">
                      Qualunque sia la ragione
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div className="absolute -top-8 -right-8 w-24 h-24" animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full backdrop-blur-sm border border-secondary/20" />
            </motion.div>
            
            <motion.div className="absolute -bottom-6 -left-6 w-16 h-16" animate={{
            y: [0, 8, 0],
            rotate: [0, -5, 0]
          }} transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}>
              <div className="w-full h-full bg-gradient-to-br from-forest-green/30 to-forest-green/10 rounded-2xl backdrop-blur-sm border border-forest-green/20" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div initial={{
          opacity: 0,
          x: 60
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-8">
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
              Fwdri è per chiunque segua una dieta speciale — qualunque sia la ragione dietro ad essa.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              Che sia per salute, scelte personali, ragioni etiche o credenze religiose, la sfida è spesso la stessa: trovare opzioni alimentari che corrispondano al tuo modo di mangiare senza spendere troppo tempo o energia, e con maggiore tranquillità.
            </p>

            {/* Highlight Card - Redesigned */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-forest-green/80 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-forest-green/10 via-forest-green/5 to-transparent border-2 border-forest-green/20 rounded-3xl p-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative">
                  <p className="font-display text-xl sm:text-2xl font-bold text-foreground leading-relaxed">
                    Diete diverse, stesso obiettivo:
                  </p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-secondary leading-relaxed mt-2">
                    rendere le scelte alimentari quotidiane più semplici e meno stressanti.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote - Redesigned as Featured Block */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.8
      }} className="mt-20 lg:mt-32">
          <div className="relative max-w-4xl mx-auto">
            {/* Large Quote Mark */}
            
            
            

            {/* Large Quote Mark - End */}
            
          </div>
        </motion.div>
      </div>
    </section>;
};