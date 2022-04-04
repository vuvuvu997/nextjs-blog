import React from "react";
import Link from "next/Link";
export default function NewList({ news }) {
  return (
    <div>
      <h3>List news</h3>
      <div>
        {news.map((item) => (
          <div key={item.id}>
            <Link href={`news/${item.category}`}>
              <a>
                {item.title} | {item.category}
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return { props: { news: data } };
}
