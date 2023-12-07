import React from "react";
import Image from "next/image";
import Nav from "../componets/nav";
import ProductCard from "../componets/productcard";
import { getProducts } from "@/lib/directus";

export const Produkty = async () => {
  // const products = await getProducts();
  // console.log(products);
  // const renderCards = () => {

  //   while (products.id != 0 ){
  //       <div className="flex justify-between m-16">
  //         <ProductCard />
  //         <ProductCard />
  //         <ProductCard />
  //         <ProductCard />
  //       </div>
  //   };
  //   return renderCards;
  // }

  return (
    <div>
      <Nav />
      <div className="flex justify-center flex-col">
        <div className="w-full justify-center flex">
          <h1 className="flex font-plus-jakarta text-h5 m-16 md:text-h2 ">
            Produkty
          </h1>
        </div>
        <div className="flex flex-wrap  space-x-4 justify-between m-16">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        
          
  
        </div>
      </div>

      {/* {products.data.map((product) => (<ProductCard meno={"meno"} key={product.id}/>))} */}
    </div>
  );
};
export default Produkty;
