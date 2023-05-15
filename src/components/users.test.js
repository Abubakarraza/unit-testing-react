import { render, screen } from "@testing-library/react";

import React from "react";
import { useQuery } from "react-query";
import Users from "./Users";
jest.mock("react-query");
describe("Users", () => {
  it("when isLoading is true then loading text should be displayed", () => {
    useQuery.mockReturnValue({
      isLoading: true,
      data: null,
      error: null,
    });
    const { debug } = render(<Users />);
    debug();
    // const loadingText = screen.queryByText("Loading").innerHTML;
    // const loadingText = screen.queryByTestId("loadingUserText").innerHTML;
    const loadingText = screen.queryByTestId("loadingUserText");
    console.log("loadingText:", loadingText);
    // expect(loadingText).toBe("Loading");
    expect(loadingText).toHaveTextContent("Loading");
  });
});
