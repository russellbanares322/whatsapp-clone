import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type DropdownMenuProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

const DropdownMenu = ({ children, content, open }: DropdownMenuProps) => {
  return (
    <div className="relative">
      {children}
      {open && (
        <motion.div
          animate={{ y: 3, animationDelay: "10" }}
          exit={{ opacity: 0 }}
          className={twMerge("absolute bg-white shadow-lg p-2 rounded-md")}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
