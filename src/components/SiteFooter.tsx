import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold tracking-tight">
            M<span className="text-primary">M</span>B Värmland AB
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Markarbeten, stensättning och anläggning – utfört med kvalitet och
            omsorg i Värmland.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Navigering</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Start</Link></li>
            <li><Link to="/tjanster" className="hover:text-primary transition-colors">Tjänster</Link></li>
            <li><Link to="/vara-arbeten" className="hover:text-primary transition-colors">Våra arbeten</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">Kontakt</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 072 - 872 24 56</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@mmbvarmland.se</li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} MMB Värmland AB. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
