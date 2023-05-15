import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";
describe("Header", () => {
  it("when isLoading is true then loading shown otherwise header", () => {
    const { debug } = render(<Header isLoading={false} />);
    debug();
  });
});
