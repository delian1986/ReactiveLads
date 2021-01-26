import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Colors from "./Colors";
import { mount } from "enzyme";
import { ColorCheckbox } from "../components/materials/ColorCheckbox";
import { selectColor } from "../actions/filters";

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
      ],
      filters: {
        selectedColors: [3, 5]
      }
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Colors component={() => <></>} />
      </Provider>
    );
  });
  describe("Test rendering component", () => {
    it("should render with given state from Redux store", () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("Integration test", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <Colors />
        </Provider>
      );
    });
    it("should deselect <ColorCheckbox/>", () => {
      expect(wrapper.find(ColorCheckbox).length).toEqual(1);
      wrapper.find(ColorCheckbox).simulate("click");
      expect(store.dispatch).toHaveBeenCalledWith(selectColor(1));
    });
  });

  describe("Should be deselected", () => {
    let store;
    let wrapper;
    beforeEach(() => {
      store = mockStore({
        colors: [
          {
            id: 1,
            hex: "data",
            background: "black"
          }
        ],
        filters: {
          selectedColors: [3, 5]
        }
      });
      store.dispatch = jest.fn();
      wrapper = mount(
        <Provider store={store}>
          <Colors />
        </Provider>
      );
    });
    it("should render selected", () => {
      expect(wrapper.find(ColorCheckbox).length).toEqual(1);
      expect(wrapper.find(ColorCheckbox).get(0).props.isSelected).toEqual(false);
    });
  });
  describe("Should be selected", () => {
    let store;
    let wrapper;
    beforeEach(() => {
      store = mockStore({
        colors: [
          {
            id: 1,
            hex: "data",
            background: "black"
          }
        ],
        filters: {
          selectedColors: [1, 5]
        }
      });
      store.dispatch = jest.fn();
      wrapper = mount(
        <Provider store={store}>
          <Colors />
        </Provider>
      );
    });
    it("should render selected", () => {
      expect(wrapper.find(ColorCheckbox).length).toEqual(1);
      expect(wrapper.find(ColorCheckbox).get(0).props.isSelected).toEqual(true);
    });
  });
});
