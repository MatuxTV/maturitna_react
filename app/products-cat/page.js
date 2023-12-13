import React from "react";
import Nav from "../componets/nav";
import ProductCard from "../componets/productcard";
import { getProducts } from "@/lib/directus";
import directus from "/lib/directus";
import { readItems } from "@directus/sdk";

export const Produkty = async () => {
  function getProducts() {
    return fetch(process.env.DIRECTUS + "items/kategoria").then((res) =>res.json(), {cache :"no-store"})
  }
  
  async function fetchData() {
    const data = await getProducts();
    return data;
  }

  const res= await fetchData();
  const data = res.data;
  
  
  return (
    <div>
      <Nav />
      <div className="flex justify-center flex-col">
        <div className="w-full justify-center flex">
          <h1 className="flex font-plus-jakarta text-h5 m-16 md:text-h2 ">
            Produkty
          </h1>
        </div>
        <div className="flex flex-wrap flex-row space-x-16 m-16">
        {data?.map((item)=>{
          return<ProductCard {...item} key={item.id}/>
        })}
          
  
        </div>
      </div>

      {/* {products.data.map((product) => (<ProductCard meno={"meno"} key={product.id}/>))} */}
    </div>
  );
};
export default Produkty;
