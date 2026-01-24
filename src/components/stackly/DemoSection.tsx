import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "./DemoModal";
import {
  Check, FolderOpen, Users, Activity, Shield,
  LayoutGrid, MessageCircle, Image as ImageIcon, Zap, Mail,
  Calendar, Edit3, Layers, Megaphone, Star, CheckSquare,
  ListTodo, Table as TableIcon
} from "lucide-react";

const features = [
  "Team folders and shared files",
  "User access control",
  "Activity and audit visibility",
  "Clean, branded workspace",
];

const navItems = [
  { name: "Dashboard", icon: LayoutGrid },
  { name: "Talk", icon: MessageCircle },
  { name: "Files", icon: FolderOpen },
  { name: "Photos", icon: ImageIcon },
  { name: "Activity", icon: Zap },
  { name: "Mail", icon: Mail },
  { name: "Contacts", icon: Users },
  { name: "Calendar", icon: Calendar },
  { name: "Notes", icon: Edit3 },
  { name: "Deck", icon: Layers },
  { name: "Announc...", icon: Megaphone },
  { name: "Collect...", icon: Star },
  { name: "Forms", icon: CheckSquare },
  { name: "Tasks", icon: ListTodo },
  { name: "Tables", icon: TableIcon },
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

          {/* Live workspace mock - Dark Mode Dashboard Redesign */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-[url('/workspace_bg.jpg')] bg-cover bg-center rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative min-h-[600px] text-white font-sans">
              {/* Background Ambient Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.05),transparent_40%)] pointer-events-none" />

              {/* Top Navigation Bar */}
              <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-sm overflow-x-auto">
                <div className="flex items-center gap-6 text-sm font-medium text-white/70 min-w-max">
                  <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors mr-2">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <img src="/stackly_logo.png" alt="Stackly Logo" className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                  {/* Mock Nav Items */}
                  <div className="flex gap-5">
                    {navItems.map((item) => (
                      <div key={item.name} className={`flex flex-col items-center gap-1.5 cursor-pointer text-white/60 hover:text-white transition-colors group px-1`}>
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium tracking-wide uppercase opacity-70 group-hover:opacity-100">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/60 pl-6 border-l border-white/10 ml-6 hidden xl:flex">
                  <span className="hover:text-white cursor-pointer transition-colors">Search</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white/20" />
                </div>
              </div>

              {/* Greeting */}
              <div className="relative z-10 text-center py-10">
                <h3 className="text-3xl font-semibold tracking-tight text-white/90">Good afternoon, User</h3>
              </div>

              {/* Dashboard Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 pb-8">

                {/* Card 1: Recommended Files */}
                <div className="bg-[#111]/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <FolderOpen className="w-6 h-6 text-white" />
                    <span className="font-semibold text-lg">Recommended files</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    {[
                      { name: "Project_Specs_v2.docx", meta: "Last updated 2 hours ago", type: "doc" },
                      { name: "Q4_Financials.xlsx", meta: "Shared by Finance Team", type: "sheet" },
                      { name: "Marketing_Assets.zip", meta: "Last commented yesterday", type: "zip" },
                      { name: "client_list.csv", meta: "Shared with you", type: "file" }
                    ].map((file, i) => (
                      <div key={i} className="flex gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10">
                          {file.type === 'doc' && <span className="text-[10px] font-bold">DOC</span>}
                          {file.type === 'sheet' && <span className="text-[10px] font-bold">XLS</span>}
                          {file.type === 'zip' && <span className="text-[10px] font-bold">ZIP</span>}
                          {file.type === 'file' && <span className="text-[10px] font-bold">FILE</span>}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium text-white/90 truncate">{file.name}</p>
                          <p className="text-[11px] text-white/50 truncate">{file.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: Talk Mentions */}
                <div className="bg-[#111]/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-white" />
                    <span className="font-semibold text-lg">Talk mentions</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="bg-white/5 rounded-xl p-3 flex gap-3 items-start border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        PM
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Product Sync</p>
                        <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Live now
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 flex gap-3 items-start border border-white/5 opacity-70">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                        DS
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Design Huddle</p>
                        <p className="text-xs text-white/50 mt-1">
                          Ended 20m ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Important Mail */}
                <div className="bg-[#111]/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity className="w-6 h-6 text-white" />
                    <span className="font-semibold text-lg">Important mail</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    {[
                      { from: "Alex (Design)", subject: "New mockups ready", time: "10m ago" },
                      { from: "System", subject: "Deployment successful", time: "1h ago" },
                      { from: "Sarah J.", subject: "Contract review", time: "3h ago" },
                    ].map((mail, i) => (
                      <div key={i} className="flex gap-3 items-center group cursor-pointer p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium text-white truncate">{mail.subject}</p>
                          <p className="text-xs text-white/50 truncate">From: {mail.from} • {mail.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 4: Upcoming Events */}
                <div className="bg-[#111]/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-white" /> {/* Placeholder for calendar icon */}
                    <span className="font-semibold text-lg">Upcoming events</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white line-clamp-2">Weekly Team Sync</p>
                        <p className="text-xs text-white/50">in 2 hours</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white line-clamp-2">Client Onboarding</p>
                        <p className="text-xs text-white/50">Tomorrow, 10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white line-clamp-2">Q1 Review</p>
                        <p className="text-xs text-white/50">Friday, 2:00 PM</p>
                      </div>
                    </div>
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
