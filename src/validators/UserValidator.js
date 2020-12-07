export default {
  email: (values) => {
    const { email } = values;

    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }

    return null;
  },
  password: (values) => {
    const { password } = values;
    if (password.length < 4) {
      return "Password cannot be less than 4 symbols";
    }

    return null;
  },
  repeatPassword: (values) => {
    const { password, repeatPassword } = values;

    if (password !== repeatPassword) {
      return "Password and Repeat Password must match!";
    }

    return null;
  }
};
