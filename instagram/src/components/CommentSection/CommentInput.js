import React, {useState} from 'react';

const CommentInput = ({addComment}) => {
	const [state, setState] = useState({
		text: "",
		id: (new Date()).getTime(),
		username: "zoverlvx"
	});

	function handleSubmit(e) {
		e.preventDefault();
		addComment({
			username: "zoverlvx",
			id: (new Date()).getTime(),
			text: state.text
		});
		setState({text: ""});
	}

	function handleChange(e) {
		setState({text: e.target.value});
	}
	

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text" 
				placeholder="Add comment... " 
				value={state.text}
				onChange={handleChange}
			/>
		</form>
	);
};

export default CommentInput;
