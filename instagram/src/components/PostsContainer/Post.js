import React, {useState} from 'react';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import LikeSection from "./LikeSection";
import styled from "styled-components";

import './Posts.css';

const PostBorder = styled.div`
	border: 1px solid #d3d3d3;
	margin: 15px 0;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImage = styled.img`
	width: 100%;
`;

const Post = ({
	post: {
			likes, 
			username,
			thumbnailUrl,
			imageUrl,
			comments
	}
}) => {
	const [state, setState] = useState({
		likes: likes
	});
	function incrementLike() {
	    let likes = state.likes + 1;
	    setState({likes})
	}
	
	return (
		<PostBorder>
			<PostHeader
				username={username}
				thumbnailUrl={thumbnailUrl}
			/>
			<PostImage
				alt="post thumbnail"
				src={imageUrl}
			/>
			<LikeSection 
				incrementLike={incrementLike} 
				likes={state.likes}
			/>
			<CommentSection comments={comments} />
		</PostBorder>
	);
};

Post.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string
	})
};

export default Post;
