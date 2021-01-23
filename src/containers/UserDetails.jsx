import { connect } from "react-redux";
import { UserDetails } from "../components/user/UserDetails/index";
import { bindActionCreators } from "redux";
import { userDetailsThunk } from "../services/userDetailsThunk.js";

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
      applyChangesThunk: ({ id, firstName, lastName, photoUrl, email, password }) =>
        userDetailsThunk({ id, firstName, lastName, photoUrl, email, password })
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
