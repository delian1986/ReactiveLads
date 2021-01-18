import { shallow } from "enzyme";
import { NotFound } from "./NotFound";

describe("Test rendering component", () => {
  it("should render <NotFound/> component without crashing", () => {
    shallow(<NotFound />);
  });
});
