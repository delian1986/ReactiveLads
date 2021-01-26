import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RegisterForm as Register } from "../components/user/RegisterForm";
import { registerAsync } from "../store/actions/auth";
import { getIsAuthPending, getMessage } from "../store/selectors";

const mapStateToProps = (state) => {
  return {
    message: getMessage(state),
    isPending: getIsAuthPending(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register: ({ email, password }) => registerAsync({ email, password })
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
