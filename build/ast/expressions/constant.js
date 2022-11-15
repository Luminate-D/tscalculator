"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantExpression = void 0;
const constants_1 = require("../../static/constants");
class ConstantExpression {
    name;
    constructor(name) {
        this.name = name;
    }
    eval() {
        return constants_1.Constants.get(this.name);
    }
}
exports.ConstantExpression = ConstantExpression;
//# sourceMappingURL=constant.js.map