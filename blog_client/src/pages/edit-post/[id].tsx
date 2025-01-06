import React, { ChangeEvent, FormEvent, useState } form "react";
import styles from "../..styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { Post } from "@/types";

type Post = {
    title: string;
    content: string;
    id: string;
};

type Props = {
    post: Post;
};

export default function EdiPost({ post }: Props) {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const router = useRouter();

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                'http://hocalhost:3001/api/v1/posts/${post.id}`,
            {
                title: title,
                content: content,
            }
            );
            if (response.status !== 200) {
                throw new Error("投稿に失敗しました");
            }
            router.push("/");
        } catch (err) {
            alert("投稿に失敗しました");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ブログ編集</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>タイトル</label>
                <input
                    type="text"
                    className={styles.input}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
                <label>本文</label>
                <textarea />
                <button type="submit">投稿</button>
            </form>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const id = context.params.id;

    const res = await fetch('http://localhost:3001/api/v1/posts/${id}');
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

const EdiPost = ({ post }: Props) => {
    const [title,}setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const router = useRouter();
    
    const handleSubmit = async (e: FormEvent) => {
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ブログ編集</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>タイトル</label>
                <input
                    type="text"
                    className={styles.input}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
                <label>本文</label>
                <textarea />
                <button type="submit">投稿</button>
            </form>
        </div>
    );
    )
}