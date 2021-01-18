import { Button } from "./Button";
import { shallow, mount } from "enzyme";

describe("Test rendering component", () => {
  it("should render question component without crashing", () => {
    shallow(<Button />);
  });
});

describe("Test passing props to components", () => {
  it("should accept button props", function () {
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
