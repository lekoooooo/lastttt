"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Folder, Mail, Code, Monitor } from "lucide-react";

interface TaskbarProps {
  openWindows: { id: string; title: string; icon: React.ReactNode }[];
  activeWindowId: string | null;
  onWindowClick: (id: string) => void;
  onStartClick: () => void;
  isStartMenuOpen: boolean;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  openWindows,
  activeWindowId,
  onWindowClick,
  onStartClick,
  isStartMenuOpen,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[30px] xp-taskbar-gradient flex items-center z-[9999] border-t border-white/20"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onStartClick();
        }}
        className={`xp-start-button h-full px-[16px] flex items-center gap-[8px] rounded-r-[12px] italic font-black text-white text-[18px] shadow-lg transition-all hover:brightness-110 active:brightness-90 ${isStartMenuOpen ? "brightness-90" : ""}`}
      >


      <div className="flex-1 flex items-center gap-[4px] px-[8px] overflow-x-auto no-scrollbar">
        {openWindows.map((win) => (
          <button
            key={win.id}
            onClick={() => onWindowClick(win.id)}
            className={`h-[24px] min-w-[120px] max-w-[160px] px-[8px] flex items-center gap-[8px] rounded-[2px] text-[12px] text-white border transition-all ${
              activeWindowId === win.id
                ? "bg-xp-blue-dark border-white/30 shadow-inner"
                : "bg-xp-blue-light border-white/10 hover:bg-xp-blue"
            }`}
          >
            <div className="shrink-0">{win.icon}</div>
            <span className="truncate">{win.title}</span>
          </button>
        ))}
      </div>

      <div className="h-full bg-[#0997ff] border-l border-white/20 px-[12px] flex items-center gap-[12px] text-white text-[12px] font-medium">
        <div className="flex items-center gap-[8px] opacity-80">
          <Monitor size={12} />
          <Code size={12} />
        </div>
        <div className="flex flex-col items-center leading-none">
          <span>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
