import { Camera, FileSearch, GitBranch, Key, FileCode, Wifi } from "lucide-react";

const capabilities = [
  {
    icon: Camera,
    title: "Workspace Snapshots",
    description: "Capture and restore workspace state for safety and audits.",
  },
  {
    icon: FileSearch,
    title: "Access Trails",
    description: "Understand who accessed what and when.",
  },
  {
    icon: GitBranch,
    title: "Environment Separation",
    description: "Separate dev, staging, and production workspaces.",
  },
  {
    icon: Key,
    title: "Policy-Based Access",
    description: "Define rules instead of managing permissions manually.",
  },
  {
    icon: FileCode,
    title: "Workspace Templates",
    description: "Optional starting points for different teams.",
  },
  {
    icon: Wifi,
    title: "Offline-First Sync",
    description: "Work continues even during connectivity issues. (Planned)",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-padding bg-section-alt">
      <div className="container-wide mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          Core Workspace Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-card p-6 rounded-xl border border-border text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <cap.icon className="w-5 h-5 text-primary" />
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
      </div>
    </section>
  );
}
