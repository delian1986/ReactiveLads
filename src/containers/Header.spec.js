import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Header from "./Header";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

describe("Header container tests", () => {
  describe("Logged in user", () => {
    const mockStore = configureStore([]);
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        auth: {
          email: "test@test.bg",
          isLoggedIn: true
        }
      });
      store.dispatch = jest.fn();
      component = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
    });

    it("should match logged in snapshot", function () {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  describe("Anonymous user", () => {
    const mockStore = configureStore([]);
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        auth: {
          isLoggedIn: false
        }
      });
      store.dispatch = jest.fn();
      component = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
    });

    it("should render <Header/> component without crashing", () => {
      renderer.act(() => {
        expect(component.root.findAllByType("a")).toHaveLength(3);
      });
    });
  });
});
