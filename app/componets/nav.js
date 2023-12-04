import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative items-center flex justify-between px-4 md:px-8 z-20">
      <div className="flex items-center m-3 md:m-6">
        <Link href="/">
          <Image
            className=" object-cover absolute z-20 m-1 md:m-6"
            src="/IMG/logo.png"
            alt="patras.sk"
            fill
            objectFit="contain"
            objectPosition="left"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex ml-auto">
          <li className="m-4 md:m-5 font-plus-jakarta">
            <Link
              href="/products"
              className="no-underline text-black1 text-h7 md:text-h6"
            >
              Produkty
            </Link>
          </li>
        </ul>
        <Link href="cart.html" className="ml-auto">
          <button
            type="button"
            className="bg-blue1 w-24 h-12 b-r rounded-lg hover:bg-blue2 hover:drop-shadow-md md:"
          >
            <i className="fas fa-cart-shopping text-white1" />
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
