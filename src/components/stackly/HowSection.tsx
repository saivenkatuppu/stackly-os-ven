import { PlusCircle, Upload, Layers } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: PlusCircle,
    title: "Create your workspace",
    description: "Set up users, folders, and access in minutes.",
  },
  {
    number: "2",
    icon: Upload,
    title: "Work as usual",
    description: "Upload, share, and collaborate without heavy onboarding.",
  },
  {
    number: "3",
    icon: Layers,
    title: "Build on top",
    description: "Extend the workspace with workflows and assistive features over time.",
  },
];

export function HowSection() {
  return (
    <section id="how" className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          How Teams Use Stackly OS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg text-foreground font-medium">
          Start simple. Expand intentionally.
        </p>
      </div>
    </section>
  );
}
