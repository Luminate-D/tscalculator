export class Character {
    public static isDigit(char: string): boolean {
        let num = parseInt(char);
        return !isNaN(num) && isFinite(num);
    }

    public static isRadixDigit(char: string, radix: string): boolean {
        if(radix == 'b') return /[01]/g.test(char);
        if(radix == 'o') return /[0-7]/g.test(char);
        if(radix == 'x') return /[A-Fa-f0-9]/g.test(char);
        return /[0-9]/g.test(char);
    }

    public static isAlpha(char: string): boolean {
        return /[A-Za-zА-Яа-я]+/g.test(char);
    }
}