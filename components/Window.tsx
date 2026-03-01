"use client";

import React from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
  zIndex: number;
  onFocus: () => void;
  icon?: React.ReactNode;
  dragConstraints?: React.RefObject<HTMLDivElement>;
}
export const Window: React.FC<WindowProps> = ({
  id,
  title,
  isOpen,
  onClose,
  onMinimize,
  children,
  zIndex,
  onFocus,
  icon,
  dragConstraints,
}) => {
  const dragControls = useDragControls();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragConstraints={dragConstraints}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute bg-[#ece9d8] border-[3px] border-xp-blue rounded-t-[8px] overflow-hidden xp-window-shadow flex flex-col"
          style={{
            zIndex,
            width: "min(600px, 95vw)",
            height: "min(450px, 70vh)",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onMouseDown={onFocus}
        >
          {/* Title Bar */}
          <div
            onPointerDown={(e) => dragControls.start(e)}
            className="xp-title-bar h-[30px] flex items-center justify-between px-[8px] cursor-default select-none active:cursor-grabbing"
          >
            <div className="flex items-center gap-[8px] text-white font-bold text-[14px] drop-shadow-md">
              {icon}
              <span>{title}</span>
            </div>
            <div className="flex items-center gap-[4px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize();
                }}
                className="w-[21px] h-[21px] bg-xp-blue border border-white/40 rounded-[2px] flex items-center justify-center hover:brightness-110 active:brightness-90"
              >
                <Minus size={14} className="text-white" />
              </button>
              <button className="w-[21px] h-[21px] bg-xp-blue border border-white/40 rounded-[2px] flex items-center justify-center hover:brightness-110 active:brightness-90">
                <Square size={10} className="text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-[21px] h-[21px] bg-[#e81123] border border-white/40 rounded-[2px] flex items-center justify-center hover:brightness-110 active:brightness-90"
              >
                <X size={14} className="text-white" />
              </button>
            </div>
          </div>

          {/* Menu Bar (Optional) */}
          <div className="bg-[#ece9d8] border-b border-black/10 px-[8px] py-[2px] text-[11px] flex gap-[12px]">
            <span className="cursor-default hover:bg-xp-blue hover:text-white px-[4px]">
              File
            </span>
            <span className="cursor-default hover:bg-xp-blue hover:text-white px-[4px]">
              Edit
            </span>
            <span className="cursor-default hover:bg-xp-blue hover:text-white px-[4px]">
              View
            </span>
            <span className="cursor-default hover:bg-xp-blue hover:text-white px-[4px]">
              Help
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto bg-white m-[4px] border border-black/20 p-[16px] font-sans text-[14px]">
            {children}
          </div>

          <div className="bg-[#ece9d8] h-[20px] border-t border-black/10 px-[8px] text-[10px] flex items-center">
            <span>Ready</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
