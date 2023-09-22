import React from "react";

const Button = (props) => {
  return (
    <button className="bg-primary text-white  px-6 py-2 text-[12px] rounded-[8px] w-32">
      {props.name}
    </button>
  );
};

export default Button;
