import { Component } from "react";
import PropTypes from "prop-types";

const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;
export class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      email: props.email,
      firstName: props.firstName,
      lastName: props.lastName,
      photoUrl: props.photoUrl,
      password: props.password
    };
  }

  applyChanges = (e) => {
    e.preventDefault();
    this.props.applyChangesThunk(this.state);
    this.props.history.push(PUBLIC_BASE_PATH);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 pt-3 justify-content-center">
          <div className="col-6 mx-auto">
            <div className="card card-body bg-light">
              <form onSubmit={this.applyChanges}>
                <h5>User details</h5>
                <input
                  className="form-control"
                  id="1"
                  name="firstName"
                  onChange={this.onChange}
                  type="text"
                  placeholder="First name"
                  defaultValue={this.props.firstName}
                />
                <br />
                <input
                  className="form-control"
                  id="2"
                  name="lastName"
                  onChange={this.onChange}
                  type="text"
                  placeholder="Last name"
                  defaultValue={this.props.lastName}
                />
                <br />
                <input
                  className="form-control"
                  id="3"
                  name="photoUrl"
                  onChange={this.onChange}
                  type="text"
                  placeholder="Photo"
                  defaultValue={this.props.photoUrl}
                />
                <br />
                <input
                  className="form-control"
                  id="4"
                  name="email"
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email"
                  defaultValue={this.props.email}
                />
                <br />
                <input
                  className="form-control"
                  id="5"
                  name="password"
                  onChange={this.onChange}
                  required
                  minLength="4"
                  type="password"
                  placeholder="Password"
                />
                <br />
                <button name="apply" className="btn btn-block" type="submit">
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserDetails.propTypes = {
  applyChangesThunk: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  photoUrl: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
};
