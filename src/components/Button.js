import React from "react";

function Button({ children, onClickhandle }) {
  return (
    <button className="h-9 w-20 border-2 border-[white] rounded  text-white">
      {children}
    </button>
  );
}
export default Button;
