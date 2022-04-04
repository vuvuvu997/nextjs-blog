import React from "react";
import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`products/${product.id}`}>
            <a>
              {product.id} {product.name} {product.price}
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}

export default ProductList;
