export class Constants {
    private static constants: Map<String, number> = new Map([
        [ 'PI', Math.PI ],
        [ 'E', Math.E ],
        [ 'EPI', Math.E ** Math.PI ],
        [ 'LN2', Math.LN2 ],
        [ 'LN10', Math.LN10 ],
        [ 'LOG2E', Math.LOG2E ],
        [ 'LOG10E', Math.LOG10E ],
        [ 'PHI', (Math.sqrt(5) + 1) / 2],
        [ 'PSI', (2 + Math.cbrt(116 + 12 * Math.sqrt(93)) + Math.cbrt(116 - 12 * Math.sqrt(93))) / 6 ],
        [ 'P', Math.cbrt(1 / 2 + (1 / 6) * Math.sqrt(23 / 3)) + Math.cbrt(1 / 2 - (1 / 6) * Math.sqrt(23 / 3))],
    ]);

    public static getExisting(): string[] {
        return Array.from(Constants.constants.keys()).map(x => x.toString());
    }

    public static isExists(key: string): boolean {
        return Constants.constants.has(key);
    }

    public static get(key: string): number {
        key = key.toUpperCase();
        if(!this.isExists(key)) throw new ReferenceError(`Constant "${key}" is not defined`);
        return Constants.constants.get(key);
    }
}