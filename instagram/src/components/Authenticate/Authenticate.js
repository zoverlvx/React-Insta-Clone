import HOC from "../tools/HOC";
import Login from "../Login/Login";
import PostsPage from "../PostsContainer/PostsPage";

const Authenticate = HOC(Login)(PostsPage)

export default Authenticate
