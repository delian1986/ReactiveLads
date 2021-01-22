import { connect } from "react-redux";
import { Header } from "../components/common/Header";
import { getEmail, getLoggedInStatus } from "../selectors";

function mapStateToProps(state) {
  return {
    email: getEmail(state),
    isLoggedIn: getLoggedInStatus(state)
  };
}

export default connect(mapStateToProps)(Header);
