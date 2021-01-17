import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export const RegisterForm = ({ isLoggedIn, register, message, isPending }) => {
  const { values, errors, bindField, isValid } = useForm({
    validations: {
      email: {
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Invalid email!"
        },
        required: {
          message: "Email is required!"
        }
      },
      password: {
        minLength: {
          value: 4,
          message: "Password should be 4 chars min!"
        },
        required: {
          message: "Password is required!"
        }
      },
      repeatPassword: {
        equals: {
          value: "password",
          message: "Passwords must match!"
        },
        required: {
          message: "Password is required"
        }
      }
    },
    initialValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  });

  const [isRegistering, setIsRegistering] = useState(isPending);

  useEffect(() => {
    setIsRegistering(isPending);
  }, [isPending]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values);
  };

  return !isLoggedIn ? (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-6 mx-auto">
          <div className="card card-body bg-light">
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className="form-group">
                <Input
                  {...bindField("email")}
                  label="Email"
                  type="email"
                  className="form-control"
                  placeholder="Your email here..."
                  error={errors.email}
                />
              </div>

              <div className="form-group">
                <Input
                  {...bindField("password")}
                  label="Password"
                  type="password"
                  className="form-control"
                  placeholder="Password 4 chars min..."
                  error={errors.password}
                />
              </div>

              <div className="form-group">
                <Input
                  {...bindField("repeatPassword")}
                  label="Repeat Password"
                  type="password"
                  className="form-control"
                  placeholder="Repeat your password here..."
                  error={errors.repeatPassword}
                />
              </div>

              <Button
                label={
                  (isRegistering && (
                    <span className="spinner-border spinner-border-sm mr-1" />
                  )) ||
                  "Register now !"
                }
                type="submit"
                className="btn btn-block"
                disabled={!isValid()}
              />
            </form>
            {message.message && (
              <div className="alert alert-danger" role="alert">
                {message.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
