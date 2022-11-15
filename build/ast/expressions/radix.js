"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadixExpression = exports.RadixType = void 0;
var RadixType;
(function (RadixType) {
    RadixType[RadixType["Binary"] = 0] = "Binary";
    RadixType[RadixType["Octal"] = 1] = "Octal";
    RadixType[RadixType["Hex"] = 2] = "Hex";
})(RadixType = exports.RadixType || (exports.RadixType = {}));
class RadixExpression {
    expression;
    radix;
    constructor(radix, expression) {
        this.expression = expression;
        this.radix = radix;
    }
    eval() {
        switch (this.radix) {
            case RadixType.Binary: return this.expression.eval();
            case RadixType.Octal: return -this.expression.eval();
            case RadixType.Hex: return -this.expression.eval();
        }
    }
}
exports.RadixExpression = RadixExpression;
//# sourceMappingURL=radix.js.map