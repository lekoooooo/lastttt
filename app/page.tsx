// "use client";

// import React, { useState, useCallback } from "react";
// import {
//   User,
//   Folder,
//   Mail,
//   Code,
//   Github,
//   ExternalLink,
//   Terminal,
//   Instagram,
// } from "lucide-react";
// import { Window } from "@/components/Window";
// import { Taskbar } from "@/components/Taskbar";
// import { StartMenu } from "@/components/StartMenu";
// import { DesktopIcon } from "@/components/DesktopIcon";
// import { experiences, contactLinks } from "@/lib/data";
// import { projects } from "@/lib/projects";

// interface WindowState {
//   id: string;
//   title: string;
//   isOpen: boolean;
//   isMinimized: boolean;
//   zIndex: number;
//   icon: React.ReactNode;
// }

// export default function Home() {
//   const [windows, setWindows] = useState<WindowState[]>([
//     {
//       id: "about",
//       title: "About Me",
//       isOpen: false,
//       isMinimized: false,
//       zIndex: 10,
//       icon: <User size={16} />,
//     },
//     {
//       id: "projects",
//       title: "My Projects",
//       isOpen: false,
//       isMinimized: false,
//       zIndex: 10,
//       icon: <Folder size={16} />,
//     },
//     {
//       id: "skills",
//       title: "Technical Skills",
//       isOpen: false,
//       isMinimized: false,
//       zIndex: 10,
//       icon: <Code size={16} />,
//     },
//     {
//       id: "contact",
//       title: "Contact Me",
//       isOpen: false,
//       isMinimized: false,
//       zIndex: 10,
//       icon: <Mail size={16} />,
//     },
//   ]);

//   const [maxZIndex, setMaxZIndex] = useState(10);
//   const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
//   const [activeWindowId, setActiveWindowId] = useState<string | null>(null);

//   const openWindow = useCallback(
//     (id: string) => {
//       setWindows((prev) =>
//         prev.map((win) => {
//           if (win.id === id) {
//             const newZ = maxZIndex + 1;
//             setMaxZIndex(newZ);
//             setActiveWindowId(id);
//             return { ...win, isOpen: true, isMinimized: false, zIndex: newZ };
//           }
//           return win;
//         }),
//       );
//       setIsStartMenuOpen(false);
//     },
//     [maxZIndex],
//   );

//   const closeWindow = useCallback(
//     (id: string) => {
//       setWindows((prev) =>
//         prev.map((win) => (win.id === id ? { ...win, isOpen: false } : win)),
//       );
//       if (activeWindowId === id) setActiveWindowId(null);
//     },
//     [activeWindowId],
//   );

//   const minimizeWindow = useCallback((id: string) => {
//     setWindows((prev) =>
//       prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win)),
//     );
//     setActiveWindowId(null);
//   }, []);

//   const focusWindow = useCallback(
//     (id: string) => {
//       setWindows((prev) =>
//         prev.map((win) => {
//           if (win.id === id) {
//             const newZ = maxZIndex + 1;
//             setMaxZIndex(newZ);
//             setActiveWindowId(id);
//             return { ...win, isMinimized: false, zIndex: newZ };
//           }
//           return win;
//         }),
//       );
//     },
//     [maxZIndex],
//   );

//   const handleTaskbarClick = useCallback(
//     (id: string) => {
//       const win = windows.find((w) => w.id === id);
//       if (win?.isMinimized || activeWindowId !== id) {
//         focusWindow(id);
//       } else {
//         minimizeWindow(id);
//       }
//     },
//     [windows, activeWindowId, focusWindow, minimizeWindow],
//   );

//   return (
//     <main
//       className="h-screen w-screen relative overflow-hidden bg-cover bg-center"
//       style={{
//         backgroundImage:
//           'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2048")',
//       }}
//       onClick={() => setIsStartMenuOpen(false)}
//     >
//       {/* Desktop Icons */}
//       <div className="absolute top-[16px] left-[16px] flex flex-col gap-[16px]">
//         <DesktopIcon
//           id="about"
//           title="My Profile"
//           icon={<User />}
//           onClick={() => openWindow("about")}
//         />
//         <DesktopIcon
//           id="projects"
//           title="Projects"
//           icon={<Folder />}
//           onClick={() => openWindow("projects")}
//         />
//         <DesktopIcon

"use client";

