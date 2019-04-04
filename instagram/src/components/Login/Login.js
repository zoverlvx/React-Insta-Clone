import React, {useState} from "react";

export default function Login({loggedIn}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({username, password});

	function submitUserAndPass() {
		if (username === "" || password === "") {
			alert("Please, submit username and password");
			return null;
		}
		setState(Object(state, {username, password}));
		localStorage.setItem(username, password);
		loggedIn(true);
	}


	return (
		<form onSubmit={submitUserAndPass}>
			<input 
				name="username" 
				type="text" 
				value={username} 
				onChange={({target: {value}}) => setUsername(value)} 
			/>
			<input 
				name="password" 
				type="text" 
				value={password}
				onChange={({target: {value}}) => setPassword(value)} 
			/>
			<button>Login</button>
		</form>
	)
}
