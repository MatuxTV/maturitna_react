import React from "react";
import Nav from "../componets/nav";
import Link from "next/link";

export const Produkt = async ({ searchParams }) => {
  const product = searchParams.produkty;

  function getProducts() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS + `items/produkty?filter[produkty][id][_eq]=${product}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  function getCategory() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS + `items/kategoria/${product}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  const produkt = await getProducts();
  const kategoria = await getCategory();

  console.log(kategoria);

  return (
    <>
      <Nav product={"Produkty"} />
      <>
        <Link href="/products-cat">
          <p className="flex text-h4 m-10 font-plus-jakarta">
            Produkty/{kategoria.data.nazov}
          </p>
        </Link>
      </>
    </>
  );
};

export default Produkt;
