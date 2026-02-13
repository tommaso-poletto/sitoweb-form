import { motion } from "framer-motion";
import { Scan, Check, AlertTriangle, Utensils, MapPin, ChefHat, Search, Home, Heart, User, Star, Clock, Flame, Leaf, ArrowRight, History, Zap, Camera, Image as ImageIcon, AlertCircle, Stethoscope, Fish, ChevronRight, Sprout } from "lucide-react";

interface PhoneMockupProps {
  variant?: "home" | "scan" | "results" | "restaurant" | "recipes";
  className?: string;
}

export const PhoneMockup = ({ variant = "home", className = "" }: PhoneMockupProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Phone Frame */}
      <div className="relative bg-[#1a1a1a] rounded-[48px] p-3"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)"
        }}
      >
        {/* Side Buttons */}
        <div className="absolute -left-0.5 top-28 w-1 h-8 bg-[#2a2a2a] rounded-l-lg" />
        <div className="absolute -left-0.5 top-44 w-1 h-16 bg-[#2a2a2a] rounded-l-lg" />
        <div className="absolute -right-0.5 top-36 w-1 h-12 bg-[#2a2a2a] rounded-r-lg" />

        {/* Screen Container */}
        <div className="w-[260px] h-[540px] bg-background rounded-[40px] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-full z-20 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3a3a3a]" />
            <div className="w-3 h-3 rounded-full bg-[#2a2a2a] ring-1 ring-[#3a3a3a]" />
          </div>

          {/* Screen Content */}
          <div className="h-full relative overflow-hidden">
            {variant === "home" && <HomeScreenV13 />}
            {variant === "scan" && <ScanScreenV13 />}
            {variant === "results" && <ProfileSetupScreenV13 />}
            {variant === "restaurant" && <RestaurantScreen />}
            {variant === "recipes" && <RecipesScreen />}
          </div>

          {/* Bottom Navigation */}
          <BottomNav activeTab={variant} />

          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#1a1a1a]/20 rounded-full z-[60]"></div>
        </div>
      </div>
    </motion.div>
  );
};


const BottomNav = ({ activeTab }: { activeTab: string }) => {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "scan", icon: Scan, label: "Scan" },
    { id: "restaurant", icon: MapPin, label: "Mappa" },
    { id: "recipes", icon: ChefHat, label: "Smart" },
  ];

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[160px] h-10 bg-[#DED8C4]/90 backdrop-blur-md rounded-full flex items-center justify-around px-1.5 shadow-lg border border-white/20 z-[70]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id || (activeTab === "results" && tab.id === "scan");
        
        if (tab.id === "scan") {
          return (
            <button key={tab.id} className={`w-8 h-8 flex items-center justify-center rounded-full ${isActive ? 'bg-[#FF4F28] text-white shadow-lg' : 'text-[#1F5036]'}`}>
              <Icon className="w-4 h-4" strokeWidth={3} />
            </button>
          );
        }

        return (
          <button key={tab.id} className={`w-7 h-7 flex items-center justify-center transition-all ${isActive ? 'text-[#FF4F28] scale-110' : 'text-[#1F5036]'}`}>
            <Icon className="w-4 h-4" strokeWidth={isActive ? 3 : 2} />
          </button>
        );
      })}
    </div>
  );
};

// --- HIGH FIDELITY SCREENS V1.3 ---

const ProfileSetupScreenV13 = () => (
    <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-y-auto no-scrollbar pb-24">
        {/* Progress Bar */}
        <div className="px-6 pt-10 pb-4">
            <div className="flex gap-2 h-1.5 w-full">
                <div className="flex-1 bg-[#FF4F28] rounded-full" />
                <div className="flex-1 bg-[#DED8C4] rounded-full" />
                <div className="flex-1 bg-[#DED8C4] rounded-full" />
            </div>
        </div>

        {/* Header */}
        <div className="px-6 mb-6">
            <h1 className="text-3xl font-black leading-tight mb-2">Cosa vuoi<br />evitare?</h1>
            <p className="text-sm font-bold opacity-40">Scegli le tue preferenze alimentari</p>
        </div>

        {/* Search Bar */}
        <div className="px-6 mb-8">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DED8C4]" />
                <div className="w-full bg-white border border-[#DED8C4] rounded-2xl py-3 pl-11 pr-4 text-[10px] font-semibold text-[#DED8C4]">
                  Cerca ingredienti...
                </div>
            </div>
        </div>

        {/* Tags Grid */}
        <div className="px-6 flex flex-wrap gap-2 mb-8">
            {[
                { icon: "☪️", label: "HALLAL" },
                { icon: "🌱", label: "VEGANO" },
                { icon: "🥬", label: "VEGETARIANO" },
                { icon: "🩺", label: "MEDICINA" },
                { icon: "🌾", label: "GLUTINE" },
                { icon: "🥛", label: "LATTOSIO" },
                { icon: "🧪", label: "ISTAMINA" },
                { icon: "🥜", label: "NOCI" },
                { icon: "🐟", label: "PESCE" },
                { icon: "🥚", label: "UOVA" },
            ].map((tag, i) => (
                <div key={i} className="bg-white border border-[#DED8C4] rounded-2xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <span className="text-base">{tag.icon}</span>
                    <span className="text-[10px] font-black tracking-widest leading-none">{tag.label}</span>
                </div>
            ))}
        </div>

        {/* Continue Button */}
        <div className="px-6 mt-auto pb-4">
            <div className="w-full bg-[#FF4F28] rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-[#FF4F28]/20">
                <span className="text-white font-black uppercase tracking-widest text-[10px]">CONTINUA</span>
                <ChevronRight className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
        </div>
    </div>
);

