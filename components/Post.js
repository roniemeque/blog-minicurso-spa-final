import React from 'react';

const Post = ({ post }) => (
  <a href={`/posts/${post.path}`} title={post.titulo} className="post-card">
    <img src={post.thumb} alt="" className="post-thumb" />
    <h2 className="post-card-titulo">{post.titulo}</h2>
    <div className="post-tags">
      {post.tags.map(tag => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  </a>
);

export default Post;