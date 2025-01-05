import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="bg-white h-[65px]">Header</header>
      {/* Content */}
      <div className="bg-whitesmoke h-[888px]">{`Chat ID ${chatId}`}</div>
      {/* Chat Input */}
      <div className="bg-white h-[65px]">Chat Inputs</div>
    </div>
  );
}
