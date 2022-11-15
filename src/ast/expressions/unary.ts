import { Expression } from '../expression';
import { MathUtil } from '../../util/math';

export enum UnaryOperationType {
    Positive, Negative,
    SUBFACTOR, DFACTOR, FACTOR
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
            case UnaryOperationType.SUBFACTOR: return MathUtil.subfactorial(this.expression.eval());
            case UnaryOperationType.DFACTOR: return MathUtil.dfactorial(this.expression.eval());
            case UnaryOperationType.FACTOR: return MathUtil.factorial(this.expression.eval());
        }
    }
}