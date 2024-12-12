import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
      <div className="absolute flex items-center w-full justify-center mx-auto top-40 bottom-0 right-0 left-0 bg-white max-w-[900px] max-h-96 rounded-md px-10">
        <SignInButton mode="modal">
          <button className="inline-flex items-center px-2 py-1 gap-2 rounded-md outline-none border-none bg-green text-white">
            <FcGoogle className="bg-white rounded-full" size={30} />
            Log-In using Google
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignUpForm;
