const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("returns an empty array if the array passed contains no numbers", () => {
    expect(twoSum([], 1)).to.deep.equal([]);
  });

  it("returns the correct indices given a two number array", () => {
    expect(twoSum([1, 2], 3)).to.deep.equal([0, 1]);
  });
});
