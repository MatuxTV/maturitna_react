import Image from "next/image";
import { getProducts } from "@/lib/products";
import ProductCard from "./componets/productcard";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Card from "./componets/card";


export default async function Home() {
  const products = await getProducts();
  console.log("products", products);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between pt-7 px-4 md:px-6">
        <div className="flex items-center m-3 md:m-5">
          <a href="index.html">
            <img
              className="h-12 md:h-[95px]"
              src="/IMG/logo.png"
              alt="patras.sk"
            />
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex ml-auto">
            <li className="m-4 md:m-5 font-plus-jakarta">
              <a
                href="products.html"
                className="no-underline text-black1 text-h7 md:text-h6"
              >
                Produkty
              </a>
            </li>
          </ul>
          <a href="cart.html" className="ml-auto">
            <button
              type="button"
              className="bg-blue1 w-24 h-12 b-r rounded-lg hover:bg-blue2 hover:drop-shadow-md md:"
            >
              <i className="fas fa-cart-shopping text-white1" />
            </button>
          </a>
        </div>
      </nav>
      <div className="flex items-center justify-center h-full">
        <img
          src="/IMG/main_frame.png"
          alt="main"
          className="max-w-full py-8 md:py-16"
          fill
        />
      </div>
      <h1 className="font-plus-jakarta text-h5 self-center drop-shadow-md md:text-h1">
        Produkty
      </h1>
      <img
        src="/IMG/produkt-kvapky.png"
        alt=""
        className="p-0 w-28 self-center md:w-64"
      />
      <div className="flex justify-center p-4 md:p-12 space-x-4 md:space-x-12">

        <Card image={"/IMG/kavomat1.png"} label="Kavomaty"/>
        <Card image={"/IMG/lima1.png"} label="Davkovac vody"/>
        <Card image={"/IMG/vodovac1.png"} label="Vodovac"/>
      </div>
      <div className="flex justify-center p-4 md:p-10">
        <img src="/IMG/frame_about.png" alt="onas" />
      </div>
      <div className="flex bg-white2 w-[88%] max-w-6xl m-auto rounded-3xl justify-between md:rounded-[40px] h-24 md:h-64 max-h-64">
        <div>
          <div>
            <p className="font-plus-jakarta text-h7 text-blue1 mx-4 my-2 md:m-8 md:text-h3">
              Vedeli ste ze...?
            </p>
          </div>
          <div>
            <p className="font-plus-jakarta flex text-black2 m-4 md:m-10 md:text-h7 text-[7px]">
              Pocit smädu je reakciou organizmu na začínajúcu dehydratáciu.
              Objavuje sa až vo chvíli, keď už vaše telo stratilo viac ako 1 %
              tekutín. Mali by ste preto piť priebežne behom celého dňa, nie až
              potom, keď dostanete smäd. Dajte si pauzu a pohár vody kľudne hneď
              teraz!
            </p>
          </div>
        </div>
        <div>
          <img
            className="flex w-[100%] h-full"
            src="/IMG/z_vodovac.png"
            alt="img"
          />
        </div>
      </div>
      
    </div>
  );
}
