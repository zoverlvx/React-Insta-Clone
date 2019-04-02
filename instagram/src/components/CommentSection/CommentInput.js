import React, {useState} from 'react';

const CommentInput = ({comments}) => {
	const [state, setState] = useState(comments);

	function addComment(e) {
		e.preventDefault();
		const newComment = {
			id: (new Date).getTime(),
			username: "zoverlvx",
			text: e.target.value
		};
		setState(state.concat(newComment))
	}
  return (
    <form onSubmit={addComment}>
      <input type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;
