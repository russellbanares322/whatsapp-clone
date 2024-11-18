import React from "react";

const InnerSidebar = () => {
  return (
    <div className="border-r border-0 border-solid w-[268px]">
      <div className="max-h-[887px] overflow-auto px-[21px] py-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-[24px]">
          <p className="font-semibold">Chats</p>
          <div className="flex items-center gap-2">
            <p>N</p>
            <p>F</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerSidebar;
