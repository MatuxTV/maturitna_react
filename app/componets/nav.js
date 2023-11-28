import React from "react";
import Image from "next/image";

const Nav = () => {
    return(
    <nav className="relative flex justify-between px-4 md:px-6 z-20">
    <div className="flex items-center m-3  md:m-5">
      <a href="/page">
        <img className="h-12 md:h-[95px]" src="/IMG/logo.png" alt="patras.sk" />
      </a>
    </div>
    <div className="flex items-center">
      <ul className="flex ml-auto">
        <li className="m-4 md:m-5 font-plus-jakarta">
          <a
            href="/products"
            className="no-underline text-black1 text-h7 md:text-h6"
          >
            Produkty
          </a>
        </li>
      </ul>
      <a href="cart.html" className="ml-auto">
        <button
          type="button"
          className="bg-blue1 w-24 h-12 b-r rounded-lg hover:bg-blue2 hover:drop-shadow-md md:"
        >
          <i className="fas fa-cart-shopping text-white1" />
        </button>
      </a>
    </div>
  </nav>
  )
};
export default Nav;