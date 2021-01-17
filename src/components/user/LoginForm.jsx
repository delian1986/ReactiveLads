import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Redirect } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";

export const LoginForm = ({ isLoggedIn, message, login, isPending }) => {
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
      }
    },
    initialValues: {
      email: "",
      password: ""
    }
  });

  const [isLogging, setIsLogging] = useState(isPending);

  useEffect(() => {
    setIsLogging(isPending);
  }, [isPending]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  return !isLoggedIn ? (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-6 mx-auto">
          <div className="card card-body bg-light">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
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
              <Input
                {...bindField("password")}
                label="Password"
                type="password"
                className="form-control"
                placeholder="Password 4 chars min..."
                error={errors.password}
              />
              <div className="col text-center">
                <Button
                  label={
                    (isLogging && (
                      <span className="spinner-border spinner-border-sm mr-1" />
                    )) ||
                    "Login here !"
                  }
                  className="btn btn-block"
                  type="submit"
                  disabled={!isValid()}
                />
              </div>
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
