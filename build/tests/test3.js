"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solution3_1 = require("../solution3");
var chai_1 = require("chai");
describe("Example tests", function () {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});
function doTest(a, n) {
    it("xs = " + JSON.stringify(a) + " ; n = " + n, function () {
        chai_1.assert.strictEqual((0, solution3_1.findOdd)(a), n);
    });
}
