import { Token } from './src/parser/token';
import { Expression } from './src/ast/expression';
import { TokenType } from './src/parser/tokentype';

export class Lexer {
    public constructor(input: string);
    public tokenize(): Token[];
}

export class Parser {
    public constructor(tokens: Token[]);
    public parse(): Expression;
}

export class ParseError {
    public readonly position: number;
    public readonly tokenType: TokenType;
}