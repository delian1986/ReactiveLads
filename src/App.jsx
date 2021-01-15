import { Component } from "react";
import { hot } from "react-hot-loader/root";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import Logout from "./components/user/Logout";
import { NotFound } from "./components/notFound/NotFound";
import Header from "./components/common/header";
import { MaterialsContainer } from "./components/materials/MaterialsContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
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
    </div>
  );
}

export default hot(App);
