import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "./DemoModal";
import {
  Check, FolderOpen, Users, Activity, Shield,
  LayoutGrid, MessageCircle, Image as ImageIcon, Zap, Mail,
  Calendar, Edit3, GalleryVerticalEnd, Megaphone, Star, CheckSquare,
  ListTodo, Table as TableIcon, Send, Trash2, Settings, Flame, FileText, UserPlus, File, Lock, Home, Video, Plus, List, Mic, Search, Filter, Bell, ChevronLeft, Clock, HardDrive, Tag, Cloud, MoreHorizontal, FileImage, FileVideo, Share2, Workflow, Eye, Sparkles, SquareUser, X, Indent,
  LogOut, HelpCircle, Sliders, Accessibility, User, Menu
} from "lucide-react";
import stacklyLogo from "@/assets/stackly-logo.png";
import stacklyIcon from "@/assets/stackly-icon.png";
import mailMockup from "@/assets/mail_mockup.png";

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
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [talkSidebarView, setTalkSidebarView] = useState("main");
  const [activeFileFolder, setActiveFileFolder] = useState("All files");
  const [activeContact, setActiveContact] = useState("Jane Doe");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="flex flex-col h-full relative p-6 overflow-y-auto">
            <div className="relative z-10 text-center py-6">
              <h3 className="text-3xl font-semibold tracking-tight text-white/90">Hello, User</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">
              {/* Recommended files */}
              <div className="bg-[#121212]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex flex-col h-[500px]">
                <div className="flex items-center gap-3 mb-6">
                  <FolderOpen className="w-5 h-5 text-white" />
                  <span className="font-bold text-base text-white">Recommended files</span>
                </div>
                <div className="space-y-4 overflow-y-auto pr-1 flex-1">
                  {[
                    { name: "Project_Proposal.docx", meta: "Last updated 3 days ago", type: "doc" },
                    { name: "Team_Photo_2024.jpg", meta: "Last commented on December 24", type: "img" },
                    { name: "Brand_Logo_Pack.png", meta: "Last commented on December 22", type: "img" },
                    { name: "Q4_Metrics.csv", meta: "Shared with you December 22", type: "csv" },
                    { name: "Office_Layout.webp", meta: "Last commented on December 20", type: "img" },
                    { name: "Client_Contract_Final.docx", meta: "Shared with you December 5", type: "doc" },
                    { name: "Architecture_Diagram.pdf", meta: "Shared with you December 3", type: "doc" },
                  ].map((file, i) => (
                    <div key={i} className="flex gap-3 items-start group cursor-pointer">
                      <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center ${file.type === 'img' ? 'bg-transparent' : 'bg-white'}`}>
                        {file.type === 'img' ? (
                          <img src={`https://placehold.co/32x32/1a1a1a/FFF?text=${file.name[0]}`} alt="" className="w-8 h-8 rounded object-cover opacity-80" />
                        ) : (
                          <div className="w-full h-full bg-white rounded" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white/90 truncate group-hover:text-blue-400 transition-colors">{file.name}</p>
                        <p className="text-[10px] text-white/40 truncate">{file.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Talk mentions */}
              <div className="bg-[#121212]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex flex-col h-[500px]">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-5 h-5 text-white" />
                  <span className="font-bold text-base text-white">Talk mentions</span>
                </div>
                <div className="space-y-4 overflow-y-auto pr-1 flex-1">
                  {[
                    { name: "Marketing Strategy Sync", status: "Call in progress", active: true },
                    { name: "Engineering Handover", status: "Ended 25m ago", active: false },
                    { name: "Design Review Q1", status: "Ended 2h ago", active: false },
                    { name: "Client Onboarding", status: "Ended 4h ago", active: false },
                    { name: "Weekly Operations", status: "Ended yesterday", active: false },
                    { name: "Product Roadmap", status: "Ended 2 days ago", active: false }
                  ].map((call, i) => (
                    <div key={i} className="flex gap-3 items-start cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <div className={`w-4 h-4 border-2 ${call.active ? 'border-green-500 animate-pulse' : 'border-white/40'} rounded-full`} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5">{call.name}</p>
                        <p className={`text-xs ${call.active ? 'text-green-400 font-medium' : 'text-white/40'}`}>{call.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important mail */}
              <div className="bg-[#121212]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex flex-col h-[500px]">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="font-bold text-base text-white">Important mail</span>
                </div>
                <div className="space-y-4 overflow-y-auto pr-1 flex-1">
                  {[
                    { from: "HR Department", subject: "Annual Leave Policy Update", time: "1h ago", urgent: true },
                    { from: "Server Monitor", subject: "CPU Usage Alert: instance-01", time: "3h ago", urgent: true },
                    { from: "Client A", subject: "Re: Project Timeline Proposal", time: "5h ago", urgent: false },
                    { from: "Security Team", subject: "New Device Login Detected", time: "6h ago", urgent: true },
                    { from: "Billing", subject: "Invoice #3492 Paid", time: "Yesterday", urgent: false },
                    { from: "Newsletter", subject: "Tech Trends 2024", time: "2 days ago", urgent: false }
                  ].map((mail, i) => (
                    <div key={i} className="flex gap-3 items-start cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors group">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        <Mail className="w-4 h-4 text-white/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-sm font-bold text-white truncate">{mail.from}</p>
                          <span className="text-[10px] text-white/30">{mail.time}</span>
                        </div>
                        <p className="text-xs text-white/60 truncate group-hover:text-white/90">{mail.subject}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming events */}
              <div className="bg-[#121212]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all flex flex-col h-[500px]">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="font-bold text-base text-white">Upcoming events</span>
                </div>
                <div className="space-y-6 pl-2 overflow-y-auto pr-1 flex-1">
                  {[
                    { title: "Weekly Team Standup", time: "in 6 hours", color: "bg-blue-500" },
                    { title: "Client Project Review", time: "in 22 hours", color: "bg-purple-500" },
                    { title: "Design Systems Workshop", time: "Tomorrow, 2:00 PM", color: "bg-orange-500" },
                    { title: "Product Launch Party", time: "Fri, 6:00 PM", color: "bg-green-500" },
                    { title: "Quarterly Planning", time: "Mon, 9:00 AM", color: "bg-pink-500" },
                    { title: "Mentorship Session", time: "Tue, 4:00 PM", color: "bg-cyan-500" }
                  ].map((event, i) => (
                    <div key={i} className="flex gap-4 items-start relative group cursor-pointer">
                      <div className={`w-3 h-3 rounded-full ${event.color} shrink-0 mt-1.5 shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                      <div>
                        <p className="text-sm font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors">{event.title}</p>
                        <p className="text-xs text-white/40">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customize Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <Button className="bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 h-9 gap-2 text-xs font-semibold px-4 shadow-xl backdrop-blur-md">
                <Edit3 className="w-3.5 h-3.5" /> Customize
              </Button>
            </div>
          </div>
        );
      case "Talk":
        return (
          <div className="p-0 h-full w-full flex overflow-hidden">
            {/* Talk Sidebar */}
            <div className="w-64 bg-black/40 backdrop-blur-md border-r border-white/5 p-4 flex flex-col hidden md:flex">
              {talkSidebarView === 'main' ? (
                <>
                  <div className="mb-4 relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-white/40" />
                    <input type="text" placeholder="Search ..." className="w-full bg-black/20 text-white text-sm pl-9 pr-8 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500/50" />
                    <div className="absolute right-2 top-2 flex gap-1">
                      <Filter className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
                    </div>
                  </div>

                  <div className="space-y-1 mb-6">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600 text-white font-medium cursor-pointer">
                      <Home className="w-4 h-4" /> <span>Home</span>
                    </div>
                    <div
                      onClick={() => setTalkSidebarView('threads')}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> <span>Threads</span>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-1 -mx-2 px-2">
                    {[
                      { name: "Note to self", sub: "System created the conversation", time: "", icon: Edit3, active: false },
                      { name: "Product Sync", sub: "Voice call ended • 45m", time: "5m", icon: Video, active: false, alert: true },
                      { name: "Engineering", sub: "Deployment to staging successful", time: "15m", icon: Users, active: false },
                      { name: "Design Team", sub: "Uploaded 'Dashboard_v2.fig'", time: "42m", icon: Users, active: false },
                      { name: "Marketing", sub: "Q2 planning slides attached", time: "1h", icon: Users, active: false },
                      { name: "Sales-Enterprise", sub: "New lead from website", time: "3h", icon: Users, active: false },
                      { name: "Customer Success", sub: "Ticket #4049 resolved", time: "5h", icon: Users, active: false },
                      { name: "General", sub: "Lunch @ 1pm anyone?", time: "1d", icon: Users, active: false },
                    ].map((chat, i) => (
                      <div key={i} className="flex gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                        <div className="relative mt-1">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <chat.icon className="w-4 h-4 text-white/70" />
                          </div>
                          {chat.alert && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#121212]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="text-sm font-semibold text-white truncate">{chat.name}</p>
                            {chat.time && <span className="text-[10px] text-blue-400 font-bold">{chat.time}</span>}
                          </div>
                          <p className="text-xs text-white/40 truncate">{chat.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-2 mt-2 text-white/50 hover:text-white cursor-pointer text-xs">
                      <Settings className="w-3.5 h-3.5" /> App settings
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={() => setTalkSidebarView('main')}
                    className="flex items-center gap-2 mb-6 text-white/50 hover:text-white cursor-pointer text-sm transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to conversations
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 px-1">Threads</h3>

                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <MessageCircle className="w-16 h-16 text-white/20 mb-4" />
                    <h4 className="text-base font-bold text-white mb-2">No followed threads</h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Subscribe to an existing thread or start your own.
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 px-2 mt-2 text-white/50 hover:text-white cursor-pointer text-xs">
                      <Settings className="w-3.5 h-3.5" /> App settings
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Talk Main Content */}
            <div className="flex-1 bg-[#09090b] p-6 overflow-y-auto">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">Hello, User</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  <Video className="w-4 h-4" /> Start meeting now
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2">
                  <Plus className="w-4 h-4" /> Create a new conversation
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2">
                  <List className="w-4 h-4" /> Join open conversations
                </Button>
                <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 gap-2">
                  <Mic className="w-4 h-4" /> Check devices
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Schedule meetings card */}
                <div className="col-span-1 lg:col-span-2 bg-[#121212] rounded-2xl border border-white/5 p-0 overflow-hidden flex flex-col md:flex-row">
                  <div className="w-full md:w-64 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract 3D shape simulation */}
                    <div className="w-32 h-32 rounded-full border-[12px] border-white/20 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-300/30 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-800/30 rounded-full blur-xl" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-white mb-2">Schedule meetings</h4>
                    <p className="text-sm text-white/80 font-medium mb-1">You don't have any upcoming meetings</p>
                    <p className="text-sm text-white/50 mb-6">Schedule a meeting from your calendar. A Talk conversation needs to be set as location to show up here.</p>
                    <Button variant="outline" className="w-fit bg-transparent border-white/10 text-white hover:bg-white/5 gap-2">
                      <Calendar className="w-4 h-4" /> Open calendar
                    </Button>
                  </div>
                </div>

                {/* Unread mentions card */}
                <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                  <div className="flex-1 flex flex-col md:flex-row">
                    <div className="w-full md:w-40 bg-gradient-to-br from-blue-400 to-blue-500 p-6 flex items-center justify-center relative">
                      <div className="text-8xl font-black text-white/20 select-none">@</div>
                    </div>
                    <div className="flex-1 p-6">
                      <h4 className="text-base font-bold text-white mb-2">Unread mentions</h4>
                      <p className="text-xs text-white/60 leading-relaxed">Messages where you were mentioned will show up here. You can mention people by typing @ followed by their name</p>
                    </div>
                  </div>
                </div>

                {/* Message reminders card */}
                <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                  <div className="flex-1 flex flex-col md:flex-row">
                    <div className="w-full md:w-40 bg-gradient-to-br from-blue-400 to-blue-500 p-6 flex items-center justify-center relative">
                      <Bell className="w-16 h-16 text-white/30" />
                    </div>
                    <div className="flex-1 p-6">
                      <h4 className="text-base font-bold text-white mb-2">Message reminders</h4>
                      <p className="text-xs text-white/60 leading-relaxed">Set a reminder on a message to be notified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Files":
        return (
          <div className="p-0 h-full w-full flex overflow-hidden">
            {/* Files Sidebar */}
            <div className="w-64 bg-black/40 backdrop-blur-md border-r border-white/5 p-4 flex flex-col hidden md:flex">
              <div className="mb-4 relative">
                <input type="text" placeholder="Search here ..." className="w-full bg-black/40 text-white text-xs pl-3 pr-8 py-2 rounded-lg border border-white/5 focus:outline-none focus:border-blue-500/50" />
                <Search className="absolute right-3 top-2 w-3.5 h-3.5 text-white/40" />
              </div>

              <div className="space-y-0.5 mb-6 flex-1 overflow-y-auto">
                {[
                  { name: 'All files', icon: FolderOpen },
                  { name: 'Personal files', icon: UserPlus },
                  { name: 'Recent', icon: Clock },
                  { name: 'Favorites', icon: Star },
                  { name: 'Shares', icon: Share2 },
                  { name: 'Team folders', icon: Users },
                  { name: 'Tags', icon: Tag },
                  { name: 'External storage', icon: HardDrive },
                  { name: 'Folder tree', icon: FolderOpen },
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => setActiveFileFolder(item.name)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition-all ${activeFileFolder === item.name
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.name === 'Shares' && <ChevronLeft className="w-3 h-3 ml-auto rotate-180 opacity-50" />}
                    {item.name === 'Folder tree' && <ChevronLeft className="w-3 h-3 ml-auto rotate-180 opacity-50" />}
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-1 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  <Trash2 className="w-4 h-4" />
                  <span>Deleted files</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/50">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border border-white/30" />
                  </div>
                  <span>49.1 MB of 6.8 GB used</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Files settings</span>
                </div>
              </div>
            </div>

            {/* Files Main Content */}
            <div className="flex-1 bg-black/20 backdrop-blur-sm overflow-y-auto flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#1a1f1c]/95 z-10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{activeFileFolder}</h3>
                  <Button size="sm" className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 gap-1 h-8">
                    <Plus className="w-3.5 h-3.5" /> New
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-white/60">
                  <div className="flex items-center gap-1 hover:text-white cursor-pointer"><FileText className="w-3.5 h-3.5" /> Type</div>
                  <div className="flex items-center gap-1 hover:text-white cursor-pointer text-white"><Calendar className="w-3.5 h-3.5" /> Modified</div>
                  <div className="flex items-center gap-1 hover:text-white cursor-pointer"><Users className="w-3.5 h-3.5" /> People</div>
                  <div className="w-px h-4 bg-white/10 mx-2" />
                  <LayoutGrid className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>

              {/* File List */}
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 text-xs text-white/40">
                      <th className="p-3 pl-6 w-8 font-normal"><div className="w-4 h-4 border border-white/20 rounded" /></th>
                      <th className="p-3 font-normal">Name</th>
                      <th className="p-3 font-normal w-24">Size</th>
                      <th className="p-3 font-normal w-32">Modified</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {(() => {
                      // Dummy data generator based on active folder
                      const getFiles = (folder) => {
                        const common = [
                          { name: "Templates", type: "folder", size: "22.4 MB", date: "December 1", shared: true },
                          { name: "Q1_Financial_Report.pdf", type: "pdf", size: "262 KB", date: "3 weeks ago", shared: true },
                          { name: "System_Architecture_v2.pdf", type: "pdf", size: "78 KB", date: "December 3", shared: true, owner: "User" },
                          { name: "Dashboard_Mockup.png", type: "img", size: "49 KB", date: "December 1", shared: true },
                          { name: "Product_Demo_Walkthrough.mp4", type: "video", size: "3.8 MB", date: "December 1", shared: true },
                          { name: "User_Manual_2024.pdf", type: "pdf", size: "14.6 MB", date: "December 1", shared: true },
                          { name: "Project_Timeline.pdf", type: "pdf", size: "216 KB", date: "4 weeks ago", shared: true },
                          { name: "ReadMe.md", type: "file", size: "< 1 KB", date: "December 1", shared: true },
                          { name: "Migration_Strategy.pdf", type: "pdf", size: "954 KB", date: "December 1", shared: true },
                          { name: "survey_results.csv", type: "file", size: "2 KB", date: "December 22", shared: true, owner: "User" },
                          { name: "License_Keys.md", type: "file", size: "3 KB", date: "December 1", shared: true },
                          { name: "Technical_Specs_Draft.docx", type: "doc", size: "30 KB", date: "December 5", shared: true, owner: "User" },
                        ];

                        // Simple randomization/filtering for demo purposes
                        if (folder === 'Recent') return common.slice(1, 6);
                        if (folder === 'Favorites') return [common[0], common[2], common[5]];
                        if (folder === 'Personal files') return common.slice(5);
                        if (folder === 'Shares') return common.filter(f => f.owner === 'User');
                        return common;
                      };

                      return getFiles(activeFileFolder).map((file, i) => (
                        <tr key={i} className="group hover:bg-white/5 cursor-pointer border-b border-white/5 last:border-0 transition-colors">
                          <td className="p-3 pl-6"><div className="w-4 h-4 border border-white/20 rounded group-hover:border-white/50" /></td>
                          <td className="p-3">
                            <div className="flex items-center justify-between pr-4">
                              <div className="flex items-center gap-3">
                                {file.type === 'folder' && <FolderOpen className="w-5 h-5 text-blue-400 fill-blue-400/20" />}
                                {file.type === 'pdf' && <FileText className="w-5 h-5 text-red-400" />}
                                {file.type === 'img' && <FileImage className="w-5 h-5 text-purple-400" />}
                                {file.type === 'video' && <FileVideo className="w-5 h-5 text-pink-400" />}
                                {file.type === 'file' && <File className="w-5 h-5 text-white/50" />}
                                {file.type === 'doc' && <FileText className="w-5 h-5 text-blue-300" />}
                                <span className="text-white/80 group-hover:text-white">{file.name}</span>
                              </div>
                              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                {file.shared && !file.owner && <div className="text-blue-400"><UserPlus className="w-4 h-4" /></div>}
                                {file.owner && (
                                  <div className="flex items-center gap-1 text-blue-400 text-xs">
                                    <span>Shared</span>
                                    <img src="https://github.com/shadcn.png" className="w-5 h-5 rounded-full border border-black" />
                                  </div>
                                )}
                                <MoreHorizontal className="w-4 h-4 text-white/40 hover:text-white" />
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/40 text-xs">{file.size}</td>
                          <td className="p-3 text-white/40 text-xs">{file.date}</td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "Photos":
        const dummyPhotos = [
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
          "https://images.unsplash.com/photo-1531297461136-82lw8b2a?w=800&q=80", // Replaced broken image
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
          "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
          "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=800&q=80",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
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
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80";
                    }}
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
          <div className="p-0 h-full w-full flex overflow-hidden">
            {/* Activity Sidebar */}
            <div className="w-64 bg-black/40 backdrop-blur-md border-r border-white/5 p-4 flex flex-col hidden md:flex">
              <Button className="w-full justify-start gap-2 mb-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                <Activity className="w-4 h-4" /> All activities
              </Button>
              <div className="space-y-1">
                {[
                  { name: 'By you', icon: Users },
                  { name: 'By others', icon: UserPlus },
                  { name: 'Teams', icon: Users },
                  { name: 'Favorites', icon: Star },
                  { name: 'File changes', icon: FileText },
                  { name: 'Security', icon: Lock },
                  { name: 'File shares', icon: UserPlus },
                  { name: 'Calendar', icon: Calendar },
                  { name: 'Tasks', icon: CheckSquare },
                  { name: 'Comments', icon: MessageCircle },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="flex-1 bg-black/20 backdrop-blur-sm overflow-y-auto p-8">
              <div className="flex items-center gap-4 mb-8">
                <Activity className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">All activities</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-6">Today</h4>
                <div className="space-y-6 relative border-l border-white/10 ml-3 pl-8">
                  {[
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "9 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "19 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "24 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "34 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "44 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "49 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "59 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "69 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "78 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "84 minutes ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "2 hours ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "2 hours ago" },
                    { text: "You have been added as member to group:Engineering", by: "Circles", time: "2 hours ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -ml-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-white/90 font-medium">
                          {item.text.split('group:Engineering').map((part, index, arr) => (
                            <span key={index}>
                              {part}
                              {index < arr.length - 1 && <span className="text-white font-bold">group:Engineering</span>}
                            </span>
                          ))}
                          <span className="text-white/50 mx-2">by</span>
                          <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-xs text-white">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                            {item.by}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-white/40 font-mono">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "Mail":
        return (
          <div className="p-0 h-full w-full flex overflow-hidden">
            {/* Mail Sidebar */}
            <div className="w-64 bg-black/40 backdrop-blur-md border-r border-white/5 p-4 flex flex-col hidden md:flex">
              <Button className="w-full justify-start gap-2 mb-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20">
                <Edit3 className="w-4 h-4" /> New message
              </Button>

              <div className="space-y-1">
                {[
                  { id: 'Inbox', icon: Mail, count: 32 },
                  { id: 'Favorites', icon: Star },
                  { id: 'Drafts', icon: Edit3 },
                  { id: 'Sent', icon: Send },
                  { id: 'Junk', icon: Flame },
                  { id: 'Trash', icon: Trash2 },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveFolder(item.id)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all ${activeFolder === item.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.id}</span>
                    {item.count && <span className="ml-auto bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{item.count}</span>}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest px-3 mb-3">Labels</div>
                <div className="space-y-1">
                  {['Work', 'Personal', 'Urgent'].map((label) => (
                    <div key={label} className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${label === 'Work' ? 'bg-white/20 group-hover:bg-white' :
                        label === 'Personal' ? 'bg-white/20 group-hover:bg-white' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                        }`} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Mail settings</span>
                </div>
              </div>
            </div>

            {/* Mail List */}
            <div className="flex-1 bg-black/20 backdrop-blur-sm overflow-y-auto">
              <div className="p-5 border-b border-white/5 flex justify-between items-center sticky top-0 bg-[#1a1f1c]/95 z-10 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-white">{activeFolder}</h3>
                <div className="flex gap-2 text-white/60">
                  <div className="p-2 hover:bg-white/10 rounded-full cursor-pointer"><Users className="w-4 h-4" /></div>
                  <div className="p-2 hover:bg-white/10 rounded-full cursor-pointer"><Activity className="w-4 h-4" /></div>
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { from: "Security", subject: "Critical Update: Please review access logs", preview: "Someone logged in from Tokyo. If this wasn't you, please review your activity immediately.", time: "2m ago", unread: true, color: "bg-green-500" },
                  { from: "Marketing", subject: "Newsletter Campaign - February Drafts", preview: "Check out the new orange buttons we added to the CTA section.", time: "1h ago", unread: true, color: "bg-green-500" },
                  { from: "Stackly OS Team", subject: "Quarterly Performance Review Invitation", preview: "Please select a time slot for your review. We have slots available next Tuesday.", time: "3h ago", unread: false, color: null },
                  { from: "Support", subject: "Ticket #4092: Bug report on mobile view", preview: "The sidebar doesn't hide properly on iPhone 15 Pro Max. Can you check?", time: "5h ago", unread: false, color: null },
                  { from: "Platform", subject: "Deploy your project to Stackly", preview: "Connect your Git repo with one click and get global CDNs.", time: "Jan 15", unread: false, color: "bg-blue-500" },
                  { from: "System", subject: "User Account Archived", preview: "The requested account has been successfully archived.", time: "Jan 10", unread: false, color: null },
                  { from: "Stackly Lead", subject: "[Development] New design system tokens", preview: "We've updated the primary colors. Please run a pull request.", time: "Jan 20", unread: true, color: "bg-blue-500" },
                ].map((mail, i) => (
                  <div key={i} className={`p-4 hover:bg-white/5 cursor-pointer group transition-colors flex gap-4 ${mail.unread ? 'bg-white/[0.02]' : ''}`}>
                    <div className="mt-1.5 flex-shrink-0">
                      <div className={`w-2.5 h-2.5 rounded-full ${mail.color ? mail.color : 'bg-transparent border border-white/20'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className={`text-sm ${mail.unread ? 'font-bold text-white' : 'font-semibold text-white/80'}`}>{mail.from}</span>
                        <span className="text-[11px] text-white/40">{mail.time}</span>
                      </div>
                      <h4 className={`text-sm mb-1 truncate ${mail.unread ? 'text-white font-medium' : 'text-white/70'}`}>{mail.subject}</h4>
                      <p className="text-xs text-white/40 truncate">{mail.preview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Contacts":
        return (
          <div className="p-0 h-full w-full flex overflow-hidden">
            {/* Contacts Sidebar */}
            <div className="w-72 bg-black/40 backdrop-blur-md border-r border-white/5 p-4 flex flex-col hidden md:flex">
              <Button className="w-full justify-center gap-2 mb-6 bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 font-semibold h-10">
                <Plus className="w-4 h-4" /> New contact
              </Button>

              <div className="space-y-1 mb-6">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600 text-white font-medium cursor-pointer justify-between">
                  <div className="flex items-center gap-3"><Users className="w-4 h-4" /> <span>All contacts</span></div>
                  <span className="text-xs font-bold bg-black/20 px-1.5 py-0.5 rounded-md">9</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors">
                  <Workflow className="w-4 h-4" /> <span>Organization chart</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors justify-between">
                  <div className="flex items-center gap-3"><Users className="w-4 h-4 opacity-50" /> <span>Not grouped</span></div>
                  <span className="text-xs font-bold bg-white/5 px-1.5 py-0.5 rounded-md text-white/40">9</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between px-3 mb-2 cursor-pointer hover:text-white text-white/50">
                  <span className="text-xs font-bold uppercase tracking-widest">Contact groups</span>
                  <Plus className="w-3 h-3" />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between px-3 mb-2 cursor-pointer hover:text-white text-white/50">
                  <span className="text-xs font-bold uppercase tracking-widest">Teams</span>
                  <Plus className="w-3 h-3" />
                </div>
                <div className="mt-2 pl-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors justify-between group">
                    <div className="flex items-center gap-3"><Users className="w-3.5 h-3.5" /> <span className="text-sm">Engineering</span></div>
                    <span className="text-[10px] font-bold bg-white/5 px-1.5 py-0.5 rounded-md text-white/40 group-hover:bg-white/10 group-hover:text-white">6</span>
                  </div>
                </div>
                <p className="px-3 mt-4 text-[10px] text-white/30 leading-relaxed">
                  Teams are groups of people that you can create yourself and with whom you can share data. They can be made up of other accounts or groups.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Contacts settings</span>
                </div>
              </div>
            </div>

            {/* Contacts List & Main View */}
            <div className="flex-1 bg-black/20 backdrop-blur-sm flex">
              {/* List Column */}
              <div className="w-80 border-r border-white/5 flex flex-col bg-[#09090b]/50">
                <div className="p-4 border-b border-white/5">
                  <div className="relative">
                    <input type="text" placeholder="Search contacts ..." className="w-full bg-black/40 text-white text-xs pl-3 pr-8 py-2.5 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500/50" />
                    <Search className="absolute right-3 top-2.5 w-3.5 h-3.5 text-white/40" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {[
                    { name: "Jane Doe", email: "jane@example.com", letter: "J", color: "bg-pink-500", active: true },
                    { name: "John Smith", email: "john.s@example.com", letter: "J", color: "bg-blue-500", active: false },
                    { name: "Robert Johnson", email: "robert@example.com", letter: "R", color: "bg-purple-500", active: false },
                    { name: "Emily Davis", email: "emily.d@example.com", letter: "E", color: "bg-orange-500", active: false },
                    { name: "Michael Brown", email: "michael@example.com", letter: "M", color: "bg-green-500", active: false },
                    { name: "Sarah Wilson", email: "sarah@example.com", letter: "S", color: "bg-yellow-500", active: false },
                    { name: "David Miller", email: "david@example.com", letter: "D", color: "bg-red-500", active: false },
                    { name: "Lisa Anderson", email: "lisa@example.com", letter: "L", color: "bg-cyan-500", active: false },
                    { name: "Operations Team", email: "Ops Team", letter: "O", color: "bg-[#1a1a1a] text-blue-400 border border-blue-500/30", isTeam: true, active: false },
                  ].map((contact, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveContact(contact.name)}
                      className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-all ${activeContact === contact.name ? 'bg-blue-600 shadow-md' : 'hover:bg-white/5'}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${contact.color}`}>
                        {contact.letter}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${activeContact === contact.name ? 'text-white' : 'text-white/90'}`}>{contact.name}</p>
                        <p className={`text-xs truncate ${activeContact === contact.name ? 'text-blue-200' : 'text-white/40'}`}>{contact.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Detail View */}
              <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 text-center relative">
                {(() => {
                  const selected = [
                    { name: "Jane Doe", email: "jane@example.com", letter: "J", color: "bg-pink-500" },
                    { name: "John Smith", email: "john.s@example.com", letter: "J", color: "bg-blue-500" },
                    { name: "Robert Johnson", email: "robert@example.com", letter: "R", color: "bg-purple-500" },
                    { name: "Emily Davis", email: "emily.d@example.com", letter: "E", color: "bg-orange-500" },
                    { name: "Michael Brown", email: "michael@example.com", letter: "M", color: "bg-green-500" },
                    { name: "Sarah Wilson", email: "sarah@example.com", letter: "S", color: "bg-yellow-500" },
                    { name: "David Miller", email: "david@example.com", letter: "D", color: "bg-red-500" },
                    { name: "Lisa Anderson", email: "lisa@example.com", letter: "L", color: "bg-cyan-500" },
                    { name: "Operations Team", email: "Ops Team", letter: "O", color: "bg-[#1a1a1a] text-blue-400 border border-blue-500/30", isTeam: true },
                  ].find(c => c.name === activeContact) || { name: "Jane Doe", email: "jane@example.com", letter: "J", color: "bg-pink-500" };

                  return (
                    <>
                      <div className="absolute top-8 right-8 flex gap-2">
                        <div className="p-2 hover:bg-white/10 rounded-full cursor-pointer text-white/60 hover:text-white transition-colors">
                          <Eye className="w-5 h-5" />
                        </div>
                        <div className="p-2 hover:bg-white/10 rounded-full cursor-pointer text-white/60 hover:text-white transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </div>
                      </div>

                      <div className={`w-32 h-32 rounded-full ${selected.color} flex items-center justify-center text-5xl font-bold text-white mb-6 shadow-2xl`}>
                        {selected.letter}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selected.name}</h2>
                      <p className="text-lg text-white/50 mb-8">{selected.email}</p>

                      <div className="space-y-1 text-center">
                        <p className="text-white/40 text-sm">Last modified a minute ago</p>
                      </div>
                    </>
                  );
                })()}
              </div>
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
                { time: "10:00", event: "Product Strategy Review", color: "bg-purple-500" },
                { time: "11:30", event: "Stackly OS Launch Sync", color: "bg-primary" },
                { time: "13:00", event: "Lunch with Team", color: "bg-green-500" },
                { time: "14:00", event: "Coffee Break with Sarah", color: "bg-orange-500" },
                { time: "15:00", event: "Client Call: TechStart", color: "bg-blue-500" },
                { time: "16:00", event: "System Maintenance", color: "bg-red-500" },
                { time: "17:30", event: "Wrap up & Planning", color: "bg-gray-500" }
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
                { title: "Design Feedback", content: "The glassmorphism looks premium. Keep the blur at 8px. Need to check contrast ratios on dark mode.", date: "Feb 10" },
                { title: "Shopping List", content: "Coffee, Paper towels, New monitors, HDMI cables, Standing desk converter.", date: "Feb 12" },
                { title: "Meeting Recap", content: "Q1 goals: Expand to 4 new pilot customers. Focus on enterprise features first.", date: "Today" },
                { title: "Ideas for UI", content: "Interactive Kanban, file previews on hover, drag and drop for everything.", date: "Just now" },
                { title: "Devops Tasks", content: "Check AWS bill, rotate keys, update CI/CD pipeline.", date: "Yesterday" },
                { title: "Book Recommendations", content: "The Mom Test, Zero to One, Clean Code.", date: "Last week" },
                { title: "Project Alpha", content: "Don't forget to update the roadmap before Monday's sync.", date: "Feb 8" },
                { title: "Gift Ideas", content: "Mechanical keyboard for designers, new swag for the team.", date: "Feb 5" }
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
                { title: "To Do", tasks: ["Finalize iconography", "Draft onboarding flow", "Security audit", "Mobile response check", "Update dependencies"] },
                { title: "In Progress", tasks: ["Interactive workspace mock", "Tailwind styling refinement", "API Integration", "User testing script"] },
                { title: "Review", tasks: ["Hero section wording refresh", "Accessibility audit", "Performance optimization"] },
                { title: "Done", tasks: ["Initial project setup", "Theme configuration", "Database schema", "Auth flow"] }
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
                { title: "Welcome to Stackly OS v1.0", body: "We are excited to share this early preview with your team. Explore the control-first workspace layers. Please report any bugs you find.", date: "Feb 1" },
                { title: "New Module: Interactive Tables", body: "You can now organize structured data directly in the workspace. Try the 'Tables' tab for all your CRM needs.", date: "Yesterday" },
                { title: "Maintenance Window", body: "Scheduled maintenance for this weekend. Expect downtime between 2am and 4am UTC for database upgrades.", date: "Feb 15" },
                { title: "Team Outing Photos", body: "Check out the Photos module for pictures from last week's retreat! Great job everyone on the ropes course.", date: "Feb 10" },
                { title: "Security Policy Update", body: "We have updated our password policy. Please review the new guidelines in the company handicap.", date: "Jan 28" }
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
                { name: "Legacy Archive", stats: "124 files • 0 collaborators", color: "from-orange-500/20" },
                { name: "Design Assets 2024", stats: "230 files • 8 collaborators", color: "from-purple-500/20" },
                { name: "Legal Documents", stats: "15 files • 2 collaborators", color: "from-red-500/20" },
                { name: "Financial Reports", stats: "56 files • 4 collaborators", color: "from-green-500/20" }
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
                { title: "Bug Report Form", resp: "4", status: "Active" },
                { title: "Feature Request", resp: "89", status: "Active" },
                { title: "Employee Satisfaction", resp: "45", status: "Draft" },
                { title: "Event Registration", resp: "210", status: "Closed" }
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
          <div className="h-full w-full overflow-y-auto">
            <div className="p-6 h-full max-w-4xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Pending Tasks</h3>
              <div className="space-y-2">
                {[
                  { task: "Update Hero section copy", done: true, priority: "High" },
                  { task: "Replace Deck icon with custom SVG", done: true, priority: "Medium" },
                  { task: "Add dummy data for all 15 modules", done: false, priority: "Critical" },
                  { task: "Review mobile UI responsiveness", done: false, priority: "Low" },
                  { task: "Fix navigation tap targets", done: true, priority: "High" },
                  { task: "Update color palette in Tailwind config", done: false, priority: "Medium" },
                  { task: "Write unit tests for Auth component", done: false, priority: "High" },
                  { task: "Prepare demo script for Monday", done: false, priority: "Critical" }
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
          </div>
        );
      case "Tables":
        return (
          <div className="h-full w-full overflow-y-auto">
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
                      { name: "Stackly OS", status: "Internal", users: 89, active: "Just now" },
                      { name: "Cyberdyne Systems", status: "Active", users: 230, active: "Yesterday" },
                      { name: "Massively Dynamic", status: "Pilot", users: 8, active: "2 days ago" },
                      { name: "Hooli", status: "Churned", users: 0, active: "1 month ago" },
                      { name: "Pied Piper", status: "Active", users: 4, active: "3h ago" },
                      { name: "Initech", status: "Pilot", users: 25, active: "5h ago" },
                      { name: "Umbrella Corp", status: "Active", users: 1200, active: "1m ago" }
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
          </div>
        );
      default:
        return (
          <div className="h-full w-full overflow-y-auto">
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
          </div>
        );
      case "Apps":
        return (
          <div className="h-full w-full bg-[#09090b] flex flex-col">
            <div className="flex items-center justify-between px-6 h-14 border-b border-white/5 shrink-0 bg-[#09090b]">
              <div className="flex items-center gap-4">
                <h3 className="text-base font-semibold text-white">App bundles</h3>
              </div>
              <Button
                variant="ghost"
                className="h-9 gap-2 bg-[#27272a] text-white hover:bg-[#27272a] hover:text-white transition-colors border border-white/10"
                onClick={() => setActiveTab("Dashboard")}
              >
                Close
              </Button>
            </div>

            <div className="p-8 overflow-y-auto flex-1">
              <div className="space-y-10 max-w-5xl">
                {/* Enterprise Bundle */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 h-8">
                    <h4 className="text-lg font-bold text-white">Enterprise bundle</h4>
                    <Button variant="outline" className="bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 h-8 text-xs font-semibold px-3">
                      Download and enable all
                    </Button>
                  </div>
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {[
                      { name: "Auditing / Logging", ver: "1.22.0", featured: true, action: "Enable" },
                      { name: "File access control", ver: "3.0.2", featured: true, action: "Download and enable" },
                      { name: "Files automated tagging", ver: "3.0.3", featured: true, action: "Download and enable" },
                      { name: "LDAP user and group backend", ver: "1.23.0", featured: true, action: "Enable" },
                      { name: "Retention", ver: "3.0.0", featured: true, action: "Download and enable" },
                      { name: "SSO & SAML authentication", ver: "7.1.3", featured: true, action: "Download and enable" },
                      { name: "Terms of service", ver: "4.6.1", featured: false, action: "Download and enable" },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          <Settings className="w-4 h-4 text-white/40" />
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24 flex justify-end">
                            {app.featured && <span className="text-[10px] border border-white/20 rounded px-1.5 py-0.5 text-white/60">✓ Featured</span>}
                          </div>
                          <Button className={`h-8 px-4 text-xs font-medium w-[160px] ${app.action === 'Enable' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'}`}>
                            {app.action}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hub Bundle */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-lg font-bold text-white">Hub bundle</h4>
                    <Button variant="outline" className="bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 h-8 text-xs font-semibold px-3">
                      Download and enable all
                    </Button>
                  </div>
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {[
                      { name: "Calendar", ver: "6.1.5", featured: true, type: "update" },
                      { name: "Collabora Online - Built-in CODE Server", ver: "25.4.802", featured: false, action: "Download and enable" },
                      { name: "Contacts", ver: "8.3.1", featured: true, type: "disable" },
                      { name: "Mail", ver: "5.6.9", featured: true, type: "update" },
                      { name: "Stackly OS Office", ver: "9.0.2", featured: true, action: "Download and enable" },
                      { name: "Talk", ver: "22.0.7", featured: true, type: "update" },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          {app.name.includes("Calendar") ? <Calendar className="w-4 h-4 text-white/40" /> :
                            app.name.includes("Mail") ? <Mail className="w-4 h-4 text-white/40" /> :
                              app.name.includes("Talk") ? <MessageCircle className="w-4 h-4 text-white/40" /> :
                                <Settings className="w-4 h-4 text-white/40" />}
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24 flex justify-end">
                            {app.featured && <span className="text-[10px] border border-white/20 rounded px-1.5 py-0.5 text-white/60">✓ Featured</span>}
                          </div>
                          <div className="w-[160px] flex justify-end gap-2">
                            {app.type === 'update' ? (
                              <>
                                <Button className="h-8 px-3 text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 flex-1">
                                  Update to {app.name === "Calendar" ? "6.1.6" : app.name === "Mail" ? "5.6.10" : "22.0.8"}
                                </Button>
                                <Button className="h-8 px-3 text-xs font-medium bg-[#1a1f1c] hover:bg-white/5 text-white/60">Disable</Button>
                              </>
                            ) : app.type === 'disable' ? (
                              <Button className="h-8 px-3 text-xs font-medium bg-[#1a1f1c] hover:bg-white/5 text-white/60 w-full">Disable</Button>
                            ) : (
                              <Button className="h-8 px-3 text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 w-full">
                                {app.action}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Groupware Bundle */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-lg font-bold text-white">Groupware bundle</h4>
                    <Button variant="outline" className="bg-[#1a1f1c] hover:bg-[#2a302c] text-white/60 border border-white/10 h-8 text-xs font-semibold px-3">
                      Disable all
                    </Button>
                  </div>
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {[
                      { name: "Calendar", ver: "6.1.5", featured: true, type: "update" },
                      { name: "Contacts", ver: "8.3.1", featured: true, type: "disable" },
                      { name: "Deck", ver: "1.16.3", featured: true, type: "disable" },
                      { name: "Mail", ver: "5.6.9", featured: true, type: "update" },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          {app.name === "Calendar" ? <Calendar className="w-4 h-4 text-white/40" /> :
                            app.name === "Contacts" ? <Users className="w-4 h-4 text-white/40" /> :
                              app.name === "Deck" ? <LayoutGrid className="w-4 h-4 text-white/40" /> :
                                <Mail className="w-4 h-4 text-white/40" />}
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24 flex justify-end">
                            {app.featured && <span className="text-[10px] border border-white/20 rounded px-1.5 py-0.5 text-white/60">✓ Featured</span>}
                          </div>
                          <div className="w-[160px] flex justify-end gap-2">
                            {app.type === 'update' ? (
                              <>
                                <Button className="h-8 px-3 text-xs font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 flex-1">
                                  Update to {app.name === "Calendar" ? "6.1.6" : "5.6.10"}
                                </Button>
                                <Button className="h-8 px-3 text-xs font-medium bg-[#1a1f1c] hover:bg-white/5 text-white/60">Disable</Button>
                              </>
                            ) : (
                              <Button className="h-8 px-3 text-xs font-medium bg-[#1a1f1c] hover:bg-white/5 text-white/60 w-full">Disable</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Sharing Bundle */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-lg font-bold text-white">Social sharing bundle</h4>
                    <Button variant="outline" className="bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 h-8 text-xs font-semibold px-3">
                      Download and enable all
                    </Button>
                  </div>
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {[
                      { name: "Social sharing via Diaspora", ver: "4.0.1", featured: false },
                      { name: "Social sharing via Facebook", ver: "4.0.1", featured: false },
                      { name: "Social sharing via Twitter", ver: "4.0.1", featured: false },
                      { name: "Social sharing via email", ver: "4.0.1", featured: false },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          <Settings className="w-4 h-4 text-white/40" />
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24"></div>
                          <Button className="h-8 px-4 text-xs font-medium w-[160px] bg-blue-500/10 hover:bg-blue-500/20 text-blue-400">
                            Download and enable
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Bundle */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-lg font-bold text-white">Education bundle</h4>
                    <Button variant="outline" className="bg-[#1a1f1c] hover:bg-[#2a302c] text-blue-400 border border-white/10 h-8 text-xs font-semibold px-3">
                      Download and enable all
                    </Button>
                  </div>
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {[
                      { name: "Announcement center", ver: "7.3.0", featured: true, action: "Download and enable" },
                      { name: "Dashboard", ver: "7.12.0", featured: true, action: "Disable" },
                      { name: "Quota warning", ver: "1.23.0", featured: false, action: "Download and enable" },
                      { name: "SSO & SAML authentication", ver: "7.1.3", featured: true, action: "Download and enable" },
                      { name: "Team Folders", ver: "20.1.9", featured: true, action: "Download and enable" },
                      { name: "Teams", ver: "32.0.0", featured: true, action: "Disable" },
                      { name: "Whiteboard", ver: "1.5.4", featured: true, action: "Download and enable" },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          {app.name === "Dashboard" ? <LayoutGrid className="w-4 h-4 text-white/40" /> :
                            app.name === "Teams" ? <Users className="w-4 h-4 text-white/40" /> :
                              <Settings className="w-4 h-4 text-white/40" />}
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24 flex justify-end">
                            {app.featured && <span className="text-[10px] border border-white/20 rounded px-1.5 py-0.5 text-white/60">✓ Featured</span>}
                          </div>
                          <Button className={`h-8 px-4 text-xs font-medium w-[160px] ${app.action === 'Disable' ? 'bg-[#1a1f1c] hover:bg-white/5 text-white/60' : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'}`}>
                            {app.action}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Loose End Items */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="divide-y divide-white/5">
                    {[
                      { name: "Antivirus for files", ver: "6.1.0", featured: false, action: "Download and enable" },
                      { name: "Auditing / Logging", ver: "1.22.0", featured: true, action: "Enable" },
                      { name: "Collectives", ver: "3.5.0", featured: true, action: "Download and enable" },
                      { name: "Confidential files", ver: "4.0.0", featured: false, action: "Download and enable" },
                      { name: "Forms", ver: "5.2.4", featured: true, action: "Download and enable" },
                      { name: "Stackly OS Office", ver: "9.0.2", featured: true, action: "Download and enable" },
                      { name: "Retention", ver: "3.0.0", featured: true, action: "Download and enable" },
                      { name: "Tables", ver: "1.0.3", featured: true, action: "Download and enable" },
                      { name: "Two-Factor Authentication via Stackly OS notification", ver: "6.0.0-dev.0", featured: true, action: "Enable" },
                      { name: "Whiteboard", ver: "1.5.4", featured: true, action: "Download and enable" },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                        <div className="flex items-center gap-3">
                          {app.name.includes("Authentication") ? <Bell className="w-4 h-4 text-white/40" /> :
                            <Settings className="w-4 h-4 text-white/40" />}
                          <span className="text-white/90 text-sm font-medium">{app.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="text-white/40 text-xs w-16 text-right">{app.ver}</span>
                          <div className="w-24 flex justify-end">
                            {app.featured && <span className="text-[10px] border border-white/20 rounded px-1.5 py-0.5 text-white/60">✓ Featured</span>}
                          </div>
                          <Button className={`h-8 px-4 text-xs font-medium w-[160px] ${app.action === 'Enable' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400'}`}>
                            {app.action}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <section id="demo" className="section-padding bg-section-alt">
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
            <div className="bg-[url('/workspace_bg.jpg')] bg-cover bg-center rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative h-[800px] text-white font-sans flex flex-col">
              {/* Background Ambient Effect */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

              {/* Top Navigation Bar */}
              <div className="relative z-30 p-6 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md">
                <div className="flex-1 overflow-x-auto no-scrollbar mask-gradient-r mr-6">
                  <div className="flex items-center gap-6 text-sm font-medium text-white/70 min-w-max">
                    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors mr-4" onClick={() => setActiveTab("Dashboard")}>
                      <img src={stacklyIcon} alt="Stackly OS" className="w-8 h-8 object-contain" />
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
                </div>
                <div className="flex items-center gap-6 text-white/60 pl-6 border-l border-white/10 shrink-0">
                  <Sparkles
                    onClick={() => setAssistantOpen(true)}
                    className="w-5 h-5 hover:text-white cursor-pointer transition-colors"
                  />

                  <div className="relative cursor-pointer ml-1">
                    <div
                      className="w-9 h-9 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-blue-500 font-medium text-sm hover:border-white/40 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProfileOpen(!profileOpen);
                      }}
                    >
                      S
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 bg-[#1a1f1c] rounded-full p-0.5 pointer-events-none">
                      <div className="bg-green-500 rounded-full w-3.5 h-3.5 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                      </div>
                    </div>

                    {/* Profile Dropdown Menu */}
                    {profileOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                        <div className="absolute top-full right-0 mt-2 w-[180px] bg-[#18181b] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">


                          {/* Menu Items */}
                          <div className="flex flex-col p-1.5">
                            <div
                              className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab("Apps");
                                setProfileOpen(false);
                              }}
                            >
                              <Plus className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                              <span className="text-sm text-white/80 group-hover:text-white transition-colors">Apps</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden relative z-10">
                {/* Main Content Area - Now full width without sidebar */}
                <div className="flex-1 overflow-hidden text-left relative">
                  {renderContent()}
                </div>
              </div>

              {/* Stackly OS Assistant Overlay */}
              {/* Stackly OS Assistant Overlay */}
              {assistantOpen && (
                <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-opacity animate-in fade-in duration-200">
                  <div className="w-full max-w-5xl h-[650px] bg-[#09090b] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">
                    {/* Assistant Header */}
                    <div className="flex items-center justify-center py-3 border-b border-white/5 relative bg-[#09090b]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-sm text-blue-400">Stackly OS Assistant</span>
                      </div>
                      <div
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-md cursor-pointer transition-colors"
                        onClick={() => setAssistantOpen(false)}
                      >
                        <X className="w-4 h-4 text-white/40 hover:text-white" />
                      </div>
                    </div>

                    <div className="flex-1 flex overflow-hidden">
                      {/* Left Sidebar */}
                      <div className="w-72 border-r border-white/5 bg-[#0c0c0e] flex flex-col p-5">
                        <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white gap-2 w-full mb-4 font-medium border-0 h-10 shadow-lg shadow-purple-500/20 transition-all">
                          <ImageIcon className="w-4 h-4" /> Work with images
                        </Button>

                        <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 w-full justify-center gap-2 mb-8 h-10 transition-colors">
                          <Plus className="w-4 h-4" /> New task
                        </Button>

                        <div className="space-y-2 overflow-y-auto pr-1">
                          {[
                            { title: "Welcome to the Team", status: "Completed", time: "6 days ago", color: "text-green-400" },
                            { title: "Generate Logo V2", status: "Processing", time: "Just now", color: "text-blue-400 animate-pulse" },
                            { title: "Review Guidelines", status: "Pending", time: "1h ago", color: "text-white/40" }
                          ].map((task, i) => (
                            <div key={i} className={`p-3.5 rounded-xl cursor-pointer transition-all border group ${i === 1 ? 'bg-white/[0.03] border-white/10' : 'hover:bg-white/[0.02] border-transparent'}`}>
                              <h4 className="text-sm font-medium text-white/90 truncate mb-1.5 group-hover:text-blue-200 transition-colors">{task.title}</h4>
                              <div className="flex justify-between items-center text-xs">
                                <span className={`font-medium ${task.color}`}>{task.status}</span>
                                <span className="text-white/30">{task.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 bg-[#09090b] p-8 flex flex-col relative overflow-y-auto">
                        <div className="max-w-3xl mx-auto w-full flex flex-col h-full">
                          {/* Page Title */}
                          <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Generate sticker</h3>
                          </div>

                          <div className="flex-1 flex flex-col gap-6">
                            <div>
                              <label className="text-xs font-semibold text-white/60 mb-2 block ml-1 uppercase tracking-wider">Prompt</label>
                              <div className="bg-[#121212] border border-white/10 rounded-lg p-1.5 flex items-center gap-2 focus-within:border-white/20 transition-colors ring-0 ring-offset-0 relative">
                                <input
                                  type="text"
                                  placeholder="Describe the sticker you would like to create"
                                  className="bg-transparent text-white w-full px-3 py-2 text-sm focus:outline-none placeholder:text-white/20 h-10"
                                />
                                <div className="pr-1.5">
                                  <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 gap-2 h-8 px-3 rounded-md border border-white/5 bg-white/[0.02] text-xs font-medium">
                                    <File className="w-3.5 h-3.5" /> Choose file
                                  </Button>
                                </div>
                              </div>
                            </div>

                            {/* Preview Area */}
                            <div className="flex-1 border-2 border-dashed border-white/10 rounded-xl bg-white/[0.01] flex flex-col items-center justify-center text-center p-6 min-h-[200px] hover:border-white/20 transition-colors cursor-default">
                              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                                <ImageIcon className="w-6 h-6 text-white/20" />
                              </div>
                              <p className="text-white/30 text-sm font-medium">Preview will appear here</p>
                            </div>

                            {/* Footer Action */}
                            <div className="flex justify-end pt-2">
                              <Button className="bg-white text-black hover:bg-white/90 gap-2 font-medium px-6 h-10 shadow-lg shadow-white/5 transition-all text-sm">
                                <Sparkles className="w-4 h-4 text-blue-600" /> Generate sticker
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            This is a live Stackly OS workspace currently deployed and used internally,
            with early testing underway with select teams.
          </p>


        </div>
      </section>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </>
  );
}
