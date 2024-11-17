import React from "react";
import OuterSidebar from "./outer-sidebar";
import InnerSidebar from "./inner-sidebar";

type ContentWrapperProps = {
  children: React.ReactNode;
};
const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="min-h-screen h-full flex bg-whitesmoke">
      <OuterSidebar />
      <div className="border border-solid m-4 bg-white h-screen w-screen rounded-xl flex">
        <InnerSidebar />
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
