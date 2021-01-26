import { getLoggedInStatus } from "../store/selectors";
import { AnonymousRoute } from "../components/AnonymousRoute";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getLoggedInStatus(state)
  };
};

export default connect(mapStateToProps)(AnonymousRoute);
