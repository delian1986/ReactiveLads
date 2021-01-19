import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import AnonymousRoute from "./AnonymousRoute";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("tests <AnonymousRoute/> component", () => {
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
      <BrowserRouter>
        <Provider store={store}>
          <AnonymousRoute component={() => <></>} />
        </Provider>
      </BrowserRouter>
    );
  });
  describe("Test rendering component", () => {
    it("should render with given state from Redux store", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
