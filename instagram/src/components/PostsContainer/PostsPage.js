import React, { useState, useLayoutEffect } from 'react';
import dummyData from '../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

function PostsPage({user}) {
	const [state, setState] = useState({
		posts: [],
		filteredPosts: []
	});

	function componentDidMount () {
	    useLayoutEffect(() => setState({posts: dummyData, filteredPosts: []}), [])
		return null;
	}

	componentDidMount();

	function searchPostsHandler(e) {
    	const posts = state.posts.filter(p => {
      		if (p.username.includes(e.target.value)) {
        		return p;
      		}
			return null;
    	});
    	setState({ 
		    posts: state.posts,
		    filteredPosts: posts 
		});
  }

	return (
		<div className="App">
			<SearchBar searchPosts={searchPostsHandler}/>
			<PostsContainer 
				user={user}
				posts={
					state.filteredPosts.length > 0
					? state.filteredPosts
					: state.posts
				} 
			/>
		</div>
	)
}

export default PostsPage;
