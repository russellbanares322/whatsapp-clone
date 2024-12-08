import React from "react";

const SignUpForm = () => {
  return (
    <div className="h-full w-full min-h-screen relative">
      <div className="grid grid-row-2">
        <div className="bg-green min-h-52">
          <p className="text-white">WhatsApp</p>
        </div>
        <div className="bg-whitesmoke h-screen" />
      </div>
      {/* Signup Form */}
      <div className="absolute mx-auto top-40 bottom-0 right-0 left-0 bg-white max-w-[900px] max-h-96 rounded-md p-10">
        SignUpForm
      </div>
    </div>
  );
};

export default SignUpForm;
