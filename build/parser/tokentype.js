"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["NUMBER"] = 0] = "NUMBER";
    TokenType[TokenType["RADIX_NUMBER"] = 1] = "RADIX_NUMBER";
    TokenType[TokenType["WORD"] = 2] = "WORD";
    TokenType[TokenType["PLUS"] = 3] = "PLUS";
    TokenType[TokenType["MINUS"] = 4] = "MINUS";
    TokenType[TokenType["STAR"] = 5] = "STAR";
    TokenType[TokenType["SLASH"] = 6] = "SLASH";
    TokenType[TokenType["POWER"] = 7] = "POWER";
    TokenType[TokenType["EXCL"] = 8] = "EXCL";
    TokenType[TokenType["PERCENT"] = 9] = "PERCENT";
    TokenType[TokenType["LPAREN"] = 10] = "LPAREN";
    TokenType[TokenType["RPAREN"] = 11] = "RPAREN";
    TokenType[TokenType["COMMA"] = 12] = "COMMA";
    TokenType[TokenType["EOF"] = 13] = "EOF";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
//# sourceMappingURL=tokentype.js.map