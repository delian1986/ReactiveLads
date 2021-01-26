import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import MaterialTypes from "./MaterialTypes";

const mockStore = configureStore([]);

describe("tests <MaterialTypes/> component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      materialTypes: [
        {
          id: 1,
          name: "data",
          fetchMaterialTypes: jest.fn(),
          selectMaterialType: jest.fn()
        }
      ],
      filters: {
        selectedMaterialTypes: [3, 4]
      }
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <MaterialTypes component={() => <></>} />
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
