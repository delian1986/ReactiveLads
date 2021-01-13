import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const { email, isLoggedIn } = props;

  return isLoggedIn ? (
    <>
      <p> Hello, {email} !</p>
      <Link to="/userDetails">User Details</Link>
      <Link to="/logout">Logout</Link>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signUp">Register</Link>
    </>
  );
};

//todo: bootstrap styles

function mapStateToProps(state) {
  const { email, isLoggedIn } = state.auth;
  return {
    email,
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Header);
