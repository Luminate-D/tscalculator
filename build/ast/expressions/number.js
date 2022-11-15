"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberExpression = exports.RadixType = void 0;
var RadixType;
(function (RadixType) {
    RadixType[RadixType["Binary"] = 0] = "Binary";
    RadixType[RadixType["Octal"] = 1] = "Octal";
    RadixType[RadixType["Dec"] = 2] = "Dec";
    RadixType[RadixType["Hex"] = 3] = "Hex";
})(RadixType = exports.RadixType || (exports.RadixType = {}));
class NumberExpression {
    value;
    radix;
    constructor(value, radix) {
        this.value = value;
        this.radix = radix;
    }
    eval() {
        switch (this.radix) {
            case RadixType.Binary: return parseInt(this.value.toString(), 2);
            case RadixType.Octal: return parseInt(this.value.toString(), 8);
            case RadixType.Hex: return parseInt(this.value.toString(), 16);
            case RadixType.Dec: return parseFloat(this.value);
        }
    }
}
exports.NumberExpression = NumberExpression;
//# sourceMappingURL=number.js.map