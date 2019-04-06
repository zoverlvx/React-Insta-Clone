import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

function CommentSection (props) {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState(() => {
		if(localStorage.getItem(props.postId)) {
			return JSON.parse(localStorage.getItem(props.postId))
		}
		if (!localStorage.getItem(props.postId)) {
			localStorage.setItem(
				props.postId,
				JSON.stringify(props.comments)
			)
			return JSON.parse(localStorage.getItem(props.postId))
		}
	});

	function storeComments(postId, comments) {
		localStorage.setItem(postId, JSON.stringify(comments))
	}
	
	function commentHandler(e) {
		const name = {[e.target.name]: e.target.value};
		setComment(name[e.target.name])
 	}	

	function handleCommentSubmit(e) {
		e.preventDefault();
		const newComment = {
			text: comment,
			username: "zoverlvx"
		};
		setComments([...comments, newComment]);
		storeComments(props.postId, [...comments]);
		setComment("");
	}
	
	return (
		<div>
			{comments.map((c, i) => <Comment key={i} comment={c} />)}
			<CommentInput 
				comment={comment}
				submitComment={handleCommentSubmit}
				changeComment={commentHandler}/>
		</div>
	)
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
    	PropTypes.shape({ 
			text: PropTypes.string, 
			username: PropTypes.string 
		})
  	),
	postId: PropTypes.string
};

export default CommentSection;
