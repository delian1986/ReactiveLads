import { getLoggedInStatus } from "../selectors";
import { PrivateRoute } from "../components/PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getLoggedInStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
