"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const tokentype_1 = require("./tokentype");
const token_1 = require("./token");
const number_1 = require("../ast/expressions/number");
const binary_1 = require("../ast/expressions/binary");
const unary_1 = require("../ast/expressions/unary");
const functional_1 = require("../ast/expressions/functional");
const constant_1 = require("../ast/expressions/constant");
const parse_1 = require("../errors/parse");
class Parser {
    EOF = new token_1.Token(-1, tokentype_1.TokenType.EOF);
    static RADIX_KW = new Map([
        ['b', number_1.RadixType.Binary],
        ['o', number_1.RadixType.Octal],
        ['x', number_1.RadixType.Hex]
    ]);
    tokens;
    pos;
    size;
    constructor(tokens) {
        this.tokens = tokens;
        this.size = tokens.length;
        this.pos = 0;
    }
    parse() {
        return this.expression();
    }
    expression() {
        return this.additive();
    }
    additive() {
        let result = this.multiplicative();
        while (true) {
            if (this.match(tokentype_1.TokenType.PLUS)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Add, result, this.multiplicative());
                continue;
            }
            if (this.match(tokentype_1.TokenType.MINUS)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Subtract, result, this.multiplicative());
                continue;
            }
            break;
        }
        return result;
    }
    multiplicative() {
        let result = this.unary();
        while (true) {
            if (this.match(tokentype_1.TokenType.STAR)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Multiply, result, this.unary());
                continue;
            }
            if (this.match(tokentype_1.TokenType.SLASH)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Divide, result, this.unary());
                continue;
            }
            if (this.match(tokentype_1.TokenType.PERCENT)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Mod, result, this.unary());
                continue;
            }
            break;
        }
        return result;
    }
    unary() {
        if (this.match(tokentype_1.TokenType.PLUS))
            return new unary_1.UnaryExpression(unary_1.UnaryOperationType.Positive, this.powery());
        if (this.match(tokentype_1.TokenType.MINUS))
            return new unary_1.UnaryExpression(unary_1.UnaryOperationType.Negative, this.powery());
        if (this.match(tokentype_1.TokenType.EXCL))
            return new unary_1.UnaryExpression(unary_1.UnaryOperationType.SUBFACTOR, this.powery());
        return this.powery();
    }
    powery() {
        let result = this.primary();
        while (true) {
            if (this.match(tokentype_1.TokenType.POWER)) {
                result = new binary_1.BinaryExpression(binary_1.OperationType.Power, result, this.primary());
                continue;
            }
            break;
        }
        return result;
    }
    primary() {
        const current = this.get(0);
        if (this.match(tokentype_1.TokenType.RADIX_NUMBER))
            return new number_1.NumberExpression(current.getText().slice(1), Parser.RADIX_KW.get(current.getText()[0]));
        if (this.match(tokentype_1.TokenType.NUMBER)) {
            const number = new number_1.NumberExpression(current.getText(), number_1.RadixType.Dec);
            if (this.lookMatch(0, tokentype_1.TokenType.EXCL) && this.lookMatch(1, tokentype_1.TokenType.EXCL)) {
                this.consume(tokentype_1.TokenType.EXCL);
                this.consume(tokentype_1.TokenType.EXCL);
                return new unary_1.UnaryExpression(unary_1.UnaryOperationType.DFACTOR, number);
            }
            if (this.lookMatch(0, tokentype_1.TokenType.EXCL)) {
                this.consume(tokentype_1.TokenType.EXCL);
                return new unary_1.UnaryExpression(unary_1.UnaryOperationType.FACTOR, number);
            }
            return number;
        }
        if (this.lookMatch(0, tokentype_1.TokenType.WORD) && this.lookMatch(1, tokentype_1.TokenType.WORD))
            return this.function();
        if (this.match(tokentype_1.TokenType.WORD))
            return new constant_1.ConstantExpression(current.getText());
        if (this.match(tokentype_1.TokenType.LPAREN)) {
            const result = this.expression();
            this.match(tokentype_1.TokenType.RPAREN);
            return result;
        }
        throw new parse_1.ParseError(current.getType(), current.index);
    }
    function() {
        const name = this.consume(tokentype_1.TokenType.WORD).getText();
        this.consume(tokentype_1.TokenType.LPAREN);
        let fn = new functional_1.FunctionalExpression(name);
        while (!this.match(tokentype_1.TokenType.RPAREN)) {
            fn.addArgument(this.expression());
            this.match(tokentype_1.TokenType.COMMA);
        }
        return fn;
    }
    consume(type) {
        let current = this.get(0);
        if (current.getType() != type)
            throw new SyntaxError(`Unexpected token ${tokentype_1.TokenType[current.getType()]}, expected ${tokentype_1.TokenType[type]}`);
        this.pos++;
        return current;
    }
    lookMatch(relativePosition, type) {
        return this.get(relativePosition).getType() == type;
    }
    match(type) {
        let current = this.get(0);
        let matches = current.getType() == type;
        if (matches)
            this.pos++;
        return matches;
    }
    get(relativePosition) {
        let position = this.pos + relativePosition;
        if (position >= this.size)
            return this.EOF;
        return this.tokens[position];
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map