"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
const math_1 = require("../util/math");
class Functions {
    static functions = new Map([
        ['sin', (num) => Math.sin(num)],
        ['cos', (num) => Math.cos(num)],
        ['tg', (num) => Math.tan(num)],
        ['tan', (num) => Math.tan(num)],
        ['ctg', (num) => Math.cos(num) / Math.sin(num)],
        ['cotan', (num) => Math.cos(num) / Math.sin(num)],
        ['sec', (num) => 1 / Math.sin(num)],
        ['sc', (num) => 1 / Math.sin(num)],
        ['csc', (num) => 1 / Math.cos(num)],
        ['cosec', (num) => 1 / Math.cos(num)],
        ['sinh', (num) => Math.sinh(num)],
        ['cosh', (num) => Math.cosh(num)],
        ['th', (num) => Math.tanh(num)],
        ['tanh', (num) => Math.tanh(num)],
        ['cth', (num) => 1 / Math.tanh(num)],
        ['coth', (num) => 1 / Math.tanh(num)],
        ['sech', (num) => 1 / Math.sinh(num)],
        ['sch', (num) => 1 / Math.sinh(num)],
        ['csch', (num) => 1 / Math.cosh(num)],
        ['cosech', (num) => 1 / Math.cosh(num)],
        ['asin', (num) => Math.asin(num)],
        ['acos', (num) => Math.acos(num)],
        ['asinh', (num) => Math.asinh(num)],
        ['acosh', (num) => Math.acosh(num)],
        ['versin', (num) => 1 - Math.cos(num)],
        ['exp', (num) => Math.exp(num)],
        ['gd', (num) => Math.asin(Math.tanh(num))],
        ['floor', (num) => Math.floor(num)],
        ['ceil', (num) => Math.ceil(num)],
        ['round', (num) => Math.round(num)],
        ['abs', (num) => Math.abs(num)],
        ['sqrt', (num) => Math.sqrt(num)],
        ['crt', (num) => Math.cbrt(num)],
        ['cbrt', (num) => Math.cbrt(num)],
        ['ln', (num) => Math.log(num)],
        ['log2', (num) => Math.log2(num)],
        ['log10', (num) => Math.log10(num)],
        ['log1p', (num) => Math.log1p(num)],
        ['log', (num, base = Math.E) => Math.log(num) / Math.log(base)],
        ['trunc', (num) => Math.trunc(num)],
        ['tetrate', (num, pow) => math_1.MathUtil.tetrate(num, pow)],
        ['random', () => Math.random()]
    ]);
    static getExisting() {
        return Array.from(Functions.functions.keys()).map(x => x.toString());
    }
    static isExists(key) {
        return Functions.functions.has(key);
    }
    static get(key) {
        if (!this.isExists(key))
            throw new ReferenceError(`Function "${key}" is not defined`);
        return Functions.functions.get(key);
    }
}
exports.Functions = Functions;
//# sourceMappingURL=functions.js.map