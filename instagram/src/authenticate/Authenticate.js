import React, {useState} from 'react';
import PostsPage from '../components/PostsPage';
import Login from "../components/Login/Login";

function Authenticate(props) {
	const [authenticated, setAuth] = useState(false);
	if (authenticated) return <PostsPage />;
	return <Login loggedIn={setAuth}/>;
}

export default Authenticate;
