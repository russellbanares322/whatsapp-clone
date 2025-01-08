import React from "react";
import SearchInput from "./search-input";

const AddUserDropdownContent = () => {
  return (
    <div className="px-2 pb-1">
      <p className="font-semibold text-base pt-2 py-2">Add User</p>
      {/* Search Input */}
      <SearchInput />
    </div>
  );
};

export default AddUserDropdownContent;
