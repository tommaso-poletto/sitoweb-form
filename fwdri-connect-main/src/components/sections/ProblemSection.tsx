import { motion } from "framer-motion";
import { Search, Store, ShoppingCart, CalendarCheck } from "lucide-react";
import problemSupermarket from "@/assets/problem-supermarket-new.png";
import problemRestaurant from "@/assets/problem-restaurant-new.png";
import problemCart from "@/assets/problem-cart-new.png";
const painPoints = [{
  icon: Search,
  text: "Controllare le etichette ogni volta.",
  color: "bg-secondary/10 text-secondary"
}, {
  icon: ShoppingCart,
  text: "Cercare prodotti che funzionano davvero per te.",
  color: "bg-primary/10 text-primary"
}, {
  icon: Store,
  text: "Cercare ristoranti di cui ti puoi fidare.",
  color: "bg-forest-green/10 text-forest-green"
}, {
  icon: CalendarCheck,
  text: "Trasforma i tuoi ingredienti in piatti su misura per te grazie all AI.",
  color: "bg-secondary/10 text-secondary"
}];
const problems = [{
  image: problemSupermarket,
  alt: "Persona che controlla le etichette dei prodotti"
}, {
  image: problemRestaurant,
  alt: "Persona che guarda il menu del ristorante"
}, {
  image: problemCart,
  alt: "Carrello della spesa con prodotti limitati"
}];
export const ProblemSection = () => {
  return <section id="problem-section" className="relative overflow-hidden">
      {/* Dark Header Section */}
      <div className="relative bg-foreground py-20 lg:py-28 overflow-hidden">
        {/* Decorative background elements for dark section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container-narrow relative z-10">
          {/* Section Header - Large and Prominent */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Section Number + Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/50" />
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="text-2xl font-display font-bold text-secondary">01</span>
                <div className="w-px h-6 bg-white/30" />
                <span className="text-lg font-semibold text-white uppercase tracking-wider">Il Problema</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/50" />
            </motion.div>
            
            {/* Main Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Mangiare secondo la tua dieta
              <br />
              <span className="text-secondary italic font-normal">non dovrebbe essere così complicato.</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Se segui una dieta specifica, sai quanto impegno possono richiedere le scelte alimentari.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="section-padding bg-background relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] translate-y-1/2" />
        
        <div className="container-narrow relative z-10">


        {/* Stress Statement */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.5
      }}>
          <div className="relative inline-block max-w-xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-lg" />
            <div className="relative flex items-center gap-4 px-6 py-5 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
              <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10">
                <CalendarCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-base sm:text-lg text-foreground leading-relaxed text-left">
                Non si tratta solo di cibo — è il tempo, lo stress e il costante carico mentale che ne derivano.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Images Grid */}
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
      }} className="grid grid-cols-3 gap-4 lg:gap-6 mb-16">
          {problems.map((problem, index) => <motion.div key={index} whileHover={{
          y: -6,
          scale: 1.03
        }} transition={{
          duration: 0.4,
          ease: "easeOut"
        }} className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
              <img src={problem.image} alt={problem.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </motion.div>)}
        </motion.div>

        {/* Quote Card */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.5
      }} className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 rounded-3xl blur-xl opacity-50" />
            <blockquote className="relative font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground max-w-2xl mx-auto px-8 py-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-border/50 shadow-lg">
              <span className="absolute -top-4 left-8 text-6xl text-secondary/30 font-serif">"</span>
              L'ansia per il cibo inizia molto prima di sedersi a tavola.
              <span className="absolute -bottom-8 right-8 text-6xl text-secondary/30 font-serif">"</span>
            </blockquote>
          </div>
        </motion.div>
        </div>
      </div>
    </section>;
};