const HomeScreenV13 = () => (
    <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-y-auto no-scrollbar pb-24">
        {/* Header */}
        <div className="pt-10 pb-4 px-5 flex justify-between items-center">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/loghino.jpg" alt="Logo" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#DED8C4] flex items-center justify-center text-[#1F5036]/60">
                <User className="w-4 h-4" />
            </div>
        </div>

        {/* Greeting */}
        <div className="px-5 mb-6">
            <h1 className="text-2xl font-black tracking-tight text-[#1F5036]">Ciao, Tommaso</h1>
        </div>

        {/* Top Scan Card */}
        <div className="px-5 mb-4">
            <div className="w-full bg-[#FF4F28] rounded-[2rem] p-6 text-white text-center relative overflow-hidden shadow-xl shadow-[#FF4F28]/20 group">
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/30 rounded-tl-sm"></div>
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 rounded-tr-sm"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 rounded-bl-sm"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/30 rounded-br-sm"></div>
                
                <span className="text-[7px] font-black uppercase tracking-[0.2em] opacity-80 mb-1.5 block">RICONOSCIMENTO AI</span>
                <h2 className="text-lg font-black mb-4 leading-tight">Scansiona un nuovo<br />prodotto</h2>
                
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                        <Scan className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>
        </div>

        {/* Bento Grid */}
        <div className="px-5 grid grid-cols-2 gap-3 mb-4">
             {/* Pantry Card */}
             <div className="bg-[#1F5036] rounded-[2rem] p-4 text-white flex flex-col items-center justify-center aspect-square text-center shadow-lg relative overflow-hidden">
                <span className="text-[7px] font-black uppercase tracking-widest opacity-60 mb-2">IL TUO FRIGO</span>
                <span className="text-4xl font-black leading-none mb-1">12</span>
                <span className="text-[8px] font-black opacity-60 uppercase tracking-tight">prodotti in<br />scadenza</span>
            </div>

            {/* Map Card */}
            <div className="bg-[#A4C07F] rounded-[2rem] p-4 text-[#1F5036] flex flex-col items-center justify-center aspect-square text-center shadow-lg relative overflow-hidden">
                <span className="text-[7px] font-black uppercase tracking-widest opacity-60 mb-2">ESPLORA</span>
                <h3 className="text-sm font-black mb-3">Mappa Locali</h3>
                <div className="w-8 h-8 bg-[#1F5036]/10 rounded-full flex items-center justify-center mt-auto">
                    <MapPin className="w-4 h-4 text-[#1F5036]" />
                </div>
            </div>
        </div>

        {/* Novelty Card */}
        <div className="px-5">
            <div className="w-full bg-[#1F5036] rounded-[2rem] p-6 text-left relative overflow-hidden text-white shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400')] opacity-30 mix-blend-overlay"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-1.5 text-white/70 mb-2">
                        <Zap className="w-3 h-3 fill-white/70" />
                        <span className="text-[8px] font-black uppercase tracking-widest">NOVITÀ</span>
                    </div>
                    <h3 className="text-lg font-black mb-2 leading-tight">Come ridurre gli sprechi del 30%</h3>
                    <p className="text-[9px] font-bold text-white/50 leading-tight pr-8">Scopri i trucchi per conservare meglio frutta e verdura...</p>
                </div>
            </div>
        </div>
    </div>
);


