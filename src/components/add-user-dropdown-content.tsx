import React from "react";
import SearchInput from "./search-input";
import { p } from "motion/react-client";

const DUMMY_CONTACTS = new Array(3).fill("").map(() => ({
  name: "Test",
  isContactSavedInPhone: true,
}));

const AddUserDropdownContent = () => {
  return (
    <div className="px-2 pb-1">
      <p className="font-semibold text-base pt-2 py-2">Add User</p>
      {/* Search Input */}
      <SearchInput />
      <div className="mt-4">
        {DUMMY_CONTACTS?.map((item, index) => (
          <div className="text-wrap" key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUserDropdownContent;
