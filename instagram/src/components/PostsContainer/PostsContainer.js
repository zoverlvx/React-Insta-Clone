import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = ({posts}) => {
  return (
    <div className="posts-container-wrapper">
      {posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;
