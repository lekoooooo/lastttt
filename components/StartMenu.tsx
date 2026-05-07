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


                key={item.id}
                className="flex items-center gap-[8px] p-[6px] hover:bg-xp-blue hover:text-white rounded-[2px] text-[12px] text-xp-blue-dark text-left"
              >
                <div className="opacity-70">{item.icon}</div>
                <span className="font-bold">{item.title}</span>
              </button>
            ),
          )}
        </div>
      </div>

      <div className="xp-taskbar-gradient h-[40px] flex items-center justify-end px-[16px] gap-[16px]">
        <button className="flex items-center gap-[8px] text-white text-[12px] hover:underline">
          <LogOut size={16} className="text-xp-orange" />
          <span>Log Off</span>
        </button>
        <button className="flex items-center gap-[8px] text-white text-[12px] hover:underline">
          <div className="w-[16px] h-[16px] bg-red-600 rounded-[2px] flex items-center justify-center">
            <div className="w-[6px] h-[6px] bg-white rounded-full" />
          </div>
          <span>Turn Off Computer</span>
        </button>
      </div>
    </motion.div>
  );
};
