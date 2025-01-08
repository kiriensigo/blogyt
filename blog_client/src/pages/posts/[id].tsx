import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";

interface Post {
    id:string;
    title: string;
    content: string;
    created_at: string;
}

type Props = (
    post: Post;
);

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3001/api/v1/posts");
    const posts: Post[] = await res.json();

    const paths = posts.map((post: Post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticPaths({ params }: { params:{ id:string } }) {
    const res = await fetch("http://localhost:3001/api/v1/posts/${params.id}");
    const posts: Post[] = await res.json();

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
    }
