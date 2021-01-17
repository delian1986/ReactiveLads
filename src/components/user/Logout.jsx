import { Button } from "../common/Button";

export const Logout = ({ logout }) => (
  <Button
    handleClick={logout}
    type="button"
    className="btn btn-link"
    label="Logout"
  />
);
