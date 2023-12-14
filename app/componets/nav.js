import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = (props) => {
  return (
    <nav className="relative items-center flex justify-between px-4 md:py-2 z-20">
      <div className="flex items-center ">
        <Link href="/">
          <div className="container relative z-20 md:m-6">
          <Image
            className="z-20 md:m-6"
            src="/IMG/logo.png"
            alt="patras.sk"
            height={150}
            width={150}
            objectFit="contain"
            objectPosition="left"
          />
          </div>
          
        </Link>
      </div>
      <div className="flex items-center m-4,5">
        <ul className="flex ml-auto">
          <li className="m-4 md:m-5 font-plus-jakarta">
            <Link
              href="/products-cat"
              className="no-underline text-black1 text-h7 md:text-h6"
            >
              {props.product}
            </Link>
          </li>
        </ul>
        <Link href="cart.html" className="ml-auto">
          <button
            type="button"
            className="bg-blue1 w-24 h-12 rounded-lg hover:bg-blue2 hover:drop-shadow-md shadow"
          >
            <i className="fas fa-cart-shopping text-white1"/>
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
