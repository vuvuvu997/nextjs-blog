import React from "react";

const NewItem = ({ category, listCategory }) => {
  return (
    <div>
      <h3>
        List articale for category <b>{category}</b>
      </h3>
      <div>
        {listCategory.map((cat) => (
          <div key={cat.id}>
            <h4>
              {cat.id} {cat.title}{" "}
            </h4>
            <p>{cat.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news/?category=${category}`
  );
  const data = await response.json();
  return { props: { category, listCategory: data } };
}

export default NewItem;
