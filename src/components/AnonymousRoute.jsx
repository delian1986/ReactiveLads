import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function AnonymousRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}

export { AnonymousRoute };

AnonymousRoute.propTypes = {
  component: PropTypes.elementType,
  isLoggedIn: PropTypes.bool,
  rest: PropTypes.any
};
