"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_1 = require("./parser/lexer");
const parser_1 = require("./parser/parser");
const functions_1 = require("./static/functions");
const constants_1 = require("./static/constants");
(async () => {
    console.log('[+] Total functions:', functions_1.Functions.getExisting().length);
    console.log('[+] Total constants:', constants_1.Constants.getExisting().length);
    const data = '10!! % 28';
    console.log('[!] Running expression: "' + data + '"');
    const tokens = new lexer_1.Lexer(data).tokenize();
    const ast = new parser_1.Parser(tokens).parse();
    console.log('[!] Result:', ast.eval());
})();
//# sourceMappingURL=app.js.map