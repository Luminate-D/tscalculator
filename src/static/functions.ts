export class Functions {
    private static functions: Map<String, Function> = new Map<String, Function>([
        [ 'sin', (num: number) => Math.sin(num) ],
        [ 'cos', (num: number) => Math.cos(num) ],

        [ 'tg', (num: number) => Math.tan(num) ],
        [ 'tan', (num: number) => Math.tan(num) ],
        [ 'ctg', (num: number) => Math.cos(num) / Math.sin(num) ],
        [ 'cotan', (num: number) => Math.cos(num) / Math.sin(num) ],


        [ 'sec', (num: number) => 1 / Math.sin(num) ],
        [ 'sc', (num: number) => 1 / Math.sin(num) ],
        [ 'csc', (num: number) => 1 / Math.cos(num) ],
        [ 'cosec', (num: number) => 1 / Math.cos(num) ],

        [ 'sinh', (num: number) => Math.sinh(num) ],
        [ 'cosh', (num: number) => Math.cosh(num) ],

        [ 'th', (num: number) => Math.tanh(num) ],
        [ 'tanh', (num: number) => Math.tanh(num) ],
        [ 'cth', (num: number) => 1 / Math.tanh(num) ],
        [ 'coth', (num: number) => 1 / Math.tanh(num) ],
        [ 'sech', (num: number) => 1 / Math.sinh(num) ],
        [ 'sch', (num: number) => 1 / Math.sinh(num) ],
        [ 'csch', (num: number) => 1 / Math.cosh(num) ],
        [ 'cosech', (num: number) => 1 / Math.cosh(num) ],

        [ 'asin', (num: number) => Math.asin(num) ],
        [ 'acos', (num: number) => Math.acos(num) ],
        [ 'asinh', (num: number) => Math.asinh(num) ],
        [ 'acosh', (num: number) => Math.acosh(num) ],

        [ 'versin', (num: number) => 1 - Math.cos(num) ],
        [ 'exp', (num: number) => Math.exp(num) ],
        [ 'gd', (num: number) => Math.asin(Math.tanh(num)) ],

        [ 'floor', (num: number) => Math.floor(num) ],
        [ 'ceil', (num: number) => Math.ceil(num) ],
        [ 'round', (num: number) => Math.round(num) ],
        [ 'abs', (num: number) => Math.abs(num) ],

        [ 'sqrt', (num: number) => Math.sqrt(num) ],
        [ 'crt', (num: number) => Math.cbrt(num) ],
        [ 'cbrt', (num: number) => Math.cbrt(num) ],

        [ 'log', (num: number) => Math.log(num) ],
        [ 'log2', (num: number) => Math.log2(num) ],
        [ 'log10', (num: number) => Math.log10(num) ],
        [ 'log1p', (num: number) => Math.log1p(num) ],

        [ 'trunc', (num: number) => Math.trunc(num) ],

        [ 'random', () => Math.random() ]
    ]);

    public static getExisting(): string[] {
        return Array.from(Functions.functions.keys()).map(x => x.toString());
    }

    public static isExists(key: string): boolean {
        return Functions.functions.has(key);
    }

    public static get(key: string): Function {
        if(!this.isExists(key)) throw new ReferenceError(`Function "${key}" is not defined`);
        return Functions.functions.get(key) as Function;
    }
}