"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
const token_1 = require("./token");
const tokentype_1 = require("./tokentype");
const character_1 = require("../util/character");
const parser_1 = require("./parser");
class Lexer {
    OPERATOR_CHARS;
    OPERATORS;
    input;
    tokens;
    pos;
    length;
    constructor(input) {
        this.OPERATOR_CHARS = "+-*/^()!%";
        this.OPERATORS = new Map();
        this.OPERATORS.set('+', tokentype_1.TokenType.PLUS);
        this.OPERATORS.set('-', tokentype_1.TokenType.MINUS);
        this.OPERATORS.set('*', tokentype_1.TokenType.STAR);
        this.OPERATORS.set('/', tokentype_1.TokenType.SLASH);
        this.OPERATORS.set('^', tokentype_1.TokenType.POWER);
        this.OPERATORS.set('(', tokentype_1.TokenType.LPAREN);
        this.OPERATORS.set(')', tokentype_1.TokenType.RPAREN);
        this.OPERATORS.set('!', tokentype_1.TokenType.EXCL);
        this.OPERATORS.set('%', tokentype_1.TokenType.PERCENT);
        this.input = input;
        this.tokens = [];
        this.pos = 0;
        this.length = input.length;
    }
    tokenize() {
        while (this.pos < this.length) {
            let current = this.peek(0);
            if (character_1.Character.isDigit(current))
                this.tokenizeNumber();
            else if (character_1.Character.isAlpha(current))
                this.tokenizeWord();
            else if (this.OPERATOR_CHARS.includes(current))
                this.tokenizeOperator();
            else
                this.next();
        }
        return this.tokens;
    }
    tokenizeNumber() {
        let buffer = '';
        let current = this.peek(0);
        while (true) {
            if (parser_1.Parser.RADIX_KW.has(current))
                return this.tokenizeRadixNumber();
            if (current == '.') {
                if (buffer.includes('.'))
                    throw new SyntaxError(`Unexpected character '.' while parsing '${buffer}.'`);
            }
            else if (!character_1.Character.isDigit(current))
                break;
            buffer += current;
            current = this.next();
        }
        this.addToken(tokentype_1.TokenType.NUMBER, buffer);
    }
    tokenizeRadixNumber() {
        let buffer = '';
        let current = this.peek(0);
        while (true) {
            if (parser_1.Parser.RADIX_KW.has(current)) {
                buffer += current;
                current = this.next();
                continue;
            }
            if (!character_1.Character.isHexDigit(current))
                break;
            buffer += current;
            current = this.next();
        }
        this.addToken(tokentype_1.TokenType.RADIX_NUMBER, buffer);
    }
    tokenizeWord() {
        let buffer = '';
        let current = this.peek(0);
        while (true) {
            if (!character_1.Character.isDigit(current)
                && !character_1.Character.isAlpha(current)
                && !/\$_/g.test(current))
                break;
            buffer += current;
            current = this.next();
        }
        this.addToken(tokentype_1.TokenType.WORD, buffer);
    }
    tokenizeOperator() {
        let current = this.peek(0);
        let buffer = '';
        while (true) {
            let text = buffer.toString();
            if (!this.OPERATORS.has(text + current) && text.length > 0) {
                this.addToken(this.OPERATORS.get(text));
                return;
            }
            buffer += current;
            current = this.next();
        }
    }
    addToken(type, value) {
        this.tokens.push(new token_1.Token(this.pos, type, value));
    }
    peek(relativePosition) {
        let position = this.pos + relativePosition;
        if (position >= this.length)
            return '\0';
        return this.input.charAt(position);
    }
    next() {
        this.pos++;
        return this.peek(0);
    }
}
exports.Lexer = Lexer;
//# sourceMappingURL=lexer.js.map