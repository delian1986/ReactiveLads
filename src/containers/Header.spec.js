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
          isLoggedIn: true,
          photoUrl: null
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

    it("should match image placeholder", function () {
      expect(component.root.findByType("img").props.src).toEqual(
        "/avatar_placeholder.png"
      );
    });

    it("should match image url", function () {
      store = mockStore({
        auth: {
          email: "test@test.bg",
          isLoggedIn: true,
          photoUrl: "superValidSrc"
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
      expect(component.root.findByType("img").props.src).toEqual("superValidSrc");
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
