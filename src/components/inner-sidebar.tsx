import { IoCreateOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";

const InnerSidebar = () => {
  return (
    <div className="border-r border-0 border-solid w-[268px]">
      <div className="max-h-[887px] overflow-auto px-[21px] py-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-[24px]">
          <p className="font-semibold text-xl">Chats</p>
          <div className="flex items-center gap-4">
            <IoCreateOutline size={20} />
            <BsFilter className="pt-1" size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerSidebar;
