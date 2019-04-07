import React, {useState} from "react";
import {Form, FormGroup, Input} from "reactstrap";
import "./Login.css";

function Button({func, text}) {
	return <button onClick={func}>{text}</button>
}

export default function Login({login}) {
	const [username, setUser] = useState("");
	const [password, setPassword] = useState("");

//		Re-renders when input is incorrect. Bug.

	function logIn() {
		if (username === "" || password === "") {
			alert("Please, submit username and password");
		}
		if(!localStorage.getItem(username)) {
			alert("Username not found");
		}
		const isPassword = localStorage.getItem(username);
		if(localStorage.getItem(username) && password === isPassword) {
			login(true)
		}
		if(password !== isPassword) {
			alert("Wrong username and password combination.");
		}
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
					onChange={({target: {value}}) => setUser(value)} 
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
				text="Log In"
				func={logIn}
			>
				Login
			</Button>
		</Form>
	)
}
