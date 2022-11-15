import { TokenType } from './tokentype';

export class Token {
    private type: TokenType;
    private text: string;
    public index: number;

    public constructor(index: number, type?: TokenType, text?: string) {
        this.type = type ?? TokenType.EOF;
        this.text = text ?? '';
        this.index = index;
    }

    public getType(): TokenType {
        return this.type;
    }

    public setType(type: TokenType): void {
        this.type = type;
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
    }
}