import { mount, shallow } from "enzyme";
import { Input } from "./Input";

describe("Test rendering component", () => {
  it("should render <Input/> component without crashing", () => {
    const mockFn = jest.fn();
    shallow(<Input name="input" onChange={mockFn} placeholder="mock" />);
  });
});

describe("Test passing props to <Input/>", () => {
  it("should accept button props", function () {
    const mockFn = jest.fn();
    const input = mount(
      <Input
        id="1"
        name="text"
        type="submit"
        placeholder="mock"
        onChange={mockFn}
        value="test"
        onBlur={mockFn}
        className="test"
        error="error"
      />
    );
    expect(input.props().id).toEqual("1");
    expect(input.props().name).toEqual("text");
    expect(input.props().onChange).toEqual(mockFn);
    expect(input.props().value).toEqual("test");
    expect(input.props().onBlur).toEqual(mockFn);
    expect(input.props().className).toEqual("test");
    expect(input.props().error).toEqual("error");
  });
});

describe("Test <Input /> component logic", () => {
  it("should click button", () => {
    const mockBlur = jest.fn();
    const mockChange = jest.fn();
    const wrapper = shallow(
      <Input
        id="1"
        name="text"
        type="submit"
        placeholder="mock"
        onChange={mockChange()}
        value="test"
        onBlur={mockBlur()}
        className="test"
      />
    );
    wrapper.find(".test").simulate("click");
    wrapper.find(".test").simulate("change");
    expect(mockBlur).toHaveBeenCalled();
    expect(mockChange).toHaveBeenCalled();
  });
});
