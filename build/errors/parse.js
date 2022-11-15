"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseError = void 0;
const tokentype_1 = require("../parser/tokentype");
class ParseError extends Error {
    position;
    tokenType;
    constructor(type, position) {
        super('Failed to parse near token ' + tokentype_1.TokenType[type] + ` (pos ${position})`);
        this.position = position;
        this.tokenType = type;
    }
}
exports.ParseError = ParseError;
//# sourceMappingURL=parse.js.map