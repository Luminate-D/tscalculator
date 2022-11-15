export class UnknownFunctionError extends Error {
    public readonly name: string;
    public constructor(name: string) {
        super('Unknown function: ' + name);
        this.name = name;
    }
}