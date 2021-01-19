import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Register from "../../containers/Register";

const mockStore = configureStore([]);

describe("tests <RegisterFrom/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      auth: {
        isPending: false
      },
      message: {}
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Register />
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
      const fakeEvent = { preventDefault: () => console.log("preventDefault") };
      renderer.act(() => {
        component.root.findByType("form").props.onSubmit(fakeEvent);
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
