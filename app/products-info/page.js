import Nav from "../componets/nav";
import Link from "next/link";
import Image from "next/image";
import ToCart from "../componets/tocart";

const Produkt = async ({ searchParams }) => {
  const productID = searchParams.produkty;



  function getProducts() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS +
        `items/produkty?filter[kategoria][id][_eq]=${[productID]}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  function getCategory() {
    return fetch(
      process.env.NEXT_PUBLIC_DIRECTUS + `items/kategoria/${productID}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
  }
  const produkt = await getProducts();
  const kategoria = await getCategory();

  console.log(produkt);
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
          <Link href="/products">
            <p className="flex text-h4 m-10 font-plus-jakarta">
              Produkty/{kategoria.nazov}
            </p>
          </Link>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 border justify-center items-center">
            <Image
              // Uncomment and use the following line if the image should be responsive
              // layout="responsive"
              src="/IMG/kavomat.png" // Replace with produkt.obrazok when available
              alt={produkt.nazov} // Replace with actual product name
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2">
            {/* Uncomment and use the following lines if the product data is available */}
            {/* <h1>{produkt.nazov}</h1>
            <p>{produkt.popis}</p>
            <p>{produkt.cena}</p> */}
            <h1>LIMA-2K</h1>
            <p>Dobry vodovac super mnam ahoj</p>
            <p>22</p>
            <ToCart product={produkt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produkt;
