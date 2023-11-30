import React from 'react';
import Image from 'next/image';



const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-white2">
        <Image>
          src={product.image}
          alt={product.name}
          fill className="relative z-20" objectFit="contain"
          objectPosition="top"
        </Image>
      </div>
      <p>
        {product.name}
      </p>
    </div>
  );
};
export default ProductCard;
