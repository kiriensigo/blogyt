import React from "react"

const CreatePost = () => {
    return (
    <div className={StyleSheet.container}>
        <h1 className={StyleSheet.title}>ブログ新規登録</h1>
        <from className={StyleSheet.form>
            <label className={StyleSheet.label}>タイトル</label>
            <input 
              type="text"
              className={StyleSheet.input}
              onChange= 
              />
            <label>本文</label>
            <textarea />
            <button type="submit">投稿</button>
        </from>

    </div>
    );
};