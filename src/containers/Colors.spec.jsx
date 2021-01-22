import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Colors from "./Colors";

const mockStore = configureStore([]);

describe("tests <Colors/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      colors: [
        {
          id: 1,
          hex: "data",
          background: "black"
        }
      ]
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Colors component={() => <></>} />
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
