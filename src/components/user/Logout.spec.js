import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Logout from "../../containers/Logout";

const mockStore = configureStore([]);

describe("tests <Logout/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Logout />
      </Provider>
    );
  });
  describe("Test rendering component", () => {
    it("should render with given state from Redux store", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("Actions", () => {
    it("should dispatch an action on button click", () => {
      renderer.act(() => {
        component.root.findByType("button").props.onClick();
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
