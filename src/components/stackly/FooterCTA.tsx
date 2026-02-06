import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { ContactModal } from "./ContactModal";
import stacklyLogo from "@/assets/stackly-logo.png";

const productLinks = [
  { label: "Features", href: "#capabilities" },
  { label: "How It Works", href: "#how" },
  { label: "Roadmap", href: "#roadmap" },
];


import { useNavigate, useLocation } from "react-router-dom";

export function FooterCTA() {
  const navigate = useNavigate();
  const location = useLocation();
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    if (href === "#") return;

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Final CTA Section */}
      <section className="section-padding bg-footer">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 font-serif">
            Ready to Work Differently?
          </h2>
          <p className="text-footer-muted mb-10 text-lg max-w-xl mx-auto">
            Join teams building on infrastructure they control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="footer" size="lg" onClick={() => setAccessModalOpen(true)}>
              Request Access
            </Button>

          </div>
        </div>
      </section>

      {/* Premium Footer */}
      {/* Premium Footer */}
      <footer className="bg-footer border-t border-primary-foreground/10">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

            {/* Column 1: Brand */}
            <div className="flex flex-col items-start gap-4">
              <img src={stacklyLogo} alt="Stackly OS" className="h-[200px] w-auto object-contain -ml-6 -mt-10 mb-[-40px]" />
              <p className="text-footer-muted text-sm leading-relaxed max-w-xs">
                The control-first Work OS for teams building structured internal workflows.
              </p>
            </div>

            {/* Column 2: Product */}
            <div className="mt-2 md:mt-0 md:pl-12">
              <h4 className="font-serif text-primary-foreground text-lg mb-6 tracking-wide">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-base text-footer-muted hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="mt-2 md:mt-0 md:pl-12">
              <h4 className="font-serif text-primary-foreground text-lg mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => navigate('/privacy')} className="text-base text-footer-muted hover:text-white transition-colors text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/terms')} className="text-base text-footer-muted hover:text-white transition-colors text-left">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/security')} className="text-base text-footer-muted hover:text-white transition-colors text-left">
                    Security
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-footer-muted">
              © 2026 Venturemond. All rights reserved.
            </p>
            <p className="text-sm text-footer-muted opacity-80">
              Built with intention, not hype.
            </p>
          </div>
        </div>
      </footer>

      <EarlyAccessModal open={accessModalOpen} onOpenChange={setAccessModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
}
