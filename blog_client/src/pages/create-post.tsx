import React from "react"
import styles from "../styles/Home.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e)
    =>

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