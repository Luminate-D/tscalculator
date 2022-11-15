import { Expression } from '../expression';
import { Functions } from '../../static/functions';

export class FunctionalExpression implements Expression {
    private readonly name: string;
    private readonly args: Expression[];

    public constructor(name: string, args?: Expression[]) {
        this.name = name;
        this.args = args ?? [];
    }

    public addArgument(expr: Expression): void {
        this.args.push(expr);
    }

    public eval() {
        return Functions.get(this.name)(...this.args.map(x => x.eval()));
    }
}