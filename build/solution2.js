"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfIntervals = void 0;
var sumOfIntervals = function (intervals) {
    return intervals
        .reduce(function (acc, item, _) {
        var indexes = acc.reduce(function (acc, itemIesime, index) {
            if (isIntersecate(itemIesime, item)) {
                acc.push(index);
            }
            return acc;
        }, []);
        if (indexes.length === 0) {
            acc.push(item);
        }
        else {
            var items = acc.filter(function (_, index) { return indexes.includes(index); });
            var itemToAdd = newItem(__spreadArray([item], items, true));
            acc = acc.filter(function (_, index) { return !indexes.includes(index); });
            acc.unshift(itemToAdd);
        }
        return acc;
    }, [])
        .reduce(function (acc, item) { return acc + (item[1] - item[0]); }, 0);
};
exports.sumOfIntervals = sumOfIntervals;
var isIntersecate = function (arr1, arr2) {
    return arr1[1] > arr2[0] && arr1[0] < arr2[1];
};
var newItem = function (arr) {
    var min = Math.min.apply(Math, arr.map(function (item) { return item[0]; }));
    var max = Math.max.apply(Math, arr.map(function (item) { return item[1]; }));
    return [min, max];
};
console.log((0, exports.sumOfIntervals)([
    [1, 4],
    [7, 10],
    [3, 5],
]));
console.log((0, exports.sumOfIntervals)([
    [1, 4],
    [7, 10],
    [3, 8],
]));
