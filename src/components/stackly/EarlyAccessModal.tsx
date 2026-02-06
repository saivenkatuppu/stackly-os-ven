import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface EarlyAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden gap-0 bg-[#f4f6f5] border-transparent shadow-2xl rounded-2xl">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center p-12 h-full min-h-[500px] animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#1e4e3c]/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#1e4e3c]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1f1c] mb-3 font-serif">Request Received</h3>
            <p className="text-[#5c6660] max-w-xs mx-auto leading-relaxed mb-8">
              You've been added to our priority waitlist. We'll be in touch shortly with your access credentials.
            </p>
            <Button
              onClick={handleClose}
              className="px-8 bg-[#1e4e3c] hover:bg-[#163a2d] text-white rounded-full font-medium transition-all shadow-lg shadow-[#1e4e3c]/20"
            >
              Back to Homepage
            </Button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="px-8 pt-8 pb-4">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="text-2xl font-bold text-[#1a1f1c] leading-tight font-serif tracking-tight">
                  Stackly Early Access
                </DialogTitle>
                <DialogDescription className="text-[15px] text-[#5c6660] leading-normal">
                  We are currently onboarding a select group of teams to shape the future of work.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
              <div className="space-y-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-[#4a524e] pl-1">Work Email <span className="text-red-600/70 text-[10px] align-top">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="name@company.com"
                    className="h-10 rounded-lg bg-white border-[#e0e5e2] focus:border-[#1e4e3c] focus:ring-[#1e4e3c]/10 text-[#1a1f1c] placeholder:text-[#a0a8a4] shadow-sm transition-all"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="company" className="text-xs font-semibold text-[#4a524e] pl-1">Company Name <span className="text-red-600/70 text-[10px] align-top">*</span></Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    placeholder="Acme Inc."
                    className="h-10 rounded-lg bg-white border-[#e0e5e2] focus:border-[#1e4e3c] focus:ring-[#1e4e3c]/10 text-[#1a1f1c] placeholder:text-[#a0a8a4] shadow-sm transition-all"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="name" className="text-xs font-medium text-[#7a8580] pl-1">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="h-10 rounded-lg bg-white border-[#e0e5e2] focus:border-[#1e4e3c] focus:ring-[#1e4e3c]/10 text-[#1a1f1c] placeholder:text-[#a0a8a4] shadow-sm transition-all"
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="message" className="text-xs font-medium text-[#7a8580] pl-1">Primary Challenge</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What specific workflow are you trying to fix?"
                    rows={2}
                    className="resize-none rounded-lg bg-white border-[#e0e5e2] focus:border-[#1e4e3c] focus:ring-[#1e4e3c]/10 text-[#1a1f1c] placeholder:text-[#a0a8a4] shadow-sm transition-all min-h-[60px]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-[#1e4e3c] hover:bg-[#163a2d] text-white rounded-lg font-semibold text-sm transition-all shadow-md shadow-[#1e4e3c]/10 hover:shadow-lg hover:shadow-[#1e4e3c]/20 disabled:opacity-80 disabled:cursor-not-allowed group"
                >
                  {loading ? "Processing..." : (
                    <span className="flex items-center gap-2">
                      Join Early Access <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-1.5 mt-3 text-[#7a8580] text-[11px]">
                  <span>We review requests daily. You'll hear from us within 48 hours.</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
