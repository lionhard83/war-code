import { assert } from "chai";
import { sumOfIntervals } from "../solution2";

describe("Sum of intervals", function () {
  it("basic tests", function () {
    assert.strictEqual(sumOfIntervals([[1, 5]]), 4);
    assert.strictEqual(
      sumOfIntervals([
        [1, 5],
        [6, 10],
      ]),
      8
    );
    assert.strictEqual(
      sumOfIntervals([
        [1, 5],
        [1, 5],
      ]),
      4
    );
    assert.strictEqual(
      sumOfIntervals([
        [1, 4],
        [7, 10],
        [3, 5],
      ]),
      7
    );
  });

  it("large numbers", function () {
    assert.strictEqual(sumOfIntervals([[-1e9, 1e9]]), 2e9);
    assert.strictEqual(
      sumOfIntervals([
        [0, 20],
        [-1e8, 10],
        [30, 40],
      ]),
      1e8 + 30
    );
  });
});
