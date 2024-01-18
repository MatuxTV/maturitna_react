import Image from "next/image";
import Link from "next/link";

export default async function ProductCard(data) {
  return (
    <Link
      className="bg-white1 md:w-96 md:h-[400px] flex flex-col border-2 border-white2 rounded-2xl hover:bg-blue2"
      href={`/products?kategoria=${data.id}`}
    >
      <div className="justify-center h-72 w-full relative my-5">
        <Image
          className="image"
          src={`${process.env.NEXT_PUBLIC_DIRECTUS}assets/${data.obrazok}`}
          alt="Product Image"
          fill
        />
      </div>
      <div className=" w-full  text-h5 relative">
        <p className=" text-center relative z-20 font-plus-jakarta">
          {data.nazov}
        </p>
        <div className=" bg-blue1 w-16 h-2 absolute rounded-lg bottom-0 z-10  rotate-[-2deg] left-[180px] "></div>
      </div>
    </Link>
  );
}
