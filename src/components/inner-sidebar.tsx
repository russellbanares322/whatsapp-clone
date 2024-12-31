"use client";

import { IoCreateOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import SearchInput from "./search-input";
import ChatCard from "./chat-card";
import DropdownMenu from "./dropdown-menu";
import { useState } from "react";

type MenuOptions = {
  openAddUser: boolean;
  openStartNewChat: boolean;
  openFilter: boolean;
};

const InnerSidebar = () => {
  const [menuOptions, setMenuOptions] = useState<MenuOptions>({
    openAddUser: false,
    openStartNewChat: false,
    openFilter: false,
  });

  const onOpenMenu = (selectedMenu: keyof MenuOptions) => {
    const newMenuOptions = Object.keys(menuOptions).reduce(
      (accumulator, currentVal) => ({
        ...accumulator,
        [currentVal]:
          currentVal === selectedMenu ? !menuOptions[currentVal] : false,
      }),
      {}
    ) as MenuOptions;
    setMenuOptions(newMenuOptions);
  };

  return (
    <div className="border-r border-0 border-solid w-[268px]">
      <div className="max-h-[887px] overflow-auto px-[10px] py-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-xl">Chats</p>
          <div className="flex items-center gap-1">
            {/* Add User */}
            <DropdownMenu
              open={menuOptions.openAddUser}
              onOpenChange={() => onOpenMenu("openAddUser")}
              content={<div>Add Person</div>}
            >
              <GoPersonAdd
                className="hover:bg-whitesmoke p-2 rounded-md"
                size={34}
                title="Add person to chat"
                onClick={() => onOpenMenu("openAddUser")}
              />
            </DropdownMenu>
            <DropdownMenu
              open={menuOptions.openStartNewChat}
              onOpenChange={() => onOpenMenu("openStartNewChat")}
              content={<div>Start New Chat</div>}
            >
              <IoCreateOutline
                className="hover:bg-whitesmoke p-2 rounded-md"
                size={34}
                title="Start new chat"
                onClick={() => onOpenMenu("openStartNewChat")}
              />
            </DropdownMenu>
            <DropdownMenu
              open={menuOptions.openFilter}
              onOpenChange={() => onOpenMenu("openFilter")}
              content={<div>Filter Options</div>}
            >
              <BsFilter
                className="hover:bg-whitesmoke p-2 rounded-md"
                size={34}
                title="Filter chats by"
                onClick={() => onOpenMenu("openFilter")}
              />
            </DropdownMenu>
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
