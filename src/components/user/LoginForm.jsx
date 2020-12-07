import { Component } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Redirect } from "react-router-dom";
import UserServices from "../../services/UserServices";
import validate from "../../validators/UserValidator";
import Auth from "../../services/Auth";

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.validateField(e.target.name);
      }
    );
  };

  validateField = (fieldName) => {
    this.setState({
      [`${fieldName}Error`]: validate[fieldName](this.state)
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (null !== this.state.emailError || null !== this.state.passwordError) {
      return;
    }

    const response = await UserServices.login(this.state);
    if (response.accessToken) {
      Auth.saveUserInfo({
        token: response.accessToken,
        email: this.state.email
      });

      this.props.history.push("/");
    } else {
      //TODO:: show error to user...
      alert(`error: ${response}`);
    }
  };

  render() {
    if (Auth.isUserAuthenticated()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="d-flex justify-content-center align-items-center container">
        <div className="card card-body bg-light">
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <Input
                label="Email"
                name="email"
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={() => {
                  this.validateField("email");
                }}
                error={this.state.emailError}
                placeholder="Your email here..."
              />
            </div>
            <Input
              label="Password"
              name="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={() => {
                this.validateField("password");
              }}
              error={this.state.passwordError}
              placeholder="Your password..."
            />
            <Button label="Login here !" className="btn btn-block" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
