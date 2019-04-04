import React, {useState} from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";

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
		<Form className="login-form">
			<h3>Welcome to React Insta Clone</h3>
			<div>Please Login</div>
			<FormGroup>
				<Input
					placeholder="User Name" 
					name="username" 
					type="text" 
					value={username} 
					onChange={({target: {value}}) => setUsername(value)} 
				/>
			</FormGroup>
			<FormGroup>
				<Input 
					placeholder="Password"
					name="password" 
					type="password" 
					value={password}
					onChange={({target: {value}}) => setPassword(value)} 
				/>
			</FormGroup>
			<br />
			<Button 
				color="success" 
				size="large"
				onClick={submitUserAndPass}
			>
				Login
			</Button>
		</Form>
	)
}
