"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Folder,
  Mail,
  Code,
  Settings,
  LogOut,
  Search,
  HelpCircle,
} from "lucide-react";

interface StartMenuProps {
  isOpen: boolean;
  onItemClick: (id: string) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({
  isOpen,
  onItemClick,
}) => {
  if (!isOpen) return null;

  const leftItems = [
    {
      id: "about",
      title: "About Me",
      icon: <User size={24} className="text-xp-blue" />,
    },
    {
      id: "projects",
      title: "My Projects",
      icon: <Folder size={24} className="text-xp-orange" />,
    },
    {
      id: "skills",
      title: "Technical Skills",
      icon: <Code size={24} className="text-xp-green" />,
    },
    {
      id: "contact",
      title: "Contact Me",
      icon: <Mail size={24} className="text-xp-blue" />,
    },
  ];

  const rightItems = [
    { id: "docs", title: "My Documents", icon: <Folder size={16} /> },
    { id: "pics", title: "My Pictures", icon: <Folder size={16} /> },
    { id: "music", title: "My Music", icon: <Folder size={16} /> },
    { divider: true },
    { id: "control", title: "Control Panel", icon: <Settings size={16} /> },
    { id: "search", title: "Search", icon: <Search size={16} /> },
    { id: "help", title: "Help and Support", icon: <HelpCircle size={16} /> },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-[30px] left-0 w-[380px] bg-white rounded-t-[8px] overflow-hidden shadow-2xl z-[9998] border-2 border-xp-blue"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="xp-title-bar h-[60px] flex items-center px-[16px] gap-[12px]">
        <div className="w-[40px] h-[40px] bg-white rounded-[4px] border-2 border-white/50 flex items-center justify-center overflow-hidden">
          <img
            src="https://picsum.photos/seed/user/40/40"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white font-bold text-[18px] drop-shadow-md">
          Guest User
        </span>
      </div>

      <div className="flex h-[350px]">
        <div className="flex-1 bg-white p-[8px] flex flex-col gap-[4px]">
          {leftItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="flex items-center gap-[12px] p-[8px] hover:bg-xp-blue hover:text-white rounded-[2px] transition-colors group text-left"
            >
              <div className="group-hover:brightness-200">{item.icon}</div>
              <div className="flex flex-col">
                <span className="font-bold text-[14px]">{item.title}</span>
                <span className="text-[10px] opacity-60 group-hover:text-white/80">
                  Open {item.title}
                </span>
              </div>
            </button>
          ))}
          <div className="mt-auto border-t border-black/10 pt-[8px]">
            <button className="w-full flex items-center gap-[12px] p-[8px] hover:bg-xp-blue hover:text-white rounded-[2px] text-[14px]">
              <span className="font-bold">All Programs</span>
              <div className="ml-auto border-l-[4px] border-l-xp-orange border-y-[4px] border-y-transparent" />
            </button>
          </div>
        </div>

