type DropdownMenuProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: () => void;
};

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute bg-white shadow-md">content</div>
    </div>
  );
};

export default DropdownMenu;
