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
    <div className="w-[35px]">
      <div className="mt-[50px] ml-[5px]">
        <IoMenuOutline
          className="hover:bg-active-item p-3 rounded-md"
          size={42}
        />
        <div className="mt-6">
          <button
            onClick={() => onSelectTab(SelectedTab.Chats)}
            className={twMerge(
              "hover:bg-active-item rounded-md border-none outline-none cursor-default",
              isTabSelected(SelectedTab.Chats) &&
                "bg-active-item relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:h-[16px] before:w-[3px] before:rounded-lg before:bg-green before:content-[''] before:motion-preset-shrink"
            )}
          >
            <BsChatText className="p-3" size={42} />
          </button>
          <button
            onClick={() => onSelectTab(SelectedTab.Calls)}
            className={twMerge(
              "hover:bg-active-item rounded-md border-none outline-none cursor-default",
              isTabSelected(SelectedTab.Calls) &&
                "bg-active-item relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:h-[16px] before:w-[3px] before:rounded-lg before:bg-green before:content-[''] before:motion-preset-shrink"
            )}
          >
            <FiPhone className="rotate-12 p-3" size={41} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OuterSidebar;
