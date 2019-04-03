export default function withAuthentication(Login) {
	return function(PostsPage) {
		return function(props) {
			if (false) return <App />;
			return <Login />;
		}	
	}
}
