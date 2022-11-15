import { UnknownConstantError } from '../errors/unknownconstant';

export class Constants {
    private static constants: Map<String, number> = new Map([
        [ 'pi', Math.PI ],
        [ 'e', Math.E ],
        [ 'epi', Math.E ** Math.PI ],
        [ 'ln2', Math.LN2 ],
        [ 'ln10', Math.LN10 ],
        [ 'log2e', Math.LOG2E ],
        [ 'log10e', Math.LOG10E ],
        [ 'phi', (Math.sqrt(5) + 1) / 2],
        [ 'psi', (2 + Math.cbrt(116 + 12 * Math.sqrt(93)) + Math.cbrt(116 - 12 * Math.sqrt(93))) / 6 ],
        [ 'p', Math.cbrt(1 / 2 + (1 / 6) * Math.sqrt(23 / 3)) + Math.cbrt(1 / 2 - (1 / 6) * Math.sqrt(23 / 3))],
    ]);

    public static register(name: string, value: number) {
        Constants.constants.set(name, value);
    }

    public static getExisting(): string[] {
        return Array.from(Constants.constants.keys()).map(x => x.toString());
    }

    public static isExists(key: string): boolean {
        return Constants.constants.has(key.toLowerCase());
    }

    public static get(key: string): number {
        key = key.toLowerCase();
        if(!this.isExists(key)) throw new UnknownConstantError(key);
        return Constants.constants.get(key);
    }
}