import Image from 'next/image';

import { productData } from "../../data/products";

const ProductCard = () => {
  return (
    <>
      {productData.map((product, key) => {
        return (
          <div key={key} className="product--card">
            <div className='product--card__image--container'>
              <Image
                className='product--card__image'
                src={product.img}
                alt={product.alt}
                width={100}
                height={100}
              />
            </div>
            <h3>
              {product.product}
            </h3>
            <p>
              {product.description}
            </p>
            <button>VIEW DETAILS</button>
          </div>
        )
      })}
    </>
  );
}

export default ProductCard;
