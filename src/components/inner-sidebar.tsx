"use client";

import { IoCreateOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import SearchInput from "./search-input";
import ChatCard from "./chat-card";
import DropdownMenu from "./dropdown-menu";
import { useState } from "react";

type MenuOptions = {
  openAddPersonMenu: boolean;
  openStartNewChatMenu: boolean;
  openFilterMenu: boolean;
};

const InnerSidebar = () => {
  const [menuOptions, setMenuOptions] = useState<MenuOptions>({
    openAddPersonMenu: false,
    openStartNewChatMenu: false,
    openFilterMenu: false,
  });

  const onOpenMenu = (selectedMenu: keyof MenuOptions) => {
    setMenuOptions((prev) => ({
      ...prev,
      [selectedMenu]: !menuOptions[selectedMenu],
    }));
  };

  return (
    <div className="border-r border-0 border-solid w-[268px]">
      <div className="max-h-[887px] overflow-auto px-[10px] py-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-xl">Chats</p>
          <div className="flex items-center gap-1">
            <DropdownMenu
              open={menuOptions.openAddPersonMenu}
              onOpenChange={() => onOpenMenu("openAddPersonMenu")}
              content={<div>Add Person</div>}
            >
              <GoPersonAdd
                className="hover:bg-whitesmoke p-2 rounded-md"
                size={34}
                title="Add person to chat"
                onClick={() => onOpenMenu("openAddPersonMenu")}
              />
            </DropdownMenu>
            <IoCreateOutline
              className="hover:bg-whitesmoke p-2 rounded-md"
              size={34}
              title="Start new chat"
            />
            <BsFilter
              className="hover:bg-whitesmoke p-2 rounded-md"
              size={34}
              title="Filter chats by"
            />
          </div>
        </div>
        {/* Search Input */}
        <SearchInput />
        {/* Chat Data */}
        <ChatCard />
      </div>
    </div>
  );
};

export default InnerSidebar;
