import React from "react";
import Image from "next/image";
import Nav from "../componets/nav";
import ProductCard from "../componets/productcard";
import { getProducts } from "@/lib/directus";
import directus from "/lib/directus";
import { readItems } from "@directus/sdk";
import Product from "../componets/product";

export const Produkty = async () => {
  function getProducts() {
    // return directus.request(readItems("produkty"));
    return fetch(process.env.DIRECTUS + "items/produkty").then(
      (res) => res.json(),
      { cache: "no-store" }
    );
  }

  async function fetchData() {
    const data = await getProducts();
    return data;
  }

  const res = await fetchData();
  const data = res.data;

  console.log(data);
  {
    data?.map((item) => {
      return <Product {...item} key={item.id} />;
    });
  }
  return (
    <div>

      <Nav />
      
      <div>
        <div>
          <p className="flex text-h4 m-10 font-plus-jakarta">Produkty/{data.meno}</p>
        </div>
        <div className="flex flex-wrap justify-start m-8 space-x-5">
          {data?.map((item) => {
            return <Product {...item} key={item.id} />;
          })}
          </div>
      </div>

    </div>
  );
};
export default Produkty;
