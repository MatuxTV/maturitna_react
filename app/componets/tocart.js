"use client";
import React from "react";
import Image from "next/image";

const ToCart = () => {
  return (
    <div>
      <button className="bg-blue1 rounded-md hover:shadow">
        <div className="flex flex-row items-center">
          <div className="flex">
            <i className="fa-solid fa-cart-arrow-down text-white1 m-2" />
          </div>
          <div>
            <p className="text-white1 text-h6">Do Kosiku</p>
          </div>
        </div>
      </button>
    </div>
  );
};
export default ToCart;
