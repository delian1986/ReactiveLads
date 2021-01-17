import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RegisterForm as Register } from "../components/user/RegisterForm";
import { registerThunk } from "../services/authThunk";
import { getLoggedInStatus } from "../selectors";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getLoggedInStatus(state),
    message: state.message,
    isPending: state.auth.isPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register: ({ email, password }) => registerThunk({ email, password })
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
