import PropTypes from "prop-types";
import { Button } from "../common/Button";

export const Logout = ({ logout }) => (
  <Button
    handleClick={logout}
    type="button"
    className="btn btn-link nav-link"
    label="Logout"
  />
);

Logout.propTypes = {
  logout: PropTypes.func
};
