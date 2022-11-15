"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
class Constants {
    static constants = new Map([
        ['PI', Math.PI],
        ['E', Math.E],
        ['EPI', Math.E ** Math.PI],
        ['LN2', Math.LN2],
        ['LN10', Math.LN10],
        ['LOG2E', Math.LOG2E],
        ['LOG10E', Math.LOG10E],
        ['PHI', (Math.sqrt(5) + 1) / 2],
        ['PSI', (2 + Math.cbrt(116 + 12 * Math.sqrt(93)) + Math.cbrt(116 - 12 * Math.sqrt(93))) / 6],
        ['P', Math.cbrt(1 / 2 + (1 / 6) * Math.sqrt(23 / 3)) + Math.cbrt(1 / 2 - (1 / 6) * Math.sqrt(23 / 3))],
    ]);
    static getExisting() {
        return Array.from(Constants.constants.keys()).map(x => x.toString());
    }
    static isExists(key) {
        return Constants.constants.has(key);
    }
    static get(key) {
        key = key.toUpperCase();
        if (!this.isExists(key))
            throw new ReferenceError(`Constant "${key}" is not defined`);
        return Constants.constants.get(key);
    }
}
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map