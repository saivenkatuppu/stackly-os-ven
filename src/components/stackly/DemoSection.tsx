import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "./DemoModal";
import {
  Check, FolderOpen, Users, Activity, Shield,
  LayoutGrid, MessageCircle, Image as ImageIcon, Zap, Mail,
  Calendar, Edit3, GalleryVerticalEnd, Megaphone, Star, CheckSquare,
  ListTodo, Table as TableIcon
} from "lucide-react";

const features = [
  "Team folders and shared files",
  "User access control",
  "Activity and audit visibility",
  "Clean, branded workspace",
];

const DeckIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 2h8" />
    <path d="M6 6h12" />
    <rect x="3" y="10" width="18" height="12" rx="2" />
  </svg>
);

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
  { name: "Deck", icon: DeckIcon },
  { name: "Announcements", icon: Megaphone },
  { name: "Collections", icon: Star },
  { name: "Forms", icon: CheckSquare },
  { name: "Tasks", icon: ListTodo },
  { name: "Tables", icon: TableIcon },
];

export function DemoSection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <>
            <div className="relative z-10 text-center py-10">
              <h3 className="text-3xl font-semibold tracking-tight text-white">Good afternoon, User</h3>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 pb-8">
              <div className="bg-black/60 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <FolderOpen className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg text-white">Recommended files</span>
                </div>
                <div className="space-y-4 flex-1">
                  {[{ name: "Project_Specs_v2.docx", type: "DOC" }, { name: "Q4_Financials.xlsx", type: "XLS" }, { name: "Marketing_Assets.zip", type: "ZIP" }].map((file, i) => (
                    <div key={i} className="flex gap-3 items-center text-sm text-white/70 hover:text-white cursor-pointer group">
                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center font-bold text-[10px] group-hover:bg-primary/20 group-hover:text-primary transition-colors">{file.type}</div>
                      {file.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/60 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg text-white">Talk mentions</span>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex gap-3 items-center text-sm text-white/70"><div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-xs text-blue-400">JD</div>Product Sync <span className="text-[10px] text-green-400 animate-pulse ml-auto">Live</span></div>
                  <div className="flex gap-3 items-center text-sm text-white/70 opacity-60"><div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-xs text-purple-400">RS</div>Weekly Sync</div>
                </div>
              </div>
              <div className="bg-black/60 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg text-white">Important mail</span>
                </div>
                <div className="space-y-3 flex-1 text-sm text-white/70">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 cursor-pointer">Invitation: Board Meeting</div>
                  <div className="p-2 hover:bg-white/5 rounded-lg cursor-pointer">Security Alert: New Sign-in</div>
                </div>
              </div>
              <div className="bg-black/60 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg text-white">Upcoming events</span>
                </div>
                <div className="space-y-4 flex-1 text-xs text-white/60">
                  <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1" /><div><p className="text-white font-medium">Design Review</p><p>3:00 PM - 4:00 PM</p></div></div>
                  <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1" /><div><p className="text-white font-medium">Client Call</p><p>5:30 PM - 6:00 PM</p></div></div>
                </div>
              </div>
            </div>
          </>
        );
      case "Talk":
        return (
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-white">Messages</h3>
            <div className="space-y-3 max-w-4xl">
              {[
                { user: "Sarah Miller", msg: "The new design system looks great! Can we sync on the icons?", time: "10:24 AM", active: true },
                { user: "David Chen", msg: "I've uploaded the Q4 reports to the Finance folder.", time: "Yesterday", active: false },
                { user: "Alex Rivera", msg: "Don't forget the team lunch at 1 PM today.", time: "9:15 AM", active: false },
                { user: "System", msg: "Deployment to production successful. All systems green.", time: "8:00 AM", active: false }
              ].map((chat, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary group-hover:scale-105 transition-transform">
                    {chat.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-white">{chat.user}</span>
                      <span className="text-[11px] text-white/40">{chat.time}</span>
                    </div>
                    <p className="text-sm text-white/60 line-clamp-1">{chat.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Files":
        return (
          <div className="p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-white">Shared Files</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-xs h-9 text-white hover:bg-white/10">New Folder</Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-9 text-white">Upload File</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { name: "Brand Guidelines 2024", type: "Folder", items: "12 items" },
                { name: "Product Roadmap", type: "Folder", items: "5 items" },
                { name: "Legal Documents", type: "Folder", items: "28 items" },
                { name: "Customer Feedback.csv", type: "File", items: "2.4 MB" },
                { name: "Mockup_v02.fig", type: "File", items: "45 MB" },
                { name: "Meeting_Notes.pdf", type: "File", items: "1.2 MB" },
                { name: "Financial Plan", type: "Folder", items: "8 items" },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className={`p-3 rounded-xl ${item.type === 'Folder' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20'}`}>
                    {item.type === 'Folder' ? <FolderOpen className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium text-white truncate">{item.name}</p>
                    <p className="text-[11px] text-white/40">{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Photos":
        const dummyPhotos = [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
          "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        ];
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Recent Media</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {dummyPhotos.map((url, i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 overflow-hidden group cursor-pointer relative">
                  <img
                    src={url}
                    alt={`Media ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <ImageIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Activity":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Activity Stream</h3>
            <div className="space-y-1 max-w-3xl">
              {[
                { user: "You", action: "modified", target: "Project_Specs_v2.docx", time: "12m ago" },
                { user: "Sarah Miller", action: "uploaded", target: "New_Branding_Final.zip", time: "1h ago" },
                { user: "David Chen", action: "commented on", target: "Q4_Financials.xlsx", time: "3h ago" },
                { user: "Alex Rivera", action: "shared", target: "Legal Documents", time: "Yesterday" }
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 p-4 border-l border-white/10 hover:bg-white/5 rounded-r-xl transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/80">
                    <span className="font-semibold text-white">{activity.user}</span> {activity.action} <span className="font-semibold text-primary">{activity.target}</span>
                    <span className="block text-[11px] text-white/40 mt-1">{activity.time}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Mail":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Inbox</h3>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md">
              {[
                { from: "Security", subj: "Critical Update: Please review access logs", hint: "Someone logged in from Tokyo.", time: "2m ago", unread: true },
                { from: "Marketing", subj: "Newsletter Campaign - February Drafts", hint: "Check out the new orange buttons.", time: "1h ago", unread: true },
                { from: "Venturemond", subj: "Quarterly Performance Review Invitation", hint: "Please select a time slot.", time: "3h ago", unread: false },
                { from: "Support", subj: "Ticket #4092: Bug report on mobile view", hint: "The sidebar doesn't hide properly.", time: "5h ago", unread: false }
              ].map((mail, i) => (
                <div key={i} className={`flex items-center gap-4 p-5 border-b border-white/5 last:border-0 hover:bg-white/10 transition-colors cursor-pointer ${mail.unread ? 'bg-white/10' : ''}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${mail.unread ? 'bg-primary shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-transparent'}`} />
                  <div className="w-32 text-sm font-semibold truncate text-white">{mail.from}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate font-medium">{mail.subj}</p>
                    <p className="text-xs text-white/40 truncate">{mail.hint}</p>
                  </div>
                  <div className="text-[11px] text-white/30">{mail.time}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Contacts":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sarah Miller", role: "Product Design", email: "sarah.m@venturemond.com" },
                { name: "David Chen", role: "Engineering Lead", email: "d.chen@venturemond.com" },
                { name: "Alex Rivera", role: "Marketing Director", email: "alex.r@venturemond.com" },
                { name: "Julie Walters", role: "HR & People", email: "j.walters@venturemond.com" }
              ].map((contact, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold">{contact.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{contact.name}</p>
                    <p className="text-[11px] text-white/60 mb-0.5">{contact.role}</p>
                    <p className="text-[10px] text-white/30">{contact.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Calendar":
        return (
          <div className="p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-white">Calendar</h3>
              <div className="bg-white/5 rounded-xl p-1 flex gap-1 border border-white/10">
                <button className="px-3 py-1.5 text-xs text-white bg-primary rounded-lg font-medium">Day</button>
                <button className="px-3 py-1.5 text-xs text-white/60 hover:text-white transition-colors">Week</button>
                <button className="px-3 py-1.5 text-xs text-white/60 hover:text-white transition-colors">Month</button>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden">
              {[
                { time: "09:00", event: "Daily Standup", color: "bg-blue-500" },
                { time: "11:30", event: "Stackly OS Launch Sync", color: "bg-primary" },
                { time: "14:00", event: "Coffee Break with Sarah", color: "bg-orange-500" },
                { time: "16:00", event: "System Maintenance", color: "bg-red-500" }
              ].map((row, i) => (
                <div key={i} className="flex border-b border-white/5 last:border-0 h-20 group hover:bg-white/5 transition-colors">
                  <div className="w-20 p-4 text-xs text-white/40 font-mono border-r border-white/5 flex justify-end">{row.time}</div>
                  <div className="flex-1 p-3">
                    <div className={`${row.color} rounded-xl p-2.5 h-full border border-white/10 flex items-center shadow-lg`}>
                      <span className="text-xs font-semibold text-white">{row.event}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Notes":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">My Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Design Feedback", content: "The glassmorphism looks premium. Keep the blur at 8px.", date: "Feb 10" },
                { title: "Shopping List", content: "Coffee, Paper towels, New monitors, HDMI cables.", date: "Feb 12" },
                { title: "Meeting Recap", content: "Q1 goals: Expand to 4 new pilot customers.", date: "Today" },
                { title: "Ideas for UI", content: "Interactive Kanban, file previews on hover.", date: "Just now" }
              ].map((note, i) => (
                <div key={i} className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-2xl flex flex-col h-48 hover:bg-yellow-500/20 transition-all cursor-pointer group">
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-primary transition-colors">{note.title}</h4>
                  <p className="text-xs text-white/60 flex-1 leading-relaxed">{note.content}</p>
                  <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">{note.date}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Deck":
        return (
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-white">Project Deck</h3>
            <div className="flex gap-6 overflow-x-auto pb-6 flex-1">
              {[
                { title: "To Do", tasks: ["Finalize iconography", "Draft onboarding flow", "Security audit"] },
                { title: "In Progress", tasks: ["Interactive workspace mock", "Tailwind styling refinement"] },
                { title: "Review", tasks: ["Hero section wording refresh"] },
                { title: "Done", tasks: ["Initial project setup", "Theme configuration"] }
              ].map((col, i) => (
                <div key={i} className="w-80 flex-shrink-0 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 p-4 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-5 px-1">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary">{col.title}</h4>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-white/40">{col.tasks.length}</span>
                  </div>
                  <div className="space-y-3 overflow-y-auto flex-1 pr-1">
                    {col.tasks.map((task, j) => (
                      <div key={j} className="bg-white/5 border border-white/5 p-4 rounded-xl text-sm text-white/80 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer shadow-sm group">
                        {task}
                        <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
                          <div className="w-1/3 h-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Announcements":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">System Announcements</h3>
            <div className="space-y-4 max-w-4xl">
              {[
                { title: "Welcome to Stackly OS v1.0", body: "We are excited to share this early preview with your team. Explore the control-first workspace layers.", date: "Feb 1" },
                { title: "New Module: Interactive Tables", body: "You can now organize structured data directly in the workspace. Try the 'Tables' tab.", date: "Yesterday" }
              ].map((ann, i) => (
                <div key={i} className="bg-primary/5 border border-primary/20 p-6 rounded-2xl hover:bg-primary/10 transition-all">
                  <h4 className="text-lg font-semibold text-white mb-2">{ann.title}</h4>
                  <p className="text-sm text-white/60 mb-4 leading-relaxed">{ann.body}</p>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest">{ann.date}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Collections":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Project Alpha Resources", stats: "45 files • 3 collaborators", color: "from-blue-500/20" },
                { name: "Marketing Campaign Kits", stats: "12 files • 1 collaborator", color: "from-primary/20" },
                { name: "Legacy Archive", stats: "124 files • 0 collaborators", color: "from-orange-500/20" }
              ].map((col, i) => (
                <div key={i} className={`bg-gradient-to-br ${col.color} to-black/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col justify-between h-48 hover:-translate-y-1 transition-all cursor-pointer shadow-xl group`}>
                  <Star className="w-8 h-8 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{col.name}</h4>
                    <p className="text-xs text-white/40">{col.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Forms":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Workspace Forms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                { title: "Customer Feedback Survey", resp: "124", status: "Active" },
                { title: "Team Lunch Preference", resp: "12", status: "Closed" },
                { title: "Bug Report Form", resp: "4", status: "Active" }
              ].map((form, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex justify-between items-center hover:bg-white/5 transition-all cursor-pointer">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{form.title}</h4>
                    <p className="text-sm text-white/40">{form.resp} responses received</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${form.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/40'}`}>{form.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "Tasks":
        return (
          <div className="p-6 h-full max-w-4xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Pending Tasks</h3>
            <div className="space-y-2">
              {[
                { task: "Update Hero section copy", done: true, priority: "High" },
                { task: "Replace Deck icon with custom SVG", done: true, priority: "Medium" },
                { task: "Add dummy data for all 15 modules", done: false, priority: "Critical" },
                { task: "Review mobile UI responsiveness", done: false, priority: "Low" }
              ].map((task, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 cursor-pointer">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${task.done ? 'bg-primary border-primary' : 'border-white/20'}`}>
                    {task.done && <Check className="w-3.5 h-3.5 text-black font-bold" />}
                  </div>
                  <span className={`flex-1 text-sm ${task.done ? 'text-white/30 line-through' : 'text-white'}`}>{task.task}</span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{task.priority}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "Tables":
        return (
          <div className="p-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-white">Structured Data</h3>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 text-xs font-bold text-white/40 uppercase tracking-widest">Client Name</th>
                    <th className="p-4 text-xs font-bold text-white/40 uppercase tracking-widest">Platform Status</th>
                    <th className="p-4 text-xs font-bold text-white/40 uppercase tracking-widest">Users</th>
                    <th className="p-4 text-xs font-bold text-white/40 uppercase tracking-widest">Last Active</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { name: "Acme Corp", status: "Active", users: 154, active: "5m ago" },
                    { name: "Global Industries", status: "Pilot", users: 12, active: "1h ago" },
                    { name: "TechStart Inc", status: "Onboarding", users: 5, active: "Today" },
                    { name: "Venturemond", status: "Internal", users: 89, active: "Just now" },
                    { name: "Cyberdyne Systems", status: "Active", users: 230, active: "Yesterday" },
                    { name: "Massively Dynamic", status: "Pilot", users: 8, active: "2 days ago" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/10 transition-colors cursor-pointer last:border-0">
                      <td className="p-4 text-white font-medium">{row.name}</td>
                      <td className="p-4"><span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">{row.status}</span></td>
                      <td className="p-4 text-white/60">{row.users}</td>
                      <td className="p-4 text-white/40 text-xs">{row.active}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-12 h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              {navItems.find(i => i.name === activeTab)?.icon && (
                <div className="text-primary">
                  {(() => {
                    const Icon = navItems.find(i => i.name === activeTab)?.icon;
                    return Icon ? <Icon className="w-10 h-10" /> : null;
                  })()}
                </div>
              )}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white uppercase tracking-tight">{activeTab}</h3>
            <p className="text-white/60 max-w-md mx-auto leading-relaxed">
              This module is currently active in the workspace layer. Dummy data and integration layers are being populated for this preview.
            </p>
          </div>
        );
    }
  };

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
            <div className="bg-[url('/workspace_bg.jpg')] bg-cover bg-center rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative min-h-[750px] text-white font-sans flex flex-col">
              {/* Background Ambient Effect */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

              {/* Top Navigation Bar */}
              <div className="relative z-20 p-6 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md overflow-x-auto">
                <div className="flex items-center gap-6 text-sm font-medium text-white/70 min-w-max">
                  <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors mr-2" onClick={() => setActiveTab("Dashboard")}>
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <img src="/stackly_logo.png" alt="Stackly Logo" className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                  {/* Mock Nav Items */}
                  <div className="flex gap-5">
                    {navItems.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all group px-1 ${activeTab === item.name ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                      >
                        <item.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${activeTab === item.name ? 'scale-110' : ''}`} />
                        <span className={`text-[10px] font-bold tracking-widest uppercase ${activeTab === item.name ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/60 pl-6 border-l border-white/10 ml-6 hidden xl:flex">
                  <span className="hover:text-white cursor-pointer transition-colors text-sm">Search</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-primary border border-white/20" />
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden relative z-10">
                {/* Main Content Area - Now full width without sidebar */}
                <div className="flex-1 overflow-y-auto text-left relative">
                  {renderContent()}
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
