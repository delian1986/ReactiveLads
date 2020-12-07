import { PropTypes } from "prop-types";

export const Button = (props) => (
  <button type={props.type} className={props.className} onClick={props.handleClick}>
    {props.label}
  </button>
);

Button.defaultProps = {
  type: "submit",
  className: ""
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  className: PropTypes.string,
  label: PropTypes.string
};
