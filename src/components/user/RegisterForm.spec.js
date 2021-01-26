import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Register from "../../containers/Register";
import { mount } from "enzyme";

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

    it("should render three input fields", function () {
      expect(component.root.findAllByType("input").length).toEqual(3);
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

  describe("integration test", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <Register />
        </Provider>
      );
    });

    it("button should unlock on valid inputs", function () {
      const button = wrapper.find("button");
      expect(button.props().disabled).toEqual(true);

      const emailField = wrapper.find('input[name="email"]');
      emailField.simulate("change", { target: { value: "123@123.bg" } });
      expect(wrapper.find("button").props().disabled).toEqual(true);

      const passwordField = wrapper.find('input[name="password"]');
      passwordField.simulate("change", { target: { value: "1233" } });
      expect(wrapper.find("button").props().disabled).toEqual(true);

      const repeatPassword = wrapper.find('input[name="repeatPassword"]');
      repeatPassword.simulate("change", { target: { value: "123" } });
      expect(wrapper.find("button").props().disabled).toEqual(true);

      repeatPassword.simulate("change", { target: { value: "1233" } });
      expect(wrapper.find("button").props().disabled).toEqual(false);
    });

    it("button should stay locked on invalid inputs", function () {
      const button = wrapper.find("button");
      expect(button.props().disabled).toEqual(true);

      const emailField = wrapper.find('input[name="email"]');
      emailField.simulate("change", { target: { value: "fail@test" } });
      expect(wrapper.find("button").props().disabled).toEqual(true);

      const repeatPassword = wrapper.find('input[name="password"]');
      repeatPassword.simulate("change", { target: { value: "1233" } });

      const passwordField = wrapper.find('input[name="password"]');
      passwordField.simulate("change", { target: { value: "1233" } });
      expect(wrapper.find("button").props().disabled).toEqual(true);
    });
  });
});
