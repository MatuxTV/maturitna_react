import React from "react";
import Nav from "../componets/nav";
import Product from "../componets/product";
import Link from "next/link"; 

export const Produkty = async ({ searchParams }) => {
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

  return (
    <div>
      <Nav product={"Produkty"} />
      <div>
        <Link href="/products-cat">
          <p className="flex text-h4 m-10 font-plus-jakarta">
            Produkty/{kategoria.data.nazov}
          </p>
        </Link>
        <div className="flex flex-wrap justify-start m-8 space-x-5">
          {products.data?.map((item) => {
            return <Product {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Produkty;
