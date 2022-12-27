"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = void 0;
var narcissistic = function (value) {
    return value ===
        String(value)
            .split("")
            .reduce(function (acc, item, _, _a) {
            var length = _a.length;
            return acc + Math.pow(Number(item), length);
        }, 0);
};
exports.narcissistic = narcissistic;
