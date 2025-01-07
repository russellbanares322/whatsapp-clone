import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  value: string;
  type: HTMLInputTypeAttribute;
};

const Input = ({ value, type }: InputProps) => {
  return <input value={value} type={type} />;
};

export { Input };
