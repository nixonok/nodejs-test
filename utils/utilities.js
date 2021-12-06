"use strict";
exports.__esModule = true;
exports.GetRandomRange = exports.List = void 0;
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
exports.List = List;
function GetRandomRange(min, max) {
    var rand = +max - +min;
    return getRandomInt(rand) + min;
}
exports.GetRandomRange = GetRandomRange;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
