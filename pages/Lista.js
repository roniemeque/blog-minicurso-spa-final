import React, {useEffect, useState} from 'react';
import Post from '../components/Post';

const Lista = () => {

  const [posts, setPosts] = useState([]);

  const buscaPosts = async () => {
    const data = await (await fetch(`https://api-standalone.roniemeque.now.sh/api/ronie/posts/`)).json();
    setPosts(data.posts);
  }

  useEffect(() => {
    buscaPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="lista-posts">
        {!!posts.length ? (
          posts.map(post => <Post key={post.path} post={post}></Post>)
        ) : (
          <span>Sem posts!</span>
        )}
      </div>
    </div>
  );
};

export default Lista;