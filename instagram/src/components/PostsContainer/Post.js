import React, {useState} from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import LikeSection from "./LikeSection";

import './Posts.css';

const Post = ({post}) => {
	const [state, setState] = useState({
		likes: post.likes
	});
	function incrementLike() {
	    let likes = state.likes + 1;
	    setState({likes})
	}
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
			<LikeSection 
				incrementLike={incrementLike} 
				likes={state.likes}
			/>
			<CommentSection comments={post.comments} />
		</div>
	);
};

export default Post;
