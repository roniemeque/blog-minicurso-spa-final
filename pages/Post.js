import React, {useEffect, useState} from 'react';
import {
  useParams
} from "react-router-dom";

const Post = () => {
  let { postPath } = useParams();

  const [post, setPost] = useState([]);

  const buscaPost = async () => {
    const data = await (await fetch(`https://api-standalone.roniemeque.now.sh/api/ronie/posts/${postPath}`)).json();
    console.log(data.post);
    setPost(data.post);
  }

  useEffect(() => {
    buscaPost();
  }, []);

  return (
    <div className="container">
      {!!post ? (
        <div className="post-pagina">
        <h1>{post.titulo}</h1>
        <img src={post.thumb} alt="" className="post-imagem" />
        <div className="post-tags">
          {!!post.tags && post.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="post-corpo">{post.corpo}</p>
      </div>
      ) : (<span>Carregando</span>)}
    </div>
  );
};

export default Post;