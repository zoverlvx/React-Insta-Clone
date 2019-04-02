import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

function CommentSection ({comments}) {
	const [state, setState] = useState([...comments]);	
	return (
		<div>
			{comments.map((c, i) => <Comment key={i} comment={c} />)}
			<CommentInput comments={comments}/>
		</div>
	)
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
