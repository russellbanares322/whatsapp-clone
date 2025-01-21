import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type DropdownMenuProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  onOpenChange: () => void;
  className?: string;
};

const DropdownMenu = ({
  children,
  content,
  open,
  className,
  onOpenChange,
}: DropdownMenuProps) => {
  const onCloseDropdownMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "dropdown-menu-wrapper") {
      onOpenChange();
    }
  };

  return (
    <div onClick={onCloseDropdownMenu} id="dropdown-menu-wrapper">
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
      {open && (
        <motion.div
          animate={{ y: 3, animationDelay: "10" }}
          exit={{ opacity: 0 }}
          className={twMerge(
            "absolute z-50 bg-whitesmoke shadow-lg p-2 rounded-lg",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
