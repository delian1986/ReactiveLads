import { fetcher } from "./Fetcher";

export default {
  register: async (data) => {
    const { email, password } = data;
    return await fetcher.register({ email, password });
  },
  login: async (data) => {
    const { email, password } = data;
    return await fetcher.login({ email, password });
  }
};
