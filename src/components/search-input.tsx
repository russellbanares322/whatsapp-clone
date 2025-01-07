import React, { useRef } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="inline-flex relative px-2 w-full h-[32px] rounded-md gap-2 items-center border border-solid border-gray-300 before:absolute before:w-full before:bottom-0 before:left-0 before:border before:border-b-2 before:border-solid before:border-b-green before:rounded-bl-md before:rounded-br-md">
      <LiaSearchSolid className="text-gray-500" size={14} />
      <input
        autoFocus
        className="outline-none text-xs w-full mr-4"
        type="text"
        ref={inputRef}
        placeholder="Search or start a new chat"
      />
    </div>
  );
};

export default SearchInput;
