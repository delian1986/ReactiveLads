import { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../services/Auth";

export default class Logout extends Component {
  logout = () => {
    Auth.clear();
  };

  render = () => {
    this.logout();
    return <Redirect to="/" />;
  };
}
