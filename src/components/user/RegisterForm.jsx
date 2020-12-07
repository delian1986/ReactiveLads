import { Component } from "react";
import UserServices from "../../services/UserServices";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import validate from "../../validators/UserValidator";
import Auth from "../../services/Auth";
import { Redirect } from "react-router-dom";

export class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      emailError: "",
      passwordError: "",
      repeatPasswordError: ""
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

    if (
      null !== this.state.emailError ||
      null !== this.state.passwordError ||
      null !== this.state.repeatPasswordError
    ) {
      return;
    }

    const response = await UserServices.register(this.state);
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
            <h2>Register</h2>
            <div className="form-group">
              <Input
                label="Email"
                name="email"
                type="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.email}
                onBlur={() => {
                  this.validateField("email");
                }}
                placeholder="Your email here..."
                error={this.state.emailError}
                required
              />
            </div>

          <div className="form-group">
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.password}
              onBlur={() => {
                this.validateField("password");
              }}
              placeholder="Password 4 chars min..."
              error={this.state.passwordError}
              required
            />
          </div>

          <div className="form-group">
            <Input
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              onChange={this.handleChange}
              className="form-control"
              onBlur={() => {
                this.validateField("repeatPassword");
              }}
              value={this.state.repeatPassword}
              placeholder="Repeat your password here..."
              error={this.state.repeatPasswordError}
            />
          </div>

          <Button label="Register now !" type="submit" className="btn btn-block" />
        </form>
        </div>
      </div>
    );
  }
}
