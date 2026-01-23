const roadmapItems = {
  current: [
    "Core workspace & file management",
    "Team collaboration features",
    "Access control & permissions",
    "Activity logging",
  ],
  next: [
    "Enhanced search capabilities",
    "Workspace templates",
    "Policy-based access controls",
    "Integration APIs",
  ],
  later: [
    "Offline-first sync",
    "Advanced assistive features",
    "Custom workflows",
    "Enterprise features",
  ],
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding bg-section-alt">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          What's Coming Next
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-card p-6 rounded-xl border border-primary">
            <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Current
            </div>
            <ul className="space-y-3 text-left">
              {roadmapItems.current.map((item) => (
                <li key={item} className="text-sm text-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="inline-block bg-muted text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Next
            </div>
            <ul className="space-y-3 text-left">
              {roadmapItems.next.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="inline-block bg-muted text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Later
            </div>
            <ul className="space-y-3 text-left">
              {roadmapItems.later.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-lg text-muted-foreground">
          We're building depth before breadth.
        </p>
      </div>
    </section>
  );
}
