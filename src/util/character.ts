export class Character {
    public static isDigit(char: string): boolean {
        let num = parseInt(char);
        return !isNaN(num) && isFinite(num);
    }

    public static isHexDigit(char: string): boolean {
        return /[A-Fa-f0-9]/g.test(char);
    }

    public static isAlpha(char: string): boolean {
        return /[A-Za-zА-Яа-я]+/g.test(char);
    }
}