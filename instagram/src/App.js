import React, { useState } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

function App() {
	const [state, setState] = useState(dummyData);
	return (
		<div className="App">
			<SearchBar />
			<PostsContainer posts={state} />
		</div>
	)
}

export default App;
