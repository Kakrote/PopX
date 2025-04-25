import React from "react";

const Input = React.forwardRef(
  ({ label, type = "text", name, placeholder = " ", className = "", ...rest }, ref) => {
    return (
      <div className={`relative w-full ${className}`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        {label && (
          <label
            htmlFor={name}
            className="absolute left-2 rounded-lg top-[-10px] text-gray-500 text-sm transition-all peer-placeholder-shown:top-[-10px] peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-500 peer-focus:text-sm peer-focus:text-blue-600 bg-white px-1"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
