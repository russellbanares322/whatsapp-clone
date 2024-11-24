import { IoMenuOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const OuterSidebar = () => {
  return (
    <div className="w-[40px]">
      <div className="mt-[50px] ml-2">
        <IoMenuOutline
          className="hover:bg-[#ededed] p-2 rounded-md"
          size={35}
        />
        <div className="mt-6 space-y-3">
          <BsChatText className="hover:bg-[#ededed] p-2 rounded-md" size={33} />
          <div className="hover:bg-[#ededed] rounded-md ">
            <FiPhone className="rotate-12 p-2" size={33} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterSidebar;
