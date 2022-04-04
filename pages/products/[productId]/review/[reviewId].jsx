import { useRouter } from "next/router";
import React from "react";

const Reviewid = () => {
  const router = useRouter();
  return (
    <h1>
      The review {router.query.reviewId} for {router.query.productId}
    </h1>
  );
};

export default Reviewid;
