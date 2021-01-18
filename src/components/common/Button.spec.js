import { Button } from "./Button";
import { shallow, mount } from "enzyme";

describe("Test rendering component", () => {
  it("should render <Button/> component without crashing", () => {
    shallow(<Button />);
  });
});

describe("Test passing props to components", () => {
  it("should accept <Button/> props", function () {
    const mockFn = jest.fn();
    const button = mount(
      <Button
        type="submit"
        onClick={mockFn}
        className="class"
        disabled={false}
        handleClick={mockFn}
        label="label"
      />
    );
    expect(button.props().type).toEqual("submit");
    expect(button.props().onClick).toEqual(mockFn);
    expect(button.props().className).toEqual("class");
    expect(button.props().disabled).toEqual(false);
    expect(button.props().label).toEqual("label");
  });
});

describe("Test <Button /> component logic", () => {
  it("should click button", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button className="mock" onClick={mockFn()} />);
    wrapper.find(".mock").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
