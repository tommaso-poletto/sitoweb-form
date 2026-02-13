import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import fwdriLogo from "@/assets/fwdri-icon-new.png";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "How it Works",
  path: "/how-it-works"
}, {
  name: "About",
  path: "/about"
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  return <>
      {/* Fixed container for proper centering */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav initial={{
        y: -100,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className={`pointer-events-auto transition-all duration-500 ${isScrolled ? "bg-white shadow-lg border-border/40" : "bg-white shadow-md border-border/20"} rounded-full px-4 sm:px-6 py-2 border`}>
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center py-1">
              <motion.img 
                src={fwdriLogo} 
                alt="FWDRI" 
                className="h-9 sm:h-10 w-auto object-contain" 
                whileHover={{ scale: 1.08, rotate: 5 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} 
              />
            </Link>

            {/* Separator */}
            <div className="hidden md:block w-px h-5 bg-gradient-to-b from-transparent via-border/60 to-transparent" />

            {/* Desktop Nav Links */}
            <LayoutGroup>
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path}>
                    <motion.div 
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${location.pathname === link.path ? "text-foreground" : "text-foreground-muted hover:text-foreground"}`} 
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.97 }}
                    >
                      {location.pathname === link.path && (
                        <motion.div 
                          layoutId="nav-pill" 
                          className="absolute inset-0 bg-gradient-to-r from-secondary/15 to-forest-green/10 rounded-full" 
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.05)" }}
                        />
                      )}
                      <span className="relative z-10">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </LayoutGroup>

            {/* Separator */}
            <div className="hidden md:block w-px h-5 bg-gradient-to-b from-transparent via-border/60 to-transparent" />

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/waitlist">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -1 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button variant="hero" size="sm" className="rounded-full px-5 shadow-md hover:shadow-lg transition-shadow">
                    Join Waitlist
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileTap={{
            scale: 0.9
          }} className="md:hidden p-2.5 rounded-full hover:bg-muted transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? <motion.div key="close" initial={{
                rotate: -90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: 90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <X size={20} className="text-foreground" />
                  </motion.div> : <motion.div key="menu" initial={{
                rotate: 90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: -90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <Menu size={20} className="text-foreground" />
                  </motion.div>}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <>
            {/* Backdrop */}
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2
        }} className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            
            {/* Menu */}
            <motion.div initial={{
          opacity: 0,
          y: -20,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: -20,
          scale: 0.95
        }} transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }} className="fixed top-20 left-4 right-4 z-40 bg-white rounded-3xl shadow-2xl p-6 md:hidden border border-border/30">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => <motion.div key={link.path} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }}>
                    <Link to={link.path}>
                      <div className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path ? "bg-forest-green/10 text-foreground border border-forest-green/20" : "text-foreground-muted hover:bg-muted/50 hover:text-foreground"}`}>
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>)}
                <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: navLinks.length * 0.05
            }} className="pt-2">
                  <Link to="/waitlist" className="block">
                    <Button variant="hero" className="w-full rounded-xl" size="lg">
                      Join Waitlist
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </>;
};