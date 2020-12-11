import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { LoginForm } from "./components/user/LoginForm";
import { RegisterForm } from "./components/user/RegisterForm";
import Logout from "./components/user/Logout";
import { NotFound } from "./components/notFound/NotFound";

import { MaterialsContainer } from "./components/materials/MaterialsContainer";

import Auth from "./services/Auth";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/signUp" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/userDetails" component={UserDetails} />
            <Route path="/vrScans" component={MaterialsContainer} />
            <Route path="/" exact component={VRScans} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function UserDetails() {
  return <h2>UserDetails Page</h2>;
}

function VRScans() {
  return (
    <div>
      <h2>VRScans Page</h2>
      {Auth.isUserAuthenticated() ? (
        <>
          <p> Hello, {Auth.getEmail()} !</p>
          <Link to="/userDetails">User Details</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signUp">Register</Link>
        </>
      )}
    </div>
  );
}

export default hot(App);
