"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryExpression = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Add"] = 0] = "Add";
    OperationType[OperationType["Subtract"] = 1] = "Subtract";
    OperationType[OperationType["Multiply"] = 2] = "Multiply";
    OperationType[OperationType["Divide"] = 3] = "Divide";
    OperationType[OperationType["Power"] = 4] = "Power";
    OperationType[OperationType["Mod"] = 5] = "Mod";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
class BinaryExpression {
    expression1;
    expression2;
    operation;
    constructor(operation, expression1, expression2) {
        this.expression1 = expression1;
        this.expression2 = expression2;
        this.operation = operation;
    }
    eval() {
        switch (this.operation) {
            case OperationType.Add: return this.expression1.eval() + this.expression2.eval();
            case OperationType.Subtract: return this.expression1.eval() - this.expression2.eval();
            case OperationType.Multiply: return this.expression1.eval() * this.expression2.eval();
            case OperationType.Divide: return this.expression1.eval() / this.expression2.eval();
            case OperationType.Power: return this.expression1.eval() ** this.expression2.eval();
            case OperationType.Mod: return this.expression1.eval() % this.expression2.eval();
        }
    }
}
exports.BinaryExpression = BinaryExpression;
//# sourceMappingURL=binary.js.map