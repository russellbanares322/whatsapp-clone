"use client";

import { IoMenuOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdOutlineStarBorder } from "react-icons/md";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LiaCogSolid } from "react-icons/lia";
import Link from "next/link";
import { selectedRoutePath } from "@/constants/routePaths";
import { UserButton } from "@clerk/nextjs";

export enum SelectedTab {
  Chats = "Chats",
  Calls = "Calls",
  StarredMessages = "Starred messages",
  ArchivedChats = "Archived chats",
}

const OuterSidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>(
    SelectedTab.Chats
  );

  const onSelectTab = (tab: SelectedTab) => {
    setSelectedTab(tab);
    setIsSidebarExpanded(false);
  };

  const isTabSelected = (tab: SelectedTab) => {
    return selectedTab === tab;
  };

  const buttonIcon = (tab: SelectedTab, icon: React.ReactNode) => {
    return (
      <Link className="w-full" href={selectedRoutePath(tab)}>
        <button
          onClick={() => onSelectTab(tab)}
          className={twMerge(
            "hover:bg-active-item rounded-md border-none outline-none cursor-default",
            isTabSelected(tab) &&
              "bg-active-item relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:h-[16px] before:w-[3px] before:rounded-lg before:bg-green before:content-[''] before:motion-preset-shrink",
            isSidebarExpanded ? "w-full" : "w-auto"
          )}
        >
          {icon}
        </button>
      </Link>
    );
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
    document.getElementById("menu")?.classList.add("motion-preset-stretch");

    const animationTimeout = setTimeout(() => {
      document
        .getElementById("menu")
        ?.classList.remove("motion-preset-stretch");
    }, 400);

    return () => clearTimeout(animationTimeout);
  };

  return (
    <div className="w-[35px] relative">
      <div className="mt-[40px] ml-[5px]">
        <button
          onClick={toggleSidebar}
          className="hover:bg-active-item rounded-md border-none outline-none cursor-default"
        >
          <IoMenuOutline id="menu" className="p-3" size={44} />
        </button>
        <div>
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
          <div className="ml-2 mt-1">
            <UserButton />
          </div>
        </div>
      </div>
      {/* Expanded Sidebar */}
      <div
        className={twMerge(
          "fixed left-0 top-0 duration-150 ease-in-out w-[230px] p-2 shadow-lg border-r border-0 border-solid bg-whitesmoke h-full",
          isSidebarExpanded ? "translate-x-0" : "-translate-x-60"
        )}
      >
        <div className="mt-[30px] flex flex-col justify-between h-full">
          <div>
            <button
              onClick={toggleSidebar}
              className="hover:bg-active-item rounded-md border-none outline-none cursor-default"
            >
              <IoMenuOutline id="menu" className="p-3" size={44} />
            </button>
            <div className="flex flex-col items-start gap-1 justify-start">
              {buttonIcon(
                SelectedTab.Chats,
                <div className="flex items-center gap-2">
                  <BsChatText className="p-3" size={42} />
                  <p className="text-sm">{SelectedTab.Chats}</p>
                </div>
              )}
              {buttonIcon(
                SelectedTab.Calls,
                <div className="flex items-center gap-2">
                  <FiPhone className="rotate-12 p-3" size={41} />
                  <p className="text-sm">{SelectedTab.Calls}</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 mb-14">
            {buttonIcon(
              SelectedTab.StarredMessages,
              <div className="flex items-center gap-2">
                <MdOutlineStarBorder className="p-3" size={44} />
                <p className="text-sm">{SelectedTab.StarredMessages}</p>
              </div>
            )}
            {buttonIcon(
              SelectedTab.ArchivedChats,
              <div className="flex items-center gap-2">
                <HiOutlineArchiveBox className="p-3" size={42} />
                <p className="text-sm">{SelectedTab.ArchivedChats}</p>
              </div>
            )}
            <hr />
            <button
              className={twMerge(
                "hover:bg-active-item rounded-md border-none outline-none cursor-default"
              )}
            >
              <div className="flex items-center gap-2">
                <LiaCogSolid className="p-3 rounded-md" size={43} />
                <p className="text-sm"> Settings</p>
              </div>
            </button>
            <button
              className={twMerge(
                "hover:bg-active-item ml-1 py-2 pl-2 rounded-md border-none outline-none cursor-default"
              )}
            >
              <div className="flex items-center gap-3">
                <UserButton />
                <p className="text-sm"> Profile</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterSidebar;
