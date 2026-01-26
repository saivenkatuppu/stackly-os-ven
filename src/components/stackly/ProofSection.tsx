import { CheckCircle } from "lucide-react";

const milestones = [
  "Core workspace deployed",
  "Actively used internally across Venturemond teams",
  "Assistive features under testing",
  "Early customer pilots in progress",
];

export function ProofSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Built and Tested in Real Environments
        </h2>

        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {milestones.map((milestone) => (
            <div
              key={milestone}
              className="flex items-center gap-3 w-full bg-section-alt p-4 rounded-lg border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground text-left">{milestone}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
