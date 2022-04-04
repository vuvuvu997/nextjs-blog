import React from "react";
import { useRouter } from "next/router";

const PostItem = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h3>
        {post?.id} - {post?.title}
      </h3>
      <p>{post?.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();

  const paths = users.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths: paths.slice(0, 3), fallback: true };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postId
  );
  const data = await response.json();
  if (!data.id) {
    return { notFound: true };
  }
  return {
    props: { post: data },
  };
}

export default PostItem;
