import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutAsync } from "../store/actions/auth";
import { Logout as LogoutView } from "../components/user/Logout";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout: () => logoutAsync()
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LogoutView);
