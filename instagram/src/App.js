import React, { useState, useEffect } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

function App() {
	const [state, setState] = useState({
		posts: [],
		filteredPosts: []
	});

	function componentDidMount () {
	    useEffect(() => setState({posts: dummyData, filteredPosts: []}), [])
	    return null;
	}

	componentDidMount();

	function searchPostsHandler(e) {
		console.log("value from search bar", e.target.value)
    	const posts = state.posts.filter(p => {
      		if (p.username.includes(e.target.value)) {
        		return p;
      		}
    	});
    	setState({ filteredPosts: posts });
  }

	return (
		<div className="App">
			<SearchBar searchPosts={searchPostsHandler}/>
			<PostsContainer 
				posts={
					state.filteredPosts.length > 0
					? state.filteredPosts
					: state.posts
				} 
			/>
		</div>
	)
}

export default App;
