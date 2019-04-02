import React, { useState, useEffect } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

function App() {
	const [state, setState] = useState([]);
	function componentDidMount () {
	    useEffect(() => setState(dummyData), [])
	    return null;
	}
	componentDidMount();
	return (
		<div className="App">
			<SearchBar />
			<PostsContainer posts={state} />
		</div>
	)
}

export default App;
