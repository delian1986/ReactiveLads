import { getLoggedInStatus } from "../store/selectors";
import { PrivateRoute } from "../components/PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getLoggedInStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
