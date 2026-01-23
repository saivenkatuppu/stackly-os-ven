import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { DemoModal } from "./DemoModal";
import { FolderOpen, Users, Activity, Shield } from "lucide-react";

export function HeroSection() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding pt-32 md:pt-40 bg-background">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Stackly OS
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            An open workspace OS for modern teams
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Files, collaboration, and internal work —<br className="hidden sm:block" />
            self-hosted or managed, built on open infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" onClick={() => setAccessModalOpen(true)}>
              Request Early Access
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => setDemoModalOpen(true)}>
              View Workspace Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Built on open source. Used internally. Early customer pilots underway.
          </p>

          {/* Workspace UI Mock */}
          <div className="mt-16 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">Stackly OS — Team Workspace</span>
                </div>
              </div>

              {/* Workspace content */}
              <div className="flex min-h-[320px]">
                {/* Sidebar */}
                <div className="w-48 bg-muted/30 border-r border-border p-4 hidden sm:block">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium px-2 py-1.5 bg-primary/10 rounded">
                      <FolderOpen className="w-4 h-4 text-primary" />
                      All Files
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground px-2 py-1.5 hover:bg-muted/50 rounded cursor-pointer">
                      <Users className="w-4 h-4" />
                      Team
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground px-2 py-1.5 hover:bg-muted/50 rounded cursor-pointer">
                      <Activity className="w-4 h-4" />
                      Activity
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground px-2 py-1.5 hover:bg-muted/50 rounded cursor-pointer">
                      <Shield className="w-4 h-4" />
                      Access
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Product Docs", "Engineering", "Marketing", "Design Assets", "Legal", "Finance"].map((folder) => (
                      <div
                        key={folder}
                        className="flex flex-col items-center p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                          <FolderOpen className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium text-center">{folder}</span>
                        <span className="text-xs text-muted-foreground mt-1">
                          {Math.floor(Math.random() * 20 + 5)} files
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EarlyAccessModal open={accessModalOpen} onOpenChange={setAccessModalOpen} />
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </>
  );
}
