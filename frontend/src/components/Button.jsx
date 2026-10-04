import React from "react";

const colors = {
  green: "bg-green-600",
  red: "bg-red-700",
  blue: "bg-blue-600",
};

const Button = ({ children, bg_color = "blue", onClick }) => {
  return (
    <button
      className={`${colors[bg_color]} text-white font-medium px-4 py-2 rounded-lg shadow-md mr-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
