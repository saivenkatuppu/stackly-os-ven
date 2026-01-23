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
import { CheckCircle } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-xl mb-2">Demo Request Received</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              We'll send you demo access details shortly.
            </DialogDescription>
            <Button variant="hero" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">View Workspace Demo</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Get access to a live Stackly OS workspace demo.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email">Work Email</Label>
                <Input
                  id="demo-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-company">Company</Label>
                <Input
                  id="demo-company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company"
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Request Demo Access
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
