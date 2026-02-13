
import { motion, AnimatePresence } from "framer-motion";
import { History, Zap, Image as ImageIcon, Camera, Home, Map as MapIcon, Refrigerator, ChevronRight, AlertCircle, CheckCircle, AlertTriangle, Scan, Search, Star, Navigation, Share, Phone, Globe, Calendar, SlidersHorizontal, X, MapPin, Clock, User } from "lucide-react";
import { useState, useEffect } from "react";
import scanningImage from "@/assets/scanning-feature.jpg";

// --- THEME COLORS ---
const COLORS = {
    hunterGreen: "#2d5b42ff",
    darkSpruce: "#1F5036",
    blazingFlame: "#FF4F28",
    bone: "#DED8C4",
    seashell: "#FFF9F3"
};

/**
 * iPhone Silhouette Component - Modern Design
 */
export function IPhoneSilhouette({ children, showScannerInTab = false, hideUtilityBar = false }: { children: React.ReactNode, showScannerInTab?: boolean, hideUtilityBar?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-6 flex-shrink-0 transform origin-top scale-[0.85] sm:scale-100">
            {/* iPhone Frame */}
            <div className="relative w-[320px] h-[650px] bg-black rounded-[3.5rem] p-[12px] shadow-2xl border border-white/5">
                {/* Outer hardware buttons */}
                <div className="absolute top-24 -left-[2px] w-[3px] h-8 bg-black rounded-l-sm border-l border-white/10"></div>
                <div className="absolute top-36 -left-[2px] w-[3px] h-12 bg-black rounded-l-sm border-l border-white/10"></div>
                <div className="absolute top-52 -left-[2px] w-[3px] h-12 bg-black rounded-l-sm border-l border-white/10"></div>
                <div className="absolute top-32 -right-[2px] w-[3px] h-16 bg-black rounded-r-sm border-r border-white/10"></div>

                {/* Inner Screen Container */}
                <div className="w-full h-full bg-[#FFF9F3] rounded-[2.8rem] overflow-hidden relative flex flex-col shadow-inner">
                    {/* Dynamic Island (Floating Pill) */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-7 bg-black rounded-[1.2rem] z-50 flex items-center justify-center gap-1.5 px-3">
                        <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full shadow-[inset_0_0_1px_rgba(255,255,255,0.1)]"></div>
                        <div className="w-2.5 h-2.5 bg-[#0a0a0a] rounded-full border border-white/5 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
                    </div>

                    {/* Content Screen */}
                    <div className="flex-1 w-full overflow-hidden relative flex flex-col">
                        {children}
                    </div>

                    {/* Floating Utility Bar */}
                    {!hideUtilityBar && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[180px] h-12 bg-[#DED8C4]/90 backdrop-blur-md rounded-full flex items-center justify-around px-2 shadow-lg border border-white/20 z-[70]">
                            <button className="w-9 h-9 flex items-center justify-center text-[#1F5036] hover:scale-110 transition-transform">
                                <Home className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center text-[#1F5036] hover:scale-110 transition-transform">
                                <MapIcon className="w-5 h-5" strokeWidth={2.5} />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4F28] text-white shadow-lg">
                                <Scan className="w-5 h-5" strokeWidth={3} />
                            </button>
                        </div>
                    )}

                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-[60]"></div>
                </div>
            </div>
        </div>
    );
}

// --- PROFILE SETUP CONTENT ---
export function ProfileSetupContent() {
    return (
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
                <h1 className="text-3xl font-black leading-tight mb-2 text-left">Cosa vuoi<br />evitare?</h1>
                <p className="text-sm font-bold opacity-40 text-left">Scegli le tue preferenze alimentari</p>
            </div>

            {/* Search Bar */}
            <div className="px-6 mb-8">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DED8C4]" />
                    <div className="w-full bg-white border border-[#DED8C4] rounded-2xl py-3 pl-11 pr-4 text-[10px] font-semibold text-[#DED8C4] text-left">
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
}

// 0. HOME SCREEN CONTENT - Modern Bento Style
export function HomeContent() {

    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-y-auto no-scrollbar pb-24">
            {/* Top Bar */}
            <div className="pt-12 px-6 flex justify-between items-center mb-6">
                <div className="flex items-center gap-1">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FF4F28] rounded-xl shadow-lg shadow-[#FF4F28]/20">
                        <Scan className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                </div>
                <div className="w-10 h-10 bg-[#DED8C4]/30 rounded-full flex items-center justify-center border border-white/40">
                    <User className="w-5 h-5 text-[#1F5036]/60" />
                </div>
            </div>

            {/* Greeting */}
            <div className="px-6 mb-8 text-left">
                <h1 className="text-[#1F5036] text-3xl font-bold tracking-tight">Ciao, Tommaso</h1>
            </div>

            {/* Main AI Scanner Card */}
            <div className="px-6 mb-4">
                <div className="w-full bg-[#FF4F28] rounded-[2.5rem] p-6 text-white text-center relative overflow-hidden shadow-xl shadow-[#FF4F28]/20">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2 block">RICONOSCIMENTO AI</span>
                    <h2 className="text-xl font-bold mb-6 leading-tight">Scansiona un nuovo prodotto</h2>
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                            <Scan className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl-sm"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr-sm"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl-sm"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br-sm"></div>
                </div>
            </div>

            {/* Bento Grid (Pantry & Map) */}
            <div className="px-6 grid grid-cols-2 gap-4 mb-4">
                {/* Pantry Card */}
                <div className="bg-[#1F5036] rounded-[2.2rem] p-5 text-white flex flex-col justify-between aspect-square text-left shadow-lg shadow-[#1F5036]/10 relative group overflow-hidden">
                    <div>
                        <span className="text-[8px] font-black uppercase tracking-widest opacity-60">IL TUO FRIGO</span>
                        <div className="mt-4 flex flex-col items-start">
                            <span className="text-5xl font-black leading-none py-1">12</span>
                            <span className="text-[9px] font-bold opacity-60 mt-1 uppercase tracking-tight">prodotti in<br />scadenza</span>
                        </div>
                    </div>
                </div>

                {/* Map Card */}
                <div className="bg-[#A4C07F] rounded-[2.2rem] p-5 text-[#1F5036] flex flex-col justify-between aspect-square text-left shadow-lg shadow-[#A4C07F]/20 relative overflow-hidden">
                    <div className="flex flex-col h-full">
                        <span className="text-[8px] font-black uppercase tracking-widest opacity-60">ESPLORA</span>
                        <h3 className="text-lg font-bold mt-3 leading-tight">Mappa Locali</h3>
                        <div className="mt-auto flex justify-center pb-2">
                            <div className="w-10 h-10 bg-[#1F5036]/10 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-[#1F5036]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News/Novelty Section */}
            <div className="px-6">
                <div className="w-full bg-[#1F5036]/5 rounded-[2.5rem] p-6 text-left border border-[#1F5036]/10 relative overflow-hidden">
                    <div className="flex items-center gap-1.5 text-[#2D5B42] mb-3">
                        <Zap className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black uppercase tracking-widest">NOVITÀ</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1F5036] mb-2 leading-tight">Come ridurre gli sprechi del 30%</h3>
                    <p className="text-[11px] font-medium text-[#1F5036]/60 leading-relaxed pr-4">Scopri i trucchi per conservare meglio frutta e verdura...</p>

                    {/* Decoration matching visual from image */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                        {/* Abstract pattern placeholder */}
                        <div className="grid grid-cols-4 gap-1 p-2">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-[#1F5036] rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 1. SCANNER SCREEN CONTENT - Modern Design
export function ScannerContent() {
    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-hidden pb-28">
            {/* Top Header */}
            <div className="pt-10 pb-4 px-6 flex justify-between items-center z-30 font-sans">
                <div className="w-full h-12 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-left">
                        <h1 className="text-[#1F5036] font-sans text-3xl font-bold tracking-tight">Scanner</h1>
                    </div>
                </div>
            </div>

            {/* Main Scan Area */}
            <div className="flex-1 flex items-center justify-center p-6 relative">
                <div className="w-full aspect-square relative max-w-[260px]">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#1F5036] rounded-tl-xl z-30"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#1F5036] rounded-tr-xl z-30"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#1F5036] rounded-bl-xl z-30"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#1F5036] rounded-br-xl z-30"></div>

                    {/* Scan Area with Animated Line */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] shadow-[0_0_40px_rgba(31,80,54,0.05)] rounded-2xl overflow-hidden border border-[#DED8C4] z-20">
                        <motion.div
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                            className="absolute left-0 right-0 h-[2px] bg-[#FF4F28] shadow-[0_0_15px_rgba(255,79,40,0.5)] z-10"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="px-6 pb-4 pt-4 flex flex-col gap-10 z-30">
                <div className="flex items-center justify-between">
                    <button className="w-12 h-12 flex items-center justify-center bg-[#DED8C4] rounded-full text-[#1F5036]/40 hover:text-[#1F5036] transition-colors relative group">
                        <Zap className="w-6 h-6" />
                    </button>
                    <div className="bg-[#DED8C4] rounded-full flex p-1 gap-1">
                        <button className="w-14 h-9 flex items-center justify-center bg-[#1F5036] text-[#FFF9F3] rounded-full shadow-sm">
                            <Camera className="w-5 h-5" />
                        </button>
                        <button className="w-14 h-9 flex items-center justify-center text-[#1F5036]/40">
                            <span className="font-bold text-lg">||||</span>
                        </button>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center bg-[#DED8C4] rounded-full text-[#1F5036]/40 hover:text-[#1F5036] transition-colors relative group">
                        <ImageIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// 2. RESULT SCREEN CONTENT - Modern Design
export function ResultContent({ type, name, grade, image }: { type: "TO AVOID" | "APPROVED" | "ATTENTION", name: string, grade: number, image?: string }) {
    const config = {
        "TO AVOID": { color: "bg-[#FF4F28]", icon: <AlertCircle className="w-6 h-6 text-white" /> },
        "APPROVED": { color: "bg-[#2D5B42]", icon: <CheckCircle className="w-6 h-6 text-white" /> },
        "ATTENTION": { color: "bg-[#FBBF24]", icon: <AlertTriangle className="w-6 h-6 text-white" /> }
    };

    const statusLabels = {
        "TO AVOID": "AVOID",
        "APPROVED": "APPROVED",
        "ATTENTION": "ATTENTION"
    };

    return (
        <div className="w-full h-full flex flex-col relative overflow-y-auto font-sans text-[#1F5036] no-scrollbar pb-28">
            {/* Status Header */}
            <div className={`${config[type].color} pt-10 pb-12 px-6 relative overflow-hidden flex flex-col text-left`}>
                <div className="w-full h-11 flex justify-between items-start mb-2 z-10">
                    <div className="flex flex-col">
                        <h2 className="text-[#DED8C4] font-sans text-3xl font-bold tracking-tight leading-none pt-1">{statusLabels[type]}</h2>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex justify-center py-2 z-10"
                >
                    <div className="p-4 bg-white/20 rounded-full backdrop-blur-md shadow-2xl border border-white/10">
                        {config[type].icon}
                    </div>
                </motion.div>

                {/* Background decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="p-6 space-y-8 text-left">
                {/* Product Info */}
                <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-white rounded-xl shadow-sm border border-[#DED8C4] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {image ? (
                            <img src={image} className="w-full h-full object-cover" alt={name} />
                        ) : (
                            <ImageIcon className="w-8 h-8 text-[#DED8C4]" />
                        )}
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-[#1F5036]/40 uppercase tracking-widest block">Brand Name</span>
                        <h3 className="text-lg font-bold leading-tight">{name}</h3>
                        <div className="mt-2 flex gap-2 font-black">
                            <div className="px-3 py-1.5 bg-[#1F5036] text-[#DED8C4] rounded-lg text-[8px] uppercase tracking-widest shadow-sm">+ FRIGO</div>
                        </div>
                    </div>
                </div>

                {/* Ingredients */}
                <div className="space-y-2 text-left">
                    <h4 className="text-[10px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-1 opacity-50">Ingredients</h4>
                    <p className="text-[11px] leading-relaxed opacity-70">Sugar, Palm Oil, Wheat Flour, low-fat cocoa, emulsifiers (lecithins), natural flavors, sea salt.</p>
                </div>

                {/* Nutri-Score */}
                <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-1 opacity-50 text-left">Nutri-Score</h4>
                    <div className="space-y-5 pt-1">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg ${type === 'APPROVED' ? 'bg-green-500 shadow-green-500/20' :
                                type === 'ATTENTION' ? 'bg-yellow-500 shadow-yellow-500/20' :
                                    'bg-red-500 shadow-red-500/20'
                                }`}>
                                {type === 'APPROVED' ? 'A' : type === 'ATTENTION' ? 'C' : 'E'}
                            </div>
                            <div className="flex flex-col text-left">
                                <span className={`text-[11px] font-black uppercase tracking-wider ${type === 'APPROVED' ? 'text-green-600' :
                                    type === 'ATTENTION' ? 'text-yellow-600' :
                                        'text-red-600'
                                    }`}>
                                    {type === 'APPROVED' ? 'Excellent Quality' : type === 'ATTENTION' ? 'Good Quality' : 'Poor Quality'}
                                </span>
                            </div>
                        </div>

                        {/* Nutri-Score Bar */}
                        <div className="flex gap-1 h-3 px-0.5">
                            <div className={`flex-[1.2] bg-green-600 rounded-sm ${type === 'APPROVED' ? 'shadow-[0_0_10px_rgba(22,163,74,0.4)] ring-1 ring-green-600 ring-offset-1' : 'opacity-15'}`}></div>
                            <div className="flex-1 bg-green-400 rounded-sm opacity-15"></div>
                            <div className={`flex-1 bg-yellow-400 rounded-sm ${type === 'ATTENTION' ? 'shadow-[0_0_10px_rgba(250,204,21,0.4)] ring-1 ring-yellow-400 ring-offset-1' : 'opacity-15'}`}></div>
                            <div className="flex-1 bg-orange-400 rounded-sm opacity-15"></div>
                            <div className={`flex-1 bg-red-500 rounded-sm ${type === 'TO AVOID' ? 'shadow-[0_0_10px_rgba(239,68,68,0.4)] ring-1 ring-red-500 ring-offset-1' : 'opacity-15'}`}></div>
                        </div>
                    </div>
                </div>

                {/* Nutritional Values */}
                <div className="space-y-3 text-left">
                    <h4 className="text-[10px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-1 opacity-50">Valori Nutrizionali</h4>
                    <div className="rounded-xl border border-[#DED8C4] overflow-hidden bg-white shadow-sm">
                        {/* Table Header */}
                        <div className="bg-[#1F5036] p-2 text-center">
                            <span className="text-[7px] font-black text-white uppercase tracking-[0.1em] leading-tight block">
                                Valori Nutrizionali medi per 100g di prodotto
                            </span>
                        </div>

                        {/* Table Body */}
                        <div className="text-[9px] font-bold text-[#1F5036]">
                            {[
                                { l: "VALORE ENERGETICO", v: "173,50 kcal / 725,50 kJ" },
                                { l: "PROTEINE", v: "22,00 g" },
                                { l: "CARBOIDRATI", v: "0,00 g", sub: ["di cui zuccheri", "0,00 g"] },
                                {
                                    l: "GRASSI TOTALI", v: "9,50 g", subRows: [
                                        { l: "di cui saturi", v: "2,50 g" },
                                        { l: "di cui monoinsaturi", v: "3,10 g" },
                                        { l: "di cui polinsaturi", v: "3,90 g" }
                                    ]
                                },
                            ].map((row, i) => (
                                <div key={i}>
                                    <div className="flex justify-between border-b border-[#DED8C4]/50 p-2">
                                        <span className="uppercase">{row.l}</span>
                                        <span className="font-black">{row.v}</span>
                                    </div>
                                    {row.sub && (
                                        <div className="flex justify-between border-b border-[#DED8C4]/50 p-2 pl-4 opacity-60">
                                            <span className="italic">{row.sub[0]}</span>
                                            <span className="font-black">{row.sub[1]}</span>
                                        </div>
                                    )}
                                    {row.subRows && row.subRows.map((sr, j) => (
                                        <div key={j} className="flex justify-between border-b border-[#DED8C4]/50 p-2 pl-4 opacity-60">
                                            <span className="italic">{sr.l}</span>
                                            <span className="font-black">{sr.v}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {/* Special Rows */}
                            <div className="flex justify-between p-2 bg-yellow-400/20 border-b border-[#DED8C4]/50">
                                <span className="uppercase">FIBRE</span>
                                <span className="font-black">0,00 g</span>
                            </div>
                            <div className="flex justify-between p-2 bg-red-400/20">
                                <span className="uppercase">SODIO</span>
                                <span className="font-black">0,40 g</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Warning */}
                <div className="p-4 bg-[#FF4F28]/10 border border-[#FF4F28]/20 rounded-xl flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#FF4F28] flex-shrink-0" />
                    <p className="text-[9px] leading-tight text-[#FF4F28] font-bold uppercase tracking-tight">
                        ATTENZIONE: Le informazioni nutrizionali e gli ingredienti sono indicativi. Consulta sempre l'etichetta fisica del prodotto per eventuali allergeni o modifiche.
                    </p>
                </div>

                <button className="w-full py-2.5 rounded-xl border border-[#DED8C4] text-[#1F5036] text-[8px] font-black uppercase tracking-[0.1em] shadow-sm hover:bg-[#DED8C4]/20 transition-colors">
                    Suggerisci una modifica
                </button>
            </div>
        </div>

    );
}

// 3. HISTORY SCREEN CONTENT - Modern Design
export function HistoryContent() {
    const historyItems = [
        { name: "Extra Choco Cereals", brand: "ChocoBrand", status: "TO AVOID", date: "Today, 14:30" },
        { name: "Bio Greek Yogurt", brand: "BioNature", status: "APPROVED", date: "Yesterday, 18:20" },
        { name: "Tomato Sauce", brand: "RossoPuro", status: "ATTENTION", date: "Jan 25, 10:15" },
        { name: "Whole Grain Crackers", brand: "Misura", status: "APPROVED", date: "Jan 24, 15:40" },
    ];

    const getIcon = (status: string) => {
        if (status === "APPROVED") return <div className="w-8 h-8 rounded-full bg-[#2D5B42] flex items-center justify-center text-white shadow-sm"><CheckCircle className="w-5 h-5" /></div>;
        if (status === "TO AVOID") return <div className="w-8 h-8 rounded-full bg-[#FF4F28] flex items-center justify-center text-white shadow-sm"><AlertCircle className="w-5 h-5" /></div>;
        return <div className="w-8 h-8 rounded-full bg-[#FBBF24] flex items-center justify-center text-white shadow-sm"><AlertTriangle className="w-5 h-5" /></div>;
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] no-scrollbar overflow-y-auto pb-28">
            {/* Top Header */}
            <div className="pt-10 pb-4 px-6 flex flex-col items-start z-30 font-sans">
                <h1 className="text-[#1F5036] text-3xl font-bold tracking-tight mb-4">History</h1>

                {/* Search Bar */}
                <div className="w-full relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F5036]/30" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-[#DED8C4]/30 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium placeholder-[#1F5036]/30 focus:ring-1 focus:ring-[#1F5036]/10 outline-none"
                    />
                </div>
            </div>

            {/* History List */}
            <div className="flex-1 px-6 space-y-3 pb-32">
                {historyItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-3 rounded-2xl flex items-center gap-4 border border-[#DED8C4]/40 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-14 h-14 bg-[#FFF9F3] rounded-xl flex items-center justify-center border border-[#DED8C4]/20">
                            <ImageIcon className="w-6 h-6 text-[#DED8C4]" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-[13px] font-bold leading-tight">{item.name}</h3>
                            <p className="text-[9px] font-bold opacity-40 uppercase tracking-widest">{item.brand}</p>
                            <p className="text-[8px] opacity-30 font-medium mt-1">{item.date}</p>
                        </div>
                        {getIcon(item.status)}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// 4. MAP DISCOVER CONTENT - Modern Design
export function MapDiscoverContent() {
    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-y-auto no-scrollbar pb-28">
            <div className="pt-10 pb-4 px-6 flex flex-col items-start">
                {/* Map/List Selector */}
                <div className="bg-[#DED8C4] p-1 rounded-full mb-6 flex gap-1 border border-[#DED8C4]/20 shadow-sm relative z-50">
                    <div className="bg-[#1F5036] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">List</div>
                    <div className="text-[#1F5036]/40 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Map</div>
                </div>

                <h2 className="text-xl font-black uppercase tracking-widest text-[#1F5036]/30 mb-4">Featured</h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="min-w-[120px] aspect-[4/5] bg-[#DED8C4]/40 rounded-2xl flex flex-col p-3 justify-end border border-[#DED8C4]/20">
                            <div className="w-6 h-6 bg-white/50 rounded-lg mb-2 flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-[#1F5036]/30" />
                            </div>
                            <div className="h-2 w-16 bg-[#1F5036]/20 rounded mb-1"></div>
                            <div className="h-2 w-10 bg-[#1F5036]/10 rounded"></div>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-black uppercase tracking-widest text-[#1F5036]/30 mt-8 mb-4">Near You</h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="min-w-[120px] aspect-[3/2] bg-[#DED8C4]/20 rounded-2xl border border-[#DED8C4]/20 flex items-center justify-center">
                            <MapIcon className="w-8 h-8 text-[#1F5036]/10" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Guide Card */}
            <div className="mt-auto p-6">
                <div className="bg-[#1F5036] rounded-[2rem] p-5 text-white flex flex-col relative overflow-hidden shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">Favourites</span>
                    <div className="flex gap-3">
                        <div className="w-16 h-16 bg-[#FFF9F3]/10 rounded-xl flex items-center justify-center">
                            <Star className="text-yellow-400 fill-yellow-400" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-bold">My Safe Places</span>
                            <span className="text-[10px] opacity-40">12 Locations</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 5. MAP VIEW CONTENT - Modern Design
export function MapViewContent({ showCard = false, fullDetail = false }: { showCard?: boolean, fullDetail?: boolean }) {
    const [isCardOpen, setIsCardOpen] = useState(showCard);
    const [isDetailExpanded, setIsDetailExpanded] = useState(fullDetail);

    const handlePinClick = () => {
        setIsCardOpen(true);
        setIsDetailExpanded(false);
    };

    const handleCloseCard = () => {
        setIsCardOpen(false);
        setIsDetailExpanded(false);
    };

    const handleDragEnd = (event: any, info: any) => {
        if (info.offset.y < -100) {
            setIsDetailExpanded(true);
        } else if (info.offset.y > 100) {
            handleCloseCard();
        }
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-white font-sans text-[#1F5036] overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] pointer-events-none">
                {/* Simplified map grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(#1F5036 1px, transparent 1px), linear-gradient(90deg, #1F5036 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            {/* Map UI Overlay */}
            <div className="absolute top-10 left-6 flex flex-col gap-2 z-50">
                <div className="bg-[#DED8C4] p-1 rounded-full flex gap-1 border border-black/5 shadow-xl">
                    <div className="text-[#1F5036]/30 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">List</div>
                    <div className="bg-[#1F5036] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">Map</div>
                </div>
            </div>

            <div className="absolute top-10 right-6 flex flex-col gap-3 z-50">
                <div className="w-10 h-10 bg-[#DED8C4] rounded-full border border-black/5 flex items-center justify-center shadow-lg">
                    <Globe className="w-4 h-4 text-[#1F5036]" />
                </div>
                <div className="w-10 h-10 bg-[#DED8C4] rounded-full border border-black/5 flex items-center justify-center shadow-lg">
                    <Navigation className="w-4 h-4 text-[#1F5036]" />
                </div>
            </div>

            {/* User Location Dot */}
            <div className="absolute top-[55%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-[#007AFF] rounded-full"
                    />
                    <div className="w-4 h-4 bg-[#007AFF] rounded-full border-2 border-white shadow-[0_0_10px_rgba(0,122,255,0.5)] z-10 relative"></div>
                </div>
            </div>

            {/* Restaurant Pins */}
            <div className="absolute inset-0">
                <div className="absolute top-[38%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-30">
                    <button
                        onClick={handlePinClick}
                        className="w-6 h-6 bg-[#FF4F28] rounded-full border border-[#1F5036] shadow-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform active:scale-95"
                    >
                        <span className="text-[10px] font-bold">1</span>
                    </button>
                </div>

                {[
                    { t: "32%", l: "35%", n: "4" },
                    { t: "45%", l: "32%", n: "2" },
                    { t: "28%", l: "72%", n: "3" },
                ].map((p, i) => (
                    <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: p.t, left: p.l }}>
                        <button
                            onClick={handlePinClick}
                            className="w-6 h-6 bg-[#FF4F28] rounded-full flex items-center justify-center shadow-md border border-[#1F5036] text-white cursor-pointer hover:scale-110 transition-transform active:scale-95"
                        >
                            <span className="text-[10px] font-bold">{p.n}</span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom Drawer */}
            {isCardOpen && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute bottom-0 left-0 right-0 bg-[#FFF9F3]/95 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-black/5 p-6 shadow-2xl z-50 overflow-y-auto no-scrollbar scroll-smooth text-[#1F5036]"
                    style={{ height: isDetailExpanded ? '85%' : 'auto' }}
                >
                    {/* Actions */}
                    <div className="absolute top-5 left-6 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center shadow-sm z-10">
                        <Share className="w-4 h-4 text-[#1F5036]" />
                    </div>
                    <button
                        onClick={handleCloseCard}
                        className="absolute top-5 right-6 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center shadow-sm z-10 hover:bg-black/10 active:scale-95 transition-all"
                    >
                        <X className="w-4 h-4 text-[#1F5036]" />
                    </button>

                    {/* Drag handle */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-black/10 rounded-full z-20"></div>

                    {/* Header */}
                    <div className="flex flex-col items-center mb-4 text-center">
                        <h2 className="text-lg font-black tracking-tight leading-tight text-[#1F5036]">Locanda alla Scala</h2>
                        <span className="text-[11px] font-bold opacity-40 mt-0.5">Italian Cuisine</span>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-2 mb-8">
                        <div className="bg-black/5 rounded-2xl p-2 flex flex-col items-center justify-center hover:bg-black/10 transition-colors">
                            <Navigation className="w-5 h-5 mb-1 text-[#2D5B42]" strokeWidth={2.5} />
                            <span className="text-[8px] font-bold text-[#1F5036]">36 min</span>
                        </div>
                        <div className="bg-black/5 rounded-2xl p-2 flex flex-col items-center justify-center hover:bg-black/10 transition-colors">
                            <Phone className="w-5 h-5 mb-1 text-[#2D5B42]" strokeWidth={2.5} />
                            <span className="text-[8px] font-bold">Call</span>
                        </div>
                        <div className="bg-black/5 rounded-2xl p-2 flex flex-col items-center justify-center hover:bg-black/10 transition-colors">
                            <Globe className="w-5 h-5 mb-1 text-[#2D5B42]" strokeWidth={2.5} />
                            <span className="text-[8px] font-bold">Website</span>
                        </div>
                        <div className="bg-black/5 rounded-2xl p-2 flex flex-col items-center justify-center hover:bg-black/10 transition-colors">
                            <Calendar className="w-4 h-5 mb-1 text-[#2D5B42]" strokeWidth={2.5} />
                            <span className="text-[8px] font-bold">Reserve</span>
                        </div>
                    </div>

                    {/* Photos */}
                    <div className="flex gap-3 mb-8">
                        <div className="flex-1 aspect-square bg-white rounded-[2rem] border border-[#DED8C4] flex items-center justify-center shadow-sm">
                            <ImageIcon className="w-8 h-8 text-[#DED8C4]" strokeWidth={1} />
                        </div>
                        <div className="flex-1 aspect-square bg-white rounded-[2rem] border border-[#DED8C4] flex items-center justify-center shadow-sm">
                            <ImageIcon className="w-8 h-8 text-[#DED8C4]" strokeWidth={1} />
                        </div>
                    </div>

                    {isDetailExpanded && (
                        <div className="space-y-10 text-left pb-20">
                            <section>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-50">Safety Report</h4>
                                <p className="text-[9px] font-bold opacity-30 -mt-0.5 mb-4">based on feedback from 150 users</p>
                                <div className="space-y-4">
                                    <span className="text-[11px] font-black text-green-600 uppercase tracking-wider">High Safety</span>
                                    <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-600 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex justify-between items-end border-b border-black/5 pb-2">
                                    <h4 className="text-xs font-black uppercase tracking-widest leading-none opacity-50">Hours</h4>
                                    <span className="text-[8px] text-[#2D5B42] font-bold">Edit</span>
                                </div>
                                <div className="space-y-4 pt-1">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <span className="text-[#FF4F28] font-bold text-sm">Closed</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="flex flex-col items-end text-[11px] font-bold opacity-60 font-mono">
                                                <div className="flex justify-between w-[85px]"><span>12:30</span><span>–</span><span>15:00</span></div>
                                                <div className="flex justify-between w-[85px]"><span>19:00</span><span>–</span><span>23:30</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-black/5 flex items-start">
                                        <div className="flex-1 flex flex-col">
                                            <span className="text-[9px] font-black uppercase tracking-widest opacity-20 mb-1 leading-none">Hours</span>
                                            <span className="text-xs font-bold">Every Day</span>
                                        </div>
                                        <div className="flex items-start gap-2 pt-0.5">
                                            <div className="flex flex-col items-end text-[11px] font-bold opacity-40 font-mono">
                                                <div className="flex justify-between w-[85px]"><span>12:30</span><span>–</span><span>15:00</span></div>
                                                <div className="flex justify-between w-[85px]"><span>19:00</span><span>–</span><span>23:30</span></div>
                                            </div>
                                            <ChevronRight className="w-3 h-3 opacity-20 mt-1" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
}

// 6. PANTRY/FRIDGE CONTENT - Modern Design
export function PantryContent() {
    const fridgeItems = [
        { id: 1, name: "Yogurt Greco", brand: "Fage", quantity: 1, emoji: "🥛" },
        { id: 2, name: "Salsa di Pomodoro", brand: "Mutti", quantity: 2, emoji: "🍅" },
        { id: 3, name: "Mele", brand: "Melinda", quantity: 4, emoji: "🍎" },
        { id: 4, name: "Carne Macinata", brand: "Coop", quantity: 1, emoji: "🥩" },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-hidden">
            {/* Header */}
            <div className="pt-10 pb-4 px-6 flex flex-col items-start z-30">
                <h1 className="text-[#1F5036] text-3xl font-bold tracking-tight mb-4">Il tuo Frigo</h1>

                {/* Tabs */}
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest border-b border-[#DED8C4] pb-2 mb-6 w-full">
                    <button className="text-[#FF4F28]">Frigo</button>
                    <span className="text-[#DED8C4]">|</span>
                    <button className="text-[#1F5036]/30">Scadenza</button>
                    <span className="text-[#DED8C4]">|</span>
                    <button className="text-[#1F5036]/30">Lista</button>
                </div>

                {/* Search and Add */}
                <div className="flex gap-3 w-full mb-6">
                    <div className="flex-1 h-10 bg-white border border-[#DED8C4] rounded-xl flex items-center px-3 shadow-sm">
                        <Search className="w-4 h-4 text-[#1F5036]/30 mr-2" />
                        <input
                            type="text"
                            placeholder="Cerca..."
                            className="flex-1 bg-transparent text-xs font-bold placeholder:text-[#1F5036]/20 outline-none text-[#1F5036]"
                        />
                    </div>
                    <button className="w-10 h-10 bg-[#1F5036] rounded-xl flex items-center justify-center text-[#FFF9F3] shadow-lg hover:scale-105 transition-transform active:scale-95">
                        <span className="text-xl font-bold">+</span>
                    </button>
                </div>
            </div>

            {/* Fridge Items */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 space-y-3">
                {fridgeItems.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-3 rounded-2xl flex items-center gap-3 border border-[#DED8C4]/60 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-14 h-14 bg-[#FFF9F3] rounded-xl flex items-center justify-center border border-[#DED8C4]/30 shrink-0 text-2xl">
                            {item.emoji}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                            <h3 className="text-sm font-bold truncate">{item.name}</h3>
                            <p className="text-[9px] font-black uppercase tracking-widest opacity-30">{item.brand}</p>
                            <div className="flex items-center gap-3 mt-2">
                                <button className="w-5 h-5 rounded-full bg-[#1F5036]/5 flex items-center justify-center hover:bg-[#1F5036]/10">
                                    <span className="text-xs font-bold text-[#1F5036]">−</span>
                                </button>
                                <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                                <button className="w-5 h-5 rounded-full bg-[#1F5036]/5 flex items-center justify-center hover:bg-[#1F5036]/10">
                                    <span className="text-xs font-bold text-[#1F5036]">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="w-8 h-8 rounded-full bg-[#FF4F28]/10 flex items-center justify-center text-[#FF4F28] hover:bg-[#FF4F28]/20">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// 7. RECIPES CONTENT - Modern Design
export function RecipesContent() {
    const recipes = [
        {
            id: 1,
            title: "Mediterranean Bowl",
            time: "20 min",
            kcal: "450",
            difficulty: "Easy",
            tags: ["Vegan", "Healthy"],
            emoji: "🥗"
        },
        {
            id: 2,
            title: "Caprese Salad",
            time: "10 min",
            kcal: "320",
            difficulty: "Easy",
            tags: ["Fresh", "Quick"],
            emoji: "🍅"
        },
        {
            id: 3,
            title: "Grilled Salmon",
            time: "25 min",
            kcal: "450",
            difficulty: "Medium",
            tags: ["Keto", "Protein"],
            emoji: "🐟"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-[#FFF9F3] font-sans text-[#1F5036] overflow-hidden">
            {/* Header */}
            <div className="pt-10 pb-4 px-6 flex flex-col items-start z-30">
                <h1 className="text-[#1F5036] text-2xl font-bold tracking-tight mb-1 leading-none text-left">Cosa cuciniamo<br />oggi?</h1>
                <p className="text-xs font-bold text-[#1F5036]/50 mb-5 text-left">Ricette basate sul tuo frigo</p>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#1F5036]/40 w-full">
                    <button className="text-[#FF4F28]">AI Chef</button>
                    <button className="text-[#1F5036]/40">Ricettario</button>
                    <button className="text-[#1F5036]/40">Saved</button>
                </div>

                {/* Fridge Ingredients */}
                <div className="mb-5 w-full text-left">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1F5036]">Dal tuo frigo</span>
                        <span className="text-[10px] font-bold text-[#FF4F28]">Vedi tutti</span>
                    </div>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {[
                            { id: 1, name: "Pomodori", icon: "🍅" },
                            { id: 2, name: "Mozzarella", icon: "🧀" },
                            { id: 3, name: "Basilico", icon: "🌿" },
                            { id: 4, name: "Uova", icon: "🥚" }
                        ].map(item => (
                            <button
                                key={item.id}
                                className="flex flex-col items-center gap-1.5 p-2 rounded-2xl border bg-white border-[#DED8C4] text-[#1F5036] hover:bg-[#1F5036] hover:text-white hover:border-[#1F5036] transition-all min-w-[64px]"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-[9px] font-bold">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI Prompt */}
                <div className="bg-white border border-[#DED8C4] rounded-3xl p-4 shadow-sm mb-4 relative w-full">
                    <textarea
                        placeholder="Vorrei qualcosa di fresco..."
                        className="w-full h-16 bg-transparent text-sm font-bold text-[#1F5036] placeholder:text-[#1F5036]/30 resize-none outline-none mb-2"
                    />
                </div>
            </div>

            {/* Recipe Cards */}
            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 space-y-4">
                {recipes.map((recipe, i) => (
                    <motion.div
                        key={recipe.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-[2rem] p-4 border border-[#DED8C4] shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-16 h-16 bg-[#FFF9F3] rounded-xl flex items-center justify-center text-3xl border border-[#DED8C4]/30">
                                {recipe.emoji}
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-lg font-black text-[#1F5036] leading-tight mb-1">{recipe.title}</h3>
                                <div className="flex gap-2">
                                    {recipe.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-[#FF4F28]/10 text-[#FF4F28] rounded-md text-[9px] font-black uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-[#1F5036]/70 px-2">
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-bold">{recipe.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Zap className="w-4 h-4" />
                                <span className="text-xs font-bold">{recipe.kcal} kcal</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold">{recipe.difficulty}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


// Auto-play Phone Flow Controller
export interface PhoneStep {
    id: string;
    component: React.ReactNode;
    showScannerInTab?: boolean;
    hideUtilityBar?: boolean;
}

export function PhoneFlowController({ steps }: { steps: PhoneStep[] }) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <IPhoneSilhouette
            showScannerInTab={steps[currentStep]?.showScannerInTab}
            hideUtilityBar={steps[currentStep]?.hideUtilityBar}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    {steps[currentStep]?.component}
                </motion.div>
            </AnimatePresence>
        </IPhoneSilhouette>
    );
}
