import { Search, Lightbulb, FileText, Info } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Enhanced discovery (early)",
    description: "Search across workspace content with improved relevance.",
  },
  {
    icon: Lightbulb,
    title: "Context-based suggestions",
    description: "Get relevant suggestions based on your current work context.",
  },
  {
    icon: FileText,
    title: "Content assistance (limited scope)",
    description: "Assistance with creating and condensing content. (Limited scope)",
  },
];

export function AssistiveSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Assistive Capabilities
        </h2>
        <p className="text-sm text-muted-foreground mb-6">(Early Stage)</p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-14">
          Stackly OS is experimenting with assistive features
          to improve how teams work with information.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-section-alt p-6 rounded-xl border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important emphasis */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-foreground font-medium mb-1">
                The workspace works without AI.
              </p>
              <p className="text-muted-foreground text-sm">
                Assistive features enhance it — not replace it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
