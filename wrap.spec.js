// Wrap spec
const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Should return a single line if string provided is less than maxLen argument", () => {
    expect(wrap("Our names are Adam+Christian", 100)).to.equal(
      "Our names are Adam+Christian"
    );
  });

  it("Should return multiple lines if string provided is greater than maxLen argument", () => {
    expect(wrap("Our names are Adam+Christian", 10)).to.equal(
      `Our names \nare Adam+C\nhristian`
    );
    //if multiple assertions/expects are written within one it block,
    //subsequent assertions will only hit after the prior assertion passes
    expect(wrap("Our names are Adam+Christian", 14)).to.equal(
      "Our names are \nAdam+Christian"
    );
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor   \nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."
    );
  });
});
