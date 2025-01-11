import React from "react";
import SearchInput from "./search-input";

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
      <div className="mt-4">{JSON.stringify(DUMMY_CONTACTS)}</div>
    </div>
  );
};

export default AddUserDropdownContent;
