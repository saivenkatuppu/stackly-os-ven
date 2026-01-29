import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { ContactModal } from "./ContactModal";
import stacklyLogo from "@/assets/stackly-logo.png";

const productLinks = [
  { label: "Features", href: "#capabilities" },
  { label: "How It Works", href: "#how" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Demo", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Team", href: "#" },
  { label: "Venturemond", href: "#" },
  { label: "Careers", href: "#" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Support", href: "#" },
  { label: "Status", href: "#" },
];

export function FooterCTA() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    if (href === "#") return;
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
            <Button variant="footerOutline" size="lg" onClick={() => setContactModalOpen(true)}>
              Talk to the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-footer border-t border-primary-foreground/10">
        <div className="container-wide mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left: Logo & Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <img src={stacklyLogo} alt="Stackly OS" className="h-9 w-auto" />
              </div>
              <p className="text-footer-muted text-sm leading-relaxed max-w-xs">
                An open workspace operating system for modern teams.
                Self-hosted or managed, built on open infrastructure.
              </p>
            </div>

            {/* Middle: Navigation Links */}
            <div className="md:col-span-2">
              <h4 className="font-serif text-primary-foreground text-base mb-5">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-footer-muted hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-serif text-primary-foreground text-base mb-5">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-footer-muted hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-serif text-primary-foreground text-base mb-5">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-footer-muted hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Legal */}
            <div className="md:col-span-2">
              <h4 className="font-serif text-primary-foreground text-base mb-5">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button className="text-sm text-footer-muted hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-sm text-footer-muted hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="text-sm text-footer-muted hover:text-primary-foreground transition-colors">
                    Security
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-footer-muted">
                © {new Date().getFullYear()} Venturemond. All rights reserved.
              </p>
              <p className="text-sm text-footer-muted">
                Built with intention, not hype.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <EarlyAccessModal open={accessModalOpen} onOpenChange={setAccessModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
}
