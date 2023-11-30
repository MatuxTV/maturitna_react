import Image from "next/image";
import { getProducts } from "@/lib/products";
import Card from "./componets/card";
import Nav from "./componets/nav";

const ABT = (props) => {
  return (
    <>
      <div className="flex justify-center bg-white2">
        <div className="bg-blue1">
          <Image>
            src={props.image}
            alt="icon"
            fill
            className="relative z-20"
            objectFit="contain"
            objectPosition="top"
          </Image>
        </div>
        <>
        <p className=" text-white1">{props.text}</p>
        </>
      </div>
    </>
  );
};

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-full">
        <div className="relative top-0 w-full h-[60vw] md:h-[100vh]">
          <Image
            src="/IMG/banner.png"
            alt="main"
            fill
            className="relative z-10"
            objectFit="contain"
            objectPosition="top"
          />

          <div>
            <Nav />
          </div>

          <div className="relative left-[6%] w-[20vw] h-[25vw] md:w-[30vw] md:h-[35vw]">
            <Image
              src="/IMG/kavomat.png"
              alt="main"
              fill
              className="relative z-20"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <h1 className="md:text-h1 absolute right-[5vw] top-[17vw] z-20 max-w-[13ch]">
            Postaráme sa o váš pitný <b className="text-blue1"> REŽIM</b>
          </h1>
        </div>
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
        <Card image={"/IMG/kavomat1.png"} label="Kavomaty" />
        <Card image={"/IMG/lima1.png"} label="Davkovac vody" />
        <Card image={"/IMG/vodovac1.png"} label="Vodovac" />
      </div>

      <div>
        <ABT image={"/IMG/kavomat1.png"} text={"Produkty pre zakaznikov"}/>
        <ABT image={"/IMG/kavomat1.png"} text={"Produkty pre zakaznikov"}/>
        <ABT image={"/IMG/kavomat1.png"} text={"Produkty pre zakaznikov"}/>
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
