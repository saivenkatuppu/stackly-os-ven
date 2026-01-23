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
import { CheckCircle } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
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
            <DialogTitle className="text-xl mb-2">Message Sent</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              We'll get back to you as soon as possible.
            </DialogDescription>
            <Button variant="hero" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Talk to the Team</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Have questions? Send us a message and we'll respond promptly.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="How can we help?"
                  rows={4}
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
