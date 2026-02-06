import { Check, X } from "lucide-react";

const comparisons = [
  { stackly: "Proprietary control", traditional: "Black-box systems" },
  { stackly: "Private & Secure", traditional: "Data siloed by vendors" },
  { stackly: "Unified workspace", traditional: "Fragmented tools" },
  { stackly: "Operational clarity", traditional: "Hidden workflows" },
  { stackly: "Assistive workflows", traditional: "Forced AI adoption" },
];

export function ComparisonSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Stackly OS Is Different
        </h2>
        <p className="text-lg text-muted-foreground mb-14">
          Stackly OS vs Traditional Workspaces
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              <div className="bg-primary/10 p-4 text-center border-b border-border">
                <span className="font-semibold text-foreground">Stackly OS</span>
              </div>
              <div className="bg-muted/50 p-4 text-center border-b border-border">
                <span className="font-semibold text-muted-foreground">Traditional</span>
              </div>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-0 border-b border-border last:border-b-0"
              >
                <div className="p-4 flex items-center justify-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground">{row.stackly}</span>
                </div>
                <div className="p-4 flex items-center justify-center gap-2 text-sm bg-muted/20">
                  <X className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg text-foreground font-medium max-w-xl mx-auto">
          You control the workspace.<br />
          You decide how much automation to add.
        </p>
      </div>
    </section>
  );
}
