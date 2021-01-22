import { NavLink as Link } from "react-router-dom";
import Logout from "../../containers/Logout";
import PropTypes from "prop-types";

export const Header = (props) => {
  const { email, isLoggedIn } = props;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand mr-auto" to="/">
        ReactiveLads
      </Link>
      {isLoggedIn ? (
        <>
          <li className="nav-link">
            <a href="#" className="nav-link disabled">
              Hello, {email} !
            </a>
          </li>
          <Link className="nav-link" to="/userDetails">
            User Details
          </Link>
          <Logout />
        </>
      ) : (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signUp">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

Header.propTypes = {
  email: PropTypes.string,
  isLoggedIn: PropTypes.bool
};
