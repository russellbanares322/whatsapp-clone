import React from "react";

type ContentWrapperProps = {
  children: React.ReactNode;
};
const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div>
      WHATSUP
      {children}
    </div>
  );
};

export default ContentWrapper;
