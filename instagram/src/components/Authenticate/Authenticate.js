import HOC from "../tools/HOC";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import PostsPage from "../PostsContainer/PostsPage";

const Authenticate = HOC(SignUp)(Login)(PostsPage)({
	ofSignUp: false,
	ofLogin: false,
	ofUser: "",
	ofPassword: ""
});

export default Authenticate
