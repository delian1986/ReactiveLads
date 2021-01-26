import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Tags from "./Tags";

const mockStore = configureStore([]);

describe("tests <Tags/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      tags: [{ id: 1, name: "data" }],
      filters: {
        selectedTags: [3, 5]
      }
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Tags component={() => <></>} />
        </Provider>
      </BrowserRouter>
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
        component.root.findByType("input").props.onChange();
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
