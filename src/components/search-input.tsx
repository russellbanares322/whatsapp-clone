import React from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchInput = () => {
  return (
    <div className="inline-flex px-2 h-[32px] rounded-md gap-2 items-center border border-solid border-gray-300">
      <LiaSearchSolid className="text-gray-500" size={14} />
      <input
        className="outline-none border-none text-sm"
        type="text"
        placeholder="Search or start a new chat"
      />
    </div>
  );
};

export default SearchInput;
