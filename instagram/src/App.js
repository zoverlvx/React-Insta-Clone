import React, {useState} from 'react';
import './App.css';
import Authenticate from "./authenticate/Authenticate";
import PostsPage from './components/PostsPage';
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="App">
			<Authenticate />
		</div>
	)
}

export default App;
