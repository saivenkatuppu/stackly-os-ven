import { Rocket, Code, Target, Shield } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Early-stage startups",
    description: "Build on solid infrastructure from day one.",
  },
  {
    icon: Code,
    title: "Product & engineering teams",
    description: "Get the flexibility developers need.",
  },
  {
    icon: Target,
    title: "Founder-led companies",
    description: "Maintain control as you scale.",
  },
  {
    icon: Shield,
    title: "Teams tired of lock-in",
    description: "Own your workspace and data.",
  },
];

export function AudienceSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          Designed for Teams That Value Control
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
