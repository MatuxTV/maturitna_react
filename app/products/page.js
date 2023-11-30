import React from "react";
import Image from "next/image";
import Nav from "../componets/nav";
import ProductCard from "../componets/productcard";

export const Produkty = () => {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <ProductCard/>
    </div>
  );
};
export default Produkty;
