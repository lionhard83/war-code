"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var solution2_1 = require("../solution2");
describe("Sum of intervals", function () {
    it("basic tests", function () {
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([[1, 5]]), 4);
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([
            [1, 5],
            [6, 10],
        ]), 8);
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([
            [1, 5],
            [1, 5],
        ]), 4);
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([
            [1, 4],
            [7, 10],
            [3, 5],
        ]), 7);
    });
    it("large numbers", function () {
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([[-1e9, 1e9]]), 2e9);
        chai_1.assert.strictEqual((0, solution2_1.sumOfIntervals)([
            [0, 20],
            [-1e8, 10],
            [30, 40],
        ]), 1e8 + 30);
    });
});
