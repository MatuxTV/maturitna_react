import Nav from "../componets/nav";
import Link from "next/link";
import Image from "next/image";
import ToCart from "../componets/tocart";

const Produkt = async ({ searchParams }) => {

  const productID = searchParams.id;

  console.log(searchParams)
  function getProduct() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS +
        `items/produkty/${productID}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  
  const produkt = await getProduct();
  console.log(produkt)
  // useEffect(() => {
  //   async function fetchData() {
  //     const productResponse = await fetch(
  //       process.env.NEXT_PUBLIC_DIRECTUS+`items/produkty?filter[produkty][id][_eq]=${productID}`,
  //       { cache: "no-store" }
  //     );
  //     const produktData = await productResponse.json();
  //     setProdukt(produktData.data);
  //     console.log(produktData.data);

  //     const categoryResponse = await fetch(
  //       process.env.NEXT_PUBLIC_DIRECTUS+`items/kategoria/${productID}`,
  //       { cache: "no-store" }
  //     );
  //     const kategoriaData = await categoryResponse.json();
  //     setKategoria(kategoriaData.data);
  //   }
  //   fetchData();

  // }, [productID]);

  // if (!produkt || !kategoria) return <div>Loading...</div>;

  return (
    <div>
      <Nav product={"Produkty"} />
      <div className="">
        <div>
          {/* <Link href="/products">
            <p className="flex text-h4 m-10 font-plus-jakarta">
              Produkty/{kategoria.nazov}
            </p>
          </Link> */}
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 border justify-center items-center">
            <Image
              // Uncomment and use the following line if the image should be responsive
              // layout="responsive"
              src={`${process.env.NEXT_PUBLIC_DIRECTUS}assets/${produkt.data.obrazok}`}
              alt={produkt.data.meno} // Replace with actual product name
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2">
            {/* Uncomment and use the following lines if the product data is available */}
            <h1>{produkt.data.meno}</h1>
            <p>{produkt.data.popisok}</p>
            <p>{produkt.data.cena}</p>
            
            <ToCart product={produkt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produkt;
