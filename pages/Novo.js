import React, { useState } from "react";

const Novo = () => {
  const [post, setPost] = useState({
    titulo: "",
    tags: "",
    corpo: "",
    thumb: "https://blog-minicurso.roniemeque.now.sh/static/img/doguinho.jpg"
  });

  const [criandoPost, setCriandoPost] = useState(false);

  const [postCriadoPath, setPostCriadoPath] = useState("");

  const handleInput = e => {
    // e eh um evento sintetico
    const {
      currentTarget: { value, name }
    } = e;

    setPost({
      ...post,
      [name]: value
    });
  };

  const criarPost = async e => {
    e.preventDefault();

    setCriandoPost(true);

    const res = await fetch(`https://api-standalone.roniemeque.now.sh/api/ronie/posts/criar?${Object.keys(post).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(post[k])}`).join('&')}`);
    const { path } = await res.json();

    setPostCriadoPath(path);
    setCriandoPost(false);
  };

  return (
    <div className="container">
      <h1>Novo post</h1>
      <form onSubmit={criarPost} className="form">
        <input
          placeholder="Titulo"
          value={post.titulo}
          type="text"
          name="titulo"
          className="input"
          onChange={handleInput}
        />
        <input
          placeholder="Tag1, Tag2, Tag3"
          value={post.tags}
          type="text"
          name="tags"
          className="input"
          onChange={handleInput}
        />
        <input
          placeholder="Thumb"
          value={post.thumb}
          type="text"
          name="thumb"
          className="input"
          onChange={handleInput}
        />
        <textarea
          placeholder="Corpo"
          value={post.corpo}
          type="text"
          name="corpo"
          className="input"
          onChange={handleInput}
        ></textarea>
        <button className="button">Criar</button>
        {!!criandoPost && (
          <div className="circulo-loading">
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
        {!!postCriadoPath && (
          <a href={`/posts/${postCriadoPath}`} className="post-criado-link">Post criado!</a>
        )}
      </form>
    </div>
  );
};

export default Novo;