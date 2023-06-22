import React from "react";


const Button = ({ children, style, ...props }) => {
  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
