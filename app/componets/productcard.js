"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import directus from "/lib/directus";
import { readItems } from "@directus/sdk";

async function getProducts() {
  return directus.request(readItems("produkty"));
}

async function fetchData() {
  const data = await getProducts();
  return data;
}

export default function ProductCard() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAndSetState();
  }, []);

  

  return (
    <button className="bg-white1 md:w-96 md:h-[400px] border-2 border-white2 rounded-2xl hover:bg-blue2 ">
    <div className="flex justify-center relative m-6">
      {/* <Image
        src={data.obrazok}
        alt="Product Image"
        width={140}
        height={100}
      /> */}
    </div>
    <div className="flex justify-center font-plus-jakarta text-h6">
      {/* <p>{data.meno}</p> */}
    </div>
  </button>
  );
}