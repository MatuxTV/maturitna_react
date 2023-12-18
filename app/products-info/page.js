import React from "react";
import Nav from "../componets/nav";
import { getProducts } from "@/lib/directus";

export const Produkty = async () => {
  function getProducts() {
    return fetch(process.env.NEXT_PUBLIC_DIRECTUS + "items/kategoria",{ cache: "no-store" }).then(
      (res) => res.json(),
    );
  }
  async function fetchData() {
    const data = await getProducts();
    return data;
  }

  return (
  <div>
    <Nav product={"Produkty"} />

  </div>
    
  );
};
export default Produkty;
