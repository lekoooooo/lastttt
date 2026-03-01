// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// interface DesktopIconProps {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   onClick: () => void;
//   dragConstraints?: React.RefObject<HTMLDivElement>;
// }

// export const DesktopIcon: React.FC<DesktopIconProps> = ({
//   id,
//   title,
//   icon,
//   onClick,
//   dragConstraints,
// }) => {
//   return (
//     <motion.div
//       drag
//       dragConstraints={dragConstraints}
//       dragMomentum={false}
//       dragElastic={0.1}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onDoubleClick={onClick}
//       className="w-[85px] h-[100px] flex flex-col items-center justify-center gap-[4px] group cursor-pointer select-none z-10"
//     >
//       <div className="w-[52px] h-[52px] flex items-center justify-center bg-transparent group-hover:bg-white/20 rounded-[4px] p-[6px] transition-colors pointer-events-none">
//         <div className="text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
//           {React.cloneElement(icon as React.ReactElement<HTMLDivElement>, {})}
//         </div>
//       </div>
//       <span className="text-white text-[12px] text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,1)] px-[6px] py-[1px] group-hover:bg-xp-blue rounded-[1px] pointer-events-none max-w-full truncate">
//         {title}
//       </span>
//     </motion.div>
//   );
// };
"use client";

import React from "react";
import { motion, PanInfo } from "framer-motion";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  dragConstraints?: React.RefObject<HTMLDivElement | null>;
  x: number;
  y: number;
  onDragEnd: (id: string, info: PanInfo) => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  title,
  icon,
  onClick,
  dragConstraints,
  x,
  y,
  onDragEnd,
}) => {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragMomentum={false}
      dragElastic={0.1}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onClick}
      animate={{ x, y }}
      onDragEnd={(e, info) => onDragEnd(id, info)}
      className="w-[85px] h-[100px] flex flex-col items-center justify-center gap-[4px] group cursor-pointer select-none z-10 absolute left-0 top-0"
    >
      <div className="w-[52px] h-[52px] flex items-center justify-center bg-transparent group-hover:bg-white/20 rounded-[4px] p-[6px] transition-colors pointer-events-none">
        <div className="text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
          {React.cloneElement(icon as React.ReactElement<HTMLDivElement>, {})}
        </div>
      </div>
      <span className="text-white text-[12px] text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,1)] px-[6px] py-[1px] group-hover:bg-xp-blue rounded-[1px] pointer-events-none max-w-full truncate">
        {title}
      </span>
    </motion.div>
  );
};
