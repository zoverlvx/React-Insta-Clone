import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

function CommentSection ({comments}) {
	const [state, setState] = useState({comments, comment: ""});

	function commentHandler(e) {
		const name = {[e.target.name]: e.target.value}
		setState({
			"comments": state.comments,
			comment: name[e.target.name]
		})
	}

	function handleCommentSubmit(e) {
		e.preventDefault();
		const newComment = {
			text: state.comment, 
			username: "zoverlvx"
		};
		setState({
			comments: [...state.comments, newComment],
			comment: ""
		})
	}

	return (
		<div>
			{state.comments.map((c, i) => <Comment key={i} comment={c} />)}
			<CommentInput 
				comment={state.comment}
				submitComment={handleCommentSubmit}
				changeComment={commentHandler}/>
		</div>
	)
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
