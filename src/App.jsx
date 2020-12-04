import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { hot } from "react-hot-loader/root";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/userDetails">
              <UserDetails />
            </Route>
            <Route path="/vrScans">
              <VRScans />
            </Route>
            <Route path="/">
              <VRScans />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/vrScans">Login</Link>
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h2>SignUp Page</h2>
      <Link to="/login">Back</Link>
      <Link to="/login">Save</Link>
    </div>
  );
}

function UserDetails() {
  return <h2>UserDetails Page</h2>;
}

function VRScans() {
  return (
    <div>
      <h2>VRScans Page</h2>
      <Link to="/login">Logout</Link>
      <Link to="/userDetails">User Details</Link>
    </div>
  );
}

export default hot(App);
