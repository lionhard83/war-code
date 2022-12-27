"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
var findOdd = function (xs) {
    return Number(Object.entries(xs.reduce(function (acc, item) {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {})).reduce(function (acc, item) {
        if (item[1] % 2 === 1 && item[1] > acc.max) {
            return {
                key: item[0],
                max: item[1],
            };
        }
        return acc;
    }, { max: 0, key: "" }).key);
};
exports.findOdd = findOdd;
