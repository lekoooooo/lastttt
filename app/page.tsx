"use client";

import React, { useState, useCallback } from "react";
import {
  User,
  Folder,
  Mail,
  Code,
  Github,
  Linkedin,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { Window } from "@/components/Window";
import { Taskbar } from "@/components/Taskbar";
import { StartMenu } from "@/components/StartMenu";
import { DesktopIcon } from "@/components/DesktopIcon";

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  icon: React.ReactNode;
}

export default function Home() {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: "about",
      title: "About Me",
      isOpen: false,
      isMinimized: false,
      zIndex: 10,
      icon: <User size={16} />,
    },
    {
      id: "projects",
      title: "My Projects",
      isOpen: false,
      isMinimized: false,
      zIndex: 10,
      icon: <Folder size={16} />,
    },
    {
      id: "skills",
      title: "Technical Skills",
      isOpen: false,
      isMinimized: false,
      zIndex: 10,
      icon: <Code size={16} />,
    },
    {
      id: "contact",
      title: "Contact Me",
      isOpen: false,
      isMinimized: false,
      zIndex: 10,
      icon: <Mail size={16} />,
    },
  ]);

  const [maxZIndex, setMaxZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

  const openWindow = useCallback(
    (id: string) => {
      setWindows((prev) =>
        prev.map((win) => {
          if (win.id === id) {
            const newZ = maxZIndex + 1;
            setMaxZIndex(newZ);
            setActiveWindowId(id);
            return { ...win, isOpen: true, isMinimized: false, zIndex: newZ };
          }
          return win;
        }),
      );
      setIsStartMenuOpen(false);
    },
    [maxZIndex],
  );

  const closeWindow = useCallback(
    (id: string) => {
      setWindows((prev) =>
        prev.map((win) => (win.id === id ? { ...win, isOpen: false } : win)),
      );
      if (activeWindowId === id) setActiveWindowId(null);
    },
    [activeWindowId],
  );

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win)),
    );
    setActiveWindowId(null);
  }, []);

  const focusWindow = useCallback(
    (id: string) => {
      setWindows((prev) =>
        prev.map((win) => {
          if (win.id === id) {
            const newZ = maxZIndex + 1;
            setMaxZIndex(newZ);
            setActiveWindowId(id);
            return { ...win, isMinimized: false, zIndex: newZ };
          }
          return win;
        }),
      );
    },
    [maxZIndex],
  );

  const handleTaskbarClick = useCallback(
    (id: string) => {
      const win = windows.find((w) => w.id === id);
      if (win?.isMinimized || activeWindowId !== id) {
        focusWindow(id);
      } else {
        minimizeWindow(id);
      }
    },
    [windows, activeWindowId, focusWindow, minimizeWindow],
  );

  return (
    <main
      className="h-screen w-screen relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2048")',
      }}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* Desktop Icons */}
      <div className="absolute top-[16px] left-[16px] flex flex-col gap-[16px]">
        <DesktopIcon
          id="about"
          title="My Profile"
          icon={<User />}
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          id="projects"
          title="Projects"
          icon={<Folder />}
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          id="skills"
          title="Skills.exe"
          icon={<Terminal />}
          onClick={() => openWindow("skills")}
        />
        <DesktopIcon
          id="contact"
          title="Mail"
          icon={<Mail />}
          onClick={() => openWindow("contact")}
        />
      </div>

      {/* Windows */}
      <Window
        id="about"
        title="About Me - Notepad"
        isOpen={
          (windows.find((w) => w.id === "about")?.isOpen &&
            !windows.find((w) => w.id === "about")?.isMinimized) ||
          false
        }
        onClose={() => closeWindow("about")}
        onMinimize={() => minimizeWindow("about")}
        zIndex={windows.find((w) => w.id === "about")?.zIndex || 10}
        onFocus={() => focusWindow("about")}
        icon={<User size={14} />}
      >
        <div className="space-y-[16px]">
          <h1 className="text-[24px] font-bold border-b pb-[8px]">
            Hello, I'm a Web Developer
          </h1>
          <p>
            Welcome to my Windows XP themed portfolio! I'm a passionate
            developer who loves building nostalgic yet modern web experiences.
          </p>
          <div className="bg-[#ffffcc] p-[16px] border border-black/10 shadow-sm italic">
            "The best way to predict the future is to invent it." - Alan Kay
          </div>
          <p>
            I specialize in React, TypeScript, and Tailwind CSS. I enjoy the
            challenge of creating pixel-perfect designs and smooth user
            interactions.
          </p>
          <div className="flex gap-[16px] pt-[16px]">
            <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-xp-blue text-white rounded-sm hover:brightness-110">
              <Github size={18} /> GitHub
            </button>
            <button className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[#0077b5] text-white rounded-sm hover:brightness-110">
              <Linkedin size={18} /> LinkedIn
            </button>
          </div>
        </div>
      </Window>

      <Window
        id="skills"
        title="Technical Skills - Command Prompt"
        isOpen={
          (windows.find((w) => w.id === "skills")?.isOpen &&
            !windows.find((w) => w.id === "skills")?.isMinimized) ||
          false
        }
        onClose={() => closeWindow("skills")}
        onMinimize={() => minimizeWindow("skills")}
        zIndex={windows.find((w) => w.id === "skills")?.zIndex || 10}
        onFocus={() => focusWindow("skills")}
        icon={<Terminal size={14} />}
      >
        <div className="bg-black text-green-500 font-mono p-[16px] h-full rounded-sm">
          <p className="mb-[8px]">Microsoft(R) Windows XP [Version 5.1.2600]</p>
          <p className="mb-[16px]">(C) Copyright 1985-2001 Microsoft Corp.</p>
          <div className="space-y-[4px]">
            <p>C:\DOCUMENTS\SKILLS{">"} dir</p>
            <p className="pl-[16px]">
              FRONTEND: React, Next.js, TypeScript, TailwindCSS
            </p>
            <p className="pl-[16px]">
              BACKEND: Node.js, Express, PostgreSQL, SQLite
            </p>
            <p className="pl-[16px]">TOOLS: Git, Docker, Vite, Figma</p>
            <p className="pl-[16px]">
              DESIGN: Windows XP Aesthetic, Brutalism, Minimalist
            </p>
            <p className="mt-[16px]">
              C:\DOCUMENTS\SKILLS{">"} <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </Window>

      <Window
        id="projects"
        title="My Projects - Explorer"
        isOpen={
          (windows.find((w) => w.id === "projects")?.isOpen &&
            !windows.find((w) => w.id === "projects")?.isMinimized) ||
          false
        }
        onClose={() => closeWindow("projects")}
        onMinimize={() => minimizeWindow("projects")}
        zIndex={windows.find((w) => w.id === "projects")?.zIndex || 10}
        onFocus={() => focusWindow("projects")}
        icon={<Folder size={14} />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border border-black/10 p-[12px] hover:bg-xp-blue/5 group cursor-pointer"
            >
              <div className="w-full h-[128px] bg-gray-200 mb-[8px] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/project${i}/300/200`}
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-bold text-xp-blue-dark">Project Alpha {i}</h3>
              <p className="text-[12px] opacity-70 mb-[8px]">
                Built with React and Tailwind CSS
              </p>
              <div className="flex gap-[8px]">
                <ExternalLink size={14} className="text-xp-blue" />
                <Github size={14} className="text-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </Window>

      <Window
        id="contact"
        title="Contact Me - Outlook Express"
        isOpen={
          (windows.find((w) => w.id === "contact")?.isOpen &&
            !windows.find((w) => w.id === "contact")?.isMinimized) ||
          false
        }
        onClose={() => closeWindow("contact")}
        onMinimize={() => minimizeWindow("contact")}
        zIndex={windows.find((w) => w.id === "contact")?.zIndex || 10}
        onFocus={() => focusWindow("contact")}
        icon={<Mail size={14} />}
      >
        <form className="space-y-[16px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[12px] font-bold">To:</label>
            <div className="border border-black/20 p-[4px] bg-gray-50 text-[12px]">
              developer@portfolio.xp
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[12px] font-bold">Subject:</label>
            <input
              type="text"
              className="border border-black/20 p-[4px] text-[12px] focus:outline-xp-blue"
              placeholder="Hello!"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label className="text-[12px] font-bold">Message:</label>
            <textarea
              className="border border-black/20 p-[8px] text-[12px] h-[128px] focus:outline-xp-blue resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button className="xp-button-gradient text-white px-[24px] py-[8px] rounded-sm font-bold text-[14px] shadow-md hover:brightness-110 active:brightness-90">
            Send Message
          </button>
        </form>
      </Window>

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onItemClick={(id) => openWindow(id)}
      />

      {/* Taskbar */}
      <Taskbar
        openWindows={windows
          .filter((w) => w.isOpen)
          .map((w) => ({ id: w.id, title: w.title, icon: w.icon }))}
        activeWindowId={activeWindowId}
        onWindowClick={handleTaskbarClick}
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        isStartMenuOpen={isStartMenuOpen}
      />
    </main>
  );
}
