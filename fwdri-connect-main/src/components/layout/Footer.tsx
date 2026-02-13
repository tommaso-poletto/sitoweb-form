import { Link } from "react-router-dom";
import fwdriLogo from "@/assets/fwdri-logo.png";
const footerLinks = {
  product: [{
    name: "Come Funziona",
    path: "/how-it-works"
  }, {
    name: "Unisciti alla Lista",
    path: "/waitlist"
  }],
  company: [{
    name: "Chi Siamo",
    path: "/about"
  }, {
    name: "Contatti",
    path: "/contact"
  }],
  legal: [{
    name: "Privacy Policy",
    path: "/privacy"
  }, {
    name: "Termini di Servizio",
    path: "/terms"
  }]
};
export const Footer = () => {
  return <footer className="bg-background-subtle border-t border-border">
      <div className="container-wide section-padding pb-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={fwdriLogo} alt="FWDRI" className="h-32 w-auto" />
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Meno tempo. Meno stress. Scelte alimentari migliori.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Prodotto
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Azienda
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Legale
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-border pt-8 mb-8">
          <p className="text-foreground-subtle text-xs leading-relaxed max-w-4xl">
            <strong className="text-foreground-muted">Disclaimer Medico:</strong>{" "}
            FWDRI è progettata per aiutarti a scoprire e organizzare opzioni alimentari 
            che si allineano con le tue preferenze e restrizioni dietetiche. Non è destinata 
            a sostituire pareri medici professionali, diagnosi o trattamenti. Consulta 
            sempre operatori sanitari qualificati per qualsiasi condizione medica o 
            esigenza dietetica. FWDRI non garantisce mai la sicurezza assoluta — supporta 
            la fiducia, la chiarezza e scelte meglio informate.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground-subtle text-xs">
          <p>© {new Date().getFullYear()} FWDRI. Tutti i diritti riservati.</p>
          
        </div>
      </div>
    </footer>;
};