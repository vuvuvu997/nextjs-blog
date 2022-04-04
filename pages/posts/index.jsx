import React from "react";
import Link from "next/Link";
const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List post</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <a>
                {item.id} - {item.title}
              </a>
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
export default PostList;
