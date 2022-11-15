export class UnknownConstantError extends Error {
    public readonly name: string;
    public constructor(name: string) {
        super('Unknown constant: ' + name);
        this.name = name;
    }
}