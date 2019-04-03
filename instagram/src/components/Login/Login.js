import React, {useState} from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({});
	
	function handleChange(e, fn) {
			fn(e.target.value);
	}

	function submitUserAndPass() {
		setState({username, password});
	}


	return (
		<form onSubmit={submitUserAndPass}>
			<input 
				name="username" 
				type="text" 
				value={username} 
				onChange={(e) => handleChange(e, setUsername)} 
			/>
			<input 
				name="password" 
				type="text" 
				value={password}
				onChange={(e) => handleChange(e, setPassword)} 
			/>
			<button>Login</button>
		</form>
	)
}
