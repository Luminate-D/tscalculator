import { Expression } from '../expression';

export enum OperationType {
    Add, Subtract,
    Multiply, Divide,
    Power, Mod
}

export class BinaryExpression implements Expression {
    private readonly expression1: Expression;
    private readonly expression2: Expression;
    private readonly operation: OperationType;

    public constructor(operation: OperationType, expression1: Expression, expression2: Expression) {
        this.expression1 = expression1;
        this.expression2 = expression2;
        this.operation = operation;
    }

    public eval() {
        switch(this.operation) {
            case OperationType.Add:      return this.expression1.eval() + this.expression2.eval();
            case OperationType.Subtract: return this.expression1.eval() - this.expression2.eval();
            case OperationType.Multiply: return this.expression1.eval() * this.expression2.eval();
            case OperationType.Divide:   return this.expression1.eval() / this.expression2.eval();
            case OperationType.Power:    return this.expression1.eval() ** this.expression2.eval();
            case OperationType.Mod:      return this.expression1.eval() % this.expression2.eval();
        }
    }
}