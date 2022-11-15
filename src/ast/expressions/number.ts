import { Expression } from '../expression';

export enum RadixType {
    Binary, Octal, Dec, Hex
}

export class NumberExpression implements Expression {
    private readonly value: string;
    private readonly radix: RadixType;

    public constructor(value: string, radix: RadixType) {
        this.value = value;
        this.radix = radix;
    }

    public eval() {
        switch(this.radix) {
            case RadixType.Binary: return parseInt(this.value.toString(), 2);
            case RadixType.Octal: return parseInt(this.value.toString(), 8);
            case RadixType.Hex: return parseInt(this.value.toString(), 16);
            case RadixType.Dec: return parseFloat(this.value);
        }
    }
}