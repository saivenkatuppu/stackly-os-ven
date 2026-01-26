import { Users, Shield, Activity, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Team File Collaboration",
    description: "Work together on shared files in a single workspace.",
  },
  {
    icon: Shield,
    title: "Roles & Permissions",
    description: "Control who can access what with clarity and intent.",
  },
  {
    icon: Activity,
    title: "Activity Visibility",
    description: "See changes, access, and usage across the workspace.",
  },
  {
    icon: Zap,
    title: "Foundation for automation & extensibility",
    description: "A base layer designed to support future intelligence.",
  },
];

export function WhatSection() {
  return (
    <section id="what" className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Stackly OS Is
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
          Stackly OS is an open, modular workspace operating system.
          It brings files, collaboration, and internal workflows together
          on infrastructure teams control.
        </p>
        <p className="text-sm text-primary/80 max-w-2xl mx-auto mb-14 italic">
          Built on proven open-source infrastructure and extended with proprietary workflows, controls, and assistive layers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-section-alt p-6 rounded-xl border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground">
          This is the foundation layer — not a bloated suite.
        </p>
      </div>
    </section>
  );
}
