import React from "react";

const typeStyle = {
  filled: " bg-blue-500 text-white ",
  line: " border-2 border-blue-500 text-blue-500 ",
  light: " bg-sky-100 text-blue-500 ",
  secondary: " border-2 border-gray-200 ",
};

const Button = ({ children, type, onClick, isDisabled }) => {
  return (
    <button
      className={"py-5 px-8 rounded-md disabled:opacity-40" + typeStyle[type]}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
