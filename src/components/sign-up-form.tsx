import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className="h-full w-full min-h-screen relative">
      <div className="grid grid-row-2">
        <div className="bg-green min-h-52">
          <p className="text-white pl-10 pt-6 inline-flex items-center gap-3">
            <FaWhatsapp className="text-gray-300" size={35} /> WHATSAPP
          </p>
        </div>
        <div className="bg-whitesmoke h-screen" />
      </div>
      {/* Signup Form */}
      <div className="absolute flex items-center justify-center mx-auto top-40 bottom-0 right-0 left-0 bg-white max-w-[900px] max-h-96 rounded-md p-10">
        <button className="bg-green text-white px-2 py-1 text-2xl rounded-md leading-tight">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
