import { Route, Redirect } from "react-router-dom";

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
