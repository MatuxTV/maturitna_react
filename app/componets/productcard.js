import Image from "next/image";

export default async function ProductCard(data) {
  return (
    <button className="bg-white1 md:w-96 md:h-[400px] flex flex-col border-2 border-white2 rounded-2xl hover:bg-blue2 ">
      <div className="justify-center h-full w-full relative m-4">
        <Image
          // className="image"
          src={`${process.env.DIRECTUS}assets/${data.obrazok}`}
          alt="Product Image"
          fill
          // objectFit="contain"
          // objectPosition="center"
          // width={1500}
          // height={1500}
        />
      </div>
      <div className=" w-full font-plus-jakarta text-h5 relative">
        <p className=" text-center relative z-20">{data.nazov}</p>
        <div className=" bg-blue1 w-16 h-2 absolute rounded-lg bottom-0 z-10  rotate-[-4deg] left-[180px] "></div>
      </div>
    </button>
  );
}
