"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnaryExpression = exports.UnaryOperationType = void 0;
var UnaryOperationType;
(function (UnaryOperationType) {
    UnaryOperationType[UnaryOperationType["Positive"] = 0] = "Positive";
    UnaryOperationType[UnaryOperationType["Negative"] = 1] = "Negative";
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
        }
    }
}
exports.UnaryExpression = UnaryExpression;
//# sourceMappingURL=unary.js.map