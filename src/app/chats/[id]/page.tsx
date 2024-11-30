import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <header className="bg-white h-[65px]">Header</header>
      {/* Content */}
      <div className="bg-whitesmoke h-[888px]">{`ID: ${id}`}</div>
      {/* Chat Input */}
      <div className="bg-white h-[65px]">Chat Inputs</div>
    </div>
  );
}
