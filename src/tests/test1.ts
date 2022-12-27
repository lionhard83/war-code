import { expect } from "chai";

import { narcissistic } from "../solution1";

describe("Basic tests", () => {
  it("Basic test should work", () => {
    expect(narcissistic(7)).to.equal(true, "7 is narcissistic");
    expect(narcissistic(152)).to.equal(false, "152 is not narcissistic");
    expect(narcissistic(153)).to.equal(true, "153 is narcissistic");
    expect(narcissistic(1634)).to.equal(true, "1634 is narcissistic");
  });
});
