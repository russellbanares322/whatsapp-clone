import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type DropdownMenuProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>> | (() => void);
  className?: string;
};

const DropdownMenu = ({
  children,
  content,
  open,
  onOpenChange,
  className,
}: DropdownMenuProps) => {
  return (
    <div>
      <div>{children}</div>
      {open && (
        <motion.div
          animate={{ y: 3, animationDelay: "10" }}
          exit={{ opacity: 0 }}
          className={twMerge(
            "absolute z-50 bg-whitesmoke shadow-lg p-2 rounded-lg",
            className
          )}
          onBlur={() => onOpenChange(false)}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
