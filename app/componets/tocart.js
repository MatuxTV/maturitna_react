import React from "react";
import Image from "next/image";
const ToCart = () => {
  return (
    <button className="flex flex-row bg-blue1 rounded-md">
      <div>
        <div className="flex">
          <Image className="image" src="/IMG/ToCart.png" alt="kosik" fill />
        </div>
        <div>
          <p className="text-white1 font-plus-jakarta">Do Kosiku</p>
        </div>
      </div>
    </button>
  );
};
export default ToCart;
