import { Token } from './token';
import { TokenType } from './tokentype';
import { Character } from '../util/character';
import { Parser } from './parser';

export class Lexer {
    private OPERATOR_CHARS: string;
    private OPERATORS: Map<String, TokenType>;

    private input: string;
    private tokens: Token[];

    private pos: number;
    private length: number;

    public constructor(input: string) {
        this.OPERATOR_CHARS = "+-*/^()!%";

        this.OPERATORS = new Map();
        this.OPERATORS.set('+', TokenType.PLUS);
        this.OPERATORS.set('-', TokenType.MINUS);
        this.OPERATORS.set('*', TokenType.STAR);
        this.OPERATORS.set('/', TokenType.SLASH);
        this.OPERATORS.set('^', TokenType.POWER);
        this.OPERATORS.set('(', TokenType.LPAREN);
        this.OPERATORS.set(')', TokenType.RPAREN);
        this.OPERATORS.set('!', TokenType.EXCL);
        this.OPERATORS.set('%', TokenType.PERCENT);

        this.input = input;
        this.tokens = [];
        this.pos = 0;

        this.length = input.length;
    }

    public tokenize(): Token[] {
        while(this.pos < this.length) {
            let current = this.peek(0);
            if(Character.isDigit(current)) this.tokenizeNumber();
            else if(Character.isAlpha(current)) this.tokenizeWord();
            else if(this.OPERATOR_CHARS.includes(current)) this.tokenizeOperator();
            else this.next();
        }

        return this.tokens;
    }

    private tokenizeNumber(): void {
        let buffer = '';
        let current = this.peek(0);
        while(true) {
            if(Parser.RADIX_KW.has(current)) return this.tokenizeRadixNumber();
            if(current == '.') {
                if(buffer.includes('.')) throw new SyntaxError(`Unexpected character '.' while parsing '${buffer}.'`);
            } else if(!Character.isDigit(current)) break;

            buffer += current;
            current = this.next();
        }

        this.addToken(TokenType.NUMBER, buffer);
    }

    private tokenizeRadixNumber() {
        let buffer = '';
        let current = this.peek(0);
        while(true) {
            if(Parser.RADIX_KW.has(current)) {
                buffer += current;
                current = this.next();
                continue;
            }

            if(!Character.isHexDigit(current)) break;
            buffer += current;
            current = this.next();
        }

        this.addToken(TokenType.RADIX_NUMBER, buffer);
    }

    private tokenizeWord(): void {
        let buffer = '';
        let current = this.peek(0);
        while(true) {
            if(!Character.isDigit(current)
                && !Character.isAlpha(current)
                && !/\$_/g.test(current)) break;
            buffer += current;
            current = this.next();
        }

        this.addToken(TokenType.WORD, buffer);
    }

    private tokenizeOperator(): void {
        let current = this.peek(0);
        let buffer = '';
        while(true) {
            let text = buffer.toString();
            if(!this.OPERATORS.has(text + current) && text.length > 0) {
                this.addToken(this.OPERATORS.get(text) as TokenType);
                return;
            }

            buffer += current;
            current = this.next();
        }
    }

    private addToken(type: TokenType, value?: string): void {
        this.tokens.push(
            new Token(this.pos, type, value)
        );
    }

    private peek(relativePosition: number): string {
        let position = this.pos + relativePosition;
        if(position >= this.length) return '\0';
        return this.input.charAt(position);
    }

    private next(): string {
        this.pos++;
        return this.peek(0);
    }
}