const ScanScreenV13 = () => (
    <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-hidden pb-16">
        <div className="pt-8 pb-3 px-5 flex justify-between items-center z-30">
            <h1 className="text-[#1F5036] text-xl font-bold tracking-tight">Scanner</h1>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full aspect-square relative max-w-[200px]">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#1F5036] rounded-tl-lg z-20"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1F5036] rounded-tr-lg z-20"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1F5036] rounded-bl-lg z-20"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1F5036] rounded-br-lg z-20"></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl border border-[#DED8C4]"></div>
            </div>
        </div>

        <div className="px-5 pb-8 flex justify-between items-center">
            <div className="w-10 h-10 bg-[#DED8C4] rounded-full flex items-center justify-center text-[#1F5036]/40">
                <Zap className="w-5 h-5" />
            </div>
            <div className="bg-[#DED8C4] rounded-full flex p-1 gap-1">
                <div className="w-10 h-7 bg-[#1F5036] text-[#FFF9F3] rounded-full flex items-center justify-center shadow-sm">
                    <Camera className="w-4 h-4" />
                </div>
                <div className="w-10 h-7 flex items-center justify-center text-[#1F5036]/40 text-xs font-black">||||</div>
            </div>
            <div className="w-10 h-10 bg-[#DED8C4] rounded-full flex items-center justify-center text-[#1F5036]/40">
                <ImageIcon className="w-5 h-5" />
            </div>
        </div>
    </div>
);

const ResultsScreenV13 = ({ type, name }: { type: "TO AVOID" | "APPROVED", name: string }) => {
    const isAvoid = type === "TO AVOID";
    const bgColor = isAvoid ? "bg-[#FF4F28]" : "bg-[#2D5B42]";
    
    return (
        <div className="w-full h-full flex flex-col relative overflow-y-auto no-scrollbar bg-[#FFF9F3] pb-20">
            <div className={`${bgColor} pt-8 pb-8 px-5 relative overflow-hidden flex flex-col text-left`}>
                <div className="flex justify-between items-start mb-2 z-10">
                    <h2 className="text-[#DED8C4] text-2xl font-black tracking-tight leading-none uppercase">{type}</h2>
                    <History className="w-5 h-5 text-[#DED8C4]/40" />
                </div>
                <div className="flex justify-center py-1 z-10">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-md border border-white/10">
                        {isAvoid ? <AlertCircle className="w-5 h-5 text-white" /> : <Check className="w-5 h-5 text-white" />}
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-[#DED8C4] flex items-center justify-center shrink-0">
                        <ImageIcon className="w-6 h-6 text-[#DED8C4]" />
                    </div>
                    <div>
                        <span className="text-[8px] font-bold text-[#1F5036]/40 uppercase tracking-widest block">Brand Name</span>
                        <h3 className="text-sm font-bold leading-tight">{name}</h3>
                    </div>
                </div>

                <div className="space-y-2">
                    <h4 className="text-[9px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-1 opacity-50">Ingredients</h4>
                    <p className="text-[10px] leading-relaxed opacity-70">Sugar, Palm Oil, Wheat Flour, low-fat cocoa, emulsifiers, natural flavors, sea salt.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-[9px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-1 opacity-50">Nutri-Score</h4>
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg ${isAvoid ? 'bg-red-500' : 'bg-green-500'}`}>
                            {isAvoid ? 'E' : 'A'}
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-wider ${isAvoid ? 'text-red-600' : 'text-green-600'}`}>
                            {isAvoid ? 'Poor Quality' : 'Excellent Quality'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RestaurantScreen = () => (
  <div className="h-full flex flex-col bg-background p-5 pt-4 pb-24">
    {/* Simplified for demo */}
    <div className="flex items-center gap-2 mb-4 bg-background-subtle p-2 rounded-xl">
        <Search className="w-4 h-4 text-foreground-muted" />
        <span className="text-[10px] text-foreground-muted">Cerca ristoranti...</span>
    </div>
    <div className="relative h-24 bg-forest-green/10 rounded-2xl mb-4 overflow-hidden border border-forest-green/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-6 h-6 text-secondary" />
        </div>
    </div>
    <div className="space-y-2">
        <div className="bg-white p-2 rounded-lg border border-border shadow-sm">
            <h4 className="text-[10px] font-bold">Locanda alla Scala</h4>
            <p className="text-[8px] text-foreground-muted">Cucina Italiana</p>
        </div>
    </div>
  </div>
);

const RecipesScreen = () => (
  <div className="h-full flex flex-col bg-background p-5 pt-4 pb-24">
    <h3 className="text-xs font-bold mb-3 uppercase tracking-widest opacity-40">AI Chef</h3>
    <div className="bg-background-subtle p-3 rounded-2xl mb-4 border border-border/50">
        <p className="text-[10px] text-foreground-muted italic leading-relaxed">
            "Vorrei qualcosa di fresco con i pomodori e la mozzarella..."
        </p>
    </div>
    <div className="space-y-2">
        <div className="bg-white p-2 rounded-xl border border-border shadow-sm flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-secondary" />
            </div>
            <div>
                <h4 className="text-[10px] font-bold">Caprese Salad Twist</h4>
                <p className="text-[8px] text-foreground-muted">10 min • Facile</p>
            </div>
        </div>
    </div>
  </div>
);

