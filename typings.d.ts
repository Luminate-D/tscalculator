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

export class ParseError extends Error {
    public readonly position: number;
    public readonly tokenType: TokenType;
}

export class UnknownConstantError extends Error {
    public readonly name: string;
}

export class UnknownFunctionError extends Error {
    public readonly name: string;
}

export type CalculatorError = UnknownConstantError | UnknownFunctionError | ParseError;