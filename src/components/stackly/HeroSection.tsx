import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { DemoModal } from "./DemoModal";
import { FolderOpen, Users, Activity, Shield } from "lucide-react";

export function HeroSection() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding pt-32 md:pt-48 bg-background relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container-wide mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary/90 to-primary/70 tracking-tight">
            Stackly OS
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            An open workspace OS for modern teams
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Files, collaboration, and internal work —<br className="hidden sm:block" />
            self-hosted or managed, built on open infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <MagneticWrapper>
              <Button variant="hero" size="lg" onClick={() => setAccessModalOpen(true)} className="min-w-[180px] shadow-primary/20">
                Request Early Access
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button variant="heroOutline" size="lg" onClick={() => setDemoModalOpen(true)} className="min-w-[180px]">
                View Workspace Demo
              </Button>
            </MagneticWrapper>
          </div>

          <p className="text-sm text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Built on open source. Used internally. Early customer pilots underway.
          </p>

          {/* Workspace UI Mock - Dark Mode Team Space */}
          <div className="mt-20 mx-auto max-w-5xl animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="relative group">
              {/* Mockup Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>

              <div className="bg-[url('/workspace_bg.jpg')] bg-cover bg-center rounded-xl border border-white/10 shadow-2xl overflow-hidden relative backdrop-blur-sm text-white text-left">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-white/10">
                  <div className="flex gap-1.5 opacity-80">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-white/50 font-medium">Stackly OS — Team Workspace</span>
                  </div>
                </div>

                {/* Workspace content */}
                <div className="flex min-h-[400px]">
                  {/* Sidebar */}
                  <div className="w-56 bg-white/5 border-r border-white/10 p-4 hidden sm:block">
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Workspace</div>
                      <div className="flex items-center gap-2 text-sm text-white font-medium px-2 py-2 bg-primary/20 text-primary rounded-md border border-primary/20">
                        <FolderOpen className="w-4 h-4" />
                        All Files
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70 px-2 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                        <Users className="w-4 h-4" />
                        Team
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70 px-2 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                        <Activity className="w-4 h-4" />
                        Activity
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/70 px-2 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                        <Shield className="w-4 h-4" />
                        Access
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-8 bg-black/20">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {["Product Docs", "Engineering", "Marketing", "Design Assets", "Legal", "Finance"].map((folder) => (
                        <div
                          key={folder}
                          className="flex flex-col items-center p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md hover:bg-black/70 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group/folder"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover/folder:bg-primary/20 flex items-center justify-center mb-3 transition-colors border border-white/5 group-hover/folder:border-primary/20">
                            <FolderOpen className="w-7 h-7 text-white/70 group-hover/folder:text-primary transition-colors" />
                          </div>
                          <span className="text-base text-white font-semibold text-center mb-0.5">{folder}</span>
                          <span className="text-xs text-white/50">
                            {Math.floor(Math.random() * 20 + 5)} items
                          </span>
                        </div>
                      ))}
                    </div>
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
