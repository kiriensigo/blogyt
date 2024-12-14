import React from react";

export async function getStaticProps({params}): { params: { id: strring } }) {
    const res = await fetch("https://localhost:3000/api/v1/posts/${params.id}");
    const posts = await res.json();
  
    console.log(posts);
  
    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
}

const Post = () => {
    return <div>[id]</div>;
};

export defalut Post;