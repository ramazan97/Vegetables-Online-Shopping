import React from "react";

const Button = ({ name, disabled, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        type="submit"
        className="text-white dark:border dark:border-yellow-500 bg-black hover:bg-yellow-500 text-xl font-bold transition-all duration-500 w-48 h-14 flex items-center justify-center "
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
