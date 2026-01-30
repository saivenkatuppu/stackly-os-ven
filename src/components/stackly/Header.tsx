import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import stacklyIcon from "@/assets/stackly-icon.png";
import { EarlyAccessModal } from "./EarlyAccessModal";

const navLinks = [
  { label: "Why Stackly", href: "#why" },
  { label: "What It Is", href: "#what" },
  { label: "How It Works", href: "#how" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container-wide mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="flex items-center gap-2">
            <img src={stacklyIcon} alt="Stackly OS" className="h-8 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight">Stackly</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="heroOutline" size="sm" onClick={() => setModalOpen(true)}>
              Request Access
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="hero" className="mt-4 w-full" onClick={() => { setMobileOpen(false); setModalOpen(true); }}>
                Request Access
              </Button>
            </nav>
          </div>
        )}
      </header>

      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
