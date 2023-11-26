import Image from "next/image";
import { getProducts } from "@/lib/products";
import ProductCard from "./componets/productcard";

export default async function Home() {
  const products = await getProducts();
  console.log("products", products);
  //

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between pt-7 px-4 md:px-6">
        <div className="flex items-center m-3 md:m-5 relative w-8">
          <a href="index.html">
            {
              <Image
                className="h-12 md:h-[95px]"
                src="/IMG/logo.png"
                alt="patras.sk"
                fill
              />
            }
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex ml-auto">
            <li className="m-4 md:m-5 font-plus-jakarta">
              <a
                href=""
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

      <div className="flex items-center justify-center h-8">
        {
          <Image
            src="/IMG/main_frame.png"
            alt="main"
            className="max-w-full py-8 md:py-16"
            fill
          />
        }
      </div>
      <h1 className="font-plus-jakarta text-h5 self-center drop-shadow-md md:text-h1">
        Produkty
      </h1>
      {/* <Image
        src="/IMG/produkt-kvapky.png"
        alt=""
        className="p-0 w-28 self-center md:w-64"
        fill
      /> */}
      <div className="flex justify-center p-4 md:p-12 space-x-4 md:space-x-12">
        <button
          type="button"
          href=""
          className="border border-black2 rounded-3xl drop-shadow-lg p-4 w-80 hover:bg-blue2 md:p-8"
        >
          <div className="w-full justify-center">
            <Image src="/IMG/kavomat1.png" alt="kavomat1" fill />
          </div>
          <h1 className="font-plus-jakarta text-center pt-8">Kavomaty</h1>
        </button>
        <button className="border border-black2 rounded-3xl drop-shadow-md w-80 hover:bg-blue2 p-4 md:p-8">
          <div className="w-full justify-center">
            {/* <Image src="/IMG/lima1.png" alt="vodomat" fill /> */}
          </div>
          <h1 className="font-plus-jakarta text-center pt-8">Davkovac vody</h1>
        </button>
        <button className="border border-black2 rounded-3xl drop-shadow-md hover:bg-blue2 p-4 md:p-8">
          <div>
            {/* <Image
              src="/IMG/vodovac1.png"
              alt="vodovac"
              className="w-full"
              fill
            /> */}
          </div>
          <h1 className="font-plus-jakarta text-center pt-8">Vodovac</h1>
        </button>
      </div>
      <div className="flex justify-center p-4 md:p-10">
        {/* <Image src="/IMG/frame_about.png" alt="onas" fill /> */}
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
          {/* <Image
            className="flex w-[100%] h-full"
            src="/IMG/z_vodovac.png"
            alt="img"
            fill
          /> */}
        </div>
      </div>
    </div>
  );
}
