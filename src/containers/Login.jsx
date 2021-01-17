import { connect } from "react-redux";
import { LoginForm as Login } from "../components/user/LoginForm";
import { bindActionCreators } from "redux";
import { loginThunk } from "../services/authThunk";
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
      login: ({ email, password }) => loginThunk({ email, password })
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
