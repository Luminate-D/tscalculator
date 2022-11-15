"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseError = exports.Parser = exports.Lexer = void 0;
const parser_1 = require("./parser/parser");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return parser_1.Parser; } });
const lexer_1 = require("./parser/lexer");
Object.defineProperty(exports, "Lexer", { enumerable: true, get: function () { return lexer_1.Lexer; } });
const parse_1 = require("./errors/parse");
Object.defineProperty(exports, "ParseError", { enumerable: true, get: function () { return parse_1.ParseError; } });
//# sourceMappingURL=module.js.map