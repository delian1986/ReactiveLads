import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import UserDetails from "../../../containers/UserDetails";

const mockStore = configureStore([]);

describe("tests <UserDetails/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      auth: {
        id: 1,
        firstName: "fn",
        lastName: "ln",
        photoUrl: "pu",
        email: "em",
        password: "ps"
      }
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <UserDetails />
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
      const fakeEvent = { preventDefault: () => true };
      renderer.act(() => {
        component.root.findByType("form").props.onSubmit(fakeEvent);
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
