const { Response, Headers } = jest.requireActual("node-fetch");
import { handleResponse } from "./handleResponse";

describe("handleResponse service test", () => {
  const { replace } = window.location;
  let meta,
    headers = null;

  beforeAll(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { replace: jest.fn() }
    });

    meta = {
      "Content-Type": "application/json"
    };
    headers = new Headers(meta);
  });

  afterAll(() => {
    window.location.reload = replace;
  });

  it("should throw error on 401", async function () {
    const ResponseInit = {
      status: 401,
      headers: headers
    };

    window.location.reload = jest.fn();

    const response = new Response(JSON.stringify({ data: 123 }), ResponseInit);
    handleResponse(response).then((res) => res);
    expect(window.location.replace).toHaveBeenCalled();
  });

  it("should return received data", function () {
    const ResponseInit = {
      status: 200,
      headers: headers
    };
    const responseData = { data: 123 };
    const response = new Response(JSON.stringify(responseData), ResponseInit);
    return handleResponse(response).then((res) => expect(res).toEqual(responseData));
  });
});
