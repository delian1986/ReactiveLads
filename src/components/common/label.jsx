import { PropTypes } from "prop-types";

export const Label = (name) => {
  return <label>{name}</label>;
};

Label.propTypes = {
  name: PropTypes.string
};
