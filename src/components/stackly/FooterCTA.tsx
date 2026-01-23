import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { ContactModal } from "./ContactModal";
import stacklyLogo from "@/assets/stackly-logo.png";

export function FooterCTA() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Ready to Work Differently?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="footer" size="lg" onClick={() => setAccessModalOpen(true)}>
              Request Early Access
            </Button>
            <Button variant="footerOutline" size="lg" onClick={() => setContactModalOpen(true)}>
              Talk to the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer py-10 px-6">
        <div className="container-wide mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={stacklyLogo} alt="Stackly OS" className="h-8 w-8" />
              <span className="font-semibold text-primary-foreground text-lg">Stackly OS</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Venturemond. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <EarlyAccessModal open={accessModalOpen} onOpenChange={setAccessModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
}
