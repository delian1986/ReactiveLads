import { connect } from "react-redux";
import { LoginForm as Login } from "../components/user/LoginForm";
import { bindActionCreators } from "redux";
import { loginAsync } from "../store/actions/auth";
import { getMessage, getIsAuthPending } from "../store/selectors";

const mapStateToProps = (state) => {
  return {
    message: getMessage(state),
    isPending: getIsAuthPending(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login: ({ email, password }) => loginAsync({ email, password })
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
