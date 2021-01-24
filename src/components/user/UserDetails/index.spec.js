import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import UserDetails from "../../../containers/UserDetails";

const mockStore = configureStore([]);
describe("tests <UserDetails/> component", () => {
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
        <UserDetails />
      </Provider>
    );
  });

  describe("Test rendering component", () => {
    it("should render with given state from Redux store", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
