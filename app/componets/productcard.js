import React from "react";
import Image from "next/image";

const ProductCard = (props) => {
  const imageUrl = `http://localhost:8055/assets/${props.obrazok}/vyr_31dk2v208-vydejnik-vody.jpg`;

  return (
    <div>
      <div className="bg-white2 w-9 h-9"></div>
      <p>{props.meno}</p>
    </div>
  );
};

export default ProductCard;
