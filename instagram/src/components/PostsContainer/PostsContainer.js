import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from "styled-components";

const PostWrapper = styled.div`
	height: 50%;
	width: 45%;
	min-width: 300px;
	margin: 5px auto;
`;

const PostsContainer = ({user, posts}) => {
  return (
	<PostWrapper>
      {posts.map(p => <Post user={user} key={p.imageUrl} post={p} />)}
	</PostWrapper>
  );
};

export default PostsContainer;
