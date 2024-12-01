import { SelectedTab } from "@/components/outer-sidebar";

 export const routePaths: Record<SelectedTab, string> = {
    Chats: "/chats",
    "Calls" : "/calls",
    "Starred messages": "/starred-messages",
    "Archived chats": "/archived-chats"
}

export const selectedRoutePath = (routePath: SelectedTab) => {
    const path = routePaths[routePath];

    return path
}