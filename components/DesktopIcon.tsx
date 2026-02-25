"use client";

import React from "react";
import { motion } from "framer-motion";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  title,
  icon,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-[80px] h-[90px] flex flex-col items-center justify-center gap-[4px] group"
    >
      <div className="w-[48px] h-[48px] flex items-center justify-center bg-transparent group-hover:bg-white/10 rounded-[2px] p-[4px] transition-colors">
        <div className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
            size: 36,
          })}
        </div>
      </div>
      <span className="text-white text-[11px] text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,1)] px-[4px] group-hover:bg-xp-blue rounded-[2px]">
        {title}
      </span>
    </motion.button>
  );
};
