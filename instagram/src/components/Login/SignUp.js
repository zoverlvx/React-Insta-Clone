import React from "react";
import {Form, FormGroup, Input} from "reactstrap";
import "./Login.css";

function Button({func, text}) {
	return <button onClick={func}>{text}</button>
}

export default function SignUp({
	signup: {
		signedUp,
		signUp,
		username, 
		setUser, 
		password, 
		setPassword
	}
}) {
	function submitUserAndPass() {
		if (username === "" || password === "") {
			alert("Please, submit username and password");
			return null;
		}
		setUser(username);
		setPassword(password);
		localStorage.setItem(username, password);
		signUp(true);
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
			text="Sign Up"
			func={submitUserAndPass}
		>
			Login
		</Button>
	</Form>
	);
}
