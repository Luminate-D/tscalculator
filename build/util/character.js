"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    static isDigit(char) {
        let num = parseInt(char);
        return !isNaN(num) && isFinite(num);
    }
    static isHexDigit(char) {
        return /[A-Fa-f0-9]/g.test(char);
    }
    static isAlpha(char) {
        return /[A-Za-zА-Яа-я]+/g.test(char);
    }
}
exports.Character = Character;
//# sourceMappingURL=character.js.map