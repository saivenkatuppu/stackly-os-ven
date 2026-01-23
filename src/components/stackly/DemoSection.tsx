import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "./DemoModal";
import { Check, FolderOpen, Users, Activity, Shield } from "lucide-react";

const features = [
  "Team folders and shared files",
  "User access control",
  "Activity and audit visibility",
  "Clean, branded workspace",
];

export function DemoSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-section-alt">
        <div className="container-wide mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Stackly OS in Action
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 max-w-2xl mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Live workspace mock */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-card rounded-xl border border-border shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">Live Demo — Stackly OS</span>
                </div>
              </div>

              <div className="flex min-h-[280px]">
                <div className="w-44 bg-muted/30 border-r border-border p-3 hidden sm:block">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-foreground font-medium px-2 py-1.5 bg-primary/10 rounded">
                      <FolderOpen className="w-3.5 h-3.5 text-primary" />
                      Files
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground px-2 py-1.5">
                      <Users className="w-3.5 h-3.5" />
                      Team
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground px-2 py-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      Activity
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground px-2 py-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      Access
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Q4 Reports", "Brand Kit", "Contracts", "Onboarding", "API Docs", "Roadmap", "Meeting Notes", "Templates"].map((item) => (
                      <div key={item} className="flex flex-col items-center p-3 rounded-lg border border-border bg-background">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mb-1.5">
                          <FolderOpen className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs text-foreground text-center">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            This is a live Stackly OS workspace currently deployed and used internally,
            with early testing underway with select teams.
          </p>

          <Button variant="hero" size="lg" onClick={() => setDemoModalOpen(true)}>
            Request Demo Access
          </Button>
        </div>
      </section>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </>
  );
}
