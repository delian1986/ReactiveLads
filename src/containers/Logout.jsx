import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutThunk } from "../services/authThunk";
import { Logout as LogoutView } from "../components/user/Logout";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout: () => logoutThunk()
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LogoutView);
