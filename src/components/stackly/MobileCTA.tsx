import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarlyAccessModal } from "./EarlyAccessModal";

export function MobileCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
        <Button variant="hero" className="w-full" onClick={() => setModalOpen(true)}>
          Request Early Access
        </Button>
      </div>

      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
