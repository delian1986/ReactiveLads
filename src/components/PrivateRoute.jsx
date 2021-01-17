import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  isLoggedIn: PropTypes.bool,
  rest: PropTypes.any
};
