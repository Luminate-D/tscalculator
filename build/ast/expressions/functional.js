"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalExpression = void 0;
const functions_1 = require("../../static/functions");
class FunctionalExpression {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args ?? [];
    }
    addArgument(expr) {
        this.args.push(expr);
    }
    eval() {
        return functions_1.Functions.get(this.name)(...this.args.map(x => x.eval()));
    }
}
exports.FunctionalExpression = FunctionalExpression;
//# sourceMappingURL=functional.js.map