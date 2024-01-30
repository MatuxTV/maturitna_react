import Nav from "../componets/nav";
import Link from "next/link";
import Image from "next/image";
import ToCart from "../componets/tocart";
import BackButton from "../componets/back_button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Produkt = async ({ searchParams }) => {
  const productID = searchParams.id;

  console.log(searchParams);
  function getProduct() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS + `items/produkty/${productID}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }

  const produkt = await getProduct();

  return (
    <div>
      <Nav product={"Produkty"} />
      <BackButton/>
      <div className=" flex">
        <div className="flex flex-row">
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        zIndex={1}
      />
          <div className="w-1/2 justify-center items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_DIRECTUS}assets/${produkt.data.obrazok}`}
              alt={produkt.data.meno}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 m-5">
            <div className="">
              <h1 className=" text-h3 font-plus-jakarta py-8">
                {produkt.data.meno}
              </h1>
            </div>
            <div>
              <p className=" text-left py-5 font-plus-jakarta ">
                {produkt.data.popisok}
              </p>
            </div>
            <div>
              <p className=" text-h4 font-plus-jakarta py-5">
                {produkt.data.cena}€
              </p>
            </div>
            <div className=" align-middle py-5">
              <ToCart product={produkt.data} />
            </div>
            <div>
              <p
                className={`${
                  produkt.data.dostupnost
                    ? "text-blue1 text-h6"
                    : "text-red text-h6"
                } py-8 font-plus-jakarta`}
              >
                {produkt.data.dostupnost ? `Na sklade - ${produkt.data.mnozstvo}ks` : "Nedostupne"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produkt;
