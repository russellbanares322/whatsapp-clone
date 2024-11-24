"use client";

import { IoMenuOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

enum SelectedTab {
  Chats = "Chats",
  Calls = "Calls",
  StarredMessages = "Starred Messages",
  ArchivedChats = "Archived Chats",
}

const OuterSidebar = () => {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>(
    SelectedTab.Chats
  );

  const onSelectTab = (tab: SelectedTab) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: SelectedTab) => {
    return selectedTab === tab;
  };

  return (
    <div className="w-[40px]">
      <div className="mt-[50px] ml-2">
        <IoMenuOutline
          className="hover:bg-[#ededed] p-2 rounded-md"
          size={35}
        />
        <div className="mt-6 space-y-3">
          <BsChatText
            onClick={() => onSelectTab(SelectedTab.Chats)}
            className={twMerge("hover:bg-[#ededed] p-2 rounded-md")}
            size={33}
          />
          <button
            onClick={() => onSelectTab(SelectedTab.Calls)}
            className="hover:bg-[#ededed] rounded-md border-none outline-none cursor-default"
          >
            <FiPhone className={twMerge("rotate-12 p-2")} size={33} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OuterSidebar;
