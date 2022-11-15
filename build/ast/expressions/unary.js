"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnaryExpression = exports.UnaryOperationType = void 0;
const math_1 = require("../../util/math");
var UnaryOperationType;
(function (UnaryOperationType) {
    UnaryOperationType[UnaryOperationType["Positive"] = 0] = "Positive";
    UnaryOperationType[UnaryOperationType["Negative"] = 1] = "Negative";
    UnaryOperationType[UnaryOperationType["SUBFACTOR"] = 2] = "SUBFACTOR";
    UnaryOperationType[UnaryOperationType["DFACTOR"] = 3] = "DFACTOR";
    UnaryOperationType[UnaryOperationType["FACTOR"] = 4] = "FACTOR";
})(UnaryOperationType = exports.UnaryOperationType || (exports.UnaryOperationType = {}));
class UnaryExpression {
    expression;
    operation;
    constructor(operation, expression) {
        this.expression = expression;
        this.operation = operation;
    }
    eval() {
        switch (this.operation) {
            case UnaryOperationType.Positive: return this.expression.eval();
            case UnaryOperationType.Negative: return -this.expression.eval();
            case UnaryOperationType.SUBFACTOR: return math_1.MathUtil.subfactorial(this.expression.eval());
            case UnaryOperationType.DFACTOR: return math_1.MathUtil.dfactorial(this.expression.eval());
            case UnaryOperationType.FACTOR: return math_1.MathUtil.factorial(this.expression.eval());
        }
    }
}
exports.UnaryExpression = UnaryExpression;
//# sourceMappingURL=unary.js.map