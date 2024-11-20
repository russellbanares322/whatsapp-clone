import { IoCreateOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import SearchInput from "./search-input";

const InnerSidebar = () => {
  return (
    <div className="border-r border-0 border-solid w-[268px]">
      <div className="max-h-[887px] overflow-auto px-[18px] py-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-xl">Chats</p>
          <div className="flex items-center gap-2">
            <IoCreateOutline
              className="hover:bg-whitesmoke p-2 rounded-md"
              size={40}
            />
            <BsFilter
              className="hover:bg-whitesmoke p-2 rounded-md"
              size={40}
            />
          </div>
        </div>
        {/* Search Input */}
        <SearchInput />
      </div>
    </div>
  );
};

export default InnerSidebar;
