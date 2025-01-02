import React, { ChangeEvent, FormEvent, useState } form "react";
import styles from "../..styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
    const id = context.params.id;
}

const EdiPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
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