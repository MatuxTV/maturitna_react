import React from "react";
import Image from "next/image";
import directus from "/lib/directus";
import { readItems } from "@directus/sdk";

// async function getProducts() {
//   return directus.request(readItems("produkty"));
// }

export default async function ProductCard() {
  // const products = await getProducts();
  return (
    <button className="bg-white1 w-64 h-80 border-2 rounded-2xl hover:bg-blue2 ">
      <div className="flex justify-center relative m-6">
        <Image
          src="/IMG/kavomat1.png"
          alt="Picture of the author"
          width={140}
          height={100}
        />
      </div>
      <div className="flex justify-center font-plus-jakarta text-h6">
        <p>Davkovac</p>
      </div>
    </button>
  );
}
