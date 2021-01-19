import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RegisterForm as Register } from "../components/user/RegisterForm";
import { registerThunk } from "../services/authThunk";
import { getIsAuthPending, getMessage } from "../selectors";

const mapStateToProps = (state) => {
  return {
    message: getMessage(state),
    isPending: getIsAuthPending(state)
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
