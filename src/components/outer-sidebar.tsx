"use client";

import { IoMenuOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdOutlineStarBorder } from "react-icons/md";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LiaCogSolid } from "react-icons/lia";

enum SelectedTab {
  Chats = "Chats",
  Calls = "Calls",
  StarredMessages = "Starred Messages",
  ArchivedChats = "Archived Chats",
}

const OuterSidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>(
    SelectedTab.Chats
  );

  const onSelectTab = (tab: SelectedTab) => {
    setSelectedTab(tab);
  };

  const isTabSelected = (tab: SelectedTab) => {
    return selectedTab === tab;
  };

  const buttonIcon = (tab: SelectedTab, icon: React.ReactNode) => {
    return (
      <button
        onClick={() => onSelectTab(tab)}
        className={twMerge(
          "hover:bg-active-item rounded-md border-none outline-none cursor-default",
          isTabSelected(tab) &&
            "bg-active-item relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:h-[16px] before:w-[3px] before:rounded-lg before:bg-green before:content-[''] before:motion-preset-shrink"
        )}
      >
        {icon}
      </button>
    );
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="w-[35px] relative">
      <div className="mt-[50px] ml-[5px]">
        <IoMenuOutline
          className="hover:bg-active-item p-3 rounded-md"
          size={42}
          onClick={toggleSidebar}
        />
        <div className="mt-6">
          {buttonIcon(
            SelectedTab.Chats,
            <BsChatText className="p-3" size={42} />
          )}
          {buttonIcon(
            SelectedTab.Calls,
            <FiPhone className="rotate-12 p-3" size={41} />
          )}
        </div>
        <div className="absolute bottom-16">
          {buttonIcon(
            SelectedTab.StarredMessages,
            <MdOutlineStarBorder className="p-3" size={44} />
          )}
          {buttonIcon(
            SelectedTab.ArchivedChats,
            <HiOutlineArchiveBox className="p-3" size={42} />
          )}
          <hr className="mt-1 mb-2" />
          <LiaCogSolid
            className="hover:bg-active-item p-3 rounded-md"
            size={43}
          />
        </div>
      </div>
      {/* Expanded Sidebar */}
    </div>
  );
};

export default OuterSidebar;
