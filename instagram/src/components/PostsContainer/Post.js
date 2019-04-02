import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

import './Posts.css';

const Post = ({post}) => {
  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <CommentSection comments={post.comments} />
    </div>
  );
};

export default Post;