import React, { useState, useCallback, useRef } from "react";
import {
  User,
  Folder,
  Mail,
  Code,
  Github,
  ExternalLink,
  Terminal,
  Instagram,
} from "lucide-react";
import { Window } from "@/components/Window";
import { Taskbar } from "@/components/Taskbar";
import { StartMenu } from "@/components/StartMenu";
import { DesktopIcon } from "@/components/DesktopIcon";
import { experiences, contactLinks } from "@/lib/data";
import { projects } from "@/lib/projects";

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
  const constraintsRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

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
      ref={constraintsRef}
      className="h-screen w-screen relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2048")',
      }}
      onClick={() => setIsStartMenuOpen(false)}
    >
      {/* Desktop Icons */}
      <div className="absolute top-[24px] left-[24px] flex flex-col gap-[32px] z-0">
        <DesktopIcon
          id="about"
          title="My Profile"
          icon={<User />}
          onClick={() => openWindow("about")}
          dragConstraints={constraintsRef}
        />
        <DesktopIcon
          id="projects"
          title="Projects"
          icon={<Folder />}
          onClick={() => openWindow("projects")}
          dragConstraints={constraintsRef}
        />
        <DesktopIcon
          id="skills"
          title="Skills.exe"
          icon={<Terminal />}
          onClick={() => openWindow("skills")}
          dragConstraints={constraintsRef}
        />
        <DesktopIcon
          id="contact"
          title="Mail"
          icon={<Mail />}
          onClick={() => openWindow("contact")}
          dragConstraints={constraintsRef}
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
        dragConstraints={constraintsRef}
      >
        <div className="space-y-[16px]">
          <h1 className="text-[24px] font-bold border-b pb-[8px]">
            Work Experience
          </h1>
          <div className="space-y-[24px]">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-xp-blue pl-[16px]">
                <h3 className="font-bold text-xp-blue-dark text-[16px]">
                  {exp.role}
                </h3>
                {exp.company && (
                  <p className="text-xp-green font-bold text-[14px]">
                    {exp.company}
                  </p>
                )}
                <p className="text-[12px] text-gray-500 mb-[8px]">{exp.date}</p>
                <p className="text-[14px]">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#ffffcc] p-[16px] border border-black/10 shadow-sm italic mt-[24px]">
            The best way to predict the future is to invent it. - Alan Kay
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
        dragConstraints={constraintsRef}
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
        dragConstraints={constraintsRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-black/10 p-[12px] hover:bg-xp-blue/5 group flex flex-col h-full bg-white"
            >
              <div className="w-full h-[128px] bg-gray-200 mb-[8px] overflow-hidden relative border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${project.id}/300/200`;
                  }}
                />
                {project.isPrivate && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-[4px] py-[2px] font-bold">
                    PRIVATE
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-[12px]">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xp-button-gradient text-white px-[12px] py-[4px] rounded-sm text-[12px] font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    Open Demo
                  </a>
                </div>
              </div>
              <h3 className="font-bold text-xp-blue-dark text-[15px]">
                {project.title}
              </h3>
              <p className="text-[11px] text-xp-green font-bold mb-[4px]">
                {project.language} • {project.year}
              </p>
              <p className="text-[12px] mb-[12px] flex-1 line-clamp-3">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-[8px] border-t border-black/5">
                <span className="text-[11px] opacity-60 italic">
                  {project.role}
                </span>
                <div className="flex gap-[12px]">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[4px] text-xp-blue hover:underline text-[12px] font-bold"
                    >
                      <ExternalLink size={14} />
                      <span>Open</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[4px] text-gray-600 hover:text-xp-blue transition-colors text-[12px] font-medium"
                      title="View Source Code"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
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
        dragConstraints={constraintsRef}
      >
        <div className="space-y-[24px]">
          <div className="grid grid-cols-1 gap-[12px]">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[12px] p-[12px] border border-black/10 hover:bg-xp-blue hover:text-white transition-colors group"
              >
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                  {link.name === "Email" && <Mail size={24} />}
                  {link.name === "GitHub" && <Github size={24} />}
                  {link.name === "Instagram" && <Instagram size={24} />}
                </div>
                <div>
                  <p className="font-bold text-[14px]">{link.name}</p>
                  <p className="text-[11px] opacity-60 group-hover:text-white/80">
                    {link.href}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <form
            className="space-y-[16px] pt-[16px] border-t border-black/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-[12px] font-bold text-xp-blue-dark">
              Quick Message:
            </p>
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
                className="border border-black/20 p-[8px] text-[12px] h-[100px] focus:outline-xp-blue resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="xp-button-gradient text-white px-[24px] py-[8px] rounded-sm font-bold text-[14px] shadow-md hover:brightness-110 active:brightness-90 w-full">
              Send Message
            </button>
          </form>
        </div>
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
