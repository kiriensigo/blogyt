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

