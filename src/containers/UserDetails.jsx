import { connect } from "react-redux";
import { UserDetails } from "../components/user/UserDetails/index";
import { bindActionCreators } from "redux";
import { getUserDetailsAsync } from "../store/actions/auth";

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    firstName: state.auth.firstName || "",
    lastName: state.auth.lastName || "",
    photoUrl: state.auth.photoUrl || "",
    email: state.auth.email || "",
    password: state.auth.password || ""
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      applyChangesAsync: ({ id, firstName, lastName, photoUrl, email, password }) =>
        getUserDetailsAsync({ id, firstName, lastName, photoUrl, email, password })
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
