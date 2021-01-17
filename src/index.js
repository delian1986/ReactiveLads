import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import fetchVrScansThunk from "./services/fetchVrScansThunk";
import { getLoggedInStatus } from "./selectors";
import App from "./App";

const state = store.getState();
const isLoggedIn = getLoggedInStatus(state);

if (isLoggedIn) {
  //initial loading of vrScans so we don't start with a blank screen
  store.dispatch(fetchVrScansThunk());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
