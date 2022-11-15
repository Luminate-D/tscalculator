"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const tokentype_1 = require("./tokentype");
class Token {
    type;
    text;
    index;
    constructor(index, type, text) {
        this.type = type ?? tokentype_1.TokenType.EOF;
        this.text = text ?? '';
        this.index = index;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getText() {
        return this.text;
    }
    setText(text) {
        this.text = text;
    }
}
exports.Token = Token;
//# sourceMappingURL=token.js.map