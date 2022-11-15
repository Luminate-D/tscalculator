import { TokenType } from './tokentype';
import { Token } from './token';
import { Expression } from '../ast/expression';
import { NumberExpression, RadixType } from '../ast/expressions/number';
import { BinaryExpression, OperationType } from '../ast/expressions/binary';
import { UnaryExpression, UnaryOperationType } from '../ast/expressions/unary';
import { FunctionalExpression } from '../ast/expressions/functional';
import { ConstantExpression } from '../ast/expressions/constant';
import { ParseError } from '../errors/parse';

export class Parser {
    private EOF = new Token(-1, TokenType.EOF);
    public static readonly RADIX_KW = new Map([
        [ 'b', RadixType.Binary ],
        [ 'o', RadixType.Octal ],
        [ 'x', RadixType.Hex ]
    ]);

    private tokens: Token[];
    private pos: number;
    private size: number;

    public constructor(tokens: Token[]) {
        this.tokens = tokens;
        this.size = tokens.length;
        this.pos = 0;
    }

    public parse() {
        return this.expression();
    }

    private expression(): Expression {
        return this.additive();
    }

    private additive(): Expression {
        let result = this.multiplicative();

        while(true) {
            if(this.match(TokenType.PLUS)) {
                result = new BinaryExpression(OperationType.Add, result, this.multiplicative());
                continue;
            }

            if(this.match(TokenType.MINUS)) {
                result = new BinaryExpression(OperationType.Subtract, result, this.multiplicative());
                continue;
            }

            break;
        }

        return result;
    }

    private multiplicative(): Expression {
        let result = this.unary();

        while(true) {
            if(this.match(TokenType.STAR)) {
                result = new BinaryExpression(OperationType.Multiply, result, this.unary());
                continue;
            }

            if(this.match(TokenType.SLASH)) {
                result = new BinaryExpression(OperationType.Divide, result, this.unary());
                continue;
            }

            if(this.match(TokenType.PERCENT)) {
                result = new BinaryExpression(OperationType.Mod, result, this.unary());
                continue;
            }

            break;
        }

        return result;
    }

    private unary(): Expression {
        if(this.match(TokenType.PLUS)) return new UnaryExpression(UnaryOperationType.Positive, this.powery());
        if(this.match(TokenType.MINUS)) return new UnaryExpression(UnaryOperationType.Negative, this.powery());
        if(this.match(TokenType.EXCL)) return new UnaryExpression(UnaryOperationType.SUBFACTOR, this.powery());

        return this.powery();
    }

    private powery(): Expression {
        let result = this.primary();

        while(true) {
            if(this.match(TokenType.POWER)) {
                result = new BinaryExpression(OperationType.Power, result, this.primary());
                continue;
            }

            break;
        }

        return result;
    }

    private primary(): Expression {
        const current = this.get(0);

        if(this.match(TokenType.RADIX_NUMBER)) return new NumberExpression(current.getText().slice(1), Parser.RADIX_KW.get(current.getText()[0]));
        if(this.match(TokenType.NUMBER)) {
            const number = new NumberExpression(current.getText(), RadixType.Dec);
            if(this.lookMatch(0, TokenType.EXCL) && this.lookMatch(1, TokenType.EXCL)) {
                this.consume(TokenType.EXCL);
                this.consume(TokenType.EXCL);
                return new UnaryExpression(UnaryOperationType.DFACTOR, number);
            }

            if(this.lookMatch(0, TokenType.EXCL)) {
                this.consume(TokenType.EXCL);
                return new UnaryExpression(UnaryOperationType.FACTOR, number);
            }

            return number;
        }

        if(this.lookMatch(0, TokenType.WORD) && this.lookMatch(1, TokenType.WORD)) return this.function();
        if(this.match(TokenType.WORD)) return new ConstantExpression(current.getText());

        if(this.match(TokenType.LPAREN)) {
            const result = this.expression();
            this.match(TokenType.RPAREN);

            return result;
        }

        throw new ParseError(current.getType(), current.index);
    }

    private function(): Expression {
        const name = this.consume(TokenType.WORD).getText();
        this.consume(TokenType.LPAREN);

        let fn = new FunctionalExpression(name);
        while(!this.match(TokenType.RPAREN)) {
            fn.addArgument(this.expression());
            this.match(TokenType.COMMA);
        }

        return fn;
    }

    private consume(type: TokenType): Token {
        let current = this.get(0);
        if(current.getType() != type) throw new SyntaxError(`Unexpected token ${TokenType[current.getType()]}, expected ${TokenType[type]}`);

        this.pos++;
        return current;
    }

    private lookMatch(relativePosition: number, type: TokenType) {
        return this.get(relativePosition).getType() == type;
    }

    private match(type: TokenType): boolean {
        let current = this.get(0);
        let matches = current.getType() == type;

        if(matches) this.pos++;
        return matches;
    }

    private get(relativePosition: number): Token {
        let position = this.pos + relativePosition;
        if(position >= this.size) return this.EOF;
        return this.tokens[position];
    }
}