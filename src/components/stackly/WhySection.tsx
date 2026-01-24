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
        <span className="text-eyebrow mb-6 block">The Problem</span>

        <h2>
          Why Stackly OS Exists
        </h2>
        <p className="max-w-2xl mx-auto mb-16">
          Teams are buried in tools, not supported by them.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-card p-8 rounded-xl border border-subtle text-left hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-5 h-5 text-primary" />
              </div>
              <h3>
                {problem.title}
              </h3>
              <p className="mb-0">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-medium max-w-xl mx-auto text-foreground">
          Most teams don't need more tools.<br />
          They need a solid workspace foundation.
        </p>
      </div>
    </section>
  );
}
