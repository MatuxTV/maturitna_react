import React from "react";
import Image from "next/image";
import Nav from "../componets/nav";
import ProductCard from "../componets/productcard";
import { getProducts } from "@/lib/products";

export const Produkty = async() => {
const products = await getProducts();
console.log(products);
  return (
    <div>
      <div>
        <Nav/>
      </div>
      {products.data.map((product) => (<ProductCard product={product} key={product.id}/>))}
    </div>
  );
};
export default Produkty;
