import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import fwdriLogo from "@/assets/fwdri-icon-new.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Come Funziona', href: '/how-it-works' },
  { label: 'Chi Siamo', href: '/about' },
];

export function NavbarV2() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={fwdriLogo} 
            alt="FWDRI" 
            className="h-12 md:h-16 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-sm font-medium',
                location.pathname === link.href
                  ? 'text-foreground bg-secondary/10'
                  : 'text-foreground-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <Link to="/waitlist">
            <Button variant="hero" size="sm">
              Unisciti alla Lista
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <MenuToggleIcon open={open} className="size-6 text-foreground" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-lg transition-all duration-500 md:hidden',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="container-wide py-8">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'block py-3 px-4 rounded-xl text-lg font-medium transition-colors',
                    location.pathname === link.href
                      ? 'bg-secondary/10 text-foreground'
                      : 'text-foreground-muted hover:text-foreground hover:bg-muted/50'
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-border">
            <Link to="/waitlist" onClick={() => setOpen(false)}>
              <Button variant="hero" className="w-full" size="lg">
                Unisciti alla Lista
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
