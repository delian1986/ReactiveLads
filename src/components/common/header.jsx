import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../../containers/Logout";

const Header = (props) => {
  const { email, isLoggedIn } = props;

  return isLoggedIn ? (
    <>
      <p> Hello, {email} !</p>
      <Link to="/userDetails">User Details</Link>
      <Logout />
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signUp">Register</Link>
    </>
  );
};

//todo: bootstrap styles
//todo: propTypes

function mapStateToProps(state) {
  const { email, isLoggedIn } = state.auth;
  return {
    email,
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Header);
