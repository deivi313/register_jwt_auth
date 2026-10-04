import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className={`bg-${bg_color}-600 text-white font-medium px-4 py-2 rounded-lg shadow-md mr-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
