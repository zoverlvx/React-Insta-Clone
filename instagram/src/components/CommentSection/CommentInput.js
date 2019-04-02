import React, {useState} from 'react';

const CommentInput = (props) => {
	return (
		<form onSubmit={props.submitComment}>
			<input
				name="zoverlvx" 
				type="text" 
				placeholder="Add comment... " 
				value={props.comment}
				onChange={props.changeComment}
			/>
		</form>
	);
};

export default CommentInput;
