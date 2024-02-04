import React from "react";

const Button = ({ name, disabled }) => {
  return (
    <div>
      <button
        disabled={disabled}
        type="submit"
        className="text-white bg-black hover:bg-yellow-500 text-xl font-bold transition-all duration-500 w-48 h-14"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
