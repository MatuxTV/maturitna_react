"use client";
import React from "react";
import { useQuery } from "react-query";
import Nav from "../componets/nav";
import Product from "../componets/product";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "react-query";

const fetchProducts = async (category) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS}items/produkty?filter[kategoria][id][_eq]=${category}`,
    { cache: "no-store" }
  );
  return response.json();
};

const fetchCategory = async (category) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DIRECTUS}items/kategoria/${category}`,
    { cache: "no-store" }
  );
  return response.json();
};

const Produkty = ({ searchParams }) => {
  const category = searchParams.kategoria;

  // Použitie React Query na načítanie produktov
  const { data: products, isLoading: isLoadingProducts } = useQuery(
    ["products", category],
    () => fetchProducts(category)
  );

  // Použitie React Query na načítanie kategórie
  const { data: kategoria, isLoading: isLoadingCategory } = useQuery(
    ["category", category],
    () => fetchCategory(category)
  );

  if (isLoadingProducts || isLoadingCategory) return "Načítavam...";

  // Zobrazovanie toastov, ak je to potrebné
  if (kategoria.error) toast.error("Chyba pri načítaní kategórie.");

  console.log(kategoria);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Nav product={"Produkty"} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          zIndex={1}
        />
        <div>
          <Link href="/products-cat">
            <p className="flex text-h4 m-10 font-plus-jakarta">
              Produkty/{kategoria.data?.nazov}
            </p>
          </Link>
          <div className="flex flex-wrap justify-start m-8 space-x-5">
            {products.data?.map((item) => (
              <Product {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      </QueryClientProvider>
  );
};

export default Produkty;
