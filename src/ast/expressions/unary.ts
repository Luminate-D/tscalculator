import { Expression } from '../expression';

export enum UnaryOperationType {
    Positive, Negative
}

export class UnaryExpression implements Expression {
    private readonly expression: Expression;
    private readonly operation: UnaryOperationType;

    public constructor(operation: UnaryOperationType, expression: Expression) {
        this.expression = expression;
        this.operation = operation;
    }

    public eval() {
        switch(this.operation) {
            case UnaryOperationType.Positive: return this.expression.eval();
            case UnaryOperationType.Negative: return -this.expression.eval();
        }
    }
}