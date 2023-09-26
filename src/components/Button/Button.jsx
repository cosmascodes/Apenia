import React from "react";

const Button = (props) => {
  return (
    <button className="bg-primary text-white  px-6 py-2 text-[12px] rounded-[8px]">
      <p className="font-[700]">{props.name}</p>
    </button>
  );
};

export default Button;
