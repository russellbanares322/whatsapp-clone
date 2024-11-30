import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="bg-white h-[65px]">Header</header>
      {/* Content */}
      <div className="bg-whitesmoke h-[888px]">Content</div>
      {/* Chat Input */}
      <div className="bg-white h-[65px]">Chat Inputs</div>
    </div>
  );
}
