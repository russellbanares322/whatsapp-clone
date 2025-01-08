import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { twMerge } from "tailwind-merge";

type SearchInputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    setIsInputFocused(true);
  }, []);

  return (
    <div
      className={twMerge(
        "inline-flex relative bg-white px-2 w-full h-[32px] rounded-md gap-2 items-center border border-solid border-gray-300",
        isInputFocused &&
          "before:absolute before:w-full before:bottom-0 before:left-0 before:border before:border-b-2 before:border-solid before:border-b-green before:rounded-bl-md before:rounded-br-md"
      )}
    >
      <LiaSearchSolid className="text-gray-500" size={14} />
      <input
        value={value}
        onChange={onChange}
        autoFocus
        className="outline-none text-xs w-full mr-4 bg-transparent"
        type="text"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        placeholder="Search or start a new chat"
      />
    </div>
  );
};

export default SearchInput;
