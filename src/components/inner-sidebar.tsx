"use client";

import { IoCreateOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import SearchInput from "./search-input";
import ChatCard from "./chat-card";
import DropdownMenu from "./dropdown-menu";
import { useState } from "react";
import AddUserDropdownContent from "./add-user-dropdown-content";
import StartNewChatDropdownContent from "./start-new-chat-dropdown-content";
import FilterOptionsDropdownContent from "./filter-options-dropdown-content";

type MenuOptions = {
  openAddUser: boolean;
  openStartNewChat: boolean;
  openFilter: boolean;
};

const DEFAULT_MENU_OPTIONS = {
  openAddUser: false,
  openStartNewChat: false,
  openFilter: false,
};

const InnerSidebar = () => {
  const [menuOptions, setMenuOptions] =
    useState<MenuOptions>(DEFAULT_MENU_OPTIONS);

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

  const onResetMenuOptions = () => {
    setMenuOptions(DEFAULT_MENU_OPTIONS);
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
              className="w-full max-w-[322px]"
              open={menuOptions.openAddUser}
              onOpenChange={onResetMenuOptions}
              content={<AddUserDropdownContent />}
            >
              <GoPersonAdd
                className="hover:bg-whitesmoke p-2 rounded-md"
                size={34}
                title="Add person to chat"
                onClick={() => onOpenMenu("openAddUser")}
              />
            </DropdownMenu>
            <DropdownMenu
              className="w-full max-w-[322px]"
              open={menuOptions.openStartNewChat}
              onOpenChange={onResetMenuOptions}
              content={<StartNewChatDropdownContent />}
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
              onOpenChange={onResetMenuOptions}
              content={<FilterOptionsDropdownContent />}
              className="w-full max-w-[322px]"
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
