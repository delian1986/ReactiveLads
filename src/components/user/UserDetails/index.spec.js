import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import UserDetails from "../../../containers/UserDetails";

const mockStore = configureStore([]);
describe("tests <UserDetails/> component", () => {
  let store;
  let component;
  let history;
  beforeEach(() => {
    history = { push: jest.fn() };
    store = mockStore({
      auth: {
        isPending: false
      },
      message: {}
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <UserDetails history={history} />
      </Provider>
    );
  });

  describe("Test rendering component", () => {
    test("should render with given state from Redux store", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("Apply", () => {
    test("should apply changes", () => {
      const fakeEvent = { preventDefault: () => true };
      renderer.act(() => {
        component.root.findByType("form").props.onSubmit(fakeEvent);
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
