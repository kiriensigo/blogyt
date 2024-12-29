import React, { FormEvent } from "react"
import styles from "../styles/Home.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefalut();

    //APIを叩く
    try{
        await axios.post("http:localhost3001:/api/v1/posts");
        title: title,
        content: content,
    });:

    Router.push("/");
    } catch (err) {
        alert("投稿に失敗しました");
    }
    };

     return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>ブログ新規登録</h1>
        <from className={Styles.form} onSubmit={handleSubmit}>
            <label className={Styles.label}>タイトル</label>
            <input
              type="text"
              className={Styles.input}
              onChange={(e: ChangeEvent<HTMLInputElement>)) =>
                setTitle(e.target.value)
              }
            />
            <label>本文</label>
            <textarea />
            <button type="submit">投稿</button>
        </from>

    </div>
    );
};