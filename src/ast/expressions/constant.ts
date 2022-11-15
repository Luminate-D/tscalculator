import { Expression } from '../expression';
import { Constants } from '../../static/constants';

export class ConstantExpression implements Expression {
    private readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public eval() {
        return Constants.get(this.name);
    }
}