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

    export default function Post({ post }: Props) {
        const router = useRouter();

        if (router.isFallback) {
            return <div>Loading...</div>;
        }

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.date}>Posted on {post.created_at}</div>
                <p className={styles.content}>{post.content}</p>
            </div>
        );
    }
