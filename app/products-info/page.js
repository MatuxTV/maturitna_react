import React from "react";
import Nav from "../componets/nav";
import Product from "../componets/product";
import Link from "next/link"; 


const Produkty = async ({ searchParams }) => {

  const category = searchParams.kategoria;


  function getProducts() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS +
        `items/produkty?filter[kategoria][id][_eq]=${category}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  function getCategory() {
    return fetch(process.env.NEXT_PUBLIC_DIRECTUS + `items/kategoria/${category}`, {
      cache: "no-store",
    }).then((res) => res.json());
  }
  const products = await getProducts();
  const kategoria = await getCategory();

  console.log(products);

  return (
    
    <div>
      <Nav product={"Produkty"} />
      <div>
          {/* <Link href="/products-cat">
            <p className="flex text-h4 m-10 font-plus-jakarta">
              Produkty/{kategoria.nazov}
            </p>
          </Link> */}
        
      </div>
    </div>
  );
};

export default Produkty;
