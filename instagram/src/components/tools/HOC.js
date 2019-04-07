import React, {useState} from 'react';

/*const HOC = (Login) => (PostsPage) => () => {
	const [state, loggedIn] = useState(false);
	if(state) return <PostsPage />;
	return <Login loggedIn={loggedIn} />
}
*/

const HOC = (SignUp) => (Login) => (PostsPage) => ({
	ofSignUp,
	ofLogin, 
	ofUser, 
	ofPassword
}) => () => {
	const [loggedIn, logIn] = useState(ofLogin);
	const [username, setUser] = useState(ofUser);
	const [password, setPassword] = useState(ofPassword);
	const [signedUp, signUp] = useState(ofSignUp);
	if (loggedIn) return <PostsPage user={username}/>
	if(signedUp) return <Login login={logIn} />
	return <SignUp signup={{signedUp, signUp, username, setUser, password, setPassword}}/>
}

export default HOC;
