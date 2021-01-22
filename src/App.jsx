import { Component } from "react";
import { hot } from "react-hot-loader/root";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { NotFound } from "./components/notFound/NotFound";
import { MaterialsContainer } from "./components/materials/MaterialsContainer";
import PrivateRoute from "./containers/PrivateRoute";
import AnonymousRoute from "./containers/AnonymousRoute";
import Header from "./containers/Header";

const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename={PUBLIC_BASE_PATH}>
          <Header />
          <Switch>
            <AnonymousRoute path="/login" component={Login} />
            <AnonymousRoute path="/signUp" component={Register} />
            <PrivateRoute path="/userDetails" component={UserDetails} />
            <PrivateRoute path="/" exact component={MaterialsContainer} />
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

export default hot(App);
