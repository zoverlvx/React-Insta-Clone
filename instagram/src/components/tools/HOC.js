import React, {useState} from 'react';

const HOC = (Login) => (PostsPage) => () => {
	const [state, loggedIn] = useState(false);
	if(state) return <PostsPage />;
	return <Login loggedIn={loggedIn} />
}

export default HOC;
