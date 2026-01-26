import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { EarlyAccessModal } from "./EarlyAccessModal";
import { DemoModal } from "./DemoModal";
import { FolderOpen, Users, Activity, Shield } from "lucide-react";

export function HeroSection() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const [activeView, setActiveView] = useState("All Files");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const renderMockContent = () => {
    if (selectedFolder) {
      return (
        <div className="flex-1 p-8 bg-black/20">
          <div className="flex items-center gap-2 mb-6 cursor-pointer text-primary hover:text-primary/80 transition-colors" onClick={() => setSelectedFolder(null)}>
            <FolderOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Back to {activeView}</span>
          </div>
          <h3 className="text-xl font-bold mb-6 text-white">{selectedFolder}</h3>
          <div className="grid grid-cols-1 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">FILE</div>
                  <div>
                    <p className="text-sm font-medium text-white">Document_{i}.pdf</p>
                    <p className="text-[10px] text-white/40">Modified 2 hours ago • 1.2 MB</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      );
    }

    switch (activeView) {
      case "Team":
        return (
          <div className="flex-1 p-8 bg-black/20">
            <h3 className="text-xl font-bold mb-6 text-white text-left">Team Members</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "John Doe", role: "Admin" },
                { name: "Jane Smith", role: "Editor" },
                { name: "Mike Ross", role: "Viewer" },
                { name: "Sarah Connor", role: "Editor" }
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-black/50 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center font-bold text-sm">{member.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-[10px] text-white/40">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Activity":
        return (
          <div className="flex-1 p-8 bg-black/20">
            <h3 className="text-xl font-bold mb-6 text-white text-left">Recent Activity</h3>
            <div className="space-y-4">
              {[
                "Jane Smith uploaded 5 files to Design Assets",
                "John Doe modified Project Specs in Engineering",
                "New user Mike Ross added to the team",
                "System update completed successfully"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/70 border-l border-primary/30 pl-4 py-1">
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Access":
        return (
          <div className="flex-1 p-8 bg-black/20">
            <h3 className="text-xl font-bold mb-6 text-white text-left">Access Control</h3>
            <div className="bg-black/50 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-3 font-semibold text-white/40 uppercase tracking-wider">Scope</th>
                    <th className="p-3 font-semibold text-white/40 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {["Internal", "Public", "Partner", "Admin"].map((scope) => (
                    <tr key={scope}>
                      <td className="p-3 text-white/80">{scope}</td>
                      <td className="p-3"><span className="text-primary font-bold">Encrypted</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex-1 p-8 bg-black/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {["Product Docs", "Engineering", "Marketing", "Design Assets", "Legal", "Finance"].map((folder) => (
                <div
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
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
        );
    }
  };

  return (
    <>
      <section className="section-padding pt-32 md:pt-48 bg-background relative overflow-hidden text-center">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="container-wide mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-primary via-primary/90 to-primary/70 tracking-tight">
            Stackly OS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Stackly OS is a control-first workspace layer built on open infrastructure, bringing files, collaboration, and workflows together under your control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <MagneticWrapper>
              <Button variant="hero" size="lg" onClick={() => setAccessModalOpen(true)} className="min-w-[180px] shadow-primary/20">
                Request Access
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

              <div className="bg-[url('/workspace_bg.jpg')] bg-cover bg-center rounded-xl border border-white/10 shadow-2xl overflow-hidden relative backdrop-blur-sm text-white">
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
                <div className="flex min-h-[460px]">
                  {/* Sidebar */}
                  <div className="w-56 bg-white/5 border-r border-white/10 p-4 hidden sm:block text-left">
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Workspace</div>
                      {[
                        { name: "All Files", icon: FolderOpen },
                        { name: "Team", icon: Users },
                        { name: "Activity", icon: Activity },
                        { name: "Access", icon: Shield }
                      ].map((item) => (
                        <div
                          key={item.name}
                          onClick={() => { setActiveView(item.name); setSelectedFolder(null); }}
                          className={`flex items-center gap-2 text-sm px-2 py-2 rounded-md cursor-pointer transition-all border ${activeView === item.name ? 'bg-primary/20 text-primary border-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'text-white/70 hover:bg-white/5 border-transparent hover:text-white'}`}
                        >
                          <item.icon className={`w-4 h-4 ${activeView === item.name ? 'text-primary' : 'text-white/40'}`} />
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main content */}
                  {renderMockContent()}
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
