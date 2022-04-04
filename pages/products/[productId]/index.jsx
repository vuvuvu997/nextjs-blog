import React from "react";
import { useRouter } from "next/router";
const Productid = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h3>
        {product.id} {product.name} {product.price}
      </h3>
      <p>{product.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  const paths = data.map((pro) => ({
    params: { productId: pro.id.toString() },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  if (!data.id) {
    return { notFound: true };
  }
  return { props: { product: data } };
}

export default Productid;
