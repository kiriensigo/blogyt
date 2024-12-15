import React from react";

typre Props = {
    post: Post;
};

export async function getStaticPaths() {
    const resi = await fetch("http://localhost:3001/api/v1/posts")
    const posts: Post[] =await resi.json();

    const paths = posts.map((post) => ) ({
        params: {id: posts.indexOf.toString()} ,
    }));

    return {
        paths,
        fallback: true,
    };
}


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