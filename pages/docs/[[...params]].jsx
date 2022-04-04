import React from "react";
import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <h1>
        View docs for feature {params[0]} with concept {params[1]}
      </h1>
    );
  }
  if (params.length === 1) {
    return <h1>View docs for feature {params[0]}</h1>;
  }
  return (
    <div>
      <h1>This is page docs</h1>
    </div>
  );
};

export default Docs;
