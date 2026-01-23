import { Files, Lock, DollarSign, Eye } from "lucide-react";

const problems = [
  {
    icon: Files,
    title: "Fragmented files",
    description: "Files scattered across platforms slow teams down and create confusion about what's current.",
  },
  {
    icon: Lock,
    title: "Knowledge locked away",
    description: "Important information gets buried in folders, chats, and disconnected tools.",
  },
  {
    icon: DollarSign,
    title: "Rising SaaS costs",
    description: "Subscription costs increase while teams lose control over their own data and workflows.",
  },
  {
    icon: Eye,
    title: "No visibility",
    description: "Teams lack clarity into who accessed what, when, and how data flows through the organization.",
  },
];

export function WhySection() {
  return (
    <section id="why" className="section-padding bg-section-alt">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Stackly OS Exists
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-14">
          Teams are buried in tools, not supported by them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-card p-6 rounded-xl border border-border text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg text-foreground font-medium max-w-xl mx-auto">
          Most teams don't need more tools.<br />
          They need a solid workspace foundation.
        </p>
      </div>
    </section>
  );
}
