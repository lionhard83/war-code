"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var solution_1 = require("./solution");
describe("Basic tests", function () {
    it("Basic test should work", function () {
        (0, chai_1.expect)((0, solution_1.narcissistic)(7)).to.equal(true, "7 is narcissistic");
        (0, chai_1.expect)((0, solution_1.narcissistic)(153)).to.equal(true, "153 is narcissistic");
        (0, chai_1.expect)((0, solution_1.narcissistic)(1634)).to.equal(true, "1634 is narcissistic");
    });
});
